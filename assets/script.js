document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const mobileNav = document.getElementById("mobileNav");
  const closeNav = document.getElementById("closeNav");
  const navLinks = document.querySelectorAll(".mobile-nav-links a");

  if (!menuBtn || !mobileNav || !closeNav) return;

  // Open modal
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.add("active");
  });

  // Close modal (button)
  closeNav.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });

  // Close modal when clicking any link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  });
});
