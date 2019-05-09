---
title: "Publish your developer contributions data"
---

The National Planning Policy Framework requires all local planning authorities and certain other organisations to [publish their developer contributions data](https://www.gov.uk/guidance/planning-obligations#are-planning-obligation-contributions-required-by-local-planning-authorities-publically-available) on a regular basis and in an agreed format. That format hasn’t yet been agreed, but the following guidance is a working approach that we plan to refine with your input.

Our aim is to develop a data format and publishing guidance that results in better insights into how developer contributions are supporting community infrastructure. But we also want a standard that causes as little disruption as possible to your existing processes. Please [share your feedback](https://docs.google.com/forms/d/1pvblp8l4ODFmv91yyktArGaiskVnJgFcWDCYBBRgc2A) on this guidance to help us succeed.

## Make your data findable, useable and trustworthy

Developer contributions include Section 106, community infrastructure levies (CIL), Section 78 and Section 73. The data on these has a wide range of current and potential uses, including:

* planning land and housing development
* creating new digital services
* giving community members insight into local development and how they can influence it

But for data to be useful it must be easy to find, use, understand and trust.

Local planning authorities can ensure that their developer contributions data is all of these by following an agreed specification for how to format, label and publish it. The following guidance gives a high-level overview of our draft specification and the publication process. [We welcome your feedback](https://github.com/digital-land/digital-land/labels/project%3Adeveloper-contributions).

## Publishing developer contributions: 3 steps

Planning authorities must publish their developer contributions once a year but are encouraged to do so as frequently as they can so that datasets are up to date. (Those publishing with third-party software that can semi-automate the process might be able to publish in near real-time, while those publishing manually might choose to only publish quarterly.)

This guidance applies to the publication of developer contributions data going forward – you are not required to republish historical data so that it complies with this guidance. 

Publishing is a 3-step process:

1. 3 developer contribution .csv files must be created to store the data
2. Each of these files must be uploaded to your organisation’s website and clearly linked to using a persistent URL
3. The national register of developer contributions on the Ministry of Housing, Communities and Local Government (MHCLG) website must be kept up to date

! You may not be able or authorised to complete all of these steps. Each step identifies what skills and authority are required to complete it.

### Step 1: Create your .csv files

To complete step 1 you must be able to create or amend .csv files, for example by using spreadsheet software.

If you are a planning authority using third-party software to manage your developer contributions, ask your vendor if the software can export the data to .csv files as defined in this guidance. Otherwise, use the following instructions.

Developer contributions data must be entered in 3 separate .csv files. A .csv file (or comma separated value file) is a universally recognised file format for storing tabular data in plain text. Storing the data in 3 separate files rather than one file reduces duplication and makes the data easier to use and maintain.

We’ve created a .csv template for each of the 3 files:

* [developer agreements](/developer-contributions/developer-agreement_YYYYMMDD.csv)
* [developer agreement contributions](/developer-contributions/developer-agreement-contribution_YYYYMMDD.csv)
* [developer agreement transactions](/developer-contributions/developer-agreement-transaction_YYYYMMDD.csv)

If it helps, you can use the above example files and enter your developer contributions data. You must follow the guidelines below, then 'save as .csv file'. You can use software such as Excel, Google Sheets or Apple Numbers, as long as they meet the requirements of this guidance.

Each of the .csv files must:

* be named using the convention specified in each section below
* contain certain column headers (written exactly as shown, in lowercase)
* include 1 row of data for each agreement, contribution or transaction (as relevant)
* only entries that conform to the constraints described below

For general information on creating a .csv file see the W3C’s [CSVs on the web: a primer](http://w3c.github.io/csvw/primer/).

### Developer agreements<a name="agreement"></a>

Developer agreements must be listed in a .csv file named exactly as follows, but with the actual date you created the file instead of YYYYMMDD:

{{< tech-block >}}developer-agreement_YYYYMMDD.csv{{< /tech-block >}}

Do not delete or overwrite old or superseded agreements.

#### Column headers:

{{% col-guidance name="developer-agreement" %}}
Create a unique identifier for the agreement. By ‘unique’ this means it should not be used for anything else in your organisation. (You could, for example, use the relevant planning application number appended with a suffix such as ‘-da’.)
{{% /col-guidance %}}

{{% col-guidance name="organisation" %}}
Find your organisation in this list (in most cases this will be a local planning authority). All text must be in lower case, with no spaces. Norfolk’s local planning authority, for example, would be:

{{< tech-block >}}local-authority:nfk{{< /tech-block >}}
{{% /col-guidance %}}

! Date fields refer to the recording of the data rather than when agreements come into effect or end – read our data principles on dates for more information.

{{% col-guidance name="entry-date" %}}
Enter the date the agreement was signed and sealed, in the format `yyyy-mm-dd`. For 1 February 2019, for example, you should enter `2019-02-01`
{{% /col-guidance %}}

{{% col-guidance name="start-date" %}}
This will be the same as the entry-date unless the original agreement is superseded by a new version (for example a deed of variation). If so, enter the date on which the new version was agreed, in the same format as the entry-date column.
{{% /col-guidance %}}

{{% col-guidance name="end-date" %}}
Leave this blank if this version of the agreement hasn’t been superseded by a new one. If it has, enter the last day this version was in effect, in the same format as the entry-date column.
{{% /col-guidance %}}

{{% col-guidance name="planning-application" %}}
Enter the unique reference number for the planning application as it appears on the [Planning Portal](https://www.planningportal.co.uk/).
{{% /col-guidance %}}

{{% col-guidance name="document-url" %}}


Enter the web address that links directly to the actual agreement document.
{{% /col-guidance %}}

{{% col-guidance name="developer-agreement-classification" %}}
This is either ‘CIL’ (community investment levy) or ‘S106’ (Section 106). More developer agreement classifications will gradually be added to the developer-agreement-classification.csv file, which MHCLG will maintain for your reference.
{{% /col-guidance %}}

***

### Developer agreement contributions<a name="contribution"></a>

Developer agreement contributions must be listed exactly as follows, but with the actual date you created the file instead of YYYYMMDD:

{{< tech-block >}}developer-agreement-contribution_YYYYMMDD.csv{{< /tech-block >}}

#### Column headers:

{{% col-guidance name="developer-agreement-contribution" %}}
Create a unique identifier for the contribution. If the identifier contains the developer-agreement number it will be easier to quickly identify the contribution as related to the agreement. If the developer-agreement number is ROC100, for example, the developer-contribution could be ROC100-1A.
{{% /col-guidance %}}

{{% col-guidance name="developer-agreement" %}}
Enter the unique identifier you’ve created for the agreement.
{{% /col-guidance %}}

{{% col-guidance name="contribution-purpose" %}}
(Only use this column for Section 106 agreements). Enter the ID for the intended purpose of the developer contribution. This is found in the first column of the developer-contribution-purpose.csv file, which will be held by MHCLG for your reference.
{{% /col-guidance %}}

{{% col-guidance name="amount" %}}
Enter the agreed, secured contribution amount, in pounds and pence but without a currency symbol or commas (for example `100000.00`).
{{% /col-guidance %}}

{{% col-guidance name="units" %}}
If the developer has agreed a non-financial contribution you should quantify that here (eg enter 100 if that many affordable housing units have been promised, 2 for 2 public playgrounds etc).

! Date fields refer to the recording of the data rather than when agreements come into effect or end – read our data principles on dates for more information.

{{% /col-guidance %}}

{{% col-guidance name="entry-date" %}}
Enter the date the agreement was 'signed and sealed', in the format `yyyy-mm-dd`. For 1 February 2019, for example, you should enter `2019-02-01`.
{{% /col-guidance %}}

{{% col-guidance name="start-date" %}}
This will be the same as the entry-date unless the original agreement is superseded by a new version (for example a deed of variation). If so, enter the date the new version was agreed, in the same format as the entry-date column.
{{% /col-guidance %}}

{{% col-guidance name="end-date" %}}
Leave this blank if this version of the agreement hasn’t been superseded by a new one. If it has, enter the last day this version was in effect, in the same format as the entry-date column.
{{% /col-guidance %}}

***

### Developer agreement transactions<a name="transaction"></a>

Developer agreement transactions must be listed in a .csv file exactly as follows, but with the actual date you created the file instead of YYYYMMDD:

{{< tech-block >}}developer-agreement-transaction_YYYYMMDD.csv{{< /tech-block >}}

#### Column headers:

{{% col-guidance name="developer-agreement-transaction" %}}
Create a unique identifier for the transaction. If the identifier contains the developer-agreement number it will be easier to quickly identify the contribution as related to the agreement. If the developer-agreement number is ROC100, for example, the developer-agreement transaction could be ROC100-TR1.
{{% /col-guidance %}}

{{% col-guidance name="developer-agreement-contribution" %}}
Enter the unique identifier you created for the contribution. 
{{% /col-guidance %}}

{{% col-guidance name="contribution-funding-status" %}}
Enter one of the following to indicate what stage the funding for the contribution is currently in: 

* ‘secured’: the trigger clauses associated with the contribution have been met, meaning the developer is now required to pay all or part of the contribution
* ‘received’: the developer has paid the planning authority the money due
* ‘allocated’: the received money has been allocated to a team within the planning authority, who will spend the money
* ‘transferred’: the received money has been transferred to an organisation outside the planning authority (eg Transport for London), who will spend the money
* ‘spent’: the received money has been spent on the agreed contribution purpose (for Section 106) or for Community Infrastructure Levies (CIL) just spent
* ‘returned’: the received money (or a portion of it) has been returned to the developer, for whatever reason

If more than one status applies (eg if some money was spent and some returned), please create a separate row for each, along with entries for all other relevant fields.

{{% /col-guidance %}}

{{% col-guidance name="amount" %}}
Enter the amount received from a developer for part or full payment of a contribution (inserting ‘+ve’ before the amount) or the amount spent by a planning authority (inserting ‘-ve’ before the amount), as applicable.
{{% /col-guidance %}}

{{% col-guidance name="units" %}}
If the developer has agreed a non-financial contribution you should quantify how much of that commitment has been met for this transaction (eg enter 50 if 100 affordable housing units were committed and 50 have been delivered).
{{% /col-guidance %}}

{{% col-guidance name="entry-date" %}}
Enter the date the record was created, in the format `yyyy-mm-dd`. For 1 February 2019, for example, you should enter `2019-02-01`.
{{% /col-guidance %}}

{{% col-guidance name="start-date" %}}
Enter the date on which the entry comes into effect, in the same format as the entry-date column.
{{% /col-guidance %}}

{{% col-guidance name="end-date" %}}
Enter the last day the entry is in effect, in the same format as column the entry-date column.
{{% /col-guidance %}}

### Step 2: Create or update a developer contributions page on your organisation’s website

To complete step 2 you must be able to upload the files created in step 1 to your local authority’s website and edit (or create) your developer contributions web page. If you aren’t able or authorised to do this speak to someone who is (this might be the person who updates your local authority’s brownfield site register).

Next you need to upload each .csv file to your planning authority's website using a [persistent URL](https://en.wikipedia.org/wiki/Persistent_uniform_resource_locator) – a web address that will not change over time. As an example, Norfolk’s local planning authority might use the following persistent addresses (note that these are examples, not live data): 

https://www.norfolk.gov.uk/developer-agreement/developer-agreement_20190101.csv
https://www.norfolk.gov.uk/developer-agreement-contribution/developer-agreement-contribution_20190101.csv
https://www.norfolk.gov.uk/developer-agreement-transaction/developer-agreement-transaction_20190101.csv
https://www.norfolk.gov.uk/developer-agreement-transaction/latest

When you upload the files you should: 

* keep your older files online – it’s important to retain a history of all developer contribution files
* make a copy of the new files, rename the copies exactly the same except with ‘latest’ in place of the date, then upload both sets of files

You should then update your local authority’s developer contributions web page to make the .csv files publicly available. If your website does not have a page on developer contributions, you or someone in the web team will need to create one. The page must list the persistent URLs as defined above. The URLs must be written out in full.

### Step 3: Update the national register of developer contributions

To complete step 3 you must be able to download, amend and upload a .csv file. 

MHCLG will [subject to this consultation] maintain a national register of developer contributions in a file called developer-contribution-register.csv.

All organisations with a statutory duty to publish their own registers of contributions should ensure that the following columns in this file are kept accurate and up to date:

**name**

Find your organisation in the alphabetised list.

**register-url**

Enter the web address of the web page created in step 2.

Date fields refer to the recording of the data rather than when agreements come into effect or end – read our data principles on dates for more information

**entry-date**

Enter the date you last updated the registry, in the format `yyyy-mm-dd`. For 1 February 2019, for example, you should enter `2019-02-01`.

**start-date**

Enter the date the registry was first created, in the format described in the entry-date column.

**end-date**

Enter the date the registry will no longer be valid, in the format described in the entry-date column.
