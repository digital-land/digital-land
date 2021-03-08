# 5. Load external assets for maps first

Date: 2021-03-07

## Status

Proposed

## Context

Some digital land pages have maps on them. We use [leafletjs](https://leafletjs.com/) to display the maps. And some leaflet plugins to add other features, e.g. a [button to make the maps fullscreen](https://github.com/Leaflet/Leaflet.fullscreen).

The assets (CSS and JS) required for maps and features to work are 3rd party code, loaded from 3rd party CDNs.

## Decision

3rd party assets needed for the maps are loaded in the page head and before our CSS and JS.

## Consequences

* The same 3rd party assets are loaded for any map on the digital land site.
* JS that relies on 3rd party extensions can be confident they have loaded before executing.
* Our CSS comes last in the cascade and will take precedence 
