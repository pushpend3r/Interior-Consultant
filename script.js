let navToggler = document.getElementById("nav-toggler");
let NavLinks = document.querySelector(".nav-links");

navToggler.addEventListener("click", function () {
  if (NavLinks.classList.contains("mobile")) {
    NavLinks.classList.remove("mobile");
    navToggler.src = `./Assets/menu.svg`;
    document.querySelector("body").style.overflowY = "auto";
  } else {
    NavLinks.classList.add("mobile");
    navToggler.src = `./Assets/close.svg`;
    document.querySelector("body").style.overflowY = "hidden";
  }
});
