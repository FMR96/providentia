(function () {
  'use strict';

  /* ── Barra de progreso de lectura ──────────────────────── */
  function initReadingProgress() {
    var bar = document.getElementById('reading-progress-bar');
    if (!bar) return;

    function updateProgress() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = Math.min(100, Math.max(0, progress)) + '%';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /* ── Índice de contenidos (TOC) ────────────────────────── */
  function initTOC() {
    var nav = document.getElementById('toc-nav');
    var content = document.getElementById('article-content');
    if (!nav || !content) return;

    var headings = content.querySelectorAll('h2[id]');
    if (headings.length === 0) return;

    var items = [];
    headings.forEach(function (h) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.getElementById(h.id);
        if (!target) return;
        var offset = 80;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
      li.appendChild(a);
      nav.appendChild(li);
      items.push({ el: h, link: a });
    });

    /* Resaltar enlace activo según scroll */
    function updateActive() {
      var scrollY = window.scrollY;
      var offset = 100;
      var active = null;
      items.forEach(function (item) {
        var top = item.el.getBoundingClientRect().top + scrollY - offset;
        if (scrollY >= top) active = item;
      });
      items.forEach(function (item) {
        item.link.classList.toggle('active', item === active);
      });
    }

    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
  }

  /* ── Filtros de categoría en el listado ────────────────── */
  function initFilters() {
    var buttons = document.querySelectorAll('[data-filter]');
    var cards = document.querySelectorAll('[data-card]');
    var loadMore = document.getElementById('load-more-btn');
    if (buttons.length === 0 || cards.length === 0) return;

    var INITIAL_COUNT = 6; /* Primer artículo destacado + 5 en grid = 6 */
    var currentFilter = 'todos';

    function applyFilter() {
      var visible = 0;
      cards.forEach(function (card) {
        var category = (card.getAttribute('data-category') || '').toLowerCase();
        var matches = currentFilter === 'todos' || category === currentFilter;
        card.setAttribute('data-hidden', matches ? 'false' : 'true');
        if (matches) {
          visible++;
          /* Ocultar los que superen el límite inicial mientras no se haya
             pulsado "Cargar más" para este filtro */
          if (!card.getAttribute('data-revealed') && visible > INITIAL_COUNT) {
            card.setAttribute('data-overflow', 'true');
            card.setAttribute('data-hidden', 'true');
          } else {
            card.removeAttribute('data-overflow');
          }
        }
      });
      /* Mostrar/ocultar botón "Cargar más" */
      if (loadMore) {
        var hasOverflow = Array.from(cards).some(function (c) {
          return c.getAttribute('data-overflow') === 'true';
        });
        loadMore.setAttribute('data-hidden', hasOverflow ? 'false' : 'true');
      }
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        currentFilter = btn.getAttribute('data-filter') || 'todos';
        /* Limpiar "revealed" al cambiar filtro */
        cards.forEach(function (c) { c.removeAttribute('data-revealed'); });
        buttons.forEach(function (b) { b.removeAttribute('data-active'); });
        btn.setAttribute('data-active', 'true');
        applyFilter();
      });
    });

    /* Botón cargar más */
    if (loadMore) {
      loadMore.addEventListener('click', function () {
        var overflow = document.querySelectorAll('[data-overflow="true"]');
        overflow.forEach(function (card) {
          card.removeAttribute('data-overflow');
          card.setAttribute('data-revealed', 'true');
          card.setAttribute('data-hidden', 'false');
        });
        loadMore.setAttribute('data-hidden', 'true');
      });
    }

    applyFilter();
  }

  /* ── Botón copiar enlace ───────────────────────────────── */
  function initCopyLink() {
    var btn = document.getElementById('copy-link-btn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(window.location.href).then(function () {
        var original = btn.textContent;
        btn.textContent = 'Copiado';
        setTimeout(function () { btn.textContent = original; }, 2000);
      }).catch(function () {
        /* Fallback para navegadores sin clipboard API */
        var input = document.createElement('input');
        input.value = window.location.href;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      });
    });
  }

  /* ── Init ──────────────────────────────────────────────── */
  function init() {
    initReadingProgress();
    initTOC();
    initFilters();
    initCopyLink();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
