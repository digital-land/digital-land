---
title: "Brownfield sites"
status: beta
label: "project:brownfield-sites"
hasContent: true
pageFeedback: true
summary: We’re exploring digital tools that could help local planning authorities collect and maintain brownfield site data.
---
## Current areas of investigation

We're exploring the following areas to help us learn how we can make the data more open and easier to use:

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

{{< prototype-heading "Guidance on updating your brownfield site data" >}}
  {{< progress-tag "in-progress" >}}In progress{{< /progress-tag >}}
{{< /prototype-heading >}}

#### Questions we're asking

Would guidance help local authorities publish their brownfield data to a standard format, and minimise errors?

#### What we will test

We're currently creating [guidance on publishing brownfield site data](https://digital-land.github.io/guidance/brownfield-sites/). We will test this guidance with users from local planning authorities and continue to improve it.

{{< prototype-heading "Brownfield site data validator" >}}
  {{< progress-tag "in-progress" >}}In progress{{< /progress-tag >}}
{{< /prototype-heading >}}

#### Questions we're asking

Often the person in the local authority updating the brownfield site data has little or no spare time, has varied responsibilities and is not familiar with the brownfield data format. As a result, errors are common in the published data. Would offering a simple tool for validating a local authorities’ data improve this?

#### What we will test

We're building and testing a [validator tool](https://brownfield-sites-status.herokuapp.com/) which will check local planning authorities' brownfield site data and display the [results of all local authorities' data](https://brownfield-sites-status.herokuapp.com/breakdown). 

{{< prototype-heading "View brownfield site registers" >}}
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

## Upcoming areas of investigation

{{% include-content "/project/brownfield-sites/_upcoming-areas-of-investigation.md" "upcoming-areas-section" %}}

{{< govuk-section-break "xl" >}}

## Timeline

**15 June 2019**

We met again with [Campaign to Protect Rural England (CPRE)](https://cpre.org.uk/) to further understand how they're using brownfield data and how this might connect to other data sets. We also spoke about our ideas to make it easier for local authorities to collect and publish their data.

**June 2019**

We've been analysing the existing brownfield data to explore whether we can propose a simplified data standard that'll be easier for local authorities to publish against. As a part of this work we've also been looking at what has changed since we last looked at the published registers.

**4 April 2019**

We met with [Campaign to Protect Rural England (CPRE)](https://cpre.org.uk/) to understand more about how they collected the brownfield data, the challenges they faced, and how they used the data.

**March 2019**

The [CPRE](https://cpre.org.uk/) published the [2019 State of Brownfield annual report](https://www.cpre.org.uk/resources/housing-and-planning/planning/item/5086-state-of-brownfield-2019). In the report they highlighted some of the challenges they faced whilst collecting brownfield data.

**Summer 2018**

We built a [register of all the brownfield registers](https://github.com/communitiesuk/digital-land-collector/blob/master/etc/brownfield-site-publication.tsv) and prototyped a tool to [validate the data](https://brownfield-sites-validator.herokuapp.com).
