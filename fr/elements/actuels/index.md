---
layout: inner-page-fr
title: Éléments actuels
---

Voici tous les éléments existants Poplus. Il existe des éléments ayant fait leur preuve depuis longtemps et des éléments flambant neufs.

<div class="grid-row" id="components">
<!--
{% for post in site.categories.component_fr %}
  --><div class="column-one-of-two">
    <div class="catalogue-item catalogue-item--poplus-component">
      <h3><a href="
        {% if post.component_url %}
              {{ post.component_url }}
          {% else if post.repo %}
            {{ post.repo }}
          {% endif %}
      ">{{ post.title }}</a></h3>
      <div class="catalogue-item__content">
        {% if post.excerpt %}
            <p>{{ post.excerpt }}</p>
          {% endif %}
          <div class="catalogue-links"><!-- <strong>Tags: </strong>{{ post.tags | array_to_sentence_string }}<br> -->
            {% if post.component_url %}
              <a href="{{ post.component_url }}">Site web</a>
            {% endif %}
            {% if post.repo %}
              <a href="{{ post.repo }}">Dépôt GitHub</a>
            {% endif %}
        </div>
      </div>
    </div>
  </div><!--
{% endfor %}
-->
</div>
