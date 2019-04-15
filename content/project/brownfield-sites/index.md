---
title: "Brownfield sites"
status: alpha
label: "project:brownfield-sites"
---

Brownfield sites are plots of land that have previously been developed but are not currently in use. [Recent analysis](https://www.cpre.org.uk/resources/housing-and-planning/planning/item/5086-state-of-brownfield-2019) suggests more than 1 million houses could be built on brownfield sites across England.

Local authorities must [keep records of their brownfield sites](https://www.gov.uk/guidance/brownfield-land-registers) updated, publicly available and published in an agreed data format. This helps housing developers find the right places to build and planners make informed decisions on local housing.

The Digital Land team is working with local planning authorities to improve this data format so that the data is easier to find, use and trust. See our current areas of investigation below to learn more and get involved in the discussion about brownfield sites.

{{< govuk-section-break "xl" >}}

## Resources for planning authorities


### Update your brownfield site data: guidance

Follow these simple instructions when adding new brownfield sites to their registers.


### Check your brownfield site data for errors

Our validator will [check your brownfield site data](https://brownfield-sites-validator.cloudapps.digital/start) for common errors and omissions and fix them. A comparison of data quality for [brownfield registers that have been checked](https://digital-land.github.io/brownfield-sites/) is also available.


### View brownfield site registers

[View brownfield site data](https://github.com/communitiesuk/digital-land-collector/tree/master/data/publication/brownfield-sites) by local authority.


{{< govuk-section-break "xl" >}}

## Current areas of investigation

{{< prototype-heading "A way of validating the collected data" >}}
  {{< progress-tag "in-progress" >}}In progress{{< /progress-tag >}}
{{< /prototype-heading >}}

#### Questions we're asking

Often the person in the local authority updating the brownfield site data has little or no spare time, has varied responsibilities and is not familiar with the brownfield data format. As a result errors are common in brownfield data. Would offering a simple tool for validating the data improve this?

#### What we tested
* a [validation tool](https://brownfield-sites-validator.cloudapps.digital/) for brownfield site data

#### What we've learned

We tested the tool with some local planning authorities whose brownfield site data contained errors. They were able to use the tool to identify the error, correct and republish it.

{{< prototype-heading "A way of fixing errors" >}}
  {{< progress-tag "in-progress" >}}In progress{{< /progress-tag >}}
{{< /prototype-heading >}}

#### Questions we're asking

Many of the errors we identified in published brownfield data were common mistakes, such as switching GeoX and GeoY coordinates, or omitting empty rows in the data. Would offering to automatically fix common errors after validating the data be useful to LAs and improve the state of data?

#### What we tested
* a[validation tool](https://brownfield-sites-validator.cloudapps.digital/) for brownfield sites

#### What we've learned

We spoke with many of those in local authorities who are responsible for publishing the data. Often they were not technically trained or experienced with working with data. We tested the validator with some of these users, many of whom were able to spot and correct the data errors.

{{< govuk-section-break "xl" >}}

## Upcoming areas of investigation

{{% include-content "/project/brownfield-sites/_upcoming-areas-of-investigation.md" "upcoming-areas-section" %}}

{{< govuk-section-break "xl" >}}

## Timeline
