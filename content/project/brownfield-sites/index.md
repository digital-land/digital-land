---
title: "Brownfield sites"
status: alpha
label: "project:brownfield-sites"
hasContent: true
---

## Resources for planning authorities


### Update your brownfield site data: guidance for local planning authorities

Follow [these simple instructions](https://digital-land.github.io/guidance/brownfield-sites/) when adding new brownfield sites to their registers.


### Check brownfield site data for errors

Our validator will [check local planning authorities' brownfield site data](https://brownfield-sites-validator.cloudapps.digital/start) for common errors and omissions and fix them. A comparison of data quality for [brownfield registers that have been checked](https://digital-land.github.io/brownfield-sites/) is also available.


### View brownfield site registers

[View brownfield site data](https://github.com/communitiesuk/digital-land-collector/tree/master/data/publication/brownfield-sites) by local authority.


{{< govuk-section-break "xl" >}}

## Current areas of investigation

We're exploring the following areas to help us learn how we can make the data more open and easier to use.

{{< prototype-heading "An index of brownfield site registers" >}}
  {{< progress-tag "in-progress" >}}In progress{{< /progress-tag >}}
{{< /prototype-heading >}}

#### Questions we're asking

Brownfield site data for local authorities can be difficult to locate and there’s no public register where all LA’s data can be viewed in one place. Would creating a national index of all brownfield data be of value to local authorities and interested members of the community?

#### What we tested
* a simple [index of brownfield site registers](https://github.com/communitiesuk/digital-land-collector/blob/master/etc/brownfield-site-publication.tsv)

#### What we learned

We made a number of useful observations while compiling the simple index, including that:

* planning authorities often failed to provide a direct link to the data (ie to a policy page instead)
* when some registers were updated their URLs changed (ie they're not static)
* registers were often published in formats other than .csv (eg Excel files)
* registers often contained gaps or errors

{{< prototype-heading "A way of validating the collected data" >}}
  {{< progress-tag "in-progress" >}}In progress{{< /progress-tag >}}
{{< /prototype-heading >}}

#### Questions we're asking

Often the person in the local authority updating the brownfield site data has little or no spare time, has varied responsibilities and is not familiar with the brownfield data format. As a result errors are common in brownfield data. Would offering a simple tool for validating the data improve this?

#### What we tested
* a [validation tool](https://brownfield-sites-validator.cloudapps.digital/) for brownfield site data

#### What we learned

We tested the tool with some local planning authorities whose brownfield site data contained errors. They were able to use the tool to identify the error, correct and republish it.

{{< prototype-heading "A way of fixing errors" >}}
  {{< progress-tag "in-progress" >}}In progress{{< /progress-tag >}}
{{< /prototype-heading >}}

#### Questions we're asking

Many of the errors we identified in published brownfield data were common mistakes, such as switching GeoX and GeoY coordinates, or omitting empty rows in the data. Would offering to automatically fix common errors after validating the data be useful to LAs and improve the state of data?

#### What we tested
* a [validation tool](https://brownfield-sites-validator.cloudapps.digital/) for brownfield sites

#### What we've learned

We spoke with many of those in local authorities who are responsible for publishing the data. Often they were not technically trained or experienced with working with data. We tested the validator with some of these users, many of whom were able to spot and correct the data errors.

{{< govuk-section-break "xl" >}}

## Upcoming areas of investigation

{{% include-content "/project/brownfield-sites/_upcoming-areas-of-investigation.md" "upcoming-areas-section" %}}

{{< govuk-section-break "xl" >}}

## Timeline

**4 April 2019**

We met with [Campign to Protect Rural England (CPRE)](https://cpre.org.uk/) to understand more about how they collected the brownfield data, the challenges they faced, and how they used the data.

**March 2019**

The [CPRE](https://cpre.org.uk/) published the [2019 State of Brownfield annual report](https://www.cpre.org.uk/resources/housing-and-planning/planning/item/5086-state-of-brownfield-2019). In the report they highlighted some of the challenges they faced whilst collecting brownfield data.

**Summer 2018**

We built a [register of all the brownfield registers](https://github.com/communitiesuk/digital-land-collector/blob/master/etc/brownfield-site-publication.tsv) and prototyped a tool to [validate the data](https://brownfield-sites-validator.cloudapps.digital/).
