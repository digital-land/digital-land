---
title: "Pipeline – how we collect and process data"
label: "guidance:pipeline"
hasContent: true
summary: This guidance describes our pipeline process of collecting individual publications of data and turning them into national datasets.
---

One of our principles is that data should be maintained as close to the source as possible. This means that we often have to bring together over 350 sources to make one national dataset.

Our “pipeline” describes the steps we take to collect data from each of those sources and transform them into a national dataset.

We support publishers of data by providing guidance and tools to help ensure their data meets the data standard. Any changes that we make to the data as it passes through the pipeline brings a risk that we’ll introduce errors.

{{% cta-box %}}
For any resource you can view its state at each step in the pipeline, allowing you to see what we have changed.
{{% /cta-box %}}

<a data-flickr-embed="true" href="https://www.flickr.com/photos/mattlucht/49547009136/in/datetaken-public/" title="Brownfield_Land_Report_-_Google_Slides"><img src="https://live.staticflickr.com/65535/49547009136_f3c86e9e31_b.jpg" alt="Brownfield_Land_Report_-_Google_Slides"></a>

The pipeline follows these steps:

1. Collect
+ Convert
+ Normalise
+ Map
+ Harmonise
+ Transform

## 1. Collect

The collector’s primary purpose is to gather all of the resources that we know about.

Each night it visits every link that we know about and checks whether the URL is still valid.

We produce a [daily log](/resource/log/2020-01-16) which records what the collector has found. This reports any links that cannot be accessed or if a new resource has been found at a URL.

If a resource has changed then we add that resource into our collection. As an example, see the [brownfield collection](https://github.com/digital-land/brownfield-land-collection/blob/master/dataset/brownfield-land.csv).

## 2. Convert

If the collected resource is not a UTF-8 encoded CSV then we’ll try to convert it. Some file types we can covert with varying degrees of confidence, for instance, an Excel file. However, files that are in PDF or an image file we are unable to convert reliably and they shall fail at this stage.

## 3. Normalise

Once we have a UTF-8 CSV file, then our next step is to normalise the file. Essentially this is where we strip out anything that isn’t recognisable as data. Typical examples are [rows with no values or where there are descriptions above the column headers](https://github.com/digital-land/brownfield-land-collection/tree/master/var/normalised).

## 4. Map

Next, we map the column headers in the resource against those in the data standard.

In some instances the header name has changed from an earlier version of the standard and the published resource hasn't been updated to meet the new standard.

In other instances, there are apparent typos that we can identify and correctly map. For instance, `HazourdousSubstances` and `HazardousSubtances` can both confidently map to `HazardousSubstances`.


{{% cta-box %}}
Here you can see that there are ~800 different [column headers](https://github.com/digital-land/brownfield-land-collection/blob/master/index/count/column.csv) that appear in the brownfield land data collection.
{{% /cta-box %}}

## 5. Harmonise

The harmonise step looks at the values in the data and checks that everything is consistent with the data standard. This step can be the trickiest implement changes with certainty as it involves an element of interpreting what the data publisher meant.

Enumerated values that have been misspelt or abbreviated, for instance `yes` has been entered as `Y`, can confidently be changed. But an incorrect date of `2019-11-31` requires investigation to determine what the correct date should be, for instance, it wouldn’t be safe to assume that the correct value should be `2019-11-30`.

{{% cta-box %}}
Here you can see the [harmonisation rules that we've been able to automate](https://github.com/digital-land/brownfield-land-collection/blob/master/bin/harmonise.py) based on what we learnt through the brownfield land project.
{{% /cta-box %}}

## 6. Transform

The final step takes each harmonised resource and builds a [national dataset](/dataset/brownfield-land/).

