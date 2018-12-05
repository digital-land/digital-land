---
title: "Developer contributions"
status: alpha
---

The [Ministry of Housing, Communities & Local Government](https://www.gov.uk/government/organisations/ministry-of-housing-communities-and-local-government) has been working with local planning authorities to design a data format for publishing Section 106 agreements, viability assessments, and other developer contributions.

{{< govuk-section-break "xl" >}}

## We need your input to create a common data format

As part of an [alpha project](https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works), we’re investigating the issues we’ve identified around developer contributions. This involves building prototype tools that allow us to test how robust and flexible the data format is and to make adjustments to it accordingly. We regularly iterate these based on insights from research and user feedback.

Help us improve our understanding by participating in the discussion on one of our [GitHub issues](https://github.com/digital-land/digital-land/issues?q=is%3Aissue+is%3Aopen+label%3Adeveloper-contributions).

Alternatively, complete our [feedback form](https://docs.google.com/forms/d/1pvblp8l4ODFmv91yyktArGaiskVnJgFcWDCYBBRgc2A/edit).

{{< govuk-section-break "xl" >}}

## Data format overview

We are proposing a simple data format for developer contributions that:
* meets the user needs we’ve identified
* requires minimal effort from local planning authorities to create and make the data available

We propose 3 lists to be kept and maintained centrally by MHCLG:

* [developer-agreement-type](https://github.com/communitiesuk/digital-land-collector/blob/master/etc/developer-contributions/developer-agreement-type.csv)
– a code for each type of developer contribution recorded
* [developer-contribution-purpose](https://github.com/communitiesuk/digital-land-collector/blob/master/etc/developer-contributions/developer-contribution-purpose.csv)
– purpose codes for categorising developer contributions
* [developer-contribution-register](https://github.com/communitiesuk/digital-land-collector/blob/master/etc/developer-contributions/developer-contribution-register.csv)
– a link to where each local planning authority has published their developer contribution registers.

We also propose each local planning authority publishes 3 registers on their own website:

* [developer-agreement](https://github.com/communitiesuk/digital-land-collector/blob/master/etc/developer-contributions/developer-agreement.csv)
– developer agreements, with a link to the original document
* [developer-agreement-contribution](https://github.com/communitiesuk/digital-land-collector/blob/master/etc/developer-contributions/developer-agreement-contribution.csv)
– agreed developer contributions found in each document
* [developer-agreement-transaction](https://github.com/communitiesuk/digital-land-collector/blob/master/etc/developer-contributions/developer-agreement-transaction.csv)
– payments received from a developer or spent on a project

By consistently following the format, organisations with a duty to produce this data ensure that the data is easy to find and use, as well as easy for any digital service to consume.

Read our [proposed guidance for publishing developer contributions](https://digital-land.github.io/guidance/developer-contributions/) for publishing developer contributions for an overview of the format.

{{< govuk-section-break "xl" >}}

## Current areas of investigation

The following areas of investigation demonstrate possible ways the data might be applied and made easier to work with.

{{< prototype-heading "A collection of viability assessments" "https://github.com/digital-land/digital-land/issues/21">}}
  {{< progress-tag "in-progress" >}}In progress{{< /progress-tag >}}
{{< /prototype-heading >}}

#### Questions we're asking

Finding published viability assessments is extremely difficult. Would providing an index of viability assessments, along with important information, be of value to local planning authorities and interested members of the community?

#### What we tested

* [an index of viability assessments](https://section-106-prototype.cloudapps.digital/viability/)

#### What we learned

We haven’t yet tested the index with users.

{{< prototype-heading "Developer contributions dashboard" "https://github.com/digital-land/digital-land/issues/20">}}
  {{< progress-tag "in-progress" >}}In progress{{< /progress-tag >}}
{{< /prototype-heading >}}

#### Questions we're asking

Will presenting what contribution agreements have been made, where funds have been allocated, and whether money has been spent help answer questions from the community, local authorities and government?

#### What we tested

* [a visualisation of developer contribution data](https://section-106-prototype.cloudapps.digital/developer-contributions/section106-wide)

#### What we learned

We haven’t yet tested the dashboard with users.


{{< prototype-heading "Entering data for a Section 106 executive summary" "https://github.com/digital-land/digital-land/issues/22" >}}
  {{< progress-tag "in-progress" >}}In progress{{< /progress-tag >}}
{{< /prototype-heading >}}

#### Questions we're asking

Section 106 contributions are published as documents. Would offering planning authorities a simple form enable them to identify pertinent information from within the document and publish it as summary data?

#### What we tested

* [a tool to collect Section 106 data](https://section-106-prototype.cloudapps.digital/create-section106)

#### What we've learned

Many planning authorities are already using third party tools to help manage their developer contributions. Asking to double-key much of the same data into an additional form would become burdensome and likely lead to a poor quality of data.

{{< govuk-section-break "xl" >}}

## Upcoming areas of investigation

We plan to explore the following by prototyping tools and by testing with, consulting people involved with developer contributions, and responding to your feedback:

* [Is it possible to extract Section 106 data from third party tools?](https://github.com/digital-land/digital-land/issues/23)
* [What do planning authorities need from an index of viability assessments?](https://github.com/digital-land/digital-land/issues/24)
* [Would it be useful to track contributions at a project level?](https://github.com/digital-land/digital-land/issues/25)
* [Are ‘developer contributions’ the correct name for this work?](https://github.com/digital-land/digital-land/issues/28)
* [Is it possible to have a standardised set of contribution purposes?](https://github.com/digital-land/digital-land/issues/26)
* [What dates are important and do we need to capture them?](https://github.com/digital-land/digital-land/issues/27)
* [How do we capture non-financial obligations as data?](https://github.com/digital-land/digital-land/issues/29)

{{< govuk-section-break "xl" >}}

## Timeline

**TBD**

Public consultation ends.

**TBD**

Public consultation begins.

**22 November 2018**

We held a discovery workshop hosted by the GLA along with TFL and Southwark to walk through our joint approach for developer contributions.

**16 October 2018**

We published [a blog post](https://mhclgdigital.blog.gov.uk/2018/10/16/making-developer-contributions-open-and-transparent/) with more information about this project.

