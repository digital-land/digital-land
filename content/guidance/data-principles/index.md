---
title: "Data principles"
label: "guidance:data-principles"
hasContent: true
---

To ensure consistency of data that has been  provided from multiple sources we have established a set of principles that are used across all data sets. 

{{< govuk-section-break "xl" >}}

## Multiple files

{{< govuk-section-break "xl" >}}

## Not deleting entries in a register

Each register contains not only the latest updates, but also a record of what has happened. Through being able to see what has changed we believe this provides reassurance and trust in the data. So when a [end date](#entry-start-and-end-dates)

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