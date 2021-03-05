# 2. floating-package-dependencies

Date: 2021-03-05

## Status

Proposed

## Context

We've experienced conflicting package versions when between those installed by the `digital-land-python` repository, and those pinned in a `requirements.txt`
file.

## Decision

List the smallest possible number of packages as dependencies, and don't pin the version of packages, as in this example `requirements.txt` file:

```
-e git+https://github.com/digital-land/digital-land-python.git#egg=digital-land
```

We may move back to frozen, pinned packages in a `setup.py` once our core python code is more stable, or is packaged and installed via PyPi.

## Consequences

Moving to unpinned versions reduces the risk of conflicting versions with those listed in other packages.
Reducing the number of dependencies makes it easier to undersand the packages directly required by a repository.
It's possible to break repository if it depends on a package installed as a dependency to another package, and that implicit dependency is removed.
