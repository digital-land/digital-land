---
title: "A design pattern for planning permission data"
date: "2019-04-02T12:00:00+00:00"
author: "Zarino Zappia"
status: alpha
description: >
  How we settled on design patterns as a way to encourage interoperability and data reuse, without forcing local authorities to generate planning data in yet another specialised standard.
related:
- /project/single-register-of-planning/
---

_mySociety is working with MHCLG on a Discovery and Alpha project to research, prototype, and test ways to make data around planning applications more open, accessible, sustainable, and trustworthy._

Our [Single register of planning](/project/single-register-of-planning/) project began as a response to a commitment made in the [Autumn 2017 budget](https://www.gov.uk/government/publications/autumn-budget-2017-documents/autumn-budget-2017#ensuring-that-planning-permissions-are-built-out-faster) to create a register of planning permissions across all planning authorities in England and Wales:

> The government will develop a central register of residential planning permissions from local authorities to improve information on where permissions are held and progress towards them being built out.

Much of our work so far has gone into understanding the [history of planning data projects](/blog-post/a-short-history-of-planning-application-data-projects/), and the [user needs and processes that exist around planning applications](/blog-post/register-of-planning-discovery-findings/) – for both local authorities and the businesses reusing and building upon the data.

What became clear during our research was that the value in planning permission data is contingent on its interoperability. It’s for this reason that we’ve seen so many attempts over the years to standardise planning data into a particular schema, or to extract and transform it into a single aggregated database.

There was a danger that our project—the “central register” of planning permissions—could have set off down one of these well-trodden paths too. The problem was, introducing _yet another_ standard into this space doesn’t fit the user needs we identified. And neither does developing a “sticking plaster” data aggregation service.

There are _already_ standards out there, with varying levels of adoption. There are already many diverse, incompatible planning authority systems out there. This inconsistency is the underlying pain point that the Autumn Budget identified. But attempting to fix this with either another competing standard—even one with the blessing of MHCLG—or a bolted-on scraping service, both feel like interventions at the wrong layer of the stack.

## Taking inspiration from the tech sector

In comparison to the clean, tidy world of government registers, software development is a wild west. The open-ended nature of programming languages implicitly permits almost infinite diversity in the solutions you can create for a given problem.

It’s for this reason that software developers often rely on “design patterns” to shape the things they build.

Design patterns are [evidence-based solutions to common design problems](https://www.gov.uk/service-manual/design/using-adapting-and-creating-patterns). They are like tried-and-tested blueprints you can use to immediately build efficiency or interoperability into your product.

The UK Government was one of the early leaders in researching and developing design patterns to help create a [“consistent, but not uniform”](https://gds.blog.gov.uk/2016/02/29/lets-talk-about-service-patterns/) experience of government services. For example, the design patterns in the [GOV.UK Design System](https://design-system.service.gov.uk/) are currently in action across a whole range of national and local government websites, making it easier for citizens to [enter their address details](https://design-system.service.gov.uk/patterns/addresses/), [declare their gender](https://design-system.service.gov.uk/patterns/gender-or-sex/), or [check eligibility for government services](https://design-system.service.gov.uk/patterns/check-a-service-is-suitable/).

Design patterns help government departments prototype and build services quicker, and help them strike a sensible balance between maintaining consistency for the end user and staying flexible enough to properly address the specific service or workflow at hand.

Each implementation of a design pattern might look slightly different, but the underlying concept, and the research and testing that went into developing that pattern, are still the same.

## A design pattern for planning application data

Given our experience of working with design patterns at mySociety, I started to wonder whether they might be a good fit for the data standardisation/aggregation dilemma we were facing in this project.

A design pattern would enable a level of interoperability between standards, without introducing yet another mutually exclusive alternative. Just like the design pattern that ensures [consistent email authentication for a wide range of government workflows](https://design-system.service.gov.uk/patterns/confirm-an-email-address/), a design pattern for planning application data would allow different standards—be they the [LGA’s 2014 schema](https://github.com/esd-org-uk/schemas/tree/master/PlanningApplications), or the [GLA’s 2019 draft](https://www.london.gov.uk/what-we-do/planning/london-plan/london-development-database/london-development-database-automation-project)—to diverge where required without losing the common heritage that would power data reuse.

But more than that, one of the key factors that differentiates the UK Government’s use of design patterns from most previous examples, is their practice of [sharing the research and design decisions that went into each pattern](https://designnotes.blog.gov.uk/2018/05/17/10-principles-for-service-patterns/), and inviting improvement and iteration from reusers. To software developers, this is nothing new – it’s practically the definition of “open source” development. But we’re excited to see whether we can employ the same open, iterative process to a design pattern for _data standards_, through this planning permissions project.

## Getting feedback

Last sprint, we took everything we’d learned in [our discovery phase](/blog-post/register-of-planning-discovery-findings/), and used it to define the “fields” and considerations that would make up a design pattern for planning application data.

[You can access a live working draft here.](https://docs.google.com/document/d/1Y7dFmLTtl4T1MNVIuFdjttME5lKUV8ZtpLovUQ-30U8/edit)

And this sprint, we shared the draft design pattern with representative users in local and central government, and the PropTech sector. The feedback has been incredibly positive.

> We love it. Can we have it now!?

> I think it’s brilliant. I showed it to our tech partner and he thought it was great too.

> We love what you’ve done here. It feels really achievable.

Some fields we thought were important turned out to have limited utility – while others flew under our radar until respondents pointed out they were missing.

> Maximum height of development is nice, but I’m not sure we hold that data for all applications.

> What about the _type_ of change, like extension / conversion / new build?

We know that a design pattern like this could never contain _every_ piece of information that anyone would want to know about a planning application. That’s why we’re looking very critically at how the fields we add will actually address user needs. Where possible, we’re favouring existing standards, and identifiers or URLs that will help people combine data prepared to this pattern with other, external datasets.

> The use of UPRNs here is really exciting. They’ll make it much easier to find applications for a specific property.

> I wonder whether you could include the Land Registry Title Number? Householders might not know it, but it’d help connect planning application records to addresses?

## What next

Our aim is to continue to share the design pattern more widely, especially with an eye on how it can interact with public policy, to encourage adoption and consolidation among existing standards and systems.

We’ll then test the pattern with real data from a sample of local authorities across the country. What issues do we face extracting geographical data, for example? Are there any fields that simply aren’t achievable with the current planning management systems?

We’re also beginning to prototype a very lightweight layer of technology that would enable MHCLG to collect, validate, and index the data contributed by planning authorities, so that re-users can access it in one, standardised, convenient feed.
