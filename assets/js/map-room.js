(function () {
  'use strict';

  var room = document.querySelector('[data-map-room]');
  if (!room) return;

  var tabs = Array.prototype.slice.call(room.querySelectorAll('[role="tab"]'));
  var images = Array.prototype.slice.call(room.querySelectorAll('[role="tabpanel"]'));
  var captions = Array.prototype.slice.call(room.querySelectorAll('[data-map-caption]'));
  var canvas = room.querySelector('[data-map-canvas]');
  var stage = room.querySelector('[data-map-stage]');
  var scale = 1;
  var offsetX = 0;
  var offsetY = 0;

  function renderTransform() {
    canvas.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px) scale(' + scale + ')';
  }

  function resetView() {
    scale = 1;
    offsetX = 0;
    offsetY = 0;
    renderTransform();
  }

  function setScale(nextScale) {
    scale = Math.min(2.5, Math.max(1, nextScale));
    if (scale === 1) {
      offsetX = 0;
      offsetY = 0;
    }
    renderTransform();
  }

  function selectTab(tab, moveFocus) {
    tabs.forEach(function (candidate) {
      var selected = candidate === tab;
      candidate.setAttribute('aria-selected', selected ? 'true' : 'false');
      candidate.tabIndex = selected ? 0 : -1;
      candidate.classList.toggle('is-active', selected);
    });

    images.forEach(function (image) {
      var selected = tab.getAttribute('aria-controls') === image.id;
      image.hidden = !selected;
      image.classList.toggle('is-active', selected);
    });

    captions.forEach(function (caption) {
      var selected = tab.dataset.mapSelect === caption.dataset.mapCaption;
      caption.hidden = !selected;
      caption.classList.toggle('is-active', selected);
    });

    resetView();
    if (moveFocus) tab.focus();
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () { selectTab(tab, false); });
    tab.addEventListener('keydown', function (event) {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      var direction = event.key === 'ArrowRight' ? 1 : -1;
      selectTab(tabs[(index + direction + tabs.length) % tabs.length], true);
    });
  });

  room.querySelector('[data-map-zoom="in"]').addEventListener('click', function () { setScale(scale + 0.25); });
  room.querySelector('[data-map-zoom="out"]').addEventListener('click', function () { setScale(scale - 0.25); });
  room.querySelector('[data-map-zoom="reset"]').addEventListener('click', resetView);
  stage.addEventListener('keydown', function (event) {
    if (scale === 1 || !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    if (event.key === 'ArrowLeft') offsetX += 32;
    if (event.key === 'ArrowRight') offsetX -= 32;
    if (event.key === 'ArrowUp') offsetY += 32;
    if (event.key === 'ArrowDown') offsetY -= 32;
    renderTransform();
  });
  selectTab(tabs[0], false);
}());
