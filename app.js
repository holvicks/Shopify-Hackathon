"use strict";
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

let progressCount = 0;




function closeAlertBox() {
    alertBox.classList.remove('show');
};
function closeUserProfileAlert() {
  userProfileAlert.classList.remove('show');
}

alertBtn.addEventListener('click', function (e) {
  if (alertBox.classList.contains('show')) {
    closeAlertBox();
  } else {
    closeUserProfileAlert();
    alertBox.classList.toggle('show');
  }
  e.stopPropagation();
});
document.addEventListener("keydown", function(e){
  if(e.key==="Escape"){
    closeAlertBox()
  }
})
document.addEventListener("keydown",function(e){
  if(e.key===" "){
    // searchInput.focus()
    searchInput.onfocus()
  }
})
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

window.addEventListener('click', function(){
    closeAlertBox();
})


closePlan.addEventListener("click", () => {

	heroPlan.classList.add('fadeOut');
  
	setTimeout(() => {
	  heroPlan.style.display = "none";

	}, 1000); 
  });

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

menuItems.forEach((menuitem, _, menuitems) => {
	menuitem.addEventListener("click", () => {
		menuitems.forEach((item) => {
			item.classList.remove("item--active");
		});
		menuitem.classList.add("item--active");
	});
});

let openMenu = false;

closeMenu.addEventListener("click", function () {
	if (!openMenu) {
		document.querySelector(".accordion").style.display = "block";
		closeMenu.querySelector("img").src =
			"https://crushingit.tech/hackathon-assets/icon-arrow-up.svg";
		openMenu = true;
		console.log('hello')
	} else {
		document.querySelector(".accordion").style.display = "none";
		closeMenu.querySelector("img").src =
			"https://crushingit.tech/hackathon-assets/icon-arrow-down.svg";
		openMenu = false;
	}
});

