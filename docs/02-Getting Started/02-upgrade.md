---
slug: /getting-started/upgrade
---

# Upgrade
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

- step 1: download the latest binary version for your system. [https://github.com/answerdev/answer/releases](https://github.com/answerdev/answer/releases)
- step 2: stop old version
- step 3: execute the upgrade command `./answer upgrade -C ./answer-data/`
- step 4: run the latest version `./answer run -C ./answer-data/`

</TabItem>
</Tabs>
