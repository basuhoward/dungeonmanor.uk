---
layout: page
title: Documentary Archive
subtitle: Sources, images, and the complete modern transaction file
description: Searchable primary and secondary sources for the Manor of the Dungeon, with provenance and evidential limits stated for each item.
featured_image: /assets/img/archives-banner.webp
archives: true
---

The archive brings the evidence into the open. It includes historical works,
maps, legal reports, and every document supplied in the 2024 title transaction.
Publication here does not imply endorsement: each record states who made it,
where it came from, and what it can—or cannot—establish.

<div class="evidence-notice evidence-notice-open">
  <p class="eyebrow">A rule for reading this archive</p>
  <p>A document proves that its maker made the recorded assertions; it does not
  necessarily prove those assertions. The 2024 instruments are preserved as
  transaction records, not presented as independent confirmation of ownership.</p>
</div>

<div class="archive-tools" role="search" aria-label="Filter the documentary archive">
  <label for="archive-search">Search the archive</label>
  <div class="archive-search-row">
    <div class="archive-search-box">
      <i class="fas fa-search" aria-hidden="true"></i>
      <input id="archive-search" type="search" autocomplete="off" placeholder="Title, person, period, or subject">
    </div>
    <div class="archive-filters" aria-label="Filter by period">
      <button type="button" class="archive-filter is-active" data-archive-filter="all" aria-pressed="true">All</button>
      <button type="button" class="archive-filter" data-archive-filter="historical" aria-pressed="false">Historical sources</button>
      <button type="button" class="archive-filter" data-archive-filter="modern" aria-pressed="false">2024 transaction</button>
    </div>
  </div>
  <p id="archive-count" class="archive-count" aria-live="polite"></p>
</div>

<div id="archive-grid" class="archive-grid">
  {% assign archives = site.archives | where_exp: "item", "item.display != false" | sort: "year" %}
  {% for item in archives %}
  {% assign item_period = item.period %}
  {% if item_period == nil %}{% if item.year == 2024 %}{% assign item_period = "modern" %}{% else %}{% assign item_period = "historical" %}{% endif %}{% endif %}
  {% assign item_status = item.evidence_status | default: "supported" %}
  <article class="archive-card" data-archive-item data-period="{{ item_period }}" data-search="{{ item.title | append: ' ' | append: item.description | append: ' ' | append: item.tags | downcase | escape }}">
    <a class="archive-card-image" href="{{ item.url | relative_url }}" tabindex="-1" aria-hidden="true">
      {% if item.image %}
      <img src="{{ item.image | relative_url }}" alt="" loading="lazy">
      {% else %}
      <span class="archive-icon"><i class="fa-solid fa-{{ item.type }}" aria-hidden="true"></i></span>
      {% endif %}
    </a>
    <div class="archive-card-body">
      <div class="archive-card-meta">
        <span>{{ item.year }}</span>
        <span class="status-badge status-{{ item_status }}">{{ item_status }}</span>
      </div>
      <h2><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h2>
      <p>{{ item.description | markdownify | strip_html | truncatewords: 34 }}</p>
      <div class="archive-card-tags" aria-label="Subjects">
        {% for tag in item.tags limit:3 %}<span>{{ tag }}</span>{% endfor %}
      </div>
    </div>
  </article>
  {% endfor %}
</div>

<div id="archive-empty" class="archive-empty" hidden>
  <h2>No documents match that search.</h2>
  <p>Try a name, period, or broader term.</p>
</div>

## Contributing Material

Documents, photographs, catalogue references, and corrections are welcome—
especially anything bearing on the manor's succession after 1944. Please use
[the contact page](https://jameshoward.us/contact-me/) and include enough
provenance for the material to be evaluated and cited.
