import type { Metadata } from "next";
import { buildMetadata } from "../../seo";
import ProjectsShell from "../projects-shell";

export const metadata: Metadata = buildMetadata({
  title: "Controle de Calibração | Projeto de Gestão da Qualidade | Cleber Batista",
  description: "Proposta de painel para centralizar o controle de instrumentos de medição e prazos de calibração. Projeto conceitual de Cleber Batista.",
  path: "/projetos/controle-calibracao/",
});

export default function Page() {
  return <ProjectsShell activeSlug="controle-calibracao" />;
}
