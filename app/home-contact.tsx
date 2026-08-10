type HomeContactIcon = "linkedin" | "email" | "whatsapp" | "briefcase" | "arrow";

const homeContactIcons: Record<HomeContactIcon, React.ReactNode> = {
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a3 3 0 0 1 6 0v4M12 10v7"/></>,
  email: <><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></>,
  whatsapp: <><path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4.1A8 8 0 1 1 20 11.6Z"/><path d="M9 8.5c.4 2.7 1.8 4.2 4.6 5l1.3-1.2 2 .9c-.3 1.4-1.4 2.3-2.8 2.2-4.3-.5-6.8-3-7.3-7.2-.1-1.3.8-2.4 2.1-2.8l1 1.9Z"/></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18"/></>,
  arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
};

function HomeContactIcon({ name, size = 24 }: { name: HomeContactIcon; size?: number }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{homeContactIcons[name]}</svg>;
}

const homeChannels = [
  { icon: "linkedin" as HomeContactIcon, name: "LinkedIn", value: "cleber-silva-batista", action: "Acessar perfil", href: "https://www.linkedin.com/in/cleber-silva-batista/" },
  { icon: "email" as HomeContactIcon, name: "E-mail", value: "contato@cleberbatistapro.com.br", action: "Enviar e-mail", href: "mailto:contato@cleberbatistapro.com.br" },
  { icon: "whatsapp" as HomeContactIcon, name: "WhatsApp", value: "(11) 91653-2242", action: "Iniciar conversa", href: "https://wa.me/5511916532242" },
];

export default function HomeContact() {
  return <section id="contato" className="home-contact-section" aria-labelledby="home-contact-title">
    <div className="home-contact-shell">
      <div className="home-contact-copy">
        <span className="home-contact-badge"><HomeContactIcon name="briefcase" size={15}/>Contato profissional</span>
        <h2 id="home-contact-title">Vamos conversar sobre uma <em>oportunidade?</em></h2>
        <p>Estou disponível para vagas 100% remotas nas áreas administrativa, processos, operações e backoffice, em regime CLT ou PJ.</p>
        <div className="home-contact-status"><i aria-hidden="true"/><span>Disponível para trabalho remoto</span><b>CLT ou PJ</b></div>
      </div>

      <div className="home-contact-panel">
        <header><h3>Escolha o melhor canal</h3><p>Fale comigo sobre uma oportunidade profissional.</p></header>
        <div className="home-contact-channels">
          {homeChannels.map(channel => <a className={`home-contact-channel home-contact-${channel.icon}`} href={channel.href} key={channel.name} target={channel.icon === "email" ? undefined : "_blank"} rel={channel.icon === "email" ? undefined : "noreferrer"}>
            <span className="home-contact-channel-icon"><HomeContactIcon name={channel.icon} size={27}/></span>
            <span className="home-contact-channel-copy"><strong>{channel.name}</strong><small>{channel.value}</small></span>
            <span className="home-contact-channel-action">{channel.action}<HomeContactIcon name="arrow" size={17}/></span>
          </a>)}
        </div>
        <p className="home-contact-note">Ao entrar em contato, informe o nome da empresa, a vaga e um breve contexto da oportunidade.</p>
      </div>
    </div>
    <div className="home-contact-signature"><span>Processos</span><i/><span>Dados</span><i/><span>Automação</span></div>
  </section>;
}
