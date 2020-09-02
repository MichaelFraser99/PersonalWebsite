
function fade(element) {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= 0.1;
  }, 50);
}

function unfade(element) {
  var op = 0.1;  // initial opacity
  element.style.display = 'block';
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
  }, 10);
}

function openNavigation() {
  navigation = document.getElementById("navigationMain");
  navigationBurger = document.getElementById("navigationBurger");

  if (navigationBurger.checked) {
    unfade(navigation);
  } else {
    fade(navigation);
  }
}

function setEventListeners() {
  navigationBurger = document.getElementById("navigationBurger");
  navigationBurger.addEventListener('click', openNavigation);
  console.log("ran");
}

function loadFunction() {
  setEventListeners();
}

document.addEventListener("DOMContentLoaded", loadFunction);