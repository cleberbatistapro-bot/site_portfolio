import type { Metadata } from "next";
import { buildMetadata } from "../seo";

export const metadata: Metadata = buildMetadata({
  title: "Contato profissional | Cleber Batista",
  description: "Canais de contato profissional de Cleber Batista para oportunidades remotas em áreas administrativas, processos, operações, dados e automação.",
  path: "/contatos/",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
