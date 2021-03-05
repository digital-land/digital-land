# 4. Implement plugins using pluggy

Date: 2021-03-05

## Status

Accepted

## Context

The pipeline has the ability to name a [plugin](https://digital-land.github.io/specification/field/plugin/) used to configure different behaviour and extend the core pipeline code.

For example:

* a plugin value of `wfs` in the [collection/endpoint.csv](https://github.com/digital-land/conservation-area-collection/blob/main/collection/endpoint.csv) file indicates the [endpoint-url](https://digital-land.github.io/specification/field/endpoint-url/) is an [OGC Web Feature Service](https://en.wikipedia.org/wiki/Web_Feature_Service) endpoint, and the GML content, which is different each time we collect it, needs canonicalisation. Similar plugins are needed for APIs which are paginated, or require a SPARQL or other script.
* a plugin value of `fixed` in the [pipeline/convert.csv](https://github.com/digital-land/brownfield-land-collection/blob/main/pipeline/convert.csv) file indicates a fixed resouce file should be used instead of attempting to convert the collected resource file.
* the brownfield-land pipeline [has plugin code](https://github.com/digital-land/brownfield-land-collection/blob/main/pipeline/plugins.py) to harmonise an [OrganisationURI](https://digital-land.github.io/specification/field/OrganisationURI/) value into the CURIE needed by the [organisation](https://digital-land.github.io/specification/field/organisation/) field.

## Decision

We use the Python [pluggy]() framework these can either be run _instead of_ or _as well as_ the vanilla pipeline functions.
Rather than confuse the general purpose pipeline code with conditional branches to handle one specific case.
We can inject our own version of certain functions at run time. 

The Python code currently may be migrated to a package in the future, so it can be shared across pipelines.

## Consequences

* We have a consitent framework for using code from third-parties.
* Our core code doesn't have to depend on dependencies only used in a small number of pipelines.
* Plugins need to be written in Python, or have a Python wrapper.
* Developers will need documentation to understand how the pluggy framework works.
