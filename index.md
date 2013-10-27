---
layout: page
title: About Marcus
---
{% include JB/setup %}

I am a Software Developer working at Salesforce.com focused on information discovery.

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

