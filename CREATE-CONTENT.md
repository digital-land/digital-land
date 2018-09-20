# How to create content

If you are adding new projects please follow the instructions in the [Contribute](CONTRIBUTE.md) docs.

## Tracking prototypes

Add all prototypes, current and future to the `content/prototype/` dir.

Use the `<prototype-name>/_index.md` structure.

The frontmatter should contain the following fields:

| Field | Values | Allowed |
| :---- | :----- | :------ |
| `title` | The title of prototype | Free text e.g Validator |
| `lastmod` | Date the prototype was last updated | Date in format "2018-09-18" |
| user | The user group the prototype is for | One of `data-publisher`\|`service-builder`\|`data-standard-establishers` |
| priority | The status of the prototype | One of `now`\|`next` |
| hypothesis | What we expect to see if the prototype is successful | |

When adding updates use the `{{< prototype-update >}}` shortcode. The first argument is the title of the update. The second argument is option and should be the time period the updates were made in. E.g

```
{{< prototype-update "Update 2" "Sept 2018">}}
* added regex validators to text for correct planning application states
{{< /prototype-update >}}
```
