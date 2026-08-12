import type { Metadata } from "next";
import { buildMetadata } from "../../seo";
import ProjectsShell from "../projects-shell";

export const metadata: Metadata = buildMetadata({
  title: "ProcFácil | Consolidação de Planilhas com Python | Cleber Batista",
  description: "Aplicação desktop em Python que cruza dados de diferentes planilhas e gera uma base consolidada pronta para conferência. Projeto autoral de Cleber Batista.",
  path: "/projetos/procfacil/",
});

export default function Page() {
  return <ProjectsShell activeSlug="procfacil" />;
}
