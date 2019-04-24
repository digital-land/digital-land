---
title: "Update your brownfield site register"
---

Local planning authorities must maintain a register of their brownfield sites that is publicly available and in an agreed format. 

This guidance, alongside the [Check your brownfield site register service](https://brownfield-sites-validator.cloudapps.digital/start) will help local authorities ensure brownfield site registers are:

* in the agreed format and contain the required data
* kept up-to-date
* easily found online

This ensures the data is fit for purpose and meets the needs of planners, developers, policymakers and communities.

## Use the brownfield sites common data format

Your register should be uploaded to your website as a .csv file that contains specific fields and content. If it isn’t the data will be difficult or impossible to use. 

### File type and name

Brownfield type registers must be saved in a comma separated value (.csv) file. The file name must be in the format brownfield-sites.[organisation code].csv, where [organisation code] can be found…

So, for example, Dacorum local authority’s brownfield site register file would be named: 

{{< tech-block >}}brownfield-sites-DAC.csv{{< /tech-block >}}

For general information on creating a .csv file see the W3C’s [CSVs on the web: a primer](http://w3c.github.io/csvw/primer/).

### Field definitions and formatting

The .csv file must include: 

* all columns listed below (even if all fields in a column are blank) 
* 1 row of data for each brownfield site
* data that carefully follows the instructions for each column
Each field must contain only one entry (with the exception of planning history, which can contain multiple entries).

Use our [Check your brownfield site register](https://brownfield-sites-validator.cloudapps.digital/start) service to check the .csv file for errors or omissions. The tool can automatically correct some of these.

Column 1
**OrganisationURI**

Search for your local authority on the Local Government Association’s [Uniform resource identifiers (URIs) tool](https://uris.opendata.esd.org.uk/). Enter the URI, which will begin with ‘http://opendatacommunities.org/id/’. If a site is spread across local authority boundaries, a URI must be entered for each local authority that contains part of the site. 

Column 2
**OrganisationLabel**

Enter the official name of the local authority identified in column 1.

Column 3
**SiteReference**

Enter the unique reference the local authority uses to identify the site. It mustn’t be used by the authority to identify any other sites, but can be borrowed from other another dataset listing the site.

Column 4
**PreviouslyPartOf**

If the site was part of a different SiteReference on an earlier register, you can report that here. Otherwise leave this blank.

Column 5
**SiteNameAddress**

Enter the name and address of the site in a single line of text. Put the text in double quotes if you use commas to separate parts of the address (for example, “John Smith”, “110 Elm Street”, “Bath”, “BA1 2AB”).

Column 6
**SiteplanURL**

Enter the address (URL) of the webpage hosting the site plan, beginning with either http:// or https://.

Column 7

**CoordinateReferenceSystem**

Enter the coordinate reference system that’s used for the location mapping fields ‘GeoX’ and ‘GeoY’. Local authorities should be using [ETRS89](https://en.wikipedia.org/wiki/European_Terrestrial_Reference_System_1989) – the adopted standard where precision mapping is needed – but WGS48 and OSGB36 are also valid entries.

Column 8

**GeoX**

Enter the longitude or east grid reference for the centre of the site. Longitude will typically be stated to 6 decimal places of a degree. Easting will typically be a whole number, or stated up to 2 decimal places.

Column 9
**GeoY**
Enter the latitude or north grid reference for the centre of the site. Latitude will typically be stated to 6 decimal places of a degree. Northing will typically be a whole number, or stated up to 2 decimal places.

Column 10
**Hectares**

Enter the land area of the site in hectares, up to 2 decimal places.

Column 11
**OwnershipStatus**

Choose which one of the following describes who owns the site: 

* owned by a public authority
* not owned by a public authority
* mixed ownership
* unknown ownership

For more information see paragraph 5 of [Schedule 2 of the 2017 Regulations](http://www.legislation.gov.uk/uksi/2017/403/schedule/2/made).

Column 12
**Deliverable**

Enter ‘Yes’ if there is a reasonable prospect that residential development will take place on the land within 5 years beginning with the entry. Otherwise leave this field blank.

Column 13
**PlanningStatus**

Choose one of the following to indicate what stage of the planning process the site is at, if any:

* permissioned
* not permissioned
* pending decision

When part of a site is permissioned, it should be recorded as ‘permissioned’ here and the notes field used to explain why it’s only partly permissioned. For more information see paragraph 5 of [Schedule 2 of the 2017 Regulations](http://www.legislation.gov.uk/uksi/2017/403/schedule/2/made).

Column 12
**Deliverable**

Enter ‘Yes’ if there is a reasonable prospect that residential development will take place on the land within 5 years beginning with the entry. Otherwise leave this field blank.

Column 13
**PlanningStatus**

Choose one of the following to indicate what stage of the planning process the site is at, if any:

* permissioned
* not permissioned
* pending decision

When part of a site is permissioned, it should be recorded as ‘permissioned’ here and the notes field used to explain why it’s only partly permissioned. For more information see paragraph 5 of [Schedule 2 of the 2017 Regulations](http://www.legislation.gov.uk/uksi/2017/403/schedule/2/made)..

Column 14
**PermissionType**

If you entered ‘permissioned’ in column 13 enter one of the following: 

* full planning permission
* outline planning permission
* reserved matters approval
* permission in principle
* technical details consent
* planning permission granted under an order
* other

Otherwise leave this blank. The terms are defined in paragraph 5 of [Schedule 2 of the 2017 Regulations](http://www.legislation.gov.uk/uksi/2017/403/schedule/2/made). If there is more than one permission for the site, identify the latest permission granted in this field. Use the ‘Notes’ column to list any other permissions, including the date each was granted.

Column 15
**PermissionDate**

Enter the date the most recent permission was granted on the site, in the format yyyy-mm-dd. If no permission has been granted leave this blank. 

Column 16
**PlanningHistory**

Enter links here to any webpages that give information on the site’s planning history (include the http:// or https:// prefix and separate multiple links with the pipe character, i.e. ‘|’). You have the option to leave this field blank.

Column 17
**ProposedForPIP**

Enter ‘yes’ if the site has been proposed for residential development (permission in principle). Otherwise leave blank. This field must be entered not later than 7 days after the local authority visibly posts a notice on or near the land for which this proposal is being made.

Column 18
**MinNetDwellings**

Enter the minimum number of dwellings that the local authority estimates the site should support, as defined in [regulation 2 of the 2017 Regulations](http://www.legislation.gov.uk/uksi/2017/403/regulation/2/made).

Column 19
**DevelopmentDescription**

Describe any housing development proposed for the site, in up to 4,000 characters. Leave blank if you make an entry for columns 22 and 23.

Column 20
**NonHousingDevelopment**

Describe any non-housing development proposed for the site, in up to 4,000 characters. Indicate how the buildings or land will be used, and the scale of any such development. Leave blank if not relevant.

Column 21
**Part2**

Enter ‘yes’ if you will fill out columns 22, 23 and/or 24. Leave this blank if you haven’t used any of those columns or if you entered ‘yes’ in column 17. 

Column 22
**NetDwellingsRangeFrom**

If column 19 is blank, enter the minimum number of dwellings that, in the authority’s opinion, the land is capable of supporting. Otherwise leave this blank.

Column 23
**NetDwellingsRangeTo**

If column 19 is blank, enter the maximum number of dwellings that, in the authority’s opinion, the land is capable of supporting. Otherwise leave this blank.

Column 24
**HazardousSubstances**

Enter ‘yes’ if the local authority is required by [regulation 26(3) of the Planning (Hazardous Substances) Regulations 2015](https://www.legislation.gov.uk/uksi/2015/627/regulation/26/made) to conduct an environmental impact assessment on the proposed development. Otherwise leave blank. 

Column 25
**SiteInformation**

If you enter ‘yes’ in column 24, enter here links to any webpages that give:
* information on planning decisions related to any environmental impact assessments
* the results of any related consultations
* an explanation of how they were taken into account when making the decisions 
Otherwise leave this blank. Include the http:// or https:// prefix and separate multiple links with the pipe character, i.e. ‘|’. 

Column 26
**Notes**

Enter any general information about a site that developers might find useful (up to 4,000 characters). This field is optional and can be left blank.

Column 27
**FirstAddedDate**

Enter the date that the site was first added to this register, in the format yyyy-mm-dd. 

Column 28
**LastUpdateDate**

Enter the date that the register was last updated, in the format yyyy-mm-dd. If it hasn’t been updated since it was first added to the register, repeat that date.

##Check the file using our validator

After you’ve updated your .csv file, use our validation tool to [check your brownfield site register}(https://brownfield-sites-validator.herokuapp.com/start) service for common errors and omissions. It will also fix many of these for you.

##Keep your register up to date

Try to update your register as soon as a new brownfield site is identified or an existing one changes status.

While local planning authorities are required to review their brownfield site registers at least once a year, updating them more frequently will give better value to planners and developers.

##Make sure users can find your register

Brownfield site data isn’t useful if it can’t be found. Ensure people can find it by:
 
* uploading the register to your planning authority’s website at a URL (web address) that won’t change
* notifying MHCLG if for some reason the URL does change                                                                                                                                                                                         
* using the agreed convention when naming the file 

##Common problems with brownfield site registers

A number of problems frequently occur in brownfield site registers. Look out for:

* using the wrong coordinate system 
  * in other words, rather than ‘GeoX’ and ‘GeoY’ (the ETRS89 system) registers sometimes use latitude and longitude (OSGB35) or northing and easting (WGS84)
* accidentally transposed longitude and latitude 
  * any location in the UK will have a latitude in the range of ~49 to 57 and a longitude in the range of ~-7 to 2
* incorrect column headings
  * column headings are case sensitive (eg SiteNameAddress is correct, but sitenameaddress is not)
* mandatory fields that are empty
* incorrect date formats
  * eg 2015-05-02 is correct, but 2nd May 2015 is not)
* fields containing invalid values
  * eg text appears where a number is required
  * an invalid value appears where a specific type or range of value is required
