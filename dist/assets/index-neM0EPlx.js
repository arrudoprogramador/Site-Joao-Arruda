(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function L(){const a=document.querySelectorAll("section[id]"),r=document.querySelectorAll(".navbar a");function s(){const o=window.pageYOffset;a.forEach(n=>{const c=n.offsetTop-100,i=n.offsetHeight,l=n.getAttribute("id");o>=c&&o<c+i&&r.forEach(m=>{m.classList.remove("active"),m.getAttribute("href")===`#${l}`&&m.classList.add("active")})})}window.addEventListener("scroll",s,{passive:!0}),s();const t=document.getElementById("navHamburger"),e=document.getElementById("navbar");!t||!e||(t.addEventListener("click",()=>{const o=e.classList.toggle("open");t.classList.toggle("open",o),t.setAttribute("aria-expanded",String(o))}),e.querySelectorAll(".nav-link").forEach(o=>{o.addEventListener("click",()=>{e.classList.remove("open"),t.classList.remove("open"),t.setAttribute("aria-expanded","false")})}))}function E(){const a=document.querySelector(".hero-content"),r=document.querySelector(".hero-photo-wrapper");requestAnimationFrame(()=>{setTimeout(()=>{a==null||a.classList.add("animated"),r==null||r.classList.add("animated")},80)})}function A(){const a=document.querySelectorAll(".img_desc, .galeria-card, .projeto-card, .sobre-direita, .sobre-foto-wrapper, .sobre-info-item");a.forEach(s=>s.classList.add("reveal"));const r=new IntersectionObserver(s=>{s.forEach((t,e)=>{t.isIntersecting&&(setTimeout(()=>t.target.classList.add("visible"),e*80),r.unobserve(t.target))})},{threshold:.12});a.forEach(s=>r.observe(s))}function j(){document.querySelectorAll(".btn-primary, .btn-secondary, .sobre-btn-cv").forEach(a=>{a.addEventListener("mousemove",r=>{const s=a.getBoundingClientRect(),t=r.clientX-s.left-s.width/2,e=r.clientY-s.top-s.height/2;a.style.transform=`translate(${t*.18}px, ${e*.18}px)`}),a.addEventListener("mouseleave",()=>{a.style.transform=""})})}const y=[{id:"eleven-store",logo:"assets/img/projetos/logoPegasus.png",logoAlt:"Logo Eleven Store",name:"Eleven Store",tag:"Web",description:"Plataforma de e-commerce modular, escalável e reutilizável.",stack:["Next.js","TypeScript","Tailwind CSS","Supabase","Prisma"],links:{github:"https://github.com/arrudoprogramador/Base-Commerce",demo:null,pitch:null},images:[{src:"assets/img/projetos/eleven-store1.png",alt:"Eleven Store — tela 1"}]},{id:"buscamed",logo:"assets/img/projetos/BUSCAMED.png",logoAlt:"Logo Buscamed",name:"Buscamed",tag:"Mobile / Web",description:"Sistema completo para indicação das UBS mais próximas com o medicamento desejado, facilitando o acesso à saúde pública.",stack:["React Native","Laravel","MySQL"],links:{github:"https://github.com/arrudoprogramador",demo:null,pitch:"https://youtu.be/QRviIKZPZK8?si=zRNpd1IjvODqUhyC"},images:[{src:"assets/img/projetos/buscamed1.png",alt:"Buscamed — tela 1 de 4"},{src:"assets/img/projetos/buscamed2.png",alt:"Buscamed — tela 2 de 4"},{src:"assets/img/projetos/buscamed3.png",alt:"Buscamed — tela 3 de 4"},{src:"assets/img/projetos/buscamed4.png",alt:"Buscamed — tela 4 de 4"}]},{id:"random-burguer",logo:"assets/img/projetos/logo-random.png",logoAlt:"Logo Random Burguer",name:"Random Burguer",tag:"Web",description:"Sistema de gerenciamento de restaurante com painel administrativo e área do cliente.",stack:["Tailwind","Laravel","MySQL"],links:{github:"#",demo:null,pitch:null},images:[{src:"assets/img/projetos/random-burguer1.png",alt:"Random Burguer — tela 1 de 2"},{src:"assets/img/fotoPegasus2.png",alt:"Random Burguer — tela 2 de 2"}]},{id:"pegasus",logo:"assets/img/projetos/logo-pegasus.png",logoAlt:"Logo Pegasus",name:"Pegasus",tag:"Mobile / Web",description:"Sistema de gerenciamento de E-commerce e aplicativo para usuários. Loja fictícia direcionada à venda de roupas esportivas.",stack:["React Native","Laravel","MySQL"],links:{github:"#",demo:null,pitch:null},images:[{src:"assets/img/projetos/pegasus1.png",alt:"Pegasus — tela 1 de 2"},{src:"assets/img/projetos/pegasus2.png",alt:"Pegasus — tela 2 de 2"}]}];function w(a){const{id:r,logo:s,logoAlt:t,name:e,tag:o,description:n,stack:c,links:i,images:l}=a,m=c.map(g=>`<span class="chip">${g}</span>`).join(`
`);let d="";i.pitch&&(d+=`
      <a class="btn-pitch" href="${i.pitch}" target="_blank" rel="noopener noreferrer" aria-label="Ver vídeo pitch de ${e}">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8ZM9.6 15.5v-7l6.2 3.5-6.2 3.5Z"/>
        </svg>
        Vídeo Pitch
      </a>`),i.demo&&(d+=`
      <a class="btn-pitch" href="${i.demo}" target="_blank" rel="noopener noreferrer" aria-label="Ver demo de ${e}">
        ▶ Demo
      </a>`),i.github&&(d+=`
      <a class="btn-github" href="${i.github}" target="_blank" rel="noopener noreferrer" aria-label="Ver código de ${e} no GitHub">
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
      </a>`);const p=l.map(g=>`<img class="imagem-foto" src="${g.src}" alt="${g.alt}" loading="lazy">`).join(`
`);return`
    <article class="projeto-card">

      <div class="projeto-info">
        <div class="projeto-meta">
          <img class="projeto-logo" src="${s}" alt="${t}" loading="lazy">
          <div>
            <h3 class="projeto-nome">${e}</h3>
            <span class="projeto-tag">${o}</span>
          </div>
        </div>

        <p class="projeto-desc">${n}</p>

        <div class="projeto-stack">
          ${m}
        </div>

        <div class="projeto-botoes">
          ${d}
        </div>
      </div>

      <div class="imagem-carousel" role="region" aria-label="Imagens do projeto ${e}" tabindex="0">
        <div class="imagem-track-wrapper">
          <div class="imagem-track" id="imagemTrack-${r}">
            ${p}
          </div>
        </div>

        <button type="button" class="imagem-arrow imagem-arrow--prev" aria-label="Imagem anterior">&#8592;</button>
        <button type="button" class="imagem-arrow imagem-arrow--next" aria-label="Próxima imagem">&#8594;</button>

        <div class="imagem-dots" id="imagemDots-${r}" role="tablist" aria-label="Navegação das imagens"></div>
      </div>

    </article>`}function k(){const a=document.getElementById("projetosTrack");a&&(a.innerHTML=y.map(w).join(`
`))}function S(){const a=document.getElementById("galeriaTrack"),r=document.getElementById("galeriaDots");if(!a||!r)return;const s=a.closest(".galeria-wrapper"),t=Array.from(a.querySelectorAll(".galeria-card")),e=t.length;if(e===0)return;const o=s.querySelector(".galeria-arrow--prev"),n=s.querySelector(".galeria-arrow--next");let c=0,i=null;t.forEach((h,u)=>{const v=Object.assign(document.createElement("button"),{type:"button",className:"galeria-dot"+(u===0?" active":"")});v.setAttribute("aria-label",`Ir para foto ${u+1}`),v.addEventListener("click",()=>{m(u),g()}),r.appendChild(v)});const l=Array.from(r.querySelectorAll(".galeria-dot"));function m(h){c=(h%e+e)%e,a.style.transform=`translateX(-${c*100}%)`,l.forEach((u,v)=>u.classList.toggle("active",v===c))}const d=()=>{p(),i=setInterval(()=>m(c+1),5e3)},p=()=>{clearInterval(i),i=null},g=()=>{p(),d()};o==null||o.addEventListener("click",()=>{m(c-1),g()}),n==null||n.addEventListener("click",()=>{m(c+1),g()});let f=0;s.addEventListener("touchstart",h=>{f=h.touches[0].clientX},{passive:!0}),s.addEventListener("touchend",h=>{const u=f-h.changedTouches[0].clientX;Math.abs(u)<50||(m(u>0?c+1:c-1),g())},{passive:!0}),s.addEventListener("mouseenter",p),s.addEventListener("mouseleave",d),document.addEventListener("visibilitychange",()=>document.hidden?p():d()),m(0),d()}function $(a){const r=document.getElementById(`imagemTrack-${a}`),s=document.getElementById(`imagemDots-${a}`);if(!r||!s)return;const t=r.closest(".imagem-carousel");if(!t)return;const e=t.querySelector(".imagem-arrow--prev"),o=t.querySelector(".imagem-arrow--next");if(!e||!o)return;const n=Array.from(r.querySelectorAll(".imagem-foto")),c=n.length;if(c===0)return;let i=0,l=null;n.forEach((u,v)=>{const b=Object.assign(document.createElement("button"),{type:"button",className:"imagem-dot"+(v===0?" active":"")});b.setAttribute("aria-label",`Ir para imagem ${v+1}`),b.addEventListener("click",()=>{d(v),f()}),s.appendChild(b)});const m=Array.from(s.querySelectorAll(".imagem-dot"));function d(u){i=(u%c+c)%c,r.style.transform=`translateX(-${i*100}%)`,m.forEach((v,b)=>v.classList.toggle("active",b===i))}const p=()=>{g(),l=setInterval(()=>d(i+1),4500)},g=()=>{clearInterval(l),l=null},f=()=>{g(),p()};o.addEventListener("click",()=>{d(i+1),f()}),e.addEventListener("click",()=>{d(i-1),f()});let h=0;t.addEventListener("touchstart",u=>{h=u.touches[0].clientX},{passive:!0}),t.addEventListener("touchend",u=>{const v=h-u.changedTouches[0].clientX;Math.abs(v)<50||(d(v>0?i+1:i-1),f(),u.stopPropagation())},{passive:!0}),t.setAttribute("tabindex","0"),t.addEventListener("keydown",u=>{u.key==="ArrowRight"&&(d(i+1),f(),u.preventDefault()),u.key==="ArrowLeft"&&(d(i-1),f(),u.preventDefault())}),t.addEventListener("mouseenter",g),t.addEventListener("mouseleave",p),t.addEventListener("focusin",g),t.addEventListener("focusout",p),document.addEventListener("visibilitychange",()=>document.hidden?g():p()),d(0),p()}function B(){const a=document.getElementById("projetosTrack");if(!a)return;const r=a.closest(".projetos-wrapper");if(!r)return;const s=Array.from(a.querySelectorAll(".projeto-card")),t=s.length;if(t===0)return;const e=r.querySelector(".projetos-arrow--prev"),o=r.querySelector(".projetos-arrow--next");let n=0;function c(l){n=(l%t+t)%t,a.style.transform=`translateX(-${n*100}%)`;const m=s[n],d=m.querySelector(".imagem-track");d&&(d.style.transform="translateX(0)",m.querySelectorAll(".imagem-dot").forEach((p,g)=>p.classList.toggle("active",g===0)))}o==null||o.addEventListener("click",()=>c(n+1)),e==null||e.addEventListener("click",()=>c(n-1));let i=0;r.addEventListener("touchstart",l=>{i=l.touches[0].clientX},{passive:!0}),r.addEventListener("touchend",l=>{const m=i-l.changedTouches[0].clientX;Math.abs(m)<60||c(m>0?n+1:n-1)},{passive:!0}),r.setAttribute("tabindex","0"),r.addEventListener("keydown",l=>{l.target.closest(".imagem-carousel")||(l.key==="ArrowRight"&&(c(n+1),l.preventDefault()),l.key==="ArrowLeft"&&(c(n-1),l.preventDefault()))}),c(0)}document.documentElement.classList.add("js-ready");document.addEventListener("DOMContentLoaded",()=>{L(),E(),A(),j(),k(),B(),y.forEach(a=>$(a.id)),S()});
