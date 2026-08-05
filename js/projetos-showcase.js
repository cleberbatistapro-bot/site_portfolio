/* =========================================================
   Portfólio Cleber Batista — Carrossel "Projetos em destaque"
   JS mínimo, sem dependências. Dados reais dos 5 projetos (copy já
   aprovada nas páginas de projeto / projetos.html), sem nada inventado.
   ========================================================= */
(function () {
  'use strict';

  var INTERVAL_MS = 6000;

  var SLIDES = [
    {
      image: 'assets/img/projetos/projeto-inspecao-digital.webp',
      alt: 'Interface do Sistema Digital de Inspeção exibindo uma verificação dimensional.',
      title: 'Sistema Digital de Inspeção',
      desc: 'Transforma inspeções em papel em um processo digital guiado, com imagens ampliáveis, registros padronizados e histórico centralizado para facilitar consultas e rastreabilidade.',
      checklist: ['Mapeamento de processo', 'Levantamento de requisitos', 'Wireframes', 'Validação do conceito'],
      status: 'Protótipo entregue',
      area: 'Qualidade / Processos',
      stack: 'Wireframes • Prototipação • Documentação',
      href: 'projeto-inspecao-digital.html'
    },
    {
      image: 'assets/img/projetos/projeto-organizador-arquivos.webp',
      alt: 'Ilustração do Organizador Automático de Arquivos separando documentos em diferentes formatos.',
      title: 'Organizador de Arquivos',
      desc: 'Organiza e separa arquivos de diferentes formatos em pastas automáticas, seguindo regras definidas para manter documentos estruturados e fáceis de localizar.',
      checklist: ['Regras configuráveis', 'Interface Desktop (Tkinter)', 'Tratamento de erros', 'Validação do resultado'],
      status: 'Ferramenta funcional e testada em ambiente local',
      area: 'Automação / Organização',
      stack: 'Python • Tkinter • Manipulação de arquivos',
      href: 'projeto-organizador-arquivos.html'
    },
    {
      image: 'assets/img/projetos/projeto-proc-facil.webp',
      alt: 'Fluxo visual do PROC Fácil consolidando dados de diferentes planilhas.',
      title: 'ProcFácil',
      desc: 'Consolida informações de diferentes planilhas com busca automatizada entre bases e colunas, reduzindo o trabalho manual de comparação e organização dos dados.',
      checklist: ['Pandas (leitura de planilhas)', 'PROCV (lógica de união)', 'Interface Desktop (Tkinter)', 'Tratamento de erros e validações'],
      status: 'Ferramenta funcional e testada com dados reais',
      area: 'Automação / Dados',
      stack: 'Python • Pandas • Tkinter',
      href: 'projeto-proc-facil.html'
    },
    {
      image: 'assets/img/projetos/projeto-gestao-calibracao.webp',
      alt: 'Interface conceitual de gestão de instrumentos e alertas de calibração.',
      title: 'Controle de Calibração de Instrumentos',
      desc: 'Protótipo de uma solução para centralizar instrumentos, prazos, certificados e alertas de calibração em uma interface organizada, segura e rastreável.',
      checklist: ['Levantamento de requisitos', 'Wireframes', 'Estruturação de dados', 'Validação do conceito'],
      status: 'Protótipo visual, sem implementação produtiva',
      area: 'Qualidade / Gestão',
      stack: 'Wireframes • Prototipação • Estruturação de dados',
      href: 'projeto-gestao-calibracao.html'
    },
    {
      image: 'assets/img/projetos/projeto-dash-top.webp',
      alt: 'Dashboard executivo escuro com indicadores, gráfico de linha e gráfico de categorias.',
      title: 'Dashboard Administrativo',
      desc: 'Transforma dados de planilhas em dashboards executivos com indicadores, filtros e visualizações claras para apoiar análises e decisões.',
      checklist: ['Pandas (leitura de planilhas)', 'Geração de gráficos', 'Detecção de categoria por regras', 'Exportação de relatórios'],
      status: 'Ferramenta funcional, testada com planilhas de exemplo',
      area: 'Dados / Visualização',
      stack: 'Python • Pandas • Interface web',
      href: 'projeto-dash-top.html'
    }
  ];

  var section = document.querySelector('[data-pjs]');
  if (!section) return;

  var image = section.querySelector('[data-pjs-image]');
  var titleEl = section.querySelector('[data-pjs-title]');
  var descEl = section.querySelector('[data-pjs-desc]');
  var checklistEl = section.querySelector('[data-pjs-checklist]');
  var statusEl = section.querySelector('[data-pjs-status]');
  var areaEl = section.querySelector('[data-pjs-area]');
  var stackEl = section.querySelector('[data-pjs-stack]');
  var ctaEl = section.querySelector('[data-pjs-cta]');
  var currentEl = section.querySelector('[data-pjs-current]');
  var thumbs = [].slice.call(section.querySelectorAll('[data-pjs-thumb]'));
  var prevBtn = section.querySelector('[data-pjs-prev]');
  var nextBtn = section.querySelector('[data-pjs-next]');
  var toggleBtn = section.querySelector('[data-pjs-toggle]');
  var iconPause = section.querySelector('[data-pjs-icon-pause]');
  var iconPlay = section.querySelector('[data-pjs-icon-play]');

  if (!image || !thumbs.length) return;

  var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  var index = 0;
  var timer = null;
  var playing = !motionQuery.matches; // respeita a preferência já usada no vídeo da Hero

  function renderPanel(i) {
    var s = SLIDES[i];
    image.src = s.image;
    image.alt = s.alt;
    if (titleEl) titleEl.textContent = s.title;
    if (descEl) descEl.textContent = s.desc;
    if (checklistEl) {
      checklistEl.innerHTML = '';
      s.checklist.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        checklistEl.appendChild(li);
      });
    }
    if (statusEl) statusEl.textContent = s.status;
    if (areaEl) areaEl.textContent = s.area;
    if (stackEl) stackEl.textContent = s.stack;
    if (ctaEl) {
      ctaEl.href = s.href;
      ctaEl.setAttribute('aria-label', 'Ver estudo de caso: ' + s.title);
    }
    if (currentEl) currentEl.textContent = String(i + 1).padStart(2, '0');
  }

  function renderThumbs(i) {
    thumbs.forEach(function (btn, idx) {
      var active = idx === i;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
      var bar = btn.querySelector('.pjs__thumb-progress-bar');
      if (!bar) return;
      bar.classList.remove('is-animating');
      bar.style.width = active ? '0%' : '0%';
      if (active && playing) {
        // Força reflow para reiniciar a animação CSS a cada troca de slide.
        void bar.offsetWidth;
        bar.classList.add('is-animating');
      }
    });
  }

  function goTo(i, restartTimer) {
    index = (i + SLIDES.length) % SLIDES.length;
    renderPanel(index);
    renderThumbs(index);
    if (restartTimer !== false) armTimer();
  }

  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  function armTimer() {
    clearTimeout(timer);
    if (!playing) return;
    timer = setTimeout(next, INTERVAL_MS);
  }

  function setPlaying(next) {
    playing = next;
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-pressed', playing ? 'false' : 'true');
      toggleBtn.setAttribute('aria-label', playing ? 'Pausar apresentação automática' : 'Retomar apresentação automática');
    }
    if (iconPause) iconPause.hidden = !playing;
    if (iconPlay) iconPlay.hidden = playing;
    if (playing) {
      renderThumbs(index); // reinicia a barra de progresso da miniatura ativa
      armTimer();
    } else {
      clearTimeout(timer);
      var activeBar = section.querySelector('.pjs__thumb-btn.is-active .pjs__thumb-progress-bar');
      if (activeBar) activeBar.classList.remove('is-animating');
    }
  }

  // Setas.
  if (prevBtn) prevBtn.addEventListener('click', function () { prev(); });
  if (nextBtn) nextBtn.addEventListener('click', function () { next(); });

  // Miniaturas (também funcionam como abas por teclado/clique).
  thumbs.forEach(function (btn, idx) {
    btn.addEventListener('click', function () { goTo(idx); });
  });

  // Play/pause manual.
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () { setPlaying(!playing); });
  }

  // Pausa ao passar o mouse ou focar dentro do palco (não depende só de hover:
  // o botão de play/pause cobre teclado/toque).
  var stage = section.querySelector('.pjs__stage');
  if (stage) {
    stage.addEventListener('mouseenter', function () { clearTimeout(timer); });
    stage.addEventListener('mouseleave', function () { if (playing) armTimer(); });
  }

  // Preferência de movimento reduzido pode mudar durante a sessão.
  function onMotionChange(e) {
    setPlaying(!e.matches);
  }
  if (motionQuery.addEventListener) motionQuery.addEventListener('change', onMotionChange);
  else if (motionQuery.addListener) motionQuery.addListener(onMotionChange);

  // Estado inicial (slide 0 já está no HTML; isso alinha o resto do estado).
  renderThumbs(0);
  if (playing) armTimer();
})();
