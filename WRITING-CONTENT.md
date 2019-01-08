We have created a number of shortcodes that can be used when writing markdown. These shortcodes will create styled components.

### Inset text

Replicates [govuk inset text component](https://design-system.service.gov.uk/components/inset-text/).

Usage:
{{% inset-text %}}
We do not allow Google to use or share our analytics data.
{{% /inset-text %}}

### in-progress-issue block

These are used on the project pages. We use it to highlight which issue we are currently working on and any progress we have made.

It takes 2 arguments:

* title - which should be the title as on github issues
* number - which is the issue number on github

You are then free to put any other sections within the block. For example on the **[Developer contributions project](https://digital-land.github.io/project/developer-contributions/)** we have 3 sections: "Questions we're asking", "What we tested" and "What we learned."

Usage:
```
{{< in-progress-issue title="Checking developer contribution data is valid" number="32" >}}
#### Section titles within the block

Some text, etc

{{< /in-progress-issue >}}
```

### Technical block

Used to highlight a command to run, a expected format or how to name a file.

Usage:
```
{{< tech-block >}}local-authority:nfk{{< /tech-block >}}
```

### Transclusion

There is a shortcode available that allows you to transclude content from a different markdown file. You can use this to break content down into reusable chunks.

Usage:
```
{{% include-content "develop-a-common-data-format.md" "common-format-section" %}}
```

It takes 2 arguments:

* Arg1 - path to the .md file
* Arg2 - class to add to the block