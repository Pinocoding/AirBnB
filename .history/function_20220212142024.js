var navBar = document.getElementById("navBar");
// var navLinks = document.querySelectorAll(".navtag");
var navLinks = document.getElementsByClassName("navtag");
var menuIcon = document.querySelector(".menuIcon");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};
for (var i = 0; i < navLinks.length - 1; i++) {
    var blem = navLinks[i];
}