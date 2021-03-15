# 5. Load external frontend assets first

Date: 2021-03-07

## Status

Accepted

## Context

The order the frontend assets are loaded matters.

We use a number of 3rd party assets, as well as writing our own CSS and JS. For example, our CSS builds on the GOV.UK frontend CSS. Likewise, our JS builds on the GOV.UK frontend JS. Therefore we need to include the 3rd party assets before our assets.

## Decision

3rd party assets are loaded before Digital land frontend assets.

Add CSS link elements to the head, before `dl-frontend.css`. E.g.

```
{%- block dlCss %}
<!-- link tags for 3rd party stylesheets go here -->
{{ super() }} # this includes all the digital land defined stylesheets
{% endblock %}
```

Add Javascript to the end of the body, before `dl-frontend.js`. E.g.

```
{%- block bodyEndScripts %}
<!-- script tags for 3rd party JS go here -->
{{ super() }} # this includes all the digital land defined JS
{% endblock %}
```

There will be times when you choose to load JS in the head to help maintain the dependencies. For example, it makes sense to keep the CSS and JS required for leaflet maps together. [We load these in the head](https://github.com/digital-land/frontend/blob/main/digital_land_frontend/templates/partials/dl-map-assets.html).


## Consequences

* 3rd party assets won't override our assets
* Our CSS and JS can build on code inherited from 3rd party assets
* Debugging is easier because we can trace the order CSS and JS is loaded
* Using jinja blocks means we can maintain fine grain control on a specific page if we need to
* Loading stylesheets in the head means the user should see the page content as you intended
* Loading JS at the end of the page means failing JS will not block the page from loading. Important for our progressive enhancement approach to JS
