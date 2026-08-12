import type { Metadata } from "next";
import { buildMetadata } from "../seo";

export const metadata: Metadata = buildMetadata({
  title: "Projetos de Automação e Processos | Cleber Batista",
  description: "Projetos de Cleber Batista em automação de processos, organização administrativa, dados e tecnologia aplicada a problemas operacionais reais.",
  path: "/projetos/",
});

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
