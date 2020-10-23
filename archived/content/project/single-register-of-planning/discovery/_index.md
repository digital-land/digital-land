---
section: "Single register of planning"
title: "Discovery report"
pageFeedback: true
summary: We're working with mySociety to make planning application data more trustworthy and up to date, as well as easier to find and use.
layout: "single"
---

## Introduction

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

#### Project Page: Info and Blog

[https://digital-land.github.io/project/single-register-of-planning/](https://digital-land.github.io/project/single-register-of-planning/)

