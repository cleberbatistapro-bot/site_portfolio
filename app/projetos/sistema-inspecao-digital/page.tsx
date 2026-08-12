import type { Metadata } from "next";
import { buildMetadata } from "../../seo";
import ProjectsShell from "../projects-shell";

export const metadata: Metadata = buildMetadata({
  title: "Sistema de Inspeção Digital | Projeto de Qualidade | Cleber Batista",
  description: "Proposta de fluxo digital para inspeção de qualidade industrial, substituindo checklists em papel por um sistema guiado e rastreável. Projeto conceitual de Cleber Batista.",
  path: "/projetos/sistema-inspecao-digital/",
});

export default function Page() {
  return <ProjectsShell activeSlug="sistema-inspecao-digital" />;
}
