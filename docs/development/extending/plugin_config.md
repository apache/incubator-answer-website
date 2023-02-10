---
sidebar_label: Plugin Configuration Schema
---

# Plugin Configuration Schema

## Feature
> For plugins, we often need some configuration items to record the information necessary for the plugin.
> 
> For example, OAuth plugins require secret key configuration.
> 
> These configurations need to be described by the developer and used by the user.
> 
> So, the following is about how to describe the configuration required for a plugin.

### Backend & Plugin developer
:::note

For backend or plugin developers, we use the following structure to describe the plugin configuration.

As a plugin developer, you only need to build a structure `[]ConfigField` and fill in the configuration contents to describe the required configuration of a plugin.

:::

```go
type ConfigField struct {
	Name        string               `json:"name"`
	Type        ConfigType           `json:"type"`
	Title       string               `json:"title"`
	Description string               `json:"description"`
	Required    bool                 `json:"required"`
	Value       string               `json:"value"`
	UIOptions   ConfigFieldUIOptions `json:"ui_options"`
	Options     []ConfigFieldOption  `json:"options,omitempty"`
}

type ConfigFieldUIOptions struct {
	Placeholder string    `json:"placeholder,omitempty"`
	Rows        string    `json:"rows,omitempty"`
	InputType   InputType `json:"input_type,omitempty"`
}

type ConfigFieldOption struct {
	Label string `json:"label"`
	Value string `json:"value"`
}
```

### Frontend
:::note

On the frontend we use JSON to describe and render the plugin's configuration items.

:::

```json
{
  "name": "the key of this configuration that should be unique in the plugin",
  "type": "the type of this configuration",
  "title": "the label of this configuration that will be displayed",
  "description": "configuration description that will be displayed",
  "options,omitempty": [{"label": "Apple", "value": "apple"}],
  "required": true,
  "ui_options": {
    "input_type": "the type of input",
    "placeholder": "placeholder",
    "rows": "the number of rows that will be used for textarea"
  },
  "value": "the value of this configuration that will be saved"
}
```

### GitHub Connector Plugin Configuration Example

```json
[
    {
        "name": "client_id",
        "type": "input",
        "title": "ClientID",
        "description": "Client ID of your GitHub application.",
        "required": true,
        "ui_options": {
            "input_type": "text"
        }
    },
    {
        "name": "client_secret",
        "type": "input",
        "title": "ClientSecret",
        "description": "Client secret of your GitHub application.",
        "required": true,
        "ui_options": {
            "input_type": "text"
        }
    }
]
```

The following is what looks like on the Admin Page.
![plugin-github-connector-config](/img/docs/plugin-github-connector-config.png)

### Supported Config Types
> Different types will be rendered as different UI.

- input
- textarea
- checkbox
- radio
- select
- upload
- timezone
- switch

### Supported Config Input Types
> Different formats are supported for the input type

- text
- color
- date
- datetime-local
- email
- month
- number
- password
- range
- search
- tel
- time
- url
- week
