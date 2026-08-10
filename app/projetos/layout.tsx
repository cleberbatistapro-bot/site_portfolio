import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos aplicados | Cleber Batista",
  description: "Projetos de Cleber Batista em automação de processos, organização administrativa, dados e tecnologia aplicada a problemas operacionais reais.",
};

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
