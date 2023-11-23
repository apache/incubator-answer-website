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
运行 answer 的方法如下：
        - 使用 'answer init' 初始化所需的环境。
        - 使用 'answer run' 启动应用程序。
        - 使用 'answer upgrade' 升级应用程序。

用法:
  answer [command]

可用命令:
  build       使用插件构建 answer
  check       检查所需环境
  dump        备份数据
  help        获取任一命令的帮助信息
  init        初始化 answer 应用程序
  plugin      打印打包在二进制文件中的所有插件
  run         运行应用程序
  upgrade     升级 Answer 版本

选项:
  -C, --data-path string   数据路径，例如：-C ./data/（默认值为 "/data/"）
  -h, --help               answer 的帮助信息
  -v, --version            answer 的版本信息

使用 "answer [command] --help" 获取有关命令的更多信息。
```

## 全局选项
所有全局选项都可以放置在命令级别。
- `--help`，`-h`：显示帮助文本并退出。可选。
- `--version`，`-v`：显示版本信息并退出。可选。
- `--data-path` 路径，`-C` 路径：数据保存路径。可选（默认值为 /data/）。

## 命令
### init
> init 命令将初始化应用程序所需的环境，包括：默认配置文件、数据目录、初始化数据库等。

- 示例
  - `answer init -C ./data/`
- 注意
  - 如果 answer 已经初始化，此命令将不会执行。例如，如果配置文件已经存在，则不会创建或覆盖它。
  - 如果 answer 初始化失败，则无法执行 run 命令。

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
> dump 命令将数据库数据转储到 SQL 文件。

- 选项
  - `--path` 路径，`-p` 路径：转储数据的路径。可选（默认值为 ./）。
- 示例
  - `answer dump -p /tmp/`

### build
> 构建一个新的 Answer 包含指定插件。

- 选项
  - `--with` 插件的字段名。必需。
- 示例
  - `answer build --with plugin1 --with plugin2`

### plugin
> 打印打包在二进制文件中的所有插件。

- 示例
  - `answer plugin`

### config
> 将某些配置值恢复为默认值。

- 选项
  - `--with` 配置的字段名。必需。
- 示例
  - `answer config -C ./data/ --with allow_password_login`