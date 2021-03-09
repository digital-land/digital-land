# 15. Write new tests at the lowest possible levels

Date: 2021-03-09

## Status

Proposed

## Context

Software testing can occur at different levels and different granularities. A well-developed CI pipeline will require a test suite that finds the balance between speed and coverage. Low level tests, such as unit tests, are fast to run and target a specific 'unit' of code. High level tests, such as end-to-end tests, focus on behaviour and application workflow. These tests have wider coverage but take longer to execute.  


## Decision

We should aim to test a feature or development extensively at the lowest possible levels. This will allow the test suite to remain fast. It will also increase the chance of catching issues earlier and making them easier to debug. This should not preclude us from adding high level tests where appropriate; often these will only need to cover a happy path scenario. 

See [here](https://martinfowler.com/articles/practical-test-pyramid.html#TheTestPyramid) for more details.

## Consequences


