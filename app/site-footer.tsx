export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="site-footer-main">
      <div className="site-footer-brand">
        <a href="/#inicio">CLEBER BATISTA</a>
        <p>Processos, dados e tecnologia aplicados à realidade da operação.</p>
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
      <p>Piracaia — SP <i/> Trabalho remoto <i/> CLT ou PJ</p>
      <p>CNPJ: 41.975.192/0001-62</p>
    </div>
  </footer>;
}
