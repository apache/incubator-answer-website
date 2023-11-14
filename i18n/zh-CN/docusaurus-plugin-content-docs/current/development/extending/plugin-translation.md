---
sidebar_label: 插件翻译
sidebar_position: 1
---

# 插件翻译

## 如何使你的插件支持多语言？
>
> 由于 Answer 支持多语言，因此插件也需要支持多语言。以下是如何使你的插件支持多语言的示例。

## 翻译结构
>
> 在某些插件接口中，你可以看到 Translator 结构，用于支持多种语言。

例如，`ConfigField` 结构具有类型为 `Translator` 的 `Title` 字段。

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

构建 `Translator` 结构很容易，就像这样：

```go
import (
 "github.com/apache/incubator-answer/plugin"
)

plugin.MakeTranslator("plugin.github_connector.backend.name")
```

其中 `plugin.github_connector.backend.name` 是翻译文件的 key ，稍后将介绍。

因此，第一步是为需要翻译的每个字段构建 `Translator` 结构。

## 翻译文件

在插件的根目录中创建 `i18n` 目录，然后在其中创建名为 `en_US.yaml` 的文件。

`en_US.yaml` 文件用于存储插件的英文翻译其内容如下：

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

- `plugin` 是翻译文件的根节点。
- `github_connector` 是插件的名称。
- `backend` 是后端的翻译。键结尾的 `other` 仅用于 [go-i18n](https://github.com/nicksnyder/go-i18n) 识别翻译文件。
- `ui` 是前端的翻译。

你可以使用类似于 `plugin.github_connector.backend.name` 或 `plugin.github_connector.ui.login.title` 的键进行翻译。

在插件的根目录中创建一个 `i18n.go` 文件，然后添加以下代码：

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

`i18n.go` 文件用于存储翻译文件的键。

最后，插件的目录结构如下：

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

## 后端翻译

你只需要使用翻译文件的键返回 `Translator` 结构即可。

```go
func (g *GitHubConnector) ConnectorName() plugin.Translator {
  return plugin.MakeTranslator(i18n.ConnectorName)
}
```

`Answer` 将自动将翻译文件的键翻译为相应的语言。
