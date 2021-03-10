# 10. Use the Entity-Value-Attribute pattern for our data model

Date: 2021-03-08

## Status

Proposed

## Context

We need a data model to represent the data we collect.

The model is likely to change frequently as we add new types of entity, each with potentially new attributes.
The model also needs to be be able to store the history of changes to an entity.
The same information may be found in multiple resources, we need to be able to cite the resources where each fact came from, its provenance.

## Decision

Load transformed resources into a [Entity-attribute-model](https://en.wikipedia.org/wiki/Entity%E2%80%93attribute%E2%80%93value_model).
The model should provide a "fact" identifier for each entity-attribute-value triple.

<a href="https://www.flickr.com/photos/psd/50806905348/in/dateposted-public/" title="Different models"><img src="https://live.staticflickr.com/65535/50806905348_9d613daea2_c.jpg" alt="Different models"></a>

## Consequences

* The model may then be used to link a fact to the list of resources which provide the fact, and from the resources we can show its provenance, when and from where the resource was collected.
* Querying an EAV model is more complicated and expensive. We may need other models to render pages, these can be data pacakges: see [9. Use SQLite for data packages](0009-use-sqlite-for-data-packages.md).
* The specification can still be used to document, check, and control how we process data in this schema-less model.
