
let alertBtn = document.getElementById('alertBtn');
let alertBox = document.getElementById('alertBox');
let userProfile = document.getElementById('userProfile');
let userProfileAlert = document.getElementById('userProfileAlert')


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




let currentIconIndex = 0;
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
let animationInterval;

function toggleIcon() {
  const iconContainer = document.querySelector('.icon-container');
  if (currentIconIndex < icons.length) {
    iconContainer.innerHTML = icons[currentIconIndex];
    console.log('hello');
  } else {
    const icons2Index = currentIconIndex - icons.length;
    iconContainer.innerHTML = icons2[icons2Index];
    console.log('hello2');
  }
  currentIconIndex = (currentIconIndex + 1) % (icons.length + icons2.length);

  if (currentIconIndex === icons.length + icons2.length - 1) {
    // If the last icon is reached, reset to the first icon
    clearInterval(animationInterval);
    iconContainer.addEventListener('click', resetToDefault, { once: true });
  }
}

function resetToDefault() {
  currentIconIndex = 0;
  const iconContainer = document.querySelector('.icon-container');
  iconContainer.innerHTML = icons[currentIconIndex];
  iconContainer.removeEventListener('click', resetToDefault);

  // Clear the animation interval
  clearInterval(animationInterval);

  // Call toggleIcon once to display the default icon immediately
  toggleIcon();
}

document.querySelector('.icon-container').addEventListener('click', function () {
  clearInterval(animationInterval);
  animationInterval = setInterval(toggleIcon, 50);
});

// Initial call to display the default icon
resetToDefault();
