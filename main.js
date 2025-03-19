
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const closeMenu = document.getElementById("closeMenu");
  const mobileNav = document.getElementById("mobileNav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

  // Open mobile menu
  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.add("active");
    document.body.style.overflow = "hidden"; 
  });

  // Close mobile menu
  closeMenu.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    document.body.style.overflow = ""; 
  });

  // Close mobile menu when clicking on a link
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      document.body.style.overflow = ""; 
    });
  });

  // Add animation classes with delay for a staggered effect
  const animateElements = document.querySelectorAll(".fade-in, .slide-up");
  animateElements.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, 300 * index);
  });
});
