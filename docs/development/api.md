---
slug: /api
---

# API Document

:::tip

Answer using swagger to generate API document automatically. Swagger can display the API document in a friendly way, and can also provide a convenient way to test the API.

:::

## Where is the API document?

### Quick Look
If you want to quickly view the API document, you can visit the following link:
https://meta.answer.dev/swagger/index.html

### View your own API document
If you already have an Answer instance, you can view the API document of your own instance by visiting the following link:
https://example.com/swagger/index.html

If you can't access the above link, please check the following configuration items whether they are configured correctly.

```yaml title="/data/conf/config.yaml"
swaggerui:
  show: true
  protocol: http
  host: 127.0.0.1
  address: ':9080' # leave blank to use the 80 port number
```

## Generate API document

Answer using [swag](https://github.com/swaggo/swag) to generate API document json/yaml file automatically according to the comments in the code. You can use the following steps to generate API document.

```bash
# install swag cli
$ go install github.com/swaggo/swag/cmd/swag@latest

# enter the project root directory and execute the following command
$ cd script
$ ./gen-api.sh

# the generated documentation is in the docs/api directory
```