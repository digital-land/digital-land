---
section: "Single register of planning"
title: "Alpha report"
pageFeedback: true
summary: We're working with mySociety to make planning application data more trustworthy and up to date, as well as easier to find and use.
layout: "single"
---


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

[![](../discovery/example.png)](../discovery/example.png)

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

[![](../discovery/technical_model.png)](../discovery/technical_model.png)

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
