---
slug: /upgrade
---

# 升级

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution

我们建议在升级之前备份数据库和配置文件。通常情况下，我们保证升级不会影响现有数据。

备份数据意味着即使升级失败，你也可以选择回滚，或者如果你不希望使用高级版本，可以恢复到之前的版本。

:::

<Tabs>
  <TabItem value="docker-compose" label="Docker Compose" default>

如果你是使用docker-compose来安装answer，升级起来非常简单。

```bash
docker-compose pull
docker-compose down
docker-compose up -d
```

  </TabItem>
  <TabItem value="docker" label="Docker">

如果你使用docker来安装answer，升级步骤如下：

```bash
docker pull apache/answer:latest
docker stop answer
docker rm answer
docker run -d -p 9080:80 -v answer-data:/data --name answer apache/answer:latest
```

  </TabItem>
  <TabItem value="binary" label="Binary">

如果你使用的是 answer 的二进制安装版本，升级步骤如下：

1. 下载适用于你系统的[最新二进制版本](https://github.com/apache/incubator-answer/releases)。
2. 停止旧版本。
3. 执行升级命令`./answer upgrade -C ./answer-data/`。
4. 运行最新版本`./answer run -C ./answer-data/`。


  </TabItem>
</Tabs>

:::tip

当出现其他意外情况，如升级异常时，我们提供了一个命令来手动强制升级 Apache Answer。使用 `answer upgrade -f v1.1.0` 命令可以从指定版本强制升级，即使你的 Apache Answer 已经是最新版本。如果遇到升级异常，可以尝试执行这个命令，或者重新拉取最新的 Docker 镜像，并在容器内执行该命令。

:::
