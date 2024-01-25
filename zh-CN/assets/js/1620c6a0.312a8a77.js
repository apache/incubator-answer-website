"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[4945],{20533:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=i(43010),r=i(90887);const o={slug:"/plugins"},s="Contribute for Plugins",l={id:"contributing/plugins",title:"Contribute for Plugins",description:"Viewing the official plugin code will make you to quickly understand and learn plugin development.",source:"@site/community/contributing/plugins.md",sourceDirName:"contributing",slug:"/plugins",permalink:"/zh-CN/community/plugins",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/answer-website/zh-CN",tags:[],version:"current",lastUpdatedBy:"PrimmaAnna",lastUpdatedAt:1706175013,formattedLastUpdatedAt:"2024\u5e741\u670825\u65e5",frontMatter:{slug:"/plugins"},sidebar:"community",previous:{title:"Pull Request",permalink:"/zh-CN/community/pull-request"},next:{title:"Plugin Configuration Schema",permalink:"/zh-CN/community/plugins/plugin-config"}},a={},c=[{value:"Plugin types",id:"plugin-types",level:2},{value:"Backend plugin",id:"backend-plugin",level:2},{value:"Implement the Base interface",id:"implement-the-base-interface",level:3},{value:"Implement the function interface",id:"implement-the-function-interface",level:3},{value:"Implement the configuration interface",id:"implement-the-configuration-interface",level:3},{value:"Register initialization function",id:"register-initialization-function",level:3},{value:"Debugging tips",id:"debugging-tips",level:3},{value:"Registration and activation of plugins",id:"registration-and-activation-of-plugins",level:2},{value:"Builtin plugin",id:"builtin-plugin",level:2},{value:"How to develop builtin plugin",id:"how-to-develop-builtin-plugin",level:3},{value:"Standard UI plugin",id:"standard-ui-plugin",level:2},{value:"How to develop standard UI plugin",id:"how-to-develop-standard-ui-plugin",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"contribute-for-plugins",children:"Contribute for Plugins"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Viewing the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/incubator-answer-plugins",children:(0,t.jsx)(n.strong,{children:"official plugin code"})})," will make you to quickly understand and learn plugin development."]})}),"\n",(0,t.jsx)(n.h2,{id:"plugin-types",children:"Plugin types"}),"\n",(0,t.jsx)(n.p,{children:"Currently we have three types of plugins:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Only Backend plugin"}),"\n",(0,t.jsx)(n.li,{children:"Frontend Builtin plugin"}),"\n",(0,t.jsx)(n.li,{children:"Standard UI plugin"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"backend-plugin",children:"Backend plugin"}),"\n",(0,t.jsx)(n.h3,{id:"implement-the-base-interface",children:"Implement the Base interface"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Base"})," interface contains basic information about the plugin and is used to display."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// Info presents the plugin information\ntype Info struct {\n    Name        Translator\n    SlugName    string\n    Description Translator\n    Author      string\n    Version     string\n    Link        string\n}\n\n// Base is the base plugin\ntype Base interface {\n    // Info returns the plugin information\n    Info() Info\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"SlugName"})," of the plugin must be unique. Two plugins with the same ",(0,t.jsx)(n.code,{children:"SlugName"})," will panic when registering."]})}),"\n",(0,t.jsx)(n.h3,{id:"implement-the-function-interface",children:"Implement the function interface"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"Different plugin types require different interfaces of implementation."}),(0,t.jsxs)(n.p,{children:["For example, following is the ",(0,t.jsx)(n.code,{children:"Connector"})," plugin interface."]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type Connector interface {\n    Base\n    \n    // ConnectorLogoSVG presents the logo in svg format\n    ConnectorLogoSVG() string\n    \n    // ConnectorName presents the name of the connector\n    // e.g. Facebook, Twitter, Instagram\n    ConnectorName() Translator\n    \n    // ConnectorSlugName presents the slug name of the connector\n    // Please use lowercase and hyphen as the separator\n    // e.g. facebook, twitter, instagram\n    ConnectorSlugName() string\n    \n    // ConnectorSender presents the sender of the connector\n    // It handles the start endpoint of the connector\n    // receiverURL is the whole URL of the receiver\n    ConnectorSender(ctx *GinContext, receiverURL string) (redirectURL string)\n    \n    // ConnectorReceiver presents the receiver of the connector\n    // It handles the callback endpoint of the connector, and returns the\n    ConnectorReceiver(ctx *GinContext, receiverURL string) (userInfo ExternalLoginUserInfo, err error)\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Translator"})," is a struct for translation. Please refer to ",(0,t.jsx)(n.a,{href:"/community/plugins/plugin-translation",children:"the documentation"})," for details."]})}),"\n",(0,t.jsx)(n.h3,{id:"implement-the-configuration-interface",children:"Implement the configuration interface"}),"\n",(0,t.jsxs)(n.p,{children:["For details on the description of each configuration item, please refer to ",(0,t.jsx)(n.a,{href:"/community/plugins/plugin-config",children:"the documentation"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type Config interface {\n    Base\n\n    // ConfigFields returns the list of config fields\n    ConfigFields() []ConfigField\n\n    // ConfigReceiver receives the config data, it calls when the config is saved or initialized.\n    // We recommend to unmarshal the data to a struct, and then use the struct to do something.\n    // The config is encoded in JSON format.\n    // It depends on the definition of ConfigFields.\n    ConfigReceiver(config []byte) error\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"register-initialization-function",children:"Register initialization function"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import "github.com/apache/incubator-answer/plugin"\n\nfunc init() {\n    plugin.Register(&GitHubConnector{\n        Config: &GitHubConnectorConfig{},\n    })\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"debugging-tips",children:"Debugging tips"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"During the development and debugging phase, you can use the following tips to avoid repetitive packaging."})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Use answer source code for development."}),"\n",(0,t.jsx)(n.li,{children:"Write your plugin directly in the plugin directory."}),"\n",(0,t.jsx)(n.li,{children:"Import your plugin in the main function"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"After that you just need to start the answer project normally and it will contain the plugins you developed."}),"\n",(0,t.jsx)(n.h2,{id:"registration-and-activation-of-plugins",children:"Registration and activation of plugins"}),"\n",(0,t.jsxs)(n.p,{children:["All types of plug-in activation registration (or display) logic are in the ",(0,t.jsx)(n.code,{children:"ui/utils/pluginKit/index.ts"})," file. During the development process, you can modify ",(0,t.jsx)(n.code,{children:"registerPlugins"})," or call ",(0,t.jsx)(n.code,{children:"changePluginActiveStatus"})," either of these two methods. to control whether your plugin is displayed."]}),"\n",(0,t.jsx)(n.h2,{id:"builtin-plugin",children:"Builtin plugin"}),"\n",(0,t.jsx)(n.p,{children:"It is not so different from React component, this plugin is more suitable for the following scenarios:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"There are complex business logics that cannot be separated from the code (such as Oauth)."}),"\n",(0,t.jsx)(n.li,{children:"Some back-end plug-ins require UI support for business purposes (such as Search)."}),"\n",(0,t.jsx)(n.li,{children:"This plug-in has extremely low requirements for developers and requires no additional configuration work."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-develop-builtin-plugin",children:"How to develop builtin plugin"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Familiar with the directory structure"}),". Go to the ",(0,t.jsx)(n.code,{children:"ui/src/plugins/builtin"})," directory and create a directory, such as Demo. Then refer to the existing plugins to create the necessary files to start development."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"// ui/src/plugins/builtin\n.\n\u251c\u2500\u2500 ...\n\u251c\u2500\u2500 Demo\n      \u251c\u2500\u2500 i18n (language file)\n            \u251c\u2500\u2500 en_US.yaml (default language required)\n            \u251c\u2500\u2500 index.ts (required)\n            \u251c\u2500\u2500 zh_CN.ts (any language you want to provide)\n      \u251c\u2500\u2500 index.tsx (component required)\n      \u251c\u2500\u2500 info.yaml (plugin information required)\n      \u251c\u2500\u2500 services.ts (api)\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Export the plugins you have just defined in the plugins list file ",(0,t.jsx)(n.code,{children:"plugins/builtin/index.ts"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import Demo from './Demo'\n\nexport default {\n  ...(exists plugins),\n  Demo,\n};\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Now you can use the PluginRender component to render the just-defined plugin where you want it!"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'  <PluginRender\n    type="connector"\n    slug_name="third_party_connector"\n  />\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Publish plugin"}),": initiate the PR process normally and describe the plug-in function and scope of influence in detail."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"standard-ui-plugin",children:"Standard UI plugin"}),"\n",(0,t.jsx)(n.p,{children:"This plugin is suitable for the following scenarios"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"A plug-in that can independently complete some UI functions and does not require back-end support;"}),"\n",(0,t.jsx)(n.li,{children:"The code needs to be isolated to prevent confusion with the main site;"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Existing examples:",(0,t.jsx)(n.a,{href:"https://github.com/apache/incubator-answer-plugins/tree/main/editor-chart",children:"editor-chart"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/apache/incubator-answer-plugins/tree/main/editor-formula",children:"editor-formula"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In order to simplify the development and compilation process, we use ",(0,t.jsx)(n.a,{href:"https://pnpm.io/next/workspaces",children:"workspace"})," to manage this independent front-end warehouse."]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-develop-standard-ui-plugin",children:"How to develop standard UI plugin"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"First, refer to the two existing warehouses above to familiarize yourself with the basic configuration and component export methods."}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"name"})," field in package.json is the name of the package we add dependencies to; do not use ",(0,t.jsx)(n.code,{children:"-"})," to connect this field naming, please use ",(0,t.jsx)(n.code,{children:"_"}),"; for example:"]}),(0,t.jsxs)(n.p,{children:['"editor_chart" \u2705',(0,t.jsx)(n.br,{}),"\n",'"editor-chart" \u274c']})]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Go to the ",(0,t.jsx)(n.code,{children:"ui/src/plugins"})," directory and create a directory, such as editor_chart, then add the components you want to develop, then modify the ",(0,t.jsx)(n.code,{children:"ui/src/plugins/index.ts"})," file to export your components; ",(0,t.jsx)(n.strong,{children:"changes here during the release phase do not need to be submitted"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export { default as  editor_chart } from 'editor_chart';\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Run ",(0,t.jsx)(n.code,{children:"pnpm pre-install"}),", and re-run ",(0,t.jsx)(n.code,{children:"pnpm start"}),", and finally call the changePluginActiveStatus method in PluginKit on the page where you need to load the plugin to activate the plugin. ",(0,t.jsx)(n.strong,{children:"Changes here during the release phase do not need to be submitted"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import PluginKit from '@/utils/pluginKit';\n// call this method\n// @param1 plugin_name \n// @param2 boolean; is whether or not to activate the\nPluginKit.changePluginActiveStatus('editor_chart', true);\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Publish plugin"}),": after the function is developed, copy your entire plug-in folder to ",(0,t.jsx)(n.a,{href:"https://github.com/apache/incubator-answer-plugins",children:"incubator-answer-plugins"}),", ",(0,t.jsxs)(n.strong,{children:["and add  ",(0,t.jsx)(n.code,{children:"go.mod"})," ",(0,t.jsx)(n.code,{children:"[plugin_name].go"})," ",(0,t.jsx)(n.code,{children:"go.sum"})," these three files"]}),"; then initiate a PR and wait for review by relevant personnel; if incubator-answer If there are relevant changes in PR, please describe the scope of impact in PR."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},90887:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>s});var t=i(85170);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);