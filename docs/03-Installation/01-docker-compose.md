---
---

# Docker-compose

## Running with docker-compose
```yaml
version: "3.9"
services:
  answer:
    image: answerdev/answer:latest
    ports:
      - '9080:80'
    restart: on-failure
    depends_on:
      db:
        condition: service_healthy
    links:
      - db
    volumes:
      - ./answer-data/data:/data
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
    command: ['mysqld', '--character-set-server=utf8mb4', '--collation-server=utf8mb4_unicode_ci', '--skip-character-set-client-handshake']
    volumes:
      - ./answer-data/mysql:/var/lib/mysql
```

```bash
$ mkdir answer && cd answer
$ vim docker-compose.yaml
$ docker-compose up
```

## Precautions
- After docker-compose startup, the data directory will be created in the folder to save the necessary data.
- In that docker-compose, note that Answer is configured to respond on (publish) port `9080` while the db responds on (publishes) port `13306`. You can modify these as necessary (and it's not necessary to even expose/publish the db, if you don't want to access it from outside the container).
- And due to the `depends_on` element, the Answer application ("answer" service) will not be available until the "db" service has started, which may take some extra time.
- We use docker-compose version is 3.9, So you may need to adjust according to your situation.
