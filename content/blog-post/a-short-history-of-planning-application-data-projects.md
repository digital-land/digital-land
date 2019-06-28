---
title: "A short history of planning application data projects"
date: "2019-02-12T12:00:00+00:00"
author: "Mike Thompson"
status: alpha
description: >
  People have been working on planning application data projects for over 10 years, from individual hackers, to local government and commercial providers. We summarise some of these initiatives and look at the challenges ahead for this project.
related:
  - /project/single-register-of-planning/
---

_mySociety is working with MHCLG on a Discovery and Alpha project to research, prototype, and test ways to make data around planning applications more open, accessible, sustainable, and trustworthy._

One of the things we were struck by as we started this project was by how much work has already happened in this area. So, we thought it might be useful to document some of this history, for anyone else who might travel this way in future.

## Planning Alerts UK

Perhaps the first project that attempted to open up planning data was a service called PlanningAlerts created in late 2006 by Richard Pope, and hosted for a time on mySociety servers. PlanningAlerts had a simple concept: tell people about planning applications near them that they might care about, irrespective of planning authority boundaries.

A revealing quote from a [2007 Guardian article](https://www.theguardian.com/technology/2007/jan/25/freeourdata.localgovernment) on the project said:

> Though it's only got 40-odd of the 387 planning authorities, Pope is confident that adding more will be easy: "Councils only use three or four off-the-shelf packages to put their data up." Ultimately, he suggests that councils should also provide a data feed to end the need to scrape the relevant text off their websites. That would be an ideal endpoint, fulfilling everyone's requirements at once.

It’s rather chastening that it’s now 2019 and we’re still not there yet.

## Planning Alerts Australia

Planning Alerts UK [was ultimately retired](https://countculture.wordpress.com/2011/10/10/planningalerts-is-dead-long-live-planningalerts/) due to the amount of time needed to maintain the many scrapers that provided the underlying data. But out of its legacy, its open source codebase, and the hard work of Matthew Landauer and Katherine Szuminska (and [many others](https://www.planningalerts.org.au/about#contributors)) came [PlanningAlerts.org.au](https://www.planningalerts.org.au). Run by the [Open Australia Foundation](https://www.oaf.org.au/), the site is still flourishing today (it covers 72% of Australia’s population) and sending emails to people about new planning applications near them.

## LGA open data incentive scheme

Roll on 2014, and the Local Government Association ran their [open data incentive scheme](https://incentive.opendata.esd.org.uk/) off the back of the open data push of the coalition government years.

They offered cash (£2,000) along with technical support to any local authority who wanted to release some planning application data according to the [schema that they defined](https://github.com/esd-org-uk/schemas/tree/master/PlanningApplications). 95 local authorities accepted the challenge, and 70 of them got their cash prize. A lot of these releases can still be found on [data.gov.uk](https://data.gov.uk/search?q=planning+applications) and although many are static snapshots, [some](https://data.gov.uk/dataset/d997986f-54d0-4752-b450-d0f08894a9d8/planning-applications) are [still](https://data.gov.uk/dataset/b046881f-b699-4629-91cd-93397f619a41/planning-applications) live feeds.

There were two particularly notable projects related to this scheme. The [Surrey Planning Hub](http://digitalservices.surreyi.gov.uk/) automatically aggregated planning application data feeds from the districts within Surrey and provided it through an API. The [Hampshire Hub](http://blog.swirrl.com/articles/hampshire-hub/), now sadly no longer with us, attempted to do the same for Hampshire but in a linked format. mySociety had some involvement with this: we [built a prototype](https://www.mysociety.org/2014/09/30/making-planning-applications-more-open-with-the-hampshire-hub-partnership/) (itself based on the Planning Alerts Australia codebase) to show householder applications on a map and make it easy for people to browse through them.

## Other providers

In the absence of definitive action by central and local government in this area, other providers have stepped in to help the various different organisations who need this data.
* Commercial providers like [Glenigan](https://www.glenigan.com/our-products/marketing-planning/) and [LandInsight](https://www.landinsight.io/api) scrape the data from local authority websites and provide both access to the data and services built on top of it.
* Independent operations like [PlanIt.org.uk](http://planit.org.uk/) run by Andrew Speakman, [Planning Finder](https://planningfinder.co.uk/) run by Archant Media, and Adrian Short’s [open source code](https://github.com/adrianshort/uk_planning_scraper/) all scrape the data and provide it free to the public and other organisations who want to use it.

## What can the public sector do now?

Here we are in 2019, and many different people in the public sector are once again looking at this area. We’ve been trying to talk to as many of them as we can to find opportunities to share knowledge and approaches:

* The [London Development Database Automation Project](https://www.london.gov.uk/what-we-do/planning/london-plan/london-development-database/london-development-database-automation-project) which is aiming to create a live hub of planning application data for all 35 planning authorities in London.
* [Hackney Council’s ICT Team](https://blogs.hackney.gov.uk/hackit/An-open-data-standard-for-planning-applications) are exploring the idea of an open data standard to support their work on digital planning applications.
* The [Future of Planning](https://futurecities.catapult.org.uk/project/future-of-planning/) programme at Future Cities Catapult has been painting a vivid picture of what a fully digital planning system could look like.
* The [London Borough of Southwark](https://localdigital.gov.uk/funding/london-borough-of-southwark-3/) planning team are conducting user research on how to create a scalable and useable back office planning system for case management.

From our conversations so far, it seems to us that the big questions for MHCLG as we progress with this project are:

* How do we get more structured data about planning applications—and the developments they relate to—flowing through the system from application through to approval?
* How do we help users of this data tie related planning submissions together and to other datasets they might be using?
* And perhaps hardest of all, how do we help the ~360 or so local planning authorities across England, with a variety of systems in use, and pressures on time and budget, to all release it in the same format?

These are hard problems, but wouldn’t it be great if we could finally meet the seemingly simple vision of 12 years ago?
