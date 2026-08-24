export default function PrivacyPage() {
  return <div className="about-page" id="privacidade">
    <header className="site-navbar">
      <div className="site-navbar-inner">
        <a className="site-brand" href="/#inicio" aria-label="Cleber Batista — Página inicial">CLEBER BATISTA</a>
        <nav className="site-nav-links" aria-label="Navegação principal">
          <a className="site-nav-link" href="/#inicio">Página Inicial</a>
          <a className="site-nav-link" href="/sobre-mim/">Sobre Mim</a>
          <a className="site-nav-link" href="/projetos/">Projetos</a>
          <a className="site-nav-link" href="/contatos/">Contatos</a>
        </nav>
        <div className="navbar-actions"><a className="navbar-cv-button" href="/curriculo-cleber-batista.pdf" download>Baixar Currículo</a></div>
      </div>
    </header>

    <main className="page-container" id="privacidade-content">
      <header className="page-heading"><h1>Política de Privacidade</h1><p>Última atualização: agosto de 2026</p></header>

      <section className="content-card privacy-content">
        <p>Este é o site pessoal e portfólio profissional de Cleber Batista. Levo a sério a privacidade de quem visita, e esta página explica de forma simples o que é coletado e por quê.</p>

        <h2>O que é coletado</h2>
        <p>Ao navegar neste site, são coletados dados de navegação de forma anônima, como: páginas visitadas, tempo de permanência, cliques, movimento na página (mapa de calor), tipo de dispositivo, navegador e localização aproximada por região.</p>
        <p>Não é solicitado nenhum cadastro, e não são coletados dados que identifiquem você pessoalmente, como nome, CPF ou endereço.</p>

        <h2>Ferramentas utilizadas</h2>
        <p>Para essa análise, o site usa duas ferramentas de terceiros:</p>
        <ul>
          <li>Microsoft Clarity — mapas de calor e análise de comportamento de navegação.</li>
          <li>Google Analytics — estatísticas de acesso e tráfego.</li>
        </ul>
        <p>Essas ferramentas utilizam cookies e possuem suas próprias políticas de privacidade (Microsoft e Google), às quais recomendo a leitura.</p>

        <h2>Finalidade</h2>
        <p>Os dados são usados com um único objetivo: entender como o site é utilizado para melhorar a experiência de quem visita. Nada é vendido ou compartilhado para fins comerciais.</p>

        <h2>Seus direitos</h2>
        <p>Conforme a Lei Geral de Proteção de Dados (LGPD), você pode solicitar acesso, correção ou exclusão de dados a qualquer momento. Para isso, entre em contato: <a href="mailto:contato@cleberbatistapro.com.br">contato@cleberbatistapro.com.br</a></p>
      </section>
    </main>
  </div>;
}
