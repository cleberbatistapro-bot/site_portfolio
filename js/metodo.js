/* =========================================================
   Portfólio Cleber Batista — Método de trabalho (dobra 5)
   Componente interativo: tabs verticais no desktop, accordion
   no mobile. JS mínimo, sem dependências.

   Sem esta engine (JS bloqueado/falhou), o CSS de sections.css
   mantém tudo visível em fluxo normal (ver seletores ".js" lá) —
   a etapa 1 aparece aberta e as demais continuam legíveis.
   ========================================================= */
(function () {
  'use strict';

  var itemsWrap = document.getElementById('metodo-steps');
  var stage = document.getElementById('metodo-stage');
  if (!itemsWrap) return;

  var items = Array.prototype.slice.call(itemsWrap.querySelectorAll('.metodo__item'));
  if (!items.length) return;

  var steps = items.map(function (item) {
    var id = item.getAttribute('data-step');
    var button = item.querySelector('.metodo__step');
    return {
      id: id,
      item: item,
      button: button,
      mobilePanel: item.querySelector('.metodo__mobile-panel'),
      stagePanel: stage ? document.getElementById('metodo-panel-' + id) : null,
      // Guarda o alvo desktop original (definido no HTML) para poder
      // restaurar o aria-controls ao voltar de accordion para tabs.
      desktopControls: button ? button.getAttribute('aria-controls') : null
    };
  });

  var desktopQuery = window.matchMedia('(min-width: 641px)');
  function isDesktop() { return desktopQuery.matches; }

  function currentActiveId() {
    var active = items.filter(function (item) { return item.classList.contains('is-active'); })[0];
    return active ? active.getAttribute('data-step') : steps[0].id;
  }

  /* Reaplica os papéis ARIA corretos para o padrão de interação atual:
     tablist/tab/tabpanel no desktop, disclosure (aria-expanded) no mobile. */
  function applyRoles() {
    var desktop = isDesktop();
    var activeId = currentActiveId();

    if (desktop) {
      itemsWrap.setAttribute('role', 'tablist');
      itemsWrap.setAttribute('aria-orientation', 'vertical');
    } else {
      itemsWrap.removeAttribute('role');
      itemsWrap.removeAttribute('aria-orientation');
    }

    steps.forEach(function (s) {
      var active = s.id === activeId;
      if (!s.button) return;

      if (desktop) {
        s.button.setAttribute('role', 'tab');
        s.button.setAttribute('aria-selected', active ? 'true' : 'false');
        s.button.removeAttribute('aria-expanded');
        s.button.setAttribute('tabindex', active ? '0' : '-1');
        if (s.desktopControls) s.button.setAttribute('aria-controls', s.desktopControls);
        if (s.stagePanel) {
          s.stagePanel.setAttribute('role', 'tabpanel');
          s.stagePanel.setAttribute('tabindex', '0');
        }
      } else {
        s.button.removeAttribute('role');
        s.button.removeAttribute('aria-selected');
        s.button.setAttribute('aria-expanded', active ? 'true' : 'false');
        s.button.setAttribute('tabindex', '0');
        if (s.mobilePanel) s.button.setAttribute('aria-controls', s.mobilePanel.id);
        if (s.stagePanel) s.stagePanel.removeAttribute('role');
      }
    });
  }

  function setActive(id, opts) {
    opts = opts || {};
    steps.forEach(function (s) {
      var active = s.id === id;
      s.item.classList.toggle('is-active', active);
      if (s.stagePanel) s.stagePanel.classList.toggle('is-active', active);
    });
    applyRoles();
    if (opts.focus) {
      var target = steps.filter(function (s) { return s.id === id; })[0];
      if (target && target.button) target.button.focus();
    }
  }

  steps.forEach(function (s, index) {
    if (!s.button) return;

    s.button.addEventListener('click', function () {
      // Mobile: reclicar na etapa já aberta não fecha tudo (evita ficar
      // sem nenhuma etapa visível, contrariando "conteúdo essencial
      // nunca só visual"). Continua funcionando como accordion normal
      // ao abrir qualquer outra etapa.
      setActive(s.id);
    });

    s.button.addEventListener('keydown', function (e) {
      if (!isDesktop()) return; // mobile: Enter/Espaço nativos do <button> já abrem/fecham
      var newIndex = null;
      if (e.key === 'ArrowDown') newIndex = (index + 1) % steps.length;
      else if (e.key === 'ArrowUp') newIndex = (index - 1 + steps.length) % steps.length;
      else if (e.key === 'Home') newIndex = 0;
      else if (e.key === 'End') newIndex = steps.length - 1;
      if (newIndex !== null) {
        e.preventDefault();
        setActive(steps[newIndex].id, { focus: true });
      }
    });
  });

  applyRoles();

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(applyRoles, 150);
  });
})();
