"use client";

import { useEffect, useState } from "react";

const slides: { src: string; alt: string }[] = [
  { src: "/project-media/prumo-trilha-producao.png", alt: "Trilha de Produção do Prumo, com o gargalo destacado em vermelho na etapa Revisão" },
  { src: "/project-media/prumo-login.png", alt: "Tela de login do Prumo, com autenticação real" },
  { src: "/project-media/prumo-modal-tarefa.png", alt: "Modal da corrente da tarefa, mostrando quem está com ela agora" },
  { src: "/project-media/prumo-desempenho.png", alt: "Desempenho Individual do Prumo, indicadores comparados só com a própria média" },
  { src: "/project-media/prumo-desempenho-graficos.png", alt: "Gráficos de desempenho individual ao longo de 6 meses" },
];

function HomePrumoSlides() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex(i => (i + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, []);

  return <div className="home-prumo-slides" role="group" aria-label="Capturas de tela do Prumo em produção">
    <div className="home-prumo-slides-chrome" aria-hidden="true"><span/><span/><span/></div>
    <div className="home-prumo-slides-stage">
      {slides.map((slide, i) => <img
        key={slide.src}
        src={slide.src}
        alt={i === index ? slide.alt : ""}
        aria-hidden={i === index ? undefined : true}
        className={i === index ? "is-active" : ""}
        loading={i === 0 ? "eager" : "lazy"}
      />)}
    </div>
    <div className="home-prumo-slides-dots">
      {slides.map((slide, i) => <button
        key={slide.src}
        type="button"
        className={i === index ? "is-active" : ""}
        aria-label={`Ver captura ${i + 1} de ${slides.length}`}
        aria-current={i === index}
        onClick={() => setIndex(i)}
      />)}
    </div>
  </div>;
}

export default function HomePrumoFeature() {
  return <section className="home-prumo-section reveal" aria-labelledby="home-prumo-title">
    <div className="home-prumo-shell">
      <div className="home-prumo-copy">
        <div className="home-prumo-copy-top">
          <span className="home-prumo-badge"><span className="home-prumo-dot" aria-hidden="true" />Projeto em destaque · no ar agora</span>
          <h2 id="home-prumo-title">Prumo: o trabalho remoto <em>visível pelo processo</em> — não pela vigilância.</h2>
          <p>Um sistema completo, em produção, que arquitetei do zero: linha de produção com gargalo em tempo real, desempenho individual sem ranking entre colegas, e uma arquitetura de plataformas-irmãs isoladas — não é mockup, é código rodando de verdade.</p>
        </div>
        <div className="home-prumo-actions">
          <a className="home-primary-action" href="https://prumo.cleberbatistapro.com.br" target="_blank" rel="noreferrer">Ver a demonstração ao vivo <span aria-hidden="true">→</span></a>
          <a className="home-text-link" href="/projetos/prumo/">Ler o estudo de caso completo <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <HomePrumoSlides/>
    </div>
  </section>;
}
