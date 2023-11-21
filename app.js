let button = document.getElementById('mybutton');
let alertBtn = document.getElementById('alertBtn');
let alertBox = document.getElementById('alertBox');

button.addEventListener('click', function(e) {
console.log(e);

})

alertBtn.addEventListener('click', function(e) {
    alertBox.classList.toggle('show');
})
    