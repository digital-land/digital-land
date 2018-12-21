---
title: "Developer contributions"
status: alpha
type: project
label: "project:developer-contributions"
---

The [Ministry of Housing, Communities & Local Government](https://www.gov.uk/government/organisations/ministry-of-housing-communities-and-local-government) has been working with local planning authorities to design a data format for publishing Section 106 agreements, viability assessments, and other developer contributions.

{{< govuk-section-break "xl" >}}

## Help us develop a common data format

{{% include-content "/project/developer-contributions/develop-a-common-data-format.md" "common-format-section" %}}

{{< govuk-section-break "xl" >}}

## Publish using our proposed data format

We are proposing a simple data format for developer contributions that:

* meets the user needs we’ve identified 
* requires minimal effort from local planning authorities to create and make the data available

By using this format next time you publish your contributions, you’ll be giving us data and insights that will help us improve it.

We propose 3 lists to be kept and maintained centrally by MHCLG:

* [developer-agreement-type](https://github.com/communitiesuk/digital-land-collector/blob/master/etc/developer-contributions/developer-agreement-type.csv)
– a code for each type of developer agreement recorded
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

Read our [proposed guidance for publishing developer contributions](https://digital-land.github.io/guidance/developer-contributions/) for an overview of the format.

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

{{< prototype-heading "Checking developer contribution data is valid" "https://github.com/digital-land/digital-land/issues/32" >}}
  {{< progress-tag "in-progress" >}}In progress{{< /progress-tag >}}
{{< /prototype-heading >}}

#### Questions we're asking

Developer contributions data will need to be published in line with the data format. Would offering planning authorities a simple validator help them ensure their publication follows that format?

#### What we tested

* [a tool to check your developer contribution data](https://section-106-prototype.cloudapps.digital/validate-start)

#### What we've learned

We haven’t yet tested the validator with users.

{{< govuk-section-break "xl" >}}

## Upcoming areas of investigation

{{% include-content "/project/developer-contributions/_upcoming-areas-of-investigation.md" "upcoming-areas-section" %}}

{{< govuk-section-break "xl" >}}

## Timeline

**31 January 2019**

Public consultation ends.

**20 December 2010**

The [public consultation](https://www.gov.uk/government/consultations/developer-contributions-reform-technical-consultation) begins.

**22 November 2018**

We held a discovery workshop hosted by the GLA along with TFL and Southwark to walk through our joint approach for developer contributions.

**16 October 2018**

We published [a blog post](https://mhclgdigital.blog.gov.uk/2018/10/16/making-developer-contributions-open-and-transparent/) with more information about this project.

