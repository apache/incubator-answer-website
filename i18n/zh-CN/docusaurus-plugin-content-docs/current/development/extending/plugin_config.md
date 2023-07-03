---
sidebar_label: 插件配置架构
sidebar_position: 0
---

# 插件配置架构

## 功能
>
> 对于插件，我们通常需要一些配置项来记录插件所需的信息。
>
> 例如，OAuth 插件需要秘密密钥配置。
>
> 这些配置需要由开发人员描述并由用户使用。
>
> 因此，以下内容介绍如何描述插件所需的配置。

### 后端和插件开发人员

:::note

对于后端或插件开发人员，我们使用以下结构来描述插件配置。

作为插件开发人员，你只需要构建一个 `[]ConfigField` 结构并填写配置内容，以描述插件所需的配置。

:::

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

type ConfigFieldUIOptions struct {
    Placeholder Translator `json:"placeholder,omitempty"`
    Rows        string     `json:"rows,omitempty"`
    InputType   InputType  `json:"input_type,omitempty"`
}

type ConfigFieldOption struct {
    Label Translator `json:"label"`
    Value string     `json:"value"`
}
```

### 前端

:::note

在前端，我们使用 JSON 描述和呈现插件的配置项。

:::

```json
{
  "name": "应该在插件中唯一的此配置的键",
  "type": "此配置的类型",
  "title": "将显示的此配置的标签",
  "description": "将显示的配置说明",
  "options,omitempty": [{"label": "Apple", "value": "apple"}],
  "required": true,
  "ui_options": {
    "input_type": "输入类型",
    "placeholder": "占位符",
    "rows": "用于 textarea 的行数"
  },
  "value": "将保存的此配置的值"
}
```

### GitHub 连接器插件配置示例

```json
[
    {
        "name": "client_id",
        "type": "input",
        "title": "ClientID",
        "description": "GitHub 应用程序的客户端 ID。",
        "required": true,
        "ui_options": {
            "input_type": "text"
        }
    },
    {
        "name": "client_secret",
        "type": "input",
        "title": "ClientSecret",
        "description": "GitHub 应用程序的客户端密钥。",
        "required": true,
        "ui_options": {
            "input_type": "text"
        }
    }
]
```

以下是管理页面上的外观。
![plugin-github-connector-config](/img/docs/plugin-github-connector-config.png)

### 支持的配置类型
>
> 不同的类型将呈现为不同的 UI。

- input
- textarea
- checkbox
- radio
- select
- upload
- timezone
- switch

### 支持的配置输入类型
>
> 支持不同格式的输入类型

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
