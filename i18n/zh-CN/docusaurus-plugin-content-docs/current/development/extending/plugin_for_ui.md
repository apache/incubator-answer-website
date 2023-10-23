---
sidebar_label: 开发 UI 插件
sidebar_position: 2
---

# 开发 UI 插件

UI 插件与 [标准插件](/docs/development/extending/) 或 React 组件并没有太大的区别，只需要一些配置和包装即可。

在学习了上述文档中的标准插件开发，并且理解了 React 组件之后，让我们来看一下开发 UI 插件的逐步指南。

---

## 开发阶段

* 进入 `ui/src/plugins` 目录并创建一个 React 组件，例如 `Demo`。

* 为 `Demo` 组件创建入口文件 `index.tsx`。

* 在入口文件旁创建插件信息文件 `info.yaml`。常用字段如下

```yaml
# info.yaml
slug_name: ui_plugin_demo
version: 0.0.1
author:  Answer.dev
```

* 在 `index.tsx` 文件中编写所需的任何 React 组件，并导出如下

```ts
// plugins/index.ts
export default {
  info: pluginInfo,
  component: memo(Index),
};
```

:::caution

* 必须以这种方式导出。`pluginInfo` 的类型定义可以在下面的 [类型定义](#type-definitions) 部分中找到。

* 文件名必须为 `index.tsx` 和 `info.yaml`，否则会影响组件的使用。
:::

* 在插件列表文件 `plugins/index.ts` 中导出你刚刚定义的插件

```ts
export { default as Demo } from './Demo';
```

* 现在，你可以在需要它的地方使用 `PluginRender` 组件来渲染刚刚定义的插件！

```tsx
<PluginRender slug_name="ui_plugin_demo" />
```

通过以上步骤，如果你的插件功能已经完成，那么你准备进入发布阶段了。

## 发布阶段

* F首先，为组件定义发布注册文件。以 `Demo` 为例，我们编写一个 `demo.go`

```go
// demo.go
package demo

import "github.com/answerdev/answer/plugin"

type DemoPlugin struct {
}

func init() {
 plugin.Register(&DemoPlugin{})
}

func (d DemoPlugin) Info() plugin.Info {
 return plugin.Info{
  Name:        plugin.MakeTranslator("i18n.demo.name"),
  SlugName:    "demo_plugin",
  Description: plugin.MakeTranslator("i18n.demo.description"),
  Author:      "answerdev",
  Version:     "0.0.1",
 }
}
```

:::info
有关详细定义，请参见 [扩展](/docs/development/extending/) 部分。
:::

* 然后，将整个 `Demo` 目录移动到[官方插件存储库](https://github.com/apache/incubator-answer-plugins) 中，提交合并请求即可发布插件。

---

## 插件的国际化

* 在 `Demo` 目录下创建一个 `i18n` 目录，并添加一个语言文件，格式为 `yaml`，例如 `en_US.yaml`。
  * `plugin` 和 `ui` 字段是固定的，并且必须使用这两个名称。
  * `ui_plugin_demo` 部分是插件的 `slug_name`，它是在 `info.yaml` 中定义的 `slug_name` 字段的值。

```yaml
# en_US.yaml
plugin:
  ui_plugin_demo:
    ui:
      msg: UI Plugin Demo
```

* 在 `i18n` 目录中创建 `index.ts` 文件，并使用 `pluginKit` 工具初始化语言资源。

```ts
import pluginKit from '@/utils/pluginKit';

import en_US from './en_US.yaml';
import zh_CN from './zh_CN.yaml';

pluginKit.initI18nResource({
  en_US,
  zh_CN,
});
```

* 在插件的 `index.tsx` 文件中导入语言资源文件，并使用 `pluginKit` 初始化 `t`函数。然后你可以像正常的 `t` 函数一样使用 `t` 函数。

```tsx
import pluginKit, { PluginInfo } from '@/utils/pluginKit';
import './i18n';

const Index: FC = () => {
  const { t } = useTranslation(pluginKit.getTransNs(), {
    keyPrefix: pluginKit.getTransKeyPrefix(pluginInfo),
  });

  return <div>{t('msg')}</div>;
};
```

详细信息请参考 [示例](#example) 部分

## 类型定义

```ts
export type PluginType = 'Connector';

export interface PluginInfo {
  slug_name: string;
  type?: PluginType;
  name?: string;
  description?: string;
}

export interface Plugin {
  info: PluginInfo;
  component: NamedExoticComponent | FC;
}

interface I18nResource {
  [lng: string]: {
    plugin: {
      [slug_name: string]: {
        ui: any;
      };
    };
  };
}
```

## 示例

完成 `Demo` 插件开发后的最终目录结构如下图所示。

![ui-plugin-demo](/img/docs/ui-plugin-demo.jpeg)

你还可以查看 Demo [Demo 示例代码](https://github.com/apache/incubator-answer/tree/main/ui/src/plugins/Demo) 以获取更多信息。
