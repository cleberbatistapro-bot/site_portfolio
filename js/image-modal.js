(function () {
  'use strict';

  var modal = document.querySelector('[data-image-modal]');
  if (!modal) return;

  var backdrop = modal.querySelector('[data-modal-backdrop]');
  var closeBtn = modal.querySelector('[data-modal-close]');
  var titleEl = modal.querySelector('[data-modal-title]');
  var captionEl = modal.querySelector('[data-modal-caption]');
  var imageEl = modal.querySelector('[data-modal-image]');
  var triggers = document.querySelectorAll('[data-modal-trigger]');

  var lastTrigger = null;

  function openModal(trigger) {
    lastTrigger = trigger;

    imageEl.src = trigger.getAttribute('data-src') || '';
    imageEl.alt = trigger.getAttribute('data-alt') || '';
    titleEl.textContent = trigger.getAttribute('data-title') || '';
    captionEl.textContent = trigger.getAttribute('data-caption') || '';

    modal.hidden = false;
    document.body.style.overflow = 'hidden';

    document.addEventListener('keydown', onKeydown);
    closeBtn.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    imageEl.src = '';

    document.removeEventListener('keydown', onKeydown);

    if (lastTrigger) {
      lastTrigger.focus();
      lastTrigger = null;
    }
  }

  function onKeydown(event) {
    if (event.key === 'Escape') {
      closeModal();
      return;
    }
    if (event.key === 'Tab') {
      // Único elemento focável dentro do modal: mantém o foco nele.
      event.preventDefault();
      closeBtn.focus();
    }
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      openModal(trigger);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
})();
