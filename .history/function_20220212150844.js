var navBar = document.getElementById("navBar");
var navLinks = document.getElementsByClassName("navtag");
var menuIcon = document.querySelector(".menuIcon");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};
console.log(navLinks);
navLinks.onmouseout = function() {
    for (var i = 0; i <= navLinks.length; i++) {
        navLinks[i].style.color = red;
        // console.log(navLinks[i]);
    }
};