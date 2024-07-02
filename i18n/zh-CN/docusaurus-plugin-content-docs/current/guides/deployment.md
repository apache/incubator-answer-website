---
slug: /deploy-subdirectory
---

# Deploy subdirectory

该功能是基于 react-router 的 [basename](https://reactrouter.com/en/main/router-components/memory-router#basename) 来实现的，所以不适用通过 `nginx` 配置实现的子目录部署。

Apache Answer 从 1.3.5 版本开始支持子目录部署的配置，配置允许你为应用程序设置路由前缀, 比如有路由 `/` 和 `/questions`，设置 `base_url` 为 /foo 后就可通过 `/foo` 和 `/foo/questions` 访问到之前的路由。


:::warning

base 配置必须在构建时设置，并且不能在不重新构建的情况下更改，因为该值内联在客户端包中。也就是说需要用户修改配置文件后自己进行编译，以完成项目的构建。

:::


### Steps

1. 修改配置文件 `/configs/config.yaml`。
2. 运行命令构建项目 `make ui` `make build`。
3. 运行命令 `INSTALL_PORT=80 ./answer init -C ./answer-data/` 初始化项目，注意这里访问路径需要添加上你的 base_url（http://localhost:80/{base_url}/install/ ） 查看是否配置成功。
4. 打包成 docker 或者直接将上面的二进制文件发布, 过程可以参考[这里](/docs/plugins#build)

### Configuration file introduction

为了统一管理配置相关的变量，从 v1.3.5 版本开始， ui 目录下的环境变量统一放到 根目录下的 `/configs/config.yaml` 内，这里的配置会通过脚本生成到 `/ui/.env.production` 内，从而实现环境变量的注入。

注意：这只会影响 production 环境的变量，开发模式请继续参考[这里](/community/development)。更多配置文件信息参考[这里](/docs/configfile)。


```
...
ui:
  public_url: '/'
  api_url: '/'
  base_url: ''

```

### base_url

子目录的路径，默认值是 `''` 表示部署在根目录，如果修改了该值 例如 ` base_url: '/foo'`, 页面所有的访问路径都会添加上该前缀。

通常情况下，修改了该值， 那么 `public_url` 也应该保持一致。

### public_url

静态资源的路径，默认值是 `'/'`, 如果网站采用了 CDN 托管静态资源，可以将该值设置为 CDN 的 url. 如果修改了 `base_url`， 并且没有采用 CDN, 那么该值也需要和 `base_url` 的值一致。

### api_url

接口请求地址，默认值是 `''`, 通常情况下这里不需要调整。但是当你的项目使用了 nginx 来代理了子路径的时候，这里需要跟 `base_url` 的值一致。

:::tip
写入 `.env` 文件后的 KEY 会转换为
```
PUBLIC_URL=/
REACT_APP_API_URL=/
REACT_APP_BASE_URL=
```
:::
