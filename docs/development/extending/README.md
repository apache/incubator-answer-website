---
sidebar_position: 1
---

# Plugin
:::tip

When we need to do some extensions to Answer's functionality, for example, OAuth login, we design a way to use plugins to implement these functions. 

:::

## Introduction
### Official Plugins
You can find a list of officially supported plugins for Answer [here](https://github.com/answerdev/plugins).

### Plugin Type
> We classify plugins into different types. 
> Different types of plugins have different functions. 
> Plugins of the same type have the same effect, but are implemented differently.

- Connector: The Connector plugin helps us to implement third-party login functionality. e.g. `GitHub OAuth Login`
- Storage: The Storage plugin helps us to upload files to third-party storage. (preview)
- Cache: Support for using different caching middleware. e.g. `Redis` (preview)
- Filter: Filter out illegal questions or answers. (coming soon)
- Render: Parsers for different content formats. (coming soon)
- Finder: Support for using search engines to speed up the search for question answers. (coming soon)

## Build
> Answer binary supports packaging different required plugins into the binary.

### Prerequisites
- Original Answer binary
- [Golang](https://go.dev/) `>=1.18`

### Command
:::tip
We use the `build` command provided with the Answer binary to rebuild a version of Answer with the plugin.
:::

> For example, let's see how to build an Answer binary that includes the github third-party login plugin

```shell
# answer build --with [plugin@plugin_version=[replacement]] --output [file]
$ ./answer build --with github.com/answerdev/plugins/connector/github

# build a new answer with github login plugin then output to ./new_answer.
$ ./answer build --with github.com/answerdev/plugins/connector/github@1.0.0 --output ./new_answer

# with multiple plugins
$ ./answer build \
--with github.com/answerdev/plugins/connector/github \
--with github.com/answerdev/plugins/connector/google

# with local plugins
$ ./answer build --with github.com/answerdev/plugins/connector/github@1.0.0=/my-local-space

# cross compilation. Build a linux-amd64 binary in macos 
$ CGO_ENABLED=0 GOOS=linux GOARCH=amd64 ./answer build --with github.com/answerdev/plugins/connector/github
```

:::tip
You can use the `plugin` command to list the current binary containing plugins.
:::

```shell
$ ./new_answer plugin

# output
# github connector[0.0.1] made by answerdev
# google connector[0.0.1] made by answerdev
```

## Third-party plugin
:::tip
We recommend the use of [official plugins](https://github.com/answerdev/plugins), if you want to use third-party plugins, refer to the following.
:::

- If the third-party plugin is publicly available, you can build with it like official plugins.
- If the third-party plugin is private, you need to download it then build with.

## Use
> The answer with the plug-in version is used in the same way as before.
> You can find the plugin's configuration in the admin page.

![plugin-config-admin-page](/img/docs/plugin-config-admin-page.png)

## Upgrade
You just need to recompile and use the latest version of the plugin.

## Develop
:::tip
Viewing the [official plugin](https://github.com/answerdev/plugins) code will make you to quickly understand and learn plugin development.
:::

### Backend Development
#### Implement the base 
> The `Base` interface contains basic information about the plugin and is used to display.

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

#### Implement the function interface
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
`Translator` is a struct for translation. Please refer to [the documentation](/docs/development/extending/plugin_translation) for details.
:::


#### Implement the configuration interface
For details on the description of each configuration item, please refer to [the documentation](/docs/development/extending/plugin_config).

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

#### Register initialization function
```go
import "github.com/answerdev/answer/plugin"

func init() {
	plugin.Register(&GitHubConnector{
		Config: &GitHubConnectorConfig{},
	})
}
```

#### Debugging tips
:::tip
During the development and debugging phase, you can use the following tips to avoid repetitive packaging.
:::

1. Use answer source code for development.
2. Write your plugin directly in the plugin directory.
3. Import your plugin in the main function

After that you just need to start the answer project normally and it will contain the plugins you developed.


## Contributing
For plugin types that have not been implemented yet, please wait for the official implementation to be completed before contributing.
For existing plugin types, you can follow the steps below to contribute the plugin implementation to us. 

1. Submit an issue request to ensure that the official is not developing the same plug-in as you.
2. Get confirmation that you can develop your plugin, test it and submit a PR.
3. Wait for the PR merge, the official will include your plugin.

## Design & Principle
Since Golang is a static language, there is no friendly plugin mechanism. So instead of a dynamic approach, we use recompilation for deployment.
