import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Star, X, ArrowRight, Check, ChevronDown, CircleCheck, Cog, Gauge, GraduationCap, Laptop, Monitor, Play, Settings, ShieldCheck, Smartphone, Tablet, Wrench, Zap, CarFront, Disc3, Fuel, ScanLine, ClipboardCheck, CircuitBoard, BatteryCharging, CircleGauge, Workflow, Waypoints } from "lucide-react";
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
  ["Como funciona a garantia de 15 dias?","A formação inclui um prazo de 15 dias para solicitar o reembolso através da Hotmart, contado segundo as condições da compra. Este prazo não limita os direitos legais do consumidor, incluindo o direito de livre resolução quando aplicável."],
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
const studentReviews = [
  { name: "Guilherme da Paz", image: "https://mecanicoautomotiva.lovable.app/__l5e/assets-v1/5ad4430d-077f-40ed-a8ac-f44fa11d4f01/guilherme.webp", review: "Curso 5 estrelas, muito bom. Voltei só para comentar porque, quando comprei, estava com muito medo de ser golpe." },
  { name: "Jennifer S. Luz", image: "https://mecanicoautomotiva.lovable.app/__l5e/assets-v1/27556a6b-1d2f-4c61-9e0b-85fe70542fbb/jennifer.webp", review: "Recomendo muito mesmo. Realizei o curso e peguei meu certificado." },
  { name: "Carlos Gomes", image: "https://mecanicoautomotiva.lovable.app/__l5e/assets-v1/0336291c-4504-4a17-aa34-9d751c1321ab/carlos.webp", review: "Revisei principalmente pelo material ilustrado e pelas apostilas. Muito bom o curso todo." },
];
function StudentReviews() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [saved, setSaved] = useState(false);
  function saveDraft(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !rating || !comment.trim()) return;
    try {
      localStorage.setItem("mecautomovel-review-draft", JSON.stringify({ name: name.trim(), rating, comment: comment.trim() }));
      setSaved(true);
    } catch { setSaved(false); }
  }
  return <section aria-labelledby="reviews-title" className="bg-white px-5 py-20">
    <div className="mx-auto max-w-6xl">
      <div className="mb-10 text-center">
        <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[10px] font-black tracking-[0.16em] text-blue-700">PROVA SOCIAL</span>
        <h2 id="reviews-title" className="mt-5 text-2xl font-black uppercase text-slate-950 sm:text-3xl">O Que Nossos Alunos Estão Dizendo</h2>
        <p className="mt-3 text-sm text-slate-500">Avaliações de alunos da formação.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {studentReviews.map((student) => <article key={student.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
          <div className="flex items-center gap-3"><img src={student.image} width={44} height={44} alt={`Foto de ${student.name}`} loading="lazy" decoding="async" className="h-11 w-11 rounded-full bg-slate-200 object-cover"/><div><h3 className="text-sm font-extrabold">{student.name}</h3><p className="text-xs text-slate-500">Avaliação de aluno</p></div></div>
          <div className="mt-3 flex gap-0.5 text-amber-500" aria-label="5 de 5 estrelas" role="img">{[1,2,3,4,5].map(n=><Star key={n} size={17} fill="currentColor" strokeWidth={1.5}/>)}</div>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">{student.review}</p>
        </article>)}
      </div>
      <form onSubmit={saveDraft} className="mx-auto mt-8 max-w-xl space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
        <h3 className="text-lg font-black">Deixe a sua avaliação</h3>
        <p className="text-sm text-slate-500">Partilhe a sua opinião sobre o curso.</p>
        <div><label htmlFor="student-review-name" className="mb-2 block text-sm font-bold">O seu nome</label><input id="student-review-name" required maxLength={100} placeholder="Como gostaria de aparecer" value={name} onChange={e=>{setName(e.target.value);setSaved(false)}} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-blue-500"/></div>
        <fieldset><legend className="mb-2 text-sm font-bold">Quantas estrelas dá ao curso?</legend><div className="flex items-center gap-1">{[1,2,3,4,5].map(n=><button type="button" key={n} aria-label={`${n} estrelas`} aria-pressed={rating===n} onClick={()=>{setRating(n);setSaved(false)}} className="rounded p-1 focus-visible:outline-blue-500"><Star size={29} className={n<=rating?"text-amber-500":"text-slate-400"} fill={n<=rating?"currentColor":"none"}/></button>)}<span className="ml-2 text-xs text-slate-500">{rating ? `${rating}/5` : "Selecione"}</span></div></fieldset>
        <div><label htmlFor="student-review-comment" className="mb-2 block text-sm font-bold">O seu comentário</label><textarea id="student-review-comment" required maxLength={1500} rows={4} placeholder="Conte a sua experiência com a formação" value={comment} onChange={e=>{setComment(e.target.value);setSaved(false)}} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-blue-500"/></div>
        <button type="submit" disabled={!rating || !name.trim() || !comment.trim()} className="w-full rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-black text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">Enviar avaliação</button>
        {saved && <p role="status" className="text-sm text-emerald-700">Enviado.</p>}
        
      </form>
    </div>
  </section>;
}
function Home() {
  const [opened, setOpened] = useState<number | null>(0);
  const [showUpgrade, setShowUpgrade] = useState(false);
  useEffect(() => {
    if (!showUpgrade) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowUpgrade(false);
    };
    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [showUpgrade]);
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
          <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-slate-600"><span>Acesso imediato</span><span>•</span><span>Pagamento seguro</span><span>•</span><span>Garantia de 15 dias</span></p>

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
      <div className="rounded-3xl bg-slate-950 p-5 text-white shadow-xl sm:p-8"><div className="mb-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4"><div className="rounded-lg bg-amber-400 p-3 text-slate-950"><Monitor/></div><div><p className="font-bold">Aulas de Mecânica Automóvel</p></div></div><div className="grid grid-cols-2 gap-2">{lessons.slice(0,6).map((a,i)=><div key={a} className="flex items-center gap-2 rounded-lg bg-white/10 p-3 text-xs"><Play size={14} className="shrink-0 text-amber-400"/><span>{a}</span></div>)}</div></div>
    </div></section>

    <section className="mx-auto max-w-7xl px-5 py-20"><Heading title="10 Bónus Para Complementar a Sua Formação" desc="Guias práticos e materiais de consulta propostos para aprofundar conhecimentos e acompanhar a sua aprendizagem."/>
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-2xl"><img src="/bonus-mecanica-automovel.webp" width={1920} height={1080} loading="lazy" decoding="async" className="block h-auto w-full" alt="Mockup ilustrativo dos 10 bónus propostos do Plano Profissional: dez manuais de mecânica automóvel em duas filas, numa oficina, com uma representação gerada do formador à esquerda; materiais por validar."/></div>
    </section>

    <section id="planos" className="bg-slate-950 px-5 py-20 text-white"><div className="mx-auto max-w-5xl"><div className="[&_h2]:text-white [&_p]:text-slate-300"><Heading title="Escolha Como Quer Começar" desc="Duas opções para iniciar a sua aprendizagem em mecânica automóvel."/></div><div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-3xl border border-white/20 bg-white/5 p-7 sm:p-9"><h3 className="text-xl font-black">PLANO BÁSICO</h3><p className="mt-5 text-5xl font-black">{offer.basic.price.toLocaleString("pt-PT",{style:"currency",currency:"EUR"})}</p><ul className="my-8 space-y-4">{["Mais de 80 videoaulas","Formação 100% online","Acesso vitalício"].map(t=><li key={t} className="flex gap-3"><Check className="shrink-0 text-amber-400"/>{t}</li>)}</ul><button type="button" onClick={() => setShowUpgrade(true)} className="w-full min-h-12 rounded-xl border border-white/30 bg-white px-4 py-4 font-extrabold text-slate-950 transition hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400">COMEÇAR COM O BÁSICO</button></div>
      <div className="relative overflow-visible rounded-3xl border-[3px] border-amber-400 bg-white p-5 text-slate-950 shadow-[0_0_55px_rgba(251,191,36,.20)] sm:p-9">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-amber-400 px-5 py-2 text-xs font-black tracking-wide text-slate-950 shadow-sm">⭐ MAIS COMPLETO</div>
        <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.15em] text-amber-700">Formação + Materiais + 10 Bónus</p>
        <h3 className="mt-2 text-2xl font-black">PLANO PROFISSIONAL</h3>
        <p className="mt-2 text-sm text-slate-600">A formação completa para aprender, praticar e consultar sempre que precisar.</p>
        <div className="mt-5 rounded-2xl bg-amber-50 px-4 py-4 text-center ring-1 ring-amber-200">
          <p className="text-xs font-bold uppercase tracking-wide text-amber-800">Tudo incluído por</p>
          <p className="mt-1 text-5xl font-black tracking-tight text-slate-950">{offer.professional.price.toLocaleString("pt-PT",{style:"currency",currency:"EUR"})}</p>
          <p className="mt-1 text-xs font-semibold text-slate-600">Pagamento único · Acesso vitalício</p>
        </div>
        <ul className="mt-6 space-y-3 text-sm font-semibold sm:text-base">
          {["Mais de 80 videoaulas práticas","Certificado digital de conclusão","Acesso vitalício à formação","Materiais de apoio em PDF"].map(t=><li key={t} className="flex items-start gap-2.5"><CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"/><span>{t}</span></li>)}
        </ul>
        <div className="mt-6 rounded-2xl border border-amber-300 bg-gradient-to-b from-amber-50 to-white p-4 sm:p-5">
          <p className="flex items-center gap-2 text-base font-black text-slate-950"><span aria-hidden="true">🎁</span> + 10 BÓNUS EXCLUSIVOS</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">Uma coleção extra de materiais para complementar as aulas e ajudar na consulta dos conteúdos de mecânica automóvel.</p>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-bold text-slate-800">
            {["Guias práticos","Materiais de consulta","Apoio ao estudo","Conteúdos complementares"].map(t=><span key={t} className="flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-2 ring-1 ring-amber-100"><Check size={14} className="shrink-0 text-amber-700"/>{t}</span>)}
          </div>
          <a href="#conteudo" className="mt-3 inline-flex text-xs font-bold text-amber-800 underline underline-offset-2">Ver os conteúdos da formação</a>
        </div>
        <a href={offer.professional.checkoutUrl} className="mt-6 flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-4 text-center text-sm font-black text-white shadow-lg shadow-emerald-700/15 transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:text-base">QUERO O PLANO PROFISSIONAL <ArrowRight size={19}/></a>
        <p className="mt-3 text-center text-xs font-medium text-slate-500">Compra segura através da Hotmart · Garantia de 15 dias</p>
      </div>
    </div></div></section>

    {showUpgrade && (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/75 p-4 sm:p-6" onMouseDown={(event) => { if (event.target === event.currentTarget) setShowUpgrade(false); }}>
        <section role="dialog" aria-modal="true" aria-labelledby="upgrade-title" aria-describedby="upgrade-desc" className="relative my-auto w-full max-w-md rounded-3xl bg-white p-6 text-center text-slate-950 shadow-2xl sm:p-9">
          <button type="button" onClick={() => setShowUpgrade(false)} aria-label="Fechar oferta" className="absolute right-4 top-4 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"><X size={22}/></button>
          <p className="mb-3 inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-extrabold tracking-wide text-amber-800">UMA OFERTA PARA SI</p>
          <h2 id="upgrade-title" className="text-2xl font-black leading-tight sm:text-3xl">Leve a Formação Profissional por apenas 12,95 €</h2>
          <p id="upgrade-desc" className="mt-4 text-sm leading-relaxed text-slate-600">Por mais 3,05 € em relação ao Plano Básico, tenha acesso ao Plano Profissional, com certificado digital de conclusão, materiais de apoio e 10 bónus.</p>
          <div className="mt-5 flex items-baseline justify-center gap-3">
            <span className="text-lg text-slate-400 line-through">{offer.professional.price.toLocaleString("pt-PT", { style: "currency", currency: "EUR" })}</span>
            <strong className="text-4xl font-black text-emerald-700">{offer.professionalUpgrade.price.toLocaleString("pt-PT", { style: "currency", currency: "EUR" })}</strong>
          </div>
          <p className="mt-2 text-sm font-bold text-emerald-700">Poupe 6,95 € no Plano Profissional</p>
          <a href={offer.professionalUpgrade.checkoutUrl} className="mt-7 flex min-h-12 w-full items-center justify-center rounded-xl bg-amber-400 px-4 py-4 text-center font-black text-slate-950 transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600">SIM, QUERO O PROFISSIONAL POR 12,95 €</a>
          <a href={offer.basic.checkoutUrl} className="mt-3 flex min-h-12 w-full items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-bold text-slate-600 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Não, continuar com o Básico por 9,90 €</a>
        </section>
      </div>
    )}

    <StudentReviews/>

    <section className="bg-amber-400 px-5 py-20"><div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2"><div><p className="mb-4 text-xs font-black tracking-widest">UMA COMPETÊNCIA PARA O DIA A DIA</p><h2 className="text-3xl font-black leading-tight sm:text-4xl">Os Automóveis Precisam de Manutenção. Aprenda a Compreender Como Funcionam.</h2><p className="mt-5 leading-relaxed">Desde pequenas verificações até ao diagnóstico de sistemas automóveis, desenvolva conhecimentos úteis para cuidar melhor do seu veículo e explorar o universo da mecânica.</p><div className="mt-7"><Cta dark>QUERO APRENDER MECÂNICA AUTOMÓVEL</Cta></div></div><div className="rounded-3xl bg-slate-950 p-10 text-white"><div className="grid grid-cols-2 gap-4">{[[CarFront,"Automóveis"],[Wrench,"Ferramentas"],[Cog,"Motores"],[ScanLine,"Diagnóstico"]].map(([Icon,title])=>{const I=Icon as typeof CarFront;return <div key={title as string} className="flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/5"><I size={40} className="text-amber-400"/><span className="text-sm font-bold">{title as string}</span></div>})}</div></div></div></section>

    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2"><img src="/certificado-mecanica-automovel.webp" width={1600} height={1200} loading="lazy" decoding="async" className="block h-auto w-full rounded-2xl" alt="Mockup ilustrativo, não emitido, de Certificado de Conclusão da Formação em Mecânica Automóvel: fundo marfim, moldura azul-marinho e dourada, Nome do Aluno e assinatura ilustrativa José Emanuel; sem fotografia e sem certificação profissional oficial."/><div><h2 className="text-3xl font-black sm:text-4xl">Certificado Digital de Conclusão</h2><p className="mt-5 leading-relaxed text-slate-600">No Plano Profissional, poderá receber um certificado digital após concluir a formação, de acordo com as condições do curso.</p></div></section>

    <section className="bg-white px-5 py-20"><div className="mx-auto flex max-w-5xl flex-col items-center gap-7 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center sm:p-14"><div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-amber-400 text-slate-950"><ShieldCheck size={27}/><strong className="text-xl">15 DIAS</strong></div><div><h2 className="text-3xl font-black">Conheça a Formação com Mais Tranquilidade</h2><p className="mx-auto mt-4 max-w-2xl text-slate-600">Explore as aulas e os materiais disponíveis. Se a formação não corresponder às suas expectativas, pode solicitar o reembolso através da Hotmart no prazo de 15 dias, de acordo com as condições da compra. Os seus direitos legais enquanto consumidor mantêm-se.</p></div><div className="flex flex-wrap justify-center gap-3"><a href="#conteudo" className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-bold">Conhecer as aulas</a><Cta dark>Ver os planos</Cta></div></div></section>

    <section className="mx-auto max-w-5xl px-5 py-20">
      <Heading title="Conheça o Seu Formador"/>
      <div className="flex flex-col items-center gap-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-start sm:p-10">
        <img src="data:image/webp;base64,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" width={160} height={160} loading="lazy" alt="Fotografia de João Emanuel numa oficina de mecânica automóvel" className="h-40 w-40 shrink-0 rounded-2xl object-cover shadow-md sm:h-48 sm:w-48"/>
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-black text-slate-950">João Emanuel</h3>
          <p className="mt-3 leading-relaxed text-slate-600">Profissional da área automóvel com 16 anos de experiência no mercado, João Emanuel reúne conhecimentos práticos em mecânica, manutenção e diagnóstico de veículos.</p>
          <p className="mt-3 leading-relaxed text-slate-600">Nesta formação, partilha esses conhecimentos de forma simples, direta e passo a passo, especialmente para quem está a começar do zero.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start"><span className="rounded-full bg-amber-50 px-3 py-2 text-xs font-bold text-amber-800">16 anos de experiência</span><span className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700">Conteúdo prático</span><span className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700">Ensino direto</span></div>
        </div>
      </div>
    </section>

    <section className="bg-slate-100 px-5 py-20"><div className="mx-auto max-w-3xl"><Heading title="Perguntas Frequentes"/><div className="space-y-3">{faq.map(([question,answer],i)=><div key={question} className="overflow-hidden rounded-xl border border-slate-200 bg-white"><button type="button" aria-expanded={opened===i} aria-controls={`answer-${i}`} onClick={()=>setOpened(opened===i?null:i)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold"><span>{question}</span><ChevronDown size={19} className={`shrink-0 transition-transform ${opened===i?"rotate-180":""}`}/></button>{opened===i && <p id={`answer-${i}`} className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{answer}</p>}</div>)}</div></div></section>
    <footer className="bg-slate-950 px-5 py-9 text-center text-xs leading-relaxed text-slate-400"><p className="font-black text-white">Formação em Mecânica Automóvel</p></footer>
  </main>;
}
