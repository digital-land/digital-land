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

## Not deleting entries in a register

One something changes, is superseded, or becomes redundant then a new record should be added to the register the old one can be marked as expired through the use of an [end date](#entry-start-and-end-dates).

Through being able to see what has changed we believe this provides reassurance and trust in the data. It also allows Service Provides to build historic views of the data to help demonstrate what has changed over time.

{{< govuk-section-break "xl" >}}

## Dates

### Date format

Dates can be [written in many different ways](https://xkcd.com/1179/) which can cause confusion. To avoid this problem all dates should comply with the internationally recognised [ISO 8601 standard](https://en.wikipedia.org/wiki/ISO_8601). 

{{% inset-text %}}
A date should be represented as `YYYYMMDD`, so for example, 4 June 2018 would be written as `20180604`.
{{% /inset-text %}}

### Entry, start and end dates

Each record within a register has three date attributes. These describe when the record was created, when it came into affect, and from when a record was no longer active.

The dates are represented as a `entry-date`, a `start-date`, and an `end-date`.

{{% inset-text %}}

As an example, in a [register of countries](https://www.registers.service.gov.uk/registers/country) Czechoslovak Republic became The Czech Republic on 1 January 1993 and is represented in their register as:

| offical-name | start-date | end-date |
| ------------- |:-------------:| -----:|
| Czechoslovak Republic | | 19921231 |
| The Czech Republic | 19930101 |

{{% /inset-text %}}

{{< govuk-section-break "xl" >}}

## IDs

{{< govuk-section-break "xl" >}}

## Persistent URLs