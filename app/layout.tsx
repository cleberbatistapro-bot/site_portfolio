import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteFooter from "./site-footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Cleber Batista | Analista Administrativo e de Processos",
  description: "Portfólio profissional de Cleber Batista: experiência administrativa, processos, dados, automação e tecnologia aplicada para operações mais eficientes.",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}<SiteFooter/></body>
    </html>
  );
}
