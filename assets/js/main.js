"use strict";

// navbar btn
const navbar = document.querySelector(".navbar");
const navbarBTN = document.querySelector(".navbar-btn");

navbarBTN.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

// header fixed
const header = document.querySelector("#main-header");
const headerCon = document.querySelector("#main-header .container");

const headerObsorver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      headerCon.classList.add("fixed");
    } else {
      headerCon.classList.remove("fixed");
    }
  },
  {
    root: null,
    rootMargin: `${header.offsetHeight * -1}px`,
    threshold: 1.0,
  }
);

headerObsorver.observe(header);
