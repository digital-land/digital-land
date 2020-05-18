---
title: "Step 1: Create your CSV file"
---

{{% contents %}}
- [Publish your brownfield land data]({{< ref "_index.md" >}})
- Step 1: Create your CSV file
- [Step 2: Update your brownfield land web page]({{< ref "update-your-brownfield-land-web-page.md" >}})
- [Step 3: Update the national register of brownfield sites]({{< ref "update-the-national-brownfield-land-register.md" >}})
{{% /contents %}}

Brownfield site data should be listed in a CSV file named brownfield-land.csv

To complete step 1 you must be able to create or amend CSV files using spreadsheet software such as Microsoft Excel, Google Sheets or Apple Numbers, then when saving simply select ‘save as .csv file’. Find out more about [creating a CSV file](http://w3c.github.io/csvw/primer/).

We’ve created a [brownfield land data CSV template](digital-land.github.io/guidance/brownfield-sites/brownfield-sites.csv). If it helps, you can use this example file and enter your own data, following the guidelines below.

{{% inset-text %}}
The previous specification for brownfield land data contained several column headers that aren't listed here. Those fields are now optional.
The 'MinNetDwellings' field has been replaced by 'NetDwellingsRangeFrom' and 'NetDwellingsRangeTo'.
The following columns no longer appear but can be included under 'Notes':

* DevelopmentDescription
* SiteInformation
* NonHousingDevelopment
* ProposedForPIP
{{% /inset-text %}}

## Field definitions and formatting

The CSV file must include: 

* all columns listed exactly as written below, even if all fields in a column are blank
* 1 row of data for each brownfield site
* data that carefully follows the instructions for each column

Each row must contain a single entry for each unless stated otherwise. When a field requires a number use a digit (2) rather than a word (two).

### OrganistaionURI
Find your organisation in this list and enter the value in the “opendatacommunities” column. This is the URL of your organisation on https://opendatacommunities.org.

### SiteReference
Enter a unique reference your organisation uses to identify the site, or create one if none exists. It should not be used by your organisation to identify any other sites, but can be borrowed from another dataset listing the site.

### SiteNameAddress
Enter the name and address of the site in a single line of text. Put the text in double quotes if you use commas to separate parts of the address (for example, “John Smith”, “110 Elm Street”, “Bath”, “BA1 2AB”).

### SitePlanURL
Enter the URL of a webpage hosting the site plan, beginning with either “http://” or “https://”.

### GeoY
Enter the latitude of a point close to the centre of the site. The value should be 6 or fewer decimal places, using the WGS84 or ETRS89 coordinate systems specified by the open standards for government guidance on [exchange of location](https://www.gov.uk/government/publications/open-standards-for-government/exchange-of-location-point).

### GeoX
Enter the longitude of a point close to the centre of the site. The value should be 6 or fewer decimal places, using the WGS84 or ETRS89 coordinate system specified by the open standards for government guidance on [exchange of location](https://www.gov.uk/government/publications/open-standards-for-government/exchange-of-location-point).

{{% inset-text %}}
Be sure to check that you don’t mix up the latitude (Geo Y) and longitude (Geo X) values. Any location in the UK will have a latitude (Geo Y) from about 49 to 57 and a longitude (Geo X) from about -7 to 2.
{{% /inset-text %}}

### Hectares
Enter the land area of the site in hectares, up to 2 decimal places.

### OwnershipStatus
Indicate the site’s ownership by entering one of the following values: 

* “owned by a public authority” for a site wholly owned by a public authority
* “mixed ownership” for a site on land partly owned by a public authority (‘mixed ownership’) 
* “not owned by a public authority” for a site not owned in any part by a public authority
* “unknown” where the ownership of the site is unknown or unclear to your organisation
For more information see paragraph 5 of [Schedule 2 of the 2017 Regulations](http://www.legislation.gov.uk/uksi/2017/403/schedule/2/made).

### PlanningStatus
Choose one of the following to indicate what stage of the planning process the site is at:

* permissioned
* not permissioned
* pending decision

When part of a site is permissioned, it should be recorded as “permissioned”, and the notes field used to explain why it’s only partly permissioned. For more information see paragraph 5 of [Schedule 2 of the 2017 Regulations](http://www.legislation.gov.uk/uksi/2017/403/schedule/2/made).

You can leave this field blank if the planning status is unclear or unknown.

### PermissionType
Choose one of the following to indicate what permission type the site has:

* full planning permission
* outline planning permission
* reserved matters approval
* permission in principle
* technical details consent
* planning permission granted under an order
* other

Where more than one permission exists for the site, identify the latest permission granted and any other permissions, including the date that such permission was granted or deemed to have been granted, in the ’Notes’ column. ‘planning permission granted under an order’ means planning permission granted under a local development order, a mayoral development order or a neighbourhood development order.

### PermissionDate
Enter the date the most recent permission was granted on the site, in the format YYYY-MM-DD. If no permission has been granted leave this blank. 

### PlanningHistory
Enter links to any web pages that give information on the site’s planning history (include the http:// or https:// prefix). Fields in this column can contain more than one link, as long as you separate multiple links with the pipe character (‘|’). You can leave this field blank.

### Deliverable
Enter ‘Y’ if there is a reasonable prospect that residential development will take place on the land within 5 years of the date you enter this site in the register. Otherwise leave this field blank.

### NetDwellingsRangeFrom
Enter the minimum number of dwellings that the local authority estimates the site should support, as defined in [regulation 2 of the 2017 Regulations](http://www.legislation.gov.uk/uksi/2017/403/regulation/2/made).

### NetDwellingsRangeTo
Enter the maximum number of dwellings that the local authority estimates the site should support, as defined in [regulation 2 of the 2017 Regulations](http://www.legislation.gov.uk/uksi/2017/403/regulation/2/made).

### HazardousSubstances
Enter ‘Y’ if the local authority is required by [regulation 26(3) of the Planning (Hazardous Substances) Regulations 2015](https://www.legislation.gov.uk/uksi/2015/627/regulation/26/made) to conduct an environmental impact assessment on the proposed development. Otherwise leave this blank. 

### Notes
Enter any general information about a site that developers might find useful. This field can contain multiple entries.

Describe any housing development proposed for the site.

You may include links to any webpages that give:

* information on planning decisions related to any environmental impact assessments
* the results of any related consultations
* an explanation of how they were taken into account when making the decisions 

You may also describe any non-housing development proposed for the site. Indicate how the buildings or land will be used, and the scale of any such development.

This field should be no longer than 4,000 characters. You can leave this blank.

### FirstAddedDate
Enter the date that the site was first added to this register, in the format YYYY-MM-DD. 

### LastUpdatedDate
Enter the date this entry in the register was updated, in the format YYYY-MM-DD.

### EndDate
If the site  no longer needs to be listed it should remain on the register and not be deleted. Enter the date the site was developed or determined to no longer be a brownfield site, in the format YYYY-MM-DD.

---

## Checking your publication
We’re also developing a tool which you can try out to [check your brownfield land data](https://brownfield-sites-validator.cloudapps.digital/start). This is not a live service, but a prototype we are testing.

{{% pagination-component %}}
{{% pagination-next href="update-your-brownfield-land-web-page.md" text="Step 2: Update your brownfield land web page" %}}
{{% /pagination-component %}}
