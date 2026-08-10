type FooterIcon = "linkedin" | "email" | "whatsapp";

const footerIconPaths: Record<FooterIcon, React.ReactNode> = {
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a3 3 0 0 1 6 0v4M12 10v7"/></>,
  email: <><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></>,
  whatsapp: <><path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4.1A8 8 0 1 1 20 11.6Z"/><path d="M9 8.5c.4 2.7 1.8 4.2 4.6 5l1.3-1.2 2 .9c-.3 1.4-1.4 2.3-2.8 2.2-4.3-.5-6.8-3-7.3-7.2-.1-1.3.8-2.4 2.1-2.8l1 1.9Z"/></>,
};

function FooterIcon({ name }: { name: FooterIcon }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{footerIconPaths[name]}</svg>;
}

const socialLinks: Array<{ icon: FooterIcon; label: string; href: string; external?: boolean }> = [
  { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/cleber-silva-batista/", external: true },
  { icon: "email", label: "E-mail", href: "mailto:contato@cleberbatistapro.com.br" },
  { icon: "whatsapp", label: "WhatsApp", href: "https://wa.me/5511916532242", external: true },
];

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="site-footer-main">
      <div className="site-footer-brand">
        <a href="/#inicio" className="site-footer-logo">CLEBER BATISTA</a>
        <p>Processos, dados e tecnologia aplicados à realidade da operação.</p>
        <ul className="site-footer-meta">
          <li>Piracaia — SP</li>
          <li>Trabalho remoto</li>
          <li>CLT ou PJ</li>
        </ul>
        <div className="site-footer-social">
          {socialLinks.map(link => <a
            key={link.icon}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            aria-label={link.label}
            title={link.label}
          ><FooterIcon name={link.icon}/></a>)}
        </div>
      </div>

      <nav className="site-footer-nav" aria-label="Navegação do rodapé">
        <strong>Navegação</strong>
        <a href="/#inicio">Página Inicial</a>
        <a href="/sobre-mim/">Sobre Mim</a>
        <a href="/projetos/">Projetos</a>
        <a href="/contatos/">Contatos</a>
      </nav>

      <div className="site-footer-contact">
        <strong>Contato profissional</strong>
        <a href="mailto:contato@cleberbatistapro.com.br">E-mail <span>↗</span></a>
        <a href="https://www.linkedin.com/in/cleber-silva-batista/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
        <a href="https://wa.me/5511916532242" target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a>
      </div>
    </div>

    <div className="site-footer-bottom">
      <p>© 2026 Cleber Batista. Todos os direitos reservados.</p>
      <p>CNPJ: 41.975.192/0001-62</p>
    </div>
  </footer>;
}
