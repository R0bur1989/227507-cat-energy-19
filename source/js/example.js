var before = document.querySelector(".example__button-before");
var after = document.querySelector(".example__button-after");
var imageBefore = document.querySelector(".example__image--before");
var imageAfter = document.querySelector(".example__image--after");

before.addEventListener("click", function(evt){
  evt.preventDefault();
  imageAfter.style.clip = "rect(0, 0, 0, 0)";
  imageBefore.style.clip = "rect(auto, auto, auto, auto)";
})


after.addEventListener("click", function(evt){
  evt.preventDefault();
  imageAfter.style.clip = "rect(auto, auto, auto, auto)";
  imageBefore.style.clip = "rect(0, 0, 0, 0)";
})
