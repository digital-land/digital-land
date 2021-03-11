# Bots

## GitHub

The [`digital-land-bot`](https://github.com/orgs/digital-land/people/digital-land-bot) user associated with our GitHub organisation is used to do work in CI workflows. Any commits made automatically by CI (collectiong and building a dataset, for example) are assigned to this user.

Paul Downey has the credentials.


## Slack

### Official GitHub App

The official [GitHub Slack App](https://communities-govuk.slack.com/apps/A8GBNUWU8-github) is used to provide organisation wide notifications of commits, pushes, PRs and deployments. It writes these messages into the `#dl-github` channel.

### Custom Integration

A custom integration to GitHub also exists to provide more specific tasks not covered by the offical app. The [`dl-github-actions`](https://api.slack.com/apps/A01LZ37D1DH) Slack user is used in two ways to provide Slack notifications for certain GitHub events;

#### 1) GitHub Workflows

Within our standard GitHub workflow files we push messages to `#dl-github` notifying the start and end of each workflow together with it's status.


#### 2) GitHub Workflow Scraper

[see the code](https://github.com/digital-land/github-build-checker)

Another mechanism was introduced in order to ensure we are quickly informed of workflow failures, even in cases where we have not added a specific hook to the workflow. This is belt-and-braces solution that runs itself as a GitHub action, each hour during the working day. It uses the GitHub API to find all active workflows within the `digital-land` organisation and checks the status of each in turn. Any whose last build failed are pushed to the `#dl-developers` channel via the `dl-github-actions` Slack user, for immediate attention.
