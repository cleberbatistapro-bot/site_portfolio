type FeatIconName = "layers" | "lock" | "shield" | "chart" | "link";

const featIconPaths: Record<FeatIconName, React.ReactNode> = {
  layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></>,
  lock: <><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></>,
  shield: <><path d="M12 3 4 6v5c0 5 3.4 8.2 8 10 4.6-1.8 8-5 8-10V6Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
  chart: <><path d="M4 20V10M10 20V5M16 20v-8M22 20V2"/></>,
  link: <><path d="M9 17H7a5 5 0 0 1 0-10h2"/><path d="M15 7h2a5 5 0 0 1 0 10h-2"/><path d="M8 12h8"/></>,
};

function FeatIcon({ name, size = 18 }: { name: FeatIconName; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{featIconPaths[name]}</svg>;
}

const highlights: { icon: FeatIconName; title: string; text: string }[] = [
  { icon: "layers", title: "Duas plataformas de verdade", text: "Fluxo e Agenda — banco e deploy próprios, conversando só por contrato de API." },
  { icon: "lock", title: "RBAC checado no servidor", text: "Cada permissão verificada de novo no backend, nunca só escondida atrás de um botão." },
  { icon: "shield", title: "Auditoria imutável", text: "Todo acesso, permitido ou negado, vira um registro que nunca é apagado." },
  { icon: "chart", title: "Régua da própria média", text: "Desempenho individual comparado só com o histórico da pessoa — nunca ranking." },
];

export default function HomePrumoFeature() {
  return <section className="home-prumo-section reveal" aria-labelledby="home-prumo-title">
    <div className="home-prumo-shell">
      <div className="home-prumo-copy">
        <span className="home-prumo-badge"><span className="home-prumo-dot" aria-hidden="true" />Projeto em destaque · no ar agora</span>
        <h2 id="home-prumo-title">Prumo: o trabalho remoto <em>visível pelo processo</em> — não pela vigilância.</h2>
        <p>Um sistema completo, em produção, que arquitetei do zero: linha de produção com gargalo em tempo real, desempenho individual sem ranking entre colegas, e uma arquitetura de plataformas-irmãs isoladas — não é mockup, é código rodando de verdade.</p>
        <div className="home-prumo-actions">
          <a className="home-primary-action" href="https://prumo.cleberbatistapro.com.br" target="_blank" rel="noreferrer">Ver a demonstração ao vivo <span aria-hidden="true">→</span></a>
          <a className="home-text-link" href="/projetos/prumo/">Ler o estudo de caso completo <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="home-prumo-grid">
        {highlights.map(item => <article key={item.title} className="home-prumo-card">
          <span className="home-prumo-card-icon"><FeatIcon name={item.icon} /></span>
          <div><h3>{item.title}</h3><p>{item.text}</p></div>
        </article>)}
      </div>
    </div>
  </section>;
}
