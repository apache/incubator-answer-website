---
sidebar_position: 1
slug: /installation
---

# Installation

## 🚀 Start Answer

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

There are multiple ways to start Answer, you can choose the one that suits you best.

<Tabs>
  <TabItem value="docker-compose" label="Docker Compose" default>

We recommend using Docker Compose to run Answer. This is the easiest way to get started with Answer.

:::tip
If you are using [Docker Desktop](https://www.docker.com/products/docker-desktop) on Windows or Mac, docker-compose is already included. If you are using Linux, you will need to install docker-compose separately.
:::

```bash
curl -fsSL https://raw.githubusercontent.com/answerdev/answer/main/docker-compose.yaml | docker compose -p answer -f - up
```

The default port for Answer is `9080`. You can access it at <http://localhost:9080>.

  </TabItem>
  <TabItem value="docker" label="Docker">

You can find all the available Docker images on [Docker Hub](https://hub.docker.com/r/answerdev/answer). The `latest` tag refers to the latest stable version of Answer.

:::tip
The persistent data is stored in the `/var/data` directory. You can mount a host directory as the data volume to store the data. (e.g. `-v /my/own/datadir:/var/data`).
:::

```bash
$ docker run --name=answer -p 9080:80 -v /my/own/datadir:/data answerdev/answer:latest
```

Answer supports MySQL, PostgreSQL, and SQLite as the database backend. The smallest environment is SQLite, which does not require any additional configuration. If you want to use MySQL or PostgreSQL, you need to setup the database first and then configure the database connection after starting the container.

  </TabItem>
  <TabItem value="binary" label="Binary">

As a golang project, Answer can be compiled into a binary file. You can download the binary file that matches your operating system from the [release page](https://github.com/answerdev/answer/releases).

  </TabItem>
</Tabs>


## Configuration
