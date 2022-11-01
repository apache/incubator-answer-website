---
slug: /getting-started/installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
    This is an orange 🍊
  </TabItem>
  <TabItem value="binary" label="Binary">
    This is a banana 🍌
  </TabItem>
</Tabs>

# Installation

:::tip

We highly recommend that you use docker-compose to quickly get started with this application.

:::

## Running with docker-compose

```bash
$ mkdir answer && cd answer
$ wget https://raw.githubusercontent.com/answerdev/answer/main/docker-compose.yaml
$ docker-compose up
```

:::note

Different devices have different startup times. Please wait patiently for the application to start.

:::

## Usage

Open browser to the URL [http://127.0.0.1:9080/](http://127.0.0.1:9080/), where you should see the webpage shown below.

![login](/img/login.png)

You can log in with the default administrator username (**`admin@admin.com`**) and password (**`admin`**).
