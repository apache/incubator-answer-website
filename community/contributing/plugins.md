---
sidebar_label: Plugins
slug: /plugins
---

# Contribute for Plugins

## Plugin types

Currently we have three types of plugins:

- Backend
- Builtin plugin
- Standard ui plugin

## Registration and activation of plugins

All types of plug-in activation registration (or display) logic are in the `ui/utils/pluginKit/index.ts` file. During the development process, you can modify `registerPlugins` or call `changePluginActiveStatus` either of these two methods. to control whether your plugin is displayed.

## Builtin plugin

It is not so different from React component, this plugin is more suitable for the following scenarios:

1. There are complex business logics that cannot be separated from the code (such as Oauth).
2. Some back-end plug-ins require UI support for business purposes (such as Search).
3. This plug-in has extremely low requirements for developers and requires no additional configuration work.

### How to develop builtin plugin

- **Familiar with the directory structure**. Go to the `ui/src/plugins/builtin` directory and create a directory, such as Demo. Then refer to the existing plugins to create the necessary files to start development.

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

- **Publish plugin**: initiate the PR process normally and describe the plug-in function and scope of influence in detail.

## Standard ui plugin

This plugin is suitable for the following scenarios

1. A plug-in that can independently complete some UI functions and does not require back-end support;
2. The code needs to be isolated to prevent confusion with the main site;

Existing examples:[editor-chart](https://github.com/apache/incubator-answer-plugins/blob/main/editor-chart)、[editor-formula](https://github.com/apache/incubator-answer-plugins/tree/main/editor-formula).

In order to simplify the development and compilation process, we use [workspace](https://pnpm.io/next/workspaces) to manage this independent front-end warehouse.

### How to develop standard ui plugin

- First, refer to the two existing warehouses above to familiarize yourself with the basic configuration and component export methods.

:::info

The **name** field in package.json is the name of the package we add dependencies to; do not use ‘-’ to connect this field naming, please use ‘_’; for example:

"editor_chart" ✅

"editor-chart" ❌

:::
- Go to the `ui/src/plugins` directory and create a directory, such as editor_chart, then add the components you want to develop, then modify the `ui/src/plugins/index.ts` file to export your components; **changes here during the release phase do not need to be submitted**.

```
export { default as  editor_chart } from 'editor_chart';
```
- 运行 `pnpm pre-install`, and 重新运行 `pnpm start`, 最后在你需要加载这个插件的页面调用一下 PluginKit 中 changePluginActiveStatus 方法来激活插件。 **Changes here during the release phase do not need to be submitted**.

  ```ts
  import PluginKit from '@/utils/pluginKit';
  // call this method
  // @param1 plugin_name 
  // @param2 boolean; is whether or not to activate the
  PluginKit.changePluginActiveStatus('editor_chart', true);
  ```
  
- **Publish plugin**: after the function is developed, copy your entire plug-in folder to (incubator-answer-plugins) [https://github.com/apache/incubator-answer-plugins], **and add  `go.mod` `[plugin_name].go` `go.sum` these three files **; then initiate a PR and wait for review by relevant personnel; if incubator-answer If there are relevant changes in PR, please describe the scope of impact in PR.
