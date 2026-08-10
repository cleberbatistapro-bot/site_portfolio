type CompetencyIcon = "process" | "data" | "automation" | "ai";

const iconPaths: Record<CompetencyIcon, React.ReactNode> = {
  process: <><rect x="4" y="3" width="6" height="5" rx="1"/><rect x="14" y="16" width="6" height="5" rx="1"/><rect x="4" y="16" width="6" height="5" rx="1"/><path d="M7 8v4h10v4M7 12v4"/></>,
  data: <><path d="M4 20V10M10 20V5M16 20v-8M22 20V2"/></>,
  automation: <><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></>,
  ai: <><path d="M9 4a3 3 0 0 0-5 2.2A3.5 3.5 0 0 0 5 13v2a3 3 0 0 0 4.5 2.6M15 4a3 3 0 0 1 5 2.2A3.5 3.5 0 0 1 19 13v2a3 3 0 0 1-4.5 2.6M9 4v16M15 4v16M9 8H7M15 8h2M9 13H6M15 13h3M9 17h6"/></>,
};

function CompetencyIcon({ name }: { name: CompetencyIcon }) {
  return <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{iconPaths[name]}</svg>;
}

export default function HomeCompetencies() {
  return <section id="competencias" className="home-competencies-section" aria-labelledby="home-competencies-title">
    <div className="home-competencies-shell">
      <div className="home-competencies-grid" aria-label="Competências profissionais">
        <article className="competency-card competency-card-wide competency-process">
          <span className="competency-icon"><CompetencyIcon name="process"/></span>
          <h3>Processos administrativos</h3>
          <p>Mapeamento, padronização e documentação para tornar rotinas mais claras e previsíveis.</p>
          <div className="competency-tags"><span>Fluxos</span><span>Padrões</span><span>Documentação</span></div>
          <div className="competency-flow" aria-hidden="true">
            <svg viewBox="0 0 132 166" fill="none"><path d="M66 23v22m0 30v21m0 34v17M82 62h32v52H84"/><path className="flow-arrow" d="m62 40 4 5 4-5m-8 51 4 5 4-5m-8 51 4 5 4-5"/></svg>
            <i className="flow-start"/><i className="flow-task"/><i className="flow-decision"/><i className="flow-end"/>
          </div>
        </article>

        <article className="competency-card competency-card-small competency-data">
          <span className="competency-icon"><CompetencyIcon name="data"/></span>
          <h3>Dados e indicadores</h3>
          <p>Excel, tratamento de dados e visualizações que apoiam o acompanhamento e a decisão.</p>
          <div className="competency-chart" aria-hidden="true">
            <i/><i/><i/><i/><i/><i/><i/>
            <svg viewBox="0 0 220 86" preserveAspectRatio="none"><polyline points="5,75 38,62 70,48 102,58 135,35 170,27 215,7"/><circle cx="5" cy="75" r="2.2"/><circle cx="38" cy="62" r="2.2"/><circle cx="70" cy="48" r="2.2"/><circle cx="102" cy="58" r="2.2"/><circle cx="135" cy="35" r="2.2"/><circle cx="170" cy="27" r="2.2"/><circle cx="215" cy="7" r="3"/></svg>
          </div>
        </article>

        <article className="competency-card competency-card-wide competency-automation">
          <span className="competency-icon"><CompetencyIcon name="automation"/></span>
          <h3>Automação</h3>
          <p>Python aplicado à redução de tarefas manuais e à organização de informações.</p>
          <div className="competency-tags"><span>Python</span><span>Scripts</span><span>Rotinas</span></div>
        </article>

        <article className="competency-card competency-card-small competency-ai">
          <span className="competency-icon"><CompetencyIcon name="ai"/></span>
          <h3>IA aplicada</h3>
          <p>Apoio à produtividade, análise e melhoria de fluxos administrativos.</p>
        </article>
      </div>

      <div className="home-competencies-copy">
        <span className="home-competencies-badge"><CompetencyIcon name="process"/>Competências aplicadas</span>
        <h2 id="home-competencies-title">Conhecimento técnico<br/>conectado à <em>realidade<br/>da operação.</em></h2>
        <p>Mais do que dominar ferramentas, aplico métodos e tecnologia para organizar rotinas, estruturar informações e resolver problemas administrativos.</p>
        <strong><i aria-hidden="true"/>Tecnologia com propósito operacional.</strong>
      </div>
    </div>
  </section>;
}
