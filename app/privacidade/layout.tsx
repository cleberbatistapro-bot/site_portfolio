import type { Metadata } from "next";
import { buildMetadata } from "../seo";

export const metadata: Metadata = buildMetadata({
  title: "Política de Privacidade | Cleber Batista",
  description: "Como este site coleta e utiliza dados de navegação, quais ferramentas de análise são usadas e como exercer seus direitos conforme a LGPD.",
  path: "/privacidade/",
});

export default function PrivacyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
