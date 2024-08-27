---
slug: /configfile
---

# 配置文件

:::tip

我们使用 `yaml` 配置文件。它会在执行 `answer init` 命令后自动创建。默认路径为 `/data/conf/config.yaml`。

`ui` 配置用于设置 React 的环境变量，通常情况下无需更改，除非你需要配置 CDN 或将项目部署到子目录下。

:::

## config.yaml 描述

```yaml title="/data/conf/config.yaml"
server:
  http:
    addr: 0.0.0.0:80 # 项目访问端口号
data:
  database:
    driver: "mysql" # 默认数据库驱动为 mysql
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
  upload_path: "/data/uploads" # 上传目录
ui:
  public_url: '/' # 静态资源路径
  api_url: '/' # ajax 请求的 api url
  base_url: ''  # 默认部署在根目录下，当部署在子目录时需要修改此值
```
