---
title: "Information on the extremely vulnerable person’s service"
label: "guidance:extremely-vulnerable-person-service-nhs-shielded-patient-data"
summary: Info
pageFeedback: true
breadcrumb: "last"
---

{{% contents %}}
- [Introduction]({{< ref "_index.md" >}})
- [Daily incoming data]({{< ref "daily-incoming-data.md" >}})
- NHS Shielded patient data
- [Wholesaler food delivery data]({{< ref "wholesaler-food-delivery-data.md" >}})
- [More information about the process]({{< ref "more-information-about-the-process.md" >}})
- [Contact us]({{< ref "contact-us.md" >}})
{{% /contents %}}

## NHS shielding patient data

Hubs can access this data on their online account and share the relevant cuts with local authorities within their hub.

In your account there are 2 files with ‘nhs-’ at the beginning of their titles:

1. nhs-20200402-183828.csv
2. nhs-20200409-105043.csv

These contain highly sensitive data on NHS shielded patients. Some of the people listed may not have applied for support. 

The first file was released on 2 April. This is the NHS patient dataset that has been sent to all local authority hubs. It is the data on the original ~900k people the NHS deemed clinically extremely vulnerable and sent letters and texts to, advising them to apply for support.

The second file was released on 9 April. This is because the NHS expanded their criteria for who is clinically extremely vulnerable. These people have now also received letters and texts from the NHS.

### File names

Do not confuse the NHS data files (file names beginning with “nhs-”) with the incoming daily files (which do not have “nhs-” in their title). 

The second part of the title is a timestamp for when the file was created. So, the first file was created on 2020-04-02 at 18:38:28. 

### Purpose of the NHS shielded patient data

Each local authority should use this data to identify people in the area who are extremely vulnerable, but who have not applied for support.

Local authority hubs must pass each cut of this data to the corresponding local authority in their hub. Each local authority must then cross reference this one-off NHS data, with the data on extremely vulnerable people who have applied for support (the data which is updated daily). These are the people who have not applied to the service, but who could be in need of support.

### Do not share this data
This is sensitive data which must not be shared, except for hubs sharing the relevant cut of the data with its corresponding local authority within their hub.

### Data fields and explanations

| Column header | Explanation |
| ------------- |:------------|
| Rowid | NHS row ID |
| Timestamp | Date this data was recorded by the NHS |
| NHSNumber | NHS number |
| FirstName | First name |
| MiddleName | Other (middle) name |
| LastName | Last name |
| Address1 | Address (line 1) |
| Address2 | Address (line 2) |
| Address3 | Address (line 3) |
| Address4 | Address (line 4) |
| Address5 | Address (line 5) |
| Postcode | Postcode |
| Phone | Phone number |
| Mobile | Mobile phone number |
| DateOfBirth | Date of birth |
| LocalAuthorityOfResidence | Local Authority of residence |
| LocalAuthorityDistrict | Local Authority District ONS Code |


{{% pagination-component %}}
{{% pagination-prev href="daily-incoming-data.md" text="Daily incoming data from people who have applied for support" %}}
{{% /pagination-component %}}
