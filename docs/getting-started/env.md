---
slug: /env
---

# Environment Variables

## Installation

- `INSTALL_PORT`: specifies the port to boot when installation, default is `80`.
- `AUTO_INSTALL`: if set to `true`, the installation will be completed automatically by environment variable.

### For auto install

- `DB_TYPE`: database type, support [`sqlite3`  `mysql`  `postgres`]
- `DB_USERNAME`: database username
- `DB_PASSWORD`: database password
- `DB_HOST`: database host, like `127.0.0.1:3306`
- `DB_NAME`: database name
- `DB_FILE`: database file path, only for sqlite3
- `LANGUAGE`: language, like `en-US`
- `SITE_NAME`: site name `Answer`
- `SITE_URL`: site url, `https://answer.apache.org`
- `CONTACT_EMAIL`:  contact email
- `ADMIN_NAME`:  admin name
- `ADMIN_PASSWORD`: admin password
- `ADMIN_EMAIL`: admin email

## Log

- `LOG_LEVEL`: log level support [`DEBUG`  `INFO`  `WARN`  `ERROR`]
- `LOG_PATH`: log storage location
