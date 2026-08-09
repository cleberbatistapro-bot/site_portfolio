import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mim | Cleber Batista",
  description: "Conheça a trajetória profissional, a forma de trabalhar e a visão de processos e tecnologia aplicada de Cleber Batista.",
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
