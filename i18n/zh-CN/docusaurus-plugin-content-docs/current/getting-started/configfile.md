---
slug: /configfile
---

# 配置文件

:::tip

我们使用 `yaml` 配置文件。它将在执行 `answer init` 命令后自动生成。默认路径为 `/data/conf/config.yaml`。

:::

## config.yaml 描述

```yaml
server:
  http:
    addr: 0.0.0.0:80 # 项目访问端口号
data:
  database:
    driver: "mysql" # 默认数据库驱动是 mysql
    connection: root:root@tcp(127.0.0.1:3306)/answer # MySQL 数据库连接地址
  cache:
    file_path: "/tmp/cache/cache.db" # 缓存文件存储路径
i18n:
  bundle_dir: "/data/i18n" # 国际化文件存储目录
swaggerui:
  show: true # 是否显示 swaggerapi 文档，地址为 /swagger/index.html
  protocol: http # swagger 协议头
  host: 127.0.0.1 # 可访问的 IP 地址或域名
  address: ':80'  # 可访问的端口号
service_config:
  secret_key: "answer" # 加密密钥
  upload_path: "/data/uploads" # 上传目录

```
