"use client";

import { useEffect, useRef, useState } from "react";

type SectionId = "perfil" | "trajetoria" | "trabalho" | "processos" | "tecnologia" | "objetivo";
type IconName = "user" | "arrow" | "gear" | "process" | "code" | "target" | "briefcase" | "monitor" | "clock" | "pin" | "robot" | "chart" | "refresh" | "folder" | "quote" | "download" | "search" | "organize" | "improve" | "shield" | "message" | "lock" | "value" | "integrated" | "warning" | "database" | "clarity" | "standard" | "check" | "rocket" | "python" | "excel" | "ai";

const menu: { id: SectionId; label: string; icon: IconName }[] = [
  { id: "perfil", label: "Perfil profissional", icon: "user" },
  { id: "trajetoria", label: "Minha trajetória", icon: "arrow" },
  { id: "trabalho", label: "Como eu trabalho", icon: "gear" },
  { id: "processos", label: "Visão de processos", icon: "process" },
  { id: "tecnologia", label: "Tecnologia aplicada", icon: "code" },
  { id: "objetivo", label: "Objetivo profissional", icon: "target" },
];

const iconPaths: Record<IconName, React.ReactNode> = {
  user: <><circle cx="12" cy="7" r="3.4"/><path d="M5.5 21a6.5 6.5 0 0 1 13 0"/></>,
  arrow: <><path d="M4 12h16M15 7l5 5-5 5"/></>,
  gear: <><circle cx="12" cy="12" r="3"/><path d="M19 13.5v-3l-2-.7-.5-1.2.9-1.9-2.1-2.1-1.9.9-1.2-.5-.7-2h-3l-.7 2-1.2.5-1.9-.9-2.1 2.1.9 1.9-.5 1.2-2 .7v3l2 .7.5 1.2-.9 1.9 2.1 2.1 1.9-.9 1.2.5.7 2h3l.7-2 1.2-.5 1.9.9 2.1-2.1-.9-1.9.5-1.2 2-.7Z"/></>,
  process: <><circle cx="12" cy="12" r="8"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></>,
  code: <><path d="m8 5-6 7 6 7M16 5l6 7-6 7"/></>,
  target: <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M15 9l5-5M16 4h4v4"/></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2"/></>,
  monitor: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></>,
  pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  robot: <><rect x="5" y="7" width="14" height="11" rx="3"/><path d="M12 3v4M8 12h.01M16 12h.01M9 16h6M3 11v4M21 11v4"/></>,
  chart: <><path d="M4 20V10M10 20V5M16 20v-8M22 20V2"/></>,
  refresh: <><path d="M20 7v5h-5M4 17v-5h5"/><path d="M18.5 5.5A8 8 0 0 0 5 8M5.5 18.5A8 8 0 0 0 19 16"/></>,
  folder: <path d="M3 6h7l2 2h9v11H3Z"/>,
  quote: <><path d="M5 11h5v6H4v-5c0-4 2-6 5-7M15 11h5v6h-6v-5c0-4 2-6 5-7"/></>,
  download: <><path d="M12 3v12M7 10l5 5 5-5M4 20h16"/></>,
  search: <><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/></>,
  organize: <><rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-4h12v4"/></>,
  improve: <path d="M3 19V9M9 19V5M15 19v-7M21 19V2"/>,
  shield: <><path d="M12 3 4 6v5c0 5 3.4 8.2 8 10 4.6-1.8 8-5 8-10V6Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
  message: <><path d="M4 5h16v12H8l-4 4Z"/><path d="M8 9h8M8 13h5"/></>,
  lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
  value: <><circle cx="12" cy="12" r="8"/><path d="M8 12h8M12 8v8"/></>,
  integrated: <><circle cx="7" cy="12" r="4"/><circle cx="17" cy="12" r="4"/></>,
  warning: <><path d="m12 3 10 18H2Z"/><path d="M12 9v5M12 18h.01"/></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></>,
  clarity: <><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8M8 13h8M8 17h5"/></>,
  standard: <><rect x="5" y="4" width="14" height="16" rx="2"/><path d="M9 4V2h6v2M8 9h8M8 13h8M8 17h5"/></>,
  check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></>,
  rocket: <><path d="M14 5c3-3 6-3 6-3s0 3-3 6l-5 5-4-4Z"/><path d="M8 9 4 10l-2 4 5-1M12 13l-1 5-4 2 1-5"/></>,
  python: <><path d="M8 4c0-2 8-2 8 0v5H8c-4 0-4 6 0 6h2"/><path d="M16 20c0 2-8 2-8 0v-5h8c4 0 4-6 0-6h-2"/></>,
  excel: <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="m8 8 4 8M12 8l-4 8M15 8h3M15 12h3M15 16h3"/></>,
  ai: <><path d="M9 3h6l1 3 3 1v10l-3 1-1 3H9l-1-3-3-1V7l3-1Z"/><circle cx="12" cy="12" r="3"/></>,
};

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  return <svg className="line-icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{iconPaths[name]}</svg>;
}

function CvButton() {
  return <a className="cv-button" href="/curriculo-cleber-batista.pdf" download aria-label="Baixar meu currículo"><Icon name="download" size={18}/><span>Baixar meu currículo</span></a>;
}

function QuoteBar({ children, icon = "quote" }: { children: React.ReactNode; icon?: IconName }) {
  return <div className="quote-bar"><Icon name={icon} size={28}/><p>{children}</p><CvButton/></div>;
}

function MiniCard({ icon, title, children }: { icon: IconName; title: string; children?: React.ReactNode }) {
  return <article className="mini-card"><span className="icon-disc"><Icon name={icon}/></span><h4>{title}</h4>{children && <p>{children}</p>}</article>;
}

function ProfileSection() {
  const differentiators: [IconName, string][] = [["robot", "Automação de processos"], ["chart", "Análise de dados"], ["refresh", "Visão de processos"], ["folder", "Organização"], ["improve", "Melhoria contínua"]];
  return <>
    <span className="eyebrow">Perfil profissional</span>
    <div className="profile-intro">
      <aside className="profile-side">
        <div className="portrait" aria-label="Foto profissional de Cleber Batista"><img src="/cleber-perfil.png" alt="Cleber Batista"/></div>
        <div className="facts">
          <div className="fact"><span><Icon name="briefcase"/></span><p><strong>Atuação</strong>Administrativo · Processos · Automação</p></div>
          <div className="fact"><span><Icon name="monitor"/></span><p><strong>Modelo de trabalho</strong>Remoto</p></div>
          <div className="fact"><span><Icon name="clock"/></span><p><strong>Experiência profissional</strong>20+ anos</p></div>
          <div className="fact"><span><Icon name="pin"/></span><p><strong>Localização</strong>Piracaia — SP, Brasil</p></div>
        </div>
      </aside>
      <div className="profile-copy">
        <h3>Transformo processos administrativos em operações mais eficientes com <em>dados, automação e organização.</em></h3>
        <p>Sou um profissional com mais de 20 anos de experiência no mercado de trabalho, com uma trajetória construída em diferentes áreas, incluindo operações administrativas, qualidade, empreendedorismo, desenvolvimento de soluções digitais e automação de processos.</p>
        <p>Essa diversidade me deu uma visão ampla de negócio e, principalmente, a capacidade de identificar problemas operacionais, organizar processos e transformar atividades manuais e repetitivas em fluxos mais simples, estruturados e eficientes.</p>
        <p>Hoje, uno minha experiência administrativa ao uso de dados, Python, automação e Inteligência Artificial para reduzir tarefas repetitivas, melhorar a organização das informações e apoiar decisões com mais clareza.</p>
        <p>Meu perfil combina visão de processos, capacidade analítica, organização, autonomia e foco em resultados, sempre buscando utilizar tecnologia de forma prática para resolver problemas reais do dia a dia.</p>
        <div className="subsection differential-section"><h3 className="section-title">Meus principais diferenciais</h3><div className="differentials">{differentiators.map(([icon,label]) => <MiniCard key={label} icon={icon} title={label}/>)}</div></div>
      </div>
    </div>
    <QuoteBar>Acredito que processos bem estruturados e dados confiáveis são a base para decisões melhores e resultados consistentes.</QuoteBar>
  </>;
}

function TrajectorySection() {
  const timeline: [IconName, string, string][] = [
    ["briefcase", "Empreendedorismo e Gestão", "Fundador e gestor de empresa própria, responsável por toda operação do negócio, vendas, marketing e relacionamento com clientes."],
    ["chart", "Marketing Digital e Vendas", "Atuação com tráfego pago, criação de sites, estratégias digitais e processos comerciais focados em geração de resultados."],
    ["shield", "Segurança e Monitoramento", "Experiência em monitoramento de sistemas e gestão de equipes, com foco em processos, disciplina e confiabilidade."],
    ["value", "Indústria Automotiva e Qualidade", "Atuação com qualidade, documentação, rastreabilidade e melhoria contínua de processos em ambiente industrial e sob pressão."],
    ["gear", "Operações Administrativas e Automação", "Consolidação da experiência em rotinas administrativas, análise de processos e automação para eliminar tarefas manuais e aumentar a eficiência."],
  ];
  return <>
    <span className="eyebrow">Minha trajetória</span>
    <div className="trajectory-grid">
      <div className="opening-copy"><h3>Mais de 20 anos de experiência profissional, construindo uma trajetória versátil em diferentes setores e contextos.</h3><p>Minha carreira é marcada pela diversidade de áreas e desafios, o que me deu uma visão ampla do negócio e a capacidade de me adaptar rapidamente, entender processos em profundidade e propor melhorias que realmente fazem diferença no dia a dia das operações.</p><div className="feature-quote"><Icon name="quote" size={30}/><p>Cada experiência me trouxe aprendizados e ferramentas que uso hoje para transformar processos e gerar valor.</p></div></div>
      <div className="timeline">{timeline.map(([icon,title,copy]) => <article key={title} className="timeline-item"><span><Icon name={icon}/></span><div><h4>{title}</h4><p>{copy}</p></div></article>)}</div>
    </div>
    <QuoteBar icon="target">Uma trajetória sólida e versátil que me permite conectar pessoas, processos e tecnologia para criar soluções práticas e eficientes em ambientes remotos.</QuoteBar>
  </>;
}

function WorkSection() {
  const steps: [IconName, string, string, string][] = [
    ["search", "01", "Entendo o cenário", "Analiso processos, rotinas e dados para compreender o funcionamento atual e identificar problemas e oportunidades de melhoria."],
    ["organize", "02", "Organizo e padronizo", "Estruturo informações, crio padrões e documentações claras para reduzir retrabalho, erros e dependências."],
    ["code", "03", "Automatizo tarefas", "Desenvolvo soluções com Python e outras ferramentas para eliminar tarefas manuais e acelerar processos."],
    ["improve", "04", "Gero valor e melhorias", "Transformo dados em insights, acompanho resultados e promovo melhorias contínuas nos processos e operações."],
  ];
  const principles: [IconName,string,string][] = [
    ["target","Foco em resultados","Trabalho com objetivo claro: resolver problemas e gerar valor para o negócio."],
    ["shield","Qualidade e confiabilidade","Atenção aos detalhes, validações e testes para entregar soluções seguras e consistentes."],
    ["user","Autonomia e responsabilidade","Organizo meu trabalho, cumpro prazos e entrego com comprometimento e proatividade."],
    ["message","Comunicação clara","Explico ideias e resultados de forma simples, alinhando expectativas e facilitando decisões."],
    ["refresh","Melhoria contínua","Busco sempre aprender, evoluir e aplicar novas soluções para tornar processos melhores."],
    ["lock","Confidencialidade","Respeito informações sensíveis e atuo com ética, discrição e segurança de dados."],
  ];
  return <>
    <span className="eyebrow">Como eu trabalho</span><h3 className="hero-copy">Análise, organização e automação para transformar processos em <em>resultados.</em></h3><p className="lead">Meu trabalho começa entendendo o negócio e os processos de ponta a ponta. A partir daí, identifico gargalos, padronizo rotinas, automatizo tarefas e organizo informações para gerar clareza, eficiência e suporte à tomada de decisão.</p>
    <div className="subsection"><h3 className="section-title">Como atuo na prática</h3><div className="steps">{steps.map(([icon,num,title,copy]) => <article className="step" key={num}><span className="step-icon"><Icon name={icon} size={25}/></span><strong>{num}</strong><div><h4>{title}</h4><p>{copy}</p></div></article>)}</div></div>
    <div className="subsection"><h3 className="section-title">Princípios que guiam meu trabalho</h3><div className="card-grid three">{principles.map(([icon,title,copy]) => <MiniCard key={title} icon={icon} title={title}>{copy}</MiniCard>)}</div></div>
    <QuoteBar>Uso tecnologia de forma prática para simplificar o trabalho, aumentar a eficiência e apoiar decisões com informações organizadas e confiáveis.</QuoteBar>
  </>;
}

function ProcessSection() {
  const pillars: [IconName,string,string][] = [
    ["value","Foco no valor","Entendo o que gera valor para o cliente interno ou externo e priorizo o que move o negócio."],
    ["integrated","Visão integrada","Analiso o processo de forma completa, considerando pessoas, atividades, dados, regras e sistemas."],
    ["warning","Identificação de gargalos","Encontro pontos de atraso, retrabalho, excessos, riscos e falhas que limitam a produtividade."],
    ["target","Simplicidade intencional","Busco a forma mais simples e clara de fazer, reduzindo complexidade e dependências."],
    ["chart","Dados e decisão","Uso dados reais para entender o comportamento do processo e apoiar decisões assertivas."],
  ];
  const traits: [IconName,string,string][] = [
    ["clarity","Clareza","Todos entendem o fluxo, as regras e o seu papel no processo."],
    ["standard","Padronização","Regras, formulários e procedimentos definidos e documentados."],
    ["refresh","Consistência","O processo entrega o mesmo resultado sempre, com qualidade."],
    ["rocket","Eficiência","Menos etapas desnecessárias, menos esperas e menos retrabalho."],
    ["shield","Confiabilidade","Informações corretas, rastreáveis e disponíveis quando precisam."],
    ["improve","Melhoria contínua","Processo monitorado, medido e evoluído de forma constante."],
  ];
  return <>
    <span className="eyebrow">Visão de processos</span><h3 className="hero-copy">Transformo processos complexos em fluxos <em>simples, claros e eficientes.</em></h3><p className="lead">Vejo o processo como a conexão entre pessoas, atividades, dados e sistemas que gera valor para o negócio.<br/>Minha visão é identificar o que realmente importa, eliminar o que não agrega e criar um fluxo que funcione de ponta a ponta com clareza, previsibilidade e controle.</p>
    <div className="subsection"><h3 className="section-title">Pilares da minha visão de processos</h3><div className="card-grid five">{pillars.map(([icon,title,copy]) => <MiniCard key={title} icon={icon} title={title}>{copy}</MiniCard>)}</div></div>
    <div className="subsection"><h3 className="section-title">O que caracteriza um processo bem estruturado</h3><div className="card-grid three">{traits.map(([icon,title,copy]) => <MiniCard key={title} icon={icon} title={title}>{copy}</MiniCard>)}</div></div>
    <QuoteBar>Processos bem desenhados geram organização, reduzem custos, aumentam a produtividade e liberam tempo para o que realmente impulsiona o negócio.</QuoteBar>
  </>;
}

function TechSection() {
  const tools = [
    { icon: "python" as IconName, title: "Python", subtitle: "Automação, integração e análise de dados.", items: ["Automação de rotinas repetitivas", "Manipulação e tratamento de dados", "Geração de relatórios e arquivos", "Integração de sistemas e APIs"] },
    { icon: "excel" as IconName, title: "Excel Avançado", subtitle: "Análise, organização e modelagem de dados.", items: ["Fórmulas avançadas e matrizes", "Tabelas dinâmicas e dashboards", "Modelos e controles inteligentes", "Validações e análises robustas"] },
    { icon: "ai" as IconName, title: "Inteligência Artificial", subtitle: "Apoio à decisão e ganho de eficiência.", items: ["Análise de dados com IA", "Geração de textos e resumos", "Classificação e extração de informações", "IA aplicada a processos administrativos"] },
  ];
  const value = [["gear","Automatizo tarefas repetitivas","Elimino processos manuais e atividades operacionais de baixo valor."],["database","Organizo e transformo dados em informação","Estruturo dados de diferentes fontes para gerar clareza e apoio à decisão."],["target","Gero indicadores que importam","Crio dashboards e relatórios que mostram o que realmente precisa ser acompanhado."]] as [IconName,string,string][];
  return <>
    <span className="eyebrow">Tecnologia aplicada</span><h3 className="hero-copy">Tecnologia é a ferramenta que potencializa <em>resultados reais e sustentáveis.</em></h3><p className="lead">Utilizo tecnologia de forma estratégica para transformar dados em informações, automatizar tarefas, gerar indicadores e apoiar decisões que melhoram processos e impulsionam o desempenho do negócio.</p>
    <div className="subsection"><h3 className="section-title">Ferramentas que aplico no dia a dia</h3><div className="tool-grid">{tools.map(tool => <article className="tool-card" key={tool.title}><span className="tool-icon"><Icon name={tool.icon} size={29}/></span><h4>{tool.title}</h4><p>{tool.subtitle}</p><ul>{tool.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></div>
    <div className="subsection"><h3 className="section-title">Como aplico tecnologia para gerar valor</h3><div className="card-grid three value-grid">{value.map(([icon,title,copy]) => <MiniCard key={title} icon={icon} title={title}>{copy}</MiniCard>)}</div></div>
    <QuoteBar>Tecnologia não é o fim. É o meio que uso para simplificar processos, organizar informações e apoiar decisões que geram resultados.</QuoteBar>
  </>;
}

function ObjectiveSection() {
  const contributions: [IconName,string,string][] = [
    ["process","Processos administrativos","Estruturar rotinas, responsabilidades e fluxos para tornar a operação mais clara e eficiente."],
    ["integrated","Operações e backoffice","Organizar informações, controles e atividades que sustentam o funcionamento do negócio."],
    ["robot","Automação e dados","Utilizar Python, Excel e Inteligência Artificial para reduzir tarefas repetitivas e transformar dados em informações úteis."],
  ];
  const environment: [IconName,string,string][] = [
    ["shield","Organização","Processos bem definidos e informações confiáveis para decisões melhores."],
    ["user","Autonomia","Liberdade com responsabilidade para entregar resultados consistentes."],
    ["chart","Qualidade","Atenção aos detalhes, documentação e padrão nas entregas."],
    ["refresh","Melhoria contínua","Buscar sempre formas mais simples, inteligentes e eficientes de fazer."],
    ["monitor","Tecnologia","Ambiente que valoriza o uso prático da tecnologia para melhorar processos e apoiar resultados."],
  ];
  return <>
    <span className="eyebrow">Objetivo profissional</span><h3 className="hero-copy">Busco contribuir em operações administrativas mais <em>organizadas, eficientes e orientadas por dados.</em></h3><p className="lead">Meu objetivo é atuar em uma posição remota nas áreas Administrativa, Processos, Operações ou Backoffice, aplicando minha experiência profissional e o uso prático de tecnologia para melhorar a execução das rotinas e a qualidade das informações.</p>
    <div className="subsection"><h3 className="section-title">Onde posso contribuir</h3><div className="card-grid three contribution-grid">{contributions.map(([icon,title,copy]) => <MiniCard key={title} icon={icon} title={title}>{copy}</MiniCard>)}</div></div>
    <div className="subsection"><h3 className="section-title">O ambiente em que quero atuar</h3><div className="environment-list">{environment.map(([icon,title,copy]) => <article key={title}><Icon name={icon}/><div><h4>{title}</h4><p>{copy}</p></div></article>)}</div></div>
    <QuoteBar>Quero usar experiência, visão de processos e tecnologia para tornar o trabalho administrativo mais simples, confiável e eficiente.</QuoteBar>
  </>;
}

const sections: Record<SectionId, () => React.ReactNode> = { perfil: ProfileSection, trajetoria: TrajectorySection, trabalho: WorkSection, processos: ProcessSection, tecnologia: TechSection, objetivo: ObjectiveSection };

export default function Home() {
  const [active, setActive] = useState<SectionId>("perfil");
  const [selected, setSelected] = useState<SectionId>("perfil");
  const [isSwitching, setIsSwitching] = useState(false);
  const contentRef = useRef<HTMLElement>(null);
  const transitionTimer = useRef<ReturnType<typeof window.setTimeout> | null>(null);
  const Content = sections[active];

  useEffect(() => () => {
    if (transitionTimer.current !== null) window.clearTimeout(transitionTimer.current);
  }, []);

  function selectSection(id: SectionId) {
    if (id === selected) return;

    setSelected(id);

    if (transitionTimer.current !== null) window.clearTimeout(transitionTimer.current);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(id);
      if (window.innerWidth < 800) requestAnimationFrame(() => contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
      return;
    }

    setIsSwitching(true);
    transitionTimer.current = window.setTimeout(() => {
      setActive(id);
      setIsSwitching(false);
      transitionTimer.current = null;
      if (window.innerWidth < 800) requestAnimationFrame(() => contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
    }, 150);
  }

  return <div className="about-page" id="sobre-mim">
    <header className="site-navbar">
      <div className="site-navbar-inner">
        <a className="site-brand" href="/#inicio" aria-label="Cleber Batista — Página inicial">CLEBER BATISTA</a>
        <nav className="site-nav-links" aria-label="Navegação principal">
          <a className="site-nav-link" href="/#inicio">Página Inicial</a>
          <a className="site-nav-link active" href="/sobre-mim/" aria-current="page">Sobre Mim</a>
          <a className="site-nav-link" href="/projetos/">Projetos</a>
          <a className="site-nav-link" href="/contatos/">Contatos</a>
        </nav>
        <div className="navbar-actions"><a className="navbar-cv-button" href="/curriculo-cleber-batista.pdf" download>Baixar Currículo</a></div>
      </div>
    </header>
    <main className="page-container" id="sobre-mim-content">
      <header className="page-heading"><h1>Sobre mim</h1><p>Conheça minha trajetória, minha forma de trabalhar e como posso gerar valor para o seu negócio.</p></header>
      <div className="about-layout">
        <nav className="side-card" aria-label="Seções Sobre mim">{menu.map(item => <button key={item.id} type="button" aria-current={selected === item.id ? "page" : undefined} className={selected === item.id ? "nav-item active" : "nav-item"} onClick={() => selectSection(item.id)}><Icon name={item.icon} size={19}/><span>{item.label}</span></button>)}</nav>
        <section ref={contentRef} className={`content-card section-${active}`} aria-live="polite"><div className={isSwitching ? "content-transition is-leaving" : "content-transition"}><Content/></div></section>
      </div>
    </main>
  </div>;
}
