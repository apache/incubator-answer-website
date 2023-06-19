---
sidebar_position: 2
slug: /upgrade
---

# 版本更新

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution
We recommend that you back up database and configuration files before upgrading. Generally, we guarantee that the upgrade does not affect the existing data.
To back up data means that you have the option to roll back even if the upgrade fails, or you do not want the advanced version.
:::

<Tabs>
  <TabItem value="docker-compose" label="Docker Compose" default>
If you use docker-compose to install answer, it is very easy to upgrade.

```bash
docker-compose pull
docker-compose down
docker-compose up -d
```

</TabItem>

  <TabItem value="docker" label="Docker">
If you are using docker to install answer, the upgrade steps are as follows.

```bash
docker pull answerdev/answer:latest
docker stop answer
docker rm answer
docker run -d -p 9080:80 -v answer-data:/data --name answer answerdev/answer:latest
```

  </TabItem>

  <TabItem value="binary" label="Binary">
If you are using a binary installation of answer, the upgrade steps are as follows.

1. Download the latest binary version for your system. [https://github.com/answerdev/answer/releases](https://github.com/answerdev/answer/releases)
2. Stop old version
3. Execute the upgrade command `./answer upgrade -C ./answer-data/`
4. Run the latest version `./answer run -C ./answer-data/`

</TabItem>
</Tabs>
