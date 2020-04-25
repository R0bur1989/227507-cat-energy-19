var menu = document.querySelector(".main-menu");
var menuToggle = document.querySelector(".main-menu__toggle");

menu.classList.remove("main-menu--nojs");

menuToggle.addEventListener('click', function(evt){
  evt.preventDefault;
  menu.classList.toggle("main-menu--opened");
})
