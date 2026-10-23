# Portefólio Técnico — Gabriel Vilalobos

Website pessoal e portefólio profissional focado em Engenharia de Redes, Administração de Sistemas e Desenvolvimento de Software. Desenvolvido com arquitetura moderna orientada a performance, acessibilidade e geração estática (SSG).

🌐 **Live Demo:** (https://gvilalobos.github.io/meu-portfolioGV/)

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** [Astro](https://astro.build/) (Static Site Generation / Content Collections)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Linguagem:** TypeScript / HTML5 Semântico
- **Fontes:** Inter & JetBrains Mono
- **Deploy & CI/CD:** GitHub Actions & GitHub Pages
- **Ambiente de Desenvolvimento:** Pop!_OS Linux / Node.js 22

---

## 📁 Estrutura do Projeto

```text
meu-portfolio/
├── .github/workflows/       # Pipeline de CI/CD (GitHub Actions)
├── public/                  # Ficheiros estáticos (CV em PDF, Favicon, imagens)
├── src/
│   ├── components/          # Componentes modulares (Navbar, Hero, Skills, etc.)
│   ├── content/
│   │   └── projects/        # Conteúdo dos projetos estruturado em Markdown
│   ├── layouts/             # Layout base, metadados (SEO/OpenGraph) e tema
│   ├── pages/               # Ponto de entrada (index.astro)
│   └── styles/              # Configuração global de estilos Tailwind
├── astro.config.mjs         # Configuração de build e caminhos do Astro
└── tsconfig.json            # Configuração de TypeScript
