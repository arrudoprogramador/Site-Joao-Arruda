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
    // SCROLL REVEAL — CARDS
    // =====================
    const hiddenCards = document.querySelectorAll(".card-hidden");

    if (hiddenCards.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("card-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        hiddenCards.forEach(card => observer.observe(card));
    }


    // =====================
    // SWIPER — GALERIA
    // =====================
    if (document.querySelector(".slide-content")) {
        new Swiper(".slide-content", {
            slidesPerView: 3,
            spaceBetween: 25,
            loop: true,
            grabCursor: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                520: { slidesPerView: 2 },
                950: { slidesPerView: 3 },
            }
        });
    }


    // =====================
    // CAROUSEL — PROJETOS
    // =====================
    const carousel = document.getElementById("carousel");
    const carouselItems = document.querySelectorAll(".carousel-item");

    if (carousel && carouselItems.length > 0) {
        let currentSlide = 0;

        function showSlide(index) {
            const total = carouselItems.length;
            if (index >= total) currentSlide = 0;
            else if (index < 0) currentSlide = total - 1;
            else currentSlide = index;

            carousel.style.transform = `translateX(${-currentSlide * 100}%)`;

            // Atualiza os dots se existirem
            document.querySelectorAll(".carousel-dot").forEach((dot, i) => {
                dot.classList.toggle("active", i === currentSlide);
            });
        }

        // Cria os controles do carousel dinamicamente
        const container = carousel.closest(".carousel-container");

        // Dots
        if (carouselItems.length > 1) {
            const dotsWrapper = document.createElement("div");
            dotsWrapper.className = "carousel-dots";
            carouselItems.forEach((_, i) => {
                const dot = document.createElement("button");
                dot.className = "carousel-dot" + (i === 0 ? " active" : "");
                dot.setAttribute("aria-label", `Slide ${i + 1}`);
                dot.addEventListener("click", () => showSlide(i));
                dotsWrapper.appendChild(dot);
            });
            container.appendChild(dotsWrapper);

            // Setas
            const prevBtn = document.createElement("button");
            const nextBtn = document.createElement("button");
            prevBtn.className = "carousel-arrow carousel-arrow--prev";
            nextBtn.className = "carousel-arrow carousel-arrow--next";
            prevBtn.innerHTML = "&#8592;";
            nextBtn.innerHTML = "&#8594;";
            prevBtn.setAttribute("aria-label", "Slide anterior");
            nextBtn.setAttribute("aria-label", "Próximo slide");
            prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
            nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));
            container.appendChild(prevBtn);
            container.appendChild(nextBtn);

            // Autoplay
            let autoplay = setInterval(() => showSlide(currentSlide + 1), 5000);
            container.addEventListener("mouseenter", () => clearInterval(autoplay));
            container.addEventListener("mouseleave", () => {
                autoplay = setInterval(() => showSlide(currentSlide + 1), 5000);
            });

            // Swipe touch
            let touchStartX = 0;
            carousel.addEventListener("touchstart", e => {
                touchStartX = e.changedTouches[0].clientX;
            });
            carousel.addEventListener("touchend", e => {
                const diff = touchStartX - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 40) showSlide(currentSlide + (diff > 0 ? 1 : -1));
            });
        }

        showSlide(0);
    }

});