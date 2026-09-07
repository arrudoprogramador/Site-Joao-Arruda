import { initNavbar } from "./modules/navbar.js";
import { initHeroAnimation, initScrollReveal, initMagneticButtons, initHeroParallax } from "./modules/animations.js";
import { initScrollProgress, initBackToTop } from "./modules/ui-elements.js";
import { initThemeToggle } from "./themes.js";
import { renderProjects } from "./data/projects.js";
import { initFooterForm } from "./modules/footer-form.js";

document.documentElement.classList.add("js-ready");

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initThemeToggle();
  initHeroAnimation();
  initHeroParallax();
  initMagneticButtons();
  initScrollProgress();
  initBackToTop();
  renderProjects();
  initScrollReveal();
  initFooterForm();
});