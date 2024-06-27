---
layout: page
title: Archival Material
subtitle: Documents Relating to the Manor
featured_image: /assets/img/archives-banner.webp
---

This collection represents the beginning of our journey to compile
and preserve the rich history of Dungeon Manor. Currently, the
archive includes only a selection of documents that I have personally
gathered. These initial entries serve as the foundation of what we
hope will become a comprehensive repository of historical records
related to Dungeon Manor.

As we continue to explore and discover, we will actively expand
this archive. Our search will extend to online databases and
historical document repositories, and we will update our collection
regularly as new findings come to light.

We warmly invite contributions from anyone who possesses documents,
photos, or any other materials related to Dungeon Manor. Whether
you're a historian, a local enthusiast, or a family with ancestral
ties to the manor, your contributions are invaluable in helping us
enrich this archive.

To submit documents or for more information on how you can contribute
to the Dungeon Manor Archives, please contact me at [my contact
page](https://jameshoward.us/contact-me/)

Together, let's uncover and preserve the legacy of Dungeon Manor
for future generations to explore and appreciate.

<div class="section">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="products">
          <div class="row">
            {% assign archives = site.archives %}
            {% for item in archives %}
            <div class="col-md-4 col-sm-4">
              <div class="card card-with-shadow card-gray">
                <div class="card-image text-center">
                  <a href="{{ item.url | relative_url }}">
                    {% if item.image %}
                    <img class="img w-100" src="{{ item.image | relative_url }}" class="img-rounded img-responsive" />
                    {% else %}
                    <i class="fa-solid fa-{{ item.type }} fa-10x"></i>
                    {% endif %}
                  </a>
                </div>
                <div class="card-body">
                  <div class="card-description">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <h6 class="card-description">{{ item.description | markdownify | remove: '<p>' | remove: '</p>' | truncatewords: 20 }}</h6>
                  </div>
                  <div class="price">
                    <h6 class="card-description">Year: <span class="badge badge-pill badge-default">{{ item.year }}</span></h6>
                    <h6 class="card-description">Tags:
                      {% assign tags = item.tags | sort %}
                      {% for tag in tags %}
                      <span class="badge badge-pill badge-default">{{ tag }}</span>
                      {% endfor %}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            {% endfor %}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
