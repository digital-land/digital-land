# Removing old and duplicate endpoints

INFO: Brighton and others have published data in error which they ask to be removed from the collection.

We have in the past removed resources and log entries which cite the resource. 

Deleting resources is dangerous, as we don’t want to risk losing data we can no longer collect. For beta we should be able to mark such resources as “gone” as deleting them from our records may erode trust.

## Identifying Duplicate and redundant endpoints

These are candidates for retiring.

1. Get the Jupyter notebook from https://github.com/digital-land/jupyter-analysis/blob/duplicate_endpoints/duplicates.ipynb

1. Follow the instructions at the top to get a local copy of the data you need, and run it to generate a csv file with _potential duplicates_ in it.

The csv lists all the endpoints associated with a resource that is still active where the resource is linked to more than one endpoint.

> TIP: If you want you can edit the `duplicates` view code to look at just resources having 2 or more endpoints by increasing the number on the `HAVING` line. This might be good for a first pass through.

For each provider and dataset we can see the endpoints and their start dates. 

## Stopping a resource from being collected and processed

1. Locate the endpopint in `endpoint.csv` and give it an end date of today - this stops the endpoint being collected and further.

1. Edit old-resource.csv, add the resource with a status of 410 to stop it being processed.
