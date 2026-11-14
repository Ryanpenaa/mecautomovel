import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Check, ChevronDown, CircleCheck, Cog, Gauge, GraduationCap, Laptop, Monitor, Play, Settings, ShieldCheck, Smartphone, Tablet, Wrench, Zap, CarFront, Disc3, Fuel, ScanLine, ClipboardCheck, CircuitBoard, BatteryCharging, CircleGauge, Workflow, Waypoints } from "lucide-react";
import { offer } from "../lib/offer-pt";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Formação em Mecânica Automóvel | Aprenda Online" },
    { name: "description", content: "Mais de 80 videoaulas práticas de mecânica automóvel. Aprenda motores, travões, eletricidade, suspensão e diagnóstico ao seu ritmo." },
    { property: "og:title", content: "Formação em Mecânica Automóvel" },
    { property: "og:description", content: "Aprenda mecânica automóvel desde o início, ao seu ritmo." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Home,
});

const modules = [
  { title: "Motores a gasolina e diesel", icon: Cog, detail: "Conheça os principais componentes e o funcionamento do motor.", tone: "amber" },
  { title: "Sistema de alimentação", icon: Fuel, detail: "Compreenda o circuito de alimentação de combustível.", tone: "sky" },
  { title: "Injeção eletrónica", icon: CircuitBoard, detail: "Explore sensores, atuadores e gestão eletrónica.", tone: "emerald" },
  { title: "Sistema elétrico automóvel", icon: BatteryCharging, detail: "Aprenda os fundamentos dos circuitos elétricos do carro.", tone: "yellow" },
  { title: "Sistema de travagem", icon: Disc3, detail: "Conheça os componentes dos travões e a sua manutenção.", tone: "rose" },
  { title: "Suspensão e direção", icon: CircleGauge, detail: "Identifique os principais componentes destes sistemas.", tone: "indigo" },
  { title: "Embraiagem e caixa de velocidades", icon: Workflow, detail: "Descubra como funciona a ligação entre motor e caixa.", tone: "orange" },
  { title: "Transmissão automóvel", icon: Waypoints, detail: "Entenda como a força chega às rodas.", tone: "teal" },
  { title: "Manutenção preventiva", icon: ClipboardCheck, detail: "Saiba quais as verificações e revisões habituais.", tone: "lime" },
  { title: "Diagnóstico de avarias", icon: ScanLine, detail: "Conheça procedimentos básicos de identificação de falhas.", tone: "violet" },
];
const iconTones: Record<string, string> = {
  amber: "bg-amber-50 text-amber-700 ring-amber-200",
  sky: "bg-sky-50 text-sky-700 ring-sky-200",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  yellow: "bg-yellow-50 text-yellow-700 ring-yellow-200",
  rose: "bg-rose-50 text-rose-700 ring-rose-200",
  indigo: "bg-indigo-50 text-indigo-700 ring-indigo-200",
  orange: "bg-orange-50 text-orange-700 ring-orange-200",
  teal: "bg-teal-50 text-teal-700 ring-teal-200",
  lime: "bg-lime-50 text-lime-700 ring-lime-200",
  violet: "bg-violet-50 text-violet-700 ring-violet-200",
};
const lessons = ["Fundamentos da mecânica automóvel","Funcionamento dos motores","Componentes internos do motor","Sistema elétrico automóvel","Injeção eletrónica","Travões e segurança","Suspensão e direção","Embraiagem e transmissão","Diagnóstico de avarias","Revisão e manutenção preventiva"];
const faq = [
  ["Preciso de experiência para começar?","Não. A formação começa pelos fundamentos e foi pensada também para quem nunca estudou mecânica automóvel."],
  ["O curso é adequado para principiantes?","Sim. As videoaulas apresentam os conceitos de forma progressiva, facilitando a aprendizagem desde o início."],
  ["Como posso assistir às aulas?","A formação é online e pode ser consultada no telemóvel, tablet ou computador, com ligação à Internet."],
  ["Durante quanto tempo tenho acesso?","Acesso vitalício."],
  ["Recebo um certificado?","Emissão de um certificado digital de conclusão."],
  ["Os materiais extra estão incluídos?","Sim. Além das videoaulas, os nossos alunos recebem materiais de apoio em PDF para consultar sempre que precisarem."],
  ["Como funciona a garantia de 7 dias?","A sua compra tem uma garantia de 7 dias através da plataforma Hotmart. Durante esse período, pode solicitar o reembolso pela plataforma. Esta garantia não limita os seus direitos legais enquanto consumidor."],
  ["Como faço a inscrição?","A inscrição é realizada através da plataforma Hotmart. Após a confirmação da compra, recebe as instruções para aceder à formação."],
];
function todayPT() {
  return new Intl.DateTimeFormat("pt-PT", { day: "numeric", month: "2-digit", timeZone: "Europe/Lisbon" }).format(new Date());
}
function VisitTimer() {
  const [seconds, setSeconds] = useState(720);
  useEffect(() => {
    // Contador de visita; não representa um prazo de compra nem expiração de preço.
    const key = "mecautomovel-pt-visit-timer-end";
    const now = Date.now();
    let end = Number(sessionStorage.getItem(key));
    if (!Number.isFinite(end) || end <= 0) {
      end = now + 12 * 60 * 1000;
      sessionStorage.setItem(key, String(end));
    }
    const update = () => setSeconds(Math.max(0, Math.ceil((end - Date.now()) / 1000)));
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);
  return <span aria-label="Contador desta visita" className="whitespace-nowrap font-black tabular-nums">{String(Math.floor(seconds / 60)).padStart(2, "0")}:{String(seconds % 60).padStart(2, "0")}</span>;
}
function Cta({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <a href="#planos" className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-extrabold tracking-wide transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 ${dark ? "bg-slate-950 text-white hover:bg-slate-800" : "bg-amber-400 text-slate-950 hover:bg-amber-300"}`}>{children}<ArrowRight size={18}/></a>;
}
function Heading({ eyebrow, title, desc }: { eyebrow?: string; title: string; desc?: string }) {
  return <div className="mx-auto mb-10 max-w-3xl text-center">{eyebrow && <p className="mb-3 text-xs font-extrabold tracking-[0.22em] text-amber-600">{eyebrow}</p>}<h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">{title}</h2>{desc && <p className="mt-4 text-base leading-relaxed text-slate-600">{desc}</p>}</div>;
}
function VehicleArt() {
  return <div className="relative mx-auto w-full max-w-xl">
    <img
      src="/mecanica-automovel-hero.webp"
      width={1920}
      height={1088}
      alt="Formação em Mecânica Automóvel: caixa do curso, livros de mecânica, computador com videoaulas, tablet com sistema de travagem e smartphone com aulas, numa bancada de oficina com um automóvel de capô aberto ao fundo"
      loading="eager"
      fetchPriority="high"
      decoding="async"
      className="w-full rounded-[1.25rem] border border-slate-200 shadow-xl"
    />
  </div>;
}
function Home() {
  const [opened, setOpened] = useState<number | null>(0);
  return <main className="min-h-screen bg-[#f8fafc] text-slate-900">
    <div className="bg-amber-400 px-4 py-2.5 text-center text-xs font-black tracking-wider text-slate-950 sm:text-sm">🔥 Só HOJE <span className="ml-2 font-semibold normal-case tracking-normal">• {todayPT()} • </span><VisitTimer/></div>
    <header className="relative overflow-hidden bg-white pb-16 pt-12 text-slate-950 sm:pt-16">
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <div className="text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-extrabold tracking-widest text-amber-700"><GraduationCap size={17}/> FORMAÇÃO ONLINE EM MECÂNICA AUTOMÓVEL</p>
          <h1 className="text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.5rem]">Aprenda Mecânica Automóvel do Zero com <span className="text-amber-600">Mais de 80 Videoaulas Práticas</span></h1>
          <div className="mx-auto my-7 max-w-3xl"><VehicleArt/></div>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600">Descubra como funcionam os motores, travões, suspensão, injeção eletrónica e diagnóstico automóvel. Aprenda ao seu ritmo, mesmo sem experiência.</p>
          <div className="mt-7 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-100 px-4 py-3 text-xs font-black tracking-wider"><Play size={18} className="text-amber-600"/> CURSO 100% ONLINE EM VIDEOAULAS</div>
          <div className="mt-8"><Cta>QUERO COMEÇAR AGORA</Cta></div>
          <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-slate-600"><span>Acesso imediato</span><span>•</span><span>Pagamento seguro</span><span>•</span><span>Garantia de 7 dias</span></p>
          <p className="mt-2 text-xs text-slate-500">Pré-visualização: inscrições e pagamentos ainda indisponíveis.</p>
        </div>
      </div>
    </header>

    <section id="conteudo" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <Heading eyebrow="CONTEÚDO DA FORMAÇÃO" title="O Que Vai Aprender" desc="Aprenda os fundamentos da mecânica automóvel e compreenda os principais sistemas de um veículo, desde a manutenção preventiva até à identificação de avarias."/>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
        {modules.map(({ title, icon: Icon, detail, tone }, i) => (
          <article key={title} className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-amber-300 hover:shadow-lg sm:p-5">
            <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ring-1 transition-transform group-hover:scale-105 sm:h-20 sm:w-20 ${iconTones[tone]}`}>
              <Icon className="h-9 w-9 sm:h-11 sm:w-11" strokeWidth={1.7} aria-hidden="true" />
            </div>
            <p className="mb-1 text-xs font-bold text-amber-600">MÓDULO {String(i + 1).padStart(2, "0")}</p>
            <h3 className="text-sm font-extrabold leading-snug sm:text-base">{title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">{detail}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="bg-white px-5 py-20"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
      <div><p className="mb-3 text-xs font-extrabold tracking-widest text-amber-600">A SUA PLATAFORMA DE APRENDIZAGEM</p><h2 className="text-3xl font-black leading-tight sm:text-4xl">Estude ao Seu Ritmo, Onde e Quando Quiser</h2><p className="mt-5 leading-relaxed text-slate-600">Aceda às videoaulas organizadas por módulos e consulte os materiais de apoio através do telemóvel, tablet ou computador.</p><div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-slate-700"><span className="flex gap-2"><Smartphone size={19}/> Telemóvel</span><span className="flex gap-2"><Tablet size={19}/> Tablet</span><span className="flex gap-2"><Laptop size={19}/> Computador</span></div></div>
      <div className="rounded-3xl bg-slate-950 p-5 text-white shadow-xl sm:p-8"><div className="mb-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4"><div className="rounded-lg bg-amber-400 p-3 text-slate-950"><Monitor/></div><div><p className="font-bold">Aulas de Mecânica Automóvel</p><p className="text-xs text-slate-300">Exemplo ilustrativo da navegação</p></div></div><div className="grid grid-cols-2 gap-2">{lessons.slice(0,6).map((a,i)=><div key={a} className="flex items-center gap-2 rounded-lg bg-white/10 p-3 text-xs"><Play size={14} className="shrink-0 text-amber-400"/><span>{a}</span></div>)}</div><p className="mt-4 text-xs text-slate-400">Títulos ilustrativos, sujeitos a conferência com a biblioteca efetiva de aulas.</p></div>
    </div></section>

    <section className="mx-auto max-w-7xl px-5 py-20"><Heading eyebrow="EXCLUSIVO DO PLANO PROFISSIONAL" title="10 Bónus Para Complementar a Sua Formação" desc="Guias práticos e materiais de consulta propostos para aprofundar conhecimentos e acompanhar a sua aprendizagem."/>
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-2xl"><img src="/bonus-mecanica-automovel.webp" width={1920} height={1080} loading="lazy" decoding="async" className="block h-auto w-full" alt="Mockup ilustrativo dos 10 bónus propostos do Plano Profissional: dez manuais de mecânica automóvel em duas filas, numa oficina, com uma representação gerada do formador à esquerda; materiais por validar."/></div>
    </section>

    <section id="planos" className="bg-slate-950 px-5 py-20 text-white"><div className="mx-auto max-w-5xl"><div className="[&_h2]:text-white [&_p]:text-slate-300"><Heading title="Escolha Como Quer Começar" desc="Duas opções para iniciar a sua aprendizagem em mecânica automóvel."/></div><div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-3xl border border-white/20 bg-white/5 p-7 sm:p-9"><h3 className="text-xl font-black">PLANO BÁSICO</h3><p className="mt-5 text-5xl font-black">{offer.basic.price.toLocaleString("pt-PT",{style:"currency",currency:"EUR"})}</p><p className="mt-2 text-sm text-slate-400">Preço de teste</p><ul className="my-8 space-y-4">{["Mais de 80 videoaulas","Formação 100% online","Acesso vitalício"].map(t=><li key={t} className="flex gap-3"><Check className="shrink-0 text-amber-400"/>{t}</li>)}</ul><button disabled className="w-full cursor-not-allowed rounded-xl border border-white/30 px-4 py-4 font-extrabold text-slate-200 opacity-70">COMEÇAR COM O BÁSICO</button><p className="mt-3 text-center text-xs text-slate-400">Checkout por configurar</p></div>
      <div className="relative rounded-3xl border-2 border-amber-400 bg-white p-7 text-slate-950 shadow-[0_0_55px_rgba(251,191,36,.17)] sm:p-9"><div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-5 py-2 text-xs font-black">MAIS COMPLETO</div><h3 className="text-xl font-black">PLANO PROFISSIONAL</h3><p className="mt-5 text-5xl font-black">{offer.professional.price.toLocaleString("pt-PT",{style:"currency",currency:"EUR"})}</p><p className="mt-2 text-sm text-slate-500">Preço de teste</p><ul className="my-8 space-y-4">{["Mais de 80 videoaulas","Certificado digital de conclusão*","Acesso vitalício","Materiais de apoio sujeitos a validação","10 bónus exclusivos, após validação"].map(t=><li key={t} className="flex gap-3"><CircleCheck className="shrink-0 text-amber-600"/>{t}</li>)}</ul><button disabled className="w-full cursor-not-allowed rounded-xl bg-slate-900 px-4 py-4 font-extrabold text-white opacity-70">QUERO O PLANO PROFISSIONAL</button><p className="mt-3 text-center text-xs text-slate-500">Checkout por configurar</p><p className="mt-5 text-xs leading-relaxed text-slate-500">*Não constitui, por si só, uma certificação profissional oficialmente reconhecida em Portugal.</p></div>
    </div></div></section>

    <section className="mx-auto max-w-6xl px-5 py-20"><Heading title="O Que Dizem os Nossos Alunos"/><div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center"><p className="font-semibold">Avaliações da formação automóvel ainda por verificar.</p><p className="mt-2 text-sm text-slate-500">Este espaço será apresentado com testemunhos reais e autorizados, quando disponíveis.</p></div></section>

    <section className="bg-amber-400 px-5 py-20"><div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2"><div><p className="mb-4 text-xs font-black tracking-widest">UMA COMPETÊNCIA PARA O DIA A DIA</p><h2 className="text-3xl font-black leading-tight sm:text-4xl">Os Automóveis Precisam de Manutenção. Aprenda a Compreender Como Funcionam.</h2><p className="mt-5 leading-relaxed">Desde pequenas verificações até ao diagnóstico de sistemas automóveis, desenvolva conhecimentos úteis para cuidar melhor do seu veículo e explorar o universo da mecânica.</p><div className="mt-7"><Cta dark>QUERO APRENDER MECÂNICA AUTOMÓVEL</Cta></div></div><div className="rounded-3xl bg-slate-950 p-10 text-white"><div className="grid grid-cols-2 gap-4">{[[CarFront,"Automóveis"],[Wrench,"Ferramentas"],[Cog,"Motores"],[ScanLine,"Diagnóstico"]].map(([Icon,title])=>{const I=Icon as typeof CarFront;return <div key={title as string} className="flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/5"><I size={40} className="text-amber-400"/><span className="text-sm font-bold">{title as string}</span></div>})}</div></div></div></section>

    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2"><img src="/certificado-mecanica-automovel.webp" width={1600} height={1200} loading="lazy" decoding="async" className="block h-auto w-full rounded-2xl" alt="Mockup ilustrativo, não emitido, de Certificado de Conclusão da Formação em Mecânica Automóvel: fundo marfim, moldura azul-marinho e dourada, Nome do Aluno e assinatura ilustrativa José Emanuel; sem fotografia e sem certificação profissional oficial."/><div><h2 className="text-3xl font-black sm:text-4xl">Certificado Digital de Conclusão</h2><p className="mt-5 leading-relaxed text-slate-600">No Plano Profissional, poderá receber um certificado digital após concluir a formação, de acordo com as condições do curso.</p><p className="mt-4 rounded-xl bg-slate-100 p-4 text-sm text-slate-700">Este documento não equivale automaticamente a certificações ou qualificações profissionais oficiais em Portugal. O modelo real ainda precisa de validação.</p></div></section>

    <section className="bg-white px-5 py-20"><div className="mx-auto flex max-w-5xl flex-col items-center gap-7 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center sm:p-14"><div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-amber-400 text-slate-950"><ShieldCheck size={27}/><strong className="text-xl">7 DIAS</strong></div><div><h2 className="text-3xl font-black">Conheça a Formação com Mais Tranquilidade</h2><p className="mx-auto mt-4 max-w-2xl text-slate-600">Explore as aulas e os materiais disponíveis. Se a formação não corresponder às suas expectativas, poderá solicitar apoio ao abrigo da garantia comercial de 7 dias, conforme as condições apresentadas na compra.</p><p className="mx-auto mt-4 max-w-2xl text-xs text-slate-500">Esta garantia comercial não substitui nem limita os direitos legais dos consumidores portugueses.</p></div><div className="flex flex-wrap justify-center gap-3"><a href="#conteudo" className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-bold">Conhecer as aulas</a><Cta dark>Ver os planos</Cta></div></div></section>

    <section className="mx-auto max-w-5xl px-5 py-20"><Heading title="Conheça o Seu Formador"/><div className="flex flex-col items-center gap-6 rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center sm:flex-row sm:text-left"><div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-slate-100"><GraduationCap size={50} className="text-slate-400"/></div><div><h3 className="text-xl font-black">Informação do formador por confirmar</h3><p className="mt-2 text-sm text-slate-600">Esta secção está reservada à identificação, fotografia e experiência profissional verificadas do formador da versão automóvel. Não foram atribuídas qualificações ou uma identidade sem confirmação.</p></div></div></section>

    <section className="bg-slate-100 px-5 py-20"><div className="mx-auto max-w-3xl"><Heading title="Perguntas Frequentes"/><div className="space-y-3">{faq.map(([question,answer],i)=><div key={question} className="overflow-hidden rounded-xl border border-slate-200 bg-white"><button type="button" aria-expanded={opened===i} aria-controls={`answer-${i}`} onClick={()=>setOpened(opened===i?null:i)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold"><span>{question}</span><ChevronDown size={19} className={`shrink-0 transition-transform ${opened===i?"rotate-180":""}`}/></button>{opened===i && <p id={`answer-${i}`} className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{answer}</p>}</div>)}</div></div></section>
    <footer className="bg-slate-950 px-5 py-9 text-center text-xs leading-relaxed text-slate-400"><p className="font-black text-white">Formação em Mecânica Automóvel</p><p className="mt-2">Pré-visualização PT-PT • Sem pagamentos ativos • Informação comercial sujeita a confirmação.</p><p className="mt-2">Preços de teste, conteúdos extra e condições de compra sujeitos a validação antes da publicação.</p></footer>
  </main>;
}
