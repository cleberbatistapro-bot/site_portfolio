"use client";

import { useEffect, useRef, useState } from "react";

export type ProjectSlug = "prumo" | "organizador-de-arquivos" | "procfacil" | "sistema-inspecao-digital" | "controle-calibracao" | "dashboard-operacional";
type IconName = "folder" | "document" | "clipboard" | "target" | "users" | "award" | "python" | "desktop" | "play" | "warning" | "gear" | "chart" | "search" | "eye" | "shield" | "report" | "check" | "file" | "layers" | "link" | "lock";

export const projects: { slug: ProjectSlug; label: string; icon: IconName; summary: string }[] = [
  { slug: "prumo", label: "Prumo", icon: "layers", summary: "Sistema web em produção para gestão de equipe remota: linha de produção com gargalo em tempo real, desempenho individual e uma arquitetura de plataformas-irmãs separadas." },
  { slug: "organizador-de-arquivos", label: "Organizador de Arquivos", icon: "folder", summary: "Aplicação desktop desenvolvida em Python para organizar arquivos administrativos por categoria, com opções de simulação e backup antes da execução." },
  { slug: "procfacil", label: "ProcFácil", icon: "document", summary: "Aplicação desktop em Python para cruzar informações de diferentes planilhas, identificar correspondências e gerar uma base consolidada pronta para conferência." },
  { slug: "sistema-inspecao-digital", label: "Sistema de Inspeção Digital", icon: "clipboard", summary: "Solução projetada para apoiar a inspeção final de chicotes elétricos automotivos, transformando uma rotina de qualidade em um fluxo digital guiado, padronizado e rastreável." },
  { slug: "controle-calibracao", label: "Controle de Calibração", icon: "target", summary: "Solução projetada para centralizar o controle de instrumentos de medição, acompanhar prazos de calibração e tornar as informações mais organizadas, rastreáveis e fáceis de consultar." },
  { slug: "dashboard-operacional", label: "Dashboard Operacional", icon: "chart", summary: "Solução desenvolvida para receber dados de planilhas, organizar os campos e transformá-los em indicadores visuais que facilitam o acompanhamento da operação e a identificação de desvios." },
];

const paths: Record<IconName, React.ReactNode> = {
  folder: <path d="M3 6h7l2 2h9v11H3Z"/>,
  document: <><path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v5h5M9 12h6M9 16h6"/></>,
  clipboard: <><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M9 10l2 2 4-4M9 16h6"/></>,
  target: <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></>,
  users: <><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0M16 5a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5"/></>,
  award: <><circle cx="12" cy="9" r="6"/><path d="m8 14-1 8 5-3 5 3-1-8"/></>,
  python: <><path d="M8 4c0-2 8-2 8 0v5H8c-4 0-4 6 0 6h2"/><path d="M16 20c0 2-8 2-8 0v-5h8c4 0 4-6 0-6h-2"/></>,
  desktop: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></>,
  play: <path d="m9 7 8 5-8 5Z"/>,
  warning: <><path d="m12 3 10 18H2Z"/><path d="M12 9v5M12 18h.01"/></>,
  gear: <><circle cx="12" cy="12" r="3"/><path d="M19 13.5v-3l-2-.7-.5-1.2.9-1.9-2.1-2.1-1.9.9-1.2-.5-.7-2h-3l-.7 2-1.2.5-1.9-.9-2.1 2.1.9 1.9-.5 1.2-2 .7v3l2 .7.5 1.2-.9 1.9 2.1 2.1 1.9-.9 1.2.5.7 2h3l.7-2 1.2-.5 1.9.9 2.1-2.1-.9-1.9.5-1.2Z"/></>,
  chart: <><path d="M4 20V10M10 20V5M16 20v-8M22 20V2"/></>,
  search: <><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/></>,
  eye: <><path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></>,
  shield: <><path d="M12 3 4 6v5c0 5 3.4 8.2 8 10 4.6-1.8 8-5 8-10V6Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
  report: <><path d="M6 3h12v18H6Z"/><path d="M9 8h6M9 12h6M9 16h4"/></>,
  check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></>,
  file: <path d="M6 3h8l4 4v14H6ZM14 3v5h5"/>,
  layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></>,
  link: <><path d="M9 17H7a5 5 0 0 1 0-10h2"/><path d="M15 7h2a5 5 0 0 1 0 10h-2"/><path d="M8 12h8"/></>,
  lock: <><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></>,
};

function Icon({ name, size = 21 }: { name: IconName; size?: number }) {
  return <svg className="line-icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function ProjectVideo({ src, label }: { src: string; label: string }) {
  return <video className="project-video" src={src} controls autoPlay muted playsInline preload="metadata" aria-label={label} />;
}

function ProjectScreenshot({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return <figure className="project-screenshot">
    <div className="project-screenshot-chrome" aria-hidden="true"><span/><span/><span/></div>
    <img src={src} alt={alt} loading="lazy" />
    {caption && <figcaption>{caption}</figcaption>}
  </figure>;
}

function ProjectImageCompare({ before, after }: { before: { src: string; alt: string }; after: { src: string; alt: string } }) {
  return <div className="project-image-compare">
    <figure><img src={before.src} alt={before.alt} loading="lazy" /><figcaption><Icon name="warning" size={15}/>Antes</figcaption></figure>
    <figure><img src={after.src} alt={after.alt} loading="lazy" /><figcaption><Icon name="check" size={15}/>Depois</figcaption></figure>
  </div>;
}

function SummaryCard({ icon, title, children }: { icon: IconName; title: string; children: React.ReactNode }) {
  return <article className="project-summary-card"><span><Icon name={icon}/></span><div><h3>{title}</h3><p>{children}</p></div></article>;
}

function FeatureCard({ icon, title, children }: { icon: IconName; title: string; children: React.ReactNode }) {
  return <article className="project-feature-card"><span><Icon name={icon}/></span><h4>{title}</h4><p>{children}</p></article>;
}

function AccordionSection({ number, title, defaultOpen, sectionClassName, children }: { number: string; title: string; defaultOpen?: boolean; sectionClassName?: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return <section className="project-section accordion-section">
    <button type="button" className="accordion-trigger" aria-expanded={open} onClick={() => setOpen(value => !value)}>
      <span className="project-section-number">{number}</span>
      <h3>{title}</h3>
      <svg className="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div className={open ? "accordion-panel is-open" : "accordion-panel"}>
      <div className={sectionClassName ? `accordion-panel-inner ${sectionClassName}` : "accordion-panel-inner"}>{children}</div>
    </div>
  </section>;
}

function LiveDemoBox() {
  return <a className="project-live-demo" href="https://prumo.cleberbatistapro.com.br" target="_blank" rel="noreferrer">
    <span className="project-live-dot" aria-hidden="true" />
    <div>
      <strong>No ar agora — não é maquete</strong>
      <p>prumo.cleberbatistapro.com.br · login demo com 3 cargos, senha única <code>Prumo@123</code></p>
    </div>
    <Icon name="link" size={17} />
  </a>;
}

function PrumoCaseStudy() {
  const technologies = ["Cloudflare Pages", "Cloudflare Functions", "Cloudflare D1 (SQLite)", "TypeScript", "PBKDF2 / Web Crypto", "SQL puro, sem ORM", "HTML/CSS/JS sem framework"];
  const skills = ["Arquitetura de sistemas", "Segurança e RBAC", "Modelagem de banco de dados", "Design de produto", "Gestão de pessoas remotas", "Documentação técnica", "Deploy e infraestrutura"];
  const before = ["Ferramentas genéricas de tarefa", "Métricas que viram ranking", "Nenhuma trilha de auditoria", "Um sistema, um ponto único de falha"];
  const after = [["Linha de produção", "Gargalo identificado sozinho"], ["Desempenho individual", "Comparado só com a própria média"], ["Auditoria", "Todo acesso registrado, imutável"], ["Plataformas-irmãs", "Uma cai, a outra continua no ar"]];

  return <>
    <header className="project-intro">
      <span className="project-eyebrow">Arquitetura de sistemas e gestão remota</span>
      <h2>Prumo</h2>
      <p>Sistema operacional de uma equipe remota orientada a resultado: torna o trabalho visível pelo processo — não pela vigilância. Autenticação real, controle de acesso por cargo checado no servidor, auditoria imutável e duas plataformas-irmãs que se falam só por contrato de API.</p>
      <div className="project-meta"><span><Icon name="award" size={17}/>Projeto autoral</span><span><Icon name="layers" size={17}/>Arquitetura multi-serviço</span><span><Icon name="desktop" size={17}/>Aplicação web em produção</span></div>
    </header>

    <LiveDemoBox />

    <ProjectScreenshot
      src="/project-media/prumo-trilha-producao.png"
      alt="Tela da Trilha de Produção do Prumo: quadro com as etapas Fila, Execução, Revisão e Entregue, gargalo destacado em vermelho na etapa Revisão com 5 tarefas paradas"
      caption="A Trilha de Produção, em produção — o gargalo aparece sozinho, sem precisar perguntar a ninguém."
    />

    <div className="project-summary-grid">
      <SummaryCard icon="warning" title="Problema">Ferramentas de gestão remota tratam controle de processo e vigilância de pessoas como a mesma coisa — e toda métrica individual vira ranking, não assistência.</SummaryCard>
      <SummaryCard icon="gear" title="Solução">Um sistema com tese própria: controle total sobre prazo e fluxo, liberdade total sobre como e quando a pessoa entrega — com cada indicador comparado só com o histórico dela mesma.</SummaryCard>
      <SummaryCard icon="chart" title="Resultado">Dois serviços de verdade em produção, com banco próprio cada um, autenticação real e uma arquitetura testada derrubando uma das partes de propósito para provar o isolamento de falhas.</SummaryCard>
    </div>

    <AccordionSection number="01" title="O desafio" defaultOpen sectionClassName="project-challenge">
      <div><p>A maioria das ferramentas de gestão de equipe remota resolve o mesmo problema do mesmo jeito: um quadro de tarefas, um relatório de produtividade, e pronto. O efeito colateral raramente é discutido — quando toda métrica vira comparação entre colegas, a ferramenta deixa de medir processo e passa a vigiar pessoa.</p><p>O ponto de partida do Prumo foi outro: como usar a mesma rastreabilidade de um processo de controle de qualidade industrial — onde eu atuei por anos — na rotina de uma equipe remota, sem transformar isso em vigilância.</p></div>
      <aside className="project-scenario"><h4>Cenário de partida</h4><div><Icon name="eye"/><p><strong>Vigilância disfarçada de gestão</strong>Ferramentas que rastreiam a pessoa, não o processo.</p></div><div><Icon name="target"/><p><strong>Métrica vira ranking</strong>Comparação entre colegas em vez de com a própria evolução.</p></div><div><Icon name="warning"/><p><strong>Um sistema, uma falha</strong>Um bug numa função qualquer derruba a operação inteira.</p></div></aside>
    </AccordionSection>

    <AccordionSection number="02" title="A arquitetura projetada" sectionClassName="project-solution">
      <div className="project-section-copy"><p>Desenhei o Prumo como duas plataformas-irmãs de verdade — Fluxo (o trabalho visível) e Agenda (a primeira ferramenta plugada) — cada uma com banco de dados próprio e deploy próprio, conversando só por um contrato de API protegido por chave compartilhada. Nenhuma conhece as tripas da outra; se uma cai, a outra continua respondendo.</p></div>
      <div className="project-feature-grid"><FeatureCard icon="layers" title="Plataformas separadas">Banco e deploy próprios por serviço — isolamento de falhas de verdade, não só no papel.</FeatureCard><FeatureCard icon="lock" title="RBAC no servidor">Cada permissão checada dentro da própria função de backend, nunca só escondida atrás de um botão.</FeatureCard><FeatureCard icon="shield" title="Auditoria imutável">Todo login, acesso negado e ação sensível grava uma linha que nunca é editada nem apagada.</FeatureCard><FeatureCard icon="link" title="Contrato de API">A única porta entre as plataformas — testada derrubando uma das duas de propósito.</FeatureCard></div>
    </AccordionSection>

    <AccordionSection number="03" title="Como funciona">
      <div className="project-section-copy"><p>A jornada foi desenhada para se contar sozinha, sem precisar de manual: quem entra entende a tese antes de logar, e vê o RBAC funcionando na prática ao trocar de cargo.</p></div>
      <ol className="project-process">
        <li><span>01</span><img className="project-process-shot" src="/project-media/prumo-login.png" alt="Tela de login do Prumo" loading="lazy"/><h4>Entrar</h4><p>Login real com hash de senha (PBKDF2) e sessão por cookie seguro.</p></li>
        <li><span>02</span><img className="project-process-shot" src="/project-media/prumo-trilha-producao.png" alt="Linha de produção com o gargalo destacado" loading="lazy"/><h4>Ver o gargalo</h4><p>A linha de produção destaca sozinha onde o trabalho está empacado.</p></li>
        <li><span>03</span><img className="project-process-shot" src="/project-media/prumo-modal-tarefa.png" alt="Modal da corrente da tarefa, mostrando quem está com ela agora" loading="lazy"/><h4>Assistir, não cobrar</h4><p>A corrente da tarefa mostra quem está com ela e sugere apoio, não punição.</p></li>
        <li><span>04</span><img className="project-process-shot" src="/project-media/prumo-desempenho-graficos.png" alt="Gráficos do Desempenho Individual comparando a pessoa só com a própria média" loading="lazy"/><h4>Medir com justiça</h4><p>Desempenho individual comparado só com a própria média da pessoa.</p></li>
      </ol>
    </AccordionSection>

    <AccordionSection number="04" title="Segurança antes de qualquer coisa">
      <div className="project-security"><Icon name="shield" size={34}/><div><p>Nada no Prumo assume que a tela é suficiente. Toda regra de permissão é verificada de novo no servidor, mesmo que a interface já esconda o botão — testei isso na prática chamando a API diretamente como um cargo sem permissão, e o servidor bloqueou corretamente.</p><div className="project-checks"><span><Icon name="check" size={18}/>Hash de senha com salt único por pessoa</span><span><Icon name="check" size={18}/>Sessão em cookie HttpOnly, nunca acessível por script</span><span><Icon name="check" size={18}/>Toda tentativa negada vira linha de auditoria</span></div></div></div>
    </AccordionSection>

    <AccordionSection number="05" title="Resultado em produção">
      <div className="project-section-copy"><p>Números reais do estado atual do sistema, não estimativa.</p></div>
      <div className="project-metrics"><article><strong>2</strong><span>plataformas em produção</span><p>Fluxo e Agenda, cada uma com banco e deploy próprios.</p></article><article><strong>7</strong><span>blocos de arquitetura fechados</span><p>Autenticação, RBAC, auditoria, desempenho, landing, integração e acabamento.</p></article><article><strong>0</strong><span>dados sensíveis reais</span><p>Ambiente de demonstração, cargos e senha únicos para avaliação.</p></article></div>
    </AccordionSection>

    <AccordionSection number="06" title="Antes e depois">
      <div className="project-comparison"><article className="before"><header><div><strong>Ferramenta genérica</strong><p>O padrão do mercado de gestão remota.</p></div><Icon name="warning"/></header><ul>{before.map(item => <li key={item}><Icon name="file" size={16}/><span>{item}</span></li>)}</ul></article><article className="after"><header><div><strong>Prumo</strong><p>Controle pelo processo, não pela pessoa.</p></div><Icon name="check"/></header><ul>{after.map(([feature, detail]) => <li key={feature}><Icon name="layers" size={16}/><span>{feature}</span><small>{detail}</small></li>)}</ul></article></div>
    </AccordionSection>

    <AccordionSection number="07" title="Tecnologias e competências">
      <div className="project-section-copy"><p>O projeto exigiu decidir, não só implementar: cada escolha de stack teve um porquê documentado, incluindo os limites técnicos aceitos conscientemente.</p></div>
      <div className="project-skills-grid"><article><h4>Tecnologias utilizadas</h4><div>{technologies.map(item => <span key={item}>{item}</span>)}</div></article><article><h4>Competências demonstradas</h4><div>{skills.map(item => <span key={item}>{item}</span>)}</div></article></div>
    </AccordionSection>

    <section className="project-section project-value"><Icon name="award" size={42}/><div><span className="project-eyebrow">Valor profissional</span><h3>Arquitetura, segurança e visão de gestão, na mesma peça.</h3><p>O Prumo demonstra minha capacidade de sair do problema operacional (gestão remota sem virar vigilância) até a decisão técnica mais fina (por que RBAC é checado no servidor, por que dois bancos separados) — sem perder de vista que o sistema existe para servir gente, não para controlar gente. É a combinação entre visão de processos, segurança e arquitetura que pretendo levar para uma equipe, em uma oportunidade CLT ou PJ.</p></div></section>
  </>;
}

function OrganizerCaseStudy() {
  const before = ["relatorio_final_v2.pdf", "planilha_dados.xlsx", "foto_evento_01.jpg", "apresentacao.pptx", "backup_2024.zip", "documento_antigo.docx"];
  const after = [["Documentos", "7 arquivos"], ["Planilhas", "5 arquivos"], ["Imagens", "4 arquivos"], ["Apresentações", "3 arquivos"], ["Compactados", "2 arquivos"]];
  const technologies = ["Python", "Pathlib", "Shutil", "Tkinter"];
  const skills = ["Análise de processos", "Organização", "Automação", "Tratamento de arquivos", "Experiência do usuário", "Testes e validação"];

  return <>
    <header className="project-intro">
      <span className="project-eyebrow">Automação de processos</span>
      <h2>Organizador de Arquivos</h2>
      <p>Aplicação desktop desenvolvida em Python para organizar arquivos administrativos por categoria, com opções de simulação e backup antes da execução.</p>
      <div className="project-meta"><span><Icon name="award" size={17}/>Projeto autoral</span><span><Icon name="python" size={17}/>Python</span><span><Icon name="desktop" size={17}/>Aplicação desktop</span></div>
    </header>

    <ProjectVideo src="/project-videos/organizador.mp4" label="Vídeo de apresentação do Organizador de Arquivos" />

    <div className="project-summary-grid">
      <SummaryCard icon="warning" title="Problema">Arquivos de diferentes formatos acumulados na mesma pasta, sem padrão de organização e difíceis de localizar.</SummaryCard>
      <SummaryCard icon="gear" title="Solução">Automação que identifica os formatos e distribui os arquivos em pastas por categoria, seguindo regras definidas.</SummaryCard>
      <SummaryCard icon="chart" title="Resultado">Na demonstração, 21 arquivos foram processados e organizados, sem nenhum formato não reconhecido.</SummaryCard>
    </div>

    <AccordionSection number="01" title="O desafio" defaultOpen sectionClassName="project-challenge">
      <div><p>Pastas administrativas frequentemente reúnem documentos, planilhas, imagens, apresentações, PDFs e arquivos compactados sem uma estrutura definida. A organização manual exige conferir cada item, criar pastas e mover os arquivos individualmente — uma rotina repetitiva, sujeita a erros e difícil de manter.</p><p>O projeto partiu desse problema operacional concreto: criar uma forma simples de classificar arquivos, preservar os dados originais e apresentar um resultado verificável ao usuário.</p></div>
      <aside className="project-scenario"><h4>Cenário inicial</h4><div><Icon name="folder"/><p><strong>Arquivos misturados</strong>Diferentes tipos armazenados na mesma pasta.</p></div><div><Icon name="search"/><p><strong>Organização manual</strong>Classificação individual, arquivo por arquivo.</p></div><div><Icon name="warning"/><p><strong>Risco operacional</strong>Maior chance de movimentação incorreta ou perda de referência.</p></div></aside>
    </AccordionSection>

    <AccordionSection number="02" title="A solução desenvolvida" sectionClassName="project-solution">
      <div className="project-section-copy"><p>Desenvolvi uma aplicação desktop que permite escolher a pasta de origem, configurar opções de segurança e executar a organização de forma controlada. O programa lê as extensões, aplica as regras de classificação e direciona cada arquivo para a categoria correspondente.</p></div>
      <div className="project-feature-grid"><FeatureCard icon="folder" title="Seleção de pasta">Escolha da pasta específica que será analisada e organizada.</FeatureCard><FeatureCard icon="eye" title="Modo de simulação">Prévia do que será feito antes de movimentar qualquer arquivo.</FeatureCard><FeatureCard icon="shield" title="Backup opcional">Cópia de segurança para preservar os arquivos antes da execução.</FeatureCard><FeatureCard icon="report" title="Relatório final">Resumo dos arquivos processados, organizados e não reconhecidos.</FeatureCard></div>
    </AccordionSection>

    <AccordionSection number="03" title="Como funciona">
      <div className="project-section-copy"><p>O fluxo foi desenhado para ser compreendido mesmo por quem não possui conhecimento técnico.</p></div>
      <ol className="project-process"><li><span>01</span><h4>Selecionar</h4><p>O usuário indica a pasta que contém os arquivos.</p></li><li><span>02</span><h4>Configurar</h4><p>Define simulação, backup e destino da organização.</p></li><li><span>03</span><h4>Organizar</h4><p>A aplicação identifica os formatos e aplica as regras.</p></li><li><span>04</span><h4>Conferir</h4><p>O relatório apresenta os resultados da execução.</p></li></ol>
    </AccordionSection>

    <AccordionSection number="04" title="Segurança antes da execução">
      <div className="project-security"><Icon name="shield" size={34}/><div><p>A aplicação prioriza a previsibilidade. O usuário pode simular a organização e gerar uma cópia de segurança antes de confirmar qualquer movimentação.</p><div className="project-checks"><span><Icon name="check" size={18}/>Prévia antes das alterações</span><span><Icon name="check" size={18}/>Cópia de segurança opcional</span><span><Icon name="check" size={18}/>Arquivos não reconhecidos preservados</span></div></div></div>
    </AccordionSection>

    <AccordionSection number="05" title="Resultado da demonstração">
      <div className="project-section-copy"><p>Dados observados no teste apresentado, sem estimativas de produtividade ou resultados comerciais.</p></div>
      <div className="project-metrics"><article><strong>21</strong><span>arquivos processados</span><p>Total identificado na pasta de teste.</p></article><article><strong>21</strong><span>arquivos organizados</span><p>Todos direcionados para suas categorias.</p></article><article><strong>0</strong><span>não reconhecidos</span><p>Nenhum formato ficou sem classificação.</p></article></div>
    </AccordionSection>

    <AccordionSection number="06" title="Antes e depois">
      <div className="project-comparison"><article className="before"><header><div><strong>Antes</strong><p>Arquivos misturados e sem padrão.</p></div><Icon name="warning"/></header><ul>{before.map((file) => <li key={file}><Icon name="file" size={16}/><span>{file}</span></li>)}</ul></article><article className="after"><header><div><strong>Depois</strong><p>Arquivos separados por categoria.</p></div><Icon name="check"/></header><ul>{after.map(([folder, count]) => <li key={folder}><Icon name="folder" size={16}/><span>{folder}</span><small>{count}</small></li>)}</ul></article></div>
    </AccordionSection>

    <AccordionSection number="07" title="Tecnologias e competências">
      <div className="project-section-copy"><p>O projeto combina implementação técnica com análise de uma rotina administrativa real.</p></div>
      <div className="project-skills-grid"><article><h4>Tecnologias utilizadas</h4><div>{technologies.map(item => <span key={item}>{item}</span>)}</div></article><article><h4>Competências demonstradas</h4><div>{skills.map(item => <span key={item}>{item}</span>)}</div></article></div>
    </AccordionSection>

    <section className="project-section project-value"><Icon name="award" size={42}/><div><span className="project-eyebrow">Valor profissional</span><h3>Tecnologia aplicada para resolver um problema operacional real.</h3><p>Este projeto demonstra minha capacidade de observar uma rotina, transformar necessidades em regras claras e desenvolver uma solução prática, segura e testável. É a combinação entre experiência administrativa, visão de processos e tecnologia aplicada que pretendo levar para uma equipe, em uma oportunidade CLT ou PJ.</p></div></section>
  </>;
}

function ProcFacilCaseStudy() {
  const sources = ["clientes.xlsx", "pagamentos.xlsx", "pedidos.xlsx"];
  const output = [["Unificado", "6 registros"], ["Pendências", "4 linhas sinalizadas"]];
  const technologies = ["Python", "Excel", "XLS / XLSX / CSV", "Aplicação desktop"];
  const skills = ["Consolidação de dados", "Definição de regras", "Qualidade de dados", "Tratamento de exceções", "Experiência do usuário", "Validação de resultados"];

  return <>
    <header className="project-intro">
      <span className="project-eyebrow">Consolidação e qualidade de dados</span>
      <h2>ProcFácil</h2>
      <p>Aplicação desktop em Python para cruzar informações de diferentes planilhas, identificar correspondências e gerar uma base consolidada pronta para conferência.</p>
      <div className="project-meta"><span><Icon name="award" size={17}/>Projeto autoral</span><span><Icon name="python" size={17}/>Python</span><span><Icon name="desktop" size={17}/>Aplicação desktop</span></div>
    </header>

    <ProjectVideo src="/project-videos/proc-facil.mp4" label="Vídeo de apresentação do ProcFácil" />

    <div className="project-summary-grid">
      <SummaryCard icon="warning" title="Problema">Dados relacionados distribuídos em várias planilhas, exigindo buscas, fórmulas e conferências manuais.</SummaryCard>
      <SummaryCard icon="gear" title="Solução">Fluxo guiado para escolher arquivos, definir chaves e colunas e consolidar as informações em uma única base.</SummaryCard>
      <SummaryCard icon="chart" title="Resultado">Na demonstração, três planilhas foram cruzadas em seis registros, com quatro linhas sinalizadas para conferência.</SummaryCard>
    </div>

    <AccordionSection number="01" title="O desafio" defaultOpen sectionClassName="project-challenge">
      <div><p>Rotinas administrativas frequentemente dependem de informações que estão separadas em diferentes arquivos: uma planilha contém os clientes, outra os pagamentos e uma terceira os pedidos. Para montar uma visão única, é necessário procurar identificadores, aplicar fórmulas, copiar colunas e conferir os resultados manualmente.</p><p>Além do tempo operacional, o processo exige atenção especial aos registros que não aparecem em todas as bases. Se essas diferenças não forem identificadas, a planilha final pode parecer completa mesmo contendo lacunas importantes.</p></div>
      <aside className="project-scenario"><h4>Cenário inicial</h4><div><Icon name="document"/><p><strong>Planilhas separadas</strong>Clientes, pagamentos e pedidos em arquivos diferentes.</p></div><div><Icon name="search"/><p><strong>Cruzamento manual</strong>Uso repetitivo de buscas, fórmulas e conferências.</p></div><div><Icon name="warning"/><p><strong>Correspondências incompletas</strong>Registros ausentes em uma ou mais fontes de dados.</p></div></aside>
    </AccordionSection>

    <AccordionSection number="02" title="A solução desenvolvida" sectionClassName="project-solution">
      <div className="project-section-copy"><p>Desenvolvi uma aplicação que conduz o usuário por três etapas. Primeiro, ele seleciona duas ou mais planilhas. Depois, escolhe a aba, a coluna-chave e quais campos de cada arquivo devem entrar no resultado. Por fim, o sistema cruza os dados, apresenta uma prévia e permite salvar a planilha consolidada.</p></div>
      <div className="project-feature-grid"><FeatureCard icon="document" title="Múltiplos arquivos">Seleção de duas ou mais planilhas nos formatos XLSX, XLS ou CSV.</FeatureCard><FeatureCard icon="target" title="Chave configurável">Definição do identificador em comum para relacionar os registros.</FeatureCard><FeatureCard icon="clipboard" title="Colunas selecionáveis">Escolha dos campos que realmente devem compor o resultado.</FeatureCard><FeatureCard icon="warning" title="Pendências visíveis">Linhas sem correspondência são destacadas para conferência.</FeatureCard></div>
    </AccordionSection>

    <AccordionSection number="03" title="Como funciona">
      <div className="project-section-copy"><p>O fluxo reduz a complexidade técnica do cruzamento de dados e deixa as decisões de configuração visíveis para o usuário.</p></div>
      <ol className="project-process"><li><span>01</span><h4>Selecionar</h4><p>O usuário escolhe as planilhas que deseja relacionar.</p></li><li><span>02</span><h4>Configurar</h4><p>Define a chave e as colunas de cada arquivo.</p></li><li><span>03</span><h4>Validar</h4><p>Confere a prévia e os registros sem correspondência.</p></li><li><span>04</span><h4>Exportar</h4><p>Salva o resultado em uma nova planilha Excel.</p></li></ol>
    </AccordionSection>

    <AccordionSection number="04" title="Conferência antes da exportação">
      <div className="project-security"><Icon name="shield" size={34}/><div><p>O ProcFácil não esconde as diferenças entre as fontes. Antes de salvar, a prévia destaca os registros sem correspondência e informa quantas linhas precisam de atenção. No arquivo final, essas ocorrências também são mantidas em uma aba específica.</p><div className="project-checks"><span><Icon name="check" size={18}/>Arquivos originais preservados</span><span><Icon name="check" size={18}/>Prévia do resultado consolidado</span><span><Icon name="check" size={18}/>Pendências separadas para revisão</span></div></div></div>
    </AccordionSection>

    <AccordionSection number="05" title="Resultado da demonstração">
      <div className="project-section-copy"><p>Dados observados no teste apresentado com as planilhas de clientes, pagamentos e pedidos.</p></div>
      <div className="project-metrics"><article><strong>3</strong><span>planilhas selecionadas</span><p>Três fontes relacionadas no mesmo fluxo.</p></article><article><strong>6</strong><span>registros consolidados</span><p>Chaves reunidas na prévia e no arquivo final.</p></article><article><strong>4</strong><span>linhas com pendências</span><p>Correspondências incompletas destacadas para revisão.</p></article></div>
    </AccordionSection>

    <AccordionSection number="06" title="Antes e depois">
      <div className="project-comparison"><article className="before"><header><div><strong>Antes</strong><p>Informações distribuídas em arquivos separados.</p></div><Icon name="warning"/></header><ul>{sources.map(file => <li key={file}><Icon name="file" size={16}/><span>{file}</span></li>)}</ul></article><article className="after"><header><div><strong>Depois</strong><p>Um arquivo estruturado para análise e conferência.</p></div><Icon name="check"/></header><ul>{output.map(([sheet, count]) => <li key={sheet}><Icon name="document" size={16}/><span>Aba {sheet}</span><small>{count}</small></li>)}</ul></article></div>
    </AccordionSection>

    <AccordionSection number="07" title="Tecnologias e competências">
      <div className="project-section-copy"><p>Mais do que unir arquivos, o projeto exigiu pensar em regras de relacionamento, exceções e clareza para quem precisa conferir o resultado.</p></div>
      <div className="project-skills-grid"><article><h4>Tecnologias e formatos</h4><div>{technologies.map(item => <span key={item}>{item}</span>)}</div></article><article><h4>Competências demonstradas</h4><div>{skills.map(item => <span key={item}>{item}</span>)}</div></article></div>
    </AccordionSection>

    <section className="project-section project-value"><Icon name="award" size={42}/><div><span className="project-eyebrow">Valor profissional</span><h3>Dados consolidados com regras claras e pendências visíveis.</h3><p>O ProcFácil demonstra minha capacidade de entender uma rotina administrativa baseada em planilhas, transformar o processo em uma sequência lógica e desenvolver uma ferramenta que facilita o trabalho sem eliminar a conferência humana. O resultado combina organização, rastreabilidade e tratamento transparente das exceções — competências relevantes para equipes administrativas, de processos e dados em oportunidades CLT ou PJ.</p></div></section>
  </>;
}

function InspectionCaseStudy() {
  const before = ["Checklist impresso", "Anotações manuais", "Consulta em arquivos físicos", "Informações distribuídas"];
  const after = [["Identificação", "Item e inspetor"], ["Verificações", "Critérios guiados"], ["Não conformidades", "Registro estruturado"], ["Histórico", "Consulta centralizada"]];
  const technologies = ["Figma", "Wireframes", "Fluxos de processo", "Dados estruturados"];
  const skills = ["Qualidade", "Mapeamento de processos", "Rastreabilidade", "Levantamento de requisitos", "UX operacional", "Confidencialidade"];

  return <>
    <header className="project-intro">
      <span className="project-eyebrow">Qualidade e rastreabilidade</span>
      <h2>Sistema de Inspeção Digital</h2>
      <p>Solução projetada para apoiar a inspeção final de chicotes elétricos automotivos, transformando uma rotina de qualidade em um fluxo digital guiado, padronizado e rastreável.</p>
      <div className="project-meta"><span><Icon name="award" size={17}/>Projeto conceitual</span><span><Icon name="clipboard" size={17}/>Processos de qualidade</span><span><Icon name="desktop" size={17}/>Interface para tablet</span></div>
    </header>

    <ProjectImageCompare
      before={{ src: "/project-media/inspecao-antes.png", alt: "Checklist de inspeção em papel, com medições e critérios preenchidos manualmente" }}
      after={{ src: "/project-media/inspecao-depois.png", alt: "Tela do sistema digital de inspeção mostrando a verificação dimensional guiada" }}
    />

    <div className="project-summary-grid">
      <SummaryCard icon="warning" title="Problema">Registros dispersos e conferências manuais podem dificultar a padronização da inspeção e a consulta posterior das informações.</SummaryCard>
      <SummaryCard icon="gear" title="Solução projetada">Fluxo digital que apresenta os critérios de forma estruturada e orienta o registro de cada etapa da inspeção.</SummaryCard>
      <SummaryCard icon="target" title="Objetivo">Favorecer organização, rastreabilidade e consistência no preenchimento, preservando o histórico para futuras consultas.</SummaryCard>
    </div>

    <AccordionSection number="01" title="O contexto operacional" defaultOpen sectionClassName="project-challenge">
      <div><p>A inspeção final é uma etapa importante para verificar se o produto atende aos critérios definidos antes da sua liberação. No contexto estudado, o inspetor precisa identificar o item, conferir diferentes pontos dimensionais e visuais, registrar o que foi encontrado e sinalizar possíveis não conformidades.</p><p>Quando esse processo depende de checklists em papel e registros distribuídos, o preenchimento pode variar, a localização do histórico exige mais esforço e a consolidação das informações de qualidade se torna menos prática.</p></div>
      <aside className="project-scenario"><h4>Cenário analisado</h4><div><Icon name="clipboard"/><p><strong>Critérios de inspeção</strong>Diferentes verificações precisam seguir uma sequência clara.</p></div><div><Icon name="file"/><p><strong>Registros dispersos</strong>Informações podem ficar separadas em formulários e arquivos.</p></div><div><Icon name="search"/><p><strong>Consulta do histórico</strong>Recuperar uma inspeção anterior pode exigir busca manual.</p></div></aside>
    </AccordionSection>

    <AccordionSection number="02" title="A solução projetada" sectionClassName="project-solution">
      <div className="project-section-copy"><p>Estruturei uma proposta de sistema que conduz o inspetor por etapas visíveis. A interface apresenta o item, o critério em análise, a referência visual e os limites de aceitação, permitindo registrar o valor encontrado e avançar somente com as informações necessárias.</p></div>
      <div className="project-feature-grid"><FeatureCard icon="target" title="Identificação do item">Vincula a inspeção ao código, lote ou número de série informado.</FeatureCard><FeatureCard icon="eye" title="Critérios visuais e dimensionais">Apresenta instruções, imagens de referência e especificações para conferência.</FeatureCard><FeatureCard icon="warning" title="Não conformidades">Permite registrar desvios e observações de maneira estruturada.</FeatureCard><FeatureCard icon="report" title="Histórico consultável">Organiza as inspeções concluídas para facilitar buscas e análises posteriores.</FeatureCard></div>
    </AccordionSection>

    <AccordionSection number="03" title="Como funciona">
      <div className="project-section-copy"><p>O fluxo traduz a rotina de qualidade em uma sequência objetiva, mantendo cada decisão associada à inspeção correspondente.</p></div>
      <ol className="project-process"><li><span>01</span><h4>Identificar</h4><p>O inspetor informa o item e os dados necessários para iniciar.</p></li><li><span>02</span><h4>Verificar</h4><p>Executa os critérios dimensionais e visuais apresentados.</p></li><li><span>03</span><h4>Registrar</h4><p>Inclui resultados, observações e possíveis não conformidades.</p></li><li><span>04</span><h4>Concluir</h4><p>Finaliza a inspeção e armazena o registro no histórico.</p></li></ol>
    </AccordionSection>

    <AccordionSection number="04" title="Padronização e rastreabilidade">
      <div className="project-security"><Icon name="shield" size={34}/><div><p>O sistema foi pensado para tornar as informações obrigatórias e os critérios visíveis durante a execução. Isso favorece registros mais consistentes, mantém o vínculo entre item, inspetor e resultado e facilita a recuperação do histórico.</p><div className="project-checks"><span><Icon name="check" size={18}/>Sequência de inspeção orientada</span><span><Icon name="check" size={18}/>Critérios e limites apresentados na tela</span><span><Icon name="check" size={18}/>Registro associado ao item inspecionado</span></div></div></div>
    </AccordionSection>

    <AccordionSection number="05" title="Informação organizada para a qualidade">
      <div className="project-section-copy"><p>A proposta concentra os elementos essenciais da inspeção sem declarar resultados de produção ainda não medidos.</p></div>
      <div className="project-metrics"><article><strong>01</strong><span>fluxo guiado</span><p>Etapas visíveis do início à conclusão.</p></article><article><strong>✓</strong><span>critérios estruturados</span><p>Referências e campos apresentados de forma consistente.</p></article><article><strong>↺</strong><span>histórico consultável</span><p>Registros organizados para futuras verificações.</p></article></div>
    </AccordionSection>

    <AccordionSection number="06" title="Antes e depois proposto">
      <div className="project-section-copy"><p>Comparação conceitual entre a rotina baseada em registros dispersos e a estrutura digital projetada.</p></div>
      <div className="project-comparison"><article className="before"><header><div><strong>Antes</strong><p>Processo apoiado em registros manuais e separados.</p></div><Icon name="warning"/></header><ul>{before.map(item => <li key={item}><Icon name="file" size={16}/><span>{item}</span></li>)}</ul></article><article className="after"><header><div><strong>Depois proposto</strong><p>Fluxo guiado e informações centralizadas.</p></div><Icon name="check"/></header><ul>{after.map(([step, detail]) => <li key={step}><Icon name="clipboard" size={16}/><span>{step}</span><small>{detail}</small></li>)}</ul></article></div>
    </AccordionSection>

    <AccordionSection number="07" title="Confidencialidade na apresentação">
      <div className="project-security"><Icon name="shield" size={34}/><div><p>As telas do portfólio utilizam exclusivamente dados fictícios. Códigos de peças, nomes, números de série, registros e especificações foram criados apenas para demonstrar a lógica da solução, sem expor informações de empresas ou produtos reais.</p><div className="project-checks"><span><Icon name="check" size={18}/>Identificadores fictícios</span><span><Icon name="check" size={18}/>Especificações demonstrativas</span><span><Icon name="check" size={18}/>Nenhum dado produtivo real</span></div></div></div>
    </AccordionSection>

    <AccordionSection number="08" title="Ferramentas e competências">
      <div className="project-section-copy"><p>O projeto conecta conhecimento de processos industriais, qualidade, documentação e organização de dados.</p></div>
      <div className="project-skills-grid"><article><h4>Ferramentas e métodos</h4><div>{technologies.map(item => <span key={item}>{item}</span>)}</div></article><article><h4>Competências demonstradas</h4><div>{skills.map(item => <span key={item}>{item}</span>)}</div></article></div>
    </AccordionSection>

    <section className="project-section project-value"><Icon name="award" size={42}/><div><span className="project-eyebrow">Valor profissional</span><h3>Qualidade, processos e tecnologia aplicados ao mesmo problema.</h3><p>Este projeto demonstra minha capacidade de identificar uma oportunidade de melhoria em uma rotina industrial e transformá-la em um fluxo digital claro, organizado e rastreável. A proposta une visão de processo, cuidado com a informação e foco na experiência de quem executa a atividade — competências que posso aplicar em equipes de qualidade, processos, operações ou tecnologia, em oportunidades CLT ou PJ.</p></div></section>
  </>;
}

function CalibrationCaseStudy() {
  const before = ["Planilha extensa", "Datas conferidas manualmente", "Certificados em locais separados", "Status sem visão consolidada"];
  const after = [["Instrumentos", "Cadastro centralizado"], ["Calendário", "Prazos visíveis"], ["Documentos", "Certificados vinculados"], ["Histórico", "Registros rastreáveis"]];
  const technologies = ["Figma", "Wireframes", "Fluxos de processo", "Dados estruturados"];
  const skills = ["Gestão da qualidade", "Controle documental", "Rastreabilidade", "Mapeamento de processos", "Prevenção de riscos", "UX administrativa"];

  return <>
    <header className="project-intro">
      <span className="project-eyebrow">Controle documental e qualidade</span>
      <h2>Controle de Calibração</h2>
      <p>Solução projetada para centralizar o controle de instrumentos de medição, acompanhar prazos de calibração e tornar as informações mais organizadas, rastreáveis e fáceis de consultar.</p>
      <div className="project-meta"><span><Icon name="award" size={17}/>Projeto conceitual</span><span><Icon name="target" size={17}/>Gestão da qualidade</span><span><Icon name="desktop" size={17}/>Interface web</span></div>
    </header>

    <ProjectImageCompare
      before={{ src: "/project-media/calibracao-antes.png", alt: "Planilha de controle de calibração com status vencido, atenção e ok misturados" }}
      after={{ src: "/project-media/calibracao-depois.png", alt: "Dashboard do sistema de controle de calibração com indicadores e categorias de instrumentos" }}
    />

    <div className="project-summary-grid">
      <SummaryCard icon="warning" title="Problema">Planilhas extensas e registros separados dificultam acompanhar vencimentos, documentos e o histórico dos instrumentos.</SummaryCard>
      <SummaryCard icon="gear" title="Solução projetada">Painel centralizado para cadastrar instrumentos, visualizar prazos, atualizar status e manter os registros organizados.</SummaryCard>
      <SummaryCard icon="target" title="Objetivo">Favorecer o controle das calibrações e reduzir o risco de perda de prazos ou informações importantes para a qualidade.</SummaryCard>
    </div>

    <AccordionSection number="01" title="O contexto de controle" defaultOpen sectionClassName="project-challenge">
      <div><p>Instrumentos de medição sujeitos a calibração periódica precisam ser acompanhados durante todo o seu ciclo de uso. A equipe deve saber onde cada instrumento está, quando foi calibrado, até quando o certificado é válido e qual ação precisa ser tomada quando o vencimento se aproxima.</p><p>Quando essas informações estão concentradas em planilhas extensas ou distribuídas entre diferentes registros, a conferência depende de filtros, cores e verificações manuais. Isso dificulta a visão do conjunto e aumenta o risco de um prazo ou documento não receber a atenção necessária.</p></div>
      <aside className="project-scenario"><h4>Cenário analisado</h4><div><Icon name="document"/><p><strong>Dados concentrados em planilhas</strong>Muitas colunas e informações precisam ser conferidas manualmente.</p></div><div><Icon name="warning"/><p><strong>Prazos críticos</strong>Instrumentos próximos do vencimento exigem identificação rápida.</p></div><div><Icon name="file"/><p><strong>Documentação associada</strong>Certificados e históricos precisam permanecer vinculados ao cadastro.</p></div></aside>
    </AccordionSection>

    <AccordionSection number="02" title="A solução projetada" sectionClassName="project-solution">
      <div className="project-section-copy"><p>Estruturei uma proposta de sistema que reúne os instrumentos e seus dados de calibração em uma única interface. O painel organiza categorias, destaca vencimentos, apresenta a distribuição dos status e permite acessar cadastros, calendário, calibrações, relatórios e documentos a partir do mesmo fluxo.</p></div>
      <div className="project-feature-grid"><FeatureCard icon="target" title="Cadastro centralizado">Organiza identificação, categoria, localização, responsável e periodicidade do instrumento.</FeatureCard><FeatureCard icon="warning" title="Acompanhamento de prazos">Destaca calibrações vencidas e próximas do vencimento para orientar as prioridades.</FeatureCard><FeatureCard icon="file" title="Controle documental">Mantém certificados e informações de calibração associados ao instrumento.</FeatureCard><FeatureCard icon="chart" title="Visão consolidada">Apresenta status e próximos eventos em um painel de consulta rápida.</FeatureCard></div>
    </AccordionSection>

    <AccordionSection number="03" title="Como funciona">
      <div className="project-section-copy"><p>O fluxo acompanha o instrumento desde o cadastro inicial até as próximas calibrações, preservando a continuidade dos registros.</p></div>
      <ol className="project-process"><li><span>01</span><h4>Cadastrar</h4><p>Registra o instrumento e as informações necessárias ao controle.</p></li><li><span>02</span><h4>Acompanhar</h4><p>Calcula a validade e apresenta a proximidade do vencimento.</p></li><li><span>03</span><h4>Atualizar</h4><p>Registra nova calibração, certificado e situação do instrumento.</p></li><li><span>04</span><h4>Consultar</h4><p>Mantém o histórico disponível para buscas e conferências.</p></li></ol>
    </AccordionSection>

    <AccordionSection number="04" title="Prazos transformados em prioridades">
      <div className="project-security"><Icon name="shield" size={34}/><div><p>O painel foi pensado para não depender apenas da leitura de datas. A situação de cada instrumento é apresentada por status, permitindo diferenciar o que está no prazo, o que exige atenção e o que já está vencido.</p><div className="project-checks"><span><Icon name="check" size={18}/>Visão dos próximos vencimentos</span><span><Icon name="check" size={18}/>Status atualizado por instrumento</span><span><Icon name="check" size={18}/>Calendário para planejamento das calibrações</span></div></div></div>
    </AccordionSection>

    <AccordionSection number="05" title="Controle estruturado para a qualidade">
      <div className="project-section-copy"><p>A apresentação demonstra capacidades da solução, sem atribuir indicadores de desempenho ainda não medidos.</p></div>
      <div className="project-metrics"><article><strong>✓</strong><span>prazos visíveis</span><p>Datas e prioridades reunidas no mesmo painel.</p></article><article><strong>↺</strong><span>histórico preservado</span><p>Atualizações mantidas para futuras consultas.</p></article><article><strong>◎</strong><span>status centralizado</span><p>Situação dos instrumentos apresentada de forma consolidada.</p></article></div>
    </AccordionSection>

    <AccordionSection number="06" title="Antes e depois proposto">
      <div className="project-section-copy"><p>Comparação conceitual entre o acompanhamento manual em planilha e a estrutura centralizada do sistema.</p></div>
      <div className="project-comparison"><article className="before"><header><div><strong>Antes</strong><p>Controle distribuído e dependente de conferências manuais.</p></div><Icon name="warning"/></header><ul>{before.map(item => <li key={item}><Icon name="file" size={16}/><span>{item}</span></li>)}</ul></article><article className="after"><header><div><strong>Depois proposto</strong><p>Informações organizadas por função e prioridade.</p></div><Icon name="check"/></header><ul>{after.map(([area, detail]) => <li key={area}><Icon name="target" size={16}/><span>{area}</span><small>{detail}</small></li>)}</ul></article></div>
    </AccordionSection>

    <AccordionSection number="07" title="Exemplo de rastreabilidade">
      <div className="project-section-copy"><p>Todos os identificadores abaixo são fictícios e servem somente para demonstrar a estrutura das informações.</p></div>
      <div className="project-comparison"><article><header><div><strong>Instrumento</strong><p>Cadastro e localização</p></div><Icon name="target"/></header><ul><li><Icon name="clipboard" size={16}/><span>CAL-FIC-018</span><small>Paquímetro digital</small></li><li><Icon name="file" size={16}/><span>Patrimônio PAT-FIC-204</span><small>Laboratório A</small></li></ul></article><article className="after"><header><div><strong>Calibração</strong><p>Status e documentação</p></div><Icon name="check"/></header><ul><li><Icon name="document" size={16}/><span>Certificado CERT-FIC-087</span><small>Documento demonstrativo</small></li><li><Icon name="chart" size={16}/><span>A vencer</span><small>Prioridade sinalizada</small></li></ul></article></div>
    </AccordionSection>

    <AccordionSection number="08" title="Confidencialidade na apresentação">
      <div className="project-security"><Icon name="shield" size={34}/><div><p>Os códigos, patrimônios, certificados, fabricantes, datas, responsáveis e locais apresentados no portfólio são fictícios. A demonstração preserva integralmente dados de empresas e instrumentos reais.</p><div className="project-checks"><span><Icon name="check" size={18}/>Cadastros fictícios</span><span><Icon name="check" size={18}/>Datas e documentos demonstrativos</span><span><Icon name="check" size={18}/>Nenhuma informação empresarial real</span></div></div></div>
    </AccordionSection>

    <AccordionSection number="09" title="Ferramentas e competências">
      <div className="project-section-copy"><p>O projeto conecta gestão de informações, controle documental, rastreabilidade e prevenção de falhas operacionais.</p></div>
      <div className="project-skills-grid"><article><h4>Ferramentas e métodos</h4><div>{technologies.map(item => <span key={item}>{item}</span>)}</div></article><article><h4>Competências demonstradas</h4><div>{skills.map(item => <span key={item}>{item}</span>)}</div></article></div>
    </AccordionSection>

    <section className="project-section project-value"><Icon name="award" size={42}/><div><span className="project-eyebrow">Valor profissional</span><h3>Visibilidade e rastreabilidade para apoiar decisões de qualidade.</h3><p>Este projeto demonstra minha capacidade de analisar um controle administrativo crítico, organizar requisitos e transformar informações dispersas em um fluxo de acompanhamento mais claro. A proposta combina visão de processos, qualidade de dados e atenção a prazos — competências aplicáveis a equipes de qualidade, processos, operações ou administração, em oportunidades CLT ou PJ.</p></div></section>
  </>;
}

function DashboardCaseStudy() {
  const before = ["Planilhas e controles separados", "Gráficos montados manualmente", "Indicadores sem padrão", "Análises difíceis de atualizar"];
  const after = [["Importação", "XLSX, XLS ou CSV"], ["Mapeamento", "Campos identificados"], ["Indicadores", "Visão centralizada"], ["Filtros", "Análise por período e categoria"]];
  const technologies = ["Planilhas XLSX, XLS e CSV", "Mapeamento de colunas", "Visualização interativa", "Dados estruturados"];
  const skills = ["Análise de dados", "Definição de indicadores", "Tratamento de dados", "Visualização da informação", "Visão de processos", "Apoio à decisão"];

  return <>
    <header className="project-intro">
      <span className="project-eyebrow">Análise de dados e apoio à gestão</span>
      <h2>Dashboard Operacional</h2>
      <p>Solução desenvolvida para receber dados de planilhas, organizar os campos e transformá-los em indicadores visuais que facilitam o acompanhamento da operação e a identificação de desvios.</p>
      <div className="project-meta"><span><Icon name="award" size={17}/>Projeto autoral</span><span><Icon name="chart" size={17}/>Análise operacional</span><span><Icon name="desktop" size={17}/>Aplicação web</span></div>
    </header>

    <ProjectVideo src="/project-videos/dashboard.mp4" label="Vídeo de apresentação do Dashboard Operacional" />

    <div className="project-summary-grid">
      <SummaryCard icon="warning" title="Problema">Dados distribuídos em planilhas e controles separados dificultam acompanhar indicadores e compreender o cenário operacional.</SummaryCard>
      <SummaryCard icon="gear" title="Solução">Fluxo que importa a planilha, identifica sua categoria, confirma o mapeamento dos campos e gera um painel visual.</SummaryCard>
      <SummaryCard icon="target" title="Objetivo">Centralizar as informações e tornar comparações, padrões e desvios mais claros para apoiar a análise e a decisão.</SummaryCard>
    </div>

    <AccordionSection number="01" title="O desafio dos dados dispersos" defaultOpen sectionClassName="project-challenge">
      <div><p>Muitas operações possuem os dados necessários, mas eles estão armazenados em planilhas criadas para registros do dia a dia, não para análise. Colunas, totais, observações e gráficos acabam misturados, enquanto diferentes versões do arquivo tornam a atualização e a comparação menos confiáveis.</p><p>O desafio do projeto foi transformar essa base em uma sequência compreensível: reconhecer o contexto dos dados, relacionar as colunas aos indicadores necessários e apresentar somente as informações úteis para o acompanhamento.</p></div>
      <aside className="project-scenario"><h4>Cenário inicial</h4><div><Icon name="document"/><p><strong>Dados fragmentados</strong>Informações operacionais distribuídas em controles distintos.</p></div><div><Icon name="search"/><p><strong>Análise manual</strong>Filtros, fórmulas e gráficos precisam ser refeitos a cada atualização.</p></div><div><Icon name="warning"/><p><strong>Leitura pouco clara</strong>Padrões e desvios ficam escondidos entre muitas linhas e colunas.</p></div></aside>
    </AccordionSection>

    <AccordionSection number="02" title="A solução desenvolvida" sectionClassName="project-solution">
      <div className="project-section-copy"><p>Desenvolvi uma aplicação web que conduz o usuário desde o envio da planilha até a geração do dashboard. A ferramenta analisa os nomes das colunas, sugere a categoria mais compatível, apresenta o mapeamento para conferência e utiliza os campos confirmados para estruturar indicadores e visualizações.</p></div>
      <div className="project-feature-grid"><FeatureCard icon="document" title="Importação de planilhas">Recebe arquivos nos formatos XLSX, XLS ou CSV em um fluxo simples.</FeatureCard><FeatureCard icon="target" title="Categoria sugerida">Compara os campos encontrados e indica o contexto mais provável para os dados.</FeatureCard><FeatureCard icon="clipboard" title="Mapeamento confirmado">Permite revisar quais colunas representam cada informação antes da análise.</FeatureCard><FeatureCard icon="chart" title="Dashboard interativo">Organiza indicadores, comparações e filtros em uma visão centralizada.</FeatureCard></div>
    </AccordionSection>

    <AccordionSection number="03" title="Como funciona">
      <div className="project-section-copy"><p>O fluxo torna visível o caminho entre a fonte de dados e o resultado apresentado no painel.</p></div>
      <ol className="project-process"><li><span>01</span><h4>Enviar</h4><p>O usuário seleciona a planilha que contém os dados.</p></li><li><span>02</span><h4>Classificar</h4><p>A aplicação sugere a categoria com base nas colunas encontradas.</p></li><li><span>03</span><h4>Mapear</h4><p>O usuário revisa e confirma a relação entre os campos.</p></li><li><span>04</span><h4>Analisar</h4><p>O painel apresenta indicadores, gráficos, filtros e dados detalhados.</p></li></ol>
    </AccordionSection>

    <AccordionSection number="04" title="Validação antes da visualização">
      <div className="project-security"><Icon name="shield" size={34}/><div><p>O projeto não transforma qualquer coluna em gráfico automaticamente. Antes de gerar o dashboard, o usuário confere os campos obrigatórios e pode ajustar o mapeamento sugerido. Essa etapa mantém as regras da análise visíveis e reduz o risco de interpretar uma coluna incorreta.</p><div className="project-checks"><span><Icon name="check" size={18}/>Campos obrigatórios identificados</span><span><Icon name="check" size={18}/>Sugestões revisáveis pelo usuário</span><span><Icon name="check" size={18}/>Mapeamento confirmado antes do painel</span></div></div></div>
    </AccordionSection>

    <AccordionSection number="05" title="Informação organizada para análise">
      <div className="project-section-copy"><p>O dashboard financeiro demonstrativo reúne três perspectivas complementares, sem atribuir ganhos operacionais ainda não medidos.</p></div>
      <div className="project-metrics"><article><strong>◎</strong><span>indicadores principais</span><p>Receita, despesa e saldo apresentados em destaque.</p></article><article><strong>↗</strong><span>evolução temporal</span><p>Comparação dos resultados ao longo dos períodos.</p></article><article><strong>≡</strong><span>composição dos dados</span><p>Distribuição por centro de custo e tipo de conta.</p></article></div>
    </AccordionSection>

    <AccordionSection number="06" title="Recursos para investigação">
      <div className="project-feature-grid"><FeatureCard icon="search" title="Filtros por período">Permitem analisar janelas de tempo predefinidas ou personalizadas.</FeatureCard><FeatureCard icon="target" title="Filtros por categoria">Refinam a leitura por centro de custo e tipo de conta.</FeatureCard><FeatureCard icon="eye" title="Dados detalhados">Mantêm as linhas que deram origem aos indicadores disponíveis para conferência.</FeatureCard><FeatureCard icon="report" title="Saídas para compartilhamento">A interface oferece opções de relatório e exportação dos dados analisados.</FeatureCard></div>
    </AccordionSection>

    <AccordionSection number="07" title="Antes e depois">
      <div className="project-section-copy"><p>Comparação entre uma base criada para registro manual e uma visão preparada para acompanhamento operacional.</p></div>
      <div className="project-comparison"><article className="before"><header><div><strong>Antes</strong><p>Dados misturados e análise dependente de trabalho manual.</p></div><Icon name="warning"/></header><ul>{before.map(item => <li key={item}><Icon name="file" size={16}/><span>{item}</span></li>)}</ul></article><article className="after"><header><div><strong>Depois</strong><p>Fluxo estruturado da importação até a análise.</p></div><Icon name="check"/></header><ul>{after.map(([stage, detail]) => <li key={stage}><Icon name="chart" size={16}/><span>{stage}</span><small>{detail}</small></li>)}</ul></article></div>
    </AccordionSection>

    <AccordionSection number="08" title="Dados protegidos na apresentação">
      <div className="project-security"><Icon name="shield" size={34}/><div><p>Os valores, períodos, centros de custo, categorias e registros apresentados no portfólio são fictícios ou demonstrativos. Nenhuma informação confidencial de empresas reais é utilizada para explicar o funcionamento da solução.</p><div className="project-checks"><span><Icon name="check" size={18}/>Valores demonstrativos</span><span><Icon name="check" size={18}/>Categorias genéricas</span><span><Icon name="check" size={18}/>Nenhuma base empresarial real</span></div></div></div>
    </AccordionSection>

    <AccordionSection number="09" title="Tecnologias e competências">
      <div className="project-section-copy"><p>O projeto combina tratamento de dados, definição de regras e comunicação visual voltada para o acompanhamento da operação.</p></div>
      <div className="project-skills-grid"><article><h4>Tecnologias e recursos</h4><div>{technologies.map(item => <span key={item}>{item}</span>)}</div></article><article><h4>Competências demonstradas</h4><div>{skills.map(item => <span key={item}>{item}</span>)}</div></article></div>
    </AccordionSection>

    <section className="project-section project-value"><Icon name="award" size={42}/><div><span className="project-eyebrow">Valor profissional</span><h3>Dados brutos transformados em uma visão útil para a operação.</h3><p>Este projeto demonstra minha capacidade de compreender uma fonte de dados, estruturar campos e indicadores e apresentar informações de forma clara para quem precisa acompanhar resultados. A solução conecta análise de dados, processos administrativos e apoio à decisão — competências relevantes para equipes de dados, operações, processos ou administração, em oportunidades CLT ou PJ.</p></div></section>
  </>;
}

const caseStudies: Record<ProjectSlug, () => React.ReactNode> = {
  "prumo": PrumoCaseStudy,
  "organizador-de-arquivos": OrganizerCaseStudy,
  "procfacil": ProcFacilCaseStudy,
  "sistema-inspecao-digital": InspectionCaseStudy,
  "controle-calibracao": CalibrationCaseStudy,
  "dashboard-operacional": DashboardCaseStudy,
};

function NavHeader() {
  return <header className="site-navbar"><div className="site-navbar-inner"><a className="site-brand" href="/#inicio" aria-label="Cleber Batista — Página inicial">CLEBER BATISTA</a><nav className="site-nav-links" aria-label="Navegação principal"><a className="site-nav-link" href="/#inicio">Página Inicial</a><a className="site-nav-link" href="/sobre-mim/">Sobre Mim</a><a className="site-nav-link active" href="/projetos/" aria-current="page">Projetos</a><a className="site-nav-link" href="/contatos/">Contatos</a></nav><div className="navbar-actions"><a className="navbar-cv-button" href="/curriculo-cleber-batista.pdf" download>Baixar Currículo</a></div></div></header>;
}

function ProjectsSidebar({ activeSlug }: { activeSlug?: ProjectSlug }) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    navRef.current?.querySelector<HTMLElement>(".active")?.scrollIntoView({ behavior: "auto", inline: "center", block: "nearest" });
  }, [activeSlug]);

  return <nav ref={navRef} className="projects-sidebar" aria-label="Lista de projetos"><strong>Projetos</strong>{projects.map(project => <a key={project.slug} href={`/projetos/${project.slug}/`} aria-current={project.slug === activeSlug ? "page" : undefined} className={project.slug === activeSlug ? "project-nav-item active" : "project-nav-item"}><Icon name={project.icon}/><span>{project.label}</span></a>)}</nav>;
}

/** Renders the full case study for a given project, at its own dedicated URL. */
export default function ProjectsShell({ activeSlug }: { activeSlug: ProjectSlug }) {
  const CaseStudy = caseStudies[activeSlug];

  return <div className="about-page projects-page" id="projetos">
    <NavHeader/>
    <main className="projects-container">
      <header className="projects-heading"><span>Portfólio profissional</span><h1>Projetos aplicados</h1><p>Soluções desenvolvidas para organizar processos, reduzir tarefas manuais e transformar necessidades operacionais em ferramentas práticas.</p></header>
      <div className="projects-layout">
        <ProjectsSidebar activeSlug={activeSlug}/>
        <section className="project-detail-card" aria-live="polite"><div className="content-transition"><CaseStudy/></div></section>
      </div>
    </main>
  </div>;
}

/** Index/hub page: links out to each dedicated project URL, no duplicated case-study content. */
export function ProjectsIndex() {
  return <div className="about-page projects-page" id="projetos">
    <NavHeader/>
    <main className="projects-container">
      <header className="projects-heading"><span>Portfólio profissional</span><h1>Projetos aplicados</h1><p>Soluções desenvolvidas para organizar processos, reduzir tarefas manuais e transformar necessidades operacionais em ferramentas práticas.</p></header>
      <div className="projects-layout">
        <ProjectsSidebar/>
        <section className="project-detail-card" aria-live="polite">
          <div className="content-transition">
            <header className="project-intro">
              <span className="project-eyebrow">Escolha um projeto</span>
              <h2>Estudos de caso aplicados</h2>
              <p>Cada projeto abaixo tem sua própria página, com o problema, a solução, meu papel e o valor gerado.</p>
            </header>
            <div className="project-summary-grid">
              {projects.map(project => <a key={project.slug} href={`/projetos/${project.slug}/`} className="project-summary-card"><span><Icon name={project.icon}/></span><div><h3>{project.label}</h3><p>{project.summary}</p></div></a>)}
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>;
}
