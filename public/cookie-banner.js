(function () {
  'use strict';

  var STORAGE_KEY = 'odp_cookie_consent';
  var BANNER_ID = 'odp-cookie-banner';

  function t(key) {
    var dict = {
      title: 'Usamos cookies',
      body: 'Usamos cookies de marketing para medir el rendimiento de nuestros anuncios y mejorar tu experiencia. Puedes aceptar o rechazar el uso de cookies no esenciales.',
      accept: 'Aceptar',
      reject: 'Rechazar',
      policy: 'Ver política'
    };
    return dict[key] || '';
  }

  function applyConsent(granted) {
    if (typeof window.gtag !== 'function') return;
    window.gtag('consent', 'update', {
      ad_storage: granted ? 'granted' : 'denied',
      ad_user_data: granted ? 'granted' : 'denied',
      ad_personalization: granted ? 'granted' : 'denied',
      analytics_storage: granted ? 'granted' : 'denied'
    });
  }

  function persist(granted) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        granted: granted,
        ts: new Date().toISOString()
      }));
    } catch (e) {
      // localStorage no disponible (modo privado, etc.) - se sigue con la sesion actual
    }
  }

  function hide() {
    var el = document.getElementById(BANNER_ID);
    if (el) el.remove();
  }

  function render() {
    if (document.getElementById(BANNER_ID)) return;

    var banner = document.createElement('div');
    banner.id = BANNER_ID;
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-label', t('title'));
    banner.innerHTML =
      '<div class="odp-cookie-inner">' +
        '<div class="odp-cookie-text">' +
          '<strong>' + t('title') + '</strong>' +
          '<p>' + t('body') + '</p>' +
        '</div>' +
        '<div class="odp-cookie-actions">' +
          '<a class="odp-cookie-link" href="/politica-de-cookies" target="_blank" rel="noopener noreferrer">' + t('policy') + '</a>' +
          '<button type="button" class="odp-cookie-btn odp-cookie-btn--reject" data-action="reject">' + t('reject') + '</button>' +
          '<button type="button" class="odp-cookie-btn odp-cookie-btn--accept" data-action="accept">' + t('accept') + '</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(banner);

    banner.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-action]');
      if (!btn) return;
      var action = btn.getAttribute('data-action');
      var granted = action === 'accept';
      persist(granted);
      applyConsent(granted);
      hide();
    });
  }

  function init() {
    var stored = null;
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      stored = raw ? JSON.parse(raw) : null;
    } catch (e) {
      stored = null;
    }

    if (stored && typeof stored.granted === 'boolean') {
      applyConsent(stored.granted);
      return;
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', render);
    } else {
      render();
    }
  }

  init();
})();
