---
---

# Docker

:::tip

If you want to run Answer via the docker command line, you need to have enabled and configure a database environment, such as mysql or mariadb. (Note that the [docker compose example](../Installation/docker-compose) shows integration of a database along with the Answer application.

:::


## Docker for Answer
> Visit [Docker Hub](https://hub.docker.com/r/answerdev/answer) or GitHub Container registry to see all available Answer images and tags.

### Usage
To persist your data beyond the life of the Docker container, we use a volume (/var/data -> /data) here. You can modify the configuration based on your situation.

```bash
# Pull image from Docker Hub.
$ docker pull answerdev/answer:latest

# Create local directory for volume.
$ mkdir -p /var/data

# Run the image first
$ docker run --name=answer -p 9080:80 -v /var/data:/data answer/answer

# After the first startup, a configuration file will be generated in the /var/data directory
# /var/data/conf/config.yaml
# Need to modify the Mysql database address in the configuration file
vim /var/data/conf/config.yaml

# Modify database connection
# connection: [username]:[password]@tcp([host]:[port])/[database]

# After configuring the configuration file, you can start the mirror again to start the service
$ docker start answer

```

### Notice
- The first startup will report an error and fail, which is normal because the necessary configuration files are missing. This can be ignored, as the first startup will automatically initialize the required files for you.
- For more on the fields in the configuration file, please refer to [config-file](../Usage/configfile)
