## Creating Project Pages

We use [project pages](https://digital-land.github.io/project/) to keep track of progress of large areas of investigation, e.g. [Developer contributions](https://digital-land.github.io/project/developer-contributions/).

### Create a basic project page

To create a basic project page which will be served from a single `.md` create a directory in the `/project` directory. This directory should be named the same as the project.

E.g.
```
/content/projects/developer-contributions
```

Then create a `index.md` file within the project directory. This is the file where you should include all the content you wish to display on the page.

This `index.md` file should include the following frontmatter.

| Property | Use | Example |
| --- | --- | --- |
| title | Should be the name of the project | "Developer contributions" |
| status | The current status of the project. Allowed values are; discover, alpha, beta, live | alpha |
| type | Lets Hugo know this is of type *project* | project |
| label | This is the label used for github issues related to the project. Prefix with `project:` | "project:developer-contributions" |

This will give you a single column project page.

### Add contents to project page

When the page gets long we recommend adding a contents section to users jump to the section they are interested in.

To do this you should:

Add `hasContent: true` to the frontmatter of `index.md`.

Create a `_introduction.md` file. It should contain the introduction paragraph(s) as markdown.

Create a `_contents.md` file. It should contain the contents section you wish to use on the page.

To add links to the sections on the page add items like
```
- [Help us develop a common data format](#help-us-develop-a-common-data-format)
```
to the `_contents.md` file, replacing "Help us develop a common data format" and "help-us-develop-a-common-data-format" with the correct section headings.

### Adding a call to action highlight box

You can add a call to action box using the `cta-box` shortcode in a markdown file.

Only use if absolutely necessary and only use one **call to action** box per page.

This component should not be used as a substitute for the **start button** component.

Example use:

```
{{% cta-box %}}
Read the latest guidance on [Brownfield site registers](#some-url).
{{% /cta-box %}}
```
