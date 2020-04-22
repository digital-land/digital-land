---
title: "Guidance on the data for local authorities"
caption: "Covid-19 clinically extremely vulnerable person’s service"
label: "guidance:extremely-vulnerable-person-service-wholesaler-data"
summary: Info
pageFeedback: true
breadcrumb: "ignore"
---

{{% contents %}}
- [Introduction]({{< ref "_index.md" >}})
- [Daily incoming data]({{< ref "daily-incoming-data.md" >}})
- [NHS Shielded patient data]({{< ref "nhs-shielded-patient-data.md" >}})
- Wholesaler food delivery data
- [Contact us]({{< ref "contact-us.md" >}})
{{% /contents %}}

## Wholesaler food delivery data

This is the information from wholesalers (Brakes and Bidfood) about upcoming deliveries and the status of completed or attempted deliveries.

Local authority hubs should have been emailed a link to a secure online folder (URL beginning with “micollab.joinedupdclg.net”). In this folder are 2 files for each local authority within a hub:

* File 1: Upcoming deliveries
* File 2: Deliveries made or attempted

Email [shielding@communities.gov.uk](shielding@communities.gov.uk) if you are a local authority hub and cannot access the wholesaler data.

## File 1: Upcoming deliveries - data column headings

| Column header | Explanation | Example |
| ------------- |:------------|:--------|
| GOV ID | ID to helps us manage the data | e5d9f995e7f005f2644f97cce1e077hf |
| Full Name | Shielded person’s full name | Joe Bloggs |
| Full Address | Delivery address | 1 The Street, Norwich |
| PostcodeUpdated | Delivery postcode | NR1 1ZZ |
| Phone | Contact phone number | 7987654321 |
| Provider | The wholesaler delivering the parcels | Will be either Brakes or Bidfood |
| Next Delivery | Date of next delivery<br><br>If “NULL” this means we have kept the person’s details on record but they have said they will no longer need delivery | 21/04/2020 |
| LAHubName | Name of the local authority hub | Norfolk County Council |
| LAName | Name of the local authority | Norwich City Council |
| LACode | Statistical geography code of local authority | E07000148 |
| Easting | Coordinate of delivery postcode | 321234 |
| Northing | Coordinate of delivery postcode | 123456 |
| FileName | Name of this file | Norwich City Council - Norfolk County Council Upcoming Deliveries |

### File 2: Deliveries made or attempted - data column headings

This is a continuously growing file which will duplicate the previous file’s data.

| Column header | Explanation | Example |
| ------------- |:------------|:--------|
| Company | The wholesaler delivering the parcels | Will be either Brakes or Bidfood |
| ID | ID to helps us manage the data | e5d9f995e7f005f2644f97cce1e077hf |
| Name | Shielded person’s full name | Joe Bloggs |
| Address | Delivery address | 1 The Street, Norwich |
| Postcode | Delivery postcode | NR1 1ZZ |
| DelDate | Date of delivery (made or attempted) | 21/04/2020 |
| Outcome | Number relates to Outcome_Description column. | 1 |
| Comment | Comment on delivery outcome | Delivery made |
| Outcome_Description | Explanation of outcome number<br><br>**1** = Delivered to individual<br>**2** = No Answer and left on doorstep<br>**3** = Rejected as no longer required<br>**4** = Unopened box still there from last week<br>**5** = Unable to access issue<br>**6** = Unable to deliver: delivery box failure; vehicle failure; road traffic accident; driver’s hours; staff problems etc.<br>**9** = TBC | Delivered to individual |
| LAHubName | Name of the local authority hub | Norfolk County Council |
| LAName | Name of the local authority | Norwich City Council |
| LACode | Statistical geography code of local authority | E07000148 |
| Easting | Coordinate of delivery postcode | 321234 |
| Northing | Coordinate of delivery postcode | 123456 |
| FileName | Name of this file | Norwich City Council - Norfolk County Council Deliveries Made or Attempted |

### Changes to the wholesaler food delivery data

Soon hubs will be able to access this data through the [GOV.​UK transfer data account](https://transfer-coronavirus-data.service.gov.uk/).

The format of the wholesaler food delivery data is also changing. Instead of receiving 2 files per local authority, hubs will soon only receive 1 file of data on attempted deliveries. Hubs will not receive data on upcoming deliveries. We will provide more information on this soon.


{{% pagination-component %}}
{{% pagination-prev href="nhs-shielded-patient-data.md" text="NHS shielded patient data" %}}
{{% pagination-next href="contact-us.md" text="Contact us" %}}
{{% /pagination-component %}}