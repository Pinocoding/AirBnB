var navBar = document.getElementById("navBar");
var menuIcon = document.querySelector(".menuIcon");
var modeToggle = document.querySelector(".switch");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};
modeToggle.onclick = function() {
    console.log(modeToggle);
    modeToggle.classList.toggle("dark");
};