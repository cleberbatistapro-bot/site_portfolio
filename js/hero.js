/* =========================================================
   Portfólio Cleber Batista — Header + Hero
   JS mínimo, sem dependências.
   ========================================================= */
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* =======================================================
     1) MENU MOBILE — acessível por teclado
     ======================================================= */
  (function menu() {
    var toggle = document.querySelector('[data-nav-toggle]');
    var nav = document.getElementById('nav-principal');
    if (!toggle || !nav) return;

    var isOpen = false;

    function open() {
      isOpen = true;
      nav.setAttribute('data-open', '');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Fechar menu');
      var first = nav.querySelector('a');
      if (first) first.focus();
      document.addEventListener('keydown', onKeydown);
    }

    function close(returnFocus) {
      isOpen = false;
      nav.removeAttribute('data-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
      document.removeEventListener('keydown', onKeydown);
      if (returnFocus) toggle.focus();
    }

    function onKeydown(e) {
      if (e.key === 'Escape') { e.preventDefault(); close(true); }
    }

    toggle.addEventListener('click', function () {
      isOpen ? close(true) : open();
    });

    // Fecha ao selecionar um link.
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && isOpen) close(false);
    });

    // Se a viewport crescer para desktop, garante estado limpo.
    window.matchMedia('(min-width: 901px)').addEventListener('change', function (m) {
      if (m.matches && isOpen) close(false);
    });
  })();

  /* =======================================================
     2) SCROLL REVEAL — base reutilizável (IntersectionObserver)
     Conteúdo já é visível sem JS; aqui só animamos a entrada.
     ======================================================= */
  (function reveal() {
    var items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;

    // Sem IntersectionObserver: mostra tudo de imediato (fallback).
    // Obs.: o reveal roda mesmo com prefers-reduced-motion, pois o dono
    // optou por preservar o movimento do site (mesma decisão do vídeo).
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = Number(el.getAttribute('data-reveal-delay')) || 0;
        setTimeout(function () { el.classList.add('is-visible'); }, delay);
        obs.unobserve(el); // executa apenas uma vez
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

    // O stagger vem de data-reveal-delay (ms) definido no HTML por elemento
    // (padrão 0). Assim cada dobra controla sua própria entrada.
    items.forEach(function (el) { io.observe(el); });
  })();

  /* =======================================================
     3) VÍDEO DE FUNDO DA HERO
     Sem poster real disponível para o vídeo atual: em prefers-reduced-motion
     o vídeo permanece pausado (sem autoplay), preservando o fundo escuro do
     projeto. Fora isso, toca normalmente, com retomada caso o autoplay seja
     bloqueado pelo navegador.
     ======================================================= */
  (function heroVideo() {
    var hero = document.querySelector('[data-hero]');
    var video = document.querySelector('[data-hero-video]');
    if (!hero || !video) return;

    // Lê a preferência SEMPRE do MediaQueryList (nunca de um booleano fixo que
    // ficaria desatualizado se a preferência mudar durante a sessão).
    var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return; // vídeo permanece pausado no 1º frame

    var resumeArmed = false;
    var interactionEvents = ['pointerdown', 'keydown', 'touchstart'];

    var markPlaying = function () { hero.setAttribute('data-video-state', 'playing'); };

    var tryPlay = function () {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      var pr = video.play();
      return (pr && typeof pr.then === 'function') ? pr : Promise.resolve();
    };

    var disarmInteractionResume = function () {
      if (!resumeArmed) return;
      resumeArmed = false;
      interactionEvents.forEach(function (ev) {
        document.removeEventListener(ev, onFirstInteraction);
      });
    };

    function onFirstInteraction() {
      disarmInteractionResume();
      tryPlay().then(markPlaying).catch(function () { /* segue bloqueado */ });
    }

    var armInteractionResume = function () {
      if (resumeArmed) return;
      resumeArmed = true;
      interactionEvents.forEach(function (ev) {
        document.addEventListener(ev, onFirstInteraction, { passive: true });
      });
    };

    var startHeroVideo = function () {
      tryPlay().then(markPlaying).catch(function (err) {
        hero.setAttribute('data-video-state', 'blocked');
        if (window.console && console.debug) {
          console.debug('[hero] autoplay bloqueado — aguardando interação:', err && err.name);
        }
        armInteractionResume();
      });
    };

    // Confirma o estado quando o vídeo realmente começa a tocar.
    video.addEventListener('playing', function () {
      markPlaying();
      disarmInteractionResume();
    });

    // Se a aba perder o foco e o navegador pausar o vídeo em segundo plano,
    // retoma ao voltar (nunca o pausamos explicitamente, então é seguro).
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden && video.paused && !video.ended) {
        tryPlay().then(markPlaying).catch(function () {});
      }
    });

    // Se a preferência de movimento mudar DURANTE a sessão para "reduzir",
    // pausamos o vídeo no frame atual (sem voltar ao início).
    function onMotionChange(e) {
      if (e.matches) {
        disarmInteractionResume();
        video.pause();
        hero.setAttribute('data-video-state', 'paused');
      }
    }
    if (motionQuery.addEventListener) motionQuery.addEventListener('change', onMotionChange);
    else if (motionQuery.addListener) motionQuery.addListener(onMotionChange);

    // Inicia assim que houver dados suficientes (evita play() cedo demais).
    if (video.readyState >= 2) {
      startHeroVideo();
    } else {
      video.addEventListener('canplay', startHeroVideo, { once: true });
    }
  })();

})();
