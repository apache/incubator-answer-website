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

## Precautions
- After docker-compose startup, the data directory will be created in the folder to save the necessary data.
- In docker-compose, answer use port `9080` and db use port `13306`. You can modify it if necessary.
- We set `depends_on` in docker-compose, answer application will be started after db started. So it will teke some time.
- We use docker-compose version is 3.9, So you may need to adjust according to your situation.