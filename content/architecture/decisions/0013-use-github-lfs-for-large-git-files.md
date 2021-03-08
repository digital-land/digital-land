# 13. Use Github LFS for large git files

Date: 2021-03-08

## Status

Proposed

## Context

Some datasets involve the collection of large resources. These files cannot be easily stored in version control. However, they should be associated with the repository and it should be possible to retrieve them easily if necessary. There are several options for hosting these files. 

## Decision

Hosting these files on Github is the most straightforward option as it doesn’t require third-party/custom tooling (Git LFS requires a hosted server).

## Consequences

There is a cost associated with hosting on Github. Users will need to have Git LFS installed in order to be able to retrieve large files. 
