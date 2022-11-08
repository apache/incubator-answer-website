---
slug: /getting-started/installation
---

# Installation

## Start Answer

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="docker" label="Docker" default>
We recommend using Docker to run Answer. This is the easiest way to get started with Answer.  

```bash
docker run -d -p 9080:80 -v answer-data:/data --name answer answerdev/answer:latest
```

Heading to [http://localhost:9080/install](http://localhost:9080/install) to continue installation.

:::tip

If you can't access the installation page, you can use the command `docker logs answer` to view the logs. It may help you find the specific problem.
:::

  </TabItem>

  <TabItem value="docker-compose" label="Docker Compose">

:::tip

If you are using [Docker Desktop](https://www.docker.com/products/docker-desktop) on Windows or Mac, docker-compose is already included. If you are using Linux, you will need to install docker-compose separately.

:::

```bash
curl -fsSL https://raw.githubusercontent.com/answerdev/answer/main/docker-compose.yaml | docker compose -p answer -f - up
```

The default port for Answer is `9080`. You can access it at <http://localhost:9080/install>.
  </TabItem>


  <TabItem value="binary" label="Binary">

Download the corresponding binary version for your system. [https://github.com/answerdev/answer/releases](https://github.com/answerdev/answer/releases)

```bash
./answer init -C ./answer-data/
```

Follow the [Install Steps](#install-steps) to complete the installation. **After that** run the following command to start the answer again.

```bash
./answer run -C ./answer-data/
```

:::note

We use `-C` flag to indicate the directory where saved answer data.

:::
  </TabItem>
</Tabs>

## Install Steps
> After you start the answer, you can follow the steps below to complete the initialization about the basic configuration.

### Step 1: Choose the language

![install-choose-language](/img/install-choose-language.png)

### Step 2: Config database
:::tip
If you already have a database that can be accessed by the answer docker container, you can use it. Here we recommend using sqlite3 to complete your first experience.
:::

![install-database](/img/install-database.png)

### Step 3: Create configuration file
Click Next button to create the configuration file.

![install-create-config-file](/img/install-create-config-file.png)

### Step 4: Fill in basic information
:::caution
Site URL is the browser address you will use to access answers after installation.  
**Don't forget the admin Email and password.**
:::
![install-site-info](/img/install-site-info.png)

### Step 5: Complete
🎉Congratulations, you can click the done button to start your answer journey!
![install-complete](/img/install-complete.png)

## Configuration
