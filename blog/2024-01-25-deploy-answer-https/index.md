---
title: "How to access Answer using HTTPS"
authors: [LinkinStar]
category: Tech
featured: true
image: 2023-07-22-cover@4x.png
description: "I am already running Answer on my server, but I want to access it using HTTPS. How can I do that?"

---

> I am already running Answer on my server, but I want to access it using HTTPS. How can I do that?

## Background
When you already have a server, you may want to deploy Answer on it. After deploying Answer, you will realize that you can only access it using HTTP. However, you may want to access it using HTTPS. So how can you do that? 

Some questions:
- https://meta.answer.dev/questions/D1G3/how-to-configure-ssl
- https://meta.answer.dev/questions/D1wh/how-to-enable-ssl
- https://meta.answer.dev/questions/D1XG2/how-to-deploy-answer-image-in-aws-in-docker-with-ssl-and-nginx
- https://meta.answer.dev/questions/D136/how-to-deploy-an-ssl-certificate-using-docker-and-how-to-access-it-without-using-a-port
- https://meta.answer.dev/questions/D1Oe/i-have-set-up-ssl-on-cloudflare-but-still-can-t-access-via-https
- ...

I found that many people have this question. Deploying Answer is easy, but deploying it with HTTPS is a bit difficult. So I decided to write this article to help you deploy Answer with HTTPS.

## Easy way
This blog want to introduce the easy way to deploy Answer with HTTPS. You can use [Caddy](https://caddyserver.com/) to deploy Answer with HTTPS. Caddy is a powerful, enterprise-ready, open source web server with automatic HTTPS written in Go. Of course, you can use other tools to deploy Answer with HTTPS, such as Nginx, etc.

## Preparation
1. You can follow the [installation guide](./docs/installation) to install Answer. After installing Answer, you can access it using HTTP. The default port for Answer is 9080. You can access it at http://localhost:9080. In the following steps, we will use 9080 as the default port for Answer.

2. You need a domain that **DNS resolution is already configured to point to your server**.

3. In this blog we will use docker-compose to install Caddy. So we need docker and docker-compose. You can follow the [official guide](https://docs.docker.com/engine/install/) to install docker and docker-compose.

## Deploy 

### Step 1
```shell
$ mkdir caddy-docker
$ cd caddy-docker
$ vim docker-compose.yml
```
You can create a `docker-compose.yml` file in the new directory, and then add the following code:

```yaml title="docker-compose.yml"
version: "3.7"

services:
  caddy:
    image: caddy
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
      - "443:443/udp"
    volumes:
      - $PWD/Caddyfile:/etc/caddy/Caddyfile
      - $PWD/caddy_data:/data
      - $PWD/caddy_config:/config
    network_mode: host
```

### Step 2
The `Caddyfile` is the configuration file for Caddy. It is used to configure how Caddy should serve your site. This file will be mounted into the container at `/etc/caddy/Caddyfile`.

```shell
$ vim Caddyfile
```
Create `Caddyfile` file in the same directory, and then add the following code:

```text title="Caddyfile"
your.answer.domain {
    reverse_proxy 127.0.0.1:9080
}
```

### Step 3

Run the following command to start Caddy. Wait a few seconds, and then you can access Answer using HTTPS.

```shell
$ docker-compose up -d
```

If you can't access it, you can check the logs of Caddy.

```shell
$ docker-compose logs
```

## Advanced
If you don't want to use `network_mode: host` in `docker-compose.yml`, you can put Answer and Caddy in the same docker compose. Then Caddy and Answer can use the same network. So you can configure Caddy like this:

```text title="Caddyfile"
your.answer.domain {
    reverse_proxy answer-service:9080
}
```

Of course, you can also install Caddy using other methods, such as using the binary file, etc. All in all, I wish you can follow this blog to deploy Answer with HTTPS successfully. If you have any questions, please feel free to leave a question on [Meta](https://meta.answer.dev/). We will try our best to help you.