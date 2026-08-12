import type { Metadata } from "next";
import { buildMetadata } from "../../seo";
import ProjectsShell from "../projects-shell";

export const metadata: Metadata = buildMetadata({
  title: "Organizador de Arquivos | Projeto de Automação | Cleber Batista",
  description: "Aplicação desktop em Python que organiza arquivos administrativos por categoria, com simulação e backup antes da execução. Projeto autoral de Cleber Batista.",
  path: "/projetos/organizador-de-arquivos/",
});

export default function Page() {
  return <ProjectsShell activeSlug="organizador-de-arquivos" />;
}
