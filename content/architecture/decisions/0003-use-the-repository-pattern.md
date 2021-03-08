# 3. Use the repository-pattern to access a database

Date: 2021-03-05

## Status

Proposed

## Context

As we introduce a database into our architecture it will be useful to agree some access patterns so that we have a shared understanding of what "good" looks like when writing code and performing code reviews. The key considerations for choosing an approach include:

 - testability; it should be easy to write unit tests without the need to connect to a real database
 - readability; it should be easy to write code that makes the database interactions easy to understand
 - encapsulation; all of the specific code/queries required to implement the underlying persistence technologies, should be contained in their own module(s)

The commonly used _Repository Pattern_ provides access to the underlying persistence via an abstraction that is written in the language of the domain. It gives the developer a clear interface that can be used to create a test double (likely storing data in-memory) and encapsulates all queries relating to a single "aggregate" in one place.

NB An *aggregate* is a cluster of associated objects that we treat as a unit for the purpose of data changes

__Example__

 Because Provenance requires a Fact in order to be meaningful, Fact and Provenance may be grouped together into a Fact aggregate, served from a single FactRepository. Another way to think about this is to consider how the data will be accessed. It is unlikely we would have a page per Provenance entry; it's just too fine grained to be useful. More likely is that at the lowest level there is a page per Fact, with the relevant Provenance listed as a form of "history". We would also not expect external systems to reference individual entries of Provenance, but they may reference a specific Fact.

With that in mind, here is what an interface to FactRepository might look like:

```
class FactRepository:
	def add_entry_facts(self, entry)
        "add all facts from the provided entry to the repository"

	def find_by_resource(self, resource_hash)
        "return all facts that were contained in the specified resource"

	def find_by_entity(self, entity_ref)
        "return all facts relating to the specified entity"
```

## Decision

Use the [repository pattern](https://martinfowler.com/eaaCatalog/repository.html)

## Consequences

 - This facilitates unit testing where the repository can be replaced with an in memory store and easily populated with test data.
 - It provides a readable interface to the underlying collections
 - Once in place, it is important that the repository is the only channel through which data is written or updated for a given aggregate
 - It enables easier transition to different storage technologies
