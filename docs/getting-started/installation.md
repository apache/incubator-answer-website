---
slug: /installation
---

# Installation

## Start Answer

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

There are multiple ways to start Answer, you can choose the one that suits you best.

<Tabs>
  <TabItem value="docker-compose" label="Docker compose" default>

We recommend using Docker Compose to run Answer. This is the easiest way to get started with Answer.

:::tip

If you are using [Docker Desktop](https://www.docker.com/products/docker-desktop) on Windows or Mac, docker-compose is already included. If you are using Linux, you will need to install docker-compose separately.

:::

```bash
curl -fsSL https://raw.githubusercontent.com/apache/incubator-answer/main/docker-compose.yaml | docker compose -p answer -f - up
```

The default port for Answer is `9080`. You can access it at http://localhost:9080.

  </TabItem>
  <TabItem value="docker" label="Docker">

You can find all the available Docker images on [Docker Hub](https://hub.docker.com/r/apache/answer/tags). The `latest` tag refers to the latest stable version of Answer.

```bash
docker run -d -p 9080:80 -v answer-data:/data --name answer apache/answer:latest
```

After running the command, heading to http://localhost:9080/install to continue installation.

:::tip

If you can't access the installation page, you can use the command `docker logs answer` to view the logs. It may help you find the specific problem.

:::

  </TabItem>
  <TabItem value="binary" label="Binary">

As a golang project, Answer can be compiled into a binary file. You can download the binary file that matches your operating system from the [release page](https://github.com/apache/incubator-answer/releases).

```bash
INSTALL_PORT=80 ./answer init -C ./answer-data/
```

After running the command, heading to http://localhost:80/install to continue installation.

Follow the [Install Steps](#install-steps) to complete the installation. **After that** run the following command to start the answer again.

```bash
./answer run -C ./answer-data/
```

:::note

You can specify the port on which to start the installation by specifying the environment variable `INSTALL_PORT`, default is 80.

We use `-C` flag to indicate the directory where saved answer data.

:::

  </TabItem>
</Tabs>

## Install steps

> After you start the answer, you can follow the steps below to complete the initialization about the basic configuration.

### Step 1: Choose the language

![install-choose-language](/img/docs/install-choose-language.png)

### Step 2: Config database

:::tip
Answer supports MySQL, PostgreSQL, and SQLite as the database backend. The smallest environment is SQLite, which does not require any additional configuration. If you want to use MySQL or PostgreSQL, you need to setup the database first and then configure the database connection in this step. Here we recommend using sqlite3 to complete your first experience.
:::

![install-database](/img/docs/install-database.png)

### Step 3: Create configuration file

Click Next button to create the configuration file.

![install-create-config-file](/img/docs/install-create-config-file.png)

### Step 4: Fill in basic information

:::caution
Site URL is the browser address you will use to access answers after installation.  
**Don't forget the admin Email and password.**
:::

![install-site-info](/img/docs/install-site-info.png)

### Step 5: Complete

Congratulations, you can click the done button to start your answer journey!

![install-complete](/img/docs/install-complete.png)
