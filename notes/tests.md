# Testing

This note covers the various levels of testing we have in our test suite.

## Unit Tests

Units tests focus on testing a single 'unit' of code. The definition of a unit can vary, but typically this test operates at the granularity of a single function or class. Some general principles we follow: 
* Each test should focus on a single scenario. Ideally this should be clear from the name, but if not, a description can help to describe the test case. 
* Tests should cover both happy path and edge case scenarios. 
* TestDoubles are used to replace dependencies and isolate the functionality that is being tested
* Tests should focus on the expected behaviour/output and not the implementation. There shouldn't be a need to test private methods.
* Tests should be independent. The order of tests should not matter as the state between tests should be reset. 

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
