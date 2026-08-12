import type { Metadata } from "next";
import { buildMetadata } from "../seo";

export const metadata: Metadata = buildMetadata({
  title: "Sobre mim | Cleber Batista",
  description: "Conheça a trajetória profissional, a forma de trabalhar e a visão de processos e tecnologia aplicada de Cleber Batista.",
  path: "/sobre-mim/",
});

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
