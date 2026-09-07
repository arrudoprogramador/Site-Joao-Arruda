export const projects = [
  {
    id: "deposito-amizade",
    logo: "assets/img/projetos/fotos-marcas.svg",
    name: "Depósito Amizade",
    tag: "Profissional",
    description: "Catálogo de loja com integração de pedidos ao WhatsApp.",
    stack: ["JS Vanilla", "Tailwind"],
    image: "public/assets/img/projetos/amizade1.svg",
    links: {
      github: "https://github.com/arrudoprogramador/Deposito-Amizade",
      demo: 'https://deposito-amizade.vercel.app',
      pitch: null,
    },
  },
  {
    id: "eleven-store",
    logo: "public/assets/img/projetos/logo-eleven.svg",
    name: "Eleven Store",
    tag: "Profissional",
    description: "Loja de camisetas. Futuramente plataforma de e-commerce escalável e reutilizável.",
    stack: ["Next", "TypeScript", "Tailwind"],
    image: "public/assets/img/projetos/eleven-store1.svg",
    links: {
      github: "https://github.com/arrudoprogramador/Eleven-Store",
      demo: 'https://eleven-store-arruda.vercel.app',
      pitch: null,
    },
  },
  {
    id: "buscamed",
    logo: "assets/img/projetos/logo-buscamed.svg",
    name: "Buscamed",
    tag: "Acadêmico",
    description: "Sistema completo para indicação das UBS mais próximas com o medicamento desejado.",
    stack: ["React Native", "Laravel", "MySQL"],
    image: "public/assets/img/projetos/buscamed1.svg",
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
    description: "Gerenciamento de restaurante com painel administrativo e área do cliente.",
    stack: ["Tailwind", "Laravel", "Docker"],
    image: "public/assets/img/projetos/random-burguer1.svg",
    links: {
      github: "https://github.com/arrudoprogramador/Random-Burguer",
      demo: 'https://random-burguer-production.up.railway.app',
      pitch: null,
    },
  },
  // {
  //   id: "deposito",
  //   logo: "assets/img/projetos/logo-pegasus.png",
  //   logoAlt: "Logo Pegasus",
  //   name: "Pegasus",
  //   tag: "Mobile / Web",
  //   description:
  //     "Sistema de gerenciamento de E-commerce e aplicação mobile para usuários. Loja fictícia direcionada à venda de roupas esportivas.",
  //   stack: ["React Native", "Laravel", "MySQL"],
  //   links: {
  //     github: "https://github.com/arrudoprogramador/Pegasus-Projeto",
  //     demo: null,
  //     pitch: null,
  //   },
  //   images: [
  //     { src: "assets/img/projetos/pegasus1.png", alt: "Pegasus — tela 1 de 2" },
  //     { src: "assets/img/projetos/pegasus2.png", alt: "Pegasus — tela 2 de 2" },
  //   ],
  // },
  {
    id: "pegasus",
    logo: "assets/img/projetos/logo-pegasus.svg",
    name: "Pegasus",
    tag: "Acadêmico",
    description: "Gerenciamento de E-commerce e aplicação mobile para usuários.",
    stack: ["React Native", "Laravel", "MySQL"],
    image: "public/assets/img/projetos/pegasus1.svg",
    links: {
      github: "https://github.com/arrudoprogramador/Pegasus-Projeto",
      demo: null,
      pitch: null,
    },
  },
];
function buildRow(project, index) {
  const { id, name, tag, stack, links, image } = project;

  const primaryHref = links.demo || links.pitch || links.github;
  const primaryLabel = links.demo ? "Ver projeto" : links.pitch ? "Pitch" : "Código";
  const hasCode = !!links.github && links.github !== primaryHref;

  const nameParts = name.replace(/\s+/g, "<br>");

  const codeLink = hasCode
    ? `<a class="project-code" href="${links.github}" target="_blank" rel="noopener noreferrer">Código <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`
    : "";

  return `
    <li class="project-row" style="--i:${index}" data-project="${id}">
      <span class="project-num">${String(index + 1).padStart(2, "0")}</span>
      <a class="project-main" href="${primaryHref}" target="_blank" rel="noopener noreferrer" aria-label="${name}">
        <span class="project-title">${nameParts}</span>
      </a>
      <div class="project-meta">
        <span class="project-cat">${tag}</span>
        <span class="project-tech">${stack.join(" · ")}</span>
        ${codeLink}
        <span class="project-go">${primaryLabel} <i class="fa-solid fa-arrow-right"></i></span>
      </div>
      <div class="project-preview-frame">
        <img src="${image}" alt="" loading="lazy">
      </div>
    </li>`;
}

export function renderProjects() {
  const track = document.getElementById("projetosTrack");
  if (!track) return;
  track.innerHTML = projects.map(buildRow).join("\n");
}