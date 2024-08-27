---
slug: /command-line
---

# 命令行指南

:::tip

Apache Answer 二进制文件支持一些命令行选项。

:::

## 用法

`answer command [命令或全局选项] [参数...]`

```shell
要运行 Answer，请使用以下命令：
        - 'answer init' 初始化所需环境
        - 'answer run' 启动应用程序
        - 'answer upgrade' 升级应用程序

用法:
  answer [命令]

可用命令:
  build       用于构建包含插件的 Answer
  check       检查所需环境
  dump        备份数据
  help        获取关于任意命令的帮助
  init        初始化 Answer 应用程序
  plugin      打印二进制文件中打包的所有插件
  run         运行应用程序
  upgrade     升级 Apache Answer 版本

Flags:
  -C, --data-path string   数据路径，例如：-C ./data/ （默认 "/data/"）
  -h, --help               获取 Answer 的帮助信息
  -v, --version            获取 Answer 的版本信息

使用 "answer [命令] --help" 来获取关于该命令的更多信息。
```

## 全局选项

所有全局选项都可以放置在命令级别。

- `--help`, `-h`: 显示帮助文本并退出。可选。
- `--version`, `-v`: 显示版本并退出。可选。
- `--data-path` 路径, -C 路径：数据保存路径。可选。（默认: /data/）

## 命令

### init

> init 命令将初始化应用程序所需的环境，包括：默认配置文件、数据目录、初始化数据库等。

- 示例
  - `answer init -C ./data/`
- 注意事项
  - 如果 Answer 已经初始化，此命令将不会执行。例如，如果配置文件已存在，则不会被创建或覆盖。
  - 如果 Answer 初始化失败，则无法执行 run 命令。

### check

> check 命令将检查应用程序是否可以运行。检查配置文件是否存在，检查数据库是否可以建立连接等。

- 示例
  - `answer check -C ./data/`

### run

> run 命令将运行应用程序。

- 示例
  - `answer run -C ./data/`

### upgrade

> upgrade 命令将升级应用程序。

- 选项
  - `-f` 版本：从指定版本升级。可选。
- 示例
  - `answer upgrade -C ./data/`
  - `answer upgrade -f v1.1.0 -C ./data/`

### dump

> dump 命令将数据库数据转储为 SQL 文件。

- 选项
  - `--path` 路径，`-p` 路径：数据转储路径。可选。(默认: ./)
- 示例
  - `answer dump -p /tmp/`

### build
> 构建包含插件的 Apache Answer。

- 选项
  - `--with` 插件字段名称。必需。
- 示例
  - `answer build --with plugin1 --with plugin2`

### plugin
> 打印二进制文件中打包的所有插件。

- 示例
  - `answer plugin`

### config
> 将某些配置值恢复为默认值。

- 选项
  - `--with` 配置字段名称。必需。
- 示例
  - `answer config -C ./data/ --with allow_password_login`
