---
slug: /plugins
---

# 使用插件

:::提示

当我们需要扩展 Apache Answer 的功能时，例如添加 OAuth 登录，我们可以设计插件来实现这些功能。

:::

## 介绍

### 官方插件

你可以在这里找到官方支持的 Apache Answer 插件列表。

## 构建

Apache Answer 二进制文件支持将不同的所需插件打包到二进制文件中。

### 先决条件

- 原始的 Apache Answer 二进制文件
- [Go](https://go.dev/) `>=1.18`
- [Node.js](https://nodejs.org/) `>=16.17`
- [pnpm](https://pnpm.io/) `>=7`

### 二进制构建

:::提示

我们使用 Apache Answer 二进制文件提供的`build`命令来使用插件重建 Apache Answer 的版本。

:::

例如，让我们看看如何构建包含 GitHub 第三方登录插件的 Apache Answer 二进制文件。

#### 使用官方插件

你可以指定与`--with`参数一起使用的插件：

```shell
# Build Answer with the GitHub connector plugin
$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github
```

你还可以指定插件版本：

```shell
# Build Answer with the GitHub connector plugin version 1.0.0
$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github@1.0.0 --output ./new_answer
```

你可以同时使用多个插件：

```shell
$ ./answer build \
--with github.com/apache/incubator-answer-plugins/connector-github \
--with github.com/apache/incubator-answer-plugins/connector-google
```

#### 使用本地插件

如果你需要使用本地插件，你可以使用以下命令：

```shell
$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github@1.0.0=/my-local-space
```

#### 交叉编译

你可以使用以下命令在 macOS 上构建 Linux-amd64 二进制文件：

```shell
$ CGO_ENABLED=0 GOOS=linux GOARCH=amd64 ./answer build --with github.com/apache/incubator-answer-plugins/connector-github
```

#### 指定答案版本

你可以使用`ANSWER_MODULE`环境变量来指定 Answer 版本：

```shell
$ ANSWER_MODULE=github.com/apache/incubator-answer@v1.2.0-RC1 ./answer build --with github.com/apache/incubator-answer-plugins/connector-github
```

:::提示

你可以使用`plugin`命令列出当前包含插件的二进制文件。

:::

```shell
$ ./new_answer plugin

# Output:
# github connector[0.0.1] made by answerdev
# google connector[0.0.1] made by answerdev
```

### Docker 构建

#### 使用答案基础图像的插件构建

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

> 你可以更新带有--的参数，以添加更多你需要的插件。

```shell
# Create a Dockerfile and copy the content above
$ vim Dockerfile
$ docker build -t answer-with-plugin .
$ docker run -d -p 9080:80 -v answer-data:/data --name answer answer-with-plugin
```

#### 使用本地代码的插件构建

1. **让你的代码保持在最新状态**: 确保你的本地代码与官方存储库同步，或至少与v1.3.5版本同步。
2. **添加所需的插件**: 将所需的插件存储库添加到根目录中的`/script/plugin_list`文件中，每行一个。
```
github.com/apache/incubator-answer-plugins/connector-basic@latest  
github.com/apache/incubator-answer-plugins/reviewer-basic@latest  
github.com/apache/incubator-answer-plugins/captcha-basic@latest  
github.com/apache/incubator-answer-plugins/editor_formula@latest
```
3. **构建Docker映像**: 运行`docker build -t <name[:tag]> . `命令开始构建映像。
4. **verify image construction**: 运行`docker run -d -p 9080:80 -v answer-data:/data --name <container_name> <image_name>`命令以启动容器，并在本地验证映像是否构建成功。

## 惯例

带有插件版本的 Apache Answer 的使用方式与以前相同。你可以在管理页面中找到插件的配置。

![plugin-config-admin-page](/img/docs/plugin-config-admin-page.png)

## 升级

:::警告

请注意，如果你要从非插件版本升级到插件版本，你还需要执行升级命令（也被视为升级）。

:::

你需要使用新的插件版本构建一个新的Apache Answer二进制文件，然后用新的替换旧的Apache Answer二进制文件。与正常升级一样，你需要根据部署方法执行不同的[升级步骤](./upgrade)。例如，如果你正在使用二进制部署，则需要执行`upgrade`命令。

## 第三方插件

:::提示

我们建议使用[官方插件](https://github.com/apache/incubator-answer-plugins)。如果你想使用第三方插件，请参考以下内容。

:::

- 如果第三方插件是公开可用的，你可以像官方插件一样使用它构建。
- 如果第三方插件是私有的，你需要下载它，然后用它构建。

## 开发和贡献

可以在[文档](/docs/development)找到更多相关细节。

## 设计与原则

由于 Go 是一种静态语言，因此没有友好的插件机制。我们使用重新编译进行部署，而不是动态方法。可以在[博客](/blog/2023/07/22/why-the-answer-plugin-system-was-designed-this-way)找到更多相关细节。
