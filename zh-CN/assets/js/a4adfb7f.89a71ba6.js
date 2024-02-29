"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[1508],{68266:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=i(43010),o=i(90887);const l={sidebar_label:"Plugin Configuration Schema",slug:"/plugins/plugin-config"},r="Plugin Configuration Schema",s={id:"contributing/plugins/plugin-config",title:"Plugin Configuration Schema",description:"Feature",source:"@site/community/contributing/plugins/plugin-config.md",sourceDirName:"contributing/plugins",slug:"/plugins/plugin-config",permalink:"/zh-CN/community/plugins/plugin-config",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/answer-website/zh-CN",tags:[],version:"current",lastUpdatedBy:"dashuai",lastUpdatedAt:1709173700,formattedLastUpdatedAt:"2024\u5e742\u670829\u65e5",frontMatter:{sidebar_label:"Plugin Configuration Schema",slug:"/plugins/plugin-config"},sidebar:"community",previous:{title:"Contribute for Plugins",permalink:"/zh-CN/community/plugins"},next:{title:"Plugin Translation",permalink:"/zh-CN/community/plugins/plugin-translation"}},u={},c=[{value:"Feature",id:"feature",level:2},{value:"Backend &amp; plugin developer",id:"backend--plugin-developer",level:3},{value:"Frontend",id:"frontend",level:3},{value:"GitHub Connector Plugin Configuration Example",id:"github-connector-plugin-configuration-example",level:3},{value:"Supported config types",id:"supported-config-types",level:3},{value:"Supported config input types",id:"supported-config-input-types",level:3}];function p(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"plugin-configuration-schema",children:"Plugin Configuration Schema"}),"\n",(0,t.jsx)(e.h2,{id:"feature",children:"Feature"}),"\n",(0,t.jsx)(e.p,{children:"For plugins, we often need some configuration items to record the information necessary for the plugin."}),"\n",(0,t.jsx)(e.p,{children:"For example, OAuth plugins require secret key configuration. These configurations need to be described by the developer and used by the user. So, the following is about how to describe the configuration required for a plugin."}),"\n",(0,t.jsx)(e.h3,{id:"backend--plugin-developer",children:"Backend & plugin developer"}),"\n",(0,t.jsxs)(e.admonition,{type:"note",children:[(0,t.jsx)(e.p,{children:"For backend or plugin developers, we use the following structure to describe the plugin configuration."}),(0,t.jsxs)(e.p,{children:["As a plugin developer, you only need to build a structure ",(0,t.jsx)(e.code,{children:"[]ConfigField"})," and fill in the configuration contents to describe the required configuration of a plugin."]})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'type ConfigField struct {\n    Name        string               `json:"name"`\n    Type        ConfigType           `json:"type"`\n    Title       Translator           `json:"title"`\n    Description Translator           `json:"description"`\n    Required    bool                 `json:"required"`\n    Value       string               `json:"value"`\n    UIOptions   ConfigFieldUIOptions `json:"ui_options"`\n    Options     []ConfigFieldOption  `json:"options,omitempty"`\n}\n\ntype ConfigFieldUIOptions struct {\n    Placeholder Translator `json:"placeholder,omitempty"`\n    Rows        string     `json:"rows,omitempty"`\n    InputType   InputType  `json:"input_type,omitempty"`\n}\n\ntype ConfigFieldOption struct {\n    Label Translator `json:"label"`\n    Value string     `json:"value"`\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"frontend",children:"Frontend"}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.p,{children:"On the frontend we use JSON to describe and render the plugin's configuration items."})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "name": "the key of this configuration that should be unique in the plugin",\n  "type": "the type of this configuration",\n  "title": "the label of this configuration that will be displayed",\n  "description": "configuration description that will be displayed",\n  "options,omitempty": [{"label": "Apple", "value": "apple"}],\n  "required": true,\n  "ui_options": {\n    "input_type": "the type of input",\n    "placeholder": "placeholder",\n    "rows": "the number of rows that will be used for textarea"\n  },\n  "value": "the value of this configuration that will be saved"\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"github-connector-plugin-configuration-example",children:"GitHub Connector Plugin Configuration Example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'[\n    {\n        "name": "client_id",\n        "type": "input",\n        "title": "ClientID",\n        "description": "Client ID of your GitHub application.",\n        "required": true,\n        "ui_options": {\n            "input_type": "text"\n        }\n    },\n    {\n        "name": "client_secret",\n        "type": "input",\n        "title": "ClientSecret",\n        "description": "Client secret of your GitHub application.",\n        "required": true,\n        "ui_options": {\n            "input_type": "text"\n        }\n    }\n]\n'})}),"\n",(0,t.jsx)(e.p,{children:"The following is what looks like on the Admin Page."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"plugin-github-connector-config",src:i(96541).Z+"",width:"2648",height:"830"})}),"\n",(0,t.jsx)(e.h3,{id:"supported-config-types",children:"Supported config types"}),"\n",(0,t.jsx)(e.p,{children:"Different types will be rendered as different UI."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"input"}),"\n",(0,t.jsx)(e.li,{children:"textarea"}),"\n",(0,t.jsx)(e.li,{children:"checkbox"}),"\n",(0,t.jsx)(e.li,{children:"radio"}),"\n",(0,t.jsx)(e.li,{children:"select"}),"\n",(0,t.jsx)(e.li,{children:"upload"}),"\n",(0,t.jsx)(e.li,{children:"timezone"}),"\n",(0,t.jsx)(e.li,{children:"switch"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"supported-config-input-types",children:"Supported config input types"}),"\n",(0,t.jsx)(e.p,{children:"Different formats are supported for the input type."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"text"}),"\n",(0,t.jsx)(e.li,{children:"color"}),"\n",(0,t.jsx)(e.li,{children:"date"}),"\n",(0,t.jsx)(e.li,{children:"datetime-local"}),"\n",(0,t.jsx)(e.li,{children:"email"}),"\n",(0,t.jsx)(e.li,{children:"month"}),"\n",(0,t.jsx)(e.li,{children:"number"}),"\n",(0,t.jsx)(e.li,{children:"password"}),"\n",(0,t.jsx)(e.li,{children:"range"}),"\n",(0,t.jsx)(e.li,{children:"search"}),"\n",(0,t.jsx)(e.li,{children:"tel"}),"\n",(0,t.jsx)(e.li,{children:"time"}),"\n",(0,t.jsx)(e.li,{children:"url"}),"\n",(0,t.jsx)(e.li,{children:"week"}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},96541:(n,e,i)=>{i.d(e,{Z:()=>t});const t=i.p+"assets/images/plugin-github-connector-config-07bc10250eeffbadf333b16993113499.png"},90887:(n,e,i)=>{i.d(e,{Z:()=>s,a:()=>r});var t=i(85170);const o={},l=t.createContext(o);function r(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);