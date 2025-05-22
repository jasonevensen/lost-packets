// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    document.addEventListener("click", (e) => {
  const isClickInsideMenu = menuToggle.contains(e.target) || navLinks.contains(e.target);
  const isMenuOpen = navLinks.classList.contains("show");

//only run if both elements exist
  if (!isClickInsideMenu && isMenuOpen) {
    navLinks.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", false);
    document.body.classList.remove("no-scroll");
  }
});
  });
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  const expanded = navLinks.classList.contains("show");
  menuToggle.setAttribute("aria-expanded", expanded);
});

  menuToggle.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      menuToggle.click();
    }
  });

//Add support for keyboard
toggle.addEventListener("keydown", function (e) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggle.click();
  }
});

