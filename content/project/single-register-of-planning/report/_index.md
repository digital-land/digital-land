---
title: "Discovery and alpha report"
status: alpha
type: project
pageFeedback: true
summary: We're working with mySociety to make planning application data more trustworthy and up to date, as well as easier to find and use.
layout: "single"
---

## Executive summary

This Discovery and Alpha project is rooted in a [commitment made](https://www.gov.uk/government/publications/autumn-budget-2017-documents/autumn-budget-2017#ensuring-that-planning-permissions-are-built-out-faster) in the Autumn 2017 budget to create a central register of residential planning permissions.

This report describes the work mySociety has done, in collaboration with the Digital Land team at MHCLG, to research, prototype, and test ways to make data around planning applications more open, accessible, sustainable, and trustworthy. It also includes our findings from the process, and our recommendations for future work in this space.


### What we did

The project began with research into how the planning system works, and what user needs exist around planning application data. We interviewed 25 people across different sectors and organisations, including local authority planning officers, central government policy specialists, the PropTech businesses that use planning data, and the providers of the back-office management systems used by planning authorities. We worked with these groups because they are the people that we and the Digital Land team at MHCLG identified during kick-off phase as the most likely users of planning permissions data. Our research investigated how users access planning data currently, how they use the data, and what they would need from a central source. These questions uncovered the user needs and pain points that people have with planning application data now.

We identified distinct user needs shared across multiple user groups, including identifying similar or related planning applications, analysing the speed of planning decisions, accessing previous planning history for a site, and population forecasting. The pain points included not being able to compare planning applications, lack of consistent data across different planning authorities, limited access to historical planning data, and missing geographical and condition data.

To address these user needs and pain points, we then developed a data design pattern for planning application data. A design pattern is a set of evidence-based practices that designers and developers use to build efficiency and interoperability into digital products. By creating a design pattern for planning data, we were taking inspiration from the Government Service Manual technique of using design patterns to influence sector-wide change and moving in line with the wider Digital Land strategy for making related datasets available. This data design pattern deliberately built on the LGA’s work from 2015–2016 (a schema to which many local authorities still publish) and also attempted to fit into the London Development Database schema currently under development at the GLA.

Based on the user needs identified in our discovery phase, the pattern also included additional fields about the development (such as the type of work being undertaken, and a breakdown of use classes and bedrooms being proposed) as well as a link to the decision notice, to act as a first step towards exposing condition data in the future.

We tested out the design pattern with our original user research participants, and compared it to existing planning application datasets that we were able to find or request from local authorities. This testing exposed some of the challenges involved in implementing the central register, and gave an indication of the work that will be required to expose the full set of data described in the design pattern.

We prototyped a translator/validator tool to further explore the challenge of consolidating the variety of datasets under a common pattern. The prototype uses an open standard called JSON Schema to demonstrate the feasibility of a simple translation mechanism for converting diverse structures into a single common set of fields.


### What we learned

We uncovered five key problems that relate to all of the user needs and pain points from our user research results.

#### Major user needs identified in our research:

* Identifying current status of and updates to a Planning Application over time
* Describing Planning Applications to others
* Identifying similar or related Planning Applications
* Staying informed about previous Planning Application decisions on a site
* Analysing the speed of planning decisions
* Identifying and tracking Planning Applications for potential or current investment properties
* Supporting better population forecasting in an area


#### Key problems currently interacting with these user needs:

The development itself is poorly modelled by current systems and processes

- A “development” is defined in the Town and Country Planning Act (1990) as "the carrying out of building, engineering, mining or other operation in, on, over or under land, or the making of any material change in the use of any building or other land." People seek planning permissions for specific developments. Planning systems are currently built around the submission and management of documents, rather than data about the underlying development itself. This lack of structured data makes it very hard to piece together the story of a development from among all the different submissions relating to it.

- In our alpha stage, we identified that the most valuable fields describing a residential development plan, such as floorspace per use class, and the breakdown of bedrooms per unit, are normally available in systems and modelled in 1APP—the online service for The Standard National Planning Application Form(s) by Planning Portal—but are not uniformly collected and not currently maintained in back office systems. In short: the structure is there, but the data isn’t.

Open geographic data is crucial for utility and reuse

- Data users told us polygons and UPRNs are key to understanding both what’s going on near a given location, and to tie together planning applications with other datasets, for the products and services they provide to investors, developers, and homeowners.

- However, current data feeds tend not to include geographic information, and certainly not polygons or UPRNs, because of licensing concerns. This seriously limits their usefulness. Geographic data is normally recorded by LPAs and accessible via their back office systems, often going back a number of years. It is imperative that this data is opened up, if any central data source is going to be a practical tool for users building PropTech products and services.

Local planning authorities need support to produce data feeds or extracts

- LPAs lack technical capability for complex data feed management and any approach to getting data out needs to be as easy as possible for them. It would also be prudent to allow some flexibility, so authorities with open data strategies can publish data in the way they have planned.

- We struggled to get LPAs to properly test the data pattern in our alpha stage. For many, engaging with the Alpha version of the pattern was too much of a time commitment without more support. LPAs have limited time and resources, and committing those to participate in research was not an attractive option. In addition, testing the pattern required using real data from their existing systems, which represented a large effort investment from some LPAs whose current systems do not have interoperability or conform to a standard, like the LGA schema.  Future work will need to carefully consider the incentives for local authorities to rework their data publishing workflows and to test out changes to the data pattern.

Scraping data is not enough

- Data scraping—the automated parsing and collection of data from unstructured sources—is currently employed both by established planning data brokers, and independent software developers and activists. But it’s slow, limited by the amount and quality of data available in the source, and fragile to changes in the source document format. Scrapers are expensive to develop, and costly to maintain, and typically have to be supported by manual checking and data input.

- Feedback from our research participants clearly showed that, if a central register of planning data is to be provided, it must be collected in a reliable, trustworthy manner, from LPA data sources following an agreed data pattern or schema.

A simple data pattern is more likely to be adopted

- The history of cross local government open data initiatives shows it’s hard to make change happen across the sector. Keeping complexity low is crucial to getting everyone to deliver a common level of data.

- We identified “design patterns”—already used by service designers to standardise government services—as one potential way to encourage LPAs to adopt or design technical schemas that provide at least a base level of useful planning data. Providing a tool that then translates from an LPA’s own approach to a common schema should help bridge from messy distributed reality to a single, consistent data source.

### What we recommend

After considering the needs of data users, the needs and skills of planning authorities, and MHCLG’s data strategy we have identified a number of interventions to make data available from all planning authorities across England.

The full approach is described in detail later in this report, but its main components are:

Extend the existing local planning registers

- Introduce a requirement to publish structured data as part of the existing statutory local planning registers. This would lead to the creation of decentralised data feeds, conforming to a common pattern. The location of these feeds should be shared with MHCLG. The imposition of a requirement like this may require additional burdens payments.

Facilitate the creation of back office system add-ons

- Use the reach and skills of system providers to develop these feeds so LPA skills and resources do not prevent large scale adoption. Allow authorities with more resources to publish their own feeds via open data platforms or other data publication tools.

Improve the flow of structured data

- Improve the flow of development data from planning submission portals into back office systems to minimise additional work for planning officers. Planning officers would need to check this data for accuracy and update it if it changes before an application is decided.

Require open publication of geographic data

- Planning application polygon and UPRN data should be published openly with an application to maximise the data’s utility and possibilities for reuse.

Provide an MHCLG-run central index

- Data users want a single, trustworthy place where they can to collect this data. MHCLG should provide this, and it is in line with the Digital Land mission to create single sources for users to collect and access other types of related data, such as developer contributions This central index should first collect data from the separate LPA sources, translate and validate them, and then provide interface that allows the exploration and download of this data.

### What should happen next

The final section of this report describes what we think should happen next and lays out a detailed list of questions we think need to be answered or explored in the next phase of work. The main aspects of this work are as follows:

Pilot the data pattern

- Work with a group of authorities of a mixture of sizes, technical skills and back office systems, but in geographic clusters to test the feasibility of publishing data in accordance with the data pattern. Both technical and planning staff from planning authorities would need to be involved. Planning authorities may need some kind of incentive to secure their involvement.

Test the data pattern feasibility

- Use the pilot to test the data pattern more thoroughly and explore the feasibility of other aspects of the pattern: ongoing data management requirements, data availability, feed publication options and challenges, and how best to work with suppliers.

Prototype additional technology

- Alongside the pilot, MHCLG could prototype elements of their central index to test how they would integrate with real LPA feeds, how validation and translation could work in practice and test how exploration and download of data would work through a central interface.


## Introduction


### Background

The Digital Land team at the Ministry of Housing, Communities and Local Government (MHCLG) is working to make it easier for people to find, access and trust the data underlying England’s housing market.

Access to reliable data on where planning permissions have been granted, rejected and built out is an important part of this work. mySociety have collaborated with the Digital Land team on a Discovery and Alpha project, to research, prototype, and test ways to make data around planning applications more open, accessible, sustainable, and trustworthy.

At the moment, finding and combining this data is challenging for a number of reasons:

*   While local planning authorities (LPAs) have a [legal obligation](http://www.legislation.gov.uk/ukpga/1990/8/section/69) to maintain their own register of planning applications and how they have been dealt with, there is no such legal obligation for provision of the underlying data.
*   Different LPAs use different systems that model data differently. As far as we can tell, these systems do not offer raw data access via public APIs.
*   Some authorities (e.g. [London Borough of Camden](https://opendata.camden.gov.uk/Environment/Planning-Applications/2eiu-s2cw), [Leeds City Council](https://datamillnorth.org/dataset/planning-applications-datamill)) extract and publish their planning application data regularly, but the vast majority of LPAs do not.

Property companies, government, other organisations and individual citizens look to access this data openly. This project has been set up to tackle these problems, and to begin the process of fulfilling a [commitment made](https://www.gov.uk/government/publications/autumn-budget-2017-documents/autumn-budget-2017#ensuring-that-planning-permissions-are-built-out-faster) in the Autumn 2017 budget to create a register of planning permissions.


### Objectives

Our goals for this project were to:

*   **Prototype:** Prototype how to make planning applications available as a collection of data in order to show how a beta system with more complete data could work.
*   **Inspire:** Create, or support the creation of, experimental prototypes of what can be done with this data, in order to demonstrate the potential value of making an open index of this data.
*   **Plan for scale:** Explore options for how to scale from a prototype to a production system, and the challenges that would need to be addressed, in order to show how to turn this into a sustainable solution.
*   **Share our approach:** Document and share our user research work, findings, prototypes and other outputs openly in order to gather wider input and feedback, and so others can learn from this work.


### Approach

The project was planned in two phases: Discovery and Alpha.

The Discovery phase was a period for user research and stakeholder consultations. Our focus initially was to draw on the work and experience of others who have spent time working on planning application data. In order to do that, we researched existing projects and platforms around planning application data, learned from people currently doing work in the field, and created a model of planning application data flows to help situate our work.

The Alpha phase was focused on creating a draft data design pattern and schema, then testing, getting feedback, and iterating that schema in response to user feedback. The open data design pattern and technical data schema prototype were based very closely on the research we performed in the Discovery phase. We sought feedback on this from local planning authorities and users of the data to evaluate its feasibility and understand how well it meets people’s needs. We also worked with technical providers of planning systems to understand different options for making it easy for LPAs to provide this data.

As part of the Alpha phase, we started to investigate in detail what data is already being collected across a range of different authorities and software providers, and how that data could be exposed to users.

## Discovery findings

### Introduction

We spent the first six weeks of this project getting to grips with the domain of planning applications. We started by looking at what other people and organisations have done in this area already. We then moved on to talking to as many people as we could, with an aim of exploring a number of different topics:

*   user needs for planning application data, with a particular focus on the PropTech sector
*   the high-level concepts that are being modelled in the data
*   planning application data flows and systems
*   technical constraints and capabilities of the underlying systems

To research these topics, we interviewed planning experts across MHCLG, GLA, LGA and Future Cities Catapult, planning and technology staff at local authorities, PropTech companies, citizen experts in the field, and back office system providers.

### User needs

All of the people we interviewed are regular users of planning data and have needs around access to data on planning applications and permissions. Through our research, the user needs we uncovered are:



*   Identifying current status of and updates to a Planning Application over time
*   Describing Planning Applications to others
*   Identifying similar or related Planning Applications
*   Staying informed of previous Planning Application decisions on a site
*   Analysing the speed of planning decisions
*   Identifying and tracking Planning Applications for potential or current investment properties
*   Supporting better population forecasting in an area

These user needs are clustered around issues of discoverability and interoperability. Users need to be able to find and access the data in order to identify similar applications, stay informed of historical decisions, and track applications. They need their own systems to be able to work with supplier systems and central systems in order to receive updates, publish new data, track metrics, and support forecasting reports.

In order to understand these user needs and the problems underlying them currently, we needed to create a domain model and a data model.


### A conceptual model of planning applications

A clear model of a domain is a necessary step in defining a data model. As we progressed through discovery, we tried to synthesise the different concepts that relate to planning applications and their relationships into a diagram.

[![](pa_model.png)](pa_model.png)

The diagram went through a number of different iterations, but the most up to date is shown above.

*   This diagram shows how a proposed **development** on a **site** requires the submission of **planning applications**.
*   The **development** allowed on a **site** is limited by the **constraints** (such as conservation areas, flood plains and tree preservation orders.) that apply to that site.
*   A **planning application** goes through a **decision process.** Applications that are rejected may lead to the submission of an **appeal**.
*   **Applications** and **appeals** that are approved may have **[conditions](https://www.designingbuildings.co.uk/wiki/Planning_condition)** and **[obligations](https://www.designingbuildings.co.uk/wiki/Planning_obligation)** placed on them that a developer has to discharge or comply with, which may involve the **submission of details** and which in turn affect the nature of the **development**.
*   Any changes to the **development** after permission is granted may require the submission of **variations** or **amendments** which themselves go through a **decision process**.

### Key findings

Through the Discovery phase, we identified six main findings that relate to our work. These findings are linked to the user needs and informed our prototyping and development during the project Alpha phase, as well as our recommendations for a possible Beta roadmap. These are outlined in brief, then discussed in detail below.

In brief they are:

1. A planning application relates to a specific development, but there’s a **dearth of data shared about the development itself**, such as floorspace per use class or the breakdown of bedrooms per unit. Specific data about the development is relevant to user needs about identifying similar applications, for example. We think this can be addressed to an extent by making sure more data is collected in a structured format from the applicant which can then flow into the back office planning systems.
2. It’s **essential that UPRNs and site boundary data are released openly** with planning application data in order to tie together groups of multiple planning submissions for the same site and to allow data to be connected up with other geographic datasets.
3. **Scraping data isn’t a sustainable solution** for this project and doesn’t fix the underlying issues with the data. We need local planning authorities—or their software providers— to publish a feed or an extract of structured data.
4. **Local planning authorities often lack the time and technology** needed to set up automatically updating feeds of data. We need the technology they use to solve this problem for them so there’s as little additional burden placed on them as possible and they can focus on running the service.
5. Conditions placed on planning applications can limit what can be done on a site in future as well as mandating things that need to be done as part of a development, but this **information about conditions is currently held only in decision notices**. In the future (but not as part of this project), local planning authorities should look at turning conditions into structured data that can be used to understand where development rights have been removed and help understand the progress of a development.
6. Understanding progress of a development towards completion is a tricky challenge at the moment, with no one data source good enough to rely on. Building control completion records seem as if they ought to be the answer here, but aren’t comprehensive enough. **Getting accurate data on completion** will continue to require manual work unless building control data can be made more reliable, such as through statutory intervention.

**Finding 1: The development itself is poorly modelled by systems and processes**

When we asked users of planning application data why they’re interested in it and what they use it for, top of the list is understanding what the development actually is. Is it a change of use, demolition, or development of new homes? How many homes? With how many bedrooms? How much floorspace is there going to be for different uses? And so on.

If you’re only interested in one development at a time—for example, because you want to know the planning history of a property you’re buying or selling, or you want to know what future development might be allowed on a specific site—and you don’t mind putting in a lot of manual effort, you can get all of this by reading through the PDF submissions. But if you want to do any kind of aggregate analysis, or build a service that exposes this data, you’re stuck.

The reason for this is that the systems currently focus on modelling the planning application itself and the process of reviewing and deciding it, rather than the development.

Even where fields exist to store this information they’re often not filled in as there is no utility for planning officers in having access to the data in a structured format, and no statutory requirement (yet) to publish this data.

We think (as does a [similar project the GLA is running](https://london.gov.uk/what-we-do/planning/london-plan/london-development-database/london-development-database-automation-project)) that the answer is to get more data on the development up front from the applicant which can then flow through the whole system from submission on the Planning Portal, through the back office systems that receive the submission and into automatic data feeds or extracts.

**Finding 2: Hard to link together planning submissions without UPRN and site polygons**

A planning application might sound like it’s just one thing, but one development could have anywhere from one to hundreds of individual submissions relating to it, each treated separately by planning systems.

These submissions could be an initial outline application seeking agreement in principle for a development; a reserved matters application describing design, materials and access; a full application with detailed plans; or a submission of details describing an archaeological survey.

While back office systems do sometimes offer the ability to link related applications, this is a manual process that often isn’t done, making it very difficult for anyone browsing their public facing interfaces to connect these submissions up and get the full story of a development. This limitation is present in the underlying data as well.

Unless back office systems start to model developments in their own right, the only way to connect submissions together is through a combination of UPRNs (Unique Property Reference Numbers) and site boundary data.

Each of these has their limitations for this purpose (more on this in future), but both are essential pieces of data to release to help piece together the story of a development. They’re also very powerful for linking planning application data up with other address-based or geographic datasets.

**Finding 3: Scraping data doesn’t solve any of the underlying problems**

At the moment, if you want to get your hands on planning application data from local planning authorities, the only way of getting it is scraping it from planning authority websites or buying it from commercial providers (who are themselves scraping, often in combination with people processing it by hand).

Scraping is a messy business that requires constant attention and development time to keep everything running. If you can make the economics stack up, it can be fine, but it makes a lot less sense when you’re central government and have access to other mechanisms for getting hold of data.

More fundamentally though, scraping does nothing to solve the issues that exist with the underlying data, such as challenges tying submissions together, getting access to richer geographical data, or understanding more about the nature of the development.

The only sensible option for the future is for MHCLG to help local planning authorities release data themselves in a common format that can be aggregated together into a central source.

**Finding 4: Planning authorities often lack the time, technology and experience needed to produce extracts**

We’ve spoken to a range of different authorities, some with experience of creating planning application data extracts and some without. The ones who do publish data on an ongoing basis are, in the absence of built-in functionality to provide data feeds, setting up their own data pipelines. These pipelines automate a regular task to extract the underlying data direct from the database and pull that into a specialised data publishing system which then makes a feed available.

In 2014 / 2015, the LGA ran their [open data incentive scheme](https://incentive.opendata.esd.org.uk/) which tried, among other things, to get more local authorities publishing at least a one-off extract of planning application data against their data standard, alone or with some technical support, in exchange for £2,000. Even with cash on offer and technical support available, only 70 authorities published data that was accepted as valid, and most of these were one-off extracts.

Many LPAs just do not have the time or technology, and sometimes lack the expertise, to set up their own pipelines.

To get to a point where every planning authority is releasing planning application data regularly and sustainably, we need the technology around them to make it as easy as possible, with minimal additional burden, so they can focus on delivering the service.

**Finding 5: Planning conditions are locked up in PDF files**

When a planning application is granted by a planning authority, it may be granted with conditions. For example, a condition that an ecological survey be performed before work begins; or that works to enhance roads and access be completed before anyone occupies a development.

Some conditions placed on a development can have implications for future owners. For example, an application to build a garage may be granted with the condition that the garage is never converted into, for example, a home office (without full permission being sought). A future buyer of the property may have this exact scenario in mind, and will only find out that this option has been removed by reading through the decision notice of the historic application.

Planning conditions are currently defined in fairly legalistic paragraphs of text in the decision notice. If planning conditions were made available as structured data, it would be easier to see where permitted development rights have been removed and, by monitoring the approval of submissions in response to conditions, get a sense of the progress of a development, as in this recent [Future Cities Catapult prototype](https://futurecities.catapult.org.uk/press-release/digitising-the-planning-system-post-permission-planning/).

We don’t think this is a realistic ambition in the short term, but as the planning system as a whole becomes more digital and less document-centric, back office system providers should start to offer this kind of capability.

**Finding 6: Completion data is a problem worthy of investigation in its own right**

The LPA giving planning permission to a development is one thing, but whether any work has been done and what’s actually been built are something else entirely. It turns out that there’s no one good source of completion data, although there’s no shortage of promising-looking proxies: parking permit applications, bin collection requests, registration of new addresses, discharge of planning conditions, even computer vision techniques on aerial imagery of building sites.

Our research showed that this completion data would be incredibly useful, not only to businesses whose services depend on knowing which permissions have been translated into physical buildings, but also to the LPAs themselves – many local authority processes (including revenue generating ones) depend on good data around building completions: for example knowing when to charge council tax, when to collect bins from properties, how to name and number roads, and how to estimate population plan for demand.

The single best potential source we found in our conversations is building control data, which also has the theoretical advantage of often being managed in the same system as planning application data, although they appear not to be linked to each other.

One team we spoke to that collects completion data for major developments across a whole county, on behalf of all the districts and boroughs within it, estimates that there’s a 20% shortfall between building control data extracts and reality – a gap that can only be reconciled through site visits.

It’s hard to imagine how this situation could be sorted out without some fundamental changes in requirements placed on local authorities around the collection and publication of building control data.

This is also another example of where if the systems modelled the development itself and were planned at a more strategic level, the development could be used to tie together both data on planning submissions and building control records. As with planning conditions, we don’t think this is realistic in the short term but might be possible in future.

## Alpha: A planning application data pattern

### Introduction

What became clear during our research was that the value in planning permission data is contingent on its interoperability. It’s for this reason that we’ve seen so many attempts over the years to standardise planning data into a particular schema, or to extract and transform it into a single aggregated database.

Our discovery findings, however, also revealed the drawbacks of both the standards and scraping approaches.

Standards can be slow and costly to implement. Each new standard adds complexity to the field, as standards effectively compete for mindshare amongst local authorities and software providers. There are already standards out there, with varying levels of adoption. We were unconvinced that adding our own new standard to the mix—without it being mandated in legislation—would actually help achieve the goal of collecting and publishing data from every planning authority in England.

Meanwhile, we’ve seen how scrapers for local authorities’ planning application web portals are both fragile and costly to maintain. The variation in source data formats (for example, the many different ways that local authorities describe their decision categories) means scraper writers have to make subjective decisions about how to compare and combine the data into a common standard. No amount of scraping can make up for the fact that some of the most valuable data, such as geographic data and data about the nature of a development, is often missing from the source webpages to begin with.

Faced with this dilemma—the need to introduce consistency across the field, while avoiding ‘yet another standard’ or a fragile scraper system—we drew comparisons with the software development world, and the use of “design patterns” to build consistency into end-user software and web services.

Design patterns are[ evidence-based solutions to common design problems](https://www.gov.uk/service-manual/design/using-adapting-and-creating-patterns). They are like tried-and-tested blueprints software designers and developers use to immediately build efficiency or interoperability into their products.

Each implementation of a design pattern might look slightly different, but the underlying concept, and the research and testing that went into developing that pattern, are still the same.

The UK Government was one of the early leaders in researching and developing design patterns to help create a[ “consistent, but not uniform”](https://gds.blog.gov.uk/2016/02/29/lets-talk-about-service-patterns/) experience of government services. For example, the design patterns in the[ GOV.UK Design System](https://design-system.service.gov.uk/) are currently in action across a whole range of national and local government websites, making it easier for citizens to[ enter their address details](https://design-system.service.gov.uk/patterns/addresses/),[ declare their gender](https://design-system.service.gov.uk/patterns/gender-or-sex/), or[ check eligibility for government services](https://design-system.service.gov.uk/patterns/check-a-service-is-suitable/).

Design patterns help government departments prototype and build services quicker, and help them strike a sensible balance between maintaining consistency for the end user and staying flexible enough to properly address the specific service or workflow at hand.


### Developing a design pattern for planning application data

Working with our conceptual model of the planning process, and our understanding of the types of data that PropTech companies would find most valuable, we began iterating a design pattern for how planning authorities should publish planning application data.

Our hypothesis was that a design pattern could help ensure local authorities’ existing data feeds included the most useful, valuable data about planning applications, without forcing adoption of another specific standard.

Our design pattern draft gave a brief overview of how a data collection / aggregation service might work (based around the workflow of planning authorities delivering or exposing a regular extract of data, from their systems, to a central service operated by MHCLG) and then identified roughly two dozen fields that should be included, with information about why they are important and how they should be structured.

You can [read the latest draft of the design pattern here](https://docs.google.com/document/d/1Y7dFmLTtl4T1MNVIuFdjttME5lKUV8ZtpLovUQ-30U8/edit).

We published the draft online, along with a set of questions we were actively investigating about it, and re-contacted our Discovery phase participants to get their feedback on the design pattern.


#### Feedback from software providers

Our main question for software providers was whether their systems provide access to the data in the design pattern. Especially:



*   Data about decisions – including the format/categorisation they use for the decision result, and the level of detail they hold on the decision details and any conditions defined.
*   Geographical data – in particular, site boundary polygons and UPRNs.
*   Data about the development – including the type of development (for example “change of use” versus “new build”) and what level of detail they hold about the use classes and units proposed in a planning application, including factors like number of bedrooms per residential unit, or physical height of each unit.

To our surprise, the software providers were optimistic about the availability of the majority of the data in the design pattern. They did, however, identify a number of issues:



*   Their systems do store conditions in a structured format (and planning officers are able to “build” a decision by pulling in conditions from a standard library for that authority, or by adding custom conditions specific to that application) but presenting those conditions as a list could be misleading. In their experience, planning decisions are written as textual documents, and attempting to decompose them into their constituent parts runs the risk of changing or misrepresenting the authority’s original decision.
*   Their systems _usually_ have access to all the geographical data we require, such as UPRNs and boundary polygons – whether those are stored in the planning back office system itself, or in a separate GIS product.
*   Data about development categories and use classes _can_ be stored in their systems, but, in their experience, this information often isn’t filled in by the applicant or the planning officer.


#### Feedback from local authorities

The feedback we received from local authorities focused on interoperability, licensing and access issues, and the data publishing process.

**Interoperability**

The local authorities we spoke to were excited about the design pattern and its simplicity. In general, they appreciated the design pattern’s narrow focus, and could appreciate that it was attempting to extract only the most valuable data, as a first step towards better interoperability in the future. There were some data types that we initially thought would be necessary in the design pattern, that we later edited out of the pattern in order to focus on interoperability and the most essential data. For example, the maximum height of the development—something mentioned by one of the PropTech firms we talked to—was pointed out by multiple research participants as a piece of data that councils frequently would not hold in a reusable digital format, so we made the decision to drop that from the design pattern.

**Licensing and access**

As with the software providers, we asked local authorities whether they hold the data in the design pattern. A common fear from them was over licensing and permissions for publishing geographical data. It’s clear that, if MHCLG wants to encourage local authorities to share geographical data about planning applications, it’ll need to present clear evidence that local authorities are allowed to share that data, and under what terms.

The ability to actually access the requested data was another potential issue they foresaw. As one of the planning officers put it: “Yes, we probably hold all of this data. But whether it’s _accessible_ though, or even _structured_, that’s another matter.”

We were again warned that much information is provided only inside documents uploaded as part of the application process, and therefore is inaccessible to automated data exports. Detailed breakdowns of housing units, for instance, and details about the decision and conditions, were cited as items that could not be universally relied upon to be available in a structured and accessible format.

**Publishing process**

We were interested in testing whether we could encourage local authorities to share planning application data by bundling it up with other reports or submissions they have to make anyway – for instance, the PS1 and PS2 returns they have to submit, quarterly, to MHCLG. There was a chance that, if the local authority took a significant amount of time to generate these returns, we could encourage them to publish their source data automatically, and have the returns automatically compile themselves. However, none of the councils we talked to expressed an interest in this – either their software already compiled their PS1 and PS2 returns automatically, or they were happy devoting a few hours to manually creating the reports every 3 months.

We asked local authority officers how they’d expect to share the data we were asking for, and those that had a view said they’d expect to push files to MHCLG (eg: via FTP, or email) rather than hosting a data feed on their own website. However, if the data feed hosting was built into their existing planning application portal (for example, via an update from their software provider), we expect they wouldn’t have an issue with that.


#### Feedback from users

The feedback we received from users focused on publishing geodata and the specifics of updates and filtering.

**Geodata (polygons/UPRNS)**

PropTech businesses were very excited about the design pattern. They cited the simplicity of the model, and the inclusion of geodata, as its two key selling points. In getting their feedback, we once again heard how they would use boundary polygons and UPRNs to help find planning applications for a particular property – either stitching together the various applications that made up a single large-scale “development” or finding subsequent applications over a long time period.

It’s worth noting that a number of the businesses we talked to didn’t use UPRNs because of the cost of licensing – often opting instead to use some combination of Royal Mail’s Postcode Address File and UDPRNs. For these businesses, the inclusion of accurate boundary polygons or centroids was even more important. Everyone we spoke to was happy with our suggestion of WKT as a format for the boundary shapefile data – it’s a fairly well known standard, supported natively by databases like MySQL, and it’s easily encapsulated in a single cell of a CSV, unlike Shapefiles which require multiple, separate files.

One user wondered whether we could include Land Registry title numbers, as another means of matching up planning applications with external datasets. Our understanding is that title numbers aren’t often used in the planning permission workflow, but this could be something to investigate in the future.

**Updates and filtering**

We confirmed that most users would be happy with the data updating daily. One or two said they’d value instant updates, as soon as the application changes in the local authority’s BOMS, but admitted this was a “nice to have.”

We also received feedback from  data users about what kind of filtering they would like to see on a feed of data. For example, to help consumers of the data quickly filter to only the applications they’re interested in, we added “Consent type” and “Development type” fields to the design pattern. We also used feedback from this stage to clarify the fields around use classes, floorspace, and bedrooms per unit.


### Testing the design pattern with real data

As well as testing the design pattern verbally with our discovery phase participants, we wanted to test the design pattern against real data, to understand how feasible the data collection would be.


#### Collecting data

Our first step was to ask our local authority contacts for samples of their planning application data. This turned out to be significantly more difficult than we anticipated. While planning officers were happy to contribute small chunks of time for research calls, many couldn’t justify the time that would be required to extract data for us.

We supplemented the data provided by local authorities, with our own collection of London Borough planning applications (gathered through a customised version of Adrian Short’s open source planning application scraper) and open datasets from data.gov.uk.

In the end, we were able to collect a good sample of planning application data, from local authorities at a range of locations and sizes:



*   Reigate and Banstead Borough Council
*   Hampshire County Council
*   Camden Borough Council
*   Rushmoor Borough Council
*   Leeds City Council
*   Copeland Borough Council
*   Wycombe District Council
*   Colchester Borough Council
*   Hounslow London Borough Council
*   Barnet London Borough Council
*   Calderdale Metropolitan Borough Council
*   Newcastle City Council
*   Barrow Borough Council


#### Learning from the data

A significant number of the datasets followed the LGA planning data schema – although it is notable that many of these appear to have been one-off exports, and haven’t been updated since the LGA incentive scheme ended in 2016.

Since these datasets followed the LGA schema, there was a certain amount of reliability over the fields available (eg consultation start and end dates) and the categories / identifiers used (eg development categories and decisions defined according to the LGA schema’s prescribed “ClassificationURI” and “Decision” options).

For datasets _not_ following the LGA schema, this data was much messier – consultation dates were often not provided, and development categories were sometimes also missing.

When the development category was provided, it was almost always given as a “Q” code (eg: Q1 Major Dwellings) or a URI to the LGA’s linked open data definition of that code. One authority added its own acronyms (eg: “TPO” for tree preservation orders, “NMA” for non-material amendments) alongside the Q-codes. And one authority used a different categorisation scheme entirely. It’s clear that, in these cases, either the local authorities would need to modify the categories they use in their output, or they’ll need to configure some sort of translation layer, based on their understanding of how their codes map to the Q-code standard.

There was a lack of clarity over “received dates” and “valid dates” – some datasets provide both, some provided only the former. We knew from our Discovery research that there’s variation in how local authorities manage and report validation dates (some recording the actual date the application was “validated” by an officer, some back-dating to the date the application was first received) and this variation is clear in the data.

In terms of geodata, the plain text site address was universally available. Some local authorities removed centroid coordinates from their data exports—presumably out of data licensing concerns—but the majority left them intact. Presence of UPRNs and site areas were less common still. Boundary polygons, as expected, were only provided by the local authorities who prepared a data export specifically for us – none publish these polygons at the moment.

As with boundary polygons, none of the _existing_ datasets included information about use classes or bedrooms per unit, and none made any attempt to describe the overall “type” of development taking place (eg: change of use, demolition, new build). Given the potential value of this data to our discovery participants (and the feedback we’ve had from software providers, that this data is structured and available inside their systems) it’s clear that a way will need to be found to expose this data in future data feeds, although further work will need to be done to decide on a format, since it this per-unit and per-class data is necessarily more complex than a single figure per planning application.


#### Developing an example technical schema

Alongside this work, we also developed a technical schema to accompany the planning application data design pattern. While the pattern was intended to _inform_ the data made available in other standards/schemas, this example technical schema gave us an opportunity to show the minimum dataset that would satisfy the requirements of the design pattern.

You can [read the latest version of the example schema here](https://docs.google.com/document/d/1hMkl7DG8WNym67J2L1eVhFG2xuLalDmQiH5YCIf4HZU/edit?usp=sharing).


#### Prototype translation / validation tool

The technical schema also helped us test a translation / validation tool we were developing, as part of our investigation into how local authority data in different formats could be automatically consolidated into a single schema. Our goal was to show whether a translation / validation tool like this could be run by MHCLG, as the service that collects and standardises the data, to reduce the burden on local authorities.

We investigated a number of solutions for this translation layer, but settled on [JSON Schema](https://json-schema.org) for our prototype. JSON Schema is an open source vocabulary for annotating and validating data formats. The vocabulary is highly flexible and extensible, and our prototype showed how it could be used to check the existence of “required” data pattern fields, or validate the format of values like dates and geographic points, as well as transforming and combining fields, to match the technical schema.

You can [try out the prototype here](https://planning-permissions:MHCLG@planning-permissions.herokuapp.com) – for a quick start, select “london-100.csv” as the input file, and “IDOX” as the schema template.

[![](example.png)](example.png)

The transformation logic being stored in a JSON config file also opens up the possibility for configuration to be made by a non-technical user, via a web interface, and for the tool to then read and use that configuration for its automatic processing.

We think this tool could form the basis of a potential self-service tool, provided by MHCLG, for planning officers (perhaps with the initial support of MHCLG team members) to define their dataset’s “mapping” to the common standard, in a simple, intuitive way.


## Recommended approach and next steps

The previous sections have described the findings from the work completed so far. This section of the report describes the mix of technical approaches we recommend for implementing a common planning application data standard, the interventions that will need to be made to the existing system of planning application data management to enable this, and our recommended approach to continuing this work.

### Technical approach

Implementing a standard like this successfully across over 350 planning authorities presents a big technical challenge that needs to accommodate a wide range of technical skills and resources among planning authorities, a variety of back office management systems in use and a diversity of different ways of managing the planning process.

#### Principles

Our research work suggested a set of a principles that we can use to help guide the technical approach:

*   **Minimal time burden:** keep the time required from planning officers to maintain data to a minimum.
*   **Minimal technical burden:** avoid placing mandatory additional technical burdens on planning authorities.
*   **Work with existing suppliers:** use existing suppliers’ connections and infrastructure to your advantage.
*   **Minimise UI changes:** keep interface changes to supplier products to a minimum to keep costs down.
*   **Consider making it statutory:** If you want full coverage, it will need to be a statutory requirement, but this is likely to require new burdens payments.


#### Technical model

A system to collect data planning application data could be implemented in a number of ways, but we worked with the MHCLG Digital Land team to design a model consistent with their strategy of decentralised management of data.

[![](technical_model.png)](technical_model.png)

The diagram above illustrates this approach. The different components are described below:

*   **Local planning authorities:** each planning authority would be responsible for publishing its own data feed at a web address on its own domain name, relying either on their technical skills and a data publishing tool, or on an add-on from their back office management system.
*   **Data feeds:** each data feed would have to conform to the data pattern and ideally to the data schema. Some flexibility in values of fields is allowed but planning authorities would have to help translate their feeds to a common schema. The format of the feed is yet to be determined, but it is likely to be JSON or XML.
*   **MHCLG collector/validator:** a tool run by MHCLG, this would have a record of the location of each feed and regularly check it for updates, translating each feed into a standard schema and validating it at the same time.
*   **MHCLG index:** a website that allows reusers of the data to explore and download the data they need.

More detail on each of the components of this model is explored in subsequent sections.


#### Planning authority implementation options

The proposed technical model includes decentralised publication of the data. This is preferable chiefly because local planning authorities are the custodians of the data. It is their planning officers who manage it, albeit indirectly via their management of the planning process. Through local publication, the data feed can be conceptualised as just an extension to the existing, statutorily defined local planning registers.

However, we identified in our discovery work that planning authorities are very varied in the technical skills and resources they have access to, so implementation options need to be presented that require minimal technical work, but also give flexibility to those planning authorities with more skills or who wish to publish their feeds via existing systems such as data portals. Two options that together accomplish this are described below.


#### Product add-ons

The large majority of planning authorities use a back office management system that allows them to manage their planning applications while also presenting a public facing interface for searching and browsing applications.

Given their access to the market, existing infrastructure and support functions, we would recommend working with these suppliers to help them develop add-ons or modules that extend the existing local planning registers with a feed of structured data accessible at a fixed URL.

This approach would make it easy for planning authorities without the technical skills, resources or time necessary to set up their own feeds to meet the requirement of publishing a feed.


#### Data publishing tools

For planning authorities who have access to technical skills and resources, they could instead opt to publish a data feed themselves via an open data platform or another data publishing tool.

We recommend allowing this flexibility as some local authorities have existing approaches to open data that should not be disrupted.

Many of the planning authorities we spoke to as part of our initial research were already publishing planning application data. All of them followed the same basic technical approach, but with slightly different implementations based on the technology available to them. Here are three of these examples:



*   **Camden Council** have an [open data platform](https://opendata.camden.gov.uk/Environment/Planning-Applications/2eiu-s2cw) based on Socrata. They extract data from their Northgate system by querying the underlying database directly. This task has been automated to be run daily, extracting the data to a CSV  file. This file is then processed by another script that performs some data transformations before updating the dataset on Socrata which is presented in a schema they have defined themselves.
*   **Leeds City Council** use Microsoft Access to do reporting on their Idox Uniform system, by automatically pulling data from Uniform’s database into Access. They have written a scheduled task in Access that extracts the relevant data from the Access database and generates a CSV file of new planning application data in line with the LGA schema. The task also sends an email to the team at Datamill North (an open data portal started by Leeds City Council, but now shared with Bradford City Council) to let them know a new version of the dataset is available. The Datamill team then manually update the dataset with the new data.
*   **Reigate and Banstead Council** make a planning application data feed available in line with the LGA schema via data.gov.uk. They use a GIS data publishing platform to query their Idox system’s underlying database and pull the data through into a Postgres database. They then use XSL stylesheets to transpose this data into an XML web feed, also hosted through the same GIS data publishing platform.


#### MHCLG technology

To enable this ecosystem of planning application data to work best for data users, MHCLG will need to create some technology that can aggregate the data together and present it through a single interface.


#### Central collector

A central collector, as shown in the technical model diagram above, would act to bring together the distributed data feeds, unifying them into a single common data feed with a consistent schema.

The central collector would have the following other components:



*   **Register of URLs:** the collector would need an authoritative list of the location of each planning authority data feed and expose an interface to allow this list to be kept up to date. It could also check that these feeds are present regularly and alert relevant users in MHCLG and planning authorities if a feed URL becomes invalid.
*   **Feed translator:** the collector could include code to allow the translation of a planning authority feed into a common MHCLG schema, along the lines of our JSON schema translator prototype described in the previous section of this report. This would be particularly important where authorities use different codes or terms for things like a planning application decision. This could be set up so that the translation can be edited on a per-source basis by editing either a configuration file or via a user interface for less technical users.
*   **Feed validator:** the collector would also need to validate feed data as it collects it. This would almost certainly have to happen at the same time as translation. The validator would check the feed against the common schema and would need to notify the custodian of the feed of any errors or inconsistencies in the data.

The functionality of this collector would need to be further prototyped and tested in a future project.


#### Central index

The central index, also shown in the technical model above, would take the data sourced by the collector and expose it through user interface to allow

The central index itself was not a focus of this project and its functionality would need to be further explored, prototyped and tested in a future project. But based on our research with data users, we know it would need to have these characteristics:



*   **Whole country:** it should act as a central source for the whole of England while making clear it is an aggregator.
*   **Bulk download:** allow download of the data in bulk, in total and for any updates that have been made since a certain date.
*   **Frequent updates:** the data should be updated from each planning authority on a daily or weekly basis to make sure any time-sensitive changes (that might, for example, be relevant to conveyancing) can be exposed as soon as possible.
*   **Authoritative:** users should have confidence in the reliability and consistency of source and its data.
*   **Clear licensing:** any licences applied to the data in the index should be made clear.
*   **Clear extent:** any limitations in the extent of the data should be made clear, for example, if a planning authority feed becomes temporarily unavailable.


### Potential interventions

As well as the technical model and components described above, a number of other changes or interventions would need to be made to the system of planning application data to make sure the data can be sourced from all planning authorities in accordance with the identified user needs.

A diagram outlining the flow of planning application data, annotated with where interventions would need to be made,  is shown below.


#### Process

The process shown in the diagram is as follows:



*   **Submission:** an applicant submits their application, most commonly through the Planning Portal, but sometimes via another submission portal like iApply or in person to a planning officer. Submissions from a portal are emailed to a local authority along with an XML file describing the application and PDF documents containing the details. Normally, this XML is processed automatically by the back office management system and imported for validation by a planning officer.
*   **Validation:** the planning officer then checks the details of the application against national and local validation checklists to make sure it has all the information needed for it to be decided. At this point, it is also linked to other important pieces of data including UPRNs and site polygons (based on the address of application) constraints (based on the application’s location) and other related applications.
*   **Consultation & decision:** following validation, comment is sought from relevant consultees and from the public. Documents received are added to the application by the planning officer. The application is reviewed in light of the comments, constraints and other relevant consideration and a decision is made by the planning officer, local planning committee or Secretary of State.
*   **Publication:** after an application has been validated, it will be published on the planning authority’s local planning register. As further detailed are added during consultation and decision, the application page will be continually updated. Some planning authorities also publish a feed of data with new applications and newly updated applications.


#### Interventions

The interventions we recommend MHCLG consider making are described below:



1. **Collect data on development at the start of the process:** require more data on the nature of the development from the applicant and require portals to alter forms to collect this additional data. This would involve collecting the use class/floorspace fields and bedroom data described in our data pattern.
2. **Require back office management systems to ingest additional data:** make sure suppliers of back office management systems alter their portal connectors to import bedroom and use class data. This will help reduce the amount of extra work that planning officers have to do.
3. **Require planning officers to check and maintain fields on development:** planning officers should do an initial check that these fields match the rest of the submission during validation, then make sure the contents of the fields are updated to reflect what is decided.
4. **Require LPAs to add UPRN & polygon data to every submission:** even where these are discharges of conditions, material amendments and variations, to help tie submissions together. As far as we we know, the majority of planning authorities have access to GIS, and have had for many years. However, not all planning authorities do and processes differ between authorities, so this may not be feasible in practice due to different technical capabilities without additional burdens payments.
5. **Require LPAs to provide a feed of structured data as part of their local planning register:** this is the central intervention we are recommending. MHCLG should require local authorities to provide a feed of planning application data to match the data pattern and schema described above. Planning authorities would be free to use either a supplier-provided add-on or set up their own technology. Flexibility in what fields are called and their values could be allowed as long as the feed matches the pattern.

Interventions 1 and 2 need to be made together if either is to be worthwhile. If one or both of these are not possible, the overall outcome can still be the same, but this would put more work onto planning officers to populate the information in intervention 3. Most importantly, any new systems have to be flexible where possible to account for future policies and changes in planning law. A focus on minimum requirements, consistency in the data pattern, and reducing burden on planning officers will be critical elements in keeping this flexibility.


### Further work


#### Introduction

This 12-week project has been focused on discovery and alpha research into how to make data on planning applications available across all planning authorities in England to a level that would meet the needs of users of this data.

We have developed a much clearer understanding of the nature of the data available, the technologies involved and how they inter-relate. We have also understood the challenges posed by how data and systems are currently managed and some interventions that could be made to make this data available.

However, while we had very useful input from local planning authorities, we were not able to get significant engagement from planning authorities in testing out the data pattern. This requires a more substantial time investment than sparing an hour for an interview and planning authorities were not able to do this.

We recommend therefore, that in order to further test the practicality of the data pattern and the interventions suggested by our research, that MHCLG conduct a pilot project involving deeper engagement from a set of planning authorities. Given the need to build engagement and sustainable testing rounds for this pilot, we recommend an 8-12 month timescale involving 10-15 planning authorities of various sizes and regions to represent a diverse cohort.

This section of the report describes what this further work should seek to achieve. It starts by describing some outstanding questions that need to be answered by this work and then outlines some aspects of a recommended approach to testing them.


#### Questions to answer

The work completed has given us a clear sense of what we know and what do not yet know, but need to know. The questions that need to be answered in a further phase of work are stated below, grouped by theme.


#### Data pattern



*   How will the data pattern be applied to different submission types and consent regimes?
*   Should the data pattern be applied differently to existing, decided applications and live and future applications?
*   Does data released in line with the data pattern solve the problem of tying related submissions together?


#### Management of data



*   How much additional time will it take a planning officer to manage the fields describing a development?
*   What governance model should be put in place to help ensure the reliability of a data feed and the accuracy of its content?
*   What other opportunities does having this data available present for planning authorities and MHCLG?


#### Data feed



*   Is it possible for planning authorities to consistently extract all of the data required by the pattern?
*   Are the connections between planning and geographical information systems always present that will allow the extraction of UPRNs and site polygons?
*   Are local authorities with their own data publication platforms able to manage the extraction, processing and publication of the data themselves?
*   Can recipes for extraction and publication be shared across local authorities?
*   What are the licensing issues with geographical data going to be in practice?


#### Other technology



*   Is a validator/translator tool workable with real data, and is an interface to specify the translation usable by planning authority officers?
*   What are the technical challenges that suppliers might face in providing this feed for their customers?


#### Policy/legal approach



*   What is the right way of incentivising or requiring planning authorities to provide this feed?
*   How can MHCLG support planning authorities in dealing with their tech suppliers?


### Approach

To answer these questions, we think the next phase of work should have three focuses: piloting the data pattern with planning authorities, working with a wider range of suppliers on technical feasibility and an operational model, and prototyping and testing of additional technical components.


#### Piloting the data pattern with planning authorities

Many of the questions above could be answered through a complete pilot with a group of planning authorities. Given the time commitment this would involve from them, it may require some kind of incentive to ensure their participation.

Their participation would involve:



*   Asking planning officers to populate fields that describe use classes and floorspace and bedroom data.
*   Asking planning officers to make sure that UPRN and polygon data has been associated with each application, including submissions of details, variations and amendments.
*   Asking technical officers to set up an extraction and publication pipeline using:
    *   an existing data publishing platform, or
    *   a data publishing tool they would have to introduce for this purpose, or
    *   a prototype feed from their back office management system provider, set up for this purpose.
*   Planning authorities involved in the trial and using the same systems could be given a forum in which to share approaches to make this easier.
*   If setting up a pipeline is not possible, they could do a one-off extraction to test the concept in principle.
*   Testing a prototype translation tool for mapping the values in their data to a common MHCLG schema.

To maximise the usefulness of the pilot, it will be necessary to recruit a good mix of planning authorities. A diverse cohort is essential in order to understand the range of challenges, along with potential solutions, that might be faced in a national roll-out. This mix should have the following characteristics:



*   Around 15-20 authorities involved in total, from a wider group for initial consultations to a smaller group for in-depth testing.
*   Authorities should be in one or more groups of neighbouring authorities, perhaps one group of metropolitan authorities, and another, more rural group.
*   The authorities should ideally be a mix of large and small authorities, and with a mix of technical skills.
*   The authorities should be using a mix of different back office management systems.
*   Both planning and technical staff from the authorities would need to be involved.


#### Working with suppliers

To ensure the long term sustainability of this work and minimise the technical burden on planning authorities, it is important to work with the suppliers of back office systems.

As part of the work already completed, we had conversations with two of the largest back office planning application system providers to understand how they model data, what data export capabilities they have and to get their feedback on the proposed data pattern.

Ideally, the planning authorities involved in the pilot should have systems provided by a few different back office system suppliers.

As part of the pilot, we would recommend to work with these providers to:



*   Understand the technical options for providing a data feed, and any potential technical complexities to the implementation that could be avoided through alternative implementation.
*   Explore the policy options and incentives to ensure the development of an additional data feed capability for their systems.
*   Develop a prototype feed or export capability to test the feasibility of the data pattern and schema.

#### Prototyping

Along with the pilot work, some prototyping work could be completed to test out some technical components of the whole system described in the technical model above.

*   **The central collector** and in particular the translator/validator part of it, could be further developed, using the real data obtained from planning authorities in the pilot. It could be tested with planning authority staff to understand whether they could do the translation themselves or whether this work would have to be done centrally by MHCLG.
*   **The central index**, which has yet to be designed or prototyped, could also be developed and tested with data re-users to ensure it meets their needs. This could also be done at a later stage as a separate project.

### More information

#### Project Page: Info and Blog

[https://digital-land.github.io/project/single-register-of-planning/](https://digital-land.github.io/project/single-register-of-planning/)


#### Prototype Code: early alpha for collector

[https://github.com/mysociety/planning-permissions](https://github.com/mysociety/planning-permissions)

[https://github.com/mysociety/london_planning_applications](https://github.com/mysociety/london_planning_applications)

[https://github.com/mysociety/uk_planning_scraper/tree/scrape-proptery-details](https://github.com/mysociety/uk_planning_scraper/tree/scrape-proptery-details)
