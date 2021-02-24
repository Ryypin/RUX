let burger = document.querySelector("#burger");
let nav = document.querySelector("#nav");
let menu = document.querySelector("#menu");

function change() {
    burger.classList.toggle("change");
    menu.classList.toggle("menu__burger");
    nav.classList.toggle("nav__none");
  }

burger.addEventListener("click", change);