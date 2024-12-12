---
slug: /installation
---

# 安装

## 启动 Apache Answer

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

有多种方式启动 Apache Answer，你可以选择最适合你的方式。

<Tabs queryString="method">
  <TabItem value="docker-compose" label="Docker compose" default>

我们推荐使用 Docker Compose 来运行 Apache Answer。这是开始使用 Apache Answer 的最简单方法。

:::tip

如果你在 Windows 或 Mac 上使用 [Docker Desktop](https://www.docker.com/products/docker-desktop)，docker-compose 已经包含在其中。如果你使用的是 Linux，则需要单独安装 docker-compose。

:::

```bash
curl -fsSL https://raw.githubusercontent.com/apache/incubator-answer/main/docker-compose.yaml | docker compose -p answer -f - up
```

Apache Answer 的默认端口是 `9080`，你可以通过 http://localhost:9080 访问它。

  </TabItem>
  <TabItem value="docker" label="Docker">

你可以在 [Docker Hub](https://hub.docker.com/r/apache/answer/tags) 上找到所有可用的 Docker 镜像。`latest` 标签指的是 Apache Answer 的最新稳定版本。

```bash
docker run -d -p 9080:80 -v answer-data:/data --name answer apache/answer:latest
```

运行该命令后，前往 http://localhost:9080/install 继续安装。

:::tip

如果无法访问安装页面，可以使用命令 `docker logs answer` 查看日志。这可能有助于你找到具体问题。

:::

  </TabItem>
  <TabItem value="binary" label="Binary">

作为一个 Go 项目，Apache Answer 可以编译为二进制文件。你可以从[发布页面](https://github.com/apache/incubator-answer/releases)下载与你的操作系统匹配的二进制文件。

```bash
INSTALL_PORT=80 ./answer init -C ./answer-data/
```

运行该命令后，前往 http://localhost:80/install 继续安装。

按照[安装步骤](#install-steps)完成安装。**之后**再次运行以下命令启动 Answer。

```bash
./answer run -C ./answer-data/
```

:::note

你可以通过指定环境变量 `INSTALL_PORT` 来指定启动安装的端口，默认端口是 80。

我们使用 `-C` 标志来指示保存 Answer 数据的目录。

:::

  </TabItem>
  <TabItem value="baota" label="宝塔面板">

首先需要安装宝塔面板 9.2.0 及以上版本，前往[宝塔面板](https://www.bt.cn/new/download.html?r=dk_answer)官网，选择正式版的脚本下载安装。

安装完成后，登录宝塔面板，点击左侧菜单栏的 `Docker`，进入应用商店，搜索 `Apache Answer`，点击安装进行配置：

![应用商店搜索安装](/img/docs/baota-install.png)

:::tip

首次会提示安装 `Docker` 和 `Docker Compose` 服务，点击立即安装，若已安装请忽略。

![安装Docker服务](/img/docs/baota-init-docker.png)

:::

需要填写以下内容用于完成基本配置的初始化：

- 名称：应用名称，默认 `answer_随机字符`
- 版本选择：默认 `latest`
- 允许外部访问：如你需通过 `IP+Port` 直接访问，请勾选，如你已经设置了域名，请不要勾选此处
- 端口：默认 `9080`，可自行修改
- 网站名称：站点名称，如 `Apache Answer`
- 访问地址：安装后将用来访问 Apache Answer 的浏览器地址
- 联系邮箱：负责本网站的主要联系人的电子邮件地址
- 管理员账号：管理员用户名
- 管理员密码：管理员密码
- 管理员邮箱：管理员邮箱。您需要此电子邮件才能登录，请务必记住管理员的邮箱和密码

![安装配置信息](/img/docs/baota-install-config.png)

点击确定提交后面板会自动进行应用初始化，不需要操作下文的安装步骤，等待初始化完成后即可通过刚才设置的**访问地址**进行访问。

恭喜你！开始你的 Apache Answer 之旅吧！

  </TabItem>
</Tabs>

## 安装步骤

> 启动 Answer 后，你可以按照以下步骤完成基本配置的初始化。

### 步骤 1: 选择语言

![install-choose-language](/img/docs/install-choose-language.png)

### 步骤 2: 配置数据库

:::tip
Apache Answer 支持 MySQL、PostgreSQL 和 SQLite 作为数据库后端。最小的环境是 SQLite，它不需要任何额外配置。如果您想使用 MySQL 或 PostgreSQL，则需要首先设置数据库，然后在此步骤中配置数据库连接。我们建议首次体验使用 sqlite3。
:::

![install-database](/img/docs/install-database.png)

### 步骤 3: 创建配置文件

点击下一步按钮创建配置文件。

![install-create-config-file](/img/docs/install-create-config-file.png)

### 步骤 4: 填写基本信息

:::caution
站点 URL 是你安装后将用来访问 Apache Answer 的浏览器地址。如果你部署在子目录中，站点 URL 需要包括子目录的路径，例如: https://yourdomain/{subdirectory}

**请务必记住管理员的 Email 和密码。**
:::

![install-site-info](/img/docs/install-site-info.png)

### 步骤 5: 完成

恭喜你！点击完成按钮，开始你的 Apache Answer 之旅吧！

![install-complete](/img/docs/install-complete.png)
