---
title: "Publish your developer contributions data"
---

The National Planning Policy Framework requires all local planning authorities and certain other organisations to publish their developer contributions data on a regular basis and in an agreed format. That format hasn’t yet been agreed, but the following guidance is a working approach that we plan to refine with your input.

Our aim is to develop a data format and publishing guidance that results in better insights into how developer contributions are supporting community infrastructure. But we also want a standard that causes as little disruption as possible to your existing processes. Please [share your feedback on](https://docs.google.com/forms/d/1pvblp8l4ODFmv91yyktArGaiskVnJgFcWDCYBBRgc2A) this guidance to help us succeed.

## Make your data findable, useable and trustworthy

Developer contributions data has a wide range of current and potential uses, including:

* planning land and housing development
* creating new digital services
* giving community members insight into local development and how they can influence it

But for data to be useful it must be easy to find, use, understand and trust.

You can ensure that your developer contributions data is all of these by following an agreed specification for how you format, label and publish it. The following guidance gives a high-level overview of our draft specification and the publication process. We welcome your feedback on.

## Publish your developer contributions in 4 steps

Planning authorities must publish their developer contributions once a year but are encouraged to do so as frequently as they can so that datasets are up to date. Publishing is a 4-step process:

1. Create 3 developer contribution .csv files to store the data
2. Upload each of these files to your organisation’s website 
3. Create or update a page on your organisation’s website that clearly links to these files
4. Update the national register of developer contributions on the MHCLG website

### Step 1: Create your .csv files

You must create 3 .csv files:

* [developer agreements](#agreement) 
* [developer agreement contributions ](#contribution)
* [developer agreement transactions ](#transaction)

Storing your data in 3 separate files rather than one file makes it possible to use the data more robustly and in more ways. 

A .csv file (or comma separated value file) is a universally recognised file format for storing tabular data in plain text. The following table of data comprises headers describing columns and data arranged in rows:

| fruit        | quantity           | price  |
| ------------- |:-------------:| -----:|
| orange     | 100| 1.00 |
| banana     | 3      |   2.00 |
| papaya | 0      |    30000 |

This is represented in a .csv file in the following format:

```
fruit,quantity,price
orange,100,1.00
banana,3,2.00
papaya,0,30000
```

One commonplace way to create a .csv file is to enter the values in an Excel spreadsheet and “save as .csv”.

Each of the .csv files must:

* be named using the convention specified in each section below 
* contain certain column headers  (written exactly as shown, in lowercase) 
* include 1 row of data for each agreement, contribution or transaction (as relevant)
* only entries that conform to the constraints described below

For general information on creating a .csv file see the W3C’s [CSVs on the web: a primer](http://w3c.github.io/csvw/primer/). 

### Developer agreements<a name="agreement"></a>

Developer agreements must be listed in a .csv file named exactly as follows, but with the actual date you created the file instead of YYYYMMDD:

{{< tech-block >}}developer-agreement_YYYYMMDD.csv{{< /tech-block >}}

#### Columns

{{% col-guidance name="developer-agreement" %}}
Create a unique alphanumeric identifier for the agreement. By ‘unique’ this means it should not be used for anything else in your organisation.
{{% /col-guidance %}}

{{% col-guidance name="organisation" %}}
Find your organisation in this list. All text must be in lower case, with no spaces. Norfolk’s local planning authority, for example, would be:

{{< tech-block >}}local-authority:nfk{{< /tech-block >}}
{{% /col-guidance %}}

{{% col-guidance name="entry-date" %}}
Enter the date the agreement was signed and sealed, in the format `yyyy-mm-dd`. For 1 February 2019, for example, you should enter `2019-02-01`
{{% /col-guidance %}}

{{% col-guidance name="start-date" %}}
This will be the same as the entry-date unless the original agreement is superseded by a new version. If so, enter the date on which the new version was agreed, in the same format as the entry-date column.
{{% /col-guidance %}}

{{% col-guidance name="end-date" %}}
Leave this blank if this version of the agreement hasn’t been superseded by a new one. If it has, enter the last day this version was in effect, in the same format as the entry-date column.
{{% /col-guidance %}}

{{% col-guidance name="planning-application" %}}
Enter the unique reference number for the planning application as it appears on the Planning Portal.
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

#### Columns

{{% col-guidance name="developer-agreement-contribution" %}}
Create a unique alphanumeric identifier for the contribution. If the identifier contains the developer-agreement number it will be easier to quickly identify the contribution as related to the agreement. For example, if the developer-agreement number is ROC100, the developer-contribution could be ROC100-1A, for example.
{{% /col-guidance %}}

{{% col-guidance name="developer-agreement" %}}
Enter the unique identifier you’ve created for the agreement.
{{% /col-guidance %}}

{{% col-guidance name="contribution-purpose" %}}
Enter the ID for the intended purpose of the developer contribution. This is found in the first column of the developer-contribution-purpose.csv file, which will be held by MHCLG for your reference.
{{% /col-guidance %}}

{{% col-guidance name="amount" %}}
Enter the agreed, secured contribution amount, in pounds and pence but without a currency symbol or commas (for example `100000.00`).
{{% /col-guidance %}}

{{% col-guidance name="units" %}}
If the developer has agreed a non-financial contribution you should quantify that here (eg enter 100 if that many affordable housing units have been promised, 2 for 2 public playgrounds etc) 
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

Developer agreement transactions must be listed in a .csv file exactly as follows, but with the actual date you created the file instead of YYYYMMDD:

{{< tech-block >}}developer-agreement-transaction_YYYYMMDD.csv{{< /tech-block >}}

#### Columns

{{% col-guidance name="developer-agreement-transaction" %}}
Create a unique alphanumeric identifier for the transaction. If the identifier contains the developer-agreement number it will be easier to quickly identify the contribution as related to the agreement. For example, if the developer-agreement number is ROC100, the developer-agreement transaction could be ROC100-TR1, for example.
{{% /col-guidance %}}

{{% col-guidance name="developer-agreement-contribution" %}}
Enter the unique identifier you created for the contribution. 
{{% /col-guidance %}}

{{% col-guidance name="contribution-funding-stage" %}}
Enter one of the following to indicate what stage the funding for the contribution is currently in: secured, allocated, received, transferred, spent.
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

### Step 2: Upload the files to a persistent URL

Next you need to upload each .csv file to your organisation’s website using a [persistent URL](https://en.wikipedia.org/wiki/Persistent_uniform_resource_locator) – a web address that will not change over time. As an example, Norfolk’s local planning authority might use the following persistent addresses (note that these are examples, not live data): 

https://www.norfolk.gov.uk/developer-agreement/developer-agreement_20190101.csv
https://www.norfolk.gov.uk/developer-agreement-contribution/developer-agreement-contribution_20190101.csv
https://www.norfolk.gov.uk/developer-agreement-transaction/developer-agreement-transaction_20190101.csv
https://www.norfolk.gov.uk/developer-agreement-transaction/latest

* keep your older files online – it’s important to retain a history of all developer contribution files
* make a copy of the new files, rename the copies exactly the same except with ‘latest’ in place of the date, then upload both sets of files

### Step 3: Create/update a developer contributions page on your organisation’s website

The page must list the URLs in step 2 and must be publicly accessible and indexed or searchable. The URLs must be visible rather than embedded in text.

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
