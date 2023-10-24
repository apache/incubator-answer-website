---
slug: /command-line
---

# 命令行

:::tip

Answer 二进制文件支持一些命令行选项

:::

## 用法

`answer command [command or global options] [arguments...]`

```shell
要运行 Answer，请使用：
        - 'answer init' 来初始化必要的环境。
        - 'answer run' 来启动应用程序。
        - 'answer upgrade' 来升级应用程序。

用法：
  answer [command]

可用命令：
  check       检查所需环境
  dump        备份数据
  help        获取命令的帮助信息
  init        初始化 Answer 应用程序
  run         运行应用程序
  upgrade     升级应用程序

Flags：
  -h, --help      获取 Answer 的帮助信息
  -v, --version   获取 Answer 的版本信息

使用 "answer [command] --help" 以获取命令的详细信息。
```

## 全局选项

所有全局选项可以放置在命令级别。

- `--help`, `-h`：显示帮助文本并退出。可选。
- `--version`, `-v`：显示版本并退出。可选。
- `--data-path` path, `-C` path：数据保存路径。可选。 (默认为：/data/)

## 命令

### init
>
> init 命令将初始化应用程序所需的环境，包括：默认配置文件、数据目录、初始化数据库等。

- 示例
  - `answer init -C ./data/`
- 注意
  - 如果 Answer 已经初始化过，则此命令不会执行。例如，如果配置文件已经存在，它将不会被创建或覆盖。
  - 如果 Answer 初始化失败，则无法执行运行命令。

### check
>
> check 命令将检查应用程序是否可以运行。检查配置文件是否存在。检查数据库是否可以建立连接等。

- 示例
  - `answer check -C ./data/`

### run
>
> run 命令将运行应用程序。

- 示例
  - `answer run -C ./data/`

### upgrade
>
> upgrade 命令将升级应用程序。

- 选项
  - `-f` 版本: 从指定版本开始升级. 可选.
- 示例
  - `answer upgrade -C ./data/`
  - ` -C ./data/`

### dump
>
> dump 命令将将数据库数据转储到 SQL 文件中。

- 选项
  - `--path` path, `-p` path：转储数据路径。可选。（默认为 ./）
- 示例
  - `answer dump -p /tmp/`
