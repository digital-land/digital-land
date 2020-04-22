---
title: "Guidance on the data for local authorities"
caption: "Covid-19 clinically extremely vulnerable person’s service"
label: "guidance:extremely-vulnerable-person-service-nhs-shielded-patient-data"
summary: Info
pageFeedback: true
breadcrumb: "ignore"
---

{{% contents %}}
- [Introduction]({{< ref "_index.md" >}})
- [Daily incoming data]({{< ref "daily-incoming-data.md" >}})
- NHS Shielded patient data
- [Wholesaler food delivery data]({{< ref "wholesaler-food-delivery-data.md" >}})
- [Contact us]({{< ref "contact-us.md" >}})
{{% /contents %}}

## NHS shielding patient data

There are currently 2 files of NHS patient data. Local authority hubs can access these on their [GOV.​UK transfer data account](https://transfer-coronavirus-data.service.gov.uk/). Hubs should share the relevant cuts of data with local authorities within their hub.

The first file was released on 2 April. It is the data on the original ~900k people the NHS deemed extremely vulnerable and contacted, advising them to apply for support.

The second file was released on 9 April. This is because the NHS expanded their criteria for who is clinically extremely vulnerable. These people in the second batch of data have now also received letters and texts from the NHS.

The NHS is continuing to identify people to add to the shielded patient list, so more NHS patient data should be released soon.

If you have found people listed in your daily incoming data, who do not appear in your NHS patient data files, this could be because they have only recently been identified by the NHS. These people should appear in the next NHS data file you receive.

Local authorities can contact people listed in the NHS patient data files.


### Do not share this data

{{% warning-text %}}
This is sensitive data which must not be shared, except for hubs sharing the relevant cut of the data with its corresponding local authority within their hub, and for any other reason set out in the [data sharing guidance](/).{{% /warning-text %}}


### File names 

In each hub’s GOV.​UK transfer data account, there are 2 files with titles beginning ‘nhs-’:

1. ‘nhs-20200402-183828.csv’
2. ‘nhs-20200409-105043.csv’

The second part of the title is a timestamp for when the file was created. So, the first file was created on 2020-04-02 at 18:38:28. 

{{% warning-text %}}
Do not confuse the NHS patient data files with the daily incoming data. The NHS patient data file names begin with ‘nhs-’. The daily incoming data files do not have ‘nhs-’ in the title.
{{% /warning-text %}}

### Using the NHS shielded patient data

Each local authority should do the following 2 steps:

1) Identify people who have not applied for support

Each local authority should use the 2 NHS patient data files to identify people in the area who are extremely vulnerable, but who have not applied for support.

Local authorities should cross reference the NHS data files with the daily incoming data on extremely vulnerable people who have applied for support. The people who are in the NHS data, but not the daily incoming data, have not applied to the service but could be in need of support. You should do this with both NHS data files if you have not already.

2) Check that you have not missed any newly included NHS patients

Local authorities should also make sure they do not miss anyone who has been identified as clinically extremely vulnerable but who previously applied for support. These people will appear in the more recent NHS patient data file (nhs-20200409-105043.csv) and will also now appear in the daily incoming data. However, they may not appear at the top of the incoming data file, even though they are newly listed.

{{% warning-text %}}
It is important that you do not rely on the ordering of the data, as this could change. Please check each file thoroughly for newly listed people.
{{% /warning-text %}}


### Data column headers

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
{{% pagination-next href="wholesaler-food-delivery-data.md" text="Wholesaler food delivery data" %}}
{{% /pagination-component %}}
