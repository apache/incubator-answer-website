---
sidebar_label: Plugin for UI
sidebar_position: 2
---

# Develop a UI plug-in

A UI plugin is not so different from a [standard plugin](/docs/development/extending/) or React component, it just needs some configuration and wrapping.

Having learned how to develop a standard plugin from the above documentation, and having understood React components. let's move on to a step-by-step guide to developing a ui plugin.

---

## Development phase

* Go to the `ui/src/plugins` directory and create a React component, such as `Demo`.

* Create the entry file `index.tsx` for the `Demo` component.

* Create the plugin information file `info.yaml` next to the entry file. Commonly used fields are as follows
```yaml
# info.yaml
slug_name: ui_plugin_demo
version: 0.0.1
author:  Answer.dev
```

* Write any React component you need in the `index.tsx` file and export it as follows
```ts
// plugins/index.ts
export default {
  info: pluginInfo,
  component: memo(Index),
};
```

:::caution
- It must be exported in this way. `pluginInfo` type definitions can be found in the [Type Definitions](#type-definitions) section below

- The file names must be `index.tsx` and `info.yaml`, otherwise it will affect the use of the component.  
:::

* Export the plugins you have just defined in the plugins list file `plugins/index.ts`
```ts
export { default as Demo } from './Demo';
```

* Now you can use the `PluginRender` component to render the just-defined plugin where you want it!
```tsx
<PluginRender slug_name="ui_plugin_demo" />
```
With the above, if your plugin is functionally complete, you are ready to move on to the release phase.


## Release phase

* First, define the release registration file for the component. Using `Demo` as an example, we write a `demo.go`
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
For detailed definitions, see the [Extension](/docs/development/extending/) section.
:::

* Then, move the entire `Demo` directory to the [official plugins repository](https://github.com/apache/incubator-answer-plugins) and submit a PR request for merging, and you've released the plugin.

---

## I18n for plug-ins

* Create an `i18n` directory under the `Demo` directory and add a language file in `yaml` format, e.g. `en_US.yaml`.
	- The `plugin` and `ui` fields are fixed and must be used with these two names.
	- The `ui_plugin_demo` section is the `slug_name` for the plugin, which is the value of the `slug_name` field defined in `info.yaml`.
```yaml
# en_US.yaml
plugin:
  ui_plugin_demo:
    ui:
      msg: UI Plugin Demo
```

* Create `index.ts` in the `i18n` directory and initialise the language resources with the `pluginKit` tool.
```ts
import pluginKit from '@/utils/pluginKit';

import en_US from './en_US.yaml';
import zh_CN from './zh_CN.yaml';

pluginKit.initI18nResource({
  en_US,
  zh_CN,
});
```

* Import the language resource file in the `index.tsx` file of the plugin and initialise the `t` function with the `pluginKit`. Then you can use the `t` function in the same way as a normal `t` function.
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

For details, please refer to the [example](#example) section

## Type definitions
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

## Example

The final directory structure after the development of the `Demo` plugin is shown in the figure.

![ui-plugin-demo](/img/docs/ui-plugin-demo.jpeg)

You can also see the [Demo sample code](https://github.com/apache/incubator-answer/tree/main/ui/src/plugins/Demo) for more information.
