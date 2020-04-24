---
title: "Extremely vulnerable person's service: guidance on the data"
caption-ignore: true
label: "guidance:extremely-vulnerable-person-service-daily-incoming-data"
summary: Info
pageFeedback: true
breadcrumb: "ignore"
---

{{% contents %}}
- [Introduction]({{< ref "_index.md" >}})
- Daily incoming data
- [NHS Shielded patient data]({{< ref "nhs-shielded-patient-data.md" >}})
- [Wholesaler food delivery data]({{< ref "wholesaler-food-delivery-data.md" >}})
- [Contact us]({{< ref "contact-us.md" >}})
{{% /contents %}}

##  Daily incoming data on extremely vulnerable people who have applied for support

This is the data on people who have applied for support via the clinically extremely vulnerable person’s service, through the [GOV.UK form](https://www.gov.uk/coronavirus-extremely-vulnerable) or phone line.

A new file is added to each hub’s [GOV.​UK transfer data account](https://transfer-coronavirus-data.service.gov.uk/) every day at 4pm.

### Sharing this data

Hubs must share the relevant cuts of data with local authorities within their hub. Read the [data sharing guidance](/) for more detail.

### File names
In your account, you should see data files named like this:

{{< tech-block >}}20200323134222.csv{{< /tech-block >}}

The name of each file is a timestamp of when each file was created. The above example would have been created on 2020-03-23 13:42:22.

{{< warning-text >}}Do not confuse the daily incoming data files with the NHS patient data files. The NHS patient data file names begin with ‘nhs-’. The daily incoming data files do not have ‘nhs-’ in the title.{{< /warning-text >}}

### Using the data

Each file will duplicate all previous daily incoming data, but will also list newly registered people. When you download each new file, you may want to download the previous day’s file to compare the 2 and check which people are newly listed.

This also means that if people complete the web form or telephone process multiple times, they will appear more than once. The person’s ID and timestamp can be used to determine which is the latest record.

{{< warning-text >}}It is important that you do not rely on the ordering of the data, as this could change. Please check each file thoroughly for newly listed people.{{< /warning-text >}}

### Data column headers

| Column Header | Explanation  |
| ------------- |:-------------|
| Timestamp     | Time the data was recorded |
| Reference     | A reference ID for the form/phone call |
| LocalAuthorityDistrict | ONS code for this person’s address |
| FirstName     | First name   |
| MiddleName | Other names |
| LastName | Last name |
| Address1 | Address (line 1) |
| Address2 | Address (line 2) |
| Address3 | Address (line 3) |
| Address4 | Address (line 4) |
| Address5 | Address (line 5) |
| Postcode | Postcode |
| Phone | Contact phone number (if they filled in online form) |
| Mobile | Contact mobile number (if they filled in online form) |
| IVRPhone | Contact phone number (if they used phone service) |
| IVRMobile | Contact mobile number (if they used phone service) |
| Email | Contact email address |
| ReceivedLetter | Whether they received an NHS letter or not |
| MedicalConditions | Whether they have medical conditions |
| NHSNumber | NHS number |
| ID | Unique ID per person |
| DateOfBirth | Date of birth |
| EssentialSupplies | Can the person get essential supplies?<br><br>**Yes** means they have access to essential supplies, so they do not need an emergency delivery.<br>**No** means they do not have access to essential supplies, so they need some delivered. |
| DietaryRequirements | Do they have dietary requirements? |
| BasicCareNeedsMet | Do they have someone they can talk to, help them wash, keep their house clean and help meet their basic needs? |
| CarrySupplies | Can they carry the supplies into their property (or do they have someone who can help with this)? |


{{% pagination-component %}}
{{% pagination-prev href="_index.md" text="Introduction" %}}
{{% pagination-next href="nhs-shielded-patient-data.md" text="NHS shielded patient data" %}}
{{% /pagination-component %}}
