## Digital Land

##  Overview

The core value proposition of Digital Land is to present Geographical Information System (GIS) data, in the form of static artifacts and API endpoints, to relevant consumers. The data served will primarily be focused around that which would impact UK planning applications in the short or long term.

This data is ingested from various third parties, including central government, local government and third party sources (e.g. ordinance survey). This data is ingested via HTTP/S polling and transformed into a data set artifacts which are then served through the [digital land website](https://www.digital-land.info/dataset/) and [digital land API](https://www.digital-land.info/docs). The frequency of this polling is currently once per day, and is triggered via [Github Actions](https://github.com/features/actions) run against the Github repository for a [specific collection](https://github.com/orgs/digital-land/repositories?q=collection&type=&language=&sort=)

## Architecture

![Image High Level Architectural Diagram](./images/HighLevelArchitectureDiagram.png)


### Pipeline run process

For a collection that executes via Github Actions, the execution flow is defined within [`./.github/workflows/run.yml](https://github.com/digital-land/brownfield-land-collection/blob/main/.github/workflows/run.yml)

The typical execution flow for a pipeline might look like:
1. Update makerules
2. Commit updated makerules
3. Install dependencies
4. Fetch dataset files from S3
5. Run the collector
6. Commit collection
7. Update the collection dataset
8. Commit updated collection
9. Push collection files to S3
10. Run the pipeline to make the dataset
11. Commit harmonised files
12. Push dataset files to S3


### Anatomy of a collection repository

### Inputs

Within a repository, the sources to be polled are contained in collection/sources.csv

### Outputs

collection/log.csv is appended


### Execution Environment

Currently most of the pipeline is triggered via Github Actions which are triggered on a daily basis.

Some of these more long-running jobs have been moved over to AWS Batch

Output of each pipeline is a CSV

Data hash is used as identifier(?)



## Infrastructure

Heroku (dashboard, design system)
AWS (everything else)

## Monitoring

https://digital-land-dashboard.herokuapp.com/

## Services

### Frontend

### Datasettee

## Data model

Base data model:
* "entity" (name could change) (refered to as record on the frontend)
* start date
* end date
* geojson (transformed to point or polygon)
* well-known-text
* typology
* JSON (dumping ground, keys may be promoted to proper fields at some point)

Example: [Brownfield land](https://github.com/digital-land/brownfield-land-collection/blob/547a6d4b79a9dfa3bcb7dcbe59502c3c0c1cd09e/fixed/f19782aef6adaa956ae2e4c28f69bd042ece9d7f5d6a5490e1e71fc636e4e249.txt#L1)

```
PermissionDate
PlanningHistory
ProposedForPIP
MinNetDwellings
DevelopmentDescription
NonHousingDevelopment
Part2
NetDwellingsRangeFrom
NetDwellingsRangeTo
HazardousSubstances
SiteInformation
Notes
FirstAddedDate
LastUpdatedDate
OrganisationURI
OrganisationLabel
SiteReference
PreviouslyPartOf
SiteNameAddress
SiteplanURL
CoordinateReferenceSystem
GeoX
GeoY
Hectares
OwnershipStatus
Deliverable
PlanningStatus
PermissionType
```

## List of Datasets

## External Links
* [Digital Land homepage](https://www.digital-land.info/)
* [Digital Land API Documentation](https://www.digital-land.info/docs)
* [Living Document](https://docs.google.com/presentation/d/1kwbPaEcKrRej2ckVFibwu1YYDfh5SdKIXNZradcbEaM/edit#slide=id.ge28ee0d90f_0_34)

