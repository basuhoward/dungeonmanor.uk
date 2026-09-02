(function () {
  'use strict';

  var input = document.getElementById('archive-search');
  var items = Array.prototype.slice.call(document.querySelectorAll('[data-archive-item]'));
  var filters = Array.prototype.slice.call(document.querySelectorAll('[data-archive-filter]'));
  var count = document.getElementById('archive-count');
  var empty = document.getElementById('archive-empty');
  var activePeriod = 'all';

  if (!input || !items.length) return;

  function applyFilters() {
    var query = input.value.trim().toLowerCase();
    var visible = 0;

    items.forEach(function (item) {
      var periodMatches = activePeriod === 'all' || item.dataset.period === activePeriod;
      var textMatches = !query || item.dataset.search.indexOf(query) !== -1;
      var show = periodMatches && textMatches;
      item.hidden = !show;
      if (show) visible += 1;
    });

    count.textContent = visible + (visible === 1 ? ' document' : ' documents');
    empty.hidden = visible !== 0;
  }

  filters.forEach(function (button) {
    button.addEventListener('click', function () {
      activePeriod = button.dataset.archiveFilter;
      filters.forEach(function (candidate) {
        var isActive = candidate === button;
        candidate.classList.toggle('is-active', isActive);
        candidate.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
      applyFilters();
    });
  });

  input.addEventListener('input', applyFilters);

  var requested = new URLSearchParams(window.location.search).get('period');
  var matchingFilter = filters.find(function (button) {
    return button.dataset.archiveFilter === requested;
  });
  if (matchingFilter) matchingFilter.click();
  else applyFilters();
}());
