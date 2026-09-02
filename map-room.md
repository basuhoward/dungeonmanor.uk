---
layout: page
title: The Map Room
subtitle: Canterbury changing around the Dungeon mound
description: An interactive comparison of Roman, Anglo-Saxon, and Norman Canterbury through T. G. Godfrey-Faussett's 1875 maps.
featured_image: /assets/img/history-banner.webp
permalink: /map-room/
map_room: true
---

These three plans accompanied T. G. Godfrey-Faussett's 1875 paper
_Canterbury Till Domesday_. Because they share an orientation and graphic
language, they can be read as a sequence: institutions, walls, roads, and
fortifications change while the mound at the Dungeon remains a fixed point.

They are nineteenth-century scholarly reconstructions, not modern archaeological
survey plans. Their value lies both in the evidence Godfrey-Faussett assembled and
in showing how Victorian antiquaries understood Canterbury's development.

<div class="map-room" data-map-room>
  <div class="map-room__toolbar">
    <div class="map-room__tabs" role="tablist" aria-label="Historical map layer">
      {% for layer in site.data.map_layers %}
      <button
        class="map-room__tab{% if forloop.first %} is-active{% endif %}"
        type="button"
        role="tab"
        id="map-tab-{{ layer.id }}"
        aria-controls="map-panel-{{ layer.id }}"
        aria-selected="{% if forloop.first %}true{% else %}false{% endif %}"
        data-map-select="{{ layer.id }}">
        {{ layer.short_title }}
      </button>
      {% endfor %}
    </div>
    <div class="map-room__zoom" aria-label="Map zoom controls">
      <button type="button" data-map-zoom="out" aria-label="Zoom out">−</button>
      <button type="button" data-map-zoom="reset">Reset</button>
      <button type="button" data-map-zoom="in" aria-label="Zoom in">+</button>
    </div>
  </div>

  <div class="map-room__stage" data-map-stage tabindex="0" aria-label="Interactive historical map. Use arrow keys to pan when zoomed.">
    <div class="map-room__canvas" data-map-canvas>
      {% for layer in site.data.map_layers %}
      <img
        id="map-panel-{{ layer.id }}"
        class="map-room__image{% if forloop.first %} is-active{% endif %}"
        src="{{ layer.image | relative_url }}"
        alt="{{ layer.title }}"
        role="tabpanel"
        aria-labelledby="map-tab-{{ layer.id }}"
        {% unless forloop.first %}hidden{% endunless %}
        {% if forloop.first %}loading="eager"{% else %}loading="lazy"{% endif %}>
      {% endfor %}
    </div>
  </div>

  <div class="map-room__captions" aria-live="polite">
    {% for layer in site.data.map_layers %}
    <article class="map-room__caption{% if forloop.first %} is-active{% endif %}" data-map-caption="{{ layer.id }}" {% unless forloop.first %}hidden{% endunless %}>
      <p class="map-room__period">{{ layer.period }}</p>
      <h3>{{ layer.title }}</h3>
      <p>{{ layer.description }}</p>
      <p class="map-room__focus"><strong>Look for:</strong> {{ layer.focus }}</p>
      <a class="text-link" href="{{ layer.archive_url | relative_url }}">Open the archival record <span aria-hidden="true">→</span></a>
    </article>
    {% endfor %}
  </div>
</div>

## A fourth plan

Charles Cotton reproduced a separate plan of Durovernum in 1929. It is useful
for comparison but does not share the dimensions of Godfrey-Faussett's sequence,
so it is presented separately in the archive as the
[Plan of Durovernum]({{ '/archives/plan-of-durovernum/' | relative_url }}).
