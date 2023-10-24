// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika MENU KAMI di klik
document.querySelector("#menu-kami").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar slidebar untuk menghilangkan nav
const menu = document.querySelector("menu-kami");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
