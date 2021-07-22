# 17. Use vector tiles to display geographic data on a map

Date: 2021-07-22

## Status

Accepted

## Context

We need to be able to display multiple geography datasets on a map. These vary from large to small datasets, with varying densities and scales. The geometry data is converted to GeoJSON and stored in the view model. Points for consideration
- the map should be performant
- it should be quick to add/modify a dataset
- it should be possible to style each dataset individually
- the data should be provided in a widely supported format
- retrieval of data should be fast, efficient and scalable

## Decision

Geographic data should be served as vector tiles using Datasette and the MBTiles specification. This involves a conversion step from GeoJSON to vector tiles, where some processing is done to package data into tiles corresponding to different grid cells and zoom levels. Each dataset will produce its own corresponding tileset. The vector tile server is hosted via Datasette on a dedicated instance. Access to this data is provided through Datasette's API and through a source url that is compatible with vector-based map libraries. 

## Consequences

- This approach allows the map to be performant as it will only request the tiles necessary for the viewport. This also reduces the load on the tile server.
- Vector tiles are optimised for different scales 
- Vector tiles allow for styling individual layers (datasets)
- Since each dataset has its own tileset, a dataset toggle feature on the map will only retrieve the dataset(s) requested by the user
- It is possible for users to download the vector tilesets for their own use. It is packaged in MBTiles (sqlite), a well-known format. 
- The tile server simply serves the tile requested - there is no expensive logic or spatial queries required.
- The generation of the tilesets is an added time cost to our CI/CD pipeline. 
- We should be careful not to use conversion options that change the underlying data (e.g. removing polygons/points)
