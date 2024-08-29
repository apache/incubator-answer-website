---
slug: /plugins
---

# 使用插件

:::tip

当我们需要扩展 Apache Answer 的功能时，例如添加 OAuth 登录，我们可以设计插件来实现这些功能。

:::

## 介绍

### 官方插件

你可以在[这里](https://github.com/apache/incubator-answer-plugins)找到 Apache Answer 官方支持的插件列表。

## 构建

Apache Answer 的二进制文件支持将不同的所需插件打包到二进制文件中。

### 前置要求

- 原始的 Apache Answer 二进制文件
- [Go](https://go.dev/) `>=1.18`
- [Node.js](https://nodejs.org/) `>=16.17`
- [pnpm](https://pnpm.io/) `>=7`

### 二进制构建

:::tip

我们使用 Apache Answer 二进制文件提供的 `build` 命令来重新构建包含插件的 Apache Answer 版本。

:::

例如，以下是如何构建包含 GitHub 第三方登录插件的 Apache Answer 二进制文件。

#### 使用官方插件

你可以使用 `--with` 参数来指定要使用的插件：

```shell
# 构建包含 GitHub 连接器插件的 Answer
$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github
```

你还可以指定插件版本：

```shell
# 构建包含 GitHub 连接器插件版本 1.0.0 的 Answer
$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github@1.0.0 --output ./new_answer
```

你可以同时使用多个插件：

```shell
$ ./answer build \
--with github.com/apache/incubator-answer-plugins/connector-github \
--with github.com/apache/incubator-answer-plugins/connector-google
```

#### 使用本地插件

如果你需要使用本地插件，可以使用以下命令：

```shell
$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github@1.0.0=/my-local-space
```

#### 交叉编译

你可以使用以下命令在 macOS 上构建 Linux-amd64 二进制文件：

```shell
$ CGO_ENABLED=0 GOOS=linux GOARCH=amd64 ./answer build --with github.com/apache/incubator-answer-plugins/connector-github
```

#### 指定 Answer 版本

你可以使用 `ANSWER_MODULE` 环境变量来指定 Answer 版本：

```shell
$ ANSWER_MODULE=github.com/apache/incubator-answer@v1.2.0-RC1 ./answer build --with github.com/apache/incubator-answer-plugins/connector-github
```

:::tip

你可以使用 `plugin` 命令列出当前二进制文件中包含的插件。

:::

```shell
$ ./new_answer plugin

# 输出：
# github connector[0.0.1] made by answerdev
# google connector[0.0.1] made by answerdev
```

### Docker 构建

#### 从 answer 基础镜像构建包含插件的版本

```dockerfile  title="Dockerfile"
FROM apache/answer as answer-builder

FROM golang:1.19-alpine AS golang-builder

COPY --from=answer-builder /usr/bin/answer /usr/bin/answer

RUN apk --no-cache add \
    build-base git bash nodejs npm go && \
    npm install -g pnpm@8.9.2

RUN answer build \
    --with github.com/apache/incubator-answer-plugins/connector-basic \
    --with github.com/apache/incubator-answer-plugins/storage-s3 \
    --with github.com/apache/incubator-answer-plugins/search-elasticsearch \
    --output /usr/bin/new_answer

FROM alpine
LABEL maintainer="linkinstar@apache.org"

ARG TIMEZONE
ENV TIMEZONE=${TIMEZONE:-"Asia/Shanghai"}

RUN apk update \
    && apk --no-cache add \
        bash \
        ca-certificates \
        curl \
        dumb-init \
        gettext \
        openssh \
        sqlite \
        gnupg \
        tzdata \
    && ln -sf /usr/share/zoneinfo/${TIMEZONE} /etc/localtime \
    && echo "${TIMEZONE}" > /etc/timezone

COPY --from=golang-builder /usr/bin/new_answer /usr/bin/answer
COPY --from=answer-builder /data /data
COPY --from=answer-builder /entrypoint.sh /entrypoint.sh
RUN chmod 755 /entrypoint.sh

VOLUME /data
EXPOSE 80
ENTRYPOINT ["/entrypoint.sh"]
```

> 你可以更新 --with 参数来添加更多你需要的插件。

```shell
# 创建一个 Dockerfile 并复制以上内容
$ vim Dockerfile
$ docker build -t answer-with-plugin .
$ docker run -d -p 9080:80 -v answer-data:/data --name answer answer-with-plugin
```

#### 从本地代码构建

1. **保持代码更新**：确保你的本地代码与官方仓库同步，至少与 v1.3.5 版本保持一致。
2. **添加所需插件**：将你需要的插件仓库添加到根目录的 `/script/plugin_list` 文件中，每行一个。
```
github.com/apache/incubator-answer-plugins/connector-basic@latest  
github.com/apache/incubator-answer-plugins/reviewer-basic@latest  
github.com/apache/incubator-answer-plugins/captcha-basic@latest  
github.com/apache/incubator-answer-plugins/editor_formula@latest
```
3. **构建 Docker 镜像**：运行 `docker build -t <name[:tag]> . ` 命令开始构建镜像。
4. **验证镜像构建**: 运行 `docker run -d -p 9080:80 -v answer-data:/data --name <container_name> <image_name>` 命令启动容器，并在本地验证镜像是否构建成功。

## 使用

带插件版本的 Apache Answer 的使用方式与之前相同。你可以在管理页面找到插件的配置。

![plugin-config-admin-page](/img/docs/plugin-config-admin-page.png)

## 升级

:::caution

如果你从非插件版本升级到插件版本，还需要执行升级命令（这也被视为一次升级）。

:::

你需要使用新插件版本构建新的 Apache Answer 二进制文件，然后将旧的 Apache Answer 二进制文件替换为新的。与普通升级一样，根据部署方式的不同，你需要执行不同的[升级步骤](./upgrade)。例如，如果你使用的是二进制部署，则需要执行 `upgrade` 命令。

## 第三方插件

:::tip

我们推荐使用[官方插件](https://github.com/apache/incubator-answer-plugins)。如果你想使用第三方插件，请参考以下内容。

:::

- 如果第三方插件是公开的，你可以像使用官方插件一样与之一起构建。
- 如果第三方插件是私有的，你需要下载它然后与之一起构建。

## 开发与贡献

请参考[文档](/docs/development)获取详细信息。

## 设计与原理

由于 Go 是静态语言，没有友好的插件机制。我们采用重新编译的方式来进行部署，而非动态方式。详情请参考[博客](/blog/2023/07/22/why-the-answer-plugin-system-was-designed-this-way)。