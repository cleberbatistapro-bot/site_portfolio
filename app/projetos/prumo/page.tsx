import type { Metadata } from "next";
import { buildMetadata } from "../../seo";
import ProjectsShell from "../projects-shell";

export const metadata: Metadata = buildMetadata({
  title: "Prumo | Sistema de Gestão de Equipe Remota | Cleber Batista",
  description: "Sistema web completo, em produção, para tornar o trabalho remoto visível pelo processo — não pela vigilância. Arquitetura de plataformas-irmãs, RBAC no servidor e auditoria imutável. Projeto autoral de Cleber Batista.",
  path: "/projetos/prumo/",
});

export default function Page() {
  return <ProjectsShell activeSlug="prumo" />;
}
