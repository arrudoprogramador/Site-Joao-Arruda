import { initNavbar } from "./modules/navbar.js";
import { initHeroAnimation, initScrollReveal, initMagneticButtons } from "./modules/animations.js";
import { renderProjects } from "./data/projects.js";
import { initFooterForm } from "./modules/footer-form.js";

document.documentElement.classList.add("js-ready");

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initHeroAnimation();
  initScrollReveal();
  initMagneticButtons();
  renderProjects();
  initFooterForm();
});