import HomePrumoFeature from "./home-prumo-feature";
import HomeProjects from "./home-projects";
import HomeCompetencies from "./home-competencies";
import HomeWorkflow from "./home-workflow";
import HomeContact from "./home-contact";
import HomeNavbar from "./home-navbar";
import ScrollReveal from "./scroll-reveal";

type HomeIconName = "pin" | "monitor" | "briefcase" | "integrated" | "download" | "user" | "chart";

const homeIconPaths: Record<HomeIconName, React.ReactNode> = {
  pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  monitor: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2"/></>,
  integrated: <><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></>,
  download: <><path d="M12 3v12M7 10l5 5 5-5M4 20h16"/></>,
  user: <><circle cx="12" cy="7" r="3.4"/><path d="M5.5 21a6.5 6.5 0 0 1 13 0"/></>,
  chart: <><path d="M4 20V10M10 20V5M16 20v-8M22 20V2"/></>,
};

function HomeIcon({ name, size = 22 }: { name: HomeIconName; size?: number }) {
  return <svg className="line-icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{homeIconPaths[name]}</svg>;
}

export default function Home() {
  return <div className="about-page home-bg-fx" id="inicio">
    <div className="home-bg-grid" aria-hidden="true"><div className="home-bg-grid-cols"><div/><div/><div/><div/></div></div>
    <ScrollReveal/>
    <HomeNavbar/>
    <main>
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero-photo reveal">
          <img src="/cleber-hero.webp" alt="Cleber Batista trabalhando em um escritório com notebook"/>
        </div>
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <span className="home-eyebrow reveal" style={{ transitionDelay: "60ms" }}>Aberto a vagas remotas · CLT ou PJ</span>
            <h1 id="home-hero-title" className="reveal" style={{ transitionDelay: "130ms" }}>
              <span className="home-title-line">Analista de Automação de </span>
              <span className="home-title-line"><em>Processos Administrativos</em></span>
            </h1>
            <p className="reveal" style={{ transitionDelay: "200ms" }}>Mapeio processos administrativos, encontro o que é manual e repetitivo e construo a automação que devolve horas às equipes. Resultados medidos em projetos próprios.</p>
            <div className="home-meta reveal" style={{ transitionDelay: "270ms" }} aria-label="Informações profissionais">
              <span><HomeIcon name="pin" size={17}/>Piracaia — SP</span>
              <span><HomeIcon name="monitor" size={17}/>Disponível para trabalho 100% remoto</span>
              <span><HomeIcon name="briefcase" size={17}/>CLT ou PJ</span>
            </div>
            <div className="home-actions reveal" style={{ transitionDelay: "330ms" }}>
              <a className="home-primary-action" href="/projetos/"><HomeIcon name="integrated" size={18}/>Ver projetos <span aria-hidden="true">→</span></a>
              <a className="home-secondary-action" href="/Cleber-Batista-Analista-de-Processos-e-Automacao.pdf" download><HomeIcon name="download" size={18}/>Baixar currículo</a>
            </div>
            <a className="home-text-link reveal" style={{ transitionDelay: "390ms" }} href="/sobre-mim/">Conhecer minha trajetória <span aria-hidden="true">→</span></a>
          </div>
          <div className="home-proof-bar reveal" style={{ transitionDelay: "450ms" }} aria-label="Destaques profissionais">
            <article><span className="home-proof-icon"><HomeIcon name="user" size={25}/></span><div><strong>Organizador de Arquivos: 1 h → 35 s</strong><p>500 arquivos organizados</p></div></article>
            <article><span className="home-proof-icon"><HomeIcon name="chart" size={25}/></span><div><strong>Dash Top: 2–4 h → 12 s</strong><p>Dashboard pronto, da planilha ao resultado</p></div></article>
            <article><span className="home-proof-icon"><HomeIcon name="monitor" size={25}/></span><div><strong>ProcFácil: 1h–1h30 → 5–10 min</strong><p>6 planilhas e 700 pedidos cruzados</p></div></article>
          </div>
        </div>
      </section>
      <HomeProjects/>
      <HomePrumoFeature/>
      <HomeCompetencies/>
      <HomeWorkflow/>
      <HomeContact/>
    </main>
  </div>;
}
