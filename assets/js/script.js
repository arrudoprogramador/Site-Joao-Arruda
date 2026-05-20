document.addEventListener("DOMContentLoaded", function () {

    // =====================
    // NAVBAR ACTIVE LINK
    // =====================
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar a");

    function updateActiveLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();

    const navToggle = document.querySelector('.nav-toggle');
    const navbar    = document.querySelector('.navbar');

    navToggle?.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Fecha ao clicar em qualquer link
    navbar?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    });
    });
    










function initGaleriaCarousel() {
  const track   = document.getElementById("galeriaTrack");
  const dotsBox = document.getElementById("galeriaDots");
  if (!track || !dotsBox) return;

  const wrapper = track.closest(".galeria-wrapper");
  const slides  = Array.from(track.querySelectorAll(".galeria-card"));
  const total   = slides.length;
  if (total === 0) return;

  const prevBtn = wrapper.querySelector(".galeria-arrow--prev");
  const nextBtn = wrapper.querySelector(".galeria-arrow--next");

  let current = 0;
  let timer   = null;

  /* dots */
  slides.forEach((_, i) => {
    const d = Object.assign(document.createElement("button"), {
      type: "button",
      className: "galeria-dot" + (i === 0 ? " active" : ""),
    });
    d.setAttribute("aria-label", `Ir para foto ${i + 1}`);
    d.addEventListener("click", () => { goTo(i); restart(); });
    dotsBox.appendChild(d);
  });

  const dots = Array.from(dotsBox.querySelectorAll(".galeria-dot"));

  function goTo(i) {
    current = ((i % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, j) => d.classList.toggle("active", j === current));
  }

  const start   = () => { stop(); timer = setInterval(() => goTo(current + 1), 5000); };
  const stop    = () => { clearInterval(timer); timer = null; };
  const restart = () => { stop(); start(); };

  prevBtn?.addEventListener("click", () => { goTo(current - 1); restart(); });
  nextBtn?.addEventListener("click", () => { goTo(current + 1); restart(); });

  let tx = 0;
  wrapper.addEventListener("touchstart", e => { tx = e.touches[0].clientX; }, { passive: true });
  wrapper.addEventListener("touchend",   e => {
    const diff = tx - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 50) return;
    goTo(diff > 0 ? current + 1 : current - 1);
    restart();
  }, { passive: true });

  wrapper.addEventListener("mouseenter", stop);
  wrapper.addEventListener("mouseleave", start);
  document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());

  goTo(0);
  start();
}

initGaleriaCarousel();























    // =====================

   /* =========================================================
   CARROSSEL DE IMAGENS (interno por projeto)
========================================================= */
function initImageCarousel(id) {
  const track         = document.getElementById(`imagemTrack-${id}`);
  const dotsContainer = document.getElementById(`imagemDots-${id}`);
  if (!track || !dotsContainer) return;

  const wrapper = track.closest(".imagem-carousel");
  if (!wrapper) return;

  const prevBtn = wrapper.querySelector(".imagem-arrow--prev");
  const nextBtn = wrapper.querySelector(".imagem-arrow--next");
  if (!prevBtn || !nextBtn) return;

  const slides = Array.from(track.querySelectorAll(".imagem-foto"));
  const total  = slides.length;
  if (total === 0) return;

  let current      = 0;
  let autoplayTimer = null;

  /* ── Dots ── */
  slides.forEach((_, i) => {
    const dot = Object.assign(document.createElement("button"), {
      type: "button",
      className: "imagem-dot" + (i === 0 ? " active" : ""),
    });
    dot.setAttribute("aria-label", `Ir para imagem ${i + 1}`);
    dot.addEventListener("click", () => { goTo(i); restartAutoplay(); });
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.querySelectorAll(".imagem-dot"));

  /* ── Core ── */
  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }

  /* ── Autoplay ── */
  const startAutoplay   = () => { stopAutoplay(); autoplayTimer = setInterval(() => goTo(current + 1), 4500); };
  const stopAutoplay    = () => { clearInterval(autoplayTimer); autoplayTimer = null; };
  const restartAutoplay = () => { stopAutoplay(); startAutoplay(); };

  /* ── Botões ── */
  nextBtn.addEventListener("click", () => { goTo(current + 1); restartAutoplay(); });
  prevBtn.addEventListener("click", () => { goTo(current - 1); restartAutoplay(); });

  /* ── Swipe ── */
  let touchStartX = 0;
  wrapper.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  wrapper.addEventListener("touchend",   e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 50) return;
    goTo(diff > 0 ? current + 1 : current - 1);
    restartAutoplay();
    e.stopPropagation(); // evita acionar o carrossel pai
  }, { passive: true });

  /* ── Teclado ── */
  wrapper.setAttribute("tabindex", "0");
  wrapper.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") { goTo(current + 1); restartAutoplay(); e.preventDefault(); }
    if (e.key === "ArrowLeft")  { goTo(current - 1); restartAutoplay(); e.preventDefault(); }
  });

  /* ── Pausar ── */
  wrapper.addEventListener("mouseenter", stopAutoplay);
  wrapper.addEventListener("mouseleave", startAutoplay);
  wrapper.addEventListener("focusin",    stopAutoplay);
  wrapper.addEventListener("focusout",   startAutoplay);
  document.addEventListener("visibilitychange", () => document.hidden ? stopAutoplay() : startAutoplay());

  goTo(0);
  startAutoplay();
}

/* =========================================================
   CARROSSEL PRINCIPAL DE PROJETOS
========================================================= */
function initProjectsCarousel() {
  const track = document.getElementById("projetosTrack");
  if (!track) return;

// era: track.closest(".projetos-carousel")
const wrapper = track.closest(".projetos-track")?.parentElement?.closest(".projetos-wrapper")
             ?? track.closest(".projetos-carousel");  if (!wrapper) return;

  const cards = Array.from(track.querySelectorAll(".projeto-card"));
  const total = cards.length;
  if (total === 0) return;

  const prevBtn = wrapper.querySelector(".projetos-arrow--prev");
  const nextBtn = wrapper.querySelector(".projetos-arrow--next");

  let current = 0;

  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;

    // Reseta o carrossel interno do card ativo para a primeira imagem
    const activeCard  = cards[current];
    const activeTrack = activeCard.querySelector(".imagem-track");
    if (activeTrack) {
      activeTrack.style.transform = "translateX(0)";
      activeCard.querySelectorAll(".imagem-dot")
        .forEach((d, i) => d.classList.toggle("active", i === 0));
    }
  }

  /* ── Botões ── */
  nextBtn?.addEventListener("click", () => goTo(current + 1));
  prevBtn?.addEventListener("click", () => goTo(current - 1));

  /* ── Swipe ── */
  let touchStartX = 0;
  wrapper.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  wrapper.addEventListener("touchend",   e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 60) return;
    goTo(diff > 0 ? current + 1 : current - 1);
  }, { passive: true });

  /* ── Teclado ── */
  wrapper.setAttribute("tabindex", "0");
  wrapper.addEventListener("keydown", e => {
    if (e.target.closest(".imagem-carousel")) return; // ignora se foco estiver no carrossel interno
    if (e.key === "ArrowRight") { goTo(current + 1); e.preventDefault(); }
    if (e.key === "ArrowLeft")  { goTo(current - 1); e.preventDefault(); }
  });

  goTo(0);
}

/* ── Init ── */
initProjectsCarousel();
initImageCarousel("buscamed");
initImageCarousel("pegasus");

});