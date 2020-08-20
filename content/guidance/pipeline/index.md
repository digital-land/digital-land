---
title: "Pipeline: how we collect and process data"
label: "guidance:pipeline"
hasContent: true
summary: Our pipeline process collects individual publications of data and turns them into a national dataset.
---

One of our principles is that data should be maintained as close to the source as possible. This means that we often have to bring together over 350 sources to make 1 national dataset. Our “pipeline” describes the steps we take to collect data from each source and transform them into a national dataset.

We support publishers of data by providing guidance and tools to help ensure their data meets the data standard. Any changes that we make to the data as it passes through the pipeline, brings a risk that we’ll introduce errors.

{{% cta-box %}}
For any resource, you can view its state at each step in the pipeline, allowing you to see what we've changed.
{{% /cta-box %}}

<a data-flickr-embed="true" href="https://www.flickr.com/photos/mattlucht/49547009136/in/datetaken-public/" title="Pipeline process: collect; convert; normalise; map; harmonise; transform."><img src="https://live.staticflickr.com/65535/49547009136_f3c86e9e31_b.jpg" alt="Pipeline process: collect; convert; normalise; map; harmonise; transform."></a>

The pipeline follows these steps:

1. [Collect](#1-collect)
2. [Convert](#2-convert)
3. [Normalise](#3-normalise)
4. [Map](#4-map-the-headers)
5. [Harmonise](#5-harmonise)
6. [Transform](#6-transform)

## 1. Collect

The collector’s primary purpose is to gather all of the resources that we know about. Each night it visits the URL for each resource to check if it's still valid.

We produce a [daily log](/resource/log/2020-03-09) which records what the collector has found. This includes any links that cannot be accessed and new resources found at a URL.

If a resource has changed, we add it to our collection. The [brownfield collection](https://github.com/digital-land/brownfield-land-collection/blob/master/dataset/brownfield-land.csv) is an example of a data collection.

## 2. Convert

If the collected resource is not a [UTF-8 encoded](https://www.w3schools.com/charsets/ref_html_utf8.asp) CSV file, we’ll try to convert it into one.

We can convert certain file types with varying degrees of confidence. For example, a Microsoft Excel file may be easy to convert into a CSV file, whereas we would not be able to convert a PDF or image file.  

## 3. Normalise

Once we have a UTF-8 CSV file, we strip out anything that is not recognisable as data. For example if a row has no values, or if there are descriptions above the column headers.

## 4. Map the headers

Next we check (or “map”) the column headers in the resource against those in the data standard.

If we have made any changes to the data standard over time, the header names in a published resource may not have been updated to meet the new standard.

We may also be able to identify and correctly map typos. For example, we can confidently map both `HazourdousSubstances` and `HazardousSubtances` to the correctly spelled header: `HazardousSubstances`.

{{% cta-box %}}
We found ~800 different [column headers](https://github.com/digital-land/brownfield-land-collection/blob/master/index/count/column.csv) that were submitted to the brownfield land data collection. We have attempted to map these against 20 headers in the standard.
{{% /cta-box %}}

## 5. Harmonise

We then look at the values in the data and check that everything is consistent with the data standard. This step can be the trickiest to do with certainty, because sometimes we have to interpret what the data publisher meant. 

For example, if `yes` has been entered as `Y`, we can confidently change this. However, we cannot guess what the data publisher meant by an incorrect date, such as `2019-11-31`. Since this date does not exist, it would not be safe to assume that the correct value should be `2019-11-30`.

{{% cta-box %}}
View the [harmonisation rules that we’ve been able to automate](https://github.com/digital-land/brownfield-land-collection/blob/master/bin/harmonise.py) based on what we've learned through the brownfield land project.
{{% /cta-box %}}

## 6. Transform

The final step in our pipeline process takes each harmonised resource and builds a [national dataset](/dataset/brownfield-land/).
