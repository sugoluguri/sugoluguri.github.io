/* Small enough to read in one sitting. Three things:
   1. dark/light toggle, remembered per browser
   2. nav link highlights the section you're looking at
   3. a hairline under the sticky header once you scroll
*/

(function () {
  'use strict';

  /* ---------- 1. theme ---------- */

  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');

  function stored() {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
  }
  function remember(v) {
    try { localStorage.setItem('theme', v); } catch (e) { /* private mode, fine */ }
  }

  var saved = stored();
  if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved);

  if (btn) {
    btn.addEventListener('click', function () {
      var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var current = root.getAttribute('data-theme') || (systemDark ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      remember(next);
    });
  }

  /* ---------- 2. active nav link ---------- */

  var links = Array.prototype.slice.call(document.querySelectorAll('.topbar nav a'));
  var targets = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && targets.length) {
    var seen = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { seen[e.target.id] = e.isIntersecting; });
      var active = targets.filter(function (t) { return seen[t.id]; })[0];
      links.forEach(function (a) {
        a.classList.toggle('is-active', !!active && a.getAttribute('href') === '#' + active.id);
      });
    }, { rootMargin: '-25% 0px -65% 0px' });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* ---------- 3. header hairline ---------- */

  var topbar = document.getElementById('topbar');
  if (topbar) {
    var onScroll = function () {
      topbar.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
