var buyButton = [].slice.call(document.querySelectorAll(".buy"));
var basketPopup = document.querySelector(".modal");


buyButton.forEach(function(element) {
  element.addEventListener("click", function(evt) {
    evt.preventDefault();
    basketPopup.classList.add("modal-show");
  });
});
