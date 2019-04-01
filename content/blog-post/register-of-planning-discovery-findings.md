---
title: "Register of planning application data: Discovery findings"
date: "2019-03-07T12:00:00+00:00"
author: "Mike Thompson"
status: alpha
description: >
  After six weeks of discovery, we summarise the key findings from our work and where we're planning to go next in alpha.
related:
  - /project/single-register-of-planning/
---

_mySociety is working with MHCLG on a Discovery and Alpha project to research, prototype, and test ways to make data around planning applications more open, accessible, sustainable, and trustworthy._

We’ve spent the first six weeks of this project getting to grips with the domain of planning applications. We started by looking at [what other people and organisations have done](https://digital-land.github.io/blog-post/a-short-history-of-planning-application-data-projects/) in this area already and then moved on to talking to as many people as we could, with an aim of exploring a number of different topics:

* user needs for planning application data, with a particular focus on the PropTech sector
the high-level concepts that are being modelled in the data
* planning application data flows and systems
* technical constraints and capabilities of the underlying systems

We’ve so far talked to about 28 different people: 6 planning experts across MHCLG, GLA, LGA and Future Cities Catapult, 8 planning and technology staff at local authorities, 8 PropTech companies, 3 citizen experts (and corresponded with a couple more) and 3 system providers.

From these conversations, we’ve identified six main findings that relate to our work and will inform what we do next. In brief they are:

1. A planning application relates to a specific development, but there’s a **dearth of data on the development itself**. We think this can be addressed to an extent by making sure more data is collected in a structured format from the applicant which can then flow into the back office planning systems.
2. It’s **essential that UPRNs and site boundary data are released openly** with planning application data in order to tie together planning submissions for the same site and to allow data to be connected up with other geographic datasets.
3. Scraping data isn’t a sustainable solution for this project and doesn’t fix the underlying issues with the data. **We need local planning authorities to publish a feed** or an extract of structured data.
4. Local planning authorities often lack the time and technology needed to set up automatically updating feeds of data. **We need the technology they use to solve this problem for them** so there’s as little additional burden placed on them as possible and they can focus on running the service.
5. Conditions placed on planning applications can limit what can be done on a site in future as well as mandating things that need to be done as part of a development, but this information is currently held only in decision notices. In the future (but not as part of this project), **local planning authorities should look at turning conditions into structured data** that can be used to understand where development rights have been removed and help understand the progress of a development.
6. Understanding progress of a development towards completion is a tricky challenge at the moment, with no one data source good enough to rely on. Building control completion records seem as if they ought to be the answer here, but aren’t comprehensive enough. **Getting accurate data on completion will continue to require manual work** unless building control data can be made more reliable, such as through statutory intervention.

Having finished our discovery, our focus is now on a few different areas:

* Creating a draft data model and getting feedback on this from local planning authorities and re-users of the data to evaluate its feasibility and understand how well it meets people’s needs.
* Working with technical providers of planning systems to understand different options for making it easy for LPAs to provide this data.
* And based on these, exploring different options for how to make data available: whether data feeds are surfaced locally where the data is being held and managed, or automatically aggregated into a central collection.

That’s the summary; read on for the full details.

## 1. The development itself is poorly modelled by systems and processes

When we asked re-users of planning application data why they’re interested in it and what they use it for, top of the list is understanding what the development actually is: is it a change of use, demolition, or development of new homes? How many homes? With how many bedrooms? How much floorspace is there going to be for different uses? And so on.

If you’re only interested in one development at a time, and you’re a glutton for punishment, you can get all of this by reading through the PDF submissions. But if you want to do any kind of aggregate analysis, or build a service that exposes this data, you’re stuck.

The reason for this is that the systems currently focus on modelling the planning application itself and the process of reviewing and deciding it, rather than the development.

Even where fields exist to store this information they’re often not filled in as there is no utility for planning officers in having access to the data in a structured format, and no statutory requirement (yet) to publish this data.

We think (as does a [similar project the GLA is running](https://london.gov.uk/what-we-do/planning/london-plan/london-development-database/london-development-database-automation-project)) that the answer is to get more data on the development up front from the applicant which can then flow through the whole system from submission through systems like the Planning Portal (other brands of submission system are available), through the back office systems that receive the submission and into automatic data feeds or extracts.

## 2. Hard to link together planning submissions without UPRN and site polygons

A planning application might sound like it’s just one thing, but one development could have anywhere from one to hundreds of individual submissions relating to it, each treated separately by planning systems.

These submissions could be an initial outline application seeking agreement in principle for a development; a reserved matters application describing design, materials and access; a full application with detailed plans; or a submission of details describing an archaeological survey.

While back office systems do sometimes offer the ability to link related applications, this is a manual process that often isn’t done, making it very difficult for anyone browsing their public facing interfaces to connect these submissions up and get the full story of a development. This limitation is present in the underlying data as well.

Unless back office systems start to model developments in their own right, the only way to connect submissions together is through a combination of UPRNs (Unique Property Reference Numbers) and site boundary data.

Each of these has their limitations for this purpose (more on this in future), but both are essential pieces of data to release to help piece together the story of a development. They’re also very powerful for linking planning application data up with other address-based or geographic datasets.

## 3. Scraping data doesn’t solve any of the underlying problems

At the moment, if you want to get your hands on planning application data from local planning authorities, the only way of getting it is scraping it from planning authority websites or buying it from commercial providers (who are themselves scraping, often in combination with people processing it by hand).

Scraping is a messy business that requires constant attention and development time to keep everything running. If you can make the economics stack up, it can be fine, but it makes a lot less sense when you’re central government and have access to other mechanisms for getting hold of data.

More fundamentally though, scraping does nothing to solve the issues that exist with the underlying data, such as challenges tying submissions together, getting access to richer geographical data, or understanding more about the nature of the development.

The only sensible option for the future for MHCLG is to help local planning authorities to release data themselves in a common format that can be aggregated together into a central source.

## 4. Planning authorities often lack the time, technology and experience needed to produce extracts

We’ve spoken to a range of different authorities, some with experience of creating planning application data extracts and some without. The ones who do publish data on an ongoing basis are, in the absence of built-in functionality to provide data feeds, setting up their own data pipelines. These pipelines automate a regular task to extract the underlying data direct from the database and pull that into a specialised data publishing system which then makes a feed available.

In 2014-2015, the LGA ran their [open data incentive scheme](https://incentive.opendata.esd.org.uk/) which tried, among other things, to get more local authorities publishing at least a one-off extract of planning application data against their data standard in exchange for £2,000 and with some technical support. Even with cash on offer and technical support available only 70 published data that was accepted as valid, and most of these were one-off extracts.

Many LPAs just do not have the time or technology, and sometimes lack the expertise, to set up their own pipelines.

To get to a point where every planning authority is releasing planning application data regularly and sustainably we need the technology around them to make it as easy as possible for them, with minimal additional burden, so they can focus on delivering the service.

## 5. Planning conditions are locked up in PDF files

When a planning application is granted by a planning authority, it may be granted with conditions. For example, that an ecological survey is performed before work begins; or that works to enhance roads and access are completed before anyone occupies a development.

Some conditions placed on a development can have implications for future owners. For example, an application to build a garage may be granted with the condition that the garage is never converted into, for example, a home office (without full permission being sought). A future buyer of the property may have this exact scenario in mind, and will only find out that this option has been removed by reading through the decision notice of the historic application.

Planning conditions are currently described as fairly legalistic paragraphs of text in the decision notice. If planning conditions were made available as structured data, it would be easier to see where permitted development rights have been removed and, by monitoring the approval of submissions in response to conditions, get a sense of the progress of a development, as in this recent [Future Cities Catapult prototype](https://futurecities.catapult.org.uk/press-release/digitising-the-planning-system-post-permission-planning/).

We don’t think this is a realistic ambition in the short term, but as the planning system as a whole becomes more digital and less document-centric, back office system providers should start to offer this kind of capability.

## 6. Completion data is a problem worthy of investigation in its own right

Permission is one thing, whether any work has been done and what’s actually been built are something else entirely. It turns out that there’s no one good source of completion data, although there’s no shortage of promising-looking proxies: parking permit applications, bin collection requests, registration of new addresses, discharge of planning conditions, even computer vision techniques on aerial imagery of building sites.

This situation is all the more confusing when you realise how many local authority services or processes (including revenue generating ones) depend on good data around building completions: for example council tax, bin collections, road naming and numbering, population estimations and demand planning.

The single best potential source we found in our conversations is building control data, which also has the theoretical advantage of often being managed in the same system as planning application data, although they appear not to be linked to each other.

One team we spoke to that collects completion data for major developments across a whole county, on behalf of all the districts and boroughs within it, estimates that there’s a 20% shortfall between building control data extracts and reality, a gap that can only be reconciled through site visits.

It’s hard to imagine how this situation could be sorted out without some fundamental changes in requirements placed on local authorities around the collection and publication of building control data.

This is also another example of where if the systems modelled the development itself and were planned at a more strategic level, the development could be used to tie together both data on planning submissions and building control records. As with planning conditions, we don’t think this is realistic in the short term but might be possible in future.

## What’s next?

As mentioned above, we’re now creating a draft data model, based very closely on the research we’ve performed, and will be getting feedback on this from local planning authorities and re-users of the data to evaluate its feasibility and understand how well it meets people’s needs. We’ll go into more detail about this model in [our next blog post](/blog-post/design-pattern-for-planning-permission-data/).

We’re also working with technical providers of planning systems to understand different options for making it easy for LPAs to provide this data. We know that any solution which places extra burden on local authorities simply isn’t going to work. So we’re keen to investigate what data is already being collected across a range of different authorities and software providers, and how that data could be exposed to re-users.
