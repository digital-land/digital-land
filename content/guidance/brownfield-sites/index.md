---
title: "Publish your brownfield site data"
---

{{% contents %}}
- Publish your brownfield site data
- [Step 1: Create your CSV file]({{< ref "create-your-csv-file.md" >}})
- [Step 2: Update your brownfield site web page]({{< ref "update-your-brownfield-site-web-page.md" >}})
- [Step 3: Update the national register of brownfield sites]({{< ref "update-the-national-register-of-brownfield-sites.md" >}})
{{% /contents %}}

The Town and Country Planning (Brownfield Land Register) Regulations 2017 require local planning authorities to maintain a register of their brownfield sites. This guidance will help local authorities ensure brownfield site registers are:

* published in the agreed format and contain the required data
* kept up to date
* easily found online

{{% inset-text %}}
Please share any feedback on this guidance by emailing DigitalLand@communities.gov.uk
{{% /inset-text %}}

##Make your data findable, usable and trustworthy

Brownfield sites are an important part of cost-efficient and sustainable local planning and development. Data on them has a wide range of current and potential uses, including:

* planning land and housing development
* creating new digital services
* giving community members insight into local development

But for data to be useful it must be easy to find, use, understand and trust. Local authorities should ensure that their brownfield site data is all of these by following this guidance, which gives a high-level overview of the data format and the publication process.

We’re also developing a tool which you can try out to [check your brownfield site data](https://brownfield-sites-validator.cloudapps.digital/start). This is not a live service, but a prototype we are testing.


## Publishing brownfield site data: 3 steps

Try to update your register as soon as a new brownfield site is identified or an existing one changes status. Local planning authorities must review their brownfield site register at least once a year but are encouraged to do so as often as possible to ensure the data is up to date, and to give better value to planners and developers. 

Publishing is a 3 step process:

1. Create a brownfield site CSV file
2. Upload each of these files to your organisation’s website and give them a persistent URL, then clearly link to them from your brownfield site web page
3. Update the national register of brownfield sites on the Ministry of Housing, Communities and Local Government (MHCLG) website

{{% inset-text %}}
You may not be able or authorised to complete all steps. Each step identifies the skills and authority required to complete it.
{{% /inset-text %}}

{{% pagination-component %}}
{{% pagination-next href="create-your-csv-file.md" text="Step 1: Create your CSV file" %}}
{{% /pagination-component %}}

---
title: "Step 1: Create your CSV file"
---

{{% contents %}}
- [Publish your brownfield site data]({{< ref "_index.md" >}})
- Step 1: Create your CSV file
- [Step 2: Update your brownfield site web page]({{< ref "update-your-brownfield-site-web-page.md" >}})
- [Step 3: Update the national register of brownfield sites]({{< ref "update-the-national-register-of-brownfield-sites.md" >}})
{{% /contents %}}

{{% inset-text %}}
To complete step 1 you must be able to create or amend CSV files using spreadsheet software such as Microsoft Excel, Google Sheets or Apple Numbers, then when saving simply select ‘save as .csv file’. Find out more about [creating a CSV file](http://w3c.github.io/csvw/primer/).
{{% /inset-text %}}


Brownfield site data should be listed in a CSV file named brownfield-sites.csv

##Field definitions and formatting

The CSV file must include: 

* all columns listed exactly as written below, even if all fields in a column are blank (column headers are case sensitive) 
* 1 row of data for each brownfield site
* data that carefully follows the instructions for each column
Each row must contain a single entry for each unless stated otherwise. When a field requires a number use a digit (2) rather than a word (two).

###OrganistaionURI
Find your organisation in this list and enter the value in the “opendatacommunties” column. This is the URL of your organisation on https://opendatacommunities.org.

###SiteReference
Enter a unique reference your organisation uses to identify the site, or create one if none exists. It should not be used by your organisation to identify any other sites, but can be borrowed from another dataset listing the site.

###SiteNameAddress
Enter the name and address of the site in a single line of text. Put the text in double quotes if you use commas to separate parts of the address (for example, “John Smith”, “110 Elm Street”, “Bath”, “BA1 2AB”).

###SitePlanURL
Enter the URL of a webpage hosting the site plan, beginning with either “http://” or “https://”.

###Latitude
Enter the latitude of a point close to the centre of the site. The value should be 6 or fewer decimal places, using the WGS84 or ETRS89 coordinate systems specified by the open standards for government guidance on [exchange of location](https://www.gov.uk/government/publications/open-standards-for-government/exchange-of-location-point). This field was formerly called “GeoY”.

###Longitude
Enter the longitude of a point close to the centre of the site. The value should be 6 or fewer decimal places, using the WGS84 or ETRS89 coordinate system specified by the open standards for government guidance on [exchange of location](https://www.gov.uk/government/publications/open-standards-for-government/exchange-of-location-point). This field was formerly called “GeoX”.

! Be sure to check that you don’t mix up the latitude and longitude values. Any location in the UK will have a latitude from about 49 to 57 and a longitude from about -7 to 2.

###Hectares
Enter the land area of the site in hectares, up to 2 decimal places.

###OwnershipStatus
Indicate the site’s ownership by entering one of the following values: 

* “owned by a public authority” for a site wholly owned by a public authority
* “mixed ownership” for a site on land partly owned by a public authority (‘mixed ownership’) 
* “not owned by a public authority” for a site not owned in any part by a public authority
* “unknown” where the ownership of the site is unknown or unclear to your organisation
For more information see paragraph 5 of [Schedule 2 of the 2017 Regulations](http://www.legislation.gov.uk/uksi/2017/403/schedule/2/made).

###PlanningStatus
Choose one of the following to indicate what stage of the planning process the site is at:

* “permissioned”
* “not permissioned”
* “pending decision”

When part of a site is permissioned, it should be recorded as “permissioned”, and the notes field used to explain why it’s only partly permissioned. For more information see paragraph 5 of [Schedule 2 of the 2017 Regulations](http://www.legislation.gov.uk/uksi/2017/403/schedule/2/made).

You can leave this field blank if the planning status is unclear or unknown.

###PermissionType
Choose one of the following to indicate what permission type the site has:

* “full planning permission”
* “outline planning permission”
* “reserved matters approval”
* “permission in principle”
* “technical details consent”
* “planning permission granted under an order”
* “other”

Where more than one permission exists for the site, identify the latest permission granted and any other permissions, including the date that such permission was granted or deemed to have been granted, in the ’Notes’ column. ‘planning permission granted under an order’ means planning permission granted under a local development order, a mayoral development order or a neighbourhood development order.

###PermissionDate
Enter the date the most recent permission was granted on the site, in the format YYYY-MM-DD. If no permission has been granted leave this blank. 

###PlanningHistory
Enter links to any web pages that give information on the site’s planning history (include the http:// or https:// prefix). Fields in this column can contain more than one link, as long as you separate multiple links with the pipe character (‘|’). You can leave this field blank.

###Deliverable
Enter ‘Y’ if there is a reasonable prospect that residential development will take place on the land within 5 years of the date you enter this site in the register. Otherwise leave this field blank.

###NetDwellingsRangeFrom
Enter the minimum number of dwellings that the local authority estimates the site should support, as defined in [regulation 2 of the 2017 Regulations](http://www.legislation.gov.uk/uksi/2017/403/regulation/2/made).

###NetDwellingsRangeTo
Enter the maximum number of dwellings that the local authority estimates the site should support, as defined in [regulation 2 of the 2017 Regulations](http://www.legislation.gov.uk/uksi/2017/403/regulation/2/made).

###HazardousSubstances
Enter ‘Y’ if the local authority is required by [regulation 26(3) of the Planning (Hazardous Substances) Regulations 2015](https://www.legislation.gov.uk/uksi/2015/627/regulation/26/made) to conduct an environmental impact assessment on the proposed development. Otherwise leave this blank. 

###Notes
Enter any general information about a site that developers might find useful. This field can contain multiple entries.

Describe any housing development proposed for the site.

You may include links to any webpages that give:
* information on planning decisions related to any environmental impact assessments
* the results of any related consultations
* an explanation of how they were taken into account when making the decisions 

You may also describe any non-housing development proposed for the site. Indicate how the buildings or land will be used, and the scale of any such development.

This field should be no longer than 4,000 characters. You can leave this blank.

###FirstAddedDate
Enter the date that the site was first added to this register, in the format YYYY-MM-DD. 

###LastUpdatedDate
Enter the date this entry in the register was updated, in the format YYYY-MM-DD.

###EndDate
If the site  no longer needs to be listed it should remain on the register and not be deleted. Enter the date the site was developed or determined to no longer be a brownfield site, in the format YYYY-MM-DD.

---

##Checking your publication
We’re also developing a tool which you can try out to [check your brownfield site data](https://brownfield-sites-validator.cloudapps.digital/start). This is not a live service, but a prototype we are testing.

---
title: "Step 2: Update your brownfield sites web page"
---

{{% contents %}}
- [Publish your brownfield site data]({{< ref "_index.md" >}})
- [Step 1: Create your CSV file]({{< ref "create-your-csv-file.md" >}})
- Step 2: Update your brownfield site web page
- [Step 3: Update the national register of brownfield sites]({{< ref "update-the-national-register-of-brownfield-sites.md" >}})
{{% /contents %}}

{{% inset-text %}}
To complete step 2 you must be able to edit (or create) your local authority’s brownfield sites web page. If you aren’t able or authorised to do this, speak to someone who is (this might be the person who updates your local planning authority’s developer contribution or planning application web pages).
{{% /inset-text %}}

Upload the brownfield site CSV file to your local planning authority's website using a [persistent URL](https://en.wikipedia.org/wiki/Persistent_uniform_resource_locator) (a web address that will not change over time). For example, Norfolk’s local planning authority might use the following persistent URL (this is an example, not live data):

https://www.norfolk.gov.uk/brownfield-site.csv

When you upload the file you should:

* keep your older files online – it’s important to retain a history of all brownfield site files
* the newest version of the brownfield data file should be called brownfield-site.csv 
* the previous version should be kept and renamed brownfield-site-YYYYMMDD.csv, with the actual date in place of YYYYMMDD (for example brownfield-site-20190731.csv)

You should then update your local planning authority’s brownfield sites web page to make the CSV files publicly available. If your website does not have a page on brownfield sites, you or someone in the web team will need to create one.

The page must list the persistent URL as defined above. The URLs must be written out in full. The URL should not change. However, if it ever does change, you must tell us.

{{% pagination-component %}}
{{% pagination-prev href="create-your-csv-file.md" text="Step 1: Create your CSV file" %}}
{{% pagination-next href="update-the-national-register-of-brownfield-sites.md" text="Step 3: Update the national register of brownfield sites" %}}
{{% /pagination-component %}}

---
title: "Step 3: Update the national register of brownfield sites"
---

{{% contents %}}
- [Publish your developer contributions data]({{< ref "_index.md" >}})
- [Step 1: Create your CSV file]({{< ref "create-your-csv-file.md" >}})
- [Step 2: Update your brownfield sites web page]({{< ref "update-your-brownfield-sites-web-page.md" >}})
- Step 3: Update the national register of brownfield sites
{{% /contents %}}

The Ministry of Housing, Communities and Local Government (MHCLG) will maintain a national register of brownfield sites.

The first time you create and publish your CSV file you must tell us where this is published (the persistent URL created in step 2). You must also tell us if this URL ever changes.

Email the URL you created in step 2 to DigitalLand@communities.gov.uk and we will add them to the national register.

You will soon be able to submit the URL through an online tool the Digital Land team are developing. When this is ready, the team will make an announcement on the [Digital Land blog](https://digital-land.github.io/blog-post/) and this guidance will be updated.

! If have any questions or feedback, please fill out this feedback form or email DigitalLand@communities.gov.uk

{{% pagination-component %}}
{{% pagination-prev href="update-your-brownfield-sites-web-page.md" text="Step 2: Update your brownfield sites web page" %}}
{{% /pagination-component %}}

National planning practice guidance on [brownfield land registers and permission in principle](https://www.gov.uk/government/collections/planning-practice-guidance
) should be read alongside this document.
