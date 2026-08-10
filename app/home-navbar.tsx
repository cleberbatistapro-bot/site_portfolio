"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";

export default function HomeNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateNavbar = () => setScrolled(window.scrollY > 24);
    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  return <header className={`site-navbar home-navbar${scrolled ? " is-scrolled" : ""}`}>
    <div className="site-navbar-inner">
      <a className="site-brand" href="#inicio" aria-label="Cleber Batista — Página inicial">CLEBER BATISTA</a>
      <nav className="site-nav-links" aria-label="Navegação principal">
        <a className="site-nav-link active" href="#inicio" aria-current="page">Página Inicial</a>
        <a className="site-nav-link" href="/sobre-mim/">Sobre Mim</a>
        <a className="site-nav-link" href="/projetos/">Projetos</a>
        <a className="site-nav-link" href="/contatos/">Contatos</a>
      </nav>
      <div className="navbar-actions"><button className="navbar-cv-button" type="button">Baixar Currículo</button><ThemeToggle/></div>
    </div>
  </header>;
}
