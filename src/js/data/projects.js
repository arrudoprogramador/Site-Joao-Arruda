export const projects = [
  {
    id: "eleven-store",
    logo: "/assets/img/projetos/logo-eleven.jpeg",
    logoAlt: "Logo Eleven Store",
    name: "Eleven Store",
    tag: "Web (*Em desenvolvimento)",
    description: "Loja real de venda de camisetas. Futuramente plataforma de e-commerce escalável e reutilizável.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: {
      github: "https://github.com/arrudoprogramador/Base-Commerce",
      demo: 'https://eleven-store-arruda.vercel.app',
      pitch: null,
    },
    images: [
      { src: "assets/img/projetos/eleven-store1.png", alt: "Eleven Store — tela 1" },
      { src: "assets/img/projetos/eleven-store2.png", alt: "Eleven Store — tela 2" },
    ],
  },
  {
    id: "buscamed",
    logo: "assets/img/projetos/logo-buscamed.png",
    logoAlt: "Logo Buscamed",
    name: "Buscamed",
    tag: "Mobile / Web",
    description:
      "Sistema completo para indicação das UBS mais próximas com o medicamento desejado, facilitando o acesso à saúde pública.",
    stack: ["React Native", "Laravel", "MySQL"],
    links: {
      github: "https://github.com/FrancisWeydson/BuscaMed_Crud.git",
      demo: null,
      pitch: "https://youtu.be/QRviIKZPZK8?si=zRNpd1IjvODqUhyC",
    },
    images: [
      { src: "assets/img/projetos/buscamed1.png", alt: "Buscamed — tela 1 de 4" },
      { src: "assets/img/projetos/buscamed2.png", alt: "Buscamed — tela 2 de 4" },
      { src: "assets/img/projetos/buscamed3.png", alt: "Buscamed — tela 3 de 4" },
      { src: "assets/img/projetos/buscamed4.png", alt: "Buscamed — tela 4 de 4" },
    ],
  },
  {
    id: "random-burguer",
    logo: "assets/img/projetos/logo-random.png",
    logoAlt: "Logo Random Burguer",
    name: "Random Burguer",
    tag: "Web (*Em desenvolvimento)",
    description: "Sistema de gerenciamento de restaurante com painel administrativo e área do cliente.",
    stack: ["Tailwind CSS", "Laravel", "MySQL", "Docker"],
    links: {
      github: "https://github.com/arrudoprogramador/Random-Burguer",
      demo: 'https://random-burguer-production.up.railway.app',
      pitch: null,
    },
    images: [
      { src: "assets/img/projetos/random-burguer1.png", alt: "Random Burguer — tela 1 de 2" },
      { src: "assets/img/fotoPegasus2.png",             alt: "Random Burguer — tela 2 de 2" },
    ],
  },
  {
    id: "pegasus",
    logo: "assets/img/projetos/logo-pegasus.png",
    logoAlt: "Logo Pegasus",
    name: "Pegasus",
    tag: "Mobile / Web",
    description:
      "Sistema de gerenciamento de E-commerce e aplicação mobile para usuários. Loja fictícia direcionada à venda de roupas esportivas.",
    stack: ["React Native", "Laravel", "MySQL"],
    links: {
      github: "https://github.com/arrudoprogramador/Pegasus-Projeto",
      demo: null,
      pitch: null,
    },
    images: [
      { src: "assets/img/projetos/pegasus1.png", alt: "Pegasus — tela 1 de 2" },
      { src: "assets/img/projetos/pegasus2.png", alt: "Pegasus — tela 2 de 2" },
    ],
  },
];


function buildCard(project) {
  const { id, logo, logoAlt, name, tag, description, stack, links, images } = project;

  // Chips de stack
  const stackHTML = stack
    .map((s) => `<span class="chip">${s}</span>`)
    .join("\n");

  // Botões de links (só renderiza se existir)
  let buttonsHTML = "";

  if (links.pitch) {
    buttonsHTML += `
      <a class="btn-pitch" href="${links.pitch}" target="_blank" rel="noopener noreferrer" aria-label="Ver vídeo pitch de ${name}">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8ZM9.6 15.5v-7l6.2 3.5-6.2 3.5Z"/>
        </svg>
        Vídeo Pitch
      </a>`;
  }

  if (links.demo) {
    buttonsHTML += `
      <a class="btn-pitch" href="${links.demo}" target="_blank" rel="noopener noreferrer" aria-label="Ver demo de ${name}">
        Ver projeto
      </a>`;
  }

  if (links.github) {
    buttonsHTML += `
      <a class="btn-github" href="${links.github}" target="_blank" rel="noopener noreferrer" aria-label="Ver código de ${name} no GitHub">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58
          0-.28-.01-1.02-.01-2-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75
          -1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.3 3.5 1
          .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22
          -.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005
          2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84
          1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22
          0 1.6-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.57 21.8 24 17.3 24 12
          24 5.37 18.63 0 12 0z"/>
        </svg>
        GitHub
      </a>`;
  }

  // Imagens do carrossel interno
  const imagesHTML = images
    .map((img) => `<img class="imagem-foto" src="${img.src}" alt="${img.alt}" loading="lazy">`)
    .join("\n");

  return `
    <article class="projeto-card">

      <div class="projeto-info">
        <div class="projeto-meta">
          <img class="projeto-logo" src="${logo}" alt="${logoAlt}" loading="lazy">
          <div>
            <h3 class="projeto-nome">${name}</h3>
            <span class="projeto-tag">${tag}</span>
          </div>
        </div>

        <p class="projeto-desc">${description}</p>

        <div class="projeto-stack">
          ${stackHTML}
        </div>

        <div class="projeto-botoes">
          ${buttonsHTML}
        </div>
      </div>

      <div class="imagem-carousel" role="region" aria-label="Imagens do projeto ${name}" tabindex="0">
        <div class="imagem-track-wrapper">
          <div class="imagem-track" id="imagemTrack-${id}">
            ${imagesHTML}
          </div>
        </div>

        <button type="button" class="imagem-arrow imagem-arrow--prev" aria-label="Imagem anterior">&#8592;</button>
        <button type="button" class="imagem-arrow imagem-arrow--next" aria-label="Próxima imagem">&#8594;</button>

        <div class="imagem-dots" id="imagemDots-${id}" role="tablist" aria-label="Navegação das imagens"></div>
      </div>

    </article>`;
}

export function renderProjects() {
  const track = document.getElementById("projetosTrack");
  if (!track) return;

  track.innerHTML = projects.map(buildCard).join("\n");
}