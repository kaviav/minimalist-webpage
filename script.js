"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btncloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.remove("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
btncloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
