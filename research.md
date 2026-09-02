---
layout: page
title: Research Ledger
subtitle: Questions, sources, findings, and work still to be done
description: The open research agenda for the Manor of the Dungeon and a dated record of changes to the historical case.
featured_image: /assets/img/history-banner.webp
permalink: /research/
---

Historical research is not only a collection of conclusions. It is also a record
of questions asked, evidence examined, gaps encountered, and conclusions revised.
This ledger makes that process visible.

<div class="method-panel">
  <p class="method-panel__title">Research principles</p>
  <ol>
    {% for principle in site.data.research.principles %}
    <li>{{ principle }}</li>
    {% endfor %}
  </ol>
</div>

## Open questions

<div class="research-questions">
  {% for question in site.data.research.questions %}
  <article class="research-question" id="{{ question.id }}">
    <span class="research-status research-status--{{ question.status }}">{{ question.status_label }}</span>
    <h3>{{ question.title }}</h3>
    <div class="research-question__grid">
      <div>
        <h4>What is known</h4>
        <p>{{ question.known }}</p>
      </div>
      <div>
        <h4>What is needed</h4>
        <p>{{ question.needed }}</p>
      </div>
    </div>
  </article>
  {% endfor %}
</div>

## Source register

<div class="table-scroll" role="region" aria-label="Research source register" tabindex="0">
  <table class="research-table">
    <thead>
      <tr>
        <th scope="col">Source</th>
        <th scope="col">Date</th>
        <th scope="col">Status</th>
        <th scope="col">Contribution or purpose</th>
      </tr>
    </thead>
    <tbody>
      {% for item in site.data.research.source_register %}
      <tr>
        <td>{% if item.url %}{% if item.url contains "://" %}{% assign source_url = item.url %}{% else %}{% assign source_url = item.url | relative_url %}{% endif %}<a href="{{ source_url }}">{{ item.source }}</a>{% else %}{{ item.source }}{% endif %}</td>
        <td>{{ item.date }}</td>
        <td><span class="research-status research-status--{{ item.status }}">{{ item.status_label }}</span></td>
        <td>{{ item.contribution }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

## Research notes

<div class="research-notes-list">
  {% assign notes = site.research_notes | sort: "date" | reverse %}
  {% for note in notes %}
  <article class="research-note-card">
    <p class="research-note-card__date">{{ note.date | date: "%e %B %Y" }}</p>
    <h3><a href="{{ note.url | relative_url }}">{{ note.title }}</a></h3>
    <p>{{ note.summary }}</p>
    <a class="text-link" href="{{ note.url | relative_url }}">Read the note <span aria-hidden="true">→</span></a>
  </article>
  {% endfor %}
</div>

## Contributing evidence

Documents, photographs, citations, corrections, and contrary evidence are welcome.
Please identify the source and, where possible, its repository, shelfmark, date,
and provenance. Contributions can be sent through the
[contact page](https://jameshoward.us/contact-me/).
