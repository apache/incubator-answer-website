---
slug: /env
---

# 环境变量

## 安装

- INSTALL_PORT：指定安装时启动的端口，默认为80。
- AUTO_INSTALL：如果设置为 `true`，则安装将通过环境变量自动完成。

### 对于自动安装

- DB_TYPE：数据库类型，支持 [`sqlite3`  `mysql`  `postgres`]。
- DB_USERNAME：数据库用户名。
- DB_PASSWORD：数据库密码。
- DB_HOST：数据库主机，如 `127.0.0.1:3306`。
- DB_NAME：数据库名称。
- DB_FILE：数据库文件路径，仅适用于 sqlite3。
- LANGUAGE：语言，如  `en-US`。
- SITE_NAME：站点名称 `Answer`。
- SITE_URL：站点 URL，`https://answer.dev`。
- CONTACT_EMAIL：联系人电子邮件。
- ADMIN_NAME：管理员名称。
- ADMIN_PASSWORD：管理员密码。
- ADMIN_EMAIL：管理员电子邮件。

## 日志

- LOG_LEVEL：日志级别，支持 [`DEBUG`  `INFO`  `WARN`  `ERROR`]
- LOG_PATH：日志存储位置。
