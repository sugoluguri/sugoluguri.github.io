/* Two things:
   1. nav link highlights whichever section you're looking at
   2. nothing else — the rest is CSS
*/

(function () {
  'use strict';

  var links = Array.prototype.slice.call(document.querySelectorAll('.navbar a[href^="#"]'));
  var targets = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if (!('IntersectionObserver' in window) || !targets.length) return;

  var seen = {};
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { seen[e.target.id] = e.isIntersecting; });
    var active = targets.filter(function (t) { return seen[t.id]; })[0];
    links.forEach(function (a) {
      a.classList.toggle('is-active', !!active && a.getAttribute('href') === '#' + active.id);
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  targets.forEach(function (t) { io.observe(t); });
})();
