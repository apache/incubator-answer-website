---
slug: /development/plugins/plugin-translation
---

# Plugin Translation

Since answer supports multiple languages, the plugin also needs to support multiple languages.
The following is an example of how to make your plugin support multiple languages.

## Translator structure

In some plugins interface, you can see the `Translator` structure, which is used to support multiple languages.

For example, the `ConfigField` structure has a `Title` field of type `Translator`.

```go
type ConfigField struct {
    Name        string               `json:"name"`
    Type        ConfigType           `json:"type"`
    Title       Translator           `json:"title"`
    Description Translator           `json:"description"`
    Required    bool                 `json:"required"`
    Value       string               `json:"value"`
    UIOptions   ConfigFieldUIOptions `json:"ui_options"`
    Options     []ConfigFieldOption  `json:"options,omitempty"`
}
```

It's easy to build a `Translator` structure, just like this:

```go
import (
    "github.com/apache/incubator-answer/plugin"
)

plugin.MakeTranslator("plugin.github_connector.backend.name")
```

The `plugin.github_connector.backend.name` is the key of the translation file, which will be introduced later.

So, the first step is build a `Translator` structure for each field that needs to be translated.

## Translation file

Make directory `i18n` in the root directory of your plugin, and then create a file named `en_US.yaml` in it.

The `en_US.yaml` file is used to store the English translation of the plugin.

The content of the `en_US.yaml` file is as follows:

```yaml
plugin:
  github_connector:
    backend:
      name:
        other: GitHub
      info:
        name:
          other: GitHub Connector
        description:
          other: Connect to GitHub for third-party login
      config:
        client_id:
          title:
            other: ClientID
          description:
            other: Client ID of your GitHub application
        client_secret:
          title:
            other: ClientSecret
          description:
            other: Client secret of your GitHub application
    ui:
      login:
        title: Login with GitHub
        description: Login with GitHub
```

- The `plugin` is the root key of the translation file.
- The `github_connector` is the name of the plugin.
- The `backend` is translation for the backend. The end of key like `other` is just for [go-i18n](https://github.com/nicksnyder/go-i18n) to recognize the translation file.
- The `ui` is translation for the frontend.

You can use the key like `plugin.github_connector.backend.name` or `plugin.github_connector.ui.login.title` for translation.

Create a `i18n.go` file in the root directory of your plugin, and then add the following code:

```go
package i18n

const (
    ConnectorName                 = "plugin.github_connector.backend.name"
    InfoName                      = "plugin.github_connector.backend.info.name"
    InfoDescription               = "plugin.github_connector.backend.info.description"
    ConfigClientIDTitle           = "plugin.github_connector.backend.config.client_id.title"
    ConfigClientIDDescription     = "plugin.github_connector.backend.config.client_id.description"
    ConfigClientSecretTitle       = "plugin.github_connector.backend.config.client_secret.title"
    ConfigClientSecretDescription = "plugin.github_connector.backend.config.client_secret.description"
)
```

The `i18n.go` file is used to store the key of the translation file.

The directory structure of the plugin is as follows:

```bash
.
├── README.md
├── github.go
├── go.mod
├── go.sum
└── i18n
    ├── en_US.yaml
    ├── translation.go
    └── zh_CN.yaml
```

Finally, execute the following bash shell command to merge the plugin i18n files into the answer i18n runtime data.

You can replace the environment variables with your own data or define them as needed.

```bash
go run ./cmd/answer/main.go i18n -s $PLUGIN_PATH -t $ANSWER_DATA_PATH
```

Example:

```bash
go run ./cmd/answer/main.go i18n -s ../incubator-answer-plugins/ -t ./answer-data/i18n/
```

## Backend translation

You just need to return `Translator` structure with the key of the translation file.

```go
func (g *GitHubConnector) ConnectorName() plugin.Translator {
    return plugin.MakeTranslator(i18n.ConnectorName)
}
```

The `Answer` will automatically translate the key of the translation file into the corresponding language.
