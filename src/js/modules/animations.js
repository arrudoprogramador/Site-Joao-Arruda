export function initHeroAnimation() {
  const heroContent = document.querySelector(".hero-content");
  const heroPhoto   = document.querySelector(".hero-photo-wrapper");

  requestAnimationFrame(() => {
    setTimeout(() => {
      heroContent?.classList.add("animated");
      heroPhoto?.classList.add("animated");
    }, 80);
  });
}

// ── Scroll reveal — seções ─────────────────────────────────────────────────
export function initScrollReveal() {
  const revealEls = document.querySelectorAll(
    ".img_desc, .projeto-card, .sobre-direita, .sobre-foto-wrapper, .sobre-info-item"
  );

  revealEls.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

// ── Cursor magnético — botões ──────────────────────────────────────────────
export function initMagneticButtons() {
  document
    .querySelectorAll(".btn-primary, .btn-secondary, .sobre-btn-cv")
    .forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x    = e.clientX - rect.left  - rect.width  / 2;
        const y    = e.clientY - rect.top   - rect.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
      });

      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
      });
    });
}