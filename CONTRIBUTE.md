# Contribute

## What we are looking for

We are looking for examples of people doing interesting things in the housing and property spaces. In particular we are looking for projects where people are making use of related datasets.

For each project we are particularly interested in:

* What problem(s) they were try to solve.
* What data they used.
* What data they wanted to use.
* Where they found the data.
* In what state was the data they discovered.

## How to contribute

If you know of or working on a project you think is applicable then please let us know.

Follow the instructions below and submit a pull request.

### Create project dir

First, create a new project entry. To do so run:
```
hugo new project/<name-of-project>/index.md
```

This will create an empty project file. This file has 2 parts:

1. Front matter - this is where all the metadata about the project goes
2. Content - this is a short summary of the project

#### Example completed front matter

```
---
title: "Land insights"
date: 2018-05-15T14:59:57+08:00
draft: false
project_url: "https://www.landinsight.io/"
patterns: ["Info about a property", "Info about an area", "Better local plans"]
---
```

The *patterns* field is optional. We can complete this once we know a little about the project.

#### Example summary content

A brief description is what we are looking for here. Similar to:

```
LandInsight is a subscription service that helps users find and assess off-market land. It combines maps, data and tools to help discover new opportunities.
```

### Add an image

Please add an image to the */project* directory. Ideally a screenshot of the service.

This image should be a 3:2 ratio.

### Providing further

To add further information about the project please add a separate markdown file called ```creator-comments.md```.

Thank you. We do appreicate all contributions.