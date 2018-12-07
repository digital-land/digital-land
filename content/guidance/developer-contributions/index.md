---
title: "Publish your developer contributions data"
---

The National Planning Policy Framework requires all local planning authorities and certain other organisations to publish their developer contributions data on a regular basis and in an agreed format. That format hasn’t yet been agreed, but the following guidance is a working approach that we plan to refine with your input.

Our aim is to develop a data format and publishing guidance that results in better insights into how developer contributions are supporting community infrastructure. But we also want a standard that causes as little disruption as possible to your existing processes. Please, [share your feedback on](https://docs.google.com/forms/d/1pvblp8l4ODFmv91yyktArGaiskVnJgFcWDCYBBRgc2A) this guidance to help us succeed.

## Make your register findable and useable

To meet the needs of planners, members of the community and others, your developer contributions data must be easy:

* to find
* to interpret
* for digital services to consume

You can ensure all 3 by following an agreed specification for how you format, label and file your register. The following guidance is a high-level overview of our draft specification, which we welcome your feedback on.

## Publish your developer contributions in 4 steps

Publishing your organisation’s developer contributions is a 4-step process:

1. Create your developer contribution .csv files
2. Upload each of the files in step 1 to your organisation’s website 
3. Create or update a register page on your organisation’s website
4. Update the national register of developer contributions

### Step 1: Create your .csv files

You must create 3 .csv files:

* [developer agreements](#agreement) 
* [developer agreement contributions ](#contribution)
* [developer agreement transactions ](#transaction)

Each of these files must:

* be named using the convention specified in each section below 
* contain certain column headers  (written exactly as shown, in lowercase) 
* include 1 row of data for each agreement, contribution or transaction (as relevant)
* only entries that conform to the constraints described below

For general information on creating a .csv file see the W3C’s [CSVs on the web: a primer](http://w3c.github.io/csvw/primer/). 

### Developer agreements<a name="agreement"></a>

Developer agreements must be listed in a .csv file named using the following convention:

{{< tech-block >}}developer-agreement_YYYYMMDD.csv{{< /tech-block >}}

Here YYYMMDD represents the year, month and day you have created the file.

#### Columns

{{% col-guidance name="developer-agreement" %}}
Enter a unique reference number to identify the agreement. By ‘unique’ this means it should not be used for anything else in your organisation.
{{% /col-guidance %}}

{{% col-guidance name="organisation" %}}
The text entered here must be in a specific format as expressed in this list. All text must be in lower case, with no spaces. Norfolk’s local planning authority, for example, would be:

{{< tech-block >}}local-authority:nfk{{< /tech-block >}}
{{% /col-guidance %}}

{{% col-guidance name="entry-date" %}}
Enter the date the record was created, in the format `yyyy-mm-dd`. For 1 February 2019, for example, you should enter `2019-02-01`
{{% /col-guidance %}}

{{% col-guidance name="start-date" %}}
Enter the date on which the agreement comes into effect, in the same format as the entry-date column.
{{% /col-guidance %}}

{{% col-guidance name="end-date" %}}
Enter the last day the agreement is in effect, in the same format as the entry-date column.
{{% /col-guidance %}}

{{% col-guidance name="planning-application" %}}
Enter the unique reference number for the planning application as it appears on the Planning Portal.
{{% /col-guidance %}}

{{% col-guidance name="document-url" %}}


Enter the web address that links directly to the actual agreement document.
{{% /col-guidance %}}

{{% col-guidance name="developer-agreement-type" %}}
This is either ‘CIL’ (community investment levy) or ‘S106’ (Section 106). More developer agreement types will gradually be added to the developer-agreement-type.csv file, which MHCLG will maintain for your reference.
{{% /col-guidance %}}

***

### Developer agreement contributions<a name="contribution"></a>

Developer agreement contributions must be listed in a .csv file named using the following convention:

{{< tech-block >}}developer-agreement-contribution_YYYYMMDD.csv{{< /tech-block >}}

Here YYYMMDD represents the year, month and day you have created the file.

#### Columns

{{% col-guidance name="developer-agreement-contribution" %}}
Enter a unique reference number to identify the contribution. By ‘unique’ this means it should not be used for anything else in
your organisation.
{{% /col-guidance %}}

{{% col-guidance name="developer-agreement" %}}
Enter the unique reference number you’ve used to identify the agreement.
{{% /col-guidance %}}

{{% col-guidance name="contribution-purpose" %}}
Enter the ID for the intended purpose of the developer contribution. This is found in the first column of the developer-contribution-purpose.csv file, which will be held by MHCLG for your reference.
{{% /col-guidance %}}

{{% col-guidance name="amount" %}}
Enter the agreed contribution amount, in pounds and pence but without a currency symbol or commas (for example `100000.00`).
{{% /col-guidance %}}

{{% col-guidance name="entry-date" %}}
Enter the date the record was created, in the format `yyyy-mm-dd`. For 1 February 2019, for example, you should enter `2019-02-01`.
{{% /col-guidance %}}

{{% col-guidance name="start-date" %}}
Enter the date on which the agreement comes into effect, in the same format as the entry-date column.
{{% /col-guidance %}}

{{% col-guidance name="end-date" %}}
Enter the last day the agreement is in effect, in the same format as the entry-date column.
{{% /col-guidance %}}

***

### Developer agreement transactions<a name="transaction"></a>

Developer agreement transactions must be listed in a .csv file named using the following convention:

{{< tech-block >}}developer-agreement-transaction_YYYYMMDD.csv{{< /tech-block >}}

Here YYYMMDD represents the year, month and day you have created the file.

#### Columns

{{% col-guidance name="developer-agreement-transaction" %}}
Enter a unique reference number to identify the transaction. By ‘unique’ this means it should not be used for anything else in your organisation.
{{% /col-guidance %}}

{{% col-guidance name="developer-agreement-contribution" %}}
Enter the unique reference number you’ve used to identify the contribution. By ‘unique’ this means it should not be used for anything else in your organisation.
{{% /col-guidance %}}

{{% col-guidance name="amount" %}}
Enter the amount received from a developer for part or full payment of a contribution (inserting ‘+ve’ before the amount) or the amount spent by a planning authority (inserting ‘-ve’ before the amount), as applicable.
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

### Step 2: Upload the files to a persistent URL

Next you need to upload each .csv file to your organisation’s website using a [persistent URL](https://en.wikipedia.org/wiki/Persistent_uniform_resource_locator) – a web address that will not change over time. As an example, Norfolk’s local planning authority might use the following persistent addresses (note that these are examples, not live data): 

https://www.norfolk.gov.uk/developer-agreement/developer-agreement_20190101.csv
https://www.norfolk.gov.uk/developer-agreement-contribution/developer-agreement-contribution_20190101.csv
https://www.norfolk.gov.uk/developer-agreement-transaction/developer-agreement-transaction_20190101.csv
https://www.norfolk.gov.uk/developer-agreement-transaction/latest

* keep your older files online – it’s important to retain a history of all developer contribution files
* make a copy of the new files, rename the copies exactly the same except with ‘latest’ in place of the date, then upload both sets of files

### Step 3: Create/update a register page on your organisation’s website

The page should be publicly accessible and indexed or searchable. It must list the complete URLs rather than embedding the links in text.

### Step 4: Update the national register of developer contributions

The Ministry of Housing, Communities and Local Government (MHCLG) will [subject to this consultation] maintain a national register of developer contributions in a file called developer-contribution-register.csv.

All organisations with a statutory duty to publish their own registers of contributions should ensure that the following columns in this file are kept accurate and up to date:

**name**

Find your organisation in the alphabetised list.

**register-url**

Enter the web address of the web page created in step 3.

**entry-date**

Enter the date you last updated the registry, in the format `yyyy-mm-dd`. For 1 February 2019, for example, you should enter `2019-02-01`.

**start-date**

Enter the date the registry was first created, in the format described in the entry-date column.

**end-date**

Enter the date the registry will no longer be valid, in the format described in the entry-date column.
