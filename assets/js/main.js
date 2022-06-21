"use strict";

// navbar btn
const navbar = document.querySelector(".navbar");
const navbarBTN = document.querySelector(".navbar-btn");

navbarBTN.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

// nav btns click
const navItemsContainer = document.querySelector(".navbar");
const navItems = document.querySelectorAll(".nav-item");

navItemsContainer.addEventListener("click", function (e) {
  const el = e.target.closest(".nav-item");
  console.log(el);
  if (!el) return;

  navItems.forEach((item) => {
    item.classList.remove("active");
  });
  el.classList.add("active");
  navItemsContainer.classList.remove("active");
});

// header fixed
const header = document.querySelector("#main-header");
window.addEventListener("scroll", function (e) {
  if (this.window.pageYOffset > 100) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
/* 
const headerCon = document.querySelector("#main-header .container");

const headerObsorver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    console.log(entry);

    if (entry.isIntersecting) {
      headerCon.classList.remove("fixed");
    } else {
      headerCon.classList.add("fixed");
    }
  },
  {
    root: null,
    rootMargin: `0px`,
    threshold: 1.0,
  }
);

headerObsorver.observe(header); */
