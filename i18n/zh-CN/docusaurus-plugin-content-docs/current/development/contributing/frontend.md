---
slug: /contributing/frontend
---

# 前端开发指南

## ⚙️ 先决条件

- [Node.js](https://nodejs.org/) `>=16.17`
- [pnpm](https://pnpm.io/) `>=7`

在构建 Answer 项目时需要 pnpm。使用以下命令安装 pnpm 工具：

```bash
corepack enable
corepack prepare pnpm@v7.12.2 --activate
```

使用 Node.js v16.17 或更新版本，可以通过指定标签来安装最新版本的 pnpm：

```bash
corepack prepare pnpm@latest --activate
```

## 🔨 开发

在本地克隆仓库并在终端中运行以下命令：

```shell
git clone git@github.com:apache/incubator-answer.git answer
cd answer/ui
pnpm install
pnpm start
```

现在，你的浏览器应该自动打开并加载 `http://localhost:3000`。你也可以手动访问它。

## 👷 工作流

克隆仓库并运行 pnpm install 初始化依赖项后，你可以使用以下项目命令：

- `pnpm start` 在本地运行 Answer 网站。
- `pnpm build` 为生产环境构建 Answer。
- `pnpm lint` 检查和修复代码风格。

## 🌍 I18n（多语言）

如果你需要添加或编辑语言条目，只需转到 `/i18n/en_US.yaml` 文件，所有前端语言条目都放在 `ui` 字段下。

如果想帮助我们进行 i18n 翻译，请访问 [Answer at Crowdin](https://crowdin.com/translate/answer) 。

## 💡 项目说明

```
.
├── cmd
├── configs
├── docs
├── i18n
      ├── en_US.yaml (basic language file)
      ├── i18n.yaml (language list)
├── internal
├── ...
└── ui (front-end project starts here)
      ├── build (built results directory, usually without concern)
      ├── public (html template for public)
      ├── scripts (some scripting tools on front-end project)
      ├── src (almost all front-end resources are here)
            ├── assets (static resources)
            ├── common (project information/data defined here)
            ├── components (all components of the project)
            ├── hooks (all hooks of the project)
            ├── i18n (Initialize the front-end i18n)
            ├── pages (all pages of the project)
            ├── router (Project routing definition)
            ├── services (all data api of the project)
            ├── stores (all data stores of the project)
            ├── utils (all utils of the project)
            ├── plugins (UI Plugin Development & Debugging Directory)
```

## 🤝 贡献

#### 修复 Bug

如果你发现了一个 bug，请不要犹豫地 [提交 issue](https://github.com/apache/incubator-answer/issues)。如果你能修复它，请在提交 issue 时附上说明。如果它确实是一个 bug，你可以在我们确认后提交 PR，这将确保你不会做任何无用的工作。

#### 代码审查 & 注释

在我们的开发中，有些代码不太合逻辑。如果你发现了它，请不要犹豫地向我们提交 PR。同样，一些函数没有注释。如果你能帮助我们补充它，我们将不胜感激。

#### 翻译

我们所有的翻译都放在 `i18n` 目录下。

1. 如果你发现你正在使用的语言中对应的键没有翻译，你可以提交你的翻译。
2. 如果你想提交新的语言翻译，请将你的语言添加到 `i18n.yaml` 文件中。

#### 功能或插件

1. 我们根据 [roadmap](https://github.com/apache/incubator-answer/projects) 制定计划开发功能。如果你有新功能的建议，请确认它们是否已经计划。
2. 插件将来会推出，敬请期待。

## 📱环境支持

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br />Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br />Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br />Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br />Safari |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 最近 2 个版本                                                                                                                                                                                          | 最近 2 个版本                                                                                                                                                                                     | 最近 2 个版本                                                                                                                                                                                     | 最近 2 个版本                                                                                                                                                                                 |

## ⭐ 使用了以下工具

- [TypeScript](https://www.typescriptlang.org/) - 强类型 JavaScript。
- [React.js](https://reactjs.org/) - 我们的前端是一个 React.js 应用程序。
- [React Router](https://reactrouter.com/en/main) - 路由库。
- [Bootstrap](https://getbootstrap.com/) -  UI 库。
- [React Bootstrap](https://react-bootstrap.github.io/) - UI 库（为 React 重新构建）。
- [axios](https://github.com/axios/axios) - 请求库。
- [SWR](https://swr.bootcss.com/) - 请求库。
- [react-i18next](https://react.i18next.com/) - 国际化库。
- [zustand](https://github.com/pmndrs/zustand) - 状态管理库。
