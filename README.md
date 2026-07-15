# Pincel Placas — Comunicação Visual em Brasília/DF

> Placas, letra caixa, luminosos, fachadas e sinalização com projeto, produção e instalação.

Site institucional da **Pincel Placas**, empresa de comunicação visual sediada em Brasília/DF. A landing page apresenta os serviços, portfólio, diferenciais, perguntas frequentes e canais de contato da empresa.

---

## Visão Geral

| Item | Detalhe |
|------|---------|
| **Tecnologia** | React 19 + Vite + TailwindCSS 4 |
| **Estilo** | Tema escuro (dark) com dourado como cor de destaque |
| **Fonte** | Outfit (Google Fonts) — pesos 300 a 900 |
| **Layout** | Landing page de página única (single-page) com seções ancoradas |
| **Hospedagem** | Site estático hospedado no Manus WebDev |

---

## Estrutura do Projeto

```
pincel-placas/
├── client/
│   ├── index.html              # HTML base com SEO e Google Fonts
│   ├── public/                 # Arquivos públicos (favicon, etc.)
│   └── src/
│       ├── pages/
│       │   └── Home.tsx        # Página principal com todas as seções
│       ├── components/         # Componentes reutilizáveis (shadcn/ui)
│       ├── contexts/           # Contextos React (ThemeProvider)
│       ├── App.tsx             # Roteador e layout principal
│       ├── main.tsx            # Ponto de entrada React
│       └── index.css           # Estilos globais, tema e tokens
├── ideas.md                    # Brainstorm de design
├── package.json                # Dependências e scripts
└── README.md                   # Este arquivo
```

---

## Seções do Site

1. **Header** — Navbar fixa com logo, links de navegação e botão de orçamento (WhatsApp). Menu mobile com botão hamburger.
2. **Hero** — Título principal "Sua marca à vista" com efeito neon, texto descritivo, botões CTA e collage de imagens com rotação.
3. **Serviços** — Grid de 6 cards com flip 3D (front/back) apresentando ACM, Letra Caixa, Adesivação, Fachadas, Acrílico e Sinalização.
4. **Diferenciais** — Seção em fundo dourado com três pilares: prazo cumprido, projeto + instalação e garantia real.
5. **Portfólio** — Grid assimétrico com imagens de trabalhos recentes e overlay no hover.
6. **Sobre** — Texto institucional com collage de imagens e tags de especialidades.
7. **FAQ** — Accordion com 6 perguntas frequentes sobre atendimento, orçamento e prazo.
8. **Contato** — Cards de contato para WhatsApp, Instagram e localização em Brasília.
9. **Footer** — Logo, copyright e informações da empresa.

---

## Configuração e Desenvolvimento

### Pré-requisitos

- Node.js 22+
- pnpm
