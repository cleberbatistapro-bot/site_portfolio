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

    // Reduced motion: mostra tudo, sem observar.
    if (reducedMotion || !('IntersectionObserver' in window)) {
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
     3) SEQUÊNCIA DO "ENTER" — controlador de estado
     idle → triggered → revealing → completed
     ======================================================= */
  (function heroSequence() {
    var hero = document.querySelector('[data-hero]');
    var video = document.querySelector('[data-hero-video]');
    if (!hero) return;

    var TRIGGER = 4.4;          // segundo do "Enter" (validado por frames)
    var SEQ_MS = 2200;          // duração total da revelação
    var FALLBACK_MS = 5200;     // rede de segurança (autoplay bloqueado / erro)

    var state = 'idle';
    var seqTimer = null;
    var fallbackTimer = null;

    // Lê a preferência SEMPRE do MediaQueryList (nunca de um booleano fixo que
    // ficaria desatualizado se a preferência mudar durante a sessão).
    var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    function setState(s) {
      state = s;
      hero.setAttribute('data-state', s);
    }

    function runSequence() {
      if (state === 'revealing' || state === 'completed') return;
      clearTimeout(fallbackTimer);
      setState('triggered');
      // próximo frame: entra em "revealing" para disparar as transições
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { setState('revealing'); });
      });
      clearTimeout(seqTimer);
      seqTimer = setTimeout(function () { setState('completed'); }, SEQ_MS);
    }

    function resetToIdle() {
      clearTimeout(seqTimer);
      setState('idle');
    }

    /* =====================================================================
       VÍDEO DE FUNDO — reproduz SEMPRE, inclusive em prefers-reduced-motion.
       Requisito específico deste projeto: o vídeo é parte central da
       narrativa pedida pelo proprietário; reduced-motion só deve pausar as
       animações DECORATIVAS dos infográficos, NUNCA o vídeo. Por isso não há
       video.pause() aqui — nem no estado "completed" dos infográficos.
       ===================================================================== */
    if (video) {
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

      // Inicia assim que houver dados suficientes (evita play() cedo demais).
      if (video.readyState >= 2) {
        startHeroVideo();
      } else {
        video.addEventListener('canplay', startHeroVideo, { once: true });
      }
    }

    /* =====================================================================
       INFOGRÁFICOS — sequência animada apenas em modo normal.
       Em reduced-motion, mostra a composição final estática (sem animação),
       mas SEM tocar no vídeo.
       ===================================================================== */
    function onTime() {
      if (video.currentTime >= TRIGGER) runSequence();
    }

    function onSeeked() {
      // Avançou manualmente para depois do gatilho: mostra a composição final.
      if (video.currentTime >= TRIGGER && state === 'idle') {
        setState('completed');
      // Voltou para antes do gatilho: restaura de forma controlada.
      } else if (video.currentTime < TRIGGER && state !== 'idle') {
        resetToIdle();
      }
    }

    function enableRevealSequence() {
      // Rede de segurança: nunca deixa a composição invisível.
      fallbackTimer = setTimeout(runSequence, FALLBACK_MS);
      if (!video) return;
      video.addEventListener('timeupdate', onTime);
      video.addEventListener('seeked', onSeeked);
      video.addEventListener('error', function () {
        // Vídeo indisponível: poster permanece; revela a composição.
        runSequence();
      });
    }

    if (motionQuery.matches) {
      setState('completed');       // composição final estática
    } else {
      enableRevealSequence();
    }

    // Preferência muda DURANTE a sessão: ajusta só os infográficos, nunca o vídeo.
    function onMotionChange(e) {
      if (e.matches) {
        clearTimeout(fallbackTimer);
        clearTimeout(seqTimer);
        setState('completed');     // interrompe animações decorativas
      }
    }
    if (motionQuery.addEventListener) motionQuery.addEventListener('change', onMotionChange);
    else if (motionQuery.addListener) motionQuery.addListener(onMotionChange);
  })();

})();
