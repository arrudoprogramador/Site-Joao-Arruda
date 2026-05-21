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

    // =====================
    // HAMBURGER MENU
    // =====================
    const hamburger = document.getElementById('navHamburger');
    const navbarMenu = document.getElementById('navbar');

    if (hamburger && navbarMenu) {
        hamburger.addEventListener('click', () => {
            const isOpen = navbarMenu.classList.toggle('open');
            hamburger.classList.toggle('open', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen);
        });

        navbarMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navbarMenu.classList.remove('open');
                hamburger.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }


    // =====================
    // HERO — ANIMAÇÃO DE ENTRADA
    // =====================
    const heroContent = document.querySelector('.hero-content');
    const heroPhoto   = document.querySelector('.hero-photo-wrapper');

    requestAnimationFrame(() => {
        setTimeout(() => {
            heroContent?.classList.add('animated');
            heroPhoto?.classList.add('animated');
        }, 80);
    });

    // =====================
    // SCROLL REVEAL — SEÇÕES
    // =====================
    const revealEls = document.querySelectorAll(
        '.img_desc, .galeria-card, .projeto-card, .sobre-direita, .sobre-foto-wrapper, .sobre-info-item'
    );

    revealEls.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 80);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealEls.forEach(el => revealObserver.observe(el));

    // =====================
    // CURSOR MAGNÉTICO — BOTÕES
    // =====================
    document.querySelectorAll('.btn-primary, .btn-secondary, .sobre-btn-cv').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const rect   = btn.getBoundingClientRect();
            const x      = e.clientX - rect.left - rect.width  / 2;
            const y      = e.clientY - rect.top  - rect.height / 2;
            btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });






    // =====================
    // GALERIA CAROUSEL
    // =====================
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
        wrapper.addEventListener("touchend", e => {
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
    // CARROSSEL DE IMAGENS
    // =====================
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

        let current       = 0;
        let autoplayTimer = null;

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

        function goTo(index) {
            current = ((index % total) + total) % total;
            track.style.transform = `translateX(-${current * 100}%)`;
            dots.forEach((d, i) => d.classList.toggle("active", i === current));
        }

        const startAutoplay   = () => { stopAutoplay(); autoplayTimer = setInterval(() => goTo(current + 1), 4500); };
        const stopAutoplay    = () => { clearInterval(autoplayTimer); autoplayTimer = null; };
        const restartAutoplay = () => { stopAutoplay(); startAutoplay(); };

        nextBtn.addEventListener("click", () => { goTo(current + 1); restartAutoplay(); });
        prevBtn.addEventListener("click", () => { goTo(current - 1); restartAutoplay(); });

        let touchStartX = 0;
        wrapper.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; }, { passive: true });
        wrapper.addEventListener("touchend", e => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) < 50) return;
            goTo(diff > 0 ? current + 1 : current - 1);
            restartAutoplay();
            e.stopPropagation();
        }, { passive: true });

        wrapper.setAttribute("tabindex", "0");
        wrapper.addEventListener("keydown", e => {
            if (e.key === "ArrowRight") { goTo(current + 1); restartAutoplay(); e.preventDefault(); }
            if (e.key === "ArrowLeft")  { goTo(current - 1); restartAutoplay(); e.preventDefault(); }
        });

        wrapper.addEventListener("mouseenter", stopAutoplay);
        wrapper.addEventListener("mouseleave", startAutoplay);
        wrapper.addEventListener("focusin",    stopAutoplay);
        wrapper.addEventListener("focusout",   startAutoplay);
        document.addEventListener("visibilitychange", () => document.hidden ? stopAutoplay() : startAutoplay());

        goTo(0);
        startAutoplay();
    }

    // =====================
    // CARROSSEL DE PROJETOS
    // =====================
    function initProjectsCarousel() {
        const track = document.getElementById("projetosTrack");
        if (!track) return;

        const wrapper = track.closest(".projetos-wrapper");
        if (!wrapper) return;

        const cards = Array.from(track.querySelectorAll(".projeto-card"));
        const total = cards.length;
        if (total === 0) return;

        const prevBtn = wrapper.querySelector(".projetos-arrow--prev");
        const nextBtn = wrapper.querySelector(".projetos-arrow--next");

        let current = 0;

        function goTo(index) {
            current = ((index % total) + total) % total;
            track.style.transform = `translateX(-${current * 100}%)`;

            const activeCard  = cards[current];
            const activeTrack = activeCard.querySelector(".imagem-track");
            if (activeTrack) {
                activeTrack.style.transform = "translateX(0)";
                activeCard.querySelectorAll(".imagem-dot")
                    .forEach((d, i) => d.classList.toggle("active", i === 0));
            }
        }

        nextBtn?.addEventListener("click", () => goTo(current + 1));
        prevBtn?.addEventListener("click", () => goTo(current - 1));

        let touchStartX = 0;
        wrapper.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; }, { passive: true });
        wrapper.addEventListener("touchend", e => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) < 60) return;
            goTo(diff > 0 ? current + 1 : current - 1);
        }, { passive: true });

        wrapper.setAttribute("tabindex", "0");
        wrapper.addEventListener("keydown", e => {
            if (e.target.closest(".imagem-carousel")) return;
            if (e.key === "ArrowRight") { goTo(current + 1); e.preventDefault(); }
            if (e.key === "ArrowLeft")  { goTo(current - 1); e.preventDefault(); }
        });

        goTo(0);
    }

    initProjectsCarousel();
    initImageCarousel("buscamed");
    initImageCarousel("pegasus");

});