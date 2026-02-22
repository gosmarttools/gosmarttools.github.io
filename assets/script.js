document.addEventListener("DOMContentLoaded", function(){

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.getElementById("navLinks");
  const navItems = document.querySelectorAll(".nav-links a");

  // Toggle menu
  hamburger.addEventListener("click", function(){
    navLinks.classList.toggle("active");
  });

  // Auto close after click (mobile UX)
  navItems.forEach(function(link){
    link.addEventListener("click", function(){
      navLinks.classList.remove("active");
    });
  });

});
