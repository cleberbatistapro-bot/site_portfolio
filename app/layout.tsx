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
    <html lang="pt-BR" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{__html:`try{const s=localStorage.getItem("cleber-theme");const t=s==="light"||s==="dark"?s:(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t}catch(e){document.documentElement.dataset.theme="dark"}`}}/></head>
      <body className={inter.className}>{children}<SiteFooter/></body>
    </html>
  );
}
