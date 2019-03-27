---
title: "Developer contributions"
status: alpha
type: project
label: "project:developer-contributions"
hasContent: true
---

## Help us develop a common data format

{{% include-content "/project/developer-contributions/develop-a-common-data-format.md" "common-format-section" %}}

{{< govuk-section-break "xl" >}}

## Publish using our proposed data format

We are proposing a simple data format for developer contributions that:

* meets the user needs we’ve identified 
* requires minimal effort from local planning authorities to create and make the data available

By using this format next time you publish your contributions, you’ll be giving us data and insights that will help us improve it.

We propose 4 lists to be kept and maintained centrally by MHCLG:

* [developer-agreement-type](https://github.com/communitiesuk/digital-land-collector/blob/master/etc/developer-contributions/developer-agreement-type.csv)
– a code for each type of developer agreement recorded
* [developer-contribution-purpose](https://github.com/digital-land/alpha-data/blob/master/mhclg-registers/developer-agreement-type.csv)
– purpose codes for categorising developer contributions
* [developer-contribution-register](https://github.com/digital-land/alpha-data/blob/master/mhclg-registers/developer-contribution-register.csv)
– a link to where each local planning authority has published their developer contribution registers
- [developer-agreement-funding-stage](https://github.com/digital-land/alpha-data/blob/master/mhclg-registers/developer-agreement-funding-stage.csv) – the funding status of each contribution 

We also propose each local planning authority publishes 3 developer contributions data files on their own website:

* [developer-agreements](https://github.com/communitiesuk/digital-land-collector/blob/master/etc/developer-contributions/developer-agreement.csv)
– developer agreements, with a link to the original document
* [developer-agreement-contributions](https://github.com/communitiesuk/digital-land-collector/blob/master/etc/developer-contributions/developer-agreement-contribution.csv)
– agreed developer contributions found in each document
* [developer-agreement-transactions](https://github.com/communitiesuk/digital-land-collector/blob/master/etc/developer-contributions/developer-agreement-transaction.csv)
– payments received from a developer or spent on a project

Storing your data in 3 separate files rather than one file makes it possible to use the data more robustly and in more ways.

Read our [proposed guidance for publishing developer contributions](/guidance/developer-contributions/) for more detail on the format.

{{< govuk-section-break "xl" >}}

## Current areas of investigation

The following areas of investigation demonstrate possible ways the data might be applied and made easier to work with.

{{< in-progress-issue title="A collection of viability assessments" number="21" >}}
#### Questions we're asking

Finding published viability assessments is extremely difficult. Would providing an index of viability assessments, along with important information, be of value to local planning authorities and interested members of the community?

#### What we tested

* [an index of viability assessments](https://section-106-prototype.cloudapps.digital/viability/)

#### What we learned

We haven’t yet tested the index with users.
{{< /in-progress-issue >}}


{{< in-progress-issue title="Developer contributions dashboard" number="20">}}
#### Questions we're asking

Will presenting what contribution agreements have been made, where funds have been allocated, and whether money has been spent help answer questions from the community, local authorities and government?

#### What we tested

* [a visualisation of developer contribution data](https://section-106-prototype.cloudapps.digital/developer-contributions/section106-wide)

#### What we learned

We haven’t yet tested the dashboard with users.
{{< /in-progress-issue >}}


{{< in-progress-issue title="Entering data for a Section 106 executive summary" number="22" >}}
#### Questions we're asking

Section 106 contributions are published as documents. Would offering planning authorities a simple form enable them to identify pertinent information from within the document and publish it as summary data?

#### What we tested

* [a tool to collect Section 106 data](https://section-106-prototype.cloudapps.digital/create-section106)

#### What we've learned

Many planning authorities are already using third party tools to help manage their developer contributions. Asking to double-key much of the same data into an additional form would become burdensome and likely lead to a poor quality of data.
{{< /in-progress-issue >}}


{{< in-progress-issue title="Checking developer contribution data is valid" number="32" >}}
#### Questions we're asking

Developer contributions data will need to be published in line with the data format. Would offering planning authorities a simple validator help them ensure their publication follows that format?

#### What we tested

* [a tool to check your developer contribution data](https://section-106-prototype.cloudapps.digital/validate-start)

#### What we've learned

We haven’t yet tested the validator with users.
{{< /in-progress-issue >}}

{{< govuk-section-break "xl" >}}

## Upcoming areas of investigation

{{% include-content "/project/developer-contributions/_upcoming-areas-of-investigation.md" "upcoming-areas-section" %}}

{{< govuk-section-break "xl" >}}

## Timeline

**19 February 2019**

We attended the London Planning Officers Society meeting to present the broader work that the Digital Land Services team are doing, and to provide an overview of the proposed developer contributions data format.

**01 February 2019**

The [Planning Advisory Service](https://www.local.gov.uk/pas) hosted a workshop in Birmingham to provide an opportunity for local planning authorities to learn more about the proposed changes, and provide an opportunity to ask questions and provide feedback. You can find out more and register [here](https://www.eventbrite.co.uk/e/monitoring-data-workshop-with-mhclg-viability-cil-and-section-106-birmingham-tickets-54968274589).

**31 January 2019**

Public consultation ended.

**29 January 2019**

The [Planning Advisory Service](https://www.local.gov.uk/pas) hosted a workshop in Leeds to provide an opportunity for local planning authorities to learn more about the proposed changes, and provide an opportunity to ask questions and provide feedback. You can find out more and register [here](https://www.eventbrite.co.uk/e/monitoring-data-workshop-with-mhclg-viability-cil-and-section-106-leeds-tickets-54919539822).

**28 January 2019**

The [Planning Advisory Service](https://www.local.gov.uk/pas) hosted a workshop in London to provide an opportunity for local planning authorities to learn more about the proposed changes, and provide an opportunity to ask questions and provide feedback. You can find out more and register [here](https://www.eventbrite.co.uk/e/monitoring-data-workshop-with-mhclg-viability-cil-and-section-106-london-tickets-54919493684).

**20 December 2010**

The [public consultation](https://www.gov.uk/government/consultations/developer-contributions-reform-technical-consultation) started.

**19 December 2018**

We met with [Babergh & Mid Suffolk Councils](https://www.midsuffolk.gov.uk/), and [Exacom](http://exacom.co.uk/) to test the proposed data format against how they currently manage their developer contributions.

**22 November 2018**

We held a discovery workshop hosted by the [GLA](https://www.london.gov.uk/) along with [TFL](https://tfl.gov.uk/) and [Southwark Council](https://www.southwark.gov.uk/) to walk through our joint approach for developer contributions.

**16 October 2018**

We published [a blog post](https://mhclgdigital.blog.gov.uk/2018/10/16/making-developer-contributions-open-and-transparent/) with more information about this project.

**10 October 2018**

We met with Exacom to learn how developer contributions are managed within their product, and to explore opportunities for re-purposing existing data.

**September 2018**

We conducted user research to understand more about how developer contributions are managed, and what user needs we could address through making the data available. This included sessions with [Southwark Council](https://www.southwark.gov.uk/), [Dacorum Borough Council](http://www.dacorum.gov.uk/), [Lambeth Council](https://www.lambeth.gov.uk), [Islington Council](https://www.islington.gov.uk/) and [Waltham Forest Council](https://walthamforest.gov.uk/).  

**June 2018**

An initial draft of a data standard was produced by iStandUK, this provided us with a baseline to test and refine based on user needs.

**Spring 2018**

MHCLG commissioned a local authority consortium [iStandUK](https://istanduk.org/) to produce a data standard for developer contributions.

iStandUK met with local authorities to examine how contributions could be captured.

**Autumn 2017**

Feedback from the white paper welcomed the intention to improve transparency, but highlighted the lack of data on developer contributions as a major barrier.

**February 2017**

MHCLG [published a white paper](https://www.gov.uk/government/collections/housing-white-paper) setting out plans to make the planning system more transparent.
