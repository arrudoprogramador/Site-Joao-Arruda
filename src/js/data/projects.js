export const projects = [
  {
    id: "impacto-wer",
    logo: "assets/img/projetos/fotos-marcas.svg",
    name: "Impacto Wer",
    tag: "Profissional",
    description: "Vitrine de moda urbana contemporânea e streetwear com catálogo dinâmico de drops e pedidos via WhatsApp.",
    stack: ["React", "Tailwind CSS", "Vite"],
    image: "assets/img/projetos/impacto-wer.png",
    links: {
      github: null,
      demo: "https://impacto-wer.vercel.app/",
      pitch: null,
    },
  },
  {
    id: "eleven-store",
    logo: "assets/img/projetos/fotos-marcas.svg",
    name: "Eleven Store",
    tag: "Profissional",
    description: "Plataforma de e-commerce moderna para vestuário e produtos esportivos, projetada para alta escalabilidade.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "assets/img/projetos/eleven-store.png",
    links: {
      github: null,
      demo: "https://eleven-store-arruda.vercel.app",
      pitch: null,
    },
  },
  {
    id: "deposito-amizade",
    logo: "assets/img/projetos/fotos-marcas.svg",
    name: "Depósito Amizade",
    tag: "Profissional",
    description: "Catálogo virtual para depósito de materiais com integração direta de orçamentos e pedidos via WhatsApp.",
    stack: ["JavaScript", "Tailwind CSS", "HTML5"],
    image: "assets/img/projetos/deposito-amizade.png",
    links: {
      github: "https://github.com/arrudoprogramador/Deposito-Amizade",
      demo: "https://deposito-amizade.vercel.app",
      pitch: null,
    },
  },
  {
    id: "buscamed",
    logo: "assets/img/projetos/logo-buscamed.svg",
    name: "Buscamed",
    tag: "Acadêmico",
    description: "Sistema inteligente para localização e mapeamento das UBS mais próximas com disponibilidade de medicamentos.",
    stack: ["React Native", "Laravel", "MySQL"],
    image: "assets/img/projetos/buscamed1.svg",
    links: {
      github: "https://github.com/FrancisWeydson/BuscaMed_Crud.git",
      demo: null,
      pitch: "https://youtu.be/QRviIKZPZK8?si=zRNpd1IjvODqUhyC",
    },
  },
  {
    id: "random-burguer",
    logo: "assets/img/projetos/logo-random.svg",
    name: "Random Burguer",
    tag: "Acadêmico",
    description: "Sistema completo de hamburgueria com gerenciamento de pedidos, cardápio digital e painel administrativo.",
    stack: ["Tailwind CSS", "Laravel", "Docker"],
    image: "assets/img/projetos/random-burguer1.svg",
    links: {
      github: "https://github.com/arrudoprogramador/Random-Burguer",
      demo: null,
      pitch: null,
    },
  },
];

class ProjectsCarousel {
  constructor(containerId = "projectsCarousel") {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.stage = document.getElementById("carouselStage");
    this.prevBtn = document.getElementById("carouselPrevBtn");
    this.nextBtn = document.getElementById("carouselNextBtn");
    this.pagination = document.getElementById("carouselPagination");
    this.currentNumEl = document.getElementById("carouselCurrentNum");
    this.totalNumEl = document.getElementById("carouselTotalNum");

    this.currentIndex = 0;
    this.cards = [];
    this.dots = [];
    this.autoTimer = null;
    this.autoIntervalMs = 6000;
    this.isPointerDown = false;
    this.startX = 0;
    this.currentX = 0;
    this.dragThreshold = 45;

    this.init();
  }

  init() {
    this.render();
    this.attachEvents();
    this.updateCarousel(0);
    this.setupAutoplay();
  }

  render() {
    if (!this.stage) return;

    if (this.totalNumEl) {
      this.totalNumEl.textContent = String(projects.length).padStart(2, "0");
    }

    // Render cards
    this.stage.innerHTML = projects
      .map((project, idx) => {
        const { id, name, tag, description, stack, image, links } = project;

        const primaryLink = links.demo
          ? `<a href="${links.demo}" target="_blank" rel="noopener noreferrer" class="carousel-card-btn carousel-card-btn--primary" aria-label="Ver projeto ao vivo: ${name}">
               <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
               <span>Demo</span>
             </a>`
          : links.pitch
          ? `<a href="${links.pitch}" target="_blank" rel="noopener noreferrer" class="carousel-card-btn carousel-card-btn--primary" aria-label="Assistir ao pitch em vídeo: ${name}">
               <i class="fa-solid fa-play" aria-hidden="true"></i>
               <span>Pitch Vídeo</span>
             </a>`
          : "";

        const codeLink = links.github
          ? `<a href="${links.github}" target="_blank" rel="noopener noreferrer" class="carousel-card-btn carousel-card-btn--secondary" aria-label="Ver código no GitHub: ${name}">
               <i class="fa-brands fa-github" aria-hidden="true"></i>
               <span>Código</span>
             </a>`
          : "";

        const stackPills = stack
          .map((tech) => `<span class="carousel-card-tech">${tech}</span>`)
          .join("");

        return `
          <article class="carousel-card" data-index="${idx}" data-id="${id}" role="group" aria-roledescription="slide" aria-label="${idx + 1} de ${projects.length}: ${name}">
            <div class="carousel-card-inner">
              <div class="carousel-card-media">
                <img src="${image}" alt="Preview do projeto ${name}" loading="lazy" />
                <span class="carousel-card-tag"><i class="fa-solid fa-sparkles" aria-hidden="true"></i> ${tag}</span>
              </div>
              <div class="carousel-card-content">
                <header class="carousel-card-header">
                  <h3 class="carousel-card-title">${name}</h3>
                  <span class="carousel-card-index">#${String(idx + 1).padStart(2, "0")}</span>
                </header>
                <p class="carousel-card-desc">${description}</p>
                <div class="carousel-card-stack" aria-label="Tecnologias utilizadas">
                  ${stackPills}
                </div>
                <div class="carousel-card-actions">
                  ${primaryLink}
                  ${codeLink}
                </div>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    this.cards = Array.from(this.stage.querySelectorAll(".carousel-card"));

    // Render pagination dots
    if (this.pagination) {
      this.pagination.innerHTML = projects
        .map((p, idx) => `
          <button class="carousel-dot" data-index="${idx}" role="tab" aria-selected="false" aria-label="Ir para projeto ${idx + 1}: ${p.name}">
            <span class="carousel-dot-inner"></span>
          </button>
        `)
        .join("");

      this.dots = Array.from(this.pagination.querySelectorAll(".carousel-dot"));
    }
  }

  updateCarousel(targetIndex) {
    const total = projects.length;
    this.currentIndex = ((targetIndex % total) + total) % total;

    const half = Math.floor(total / 2);

    this.cards.forEach((card, idx) => {
      let diff = idx - this.currentIndex;
      while (diff > half) diff -= total;
      while (diff < -half) diff += total;

      card.setAttribute("data-pos", String(diff));
      const isActive = diff === 0;

      card.classList.toggle("is-active", isActive);
      card.setAttribute("aria-hidden", (!isActive).toString());

      const links = card.querySelectorAll("a, button");
      links.forEach((link) => {
        if (isActive) {
          link.removeAttribute("tabindex");
        } else {
          link.setAttribute("tabindex", "-1");
        }
      });
    });

    // Update pagination
    this.dots.forEach((dot, idx) => {
      const isSelected = idx === this.currentIndex;
      dot.classList.toggle("is-active", isSelected);
      dot.setAttribute("aria-selected", isSelected.toString());
    });

    // Update counter
    if (this.currentNumEl) {
      this.currentNumEl.textContent = String(this.currentIndex + 1).padStart(2, "0");
    }
  }

  prev() {
    this.updateCarousel(this.currentIndex - 1);
  }

  next() {
    this.updateCarousel(this.currentIndex + 1);
  }

  goTo(idx) {
    this.updateCarousel(idx);
  }

  attachEvents() {
    // Arrow buttons
    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => {
        this.prev();
        this.restartAutoplay();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => {
        this.next();
        this.restartAutoplay();
      });
    }

    // Dot click
    if (this.pagination) {
      this.pagination.addEventListener("click", (e) => {
        const dot = e.target.closest(".carousel-dot");
        if (dot) {
          const idx = parseInt(dot.getAttribute("data-index"), 10);
          if (!isNaN(idx)) {
            this.goTo(idx);
            this.restartAutoplay();
          }
        }
      });
    }

    // Card click: clicking a side card brings it to center
    if (this.stage) {
      this.stage.addEventListener("click", (e) => {
        if (e.target.closest(".carousel-card-actions a")) return;

        const card = e.target.closest(".carousel-card");
        if (!card) return;

        const idx = parseInt(card.getAttribute("data-index"), 10);
        if (!isNaN(idx) && idx !== this.currentIndex) {
          e.preventDefault();
          this.goTo(idx);
          this.restartAutoplay();
        }
      });

      // Keyboard navigation
      this.stage.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          this.prev();
          this.restartAutoplay();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          this.next();
          this.restartAutoplay();
        } else if (e.key === "Home") {
          e.preventDefault();
          this.goTo(0);
          this.restartAutoplay();
        } else if (e.key === "End") {
          e.preventDefault();
          this.goTo(projects.length - 1);
          this.restartAutoplay();
        }
      });

      // Touch / Pointer Drag events
      const onPointerDown = (e) => {
        if (e.target.closest(".carousel-card-actions a") || e.target.closest("button")) return;
        this.isPointerDown = true;
        this.startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
        this.currentX = this.startX;
        this.stopAutoplay();
      };

      const onPointerMove = (e) => {
        if (!this.isPointerDown) return;
        this.currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      };

      const onPointerUp = () => {
        if (!this.isPointerDown) return;
        this.isPointerDown = false;
        const deltaX = this.currentX - this.startX;

        if (Math.abs(deltaX) > this.dragThreshold) {
          if (deltaX < 0) {
            this.next();
          } else {
            this.prev();
          }
        }
        this.restartAutoplay();
      };

      this.stage.addEventListener("mousedown", onPointerDown);
      window.addEventListener("mousemove", onPointerMove);
      window.addEventListener("mouseup", onPointerUp);

      this.stage.addEventListener("touchstart", onPointerDown, { passive: true });
      window.addEventListener("touchmove", onPointerMove, { passive: true });
      window.addEventListener("touchend", onPointerUp);

      // Pause on hover & focus
      this.container.addEventListener("mouseenter", () => this.stopAutoplay());
      this.container.addEventListener("mouseleave", () => this.restartAutoplay());
      this.container.addEventListener("focusin", () => this.stopAutoplay());
      this.container.addEventListener("focusout", () => this.restartAutoplay());
    }
  }

  setupAutoplay() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !document.hidden) {
            this.startAutoplay();
          } else {
            this.stopAutoplay();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(this.container);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.stopAutoplay();
      } else {
        this.restartAutoplay();
      }
    });
  }

  startAutoplay() {
    this.stopAutoplay();
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    this.autoTimer = setInterval(() => {
      this.next();
    }, this.autoIntervalMs);
  }

  stopAutoplay() {
    if (this.autoTimer) {
      clearInterval(this.autoTimer);
      this.autoTimer = null;
    }
  }

  restartAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }
}

export function renderProjects() {
  new ProjectsCarousel("projectsCarousel");
}
