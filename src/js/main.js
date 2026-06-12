import { initNavbar } from "./modules/navbar.js";
import { initHeroAnimation, initScrollReveal, initMagneticButtons } from "./modules/animations.js";
import { projects, renderProjects } from "./data/projects.js";
import { initProjectsCarousel, initImageCarousel, initGaleriaCarousel } from "./modules/carousel.js";
import '@fortawesome/fontawesome-free/css/all.min.css';

document.documentElement.classList.add("js-ready");

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();

  initHeroAnimation();
  initScrollReveal();
  initMagneticButtons();

  renderProjects();

  initProjectsCarousel();

  projects.forEach((p) => initImageCarousel(p.id));

  initGaleriaCarousel();
});