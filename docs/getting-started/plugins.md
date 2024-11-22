---
slug: /plugins
---

# Using Plugins

:::tip

When we need to extend Apache Answer's functionality, such as adding OAuth login, we can design plugins to implement these features.

:::

## Introduction

### Official Plugins

You can find a list of officially supported plugins for Apache Answer [here](https://github.com/apache/incubator-answer-plugins).

## Build

The Apache Answer binary supports packaging different required plugins into the binary.

### Prerequisites

- Original Apache Answer binary
- [Go](https://go.dev/) `>=1.18`
- [Node.js](https://nodejs.org/) `>=16.17`
- [pnpm](https://pnpm.io/) `>=7`

### Binary Build

:::tip

We use the `build` command provided with the Apache Answer binary to rebuild a version of Apache Answer with the plugin.

:::

For example, let's see how to build an Apache Answer binary that includes the GitHub third-party login plugin.

#### Using Official Plugins

You can specify the plugins to use with the `--with` parameter:

```shell
# Build Answer with the GitHub connector plugin
$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github
```

You can also specify the plugin version:

```shell
# Build Answer with the GitHub connector plugin version 1.0.0
$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github@1.0.0 --output ./new_answer
```

You can use multiple plugins at the same time:

```shell
$ ./answer build \
--with github.com/apache/incubator-answer-plugins/connector-github \
--with github.com/apache/incubator-answer-plugins/connector-google
```

#### Using Local Plugins

If you need to use a local plugin, you can use the following command:

```shell
$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github@1.0.0=/my-local-space
```

#### Cross Compilation

You can use the following command to build a Linux-amd64 binary on macOS:

```shell
$ CGO_ENABLED=0 GOOS=linux GOARCH=amd64 ./answer build --with github.com/apache/incubator-answer-plugins/connector-github
```

#### Specifying the Answer Version

You can use the `ANSWER_MODULE` environment variable to specify the Answer version:

```shell
$ ANSWER_MODULE=github.com/apache/incubator-answer@v1.2.0-RC1 ./answer build --with github.com/apache/incubator-answer-plugins/connector-github
```

:::tip

You can use the `plugin` command to list the current binary containing plugins.

:::

```shell
$ ./new_answer plugin

# Output:
# github connector[0.0.1] made by answerdev
# google connector[0.0.1] made by answerdev
```

### Docker Build

#### build with plugin from answer base image

```dockerfile  title="Dockerfile"
FROM apache/answer as answer-builder

FROM golang:1.22-alpine AS golang-builder

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
# Create a Dockerfile and copy the content above
$ vim Dockerfile
$ docker build -t answer-with-plugin .
$ docker run -d -p 9080:80 -v answer-data:/data --name answer answer-with-plugin
```

#### build with plugin from local code

1. **keep your code up-to-date**: Make sure your local code is synchronized with the official repositories, or at least with the v1.3.5 version.
2. **add required plugins**: Add your required plugin repositories to the `/script/plugin_list` file in the root directory, one per line.
```
github.com/apache/incubator-answer-plugins/connector-basic@latest  
github.com/apache/incubator-answer-plugins/reviewer-basic@latest  
github.com/apache/incubator-answer-plugins/captcha-basic@latest  
github.com/apache/incubator-answer-plugins/editor_formula@latest
```
3. **build the Docker image**: Run the `docker build -t <name[:tag]> . ` command to start building the image.
4. **verify image construction**: Run the `docker run -d -p 9080:80 -v answer-data:/data --name <container_name> <image_name>` command to start the container and locally verify whether the image is built successfully.

## Usage

The Apache Answer with the plugin version is used in the same way as before. You can find the plugin's configuration in the admin page.

![plugin-config-admin-page](/img/docs/plugin-config-admin-page.png)

## Upgrade

:::caution

Note that if you are upgrading from a non-plugin version to a plugin version, you also need to execute the upgrade command (also considered as an upgrade).

:::

You need to build a new Apache Answer binary with the new plugin version, then replace the old Apache Answer binary with the new one. As with normal upgrades, you need to execute different [upgrade steps](./upgrade) depending on the deployment method. For example, if you are using binary deployment, you need to execute the `upgrade` command.

## Third-party Plugin

:::tip

We recommend the use of [official plugins](https://github.com/apache/incubator-answer-plugins). If you want to use third-party plugins, refer to the following.

:::

- If the third-party plugin is publicly available, you can build with it like official plugins.
- If the third-party plugin is private, you need to download it and then build with it.

## Develop and Contribute

Please refer to [the documentation](/docs/development) for details.

## Design & Principle

Since Go is a static language, there is no friendly plugin mechanism. Instead of a dynamic approach, we use recompilation for deployment. Please refer to [the blog](/blog/2023/07/22/why-the-answer-plugin-system-was-designed-this-way) for details.