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
    


    // =====================

   /* =========================================================
   CARROSSEL DE IMAGENS DOS PROJETOS
========================================================= */

function initImageCarousel(id) {

  const track = document.getElementById(`imagemTrack-${id}`);
  const dotsContainer = document.getElementById(`imagemDots-${id}`);

  if (!track || !dotsContainer) return;

  const wrapper = track.closest('.imagem-carousel');

  if (!wrapper) return;

  const prevBtn = wrapper.querySelector('.imagem-arrow--prev');
  const nextBtn = wrapper.querySelector('.imagem-arrow--next');

  if (!prevBtn || !nextBtn) return;

  const slides = Array.from(track.querySelectorAll('.imagem-foto'));

  const total = slides.length;

  if (total <= 0) return;

  let current = 0;
  let autoplay;

  /* =========================================================
     CRIAR DOTS
  ========================================================= */

  slides.forEach((_, index) => {

    const dot = document.createElement('button');

    dot.className = `imagem-dot ${index === 0 ? 'active' : ''}`;

    dot.type = 'button';

    dot.setAttribute(
      'aria-label',
      `Ir para imagem ${index + 1}`
    );

    dot.addEventListener('click', () => {
      goTo(index);
      restartAutoplay();
    });

    dotsContainer.appendChild(dot);

  });

  const dots = Array.from(
    dotsContainer.querySelectorAll('.imagem-dot')
  );

  /* =========================================================
     NAVEGAR
  ========================================================= */

  function goTo(index) {

    current = ((index % total) + total) % total;

    track.style.transform =
      `translateX(-${current * 100}%)`;

    dots.forEach((dot, i) => {

      dot.classList.toggle('active', i === current);

    });

  }

  function next() {
    goTo(current + 1);
  }

  function prev() {
    goTo(current - 1);
  }

  /* =========================================================
     BOTÕES
  ========================================================= */

  nextBtn.addEventListener('click', () => {
    next();
    restartAutoplay();
  });

  prevBtn.addEventListener('click', () => {
    prev();
    restartAutoplay();
  });

  /* =========================================================
     TOUCH / SWIPE
  ========================================================= */

  let startX = 0;
  let endX = 0;

  wrapper.addEventListener('touchstart', e => {

    e.stopPropagation();

  }, { passive: true });

  wrapper.addEventListener('touchend', e => {

    endX = e.changedTouches[0].clientX;

    const distance = startX - endX;

    if (Math.abs(distance) < 50) return;

    if (distance > 0) {
      next();
    } else {
      prev();
    }

    restartAutoplay();

  }, { passive: true });

  /* =========================================================
     TECLADO
  ========================================================= */

  wrapper.addEventListener('keydown', e => {

    if (e.key === 'ArrowRight') {

      next();
      restartAutoplay();

    }

    if (e.key === 'ArrowLeft') {

      prev();
      restartAutoplay();

    }

  });

  /* =========================================================
     AUTOPLAY
  ========================================================= */

  function startAutoplay() {

    stopAutoplay();

    autoplay = setInterval(() => {

      next();

    }, 4500);

  }

  function stopAutoplay() {

    clearInterval(autoplay);

  }

  function restartAutoplay() {

    stopAutoplay();
    startAutoplay();

  }

  wrapper.addEventListener('mouseenter', stopAutoplay);
  wrapper.addEventListener('mouseleave', startAutoplay);

  wrapper.addEventListener('focusin', stopAutoplay);
  wrapper.addEventListener('focusout', startAutoplay);

  /* =========================================================
     VISIBILITY API
     pausa autoplay quando aba não está visível
  ========================================================= */

  document.addEventListener('visibilitychange', () => {

    if (document.hidden) {

      stopAutoplay();

    } else {

      startAutoplay();

    }

  });

  /* =========================================================
     INIT
  ========================================================= */

  goTo(0);
  startAutoplay();

}

/* =========================================================
   CARROSSEL PRINCIPAL DE PROJETOS
========================================================= */

  function initImageCarousel(id) {
 
    const track          = document.getElementById(`imagemTrack-${id}`);
    const dotsContainer  = document.getElementById(`imagemDots-${id}`);
 
    // Aborta silenciosamente se o projeto não existir na página
    if (!track || !dotsContainer) return;
 
    const wrapper = track.closest(".imagem-carousel");
    if (!wrapper) return;
 
    const prevBtn = wrapper.querySelector(".imagem-arrow--prev");
    const nextBtn = wrapper.querySelector(".imagem-arrow--next");
    if (!prevBtn || !nextBtn) return;
 
    const slides = Array.from(track.querySelectorAll(".imagem-foto"));
    const total  = slides.length;
    if (total === 0) return;
 
    let current = 0;
    let autoplayTimer = null;
 
    /* ── Dots ───────────────────────────────────────── */
 
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type      = "button";
      dot.className = "imagem-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("aria-label", `Ir para imagem ${i + 1}`);
      dot.addEventListener("click", () => {
        goTo(i);
        restartAutoplay();
      });
      dotsContainer.appendChild(dot);
    });
 
    const dots = Array.from(dotsContainer.querySelectorAll(".imagem-dot"));
 
    /* ── Navegar ────────────────────────────────────── */
 
    function goTo(index) {
      current = ((index % total) + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
    }
 
    /* ── Autoplay ───────────────────────────────────── */
 
    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(() => goTo(current + 1), 4500);
    }
 
    function stopAutoplay() {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
 
    function restartAutoplay() {
      stopAutoplay();
      startAutoplay();
    }
 
    /* ── Botões ─────────────────────────────────────── */
 
    nextBtn.addEventListener("click", () => { goTo(current + 1); restartAutoplay(); });
    prevBtn.addEventListener("click", () => { goTo(current - 1); restartAutoplay(); });
 
    /* ── Swipe (touch) ──────────────────────────────── */
 
    // BUG corrigido: touchstart não capturava startX (tinha e.stopPropagation no lugar)
    let touchStartX = 0;
 
    wrapper.addEventListener("touchstart", e => {
      touchStartX = e.touches[0].clientX;   // ← linha que faltava
    }, { passive: true });
 
    wrapper.addEventListener("touchend", e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) < 50) return;      // movimento muito curto → ignora
      goTo(diff > 0 ? current + 1 : current - 1);
      restartAutoplay();
      e.stopPropagation();                  // evita que o carrossel pai também navegue
    }, { passive: true });
 
    /* ── Teclado ────────────────────────────────────── */
 
    wrapper.setAttribute("tabindex", "0");
 
    wrapper.addEventListener("keydown", e => {
      if (e.key === "ArrowRight") { goTo(current + 1); restartAutoplay(); e.preventDefault(); }
      if (e.key === "ArrowLeft")  { goTo(current - 1); restartAutoplay(); e.preventDefault(); }
    });
 
    /* ── Pausar quando sem foco/visibilidade ────────── */
 
    wrapper.addEventListener("mouseenter", stopAutoplay);
    wrapper.addEventListener("mouseleave", startAutoplay);
    wrapper.addEventListener("focusin",    stopAutoplay);
    wrapper.addEventListener("focusout",   startAutoplay);
 
    /* ── Init ───────────────────────────────────────── */
 
    goTo(0);
    startAutoplay();
  }
 
 

 
  function initProjectsCarousel() {
 
    const track   = document.getElementById("projetosTrack");
    if (!track) return;
 
    const wrapper = track.closest(".projetos-carousel");
    if (!wrapper) return;
 
    const cards = Array.from(track.querySelectorAll(".projeto-card"));
    const total = cards.length;
    if (total === 0) return;
 
    
    wrapper.style.position = "relative";
 
    const prevBtn = wrapper.querySelector(".projetos-arrow--prev");
    const nextBtn = wrapper.querySelector(".projetos-arrow--next");
 
    /* ── Dots de projetos (opcionais, criados se existir container) ── */
    const dotsContainer = wrapper.querySelector(".projetos-dots");
    let projectDots = [];
 
    if (dotsContainer) {
      cards.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.type      = "button";
        dot.className = "projeto-nav-dot" + (i === 0 ? " active" : "");
        dot.setAttribute("aria-label", `Ir para projeto ${i + 1}`);
        dot.addEventListener("click", () => goTo(i));
        dotsContainer.appendChild(dot);
      });
      projectDots = Array.from(dotsContainer.querySelectorAll(".projeto-nav-dot"));
    }
 
    let current = 0;
 
    function goTo(index) {
      current = ((index % total) + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
 
      // Atualiza setas (desabilita nos extremos se não for loop)
      if (prevBtn) prevBtn.disabled = false;
      if (nextBtn) nextBtn.disabled = false;
 
      // Dots de projetos
      projectDots.forEach((d, i) => d.classList.toggle("active", i === current));
 
      // Reinicia autoplay dos carrosséis internos ao trocar de projeto
      // (evita que um carrossel parado em segundo plano avance)
      const activeCard  = cards[current];
      const activeTrack = activeCard.querySelector(".imagem-track");
      if (activeTrack) {
        activeTrack.style.transform = "translateX(0)";
        const activeDots = activeCard.querySelectorAll(".imagem-dot");
        activeDots.forEach((d, i) => d.classList.toggle("active", i === 0));
      }
    }
 
    /* ── Botões ─────────────────────────────────────── */
 
    if (nextBtn) nextBtn.addEventListener("click", () => goTo(current + 1));
    if (prevBtn) prevBtn.addEventListener("click", () => goTo(current - 1));
 
    /* ── Swipe ──────────────────────────────────────── */
 
    let touchStartX = 0;
 
    wrapper.addEventListener("touchstart", e => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
 
    wrapper.addEventListener("touchend", e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) < 60) return;
      goTo(diff > 0 ? current + 1 : current - 1);
    }, { passive: true });
 
    /* ── Teclado ────────────────────────────────────── */
 
    wrapper.setAttribute("tabindex", "0");
 
    wrapper.addEventListener("keydown", e => {
      // Só navega no carrossel principal se o foco não estiver num carrossel interno
      if (e.target.closest(".imagem-carousel")) return;
      if (e.key === "ArrowRight") { goTo(current + 1); e.preventDefault(); }
      if (e.key === "ArrowLeft")  { goTo(current - 1); e.preventDefault(); }
    });
 
    /* ── Init ───────────────────────────────────────── */
 
    goTo(0);
  }
 
 
  
 
  initProjectsCarousel();
 
  // Adicione uma linha por projeto novo:
  initImageCarousel("buscamed");
  initImageCarousel("pegasus");
    

});