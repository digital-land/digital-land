# 3. Use the repository-pattern to access a database

Date: 2021-03-05

## Status

Proposed

## Context

Using the Repository pattern to interface with the database, allows decoupling of the application logic from the storage:

E.g.
```
class FactRepository:
	def add(self, fact)
	def find_by_resource(self, resource)
	def find_by_entity(self, fact_id)
```

## Decision

Use the [repository pattern](https://martinfowler.com/eaaCatalog/repository.html)

## Consequences

 - This facilitates unit testing where the repository can be replaced with an in memory store and easily populated with test data.
 - It enables easier transition to different storage technologies
 - It provides a readable interface to the underlying collections
