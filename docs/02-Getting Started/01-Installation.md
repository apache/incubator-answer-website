---
slug: /getting-started/installation
---

# Installation

## Start Answer

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


## Configuration
