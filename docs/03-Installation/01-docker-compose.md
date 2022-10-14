---
---

# Docker-compose

## Running with docker-compose
```yaml
version: "3.9"
services:
  answer:
    image: ghcr.io/answerdev/answer:latest
    ports:
      - '9080:80'
    restart: on-failure
    depends_on:
      db:
        condition: service_healthy
    links:
      - db
    volumes:
      - ./answer/data:/data
  db:
    image: mariadb:10.4.7
    ports:
      - '13306:3306'
    restart: on-failure
    environment:
      MYSQL_DATABASE: answer
      MYSQL_ROOT_PASSWORD: root
    healthcheck:
      test: [ "CMD", "mysqladmin" ,"ping", "-uroot", "-proot"]
      timeout: 20s
      retries: 10
    volumes:
      - ./answer/mysql:/var/lib/mysql
```

```bash
$ mkdir answer && cd answer
$ vim docker-compose.yaml
$ docker-compose up
```

browser open URL [http://127.0.0.1:9080/](http://127.0.0.1:9080/)