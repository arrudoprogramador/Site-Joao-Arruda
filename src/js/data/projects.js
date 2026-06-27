export const projects = [
  {
    id: "deposito-amizade",
    logo: "assets/img/projetos/fotos-marcas.svg",
    name: "Depósito Amizade",
    tag: "Profissional",
    description: "Catálogo de loja com integração de pedidos ao WhatsApp.",
    stack: ["JS Vanilla", "Tailwind"],
    image: "assets/img/projetos/amizade1.png",
    links: {
      github: "https://github.com/arrudoprogramador/Deposito-Amizade",
      demo: 'https://deposito-amizade.vercel.app',
      pitch: null,
    },
  },
  {
    id: "eleven-store",
    logo: "assets/img/projetos/logo-eleven.jpeg",
    name: "Eleven Store",
    tag: "Profissional",
    description: "Loja de camisetas. Futuramente plataforma de e-commerce escalável e reutilizável.",
    stack: ["Next", "TypeScript", "Tailwind"],
    image: "assets/img/projetos/eleven-store1.png",
    links: {
      github: "https://github.com/arrudoprogramador/Eleven-Store",
      demo: 'https://eleven-store-arruda.vercel.app',
      pitch: null,
    },
  },
  {
    id: "buscamed",
    logo: "assets/img/projetos/logo-buscamed.png",
    name: "Buscamed",
    tag: "Acadêmico",
    description: "Sistema completo para indicação das UBS mais próximas com o medicamento desejado.",
    stack: ["React Native", "Laravel", "MySQL"],
    image: "assets/img/projetos/buscamed1.png",
    links: {
      github: "https://github.com/FrancisWeydson/BuscaMed_Crud.git",
      demo: null,
      pitch: "https://youtu.be/QRviIKZPZK8?si=zRNpd1IjvODqUhyC",
    },
  },
  {
    id: "random-burguer",
    logo: "assets/img/projetos/logo-random.png",
    name: "Random Burguer",
    tag: "Acadêmico",
    description: "Gerenciamento de restaurante com painel administrativo e área do cliente.",
    stack: ["Tailwind", "Laravel", "Docker"],
    image: "assets/img/projetos/random-burguer1.png",
    links: {
      github: "https://github.com/arrudoprogramador/Random-Burguer",
      demo: 'https://random-burguer-production.up.railway.app',
      pitch: null,
    },
  },
  {
    id: "pegasus",
    logo: "assets/img/projetos/logo-pegasus.png",
    name: "Pegasus",
    tag: "Acadêmico",
    description: "Gerenciamento de E-commerce e aplicação mobile para usuários.",
    stack: ["React Native", "Laravel", "MySQL"],
    image: "assets/img/projetos/pegasus1.png",
    links: {
      github: "https://github.com/arrudoprogramador/Pegasus-Projeto",
      demo: null,
      pitch: null,
    },
  },
];
function buildCard(project) {
  const { id, logo, name, tag, description, stack, links, image } = project;

  const stackHTML = stack.map((s) => `<span class="chip">${s}</span>`).join("\n");

  let buttonsHTML = "";
  if (links.pitch) {
    buttonsHTML += `<a class="btn-pitch" href="${links.pitch}" target="_blank" rel="noopener noreferrer">▶ Vídeo Pitch</a>`;
  }
  if (links.demo) {
    buttonsHTML += `<a class="btn-pitch" href="${links.demo}" target="_blank" rel="noopener noreferrer">Ir para o site</a>`;
  }
  if (links.github) {
    buttonsHTML += `<a class="btn-github" href="${links.github}" target="_blank" rel="noopener noreferrer">GitHub</a>`;
  }

  return `
    <article class="projeto-card">
      <div class="projeto-info">
        <div class="projeto-meta">
          <img class="projeto-logo" src="${logo}" alt="" loading="lazy">
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

      <img class="projeto-img" src="${image}" alt="${name}" loading="lazy">
    </article>`;
}

export function renderProjects() {
  const track = document.getElementById("projetosTrack");
  if (!track) return;
  track.innerHTML = projects.map(buildCard).join("\n");
}