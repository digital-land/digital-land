# 16. Missing entry-dates

Date: 2021-04-20

## Status

Proposed

## Context

The entry-date field is a very important part of all of our data schemas. It is this entry-date that allows us to sequence entries and ultimately provide an accurate snapshot of the data as it is or was at a given point in time. Due to the criticality of the entry-date, when this value is missing from an entry it presents us with a problem. The pipeline contains some logic that will set missing entry-dates to a default value (currently the date on when we first collected the resource containing the entry), but this is not reliable.

This problem becomes particularly acute when dealing with historic resources that are missing entry-dates. If we start collecting a historic resource on 1st Jan 2021, that date will be used as the default for any missing entry-dates despite the fact that this data may have been published decades earlier. Suddenly these historic entries would take precedence over any other data collected prior to 1st Jan 2021.

## Decision

It's impossible for us to guess the correct value for the entry-date, so we will instead accept that these dates are imperfect. In the case where we know for certain that an entry-date is incorrect and this is causing data accuracy issues (e.g. as described above), we will use the existing patching mechanism to correct it.

## Consequences

 - We should be explicit with data providers about the importance and usage of the entry-date field, so that they can treat it with the care it deserves.
 - The existing mechanism to default missing entry-date values to the date of the first collection will remain in place.
 - Patches should be added to set entry-date in cases where it is known to be wrong.
 - Data providers will have visibility of any changes that our processes make to entry-date values, so that they can correct the source data ahead of any future submissions.
