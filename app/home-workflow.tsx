type WorkflowIconName = "discover" | "organize" | "build" | "validate";

const workflowIcons: Record<WorkflowIconName, React.ReactNode> = {
  discover: <><circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 5 5M10.5 7.5v6M7.5 10.5h6"/></>,
  organize: <><rect x="3" y="4" width="6" height="5" rx="1"/><rect x="15" y="15" width="6" height="5" rx="1"/><rect x="3" y="15" width="6" height="5" rx="1"/><path d="M6 9v3h12v3M6 12v3"/></>,
  build: <><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></>,
  validate: <><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M9 10l1.5 1.5L14 8M9 16h6"/></>,
};

function WorkflowIcon({ name }: { name: WorkflowIconName }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{workflowIcons[name]}</svg>;
}

const steps: Array<{ number: string; icon: WorkflowIconName; title: string; description: string }> = [
  { number: "01", icon: "discover", title: "Entender o problema.", description: "Contexto, rotina e necessidade." },
  { number: "02", icon: "organize", title: "Organizar o processo.", description: "Fluxos, critérios e informações." },
  { number: "03", icon: "build", title: "Construir a solução.", description: "Automação, dados e interface." },
  { number: "04", icon: "validate", title: "Testar e documentar.", description: "Validação, ajustes e registro." },
];

export default function HomeWorkflow() {
  return <section id="metodo" className="home-workflow-section" aria-labelledby="home-workflow-title">
    <div className="home-workflow-shell">
      <header className="home-workflow-heading">
        <span className="home-workflow-eyebrow">Como trabalho</span>
        <h2 id="home-workflow-title">
          <span>Da análise à entrega: soluções construídas</span>
          <span>com <em>clareza e método.</em></span>
        </h2>
        <p>Cada projeto parte de um problema real, passa pela organização do processo e evolui até uma solução funcional, testada e documentada.</p>
        <strong><i aria-hidden="true"/>Método, organização e tecnologia para resolver problemas reais.</strong>
      </header>

      <div className="home-workflow-cards" aria-label="Etapas do método de trabalho">
        <div className="home-workflow-connector" aria-hidden="true">
          <i className="home-workflow-pulse" style={{ animationDelay: "0s" }}/>
          <i className="home-workflow-pulse" style={{ animationDelay: "1.1s" }}/>
          <i className="home-workflow-pulse" style={{ animationDelay: "2.2s" }}/>
        </div>
        {steps.map((step) => <article className="home-workflow-card" key={step.number}>
          <span className="home-workflow-number">{step.number}</span>
          <span className="home-workflow-icon"><WorkflowIcon name={step.icon}/></span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </article>)}
      </div>
    </div>
  </section>;
}
