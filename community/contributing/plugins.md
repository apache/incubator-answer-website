---
# sidebar_label: Plugins
slug: /plugins
---

# Contribute for Plugins

:::tip

Viewing the [**official plugin code**](https://github.com/apache/incubator-answer-plugins) will make you to quickly understand and learn plugin development.

:::

## Plugin types

Currently we have three types of plugins:

- Only Backend plugin
- Frontend Builtin plugin
- Standard UI plugin

## Backend plugin

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

`Translator` is a struct for translation. Please refer to [the documentation](/community/plugins/plugin-translation) for details.

:::

### Implement the configuration interface

For details on the description of each configuration item, please refer to [the documentation](/community/plugins/plugin-config).

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

### Debugging tips

:::tip

During the development and debugging phase, you can use the following tips to avoid repetitive packaging.

:::

1. Use answer source code for development.
2. Write your plugin directly in the plugin directory.
3. Import your plugin in the main function

After that you just need to start the answer project normally and it will contain the plugins you developed.

## Registration and activation of plugins

All types of plug-in activation registration (or display) logic are in the `ui/utils/pluginKit/index.ts` file. During the development process, you can modify `registerPlugins` or call `changePluginActiveStatus` either of these two methods. to control whether your plugin is displayed.

## Builtin plugin

It is not so different from React component, this plugin is more suitable for the following scenarios:

1. There are complex business logics that cannot be separated from the code (such as Oauth).
2. Some back-end plug-ins require UI support for business purposes (such as Search).
3. This plug-in has extremely low requirements for developers and requires no additional configuration work.

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

4. **Publish plugin**: initiate the PR process normally and describe the plug-in function and scope of influence in detail.

## Standard UI plugin

This plugin is suitable for the following scenarios

1. A plug-in that can independently complete some UI functions and does not require back-end support;
2. The code needs to be isolated to prevent confusion with the main site;

Existing examples:[editor-chart](https://github.com/apache/incubator-answer-plugins/tree/main/editor-chart), [editor-formula](https://github.com/apache/incubator-answer-plugins/tree/main/editor-formula).

In order to simplify the development and compilation process, we use [workspace](https://pnpm.io/next/workspaces) to manage this independent front-end warehouse.

### How to develop standard UI plugin

1. First, refer to the two existing warehouses above to familiarize yourself with the basic configuration and component export methods.

  :::info

  The **name** field in package.json is the name of the package we add dependencies to; do not use `-` to connect this field naming, please use `_`; for example:

  "editor_chart" ✅  
  "editor-chart" ❌

  :::

2. Go to the `ui/src/plugins` directory and create a directory, such as editor_chart, then add the components you want to develop, then modify the `ui/src/plugins/index.ts` file to export your components; **changes here during the release phase do not need to be submitted**.

  ```ts
  export { default as  editor_chart } from 'editor_chart';
  ```

3. Run `pnpm pre-install`, and re-run `pnpm start`, and finally call the changePluginActiveStatus method in PluginKit on the page where you need to load the plugin to activate the plugin. **Changes here during the release phase do not need to be submitted**.

  ```ts
  import PluginKit from '@/utils/pluginKit';
  // call this method
  // @param1 plugin_name 
  // @param2 boolean; is whether or not to activate the
  PluginKit.changePluginActiveStatus('editor_chart', true);
  ```

4. **Publish plugin**: after the function is developed, copy your entire plug-in folder to [incubator-answer-plugins](https://github.com/apache/incubator-answer-plugins), **and add  `go.mod` `[plugin_name].go` `go.sum` these three files**; then initiate a PR and wait for review by relevant personnel; if incubator-answer If there are relevant changes in PR, please describe the scope of impact in PR.
