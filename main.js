const menuBtn = document.getElementById("menu-btn");
const navLink = document.getElementById("nav-link");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click",(e) =>{
    navLink.classList.toggle("open");

    const isOpen = navLink.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen ? "ri-close-line" : "ri-menu-line");
});

navLink.addEventListener("click",(e) => {
    navLink.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-line");
});

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".header_btn", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".destination_card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".showcase_image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".showcase_content h4", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".showcase_content p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".showcase_btn", {
    ...scrollRevealOption,
    delay: 1500,
  });
  ScrollReveal().reveal(".banner_card", {
    ...scrollRevealOption,
    interval: 500,
  });
  ScrollReveal().reveal(".discover_card", {
    ...scrollRevealOption,
    interval: 500,
  });
  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
  });