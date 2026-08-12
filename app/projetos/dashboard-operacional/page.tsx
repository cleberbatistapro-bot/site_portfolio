import type { Metadata } from "next";
import { buildMetadata } from "../../seo";
import ProjectsShell from "../projects-shell";

export const metadata: Metadata = buildMetadata({
  title: "Dashboard Operacional | Análise de Dados | Cleber Batista",
  description: "Aplicação web que transforma planilhas em indicadores visuais para acompanhamento operacional e apoio à decisão. Projeto autoral de Cleber Batista.",
  path: "/projetos/dashboard-operacional/",
});

export default function Page() {
  return <ProjectsShell activeSlug="dashboard-operacional" />;
}
