
let alertBtn = document.getElementById('alertBtn');
let alertBox = document.getElementById('alertBox');
let userProfile = document.getElementById('userProfile');
let userProfileAlert = document.getElementById('userProfileAlert')
let heroid = document.getElementById('heroid');
let cancelhero = document.getElementById('cancelhero');
let cancelhero2 = document.getElementById('cancelhero2')

function closeAlertBox() {
    alertBox.classList.remove('show');
    userProfileAlert.classList.remove('show');
};

alertBtn.addEventListener('click', function(e) {
    alertBox.classList.toggle('show');

    e.stopPropagation();
});

userProfile.addEventListener('click', function(e){
userProfileAlert.classList.toggle('show')

e.stopPropagation();

});

window.addEventListener('click', function(){
    closeAlertBox();
})

cancelhero.addEventListener('click', function() {
  heroid.style.display = 'none';
})

cancelhero.addEventListener('click', function() {
  heroid.style.display = 'none';
})



let slider = document.getElementById("range");
let output = document.getElementById("demo");
let iconContainerCount = 0; // Variable to keep track of the count of icon-container elements clicked

output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

let currentIconIndexes = {};
const icons = [
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#D9D9D9" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11.9996 2C13.9774 2 15.9108 2.58649 17.5553 3.6853C19.1998 4.78412 20.4816 6.3459 21.2384 8.17316C21.9953 10.0004 22.1933 12.0111 21.8075 13.9509C21.4216 15.8907 20.4692 17.6725 19.0707 19.0711C17.6722 20.4696 15.8903 21.422 13.9505 21.8079C12.0107 22.1937 10.0001 21.9957 8.1728 21.2388C6.34554 20.4819 4.78375 19.2002 3.68494 17.5557C2.58612 15.9112 1.99963 13.9778 1.99963 12" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18" fill="none" style="background-color: #000; border-radius: 50%;"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8163 5.64149C14.0604 5.88557 14.0604 6.2813 13.8163 6.52538L8.39966 11.942C8.15559 12.1861 7.75986 12.1861 7.51578 11.942L4.80745 9.23371C4.56337 8.98963 4.56337 8.5939 4.80745 8.34983C5.05153 8.10575 5.44725 8.10575 5.69133 8.34983L7.95772 10.6162L12.9324 5.64149C13.1765 5.39742 13.5723 5.39742 13.8163 5.64149Z" fill="white"/></svg>'
];

const icons2 = [
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"/></svg>',
];

let animationIntervals = {};

function toggleIcon(container) {
  const heroId = container.getAttribute("data-hero-id");

  if (!currentIconIndexes[heroId]) {
    currentIconIndexes[heroId] = 0;
  }

  if (currentIconIndexes[heroId] < icons.length) {
    container.innerHTML = icons[currentIconIndexes[heroId]];
  } else {
    const icons2Index = currentIconIndexes[heroId] - icons.length;
    container.innerHTML = icons2[icons2Index];
  }

  currentIconIndexes[heroId] =
    (currentIconIndexes[heroId] + 1) % (icons.length + icons2.length);

  if (currentIconIndexes[heroId] === icons.length + icons2.length - 1) {
    clearInterval(animationIntervals[heroId]);
    container.addEventListener("click", () => resetToDefault(heroId), {
      once: true,
    });

    // Update range slider value and count when icon-container is clicked
    iconContainerCount++;
    container.classList.add("clicked"); // Add the 'clicked' class
    updateSlider();
  }

  // Stop the click event propagation
  container.addEventListener('click', (event) => {
    event.stopPropagation();
  });
}

function resetToDefault(heroId) {
  currentIconIndexes[heroId] = 0;
  const container = document.querySelector(
    `.icon-container[data-hero-id="${heroId}"]`
  );
  container.innerHTML = icons[currentIconIndexes[heroId]];
  container.removeEventListener("click", () => resetToDefault(heroId));

  // Clear the animation interval
  clearInterval(animationIntervals[heroId]);

  // Call toggleIcon once to display the default icon immediately
  toggleIcon(container);

  // Update range slider value and count when icon-container is reset to default
  iconContainerCount--;
  container.classList.remove("clicked"); // Remove the 'clicked' class
  updateSlider();
}

function updateSlider() {
  const clickedIconsCount = document.querySelectorAll(".icon-container.clicked")
    .length;
  const notClickedIconsCount = iconContainerCount - clickedIconsCount;

  // Update range slider value and count based on clicked and not clicked icons
  slider.value = clickedIconsCount;
  output.innerHTML = `${slider.value}/5`;

  // Optionally, you can also update based on not clicked icons
  // slider.value = notClickedIconsCount;
  // output.innerHTML = `${slider.value}/5`;
}

document.querySelectorAll(".icon-container").forEach((container) => {
  const heroId = container.getAttribute("data-hero-id");
  container.addEventListener("click", () => {
    clearInterval(animationIntervals[heroId]);
    animationIntervals[heroId] = setInterval(() => toggleIcon(container), 50);
  });

  // Initial call to display the default icon for each hero content
  resetToDefault(heroId);
});







const items = document.querySelectorAll(".accordion button");
const arrowDown = document.querySelector(".arrowDown");
const subHeader = document.querySelector(".sub__header");
const accordionContainer = document.querySelector(".accordion");
const range = document.querySelector("#range");
const accordionContent = document.querySelectorAll(".accordion-item");

range.value = "2";
let isOpen = false;

function toggleAccordionContainer() {
  isOpen = !isOpen;
  const arrowIcon = `
<img
  src="${
    isOpen
      ? "https://crushingit.tech/hackathon-assets/icon-arrow-up.svg"
      : "https://crushingit.tech/hackathon-assets/icon-arrow-down.svg"
  }"
  alt="arrowDown"
/>`;

  arrowDown.innerHTML = arrowIcon;

  // Toggle the display property of the accordion container
  accordionContainer.style.display = isOpen ? "block" : "none";
}

function toggleAccordion(e) {
  const itemToggle = this.getAttribute("aria-expanded");

  // If the clicked item is already expanded, collapse it
  if (itemToggle === "true") {
    this.setAttribute("aria-expanded", "false");
    this.parentElement.classList.remove("active");
  } else {
    // If the clicked item is not expanded, expand it and collapse others
    items.forEach((item) => {
      item.setAttribute("aria-expanded", "false");
      item.parentElement.classList.remove("active");
    });

    this.setAttribute("aria-expanded", "true");
    this.parentElement.classList.add("active");
  }
}
// Initially hide the accordion container
accordionContainer.style.display = "none";

items.forEach((item) => item.addEventListener("click", toggleAccordion));
subHeader.addEventListener("click", toggleAccordionContainer);


