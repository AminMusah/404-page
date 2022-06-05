const nav = document.querySelector(".nav-menu");
const toggle = document.querySelector(".nav-close");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
