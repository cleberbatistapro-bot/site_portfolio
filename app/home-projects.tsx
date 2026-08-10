"use client";

import { useEffect, useRef, useState } from "react";

type ProjectId = "organizador" | "procfacil" | "inspecao" | "calibracao" | "dashboard";
type ProjectKind = "files" | "sheets" | "checklist" | "calibration" | "analytics";

type HomeProject = {
  id: ProjectId;
  kind: ProjectKind;
  label: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  tags: string[];
  sourceTitle: string;
  resultTitle: string;
  sourceItems: string[];
  resultItems: string[];
  signals: string[];
};

const homeProjects: HomeProject[] = [
  {
    id: "organizador",
    kind: "files",
    label: "Organizador de Arquivos",
    category: "Automação de processos",
    summary: "Uma solução para transformar arquivos dispersos em uma estrutura clara, padronizada e fácil de consultar.",
    problem: "Arquivos acumulados, nomes inconsistentes e dificuldade para localizar informações.",
    solution: "Organização automática por categorias, aplicação de regras e registro das ações realizadas.",
    tags: ["Python", "Processos", "Organização de dados"],
    sourceTitle: "Arquivos não organizados",
    resultTitle: "Estrutura organizada",
    sourceItems: ["relatório.pdf", "dados.xlsx", "imagem.png", "contrato.docx"],
    resultItems: ["Administrativo", "Planilhas", "Imagens", "Documentos"],
    signals: ["Arquivos identificados", "Categorias aplicadas", "Registro concluído"],
  },
  {
    id: "procfacil",
    kind: "sheets",
    label: "ProcFácil",
    category: "Consolidação e qualidade de dados",
    summary: "Planilhas relacionadas reunidas em uma base única, com regras visíveis e pendências preparadas para conferência.",
    problem: "Informações distribuídas em arquivos diferentes exigem buscas, fórmulas e validações manuais.",
    solution: "Cruzamento guiado de planilhas, escolha das chaves e geração de uma base consolidada.",
    tags: ["Python", "Excel", "Qualidade de dados"],
    sourceTitle: "Planilhas selecionadas",
    resultTitle: "Base consolidada",
    sourceItems: ["clientes.xlsx", "pedidos.xlsx", "pagamentos.xlsx", "cadastros.csv"],
    resultItems: ["Dados unificados", "Campos relacionados", "Pendências", "Arquivo final"],
    signals: ["Fontes reconhecidas", "Chaves relacionadas", "Prévia disponível"],
  },
  {
    id: "inspecao",
    kind: "checklist",
    label: "Sistema de Inspeção",
    category: "Qualidade e rastreabilidade",
    summary: "Um fluxo digital para orientar inspeções, padronizar critérios e manter os registros de qualidade organizados.",
    problem: "Registros dispersos e conferências manuais dificultam a padronização e a consulta do histórico.",
    solution: "Inspeção estruturada por etapas, registro digital dos critérios e identificação de não conformidades.",
    tags: ["Qualidade", "Processos", "Rastreabilidade"],
    sourceTitle: "Critérios de inspeção",
    resultTitle: "Registro da inspeção",
    sourceItems: ["Identificação", "Conectores", "Fixação", "Acabamento"],
    resultItems: ["Conforme", "Conforme", "Revisar", "Conforme"],
    signals: ["Item identificado", "Critérios registrados", "Histórico preservado"],
  },
  {
    id: "calibracao",
    kind: "calibration",
    label: "Controle de Calibração",
    category: "Controle documental",
    summary: "Instrumentos, prazos e certificados centralizados para favorecer o acompanhamento e a rastreabilidade.",
    problem: "Controles separados aumentam a dificuldade para acompanhar validades, status e documentos.",
    solution: "Cadastro centralizado, sinalização de vencimentos e manutenção do histórico de calibração.",
    tags: ["Qualidade", "Prazos", "Documentação"],
    sourceTitle: "Instrumentos cadastrados",
    resultTitle: "Situação da calibração",
    sourceItems: ["Paquímetro", "Micrômetro", "Torquímetro", "Multímetro"],
    resultItems: ["Em dia", "Próximo", "Em dia", "Programar"],
    signals: ["Prazos monitorados", "Status atualizado", "Histórico acessível"],
  },
  {
    id: "dashboard",
    kind: "analytics",
    label: "Dashboard Operacional",
    category: "Análise de dados",
    summary: "Dados administrativos transformados em indicadores visuais para facilitar o acompanhamento da operação.",
    problem: "Planilhas e controles separados tornam padrões, comparações e desvios menos visíveis.",
    solution: "Importação, mapeamento e organização dos dados em uma visão operacional centralizada.",
    tags: ["Dados", "Indicadores", "Visualização"],
    sourceTitle: "Dados operacionais",
    resultTitle: "Indicadores organizados",
    sourceItems: ["Período", "Categoria", "Valor", "Status"],
    resultItems: ["Visão geral", "Evolução", "Distribuição", "Detalhamento"],
    signals: ["Campos mapeados", "Indicadores gerados", "Filtros disponíveis"],
  },
];

const iconPaths: Record<ProjectKind, React.ReactNode> = {
  files: <path d="M3 6h7l2 2h9v11H3Z"/>,
  sheets: <><path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v5h5M9 12h6M9 16h6"/></>,
  checklist: <><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M9 10l2 2 4-4M9 16h6"/></>,
  calibration: <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></>,
  analytics: <path d="M4 20V10M10 20V5M16 20v-8M22 20V2"/>,
};

function ProjectIcon({ kind, size = 21 }: { kind: ProjectKind; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{iconPaths[kind]}</svg>;
}

export default function HomeProjects() {
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [cycle, setCycle] = useState(0);
  const swapTimer = useRef<ReturnType<typeof window.setTimeout> | null>(null);

  function changeProject(nextIndex: number) {
    setCycle(value => value + 1);
    if (nextIndex === selected) return;
    if (swapTimer.current !== null) window.clearTimeout(swapTimer.current);
    setSelected(nextIndex);
    setIsLeaving(true);
    swapTimer.current = window.setTimeout(() => {
      setActive(nextIndex);
      setIsLeaving(false);
      swapTimer.current = null;
    }, 260);
  }

  useEffect(() => {
    const timer = window.setTimeout(() => changeProject((selected + 1) % homeProjects.length), 5000);
    return () => window.clearTimeout(timer);
  }, [selected, cycle]);

  useEffect(() => () => {
    if (swapTimer.current !== null) window.clearTimeout(swapTimer.current);
  }, []);

  const project = homeProjects[active];

  return <section className="home-projects-section" aria-labelledby="home-projects-title">
    <div className="home-projects-shell">
      <div className="home-projects-layout">
        <div className="home-projects-intro reveal">
          <header className="home-projects-heading">
            <span className="home-projects-badge"><ProjectIcon kind="files" size={14}/>Projetos aplicados</span>
            <h2 id="home-projects-title">Soluções criadas<br/>para <em>organizar<br/>processos</em> e informações.</h2>
            <p>Projetos práticos que conectam processos, dados e tecnologia a desafios reais da rotina operacional.</p>
          </header>
          <nav className="home-projects-menu" aria-label="Projetos em destaque" role="tablist">
            {homeProjects.map((item, index) => <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected === index}
              className={selected === index ? "active" : ""}
              onClick={() => changeProject(index)}
            ><ProjectIcon kind={item.kind}/><span>{item.label}</span></button>)}
          </nav>
        </div>

        <article className="home-project-card reveal" style={{ transitionDelay: "120ms" }} aria-live="polite">
          <div className="home-project-slide">
            <div className="home-project-media" role="img" aria-label={`Espaço reservado para a imagem do projeto ${project.label}`}>
              <div className={isLeaving ? "home-project-media-inner is-leaving" : "home-project-media-inner"}/>
            </div>
            <div className="home-project-copy">
              <div className={isLeaving ? "home-project-copy-inner is-leaving" : "home-project-copy-inner"}>
                <div className="home-project-copy-heading">
                  <span className="home-project-copy-icon"><ProjectIcon kind={project.kind} size={18}/></span>
                  <div><span className="home-project-category">{project.category}</span><h3>{project.label}</h3></div>
                </div>
                <p className="home-project-summary">{project.summary}</p>
                <div className="home-project-copy-footer">
                  <div className="home-project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <a className="home-project-detail-link" href={`/projetos/?projeto=${project.id}`}>Ver projeto detalhado <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>;
}
