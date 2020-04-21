---
title: "Information on the extremely vulnerable person’s service"
label: "guidance:extremely-vulnerable-person-service-daily-incoming-data"
summary: Info
pageFeedback: true
breadcrumb: "ignore"
---

{{% contents %}}
- [Overview]({{< ref "_index.md" >}})
- Daily incoming data from people who have applied for support
- [NHS Shielded patient data]({{< ref "nhs-shielded-patient-data.md" >}})
- [Wholesaler data on the delivery status of food parcels]({{< ref "_index.md" >}})
- [Feedback loops]({{< ref "_index.md" >}})
- [Further information]({{< ref "_index.md" >}})
- [Contact us]({{< ref "_index.md" >}})
{{% /contents %}}

## Daily incoming data on extremely vulnerable people who have applied for support

This is the data on people who have applied for coronavirus support via the [clinically extremely vulnerable person’s service](https://www.gov.uk/coronavirus-extremely-vulnerable) (either on GOV.UK or via the phone line). This dataset is updated daily, which local authority hubs can access and send to the other local authorities in their hubs. 

The data updates every day, at midday. 

Each file will duplicate all previous data, but will also list additional people. When you download each new file, you may want to download the previous day’s file to compare the 2 and check which people are newly listed.

This also means that if people complete the web form or telephone process multiple times they will appear more than once. The person’s ID and timestamp can be used to determine which is the latest record.

### File names
In your account, you should see data files named like this:

* 20200323134222.csv

The name of each file is a timestamp of when each file was created. The above example would have been created on 2020-03-23 13:42:22. 

### Sharing this data
Local authority hubs must share this data with local authorities in their hub - sending to each local authority the data on people within that local authority. So, this data can be shared; what you do with it is up to you, so long as you respect the data protection principles. 

### Data fields and explanations

| Column Header | Explanation  |
| ------------- |:-------------|
| Timestamp     | Time the data was recorded |
| Reference     | A reference ID for the form /phone call    |
| LocalAuthorityDistrict | ONS code for this person’s address |
| FirstName     | First name   |
| MiddleName | Other names |
| LastName | Last name |
| Address1 | Address |
| Address2 | Address |
| Address3 | Address |
| Address4 | Address |
| Address5 | Address |
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
| EssentialSupplies | Can the person get essential supplies? (Yes if they can; No if they cannot access essential supplies)* |
| DietaryRequirements | Do they have dietary requirements? |
| BasicCareNeedsMet | Do they have someone they can talk to, help them wash, keep their house clean and help meet their basic needs? |
| CarrySupplies | Can they carry the supplies into their property (or do they have someone who can help with this)? |

#### Options for Essential Supplies 
**Yes** - means they have access to essential supplies, so they do not need an emergency delivery.

**No** - means they do not have access to essential supplies, so they need some delivered.

## Data on social care and dietary requirements
We are working toward this. The first iteration is a standardised offer – a very basic, food package that is an emergency provision for people who might otherwise starve. In order to get the data and food parcels out quickly, we have built the most basic service. 
However, we are now working to introduce other measures to allow deliveries to be more tailored.



{{% pagination-component %}}
{{% pagination-prev href="_index.md" text="Information on the extremely vulnerable person service" %}}
{{% pagination-next href="nhs-shielded-patient-data.md" text="NHS shielded patient data" %}}
{{% /pagination-component %}}