---
# sidebar_label: Plugins
slug: /development/plugins
---

# Plugins Development Guide

Plugins are a way to extend the functionality of the Answer project. You can create your own plugins to meet your own needs.

:::tip

Viewing the [**official plugin code**](https://github.com/apache/incubator-answer-plugins) will make you to quickly understand and learn plugin development.

:::

## Introduction

### Plugin template types
Currently we have three types of plugins:

- Backend plugin
- Standard UI plugin
- Builtin plugin
  
### Plugin type

We classify plugins into different types. Different types of plugins have different functions. Plugins of the same type have the same effect, but are implemented differently.

Plugin Name | Template Type | Description
--- | --- | ---
Connector | Backend Plugin | The Connector plugin helps us to implement third-party login functionality
Storage | Backend Plugin | The Storage plugin helps us to upload files to third-party storage.
Cache | Backend Plugin | Support for using different caching middleware.
Search | Backend Plugin | Support for using search engines to speed up the search for question answers.
User Center | Backend Plugin | Using the third-party user system to manage users.
Notification | Backend Plugin | The Notification plugin helps us to send messages to third-party notification systems.
Route | Standard UI Plugin | Provides support for custom routing.
Editor | Standard UI Plugin | Supports extending the markdown editor's toolbar.
Captcha | Standard UI Plugin | Provides support for captcha.
Reviewer |  Backend Plugin  |Allows customizing the reviewer functionality.
Filter |  Backend Plugin | Filter out illegal questions or answers. (coming soon)
Render | Standard UI Plugin | Parsers for different content formats. (coming soon)

## Create a Plugin

:::info

The **name** field in package.json is the name of the package we add dependencies to; do not use `_` to connect this field naming, please use `-`; for example:

"editor-chart" ✅  
"editor_chart" ❌

:::

1. Go to the `ui > src > plugin` directory of the project.

2. Execute the following commands in that directory:

```shell
npx create-answer-plugin <pluginName>
```

3. Select the type of plugin you want to create.



## Run the Plugin

### Run the Backend Plugin

1. First, execute `make ui` to compile the front-end code.
2. In the `cmd > answer > main.go` file, import your plugin.

    ```go
    import (
      answercmd "github.com/apache/incubator-answer/cmd"

      // Import the plugins
      _ "github.com/apache/incubator-answer/ui/src/plugins/my-plugin"
    )
    ```
3. Use `go mod edit` to add the plugin to the `go.mod` file.

    ```shell
    go mod edit -replace=github.com/apache/incubator-answer/ui/src/plugins/my-plugin=../ui/src/plugins/my-plugin
    ```
4. Update the dependencies.

    ```shell
    go mod tidy
    ```

5. Start the project.

    ```shell
    go run cmd/answer/main.go run -C ./answer-data
    ```

### Run the Standard UI Plugin

1. Go to the `ui` directory.
2. Install the dependencies.

    ```shell
    pnpm pre-install
    ```

3. Start the project.

    ```shell
    pnpm start
    ```

4. Refer to the [Run the Backend Plugin](/docs/development/plugins#debugging-plugins) and add the plugin to the project.

## Backend Plugin Development

### Implement the Base interface

The `Base` interface contains basic information about the plugin and is used to display.

```go
// Info presents the plugin information
type Info struct {
    Name        Translator
    SlugName    string
    Description Translator
    Author      string
    Version     string
    Link        string
}

// Base is the base plugin
type Base interface {
    // Info returns the plugin information
    Info() Info
}
```

:::caution

The `SlugName` of the plugin must be unique. Two plugins with the same `SlugName` will panic when registering.

:::

### Implement the function interface

:::note

Different plugin types require different interfaces of implementation.

For example, following is the `Connector` plugin interface.

:::

```go
type Connector interface {
    Base
    
    // ConnectorLogoSVG presents the logo in svg format
    ConnectorLogoSVG() string
    
    // ConnectorName presents the name of the connector
    // e.g. Facebook, Twitter, Instagram
    ConnectorName() Translator
    
    // ConnectorSlugName presents the slug name of the connector
    // Please use lowercase and hyphen as the separator
    // e.g. facebook, twitter, instagram
    ConnectorSlugName() string
    
    // ConnectorSender presents the sender of the connector
    // It handles the start endpoint of the connector
    // receiverURL is the whole URL of the receiver
    ConnectorSender(ctx *GinContext, receiverURL string) (redirectURL string)
    
    // ConnectorReceiver presents the receiver of the connector
    // It handles the callback endpoint of the connector, and returns the
    ConnectorReceiver(ctx *GinContext, receiverURL string) (userInfo ExternalLoginUserInfo, err error)
}
```

:::tip

`Translator` is a struct for translation. Please refer to [the documentation](/docs/development/plugins/plugin-translation) for details.

:::

### Implement the configuration interface

For details on the description of each configuration item, please refer to [the documentation](/docs/development/plugins/plugin-config).

```go
type Config interface {
    Base

    // ConfigFields returns the list of config fields
    ConfigFields() []ConfigField

    // ConfigReceiver receives the config data, it calls when the config is saved or initialized.
    // We recommend to unmarshal the data to a struct, and then use the struct to do something.
    // The config is encoded in JSON format.
    // It depends on the definition of ConfigFields.
    ConfigReceiver(config []byte) error
}
```

### Register initialization function

```go
import "github.com/apache/incubator-answer/plugin"

func init() {
    plugin.Register(&GitHubConnector{
        Config: &GitHubConnectorConfig{},
    })
}
```

## Standard UI plugin Development

The default configuration is as follows:

```yaml
slug_name: <slug_name> 
type: <type>
version: 0.0.1
author: 

```
```tsx
import i18nConfig from './i18n';
import Component from './Component';
import info from './info.yaml';

export default {
  info: {
    slug_name: info.slug_name,
    type: info.type, 
  },
  i18nConfig,
  component: Component, 
};
```

Among them, `type`、`slug_name` and `component` are required fields. `i18nConfig` and `hooks` are optional fields.

Currently the front end supports the following types of plugins:
* editor
* route
* captcha

### Editor plugin

Refer to [editor-chart](https://github.com/apache/incubator-answer-plugins/tree/main/editor-chart) for details.

### Route plugin

The plugin configuration of the routing type adds the `route` field to the configuration file.

```yaml
slug_name: <slug_name>
route: /<route>
type: route
version: 0.0.1
author: 

```
```tsx
import i18nConfig from './i18n';
import Component from './Component';
import info from './info.yaml';

export default {
  info: {
    slug_name: info.slug_name,
    type: info.type,
    route: info.route,
  },
  i18nConfig,
  component: Component,
};
```

### Captcha plugin

Refer to [captcha-basic](https://github.com/apache/incubator-answer-plugins/tree/main/captcha-basic) for details.

## Builtin plugin Development

It is not so different from React component, this plugin is more suitable for the following scenarios:

1. There are complex business logics that cannot be separated from the code (such as Oauth).
2. Some back-end plugins require UI support for business purposes (such as Search).
3. This plugin has extremely low requirements for developers and requires no additional configuration work.

### How to develop builtin plugin

1. **Get familiar with the directory structure**. Go to the `ui/src/plugins/builtin` directory and create a directory, such as Demo. Then refer to the existing plugins to create the necessary files to start development.

  ```txt
  // ui/src/plugins/builtin
  .
  ├── ...
  ├── Demo
        ├── i18n (language file)
              ├── en_US.yaml (default language required)
              ├── index.ts (required)
              ├── zh_CN.ts (any language you want to provide)
        ├── index.tsx (component required)
        ├── info.yaml (plugin information required)
        ├── services.ts (api)
  ```

2. Export the plugins you have just defined in the plugins list file `plugins/builtin/index.ts`

  ```ts
  import Demo from './Demo'

  export default {
    ...(exists plugins),
    Demo,
  };
  ```

3. Now you can use the PluginRender component to render the just-defined plugin where you want it!

  ```ts
    <PluginRender
      type="connector"
      slug_name="third_party_connector"
    />
  ```

4. **Publish plugin**: initiate the PR process normally and describe the plugin function and scope of influence in detail.
