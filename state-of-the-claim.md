---
layout: page
title: State of the Claim
subtitle: What is established, what is inferred, and what remains unknown
description: An evidence-by-evidence assessment of the modern claim to the Lordship of the Manor of the Dungeon.
featured_image: /assets/img/archives-banner.webp
permalink: /state-of-the-claim/
---

<div class="claim-lede">
  <p class="claim-lede__eyebrow">Reviewed {{ site.data.claim.last_reviewed | date: "%e %B %Y" }}</p>
  <p class="claim-lede__summary">{{ site.data.claim.summary }}</p>
</div>

This page intentionally separates three questions that claimant websites often
collapse into one: **did the historical manor exist, what happened to its genuine
lordship, and what did the modern instruments actually accomplish?** A confident
answer to the first question does not supply the missing answer to the second.

The assessment is provisional. It records the state of the public evidence now
available and should change if better evidence appears. It is historical analysis,
not legal advice or a judicial determination.

## How to read the assessment

<div class="evidence-legend" aria-label="Evidence status legend">
  {% for status in site.data.claim.statuses %}
  <div class="evidence-legend__item">
    <span class="evidence-status evidence-status--{{ status.id }}">{{ status.label }}</span>
    <p>{{ status.definition }}</p>
  </div>
  {% endfor %}
</div>

## Proposition by proposition

<div class="evidence-matrix">
  {% for item in site.data.claim.propositions %}
  {% assign status = site.data.claim.statuses | where: "id", item.status | first %}
  <article class="evidence-card" id="{{ item.id }}">
    <div class="evidence-card__header">
      <span class="evidence-status evidence-status--{{ item.status }}">{{ status.label }}</span>
      <h3>{{ item.proposition }}</h3>
    </div>
    <p class="evidence-card__finding">{{ item.finding }}</p>
    <div class="evidence-card__details">
      <div>
        <h4>Evidence</h4>
        <ul>
          {% for source in item.evidence %}
          {% if source.url contains "://" %}{% assign source_url = source.url %}{% else %}{% assign source_url = source.url | relative_url %}{% endif %}
          <li><a href="{{ source_url }}">{{ source.label }}</a></li>
          {% endfor %}
        </ul>
      </div>
      <div>
        <h4>Limit</h4>
        <p>{{ item.limitation }}</p>
      </div>
    </div>
  </article>
  {% endfor %}
</div>

## {{ site.data.claim.official_context.title }}

{{ site.data.claim.official_context.body }}

{% for source in site.data.claim.official_context.sources %}
- [{{ source.label }}]({{ source.url }})
{% endfor %}

## What would materially change this assessment?

The decisive evidence would be an instrument connecting the post-Lee-Warner
succession to Manorial Title Register Limited or to an intermediate holder from
whom it acquired the genuine lordship. A court judgment addressing this particular
claim, or authoritative analysis validating the stated possessory theory as a means
of acquiring an unconnected historical lordship, would also require reconsideration.

Until then, the responsible conclusion is narrower: **the manor is historical, the
2024 transaction is documented, and succession to the genuine lordship remains
unproved.**

<div class="next-step-panel">
  <p><strong>Continue with the evidence</strong></p>
  <a class="btn btn-danger btn-round" href="{{ '/research/' | relative_url }}">Open the research agenda</a>
  <a class="btn btn-outline-danger btn-round" href="{{ '/archives/' | relative_url }}">Examine the archive</a>
</div>
