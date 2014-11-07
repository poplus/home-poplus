---
layout: inner-page-es
title: Componentes actuales
---

Estos son todos los componentes Poplus existentes. Algunos están bien maduros y otros están muy nuevos.

<div class="grid-row" id="components">
<!--
{% for post in site.categories.component_es %}
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
              <a href="{{ post.component_url }}">Sitio web</a>
            {% endif %}
            {% if post.repo %}
              <a href="{{ post.repo }}">Repositorio GitHub</a>
            {% endif %}
        </div>
      </div>
    </div>
  </div><!--
{% endfor %}
-->
</div>
