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

    const track = document.getElementById("galeriaTrack");
    const dotsContainer = document.getElementById("galeriaDots");

    if (track) {
        const images = track.querySelectorAll(".galeria-img");
        let current = 0;

        // Cria dots
        images.forEach((_, i) => {
            const dot = document.createElement("button");
            dot.className = "galeria-dot" + (i === 0 ? " active" : "");
            dot.setAttribute("aria-label", `Imagem ${i + 1}`);
            dot.addEventListener("click", () => goTo(i));
            dotsContainer.appendChild(dot);
        });

        function goTo(index) {
            if (index >= images.length) index = 0;
            if (index < 0) index = images.length - 1;
            current = index;

            track.style.transform = `translateX(${-current * 100}%)`;
            track.style.transition = "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)";

            dotsContainer.querySelectorAll(".galeria-dot").forEach((d, i) => {
                d.classList.toggle("active", i === current);
            });
        }

        document.getElementById("galeriaPrev").addEventListener("click", () => goTo(current - 1));
        document.getElementById("galeriaNext").addEventListener("click", () => goTo(current + 1));


        // Autoplay
        let autoplay = setInterval(() => goTo(current + 1), 4000);
        track.addEventListener("mouseenter", () => clearInterval(autoplay));
        track.addEventListener("mouseleave", () => {
            autoplay = setInterval(() => goTo(current + 1), 4000);
        });

        // Swipe touch
        let touchStartX = 0;
        track.addEventListener("touchstart", e => { touchStartX = e.changedTouches[0].clientX; });
        track.addEventListener("touchend", e => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
        });
    }
    

});