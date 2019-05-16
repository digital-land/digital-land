## Creating Project Pages

We create new [guidance pages](https://digital-land.github.io/guidance/) related to our areas of investigation. We create them here so that we can test them and improve them using the feedback we receive.

### Create a basic guidance page

To create a basic guidance page create a single `.md` file in the `/guidance` directory. The file should be the same name as the title of the gudiance page.

E.g.
```
/content/guidance/update-your-brownfield-site-register
```

### Create a multipart guidance page

A multipart guidance page is a guidance page split across a number of screens. It is used regularly on [GOV.UK](http://gov.uk), e.g. on the [Benefit cap](https://www.gov.uk/benefit-cap) guidance.

We use it when a guidance page is long or there are multiple steps to guide a user through.

Create a multipart guidance page by creating a new directory under the `/guidance` directory. Name the directory after the overarching guidance theme, e.g. `developer contributions`.

The new directory needs to contain `index.md` which will be the start page of the mulitpart guidance. The `index.md` file is a normal content file except you need to add a `layout` attribute to the frontmatter. Add

`layout: single`

Then include a `.md` file for each of the guidance parts.

There are 2 components you need to include to make the multipart guidance work correctly.

There is the `contents` component. E.g.

```
{{% contents %}}
- Publish your developer contributions data
- [Step 1: Create your .csv files]({{< ref "create-your-csv-files.md" >}})
- [Step 2: Update your developer contributions web page]({{< ref "update-your-developer-contributions-web-page.md" >}})
- [Step 3: Update the national register of developer contributions]({{< ref "update-the-national-register-of-developer-contributions.md" >}})
{{% /contents %}}
```

This provides links to each of the screens. Put this at the top of each `.md` part.

Then there is pagination component. Add links to previous and next screens using this component.

```
{{% pagination-component %}}
{{% pagination-prev href="create-your-csv-files.md" text="Step 1: Create your csv files" %}}
{{% pagination-next href="update-the-national-register-of-developer-contributions.md" text="Step 3: Update the national register of developer contributions" %}}
{{% /pagination-component %}}
```

Both `pagination-prev` and `pagination-next` take are optional, choose what is right for the current guidance part. They take the following attributes:

| Attributes | Use | Example |
| --- | --- | --- |
| href | name of the guidance part `.md` file | "create-your-csv-files.md" |
| text | link text that user will see | "Step 1: Create your csv files" |

