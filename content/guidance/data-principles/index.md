---
title: "Data principles"
label: "guidance:data-principles"
hasContent: true
---

To ensure consistency of data that has been  provided from multiple sources we have established a set of principles that are used across all data sets. 

{{< govuk-section-break "xl" >}}

## Structuring data

Our data models follows principles of a [relational database](https://en.wikipedia.org/wiki/Relational_database). This helps to reduce duplication and makes it easier to maintain, which in turn increases the trust and usefulness of the data.

When modeling the data standard for [developer contributions](/guidance/developer-contributions/) we created three files all of which could be linked together through the use of unique identifiers. The first .csv contained a list of the all agreements. In the second .csv we listed all the contributions, linking those back to the agreement they came from. Finally in the third .csv we listed all the transactions which are linked by to a contribution.

This style of data model means that each .csv only has to contain the minimal amount of information that is relevant to its specific purpose but we can link to related datasets to provide context and additional information.

<a href="https://www.flickr.com/photos/mattlucht/47744658642/in/datetaken-public/" title="IMG_20190507_160434"><img src="https://live.staticflickr.com/65535/47744658642_11ef5853bb_k.jpg"alt="Linked Data"></a>

{{< govuk-section-break "xl" >}}

## The smaller the better

Related to how we [structure data](#structuring-data), the smaller the breadth of the data model the easier it'll be to maintain and publish. When datasets become too broad there is an increased likelihood for inputted data to be missed, needed to be made non-mandatory, or at worst, guessed.

{{< govuk-section-break "xl" >}}

## Not deleting entries in a register

One something changes, is superseded, or becomes redundant then a new record should be added to the register the old one can be marked as expired through the use of an [end date](#entry-start-and-end-dates).

Through being able to see what has changed we believe this provides reassurance and trust in the data. It also allows Service Provides to build historic views of the data to help demonstrate what has changed over time.

{{< govuk-section-break "xl" >}}

## Dates

### Date format

Dates can be [written in many different ways](https://xkcd.com/1179/) which can cause confusion. To avoid this problem all dates should comply with the internationally recognised [ISO 8601 standard](https://en.wikipedia.org/wiki/ISO_8601). 

{{% inset-text %}}
A date should be represented as `YYYY-MM-DD`, so for example, 4 June 2018 would be written as `2018-06-04`.
{{% /inset-text %}}

### Entry, start and end dates

Each record within a register has three date attributes. These describe when the record was created, when it came into affect, and from when a record was no longer active.

The dates are represented as a `entry-date`, a `start-date`, and an `end-date`.

{{% inset-text %}}

As an example, in a [register of countries](https://www.registers.service.gov.uk/registers/country) Czechoslovak Republic became The Czech Republic on 1 January 1993 and is represented in their register as:

| official-name | start-date | end-date |
| ------------- |:-------------:| -----:|
| Czechoslovak Republic | | 1992-12-31 |
| The Czech Republic | 1993-01-01 |

{{% /inset-text %}}

{{< govuk-section-break "xl" >}}

## IDs

Each record within a register should have a unique identifier (ID). IDs are used to string together records across multiple registers.

When creating a unique identifier there are some thing that you should consider:

* avoid the use of personal or private data in the identifier
* the ID should be unique forever
* IDs should never be re-used
* IDs should be assigned to all entities


{{< govuk-section-break "xl" >}}

## Persistent URLs

You should be able to link to a data set from a URL. It is important that overtime that URL doesn't change. If it changes then it makes it increasingly more difficult to find the data, and no matter how good the quality of the data is if it can't be found then it can't be used.

When data is published it should live on a URL that doesn't change over time, users of the data need to be able to trust that when they visit that URL they'll find the most up-to-date set of data.

{{< govuk-section-break "xl" >}}

## Licensing

Data should be published with clear licensing terms which clearly state how the data can be used, and by who.

Where possible data should be published under an [Open Government License](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).

{{< govuk-section-break "xl" >}}

## Available in a non-propitiatory format

Data should be published in a format that is available without the use of propitiatory software. For example, data published as .csv, .tsv or .json can be used freely regardless of the users choice of development tools. Whereas data published in .xls or .pdf is locked to a particular vendor.

{{< govuk-section-break "xl" >}}

## Easily accessible 

All data should be accessible without any intervention such as providing an email address or credentials. 

{{< govuk-section-break "xl" >}}

## No derived or calculated data

To help ensure the integrity of the data the data set shouldn't contain any values that can be derived or calculated from other values.

