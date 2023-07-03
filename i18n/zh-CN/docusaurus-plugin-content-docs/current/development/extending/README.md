---
sidebar_position: 1
---

# 插件

:::tip

当我们需要对 Answer 的功能进行扩展，例如 OAuth 登录，我们设计了一种使用插件实现这些功能的方式。

:::

## 介绍

### 官方插件

你可以在 [这里](https://github.com/answerdev/plugins) 找到 Answer 官方支持的插件列表。

### 插件类型
>
> 我们将插件分类为不同的类型。
> 不同类型的插件有不同的功能。
> 同一类型的插件具有相同的效果，但实现方式不同。

- Connector: 插件帮助我们实现第三方登录功能。例如 GitHub OAuth 登录。e.g. `GitHub OAuth Login`
- Storage: Storage 插件帮助我们将文件上传到第三方存储器。（预览）
- Cache:  为不同内容格式编写的解析器。 （预览）
- Filter: 过滤掉非法问题或回答。 （即将推出）
- Render: 为不同内容格式编写的解析器。 （即将推出）
- Finder: 支持使用搜索引擎加速搜索问题和回答。 （即将推出）

## 构建
>
> Answer 二进制文件支持将不同的必需插件打包到二进制文件中。

### 先决条件

- 原始的 Answer 二进制文件
- [Golang](https://go.dev/) `>=1.18`

### 命令

:::tip
我们使用 Answer 二进制文件提供的 build 命令来重新构建带插件的 Answer 版本。
:::

> 例如，让我们看看如何构建一个包含 github 第三方登录插件的 Answer 二进制文件

```shell
# answer build --with [plugin@plugin_version=[replacement]] --output [file]
$ ./answer build --with github.com/answerdev/plugins/connector/github

# 构建一个带有 github 登录插件的新 Answer，然后输出到 ./new_answer。
$ ./answer build --with github.com/answerdev/plugins/connector/github@1.0.0 --output ./new_answer

# 带有多个插件
$ ./answer build \
--with github.com/answerdev/plugins/connector/github \
--with github.com/answerdev/plugins/connector/google

# 带有本地插件
$ ./answer build --with github.com/answerdev/plugins/connector/github@1.0.0=/my-local-space

# 交叉编译。在 macos 中构建一个 linux-amd64 二进制文件
$ CGO_ENABLED=0 GOOS=linux GOARCH=amd64 ./answer build --with github.com/answerdev/plugins/connector/github
```

:::tip
你可以使用 `plugin` 命令列出当前包含插件的二进制文件。
:::

```shell
$ ./new_answer plugin

# 输出
# github connector[0.0.1] made by answerdev
# google connector[0.0.1] made by answerdev
```

## 第三方插件

:::tip
我们建议使用[官方插件](https://github.com/answerdev/plugins)，如果你想使用第三方插件，请参考以下内容。
:::

- 如果第三方插件是公开可用的，则可以像官方插件一样构建它。
- 如果第三方插件是私有的，则需要下载然后构建。

## 使用
>
> 具有插件版本的 answer 与之前的使用方式相同。
> 你可以在管理员页面中找到插件的配置。

![plugin-config-admin-page](/img/docs/plugin-config-admin-page.png)

## 升级

你只需要重新编译并使用插件的最新版本即可。

## 开发

:::tip
查看官方[插件代码](https://github.com/answerdev/plugins)，可以帮助你快速了解和学习插件开发。
:::

### 后端开发

#### 实现 Base
>
> `Base` 接口包含有关插件的基本信息，并用于显示。

```go
// Info 显示插件信息
type Info struct {
 Name        Translator
 SlugName    string
 Description Translator
 Author      string
 Version     string
 Link        string
}

// Base 是基础插件
type Base interface {
 // Info 返回插件信息
 Info() Info
}
```

:::caution
插件的 `SlugName` 必须是唯一的。如果有两个 `SlugName` 相同的插件将在注册时引发混乱。
:::

#### 实现函数接口

:::note
不同类型的插件需要不同的接口实现。

例如，以下是 `Connector` 插件接口。
:::

```go
type Connector interface {
    Base
    
    // ConnectorLogoSVG 显示 svg 格式的标志
    ConnectorLogoSVG() string
    
    // ConnectorName 显示连接器的名称
    // 例如 Facebook、Twitter、Instagram
    ConnectorName() Translator
    
     // ConnectorSlugName 显示连接器的 slug 名称
    // 请使用小写和连字符作为分隔符
    // 例如 facebook、twitter、instagram
    ConnectorSlugName() string
    
    // ConnectorSender 显示连接器的发送器
    // 它处理连接器的起始端点
    // receiverURL 是接收方的完整 URL
    ConnectorSender(ctx *GinContext, receiverURL string) (redirectURL string)
    
    // ConnectorReceiver 显示连接器的接收器
    // 它处理连接器的回调端点，并返回
    ConnectorReceiver(ctx *GinContext, receiverURL string) (userInfo ExternalLoginUserInfo, err error)
}
```

:::tip
`Translator` 是用于翻译的结构体。请参阅[文档](/docs/development/extending/plugin_translation)了解详情。
:::

#### 实现配置接口

有关每个配置项的描述详见[文档](/docs/development/extending/plugin_config)。

```go
type Config interface {
  Base

  // ConfigFields 返回配置字段列表
  ConfigFields() []ConfigField

  // ConfigReceiver 接收配置数据，在保存或初始化配置时调用。
  // 我们建议将数据反序列化为结构体，然后使用结构体来进行操作。
  // 配置以 JSON 格式编码。
  // 它依赖于 ConfigFields 的定义。
  ConfigReceiver(config []byte) error
}
```

#### 注册初始化函数

```go
import "github.com/answerdev/answer/plugin"

func init() {
 plugin.Register(&GitHubConnector{
  Config: &GitHubConnectorConfig{},
 })
}
```

#### 调试提示

:::tip
在开发和调试阶段，你可以使用以下提示，避免重复打包。
:::

1. U使用 Answer 的源代码进行开发。
2. 直接在插件目录中编写插件。
3. 在主函数中导入插件。

之后，你只需要正常启动 Answer 项目，它将包含你开发的插件。

## 贡献

对于尚未实现的插件类型，请等待官方实现完成后再进行贡献。
对于已有的插件类型，你可以按照以下步骤向我们贡献插件实现。

1. 提交问题请求，以确保官方没有开发与你相同的插件。
2. 得到确认后，开发你的插件，进行测试并提交 PR。
3. 等待 PR 合并，官方包含你的插件。

## 设计和原则

由于 Golang 是一种静态语言，因此没有友好的插件机制。因此，我们使用重新编译进行部署，而不是动态方法。
