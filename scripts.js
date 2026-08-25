const DISCORD = "https://discord.gg/yQyDNQWWzB";

const modules = [
  {
    name: "OpenFuture",
    maker: "NEJIZZUKI",
    description: "Suas atividades escolares, no automático.",
    detail: "TAREFASP · REDAÇÃO · KHAN · LEIA · EXPANSÃO · ALURA · MATIFIC · OPEN ENGLISH · +6 PLATAFORMAS",
    icon: "✦",
    href: "https://openfuture.lol/"
  },
  {
    name: "Shuziro Astral",
    maker: "BAKAI",
    description: "Ferramentas e recursos para facilitar suas tarefas.",
    detail: "PLATAFORMAS · AUTOMAÇÕES · RECURSOS · COMUNIDADE",
    icon: "◈",
    href: "https://bakai.shuziroastral.lol/"
  },
  {
    name: "Autoquest",
    maker: "Snouu",
    description: "Auto Quest feito para completar suas missões.",
    detail: "AUTO QUEST · GHOSTHUB · SERVIDOR GHOSTHUB",
    icon: "ghost",
    href: "https://ghosthub.fun/",
    discord: "https://discord.gg/WuAwKw3B5x"
  },
  {
    name: "Zunder",
    maker: "Zunder",
    description: "Ferramenta e recursos da plataforma Zunder.",
    detail: "PLATAFORMA · RECURSOS · ACESSO",
    icon: "Z",
    href: "https://zunder.lat/"
  }
];

const platforms = [
  ["Tarefas SP", "Ferramenta para automatizar tarefas da Sala do Futuro.", "▣"],
  ["Redação Paulista", "Ferramenta para gerar redações de alto nível.", "✎"],
  ["Alura", "Acesso rápido à plataforma Alura.", "A"],
  ["Khan - Khan Academy", "Ferramenta para automatizar tarefas do Khan Academy.", "◇"],
  ["Speak", "Ferramenta para automatizar as tarefas da plataforma Speak.", "◌"],
  ["Matific", "Acesso rápido aos recursos da plataforma Matific.", "∑"],
  ["Expansão Noturna", "Recursos e automações para a Expansão Noturna.", "☾"],
  ["Educação Profissional", "Ferramentas para atividades da Educação Profissional.", "▤"],
  ["Leia SP", "Acesso rápido aos recursos do Leia SP.", "◫"],
  ["Prepara SP", "Ferramenta para auxiliar nas atividades do Prepara SP.", "P"],
  ["Copia e colar", "Copie o código abaixo para liberar copiar, colar, selecionar e arrastar em páginas que bloqueiam essas ações.", "⧉"]
];

const featureGrid = document.getElementById("featureGrid");
featureGrid.innerHTML = modules.map((m, i) => {
  const icon = m.icon === "ghost"
    ? `<img class="module-icon-img" src="assets/ghosthub.png" alt="GhostHub">`
    : `<span>${m.icon}</span>`;
  const extra = m.discord
    ? `<a class="module-discord" href="${m.discord}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">Servidor Ghosthub ↗</a>`
    : "";
  return `
    <article class="feature-card feature-${i}">
      <a class="feature-main" href="${m.href}" target="_blank" rel="noopener noreferrer">
        <div class="platform-icon">${icon}</div>
        <span class="status">ATIVO</span>
        <h3>${m.name}</h3>
        <p>${m.description}</p>
        <div class="maker">FEITO POR <strong>${m.maker}</strong></div>
        <div class="detail">${m.detail}</div>
        <span class="open">Acessar <b>↗</b></span>
      </a>
      ${extra}
    </article>`;
}).join("");

const grid = document.getElementById("platformGrid");
const copyCode = `javascript:(function(){
  const allowNormalBehavior = function(e){
    e.stopImmediatePropagation();
    return true;
  };

  /* Array de eventos comumente bloqueados */
  const events = ['copy', 'paste', 'cut', 'contextmenu', 'selectstart', 'dragstart'];

  events.forEach(eventType => {
    document.addEventListener(eventType, allowNormalBehavior, true);
  });

  /* Mensagem no console do DevTools */
  console.log(
    '%cFeito por eri10pc',
    'color:#0ff;background:#111;font-size:18px;font-weight:bold;padding:6px 12px;border-radius:6px;'
  );

  /* Aviso visual rápido na tela (toast) */
  const toast = document.createElement('div');
  toast.textContent = 'Feito por eri10pc';
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.right = '20px';
  toast.style.zIndex = '2147483647';
  toast.style.background = '#111';
  toast.style.color = '#0ff';
  toast.style.padding = '10px 18px';
  toast.style.borderRadius = '8px';
  toast.style.fontFamily = 'Arial, sans-serif';
  toast.style.fontSize = '14px';
  toast.style.fontWeight = 'bold';
  toast.style.boxShadow = '0 2px 10px rgba(0,0,0,0.4)';
  toast.style.opacity = '0';
  toast.style.transition = 'opacity 0.3s ease';

  document.body.appendChild(toast);
  requestAnimationFrame(() => { toast.style.opacity = '1'; });

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
})();`;

grid.innerHTML = platforms.map(([name, description, icon], i) => {
  if (name === "Copia e colar") {
    return `
      <article class="platform-card module-copy">
        <div class="platform-icon"><span>${icon}</span></div>
        <span class="status">UTILITÁRIO</span>
        <h3>${name}</h3>
        <p>${description}</p>
        <div class="maker"><span>♙</span> <em>por eri10pc</em></div>
        <div class="detail">COPY · PASTE · SELECT · DRAG · CONTEXTMENU</div>
        <button class="copy-code" type="button">Copiar código <b>⧉</b></button>
      </article>`;
  }
  return `
    <a class="platform-card module-${i}" href="${DISCORD}" target="_blank" rel="noopener noreferrer">
      <div class="platform-icon"><span>${icon}</span></div>
      <span class="status">ATIVO</span>
      <h3>${name}</h3>
      <p>${description}</p>
      <div class="maker"><span>♙</span> <em>por Nocteris</em></div>
      <div class="detail">ACESSO · AUTOMAÇÃO · RECURSOS · COMUNIDADE</div>
      <span class="open">Acessar <b>↗</b></span>
    </a>`;
}).join("");

const copyButton = document.querySelector(".copy-code");
if (copyButton) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyCode);
      copyButton.innerHTML = "Copiado! <b>✓</b>";
      setTimeout(() => copyButton.innerHTML = "Copiar código <b>⧉</b>", 1800);
    } catch {
      const area = document.createElement("textarea");
      area.value = copyCode;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
      copyButton.innerHTML = "Copiado! <b>✓</b>";
      setTimeout(() => copyButton.innerHTML = "Copiar código <b>⧉</b>", 1800);
    }
  });
}
