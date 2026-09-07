export function initHeroAnimation() {
  const hero = document.querySelector(".hero");

  const run = () => {
    requestAnimationFrame(() => {
      hero?.classList.add("animated");
    });
  };

  if (document.readyState === "complete") run();
  else window.addEventListener("load", run, { once: true });
}

// ── Parallax sutil da foto do hero ─────────────────────────────────────────
export function initHeroParallax() {
  const fig = document.querySelector(".hero-figure");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!fig || reduce) return;

  if (!window.matchMedia("(min-width: 768px)").matches) return;

  window.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    fig.style.transform = `translate(${x * -16}px, ${y * -12}px)`;
  });
}

// ── Scroll reveal — seções ─────────────────────────────────────────────────
export function initScrollReveal() {
  const revealEls = document.querySelectorAll(
    ".img_desc, .projeto-card, .sobre-direita, .sobre-foto-wrapper, .sobre-info-item, .section-heading, .project-row"
  );

  revealEls.forEach((el) => {
    if (!el.classList.contains("project-row")) {
      el.classList.add("reveal");
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (entry.target.classList.contains("project-row")) {
              entry.target.classList.add("in-view");
            } else {
              entry.target.classList.add("visible", "card-visible");
            }
          }, entry.target.classList.contains("project-row") ? 0 : i * 80);
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