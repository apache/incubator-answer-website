---
slug: /upgrade
---

# 升级

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution
我们建议在升级之前备份数据库和配置文件。通常情况下，我们保证升级不会影响现有数据。
备份数据意味着即使升级失败或者你不想使用高级版本，你也有回滚的选择。
:::

<Tabs>
  <TabItem value="docker-compose" label="Docker Compose" default>
如果你使用 Docker Compose 安装 Answer，升级非常简单。

```bash
docker-compose pull
docker-compose down
docker-compose up -d
```

</TabItem>

  <TabItem value="docker" label="Docker">
如果你使用 Docker 安装 Answer，升级步骤如下。

```bash
docker pull answerdev/answer:latest
docker stop answer
docker rm answer
docker run -d -p 9080:80 -v answer-data:/data --name answer answerdev/answer:latest
```

  </TabItem>

  <TabItem value="binary" label="Binary">
  如果你使用二进制安装的 Answer，升级步骤如下。

  1. 下载适用于你的系统的最新二进制版本。 [https://github.com/apache/incubator-answer/releases](https://github.com/apache/incubator-answer/releases)
  2. 停止旧版本
  3. 执行升级命令 `./answer upgrade -C ./answer-data/`
  4. 运行最新版本  `./answer run -C ./answer-data/`

</TabItem>
</Tabs>

:::tip

当出现升级异常等其他的意外情况，我们提供了手动强制升级 Answer 的命令。`answer upgrade -f v1.1.0` 执行该命令会强制从指定版本开始升级，即使你当前的 Answer 已经是最新版本。如果遇到升级异常可尝试执行该命令或重新拉取最新 docker 镜像后并进入容器内执行该命令。

:::
