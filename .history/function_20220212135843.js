var navBar = document.getElementById("navBar");
var navLinks = document.getElementById("nav-links");
var menuIcon = document.querySelector(".menuIcon");
console.log(navBar);
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};