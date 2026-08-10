import HomeProjects from "./home-projects";
import HomeCompetencies from "./home-competencies";
import HomeWorkflow from "./home-workflow";
import HomeContact from "./home-contact";
import HomeNavbar from "./home-navbar";

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
  return <div className="about-page" id="inicio">
    <HomeNavbar/>
    <main>
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero-photo">
          <img src="/cleber-hero.webp" alt="Cleber Batista trabalhando em um escritório com notebook"/>
        </div>
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <span className="home-eyebrow">Analista Administrativo · Processos · Operações</span>
            <h1 id="home-hero-title">
              <span className="home-title-line">Transformo rotinas administrativas</span>
              <span className="home-title-line">em <em>processos mais organizados</em>,</span>
              <span className="home-title-line">eficientes e <em>orientados por dados.</em></span>
            </h1>
            <p>Mais de 20 anos de experiência em atendimento, negócios, indústria e qualidade. Uno visão de processos, Excel, Python e IA para reduzir tarefas manuais, organizar informações e apoiar decisões.</p>
            <div className="home-meta" aria-label="Informações profissionais">
              <span><HomeIcon name="pin" size={17}/>Piracaia — SP</span>
              <span><HomeIcon name="monitor" size={17}/>Disponível para trabalho 100% remoto</span>
              <span><HomeIcon name="briefcase" size={17}/>CLT ou PJ</span>
            </div>
            <div className="home-actions">
              <a className="home-primary-action" href="/projetos/"><HomeIcon name="integrated" size={18}/>Ver projetos aplicados <span aria-hidden="true">→</span></a>
              <button className="home-secondary-action" type="button"><HomeIcon name="download" size={18}/>Baixar currículo</button>
            </div>
            <a className="home-text-link" href="/sobre-mim/">Conhecer minha trajetória <span aria-hidden="true">→</span></a>
          </div>
          <div className="home-proof-bar" aria-label="Destaques profissionais">
            <article><span className="home-proof-icon"><HomeIcon name="user" size={25}/></span><div><strong>20+ anos de experiência</strong><p>Atendimento, negócios, indústria e qualidade</p></div></article>
            <article><span className="home-proof-icon"><HomeIcon name="chart" size={25}/></span><div><strong>Processos e dados</strong><p>Excel, Python, documentação e análise</p></div></article>
            <article><span className="home-proof-icon"><HomeIcon name="monitor" size={25}/></span><div><strong>Pronto para o trabalho remoto</strong><p>Autonomia, organização e comunicação</p></div></article>
          </div>
        </div>
      </section>
      <HomeProjects/>
      <HomeCompetencies/>
      <HomeWorkflow/>
      <HomeContact/>
    </main>
  </div>;
}
