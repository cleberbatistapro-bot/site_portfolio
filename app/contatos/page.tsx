type ContactIcon = "linkedin" | "email" | "whatsapp" | "info" | "document" | "shield" | "arrow";

const iconPaths: Record<ContactIcon, React.ReactNode> = {
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a3 3 0 0 1 6 0v4M12 10v7"/></>,
  email: <><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></>,
  whatsapp: <><path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4.1A8 8 0 1 1 20 11.6Z"/><path d="M9 8.5c.4 2.7 1.8 4.2 4.6 5l1.3-1.2 2 .9c-.3 1.4-1.4 2.3-2.8 2.2-4.3-.5-6.8-3-7.3-7.2-.1-1.3.8-2.4 2.1-2.8l1 1.9Z"/></>,
  info: <><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></>,
  document: <><path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v5h5M9 12h6M9 16h5"/></>,
  shield: <><path d="M12 3 4 6v5c0 5 3.4 8.2 8 10 4.6-1.8 8-5 8-10V6Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
  arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
};

function Icon({ name, size = 24 }: { name: ContactIcon; size?: number }) {
  return <svg className="line-icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{iconPaths[name]}</svg>;
}

const channels = [
  {
    icon: "linkedin" as ContactIcon,
    name: "LinkedIn",
    description: "Canal recomendado para apresentar a vaga e iniciar o contato profissional.",
    value: "linkedin.com/in/cleber-silva-batista",
    action: "Conversar pelo LinkedIn",
    href: "https://www.linkedin.com/in/cleber-silva-batista/",
  },
  {
    icon: "email" as ContactIcon,
    name: "E-mail",
    description: "Para informações formais, envio de documentos e continuidade do processo seletivo.",
    value: "contato@cleberbatistapro.com.br",
    action: "Enviar e-mail",
    href: "mailto:contato@cleberbatistapro.com.br",
  },
  {
    icon: "whatsapp" as ContactIcon,
    name: "WhatsApp",
    description: "Para continuidade de um contato profissional já iniciado.",
    value: "(11) 91653-2242",
    action: "Falar pelo WhatsApp",
    href: "https://wa.me/5511916532242",
  },
];

export default function ContactPage() {
  return <div className="about-page contact-page" id="contatos">
    <header className="site-navbar">
      <div className="site-navbar-inner">
        <a className="site-brand" href="/#inicio" aria-label="Cleber Batista — Página inicial">CLEBER BATISTA</a>
        <nav className="site-nav-links" aria-label="Navegação principal">
          <a className="site-nav-link" href="/#inicio">Página Inicial</a>
          <a className="site-nav-link" href="/sobre-mim/">Sobre Mim</a>
          <a className="site-nav-link" href="/projetos/">Projetos</a>
          <a className="site-nav-link active" href="/contatos/" aria-current="page">Contatos</a>
        </nav>
        <div className="navbar-actions"><a className="navbar-cv-button" href="/curriculo-cleber-batista.pdf" download>Baixar Currículo</a></div>
      </div>
    </header>

    <main className="contact-container">
      <section className="contact-layout" aria-labelledby="contact-title">
        <div className="contact-copy">
          <span className="contact-eyebrow">Contato profissional</span>
          <h1 id="contact-title">Tem uma oportunidade compatível com meu perfil?</h1>
          <p>Estou disponível para vagas 100% remotas em processos, automação, operações e melhoria contínua, em regime CLT ou PJ.</p>
          <p>Tenho interesse em funções que envolvam organização de informações, qualidade, melhoria de rotinas, indicadores ou automação aplicada ao trabalho administrativo.</p>

          <div className="contact-guidance"><Icon name="info" size={25}/><p>Ao entrar em contato, informe o nome da empresa, a vaga e um breve contexto da oportunidade.</p></div>

          <a className="contact-cv-button" href="/curriculo-cleber-batista.pdf" download><Icon name="document" size={20}/><span>Acessar currículo</span><Icon name="arrow" size={19}/></a>
        </div>

        <section className="contact-panel" aria-labelledby="channels-title">
          <header><h2 id="channels-title">Entre em contato</h2><p>Escolha o canal mais adequado para falar sobre uma oportunidade profissional.</p></header>

          <div className="contact-channels">
            {channels.map(channel => <a className="contact-channel" href={channel.href} key={channel.name} target={channel.icon === "email" ? undefined : "_blank"} rel={channel.icon === "email" ? undefined : "noreferrer"}>
              <span className={`contact-channel-icon contact-channel-icon-${channel.icon}`}><Icon name={channel.icon} size={34}/></span>
              <span className="contact-channel-copy"><strong>{channel.name}</strong><small>{channel.description}</small><em>{channel.value}</em></span>
              <span className="contact-channel-action">{channel.action}<Icon name="arrow" size={18}/></span>
            </a>)}
          </div>

          <div className="contact-panel-note"><Icon name="shield" size={27}/><p>Ao entrar em contato, informe o nome da empresa, a vaga e um breve contexto da oportunidade.</p></div>
        </section>
      </section>

      <div className="contact-pillars" aria-label="Áreas de atuação"><span>Processos</span><i></i><span>Automação</span><i></i><span>IA Aplicada</span></div>
    </main>

  </div>;
}
