// Portfólio Vinícius Alves — efeitos e interações

// ---------- Ano no rodapé ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Menu do celular ----------
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
menuToggle.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  menuToggle.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});
mobileNav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuToggle.classList.remove("open");
  })
);

// ---------- Link ativo no menu ----------
const navLinks = document.querySelectorAll(".nav a");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((l) => l.classList.toggle("active", l.dataset.nav === entry.target.id));
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
["inicio", "sobre", "projetos", "contato"].forEach((id) => observer.observe(document.getElementById(id)));

// ---------- Texto digitando ----------
const ROLES = ["Desenvolvedor Full Stack", "HTML & CSS", "JavaScript", "SQL & Banco de Dados", "Git & GitHub"];
const typedEl = document.getElementById("typed");
let roleIndex = 0;
let typedText = "";
let deleting = false;
function typeStep() {
  const word = ROLES[roleIndex % ROLES.length];
  if (!deleting && typedText === word) {
    deleting = true;
    return setTimeout(typeStep, 1600);
  }
  if (deleting && typedText === "") {
    deleting = false;
    roleIndex++;
  }
  typedText = deleting ? word.slice(0, typedText.length - 1) : ROLES[roleIndex % ROLES.length].slice(0, typedText.length + 1);
  typedEl.textContent = typedText;
  setTimeout(typeStep, deleting ? 35 : 70);
}
typeStep();

// ---------- Terminal ----------
const TERMINAL_LINES = [
  { prompt: true, text: "whoami" },
  { text: "Vinícius Alves — Desenvolvedor Full Stack", tone: "accent" },
  { prompt: true, text: "cat stack.json" },
  { text: '{ "front": "HTML, CSS, JS", "db": "SQL", "tools": "Git & GitHub" }', tone: "muted" },
  { prompt: true, text: "npm run deploy" },
  { text: "▸ build concluído em 1.2s", tone: "muted" },
  { text: "✔ deploy realizado com sucesso", tone: "ok" },
  { prompt: true, text: "echo $MISSAO" },
  { text: "Criar software que resolve problemas reais.", tone: "accent" },
];
const terminal = document.getElementById("terminal");
let lineIndex = 0;
function printLine() {
  if (lineIndex >= TERMINAL_LINES.length) {
    const end = document.createElement("div");
    end.className = "cursor-blink c-prompt";
    end.textContent = "❯";
    terminal.appendChild(end);
    return;
  }
  const line = TERMINAL_LINES[lineIndex++];
  const div = document.createElement("div");
  if (line.tone) div.className = "t-" + line.tone;
  if (line.prompt) {
    const p = document.createElement("span");
    p.className = "prompt";
    p.textContent = "❯";
    div.appendChild(p);
  }
  div.appendChild(document.createTextNode(line.text));
  terminal.appendChild(div);
  setTimeout(printLine, 380);
}
setTimeout(printLine, 400);

// ---------- Chuva de código ----------
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const GLYPHS = "01{}[]()<>/=;:+-*&|!?#$constletfnreturnifelse=>".split("");
function codeRain(canvas) {
  const ctx = canvas.getContext("2d");
  const css = getComputedStyle(document.documentElement);
  const primary = css.getPropertyValue("--primary").trim();
  const glow = css.getPropertyValue("--glow").trim();
  const bg = css.getPropertyValue("--bg").trim();
  const size = 15;
  let columns = 0;
  let drops = [];
  let last = 0;
  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    columns = Math.ceil(canvas.offsetWidth / size);
    drops = Array.from({ length: columns }, () => Math.random() * -60);
  }
  resize();
  window.addEventListener("resize", resize);
  function draw(t) {
    requestAnimationFrame(draw);
    if (t - last < 55) return;
    last = t;
    ctx.globalAlpha = 0.14;
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    ctx.font = size + 'px "JetBrains Mono", monospace';
    for (let i = 0; i < columns; i++) {
      const y = drops[i] * size;
      ctx.fillStyle = Math.random() > 0.96 ? glow : primary;
      ctx.globalAlpha = Math.random() * 0.5 + 0.35;
      ctx.fillText(GLYPHS[Math.floor(Math.random() * GLYPHS.length)], i * size, y);
      if (y > canvas.offsetHeight && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
    ctx.globalAlpha = 1;
  }
  if (!reduceMotion) requestAnimationFrame(draw);
}
document.querySelectorAll(".code-rain").forEach(codeRain);

// ---------- Código flutuando ----------
const SNIPPETS = [
  "const dev = new Developer();", 'git commit -m "feat: ✨"', "npm run build", "SELECT * FROM ideas;",
  "async () => await ship()", "if (bug) fix(bug);", "<section id=\"projetos\">", "while(alive) { code(); }",
  "git push origin main", "document.querySelector()", "200 OK", "console.log('olá');",
];
const floating = document.getElementById("floatingCode");
SNIPPETS.forEach((s, i) => {
  const span = document.createElement("span");
  span.textContent = s;
  span.style.left = ((i * 83) % 95) + "%";
  span.style.animationDuration = 18 + ((i * 7) % 14) + "s";
  span.style.animationDelay = -((i * 3.3) % 20) + "s";
  floating.appendChild(span);
});

// ---------- Seta de voltar ao topo ----------
const backToTop = document.getElementById("backToTop");
function onScroll() {
  const visible = window.scrollY > 400;
  backToTop.classList.toggle("visible", visible);
  backToTop.tabIndex = visible ? 0 : -1;
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ---------- Formulário de contato (abre o e-mail) ----------
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const subject = encodeURIComponent("Contato pelo portfólio — " + name);
  window.location.href = "mailto:vinicius.alvess989@gmail.com?subject=" + subject + "&body=" + encodeURIComponent(message);
});

// ---------- Cursor personalizado (só com mouse) ----------
if (window.matchMedia("(pointer: fine)").matches) {
  const root = document.documentElement;
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  root.classList.add("has-custom-cursor");
  let mx = -100, my = -100, rx = mx, ry = my;
  window.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
    mx = e.clientX;
    my = e.clientY;
    dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
    root.classList.add("cursor-on");
    const t = e.target;
    root.classList.toggle("cursor-text", !!t.closest("input, textarea"));
    root.classList.toggle("cursor-link", !t.closest("input, textarea") && !!t.closest("a, button, label"));
  }, { passive: true });
  window.addEventListener("pointerdown", () => root.classList.add("cursor-down"));
  window.addEventListener("pointerup", () => root.classList.remove("cursor-down"));
  document.addEventListener("pointerleave", () => root.classList.remove("cursor-on"));
  (function follow() {
    const ease = reduceMotion ? 1 : 0.18;
    rx += (mx - rx) * ease;
    ry += (my - ry) * ease;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(follow);
  })();
}
