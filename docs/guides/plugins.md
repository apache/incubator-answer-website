---
slug: /plugins
---

# Using Plugins

:::tip

When we need to do some extensions to Apache Answer's functionality, for example, OAuth login, we design a way to use plugins to implement these functions. 

:::

## Introduction

### Official plugins

You can find a list of officially supported plugins for Apache Answer [here](https://github.com/apache/incubator-answer-plugins).

### Plugin type

We classify plugins into different types. Different types of plugins have different functions. Plugins of the same type have the same effect, but are implemented differently.

- **Connector**: The Connector plugin helps us to implement third-party login functionality. e.g. `GitHub OAuth Login`
- **Storage**: The Storage plugin helps us to upload files to third-party storage. (preview)
- **Cache**: Support for using different caching middleware. e.g. `Redis` (preview)
- **Filter**: Filter out illegal questions or answers. (coming soon)
- **Render**: Parsers for different content formats. (coming soon)
- **Finder**: Support for using search engines to speed up the search for question answers. (coming soon)

## Build

Apache Answer binary supports packaging different required plugins into the binary.

### Prerequisites

- Original Apache Answer binary
- [Golang](https://go.dev/) `>=1.18`
- [Node.js](https://nodejs.org/) `>=16.17`
- [pnpm](https://pnpm.io/) `>=7`

### Command

:::tip

We use the `build` command provided with the Apache Answer binary to rebuild a version of Apache Answer with the plugin.

:::

For example, let's see how to build an Apache Answer binary that includes the github third-party login plugin.

```shell
# answer build --with [plugin@plugin_version=[replacement]] --output [file]
$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github

# build a new answer with github login plugin then output to ./new_answer.
$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github@1.0.0 --output ./new_answer

# with multiple plugins
$ ./answer build \
--with github.com/apache/incubator-answer-plugins/connector-github \
--with github.com/apache/incubator-answer-plugins/connector-google

# with local plugins
$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github@1.0.0=/my-local-space

# cross compilation. Build a linux-amd64 binary in macos
$ CGO_ENABLED=0 GOOS=linux GOARCH=amd64 ./answer build --with github.com/apache/incubator-answer-plugins/connector-github

# specify the answer version using ANSWER_MODULE environment variable
$ ANSWER_MODULE=github.com/apache/incubator-answer@v1.2.0-RC1 ./answer build --with github.com/apache/incubator-answer-plugins/connector-github
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

### Build docker image with plugin from answer base image
> You can follow the steps above to build the binary with the plugin first, and then build a docker image that contains the binary. Of course, you can also build directly on top of the original image.

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

> You can update the --with parameter to add more plugins that you need.

```shell
# create a Dockerfile and copy the content above
$ vim Dockerfile
$ docker build -t answer-with-plugin .
$ docker run -d -p 9080:80 -v answer-data:/data --name answer answer-with-plugin
```



## Third-party plugin

:::tip

We recommend the use of [official plugins](https://github.com/apache/incubator-answer-plugins), if you want to use third-party plugins, refer to the following.

:::

- If the third-party plugin is publicly available, you can build with it like official plugins.
- If the third-party plugin is private, you need to download it then build with.

## Usage

The Apache Answer with the plugin version is used in the same way as before. You can find the plugin's configuration in the admin page.

![plugin-config-admin-page](/img/docs/plugin-config-admin-page.png)

## Upgrade

:::caution

Note that if you are upgrading from a non-plugin version to a plugin version, you also need to execute the upgrade command (also considered as an upgrade).

:::

You need build a new Apache Answer binary with the new plugin version, then replace the old Apache Answer binary with the new one. As with normal upgrades, you need to execute different [upgrade steps](./upgrade) depending on the  deployment method. For example, if you are using binary deployment, you need to execute the `upgrade` command.



## Develop and contributing

Please refer to [the documentation](/community/plugins) for details.

## Design & principle

Since Golang is a static language, there is no friendly plugin mechanism. So instead of a dynamic approach, we use recompilation for deployment. Please refer to [the blog](/blog/2023/07/22/why-the-answer-plugin-system-was-designed-this-way) for details.
