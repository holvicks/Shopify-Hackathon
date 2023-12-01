"use strict";

// DOM elements
const alertBtn = document.getElementById('alertBtn');
const alertBox = document.getElementById('alertBox');
const userProfile = document.getElementById('userProfile');
const userProfileAlert = document.getElementById('userProfileAlert');
const closePlan = document.getElementById('closePlan');
const heroPlan = document.querySelector('.hero');
const mainMenu = document.querySelector(".main-menu");
const closeMenu = document.querySelector("#closeMenu");
const menuItems = document.querySelectorAll(".menu-item");
const menuCheck = document.querySelectorAll(".check");

// Progress tracking
let progressCount = 0;

// Function to close the alert box
function closeAlertBox() {
    alertBox.classList.remove('show');
}

// Function to close the user profile alert
function closeUserProfileAlert() {
    userProfileAlert.classList.remove('show');
}

// Event listener for the alert button
alertBtn.addEventListener('click', function (e) {
    if (alertBox.classList.contains('show')) {
        closeAlertBox();
    } else {
        closeUserProfileAlert();
        alertBox.classList.toggle('show');
    }
    e.stopPropagation();
});

// Event listener for the Escape key to close the alert box
document.addEventListener("keydown", function(e){
    if(e.key==="Escape"){
        closeAlertBox();
    }
});

// Event listener for the Space key (currently commented out)
document.addEventListener("keydown",function(e){
    if(e.key===" "){
        // searchInput.focus()
        searchInput.onfocus();
    }
});

// Event listener for the user profile click
userProfile.addEventListener('click', function (e) {
    if (userProfileAlert.classList.contains('show')) {
        closeUserProfileAlert();
    } else {
        closeAlertBox();
        userProfileAlert.classList.toggle('show');
    }
    console.log('userprofile');
    e.stopPropagation();
});

// Event listener to close the alert box on window click
window.addEventListener('click', function(){
    closeAlertBox();
});

// Event listener for closing the hero plan
closePlan.addEventListener("click", () => {
    heroPlan.classList.add('fadeOut');
    setTimeout(() => {
        heroPlan.style.display = "none";
    }, 1000); 
});

// Event listeners for checkbox interaction and progress tracking
menuCheck.forEach((checkBtn) => {
    let checked = false;
    checkBtn.addEventListener("click", () => {
        if (!checked) {
            checked = true;
            progressCount++;
            document.getElementById("completedTask").textContent =
                progressCount;
            document.querySelector(".progress").style.width =
                (100 / 5) * progressCount + "%";
            checkBtn.firstElementChild.setAttribute(
                "src",
                "https://crushingit.tech/hackathon-assets/icon-spinner.svg"
            );
            checkBtn.firstElementChild.style.filter = "invert(100%)";
            checkBtn.setAttribute("aria-checked", true);
            setTimeout(() => {
                checkBtn.firstElementChild.setAttribute(
                    "src",
                    "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg"
                );
                checkBtn.firstElementChild.style.filter = "invert(0)";
            }, 300);
        } else if (checked) {
            progressCount--;
            checkBtn.setAttribute("aria-checked", false);
            document.getElementById("completedTask").textContent =
                progressCount;
            document.querySelector(".progress").style.width =
                (100 / 5) * progressCount + "%";
            checkBtn.firstElementChild.style.filter = "invert(100%)";
            checkBtn.firstElementChild.setAttribute(
                "src",
                "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg"
            );
            checked = false;
        }
    });
});

// Event listener for menu item selection
menuItems.forEach((menuitem, _, menuitems) => {
    menuitem.addEventListener("click", () => {
        menuitems.forEach((item) => {
            item.classList.remove("item--active");
        });
        menuitem.classList.add("item--active");
    });
});

// Event listener for toggling the menu display
let openMenu = false;
closeMenu.addEventListener("click", function () {
    if (!openMenu) {
        document.querySelector(".accordion").style.display = "block";
        closeMenu.querySelector("img").src =
            "https://crushingit.tech/hackathon-assets/icon-arrow-up.svg";
        openMenu = true;
    } else {
        document.querySelector(".accordion").style.display = "none";
        closeMenu.querySelector("img").src =
            "https://crushingit.tech/hackathon-assets/icon-arrow-down.svg";
        openMenu = false;
    }
});
