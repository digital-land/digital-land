# Testing

This note covers the various levels of testing we have in our test suite.

## Unit Tests

Units tests focus on testing a single 'unit' of code. The definition of a unit can vary, but typically this test operates at the granularity of a single function or class. Some general principles we follow: 
* Each test should focus on a single scenario. Ideally this should be clear from the name, but if not, a description can help to describe the test case. 
* Tests should cover both happy path and edge case scenarios. 
* [TestDoubles](#test-doubles) are used to replace dependencies and isolate the functionality that is being tested
* Tests should focus on the expected behaviour/output and not the implementation. There shouldn't be a need to test private methods.
* Tests should be independent. The order of tests should not matter as the state between tests should be reset. 
* Tests should avoid disk access and reading from input files. Instead the test input should be encapsulated within the file containing the test.

## Integration Tests

Integration testing is used to test the interaction of separate components - this can be distinct parts of the same application, or an external service such as a database. Some general principles we follow:
* It is often better to fake/spy/mock a live external service. This allows the test to be quicker and predictable. 
* Aim to test the simplest possible 'integrations' first, i.e. between two components instead of multiple.

## End to End Tests

End to end tests are used to test a complete workflow of an application. These focus on high-level behaviour and are often slower to run. Some general principles we follow:
* E2E tests are normally only used to test critical workflows
* They have limited coverage and provide a 'sanity check' rather than a means to identify bugs or breakages
* Tests that compare against an expected output may need regular updating. It may be better to pick and choose elements of the output to verify 

## User Interface Tests

TODO

## Test Doubles

Test Double is a generic term for any case where you replace a production object for testing purposes.

There is a lot of confusion around the various types of Test Doubles. To ensure we have consistency we will use the definitions published by [Martin Fowler](https://martinfowler.com/bliki/TestDouble.html), originally defined by Gerard Meszaros;

* *Dummy* objects are passed around but never actually used. Usually they are just used to fill parameter lists.
* *Fake* objects actually have working implementations, but usually take some shortcut which makes them not suitable for production (an InMemoryTestDatabase is a good example).
* *Stubs* provide canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test.
* *Spies* are stubs that also record some information based on how they were called. One form of this might be an email service that records how many messages it was sent.
* *Mocks* are pre-programmed with expectations which form a specification of the calls they are expected to receive. They can throw an exception if they receive a call they don't expect and are checked during verification to ensure they got all the calls they were expecting.

## Writing Testable Code

* Try to use dependency injection when writing classes and methods. Loosely speaking, we should avoid creating complex objects within a class or method; instead the instantiated object should be provided (*injected*) to the class or method. 
* Further still, if only a small part of the object is used, try to pass in only the necessary components rather than the entire object. Ideally these components should be passed as native python types. 
* It may be possible to extract the logic from loops and other iterative code into testable functions. This provides a finer granularity for testing. 
