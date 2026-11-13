import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, CircleCheck, Cog, Gauge, GraduationCap, Laptop, Monitor, Play, Settings, ShieldCheck, Smartphone, Tablet, Wrench, Zap, CarFront, Disc3, Fuel, ScanLine, ClipboardCheck, FileText } from "lucide-react";
import { offer } from "../lib/offer-pt";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Formação em Mecânica Automóvel | Aprenda Online" },
    { name: "description", content: "Mais de 80 videoaulas práticas de mecânica automóvel. Aprenda motores, travões, eletricidade, suspensão e diagnóstico ao seu ritmo." },
    { property: "og:title", content: "Formação em Mecânica Automóvel" },
    { property: "og:description", content: "Aprenda mecânica automóvel desde o início, ao seu ritmo." },
  ] }),
  component: Home,
});

const modules = [
  { title: "Motores a gasolina e diesel", icon: Cog, detail: "Conheça os principais componentes e o funcionamento do motor." },
  { title: "Sistema de alimentação", icon: Fuel, detail: "Compreenda o circuito de alimentação de combustível." },
  { title: "Injeção eletrónica", icon: Gauge, detail: "Explore sensores, atuadores e gestão eletrónica." },
  { title: "Sistema elétrico automóvel", icon: Zap, detail: "Aprenda os fundamentos dos circuitos elétricos do carro." },
  { title: "Sistema de travagem", icon: Disc3, detail: "Conheça os componentes dos travões e a sua manutenção." },
  { title: "Suspensão e direção", icon: Settings, detail: "Identifique os principais componentes destes sistemas." },
  { title: "Embraiagem e caixa de velocidades", icon: Wrench, detail: "Descubra como funciona a ligação entre motor e caixa." },
  { title: "Transmissão automóvel", icon: CarFront, detail: "Entenda como a força chega às rodas." },
  { title: "Manutenção preventiva", icon: ClipboardCheck, detail: "Saiba quais as verificações e revisões habituais." },
  { title: "Diagnóstico de avarias", icon: ScanLine, detail: "Conheça procedimentos básicos de identificação de falhas." },
];
const lessons = ["Fundamentos da mecânica automóvel","Funcionamento dos motores","Componentes internos do motor","Sistema elétrico automóvel","Injeção eletrónica","Travões e segurança","Suspensão e direção","Embraiagem e transmissão","Diagnóstico de avarias","Revisão e manutenção preventiva"];
const proposedBonuses = ["Manual Completo de Mecânica Automóvel","Tabelas de Binários de Aperto e Especificações","Guia de Diagnóstico de Avarias","Guia de Distribuição e Sincronismo do Motor","Manual de Ferramentas Essenciais","Checklist de Montagem e Verificação","Guia de Eletricidade Automóvel","Guia de Injeção Eletrónica","Manual de Manutenção Preventiva","Guia de Travões, Suspensão e Direção"];
const faq = [
  ["Preciso de experiência para começar?","Não. A formação começa pelos fundamentos e foi pensada também para quem nunca estudou mecânica automóvel."],
  ["O curso é adequado para principiantes?","Sim. As videoaulas apresentam os conceitos de forma progressiva, facilitando a aprendizagem desde o início."],
  ["Como posso assistir às aulas?","A formação é online e pode ser consultada no telemóvel, tablet ou computador, com ligação à Internet."],
  ["Durante quanto tempo tenho acesso?","Os planos indicados preveem acesso vitalício, sujeito às condições da oferta confirmadas na compra."],
  ["Recebo um certificado?","Está prevista a emissão de um certificado digital de conclusão no Plano Profissional, segundo as condições do curso. Não equivale automaticamente a uma certificação profissional oficialmente reconhecida em Portugal."],
  ["Os materiais extra estão incluídos?","A lista de materiais complementares está em validação. Só serão anunciados como incluídos depois de confirmada a sua disponibilidade."],
  ["Como funciona a garantia de 7 dias?","A oferta prevê uma garantia comercial de 7 dias, conforme as condições apresentadas na compra. Esta garantia não limita os direitos legais dos consumidores."],
  ["Como faço a inscrição?","Esta versão está em pré-visualização. A inscrição será disponibilizada quando os meios de pagamento forem confirmados."],
];
function todayPT() {
  return new Intl.DateTimeFormat("pt-PT", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Lisbon" }).format(new Date());
}
function Cta({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <a href="#planos" className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-extrabold tracking-wide transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 ${dark ? "bg-slate-950 text-white hover:bg-slate-800" : "bg-amber-400 text-slate-950 hover:bg-amber-300"}`}>{children}<ArrowRight size={18}/></a>;
}
function Heading({ eyebrow, title, desc }: { eyebrow?: string; title: string; desc?: string }) {
  return <div className="mx-auto mb-10 max-w-3xl text-center">{eyebrow && <p className="mb-3 text-xs font-extrabold tracking-[0.22em] text-amber-600">{eyebrow}</p>}<h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">{title}</h2>{desc && <p className="mt-4 text-base leading-relaxed text-slate-600">{desc}</p>}</div>;
}
function VehicleArt() {
  return <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-slate-700 bg-gradient-to-br from-slate-700 via-slate-900 to-slate-950 p-6 shadow-2xl sm:p-10" role="img" aria-label="Ilustração de um automóvel em oficina, equipamento de diagnóstico e ferramentas">
    <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs text-white"><Wrench size={14}/> Oficina automóvel</div>
    <div className="absolute -left-12 top-1/3 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl"/>
    <div className="relative mt-14 flex min-h-64 flex-col justify-end rounded-2xl border border-white/10 bg-gradient-to-b from-slate-700/80 to-slate-950 p-5">
      <div className="absolute left-5 top-5 flex flex-col gap-2"><div className="h-1 w-24 rounded bg-amber-400"/><div className="h-1 w-16 rounded bg-white/30"/></div>
      <svg viewBox="0 0 440 190" className="relative w-full drop-shadow-2xl" aria-hidden="true">
        <defs><linearGradient id="paint" x1="0" x2="1"><stop stopColor="#e2e8f0"/><stop offset="0.5" stopColor="#9ca3af"/><stop offset="1" stopColor="#f8fafc"/></linearGradient></defs>
        <path d="M45 115 L75 98 L115 49 Q123 39 150 37 L284 37 Q304 38 320 55 L363 100 L398 111 Q409 117 409 133 L409 152 L31 152 L31 133 Q31 120 45 115Z" fill="url(#paint)"/>
        <path d="M130 52 L279 52 Q292 52 301 65 L332 101 L94 101Z" fill="#172438"/>
        <path d="M210 52 L210 101" stroke="#64748b" strokeWidth="5"/>
        <path d="M45 116 L83 111 M352 113 L395 121" stroke="#fbbf24" strokeWidth="8" strokeLinecap="round"/>
        <circle cx="114" cy="151" r="30" fill="#0f172a"/><circle cx="114" cy="151" r="15" fill="#94a3b8"/>
        <circle cx="330" cy="151" r="30" fill="#0f172a"/><circle cx="330" cy="151" r="15" fill="#94a3b8"/>
      </svg>
      <div className="relative mt-4 flex items-center justify-between gap-3"><div><p className="text-xs font-bold tracking-widest text-amber-400">FORMAÇÃO ONLINE</p><p className="mt-1 text-xl font-black text-white sm:text-2xl">Mecânica Automóvel</p></div><div className="rounded-xl bg-amber-400 p-3 text-slate-950"><Cog size={28}/></div></div>
    </div>
    <div className="relative mt-4 grid grid-cols-3 gap-2 text-center text-[11px] font-bold text-slate-200"><span className="rounded-xl bg-white/10 p-3">MOTORES</span><span className="rounded-xl bg-white/10 p-3">TRAVÕES</span><span className="rounded-xl bg-white/10 p-3">DIAGNÓSTICO</span></div>
  </div>;
}
function Home() {
  const [opened, setOpened] = useState<number | null>(0);
  return <main className="min-h-screen bg-[#f8fafc] text-slate-900">
    <div className="bg-amber-400 px-4 py-2.5 text-center text-xs font-black tracking-wider text-slate-950 sm:text-sm">🔥 OFERTA ESPECIAL DE HOJE <span className="ml-2 font-semibold normal-case tracking-normal">• {todayPT()}</span></div>
    <header className="relative overflow-hidden bg-slate-950 pb-20 pt-14 text-white sm:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(251,191,36,.12),transparent_48%)]"/>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="text-center lg:text-left">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-xs font-extrabold tracking-widest text-amber-300"><GraduationCap size={17}/> FORMAÇÃO ONLINE EM MECÂNICA AUTOMÓVEL</p>
          <h1 className="text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.5rem]">Aprenda Mecânica Automóvel do Zero com <span className="text-amber-400">Mais de 80 Videoaulas Práticas</span></h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300 lg:mx-0">Descubra como funcionam os motores, travões, suspensão, injeção eletrónica e diagnóstico automóvel. Aprenda ao seu ritmo, mesmo sem experiência.</p>
          <div className="mt-7 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-xs font-black tracking-wider"><Play size={18} className="text-amber-400"/> CURSO 100% ONLINE EM VIDEOAULAS</div>
          <div className="mt-8"><Cta>QUERO COMEÇAR AGORA</Cta></div>
          <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-slate-300 lg:justify-start"><span>Acesso imediato</span><span>•</span><span>Pagamento seguro</span><span>•</span><span>Garantia de 7 dias</span></p>
          <p className="mt-2 text-xs text-slate-400">Pré-visualização: inscrições e pagamentos ainda indisponíveis.</p>
        </div>
        <VehicleArt/>
      </div>
    </header>

    <section id="conteudo" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <Heading eyebrow="CONTEÚDO DA FORMAÇÃO" title="O Que Vai Aprender" desc="Aprenda os fundamentos da mecânica automóvel e compreenda os principais sistemas de um veículo, desde a manutenção preventiva até à identificação de avarias."/>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">{modules.map(({title,icon: Icon,detail},i)=><article key={title} className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-amber-300 hover:shadow-lg sm:p-5"><div className="mb-4 flex h-20 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800 transition group-hover:from-amber-100 group-hover:to-orange-100"><Icon className="h-10 w-10" strokeWidth={1.5}/></div><p className="mb-1 text-xs font-bold text-amber-600">MÓDULO {String(i+1).padStart(2,"0")}</p><h3 className="text-sm font-extrabold leading-snug sm:text-base">{title}</h3><p className="mt-2 hidden text-xs leading-relaxed text-slate-500 sm:block">{detail}</p></article>)}</div>
    </section>

    <section className="bg-white px-5 py-20"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
      <div><p className="mb-3 text-xs font-extrabold tracking-widest text-amber-600">A SUA PLATAFORMA DE APRENDIZAGEM</p><h2 className="text-3xl font-black leading-tight sm:text-4xl">Estude ao Seu Ritmo, Onde e Quando Quiser</h2><p className="mt-5 leading-relaxed text-slate-600">Aceda às videoaulas organizadas por módulos e consulte os materiais de apoio através do telemóvel, tablet ou computador.</p><div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-slate-700"><span className="flex gap-2"><Smartphone size={19}/> Telemóvel</span><span className="flex gap-2"><Tablet size={19}/> Tablet</span><span className="flex gap-2"><Laptop size={19}/> Computador</span></div><div className="mt-8"><Cta>CONHECER OS PLANOS</Cta></div></div>
      <div className="rounded-3xl bg-slate-950 p-5 text-white shadow-xl sm:p-8"><div className="mb-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4"><div className="rounded-lg bg-amber-400 p-3 text-slate-950"><Monitor/></div><div><p className="font-bold">Aulas de Mecânica Automóvel</p><p className="text-xs text-slate-300">Exemplo ilustrativo da navegação</p></div></div><div className="grid grid-cols-2 gap-2">{lessons.slice(0,6).map((a,i)=><div key={a} className="flex items-center gap-2 rounded-lg bg-white/10 p-3 text-xs"><Play size={14} className="shrink-0 text-amber-400"/><span>{a}</span></div>)}</div><p className="mt-4 text-xs text-slate-400">Títulos ilustrativos, sujeitos a conferência com a biblioteca efetiva de aulas.</p></div>
    </div></section>

    <section className="mx-auto max-w-7xl px-5 py-20"><Heading eyebrow="EXCLUSIVO DO PLANO PROFISSIONAL" title="10 Bónus Para Complementar a Sua Formação" desc="Guias práticos e materiais de consulta propostos para aprofundar conhecimentos e acompanhar a sua aprendizagem."/>
      <div className="mb-7 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950"><strong>Disponibilidade por validar:</strong> esta é a lista proposta de materiais. Nenhum destes dez bónus está anunciado como incluído até ser confirmada a sua existência.</div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{proposedBonuses.map((name,i)=><div key={name} className="rounded-2xl border border-slate-200 bg-white p-4"><div className="relative mb-4 flex h-36 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 text-amber-400"><FileText size={49}/><span className="absolute bottom-3 left-3 text-xs font-black text-white">GUIA {String(i+1).padStart(2,"0")}</span></div><h3 className="text-sm font-bold leading-snug">{name}</h3><p className="mt-2 text-xs text-slate-500">Proposto • por validar</p></div>)}</div>
    </section>

    <section id="planos" className="bg-slate-950 px-5 py-20 text-white"><div className="mx-auto max-w-5xl"><div className="[&_h2]:text-white [&_p]:text-slate-300"><Heading title="Escolha Como Quer Começar" desc="Duas opções para iniciar a sua aprendizagem em mecânica automóvel."/></div><div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-3xl border border-white/20 bg-white/5 p-7 sm:p-9"><h3 className="text-xl font-black">PLANO BÁSICO</h3><p className="mt-5 text-5xl font-black">{offer.basic.price.toLocaleString("pt-PT",{style:"currency",currency:"EUR"})}</p><p className="mt-2 text-sm text-slate-400">Preço de teste</p><ul className="my-8 space-y-4">{["Mais de 80 videoaulas","Formação 100% online","Acesso vitalício"].map(t=><li key={t} className="flex gap-3"><Check className="shrink-0 text-amber-400"/>{t}</li>)}</ul><button disabled className="w-full cursor-not-allowed rounded-xl border border-white/30 px-4 py-4 font-extrabold text-slate-200 opacity-70">COMEÇAR COM O BÁSICO</button><p className="mt-3 text-center text-xs text-slate-400">Checkout por configurar</p></div>
      <div className="relative rounded-3xl border-2 border-amber-400 bg-white p-7 text-slate-950 shadow-[0_0_55px_rgba(251,191,36,.17)] sm:p-9"><div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-5 py-2 text-xs font-black">MAIS COMPLETO</div><h3 className="text-xl font-black">PLANO PROFISSIONAL</h3><p className="mt-5 text-5xl font-black">{offer.professional.price.toLocaleString("pt-PT",{style:"currency",currency:"EUR"})}</p><p className="mt-2 text-sm text-slate-500">Preço de teste</p><ul className="my-8 space-y-4">{["Mais de 80 videoaulas","Certificado digital de conclusão*","Acesso vitalício","Materiais de apoio sujeitos a validação","10 bónus exclusivos, após validação"].map(t=><li key={t} className="flex gap-3"><CircleCheck className="shrink-0 text-amber-600"/>{t}</li>)}</ul><button disabled className="w-full cursor-not-allowed rounded-xl bg-slate-900 px-4 py-4 font-extrabold text-white opacity-70">QUERO O PLANO PROFISSIONAL</button><p className="mt-3 text-center text-xs text-slate-500">Checkout por configurar</p><p className="mt-5 text-xs leading-relaxed text-slate-500">*Não constitui, por si só, uma certificação profissional oficialmente reconhecida em Portugal.</p></div>
    </div></div></section>

    <section className="mx-auto max-w-6xl px-5 py-20"><Heading title="O Que Dizem os Nossos Alunos"/><div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center"><p className="font-semibold">Avaliações da formação automóvel ainda por verificar.</p><p className="mt-2 text-sm text-slate-500">Este espaço será apresentado com testemunhos reais e autorizados, quando disponíveis.</p></div></section>

    <section className="bg-amber-400 px-5 py-20"><div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2"><div><p className="mb-4 text-xs font-black tracking-widest">UMA COMPETÊNCIA PARA O DIA A DIA</p><h2 className="text-3xl font-black leading-tight sm:text-4xl">Os Automóveis Precisam de Manutenção. Aprenda a Compreender Como Funcionam.</h2><p className="mt-5 leading-relaxed">Desde pequenas verificações até ao diagnóstico de sistemas automóveis, desenvolva conhecimentos úteis para cuidar melhor do seu veículo e explorar o universo da mecânica.</p><div className="mt-7"><Cta dark>QUERO APRENDER MECÂNICA AUTOMÓVEL</Cta></div></div><div className="rounded-3xl bg-slate-950 p-10 text-white"><div className="grid grid-cols-2 gap-4">{[[CarFront,"Automóveis"],[Wrench,"Ferramentas"],[Cog,"Motores"],[ScanLine,"Diagnóstico"]].map(([Icon,title])=>{const I=Icon as typeof CarFront;return <div key={title as string} className="flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/5"><I size={40} className="text-amber-400"/><span className="text-sm font-bold">{title as string}</span></div>})}</div></div></div></section>

    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2"><div className="rounded-3xl border-8 border-slate-800 bg-white p-8 text-center shadow-2xl"><GraduationCap className="mx-auto mb-4 text-amber-600" size={44}/><p className="text-xs font-extrabold tracking-widest text-slate-500">EXEMPLO ILUSTRATIVO — NÃO É UM CERTIFICADO EMITIDO</p><h3 className="my-6 font-serif text-3xl text-slate-900">Certificado de Conclusão</h3><p className="text-sm text-slate-500">Modelo ilustrativo sujeito à confirmação do documento real.</p><div className="mt-8 h-1 bg-amber-400"/></div><div><h2 className="text-3xl font-black sm:text-4xl">Certificado Digital de Conclusão</h2><p className="mt-5 leading-relaxed text-slate-600">No Plano Profissional, poderá receber um certificado digital após concluir a formação, de acordo com as condições do curso.</p><p className="mt-4 rounded-xl bg-slate-100 p-4 text-sm text-slate-700">Este documento não equivale automaticamente a certificações ou qualificações profissionais oficiais em Portugal. O modelo real ainda precisa de validação.</p></div></section>

    <section className="bg-white px-5 py-20"><div className="mx-auto flex max-w-5xl flex-col items-center gap-7 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center sm:p-14"><div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-amber-400 text-slate-950"><ShieldCheck size={27}/><strong className="text-xl">7 DIAS</strong></div><div><h2 className="text-3xl font-black">Conheça a Formação com Mais Tranquilidade</h2><p className="mx-auto mt-4 max-w-2xl text-slate-600">Explore as aulas e os materiais disponíveis. Se a formação não corresponder às suas expectativas, poderá solicitar apoio ao abrigo da garantia comercial de 7 dias, conforme as condições apresentadas na compra.</p><p className="mx-auto mt-4 max-w-2xl text-xs text-slate-500">Esta garantia comercial não substitui nem limita os direitos legais dos consumidores portugueses.</p></div><div className="flex flex-wrap justify-center gap-3"><a href="#conteudo" className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-bold">Conhecer as aulas</a><Cta dark>Ver os planos</Cta></div></div></section>

    <section className="mx-auto max-w-5xl px-5 py-20"><Heading title="Conheça o Seu Formador"/><div className="flex flex-col items-center gap-6 rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center sm:flex-row sm:text-left"><div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-slate-100"><GraduationCap size={50} className="text-slate-400"/></div><div><h3 className="text-xl font-black">Informação do formador por confirmar</h3><p className="mt-2 text-sm text-slate-600">Esta secção está reservada à identificação, fotografia e experiência profissional verificadas do formador da versão automóvel. Não foram atribuídas qualificações ou uma identidade sem confirmação.</p></div></div></section>

    <section className="bg-slate-100 px-5 py-20"><div className="mx-auto max-w-3xl"><Heading title="Perguntas Frequentes"/><div className="space-y-3">{faq.map(([question,answer],i)=><div key={question} className="overflow-hidden rounded-xl border border-slate-200 bg-white"><button type="button" aria-expanded={opened===i} aria-controls={`answer-${i}`} onClick={()=>setOpened(opened===i?null:i)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold"><span>{question}</span><ChevronDown size={19} className={`shrink-0 transition-transform ${opened===i?"rotate-180":""}`}/></button>{opened===i && <p id={`answer-${i}`} className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{answer}</p>}</div>)}</div></div></section>
    <footer className="bg-slate-950 px-5 py-9 text-center text-xs leading-relaxed text-slate-400"><p className="font-black text-white">Formação em Mecânica Automóvel</p><p className="mt-2">Pré-visualização PT-PT • Sem pagamentos ativos • Informação comercial sujeita a confirmação.</p><p className="mt-2">Preços de teste, conteúdos extra e condições de compra sujeitos a validação antes da publicação.</p></footer>
  </main>;
}
