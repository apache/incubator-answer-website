# Website

Apache Answer official website is built using [Docusaurus](https://docusaurus.io/), and we use [pnpm](https://pnpm.io/) to manage dependencies.

```txt
# Directory description
.
├── blog       # blog posts
├── community  # community docs
├── docs       # using docs
├── i18n       # translation files
├── plugins    # plugin config
├── src        # components, custom css and pages
├── static     # static files
└── ...
```

## Installation

```shell
# pnpm version should > 8
pnpm i
```

## Local Development

```shell
pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

> [!WARNING]
> Please edit `.drawio.svg` files in the [Draw.io](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio) editor to avoid losing file layer information.

## Build

```shell
pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```shell
USE_SSH=true pnpm deploy
```

Not using SSH:

```shell
GIT_USER=<Your GitHub username> pnpm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
