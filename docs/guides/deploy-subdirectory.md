---
slug: /deploy-subdirectory
---

# Deploy subdirectory

This function is implemented based on react-router's [basename](https://reactrouter.com/en/main/router-components/memory-router#basename), so it is not applicable to subdirectories implemented through `nginx` configuration deploy.

Apache Answer supports subdirectory deployment as of version 1.3.5. This configuration allows you to set a route prefix for your application, e.g., if you have routes `/` and `/questions`, and you set `base_url` to /foo, you can access the previous routes via `/foo` and `/foo/questions`.


:::warning

The configuration must be set at build time and cannot be changed without a rebuild because the value is inlined in the client package. This means that it is necessary for the user to modify the configuration file and then compile it themselves in order to complete the build of the project.

:::


### Steps

1. Modify the configuration file `/configs/config.yaml`。
2. Run the command to build the project `make ui` `make build`。
3. Run the command `INSTALL_PORT=80 . /answer init -C . /answer-data/` Initialize the project, note that you need to add your base_url (http://localhost:80/{base_url}/install/) to the access path here to see if the configuration is successful.
4. Packaging into docker or releasing the above binary directly, see [here](/docs/plugins#build)

### Configuration file introduction

In order to unify the management of configuration-related variables, starting from v1.3.5, the environment variables in the ui directory are unified into `/configs/config.yaml` in the root directory, and the configurations here will be generated into `/ui/.env.production` by scripts, so as to realize the injection of environment variables.

Note: This only affects variables in the production environment, for development mode please continue to refer [here](/community/development). For more information on configuration files, please refer to [here](/docs/configfile).


```
...
ui:
  public_url: '/'
  api_url: '/'
  base_url: ''

```

### base_url

The path of the subdirectory. The default value is `''`, which means it is deployed in the root directory. If the value is modified, for example ` base_url: '/foo''`, all access paths of the page will be added with this prefix.

Normally, if this value is modified, `public_url` should also remain consistent.

### public_url

The path of static resources. The default value is `'/'`. If the website uses CDN to host static resources, this value can be set to the URL of CDN. If `base_url` is modified and CDN is not used, then this value also needs to be Same value as `base_url`.

### api_url

The default value is `''`, which is normally not adjusted. However, if your project uses nginx to proxy subpaths, you need to match the value of `base_url`.

:::tip
The KEY written to the `.env` file will be converted to:
```
PUBLIC_URL=/
REACT_APP_API_URL=/
REACT_APP_BASE_URL=
```
:::
