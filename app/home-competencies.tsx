type CompetencyIcon = "process" | "data" | "automation" | "ai";

const iconPaths: Record<CompetencyIcon, React.ReactNode> = {
  process: <><path d="M9 3h6a1 1 0 0 1 1 1v1H8V4a1 1 0 0 1 1-1Z"/><rect x="5" y="4" width="14" height="17" rx="2"/><path d="m8.5 12 2 2 4-4.5M8.5 17h5"/></>,
  data: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></>,
  automation: <><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3.4M12 18.1v3.4M21.5 12h-3.4M5.9 12H2.5M18.6 5.4l-2.4 2.4M7.8 16.2l-2.4 2.4M18.6 18.6l-2.4-2.4M7.8 7.8 5.4 5.4"/></>,
  ai: <><path d="M12 3a5.5 5.5 0 0 0-3.2 10c.5.35.7.9.7 1.5v.5h5v-.5c0-.6.2-1.15.7-1.5A5.5 5.5 0 0 0 12 3Z"/><path d="M10 18h4M10.7 21h2.6"/></>,
};

function CompetencyIcon({ name }: { name: CompetencyIcon }) {
  return <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{iconPaths[name]}</svg>;
}

export default function HomeCompetencies() {
  return <section id="competencias" className="home-competencies-section" aria-labelledby="home-competencies-title">
    <div className="home-competencies-shell">
      <div className="home-competencies-grid" aria-label="Competências profissionais">
        <article className="competency-card competency-card-wide competency-process reveal">
          <span className="competency-icon"><CompetencyIcon name="process"/></span>
          <h3>Processos administrativos</h3>
          <p>Mapeamento, padronização e documentação para tornar rotinas mais claras e previsíveis.</p>
          <div className="competency-tags"><span>Fluxos</span><span>Padrões</span><span>Documentação</span></div>
        </article>

        <article className="competency-card competency-card-small competency-data reveal" style={{ transitionDelay: "90ms" }}>
          <span className="competency-icon"><CompetencyIcon name="data"/></span>
          <h3>Dados e indicadores</h3>
          <p>Excel, tratamento de dados e visualizações que apoiam o acompanhamento e a decisão.</p>
          <div className="competency-tags"><span>Excel</span><span>Indicadores</span></div>
        </article>

        <article className="competency-card competency-card-wide competency-automation reveal" style={{ transitionDelay: "180ms" }}>
          <span className="competency-icon"><CompetencyIcon name="automation"/></span>
          <h3>Automação</h3>
          <p>Python aplicado à redução de tarefas manuais e à organização de informações.</p>
          <div className="competency-tags"><span>Python</span><span>Scripts</span><span>Rotinas</span></div>
        </article>

        <article className="competency-card competency-card-small competency-ai reveal" style={{ transitionDelay: "270ms" }}>
          <span className="competency-icon"><CompetencyIcon name="ai"/></span>
          <h3>IA aplicada</h3>
          <p>Apoio à produtividade, análise e melhoria de fluxos administrativos.</p>
          <div className="competency-tags"><span>Produtividade</span><span>Análise</span></div>
        </article>
      </div>

      <div className="home-competencies-copy reveal">
        <span className="home-competencies-badge"><CompetencyIcon name="process"/>Competências aplicadas</span>
        <h2 id="home-competencies-title">Conhecimento técnico <br/>conectado à <em>realidade <br/>da operação.</em></h2>
        <p>Mais do que dominar ferramentas, aplico métodos e tecnologia para organizar rotinas, estruturar informações e resolver problemas administrativos.</p>
        <strong><i aria-hidden="true"/>Tecnologia com propósito operacional.</strong>
      </div>
    </div>
  </section>;
}
