---
sidebar_label: Plugins
slug: /plugins
---

# Contribute for Plugins

## Plugin types

目前我们总共有三种类型的插件

- Backend
- Builtin plugin
- Standard ui plugin

## Builtin plugin

It is not so different from React component, 这种插件更加适合下面两种场景

1. 有复杂的业务逻辑无法做到代码抽离 (例如 Oauth)。
2. 有些后端的插件在业务上需要 UI 上的支持（如 Search）。
3. 这种插件对开发者要求极低，不需要额外的配置工作。

### 如何开发

- **熟悉目录结构**. Go to the `ui/src/plugins/builtin` directory and create a directory, such as Demo. 然后参考现有的插架创建所必须的文件开始开发。

  ```txt
  // ui/src/plugins/builtin
  .
  ├── ...
  ├── Demo
        ├── i18n (language file)
              ├── en_US.yaml (default language required)
              ├── index.ts (required)
              ├── zh_CN.ts (any language you want to provide)
        ├── index.tsx (component required)
        ├── info.yaml (plugin information required)
        ├── services.ts (api)
  ```

- Export the plugins you have just defined in the plugins list file `plugins/builtin/index.ts`

  ```ts
  import Demo from './Demo'

  export default {
    ...(exists plugins),
    Demo,
  };
  ```

- Now you can use the PluginRender component to render the just-defined plugin where you want it!

  ```ts
    <PluginRender
      type="connector"
      slug_name="third_party_connector"
    />
  ```

## Standard ui plugin

这种插件适合下面这些场景

1. 能独立完成一些 UI 上面的功能的插件，不需要后端支持；
2. 代码需要做隔离，防止跟主站混淆；

现有示例：[editor-chart](https://github.com/apache/incubator-answer-plugins/blob/main/editor-chart)、[editor-formula](https://github.com/apache/incubator-answer-plugins/tree/main/editor-formula). 

为了简化开发和编译流程我们对这种可以独立的前端仓库采用 [workspace](https://pnpm.io/next/workspaces) 来管理。

### 如何快速开发

- 首先参考上面已有的两个仓库，熟悉基本配置和组件导出方式。**Important: package.json 中的 name 字段就是我们添加依赖的包名，这里只能使用**
- Go to the `ui/src/plugins` directory and create a directory，such as editor_chart, 然后添加你想要开发的组件，然后修改  `ui/src/plugins/index.ts` 文件，导出你的组件；

  ```ts
  export { default as  editor_chart } from 'editor_chart';
  ```

- 运行 `pnpm pre-install`, and 重新运行 `pnpm start`, 最后在你需要加载这个插件的页面调用一下 PluginKit 中 changePluginActiveStatus 方法来激活插件。

  ```ts
  import PluginKit from '@/utils/pluginKit';

  // 调用这个方法
  // 第一个参数是你的 plugin_name 第二个参数是否激活
  PluginKit.changePluginActiveStatus('editor_chart', true);
  ```
