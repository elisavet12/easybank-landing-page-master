var burger = document.querySelector("button.burger");
var close = document.querySelector("button.close");
var nav = document.querySelector("nav.nav--main");
var veil = document.querySelector("div.veil");
var body = document.querySelector("body");

function openMenu() {
  burger.style.display = "none";
  close.style.display = "block";
  nav.classList.add("nav--open");
  veil.classList.add("veil--open");
  veil.style.display = "block";
  body.classList.add("noScroll");
}

function closeMenu() {
  nav.classList.remove("nav--open");
  burger.style.display = "block";
  close.style.display = "none";
  veil.classList.remove("veil--open");
  veil.style.display = "none";
  body.classList.remove("noScroll");
}

burger.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);
