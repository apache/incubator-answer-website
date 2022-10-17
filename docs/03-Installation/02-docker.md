---
---

# Docker

:::tip

If you want to install with docker, you need a database environment, such as mysql.

:::


## Docker for Answer
Visit Docker Hub or GitHub Container registry to see all available images and tags.

### Usage
To keep your data out of Docker container, we do a volume (/var/data -> /data) here, and you can change it based on your situation.

```
# Pull image from Docker Hub.
$ docker pull answer/answer

# Create local directory for volume.
$ mkdir -p /var/data

# Run the image first
$ docker run --name=answer -p 9080:80 -v /var/data:/data answer/answer

# After the first startup, a configuration file will be generated in the /var/data directory
# /var/data/conf/config.yaml
# Need to modify the Mysql database address in the configuration file
vim /var/data/conf/config.yaml

# Modify database connection
# connection: [username]:[password]@tcp([host]:[port])/[DbName]
...

# After configuring the configuration file, you can start the mirror again to start the service
$ docker start answer

```
