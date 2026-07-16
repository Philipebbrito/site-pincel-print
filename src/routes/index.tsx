import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Instagram,
  MapPin,
  Layers,
  Lightbulb,
  Sticker,
  Building2,
  Square,
  Signpost,
  ShieldCheck,
  Clock,
  Wrench,
  ArrowUpRight,
  ChevronDown,
  Plus,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import p7 from "@/assets/portfolio-7.jpg";
import p8 from "@/assets/portfolio-8.jpg";
import p9 from "@/assets/portfolio-9.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

// ---------- CONFIG ----------
const WHATSAPP_NUMBER = "5561991655159"; // [substituir pelo número real]
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da Pincel Print e gostaria de um orçamento.",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
const INSTAGRAM_URL = "https://instagram.com/pincelplacas";

// ---------- DATA ----------
const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

type Servico = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  short: string;
  detail: string;
  tags: string[];
};

const servicos: Servico[] = [
  {
    icon: Layers,
    title: "Placas em ACM",
    short: "Painéis rígidos, leves e duráveis para fachadas.",
    detail:
      "Corte, dobra e usinagem de ACM em várias cores e acabamentos. Ideal para fachadas comerciais que precisam durar anos sob sol e chuva.",
    tags: ["Fachada", "Externo", "Alta durabilidade"],
  },
  {
    icon: Lightbulb,
    title: "Letra Caixa & Luminosos",
    short: "Letras 3D com iluminação em LED.",
    detail:
      "Front-light, back-light e neon flex. Sua marca visível de dia e acesa à noite, com montagem estruturada para fachada.",
    tags: ["LED", "Front-light", "Back-light"],
  },
  {
    icon: Sticker,
    title: "Adesivação",
    short: "Envelopamento de veículos, vitrines e paredes.",
    detail:
      "Vinis de alta performance aplicados por equipe treinada — de frotas comerciais a vitrines de loja e ambientação interna.",
    tags: ["Frotas", "Vitrine", "Ambientes"],
  },
  {
    icon: Building2,
    title: "Fachadas Comerciais",
    short: "Projeto, produção e instalação completa.",
    detail:
      "Criamos ou executamos o projeto da fachada e cuidamos da produção e montagem no local — chave na mão.",
    tags: ["Projeto", "Instalação", "Chave na mão"],
  },
  {
    icon: Square,
    title: "Peças em Acrílico",
    short: "Placas, totens e displays cortados a laser.",
    detail:
      "Peças em acrílico transparente ou colorido, corte a laser com acabamento premium para identificação e sinalização.",
    tags: ["Corte a laser", "Premium"],
  },
  {
    icon: Signpost,
    title: "Sinalização Interna",
    short: "Wayfinding e sinalização de segurança.",
    detail:
      "Placas de portas, indicativos, sinalização de emergência e wayfinding completo para escritórios, clínicas e prédios.",
    tags: ["Wayfinding", "Segurança"],
  },
];

const diferenciais = [
  {
    icon: Clock,
    n: "01",
    title: "Prazo cumprido",
    desc: "Cronograma alinhado desde o orçamento — a entrega sai no dia combinado.",
  },
  {
    icon: Wrench,
    n: "02",
    title: "Projeto + instalação",
    desc: "Fazemos tudo: criação, produção e instalação com equipe própria em Brasília.",
  },
  {
    icon: ShieldCheck,
    n: "03",
    title: "Garantia real",
    desc: "Materiais de primeira linha e garantia sobre cada serviço executado.",
  },
];

const portfolio = [
  { img: p2, title: "Letra caixa luminosa", cat: "Restaurante · [cliente]", span: "lg:col-span-2 lg:row-span-2" },
  { img: p1, title: "Fachada em ACM", cat: "Escritório · [cliente]", span: "" },
  { img: p3, title: "Envelopamento de frota", cat: "Logística · [cliente]", span: "" },
  { img: p4, title: "Acrílico", cat: "Corporativo · [cliente]", span: "lg:col-span-2" },
  { img: p5, title: "Sinalização interna", cat: "Coworking · [cliente]", span: "" },
  { img: p6, title: "Impressão Digital", cat: "Varejo · [cliente]", span: "" },
  { img: p7, title: "Placas/Outdoors", cat: "Varejo · [cliente]", span: "" },
  { img: p8, title: "Placas de Acessibilidade", cat: "Varejo · [cliente]", span: "" },
  { img: p9, title: "Brindes", cat: "Varejo · [cliente]", span: "" }
];

const faqs = [
  {
    q: "Quais regiões vocês atendem?",
    a: "Nossa sede é em Brasília/DF, mas atendemos em todo o Brasil. Temos projetos entregues em Mato Grosso, Mato Grosso do Sul, Goiás, Bahia e diversos outros estados. Somos parceiros de grandes redes como o McDonald's, garantindo padronização e qualidade em qualquer lugar do país.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "Você fala com a gente pelo WhatsApp, envia fotos do local ou o briefing do projeto e retornamos com uma proposta detalhada.",
  },
  {
    q: "Vocês fazem o projeto ou só a produção?",
    a: "Fazemos os dois. Podemos desenvolver o projeto visual completo, ou produzir a partir de um layout que você já tenha.",
  },
  {
    q: "Qual o prazo médio de entrega?",
    a: "Depende da peça — trabalhos simples saem em poucos dias; fachadas maiores costumam levar de [1 a 10] dias úteis.",
  },
  {
    q: "A instalação está inclusa?",
    a: "Sim, trabalhamos com equipe própria de instalação em Brasília. O valor entra junto no orçamento.",
  },
  {
    q: "Emitem nota fiscal?",
    a: "Sim, emitimos nota fiscal para todos os serviços prestados.",
  },
];

// ---------- COMPONENT ----------
function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-royal text-bone font-sans overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-royal/85 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center shrink-0" onClick={closeMenu}>
            <img src={logo} alt="Pincel Print" className="h-10 sm:h-12 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-semibold tracking-wide text-bone/85 hover:text-gold transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex btn-gold text-sm px-4 py-2.5"
            >
              <MessageCircle className="h-4 w-4" /> Pedir orçamento
            </a>
            <button
              type="button"
              aria-label="Abrir menu"
              className="lg:hidden p-2 text-bone"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-royal-deep border-t border-white/10">
            <nav className="flex flex-col px-6 py-6 gap-4">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={closeMenu}
                  className="text-lg font-display uppercase tracking-wide text-bone hover:text-gold"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="btn-gold mt-2"
              >
                <MessageCircle className="h-4 w-4" /> Pedir orçamento
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-24 sm:pt-28 pb-16 sm:pb-24">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.3em] text-gold uppercase mb-6">
              <span className="h-px w-8 bg-gold" />
              Brasília / DF
            </span>
            <h1 className="font-display uppercase text-[clamp(2.75rem,8.5vw,6.75rem)] leading-[0.88]">
              Sua marca <br />
              <span className="neon">à vista</span>.
            </h1>
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-bone/80 max-w-xl leading-relaxed">
              Placas, letra caixa, luminosos, fachadas e sinalização com projeto, produção
              e instalação. Do rascunho ao letreiro aceso.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-gold">
                <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
              </a>
              <a href="#servicos" className="btn-ghost">
                Ver serviços
              </a>
            </div>
          </div>

          {/* Collage */}
          <div className="lg:col-span-5 relative h-[420px] sm:h-[520px] lg:h-[560px]">
            <div className="absolute top-0 right-4 w-[62%] aspect-[4/5] rounded-2xl overflow-hidden border-4 border-royal-deep shadow-2xl rotate-[4deg] hover:rotate-[2deg] transition-transform duration-500 z-20">
              <img src={hero} alt="Letra caixa iluminada" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-6 left-0 w-[58%] aspect-square rounded-2xl overflow-hidden border-4 border-gold shadow-2xl -rotate-[6deg] hover:-rotate-[3deg] transition-transform duration-500 z-30">
              <img src={p3} alt="Fachada em ACM" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-8 left-8 w-[42%] aspect-[3/4] rounded-2xl overflow-hidden border-4 border-royal-deep shadow-xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500 z-10">
              <img src={p2} alt="Adesivação de frota" className="w-full h-full object-cover" />
            </div>
            <div
              className="absolute -bottom-2 right-6 z-40 bg-gold text-royal-ink font-display uppercase text-sm px-4 py-2 rounded-lg rotate-[-4deg] shadow-lg"
            >
              + de 40mil projetos entregues
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 sm:py-28 bg-royal-deep relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] text-gold uppercase mb-4">
                O que fazemos
              </span>
              <h2 className="font-display uppercase text-4xl sm:text-6xl leading-[0.95]">
                Catálogo <br /> de serviços
              </h2>
            </div>
            <p className="text-bone/70 max-w-md text-lg">
              Passe o mouse (ou toque) nos cards para conhecer nossos trabalhos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {servicos.map((s, i) => (
              <FlipCard key={s.title} s={s} n={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS (bloco em dourado) */}
      <section className="bg-gold text-royal-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-14 items-start">
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase mb-3">
                Por que a Pincel?
              </span>
              <h2 className="font-display uppercase text-4xl sm:text-5xl leading-[0.95]">
                Três motivos<br />
                pra fechar
                <br /> com a gente.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {diferenciais.map((d) => (
                <div key={d.title} className="border-t-2 border-royal-ink/80 pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <d.icon className="h-8 w-8" />
                    <span className="font-display text-xl opacity-60">{d.n}</span>
                  </div>
                  <h3 className="mt-6 font-display uppercase text-2xl">{d.title}</h3>
                  <p className="mt-2 text-royal-ink/85 leading-relaxed text-[15px]">
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="portfolio" className="py-20 sm:py-28 bg-royal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] text-gold uppercase mb-4">
              Portfólio
            </span>
            <h2 className="font-display uppercase text-4xl sm:text-6xl leading-[0.95]">
              Alguns trabalhos<br /> recentes
            </h2>
            <p className="mt-4 text-bone/70 text-lg">
              Passe o mouse nas peças pra ver o projeto. 
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[240px] gap-3 sm:gap-4">
            {portfolio.map((p, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 ${p.span}`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-royal-ink/0 group-hover:bg-royal-ink/85 transition-colors duration-500" />
                <figcaption className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-xs font-semibold tracking-widest text-gold uppercase">
                    {p.cat}
                  </span>
                  <p className="font-display uppercase text-xl sm:text-2xl mt-1 text-bone">
                    {p.title}
                  </p>
                  <ArrowUpRight className="absolute top-4 right-4 h-6 w-6 text-gold" />
                </figcaption>
                <div className="absolute top-3 left-3 bg-royal-ink/60 backdrop-blur text-bone text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-md">
                  #{String(i + 1).padStart(2, "0")}
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 sm:py-28 bg-royal-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Collage */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative h-[420px] sm:h-[500px]">
            <div className="absolute top-0 left-0 w-[65%] aspect-[4/5] rounded-2xl overflow-hidden border-4 border-royal shadow-2xl -rotate-[3deg] hover:rotate-0 transition-transform duration-500 z-10">
              <img src={p4} alt="Peça em acrílico" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-4 right-0 w-[60%] aspect-square rounded-2xl overflow-hidden border-4 border-gold shadow-2xl rotate-[5deg] hover:rotate-[2deg] transition-transform duration-500 z-20">
              <img src={p5} alt="Sinalização interna" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-16 right-8 z-30 bg-royal-ink border border-gold/40 text-bone px-4 py-3 rounded-xl rotate-[3deg] shadow-xl">
              <div className="font-display text-3xl text-gold leading-none">[40]+</div>
              <div className="text-[10px] uppercase tracking-widest mt-1">anos de estrada</div>
            </div>
          </div>

          {/* Texto */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] text-gold uppercase mb-4">
              Quem somos
            </span>
            <h2 className="font-display uppercase text-4xl sm:text-6xl leading-[0.95]">
              Feito na régua, <br /> montado com <span className="neon">alma</span>.
            </h2>
            <div className="mt-6 space-y-4 text-bone/80 text-lg leading-relaxed">
              <p>
                "A Pincel Placas foi fundada nos anos 80 por Carlos Magalhães, com uma visão 
                simples: fazer placas que marcam presença. O que começou como uma oficina de 
                sinalização em Brasília cresceu para se tornar referência em comunicação visual 
                no Distrito Federal, entregando projetos para comércios, franquias e grandes 
                corporações ao longo de décadas."
              </p>
              <p>
                "Nosso compromisso vai além da produção: cuidamos de tudo, do projeto visual 
                à instalação no local, com equipe própria e materiais de primeira linha. Acreditamos 
                que uma placa bem feita é a primeira impressão que o seu cliente tem do seu 
                negócio — e não aceitamos menos que [valor principal — ex: excelência / perfeição / compromisso 
                com o prazo]. Por isso trabalhamos com ACM de alta durabilidade, acrílicos cortados a laser e 
                iluminação LED de última geração."
              </p>
              <p>
                "Contamos com uma equipe de profissionais, desde designers e gravadores 
                até técnicos de instalação. Nossa estrutura de produção própria em Brasília 
                nos permite garantir qualidade e prazo em cada etapa do processo — algo que 
                nos diferencia no mercado de comunicação visual do DF."
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["ACM", "Letra caixa", "Luminosos", "Adesivação", "Acrílico", "Brindes"].map(
                (t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/15 text-bone/80"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-28 bg-royal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] text-gold uppercase mb-4">
              Dúvidas frequentes
            </span>
            <h2 className="font-display uppercase text-4xl sm:text-5xl leading-[0.95]">
              Perguntou, <br /> respondemos.
            </h2>
            <p className="mt-4 text-bone/70">
              Se a sua pergunta não está aqui, chama a gente no WhatsApp.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-gold mt-6"
            >
              <MessageCircle className="h-4 w-4" /> Perguntar agora
            </a>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-white/10 rounded-xl bg-white/[0.04] px-5 data-[state=open]:bg-white/[0.07] data-[state=open]:border-gold/40 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-bone hover:text-gold hover:no-underline text-base sm:text-lg py-5 [&>svg]:hidden group">
                    <span>{f.q}</span>
                    <Plus className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-data-[state=open]:rotate-45" />
                  </AccordionTrigger>
                  <AccordionContent className="text-bone/75 text-[15px] leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-gold text-royal-ink relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-royal/20 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-royal-ink/20 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Vamos conversar
            </span>
            <h2 className="font-display uppercase text-5xl sm:text-7xl leading-[0.88]">
              Bora acender <br /> a sua marca?
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-royal-ink/85 max-w-xl">
              Manda uma mensagem com o que você precisa. Retornamos o orçamento rápido,
              sem enrolação.
            </p>
          </div>

          <div className="space-y-3">
            <ContactCard
              href={WHATSAPP_URL}
              icon={MessageCircle}
              label="WhatsApp"
              value="Chamar agora"
              hint="Resposta rápida em horário comercial"
            />
            <ContactCard
              href={INSTAGRAM_URL}
              icon={Instagram}
              label="Instagram"
              value="@pincelplacas"
              hint="Veja os trabalhos mais recentes"
            />
            <ContactCard
              href="#"
              icon={MapPin}
              label="Localização"
              value="Brasília / DF"
              hint="Atendemos todo o Brasil"
              nolink
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-royal-ink border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-bone/60">
          <img src={logo} alt="Pincel Placas" className="h-8 w-auto opacity-80" />
          <p>© {new Date().getFullYear()} Pincel Print · Comunicação Visual em Brasília/DF</p>
        </div>
      </footer>
    </div>
  );
}

// ---------- SUBCOMPONENTS ----------
function FlipCard({ s, n }: { s: Servico; n: number }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="group relative h-[280px] sm:h-[300px] [perspective:1200px]"
      onClick={() => setFlipped((v) => !v)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl border border-white/10 bg-white/[0.04] p-6 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
              <s.icon className="h-6 w-6" />
            </div>
            <span className="font-display text-xl text-bone/40">
              {String(n).padStart(2, "0")}
            </span>
          </div>
          <div>
            <h3 className="font-display uppercase text-2xl leading-tight">{s.title}</h3>
            <p className="mt-2 text-bone/70 text-[15px] leading-relaxed">{s.short}</p>
            <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
              Saber mais <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-gold text-royal-ink p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-start justify-between">
              <s.icon className="h-8 w-8" />
              <span className="font-display text-xl opacity-50">
                {String(n).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-4 font-display uppercase text-2xl leading-tight">{s.title}</h3>
            <p className="mt-3 text-royal-ink/85 text-[15px] leading-relaxed">{s.detail}</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {s.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-royal-ink text-gold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactCard({
  href,
  icon: Icon,
  label,
  value,
  hint,
  nolink,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  hint: string;
  nolink?: boolean;
}) {
  const Tag: any = nolink ? "div" : "a";
  const linkProps = nolink ? {} : { href, target: "_blank", rel: "noreferrer" };
  return (
    <Tag
      {...linkProps}
      className="group flex items-center gap-4 rounded-2xl bg-royal-ink text-bone p-5 hover:-translate-y-1 hover:shadow-2xl transition-all"
    >
      <div className="shrink-0 h-12 w-12 rounded-xl bg-gold/15 text-gold inline-flex items-center justify-center group-hover:bg-gold group-hover:text-royal-ink transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] font-bold uppercase tracking-widest text-gold">
          {label}
        </div>
        <div className="font-display uppercase text-xl truncate">{value}</div>
        <div className="text-xs text-bone/60 mt-0.5">{hint}</div>
      </div>
      {!nolink && (
        <ArrowUpRight className="h-5 w-5 text-bone/50 group-hover:text-gold shrink-0" />
      )}
    </Tag>
  );
}
