We have created a number of shortcodes that can be used when writing markdown. These shortcodes will create styled components.

###Inset text

Replicates [govuk inset text component](https://design-system.service.gov.uk/components/inset-text/).

Usage:
{{% inset-text %}}
We do not allow Google to use or share our analytics data.
{{% /inset-text %}}

###Technical block

Used to highlight a command to run, a expected format or how to name a file.

Usage:
```
{{< tech-block >}}local-authority:nfk{{< /tech-block >}}
```

###Transclusion

There is a shortcode available that allows you to transclude content from a different markdown file. You can use this to break content down into reusable chunks.

Usage:
```
{{% include-content "develop-a-common-data-format.md" "common-format-section" %}}
```

It takes 2 arguments:

* Arg1 - path to the .md file
* Arg2 - class to add to the block