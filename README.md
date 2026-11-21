# Portfólio — Vinícius Alves

> **Desenvolvedor Full Stack** · HTML · CSS · JavaScript · SQL · Git & GitHub

Portfólio pessoal de uma página, com tema preto e azul e efeitos visuais de programação: chuva de código, terminal que digita sozinho, nome com efeito glitch e cursor personalizado.

Sem framework, sem build, sem dependências — só HTML, CSS e JavaScript.

---

## 🚀 Acesso

**Demo:** `https://vini21501-ctrl.github.io/<nome-do-repositorio>/`

## 📄 O que tem no site

| Seção | Conteúdo |
| --- | --- |
| `#inicio` | Nome com efeito glitch, cargo que digita sozinho, terminal com `whoami` / `cat stack.json` / `npm run deploy` |
| `#sobre` | Apresentação, bloco de código com a stack e linha do tempo `git log --experiencia` |
| `#projetos` | Projetos com imagem de prévia, descrição, tecnologias, link do código e link da demonstração |
| `#contato` | E-mail, GitHub, LinkedIn e formulário que abre a mensagem pronta no e-mail do visitante |

## 🛠 Stack

- **HTML5** — estrutura semântica de página única
- **CSS3** — variáveis de tema, Grid e Flexbox, animações, `oklch` para as cores
- **JavaScript puro** — `<canvas>`, eventos de scroll e pointer, sem bibliotecas

## ✨ Efeitos

- Chuva de código caindo em `<canvas>`
- Terminal com digitação automática e cursor piscando
- Nome com efeito glitch
- Trechos de código flutuando ao fundo
- Linhas de varredura (scanlines) no formulário
- Cursor personalizado: ponto azul + anel que vira mira sobre links e botões
- Botão flutuante "voltar ao topo"
- Menu responsivo no celular
- Respeito a `prefers-reduced-motion` e `pointer: fine` (nada muda no celular)

## 📁 Estrutura

```text
.
├── index.html   # markup e conteúdo do site
├── style.css    # tema preto e azul, layout, animações
└── script.js    # chuva de código, terminal, cursor e interações
```

A logo, o favicon e a imagem de prévia do Lendaverso estão embutidos no `index.html` em base64 — o site funciona com esses três arquivos e nada mais.

## 💻 Rodando localmente

```bash
git clone https://github.com/vini21501-ctrl/<nome-do-repositorio>.git
cd <nome-do-repositorio>

# basta abrir o index.html no navegador, ou servir a pasta:
npx serve .
```

## 🌐 Publicando no GitHub Pages

1. Crie um repositório e envie os três arquivos.
2. Em **Settings → Pages**, selecione a branch `main` e a pasta `/ (root)`.
3. Salve: a página entra no ar em `https://vini21501-ctrl.github.io/<nome-do-repositorio>/`.

## 📱 Responsividade

Layout testado em celular (390px), tablet (768px) e desktop (1280px), em todas as seções.

## ✏️ Editando o conteúdo

Tudo está no `index.html`: os textos das seções, a lista de projetos e os links de contato. As cores ficam no topo do `style.css`, nas variáveis `--bg` (fundo), `--primary` e `--glow` (azuis) e `--muted` (textos secundários).

## ✍️ Contato

- 📧 [vinicius.alvess989@gmail.com](mailto:vinicius.alvess989@gmail.com)
- 🐙 [github.com/vini21501-ctrl](https://github.com/vini21501-ctrl)
- 💼 [linkedin.com/in/vinícius-alves](https://www.linkedin.com/in/vin%C3%ADcius-alves-9835232b0/)

---

`</>` © **Vinícius Alves**. Todos os direitos reservados.
