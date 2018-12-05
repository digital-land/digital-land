---
title: "Developer contributions"
status: alpha
---

The [Ministry of Housing, Communities & Local Government](https://www.gov.uk/government/organisations/ministry-of-housing-communities-and-local-government) have been working with local planning authorities to design a data format for publishing Section 106 agreements, viability assessments, and other developer contributions.

{{< govuk-section-break "xl" >}}

## Help us improve the developer contributions

Your input is invaluable to our efforts to create a consistent format for publishing developer contributions data.

Please share your thoughts on the proposed data format and the tools and guidance we’re prototyping here by completing [this feedback form](https://goo.gl/forms/aVckvO6woUxUIEjF2).

_We will continue to develop the format and prototypes based on your feedback during the course of the consultation._

{{< govuk-section-break "xl" >}}

## Data format

We want to start with the most minimal data model that addresses the user needs we've identified whilst minimising the work needed from local planning authorities to make the data available.

We propose 3 lists to be kept and maintained centrally by MHCLG:

* [developer-contribution-type](https://github.com/communitiesuk/digital-land-collector/blob/master/etc/developer-contributions/developer-contribution-type.csv)
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

## Guidance

* [Proposed guidance for publishing developer contributions](https://digital-land.github.io/guidance/developer-contributions/)

{{< govuk-section-break "xl" >}}

## Current areas of investigation

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

