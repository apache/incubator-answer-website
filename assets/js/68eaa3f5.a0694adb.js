"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[3362],{83895:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(43010),r=a(90887),s=a(71981),o=a(71401);const l={slug:"/upgrade"},u="Upgrade",i={id:"getting-started/upgrade",title:"Upgrade",description:"We recommend that you back up database and configuration files before upgrading. Generally, we guarantee that the upgrade does not affect the existing data.",source:"@site/docs/getting-started/upgrade.md",sourceDirName:"getting-started",slug:"/upgrade",permalink:"/docs/upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-answer-website/edit/main/docs/getting-started/upgrade.md",tags:[],version:"current",lastUpdatedBy:"Anne",lastUpdatedAt:1716877290,formattedLastUpdatedAt:"May 28, 2024",frontMatter:{slug:"/upgrade"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Command Line",permalink:"/docs/command-line"}},c={},d=[];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"upgrade",children:"Upgrade"}),"\n","\n","\n",(0,n.jsxs)(t.admonition,{type:"caution",children:[(0,n.jsx)(t.p,{children:"We recommend that you back up database and configuration files before upgrading. Generally, we guarantee that the upgrade does not affect the existing data."}),(0,n.jsx)(t.p,{children:"To back up data means that you have the option to roll back even if the upgrade fails, or you do not want the advanced version."})]}),"\n",(0,n.jsxs)(s.Z,{children:[(0,n.jsxs)(o.Z,{value:"docker-compose",label:"Docker Compose",default:!0,children:[(0,n.jsx)(t.p,{children:"If you use docker-compose to install answer, it is very easy to upgrade."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker-compose pull\ndocker-compose down\ndocker-compose up -d\n"})})]}),(0,n.jsxs)(o.Z,{value:"docker",label:"Docker",children:[(0,n.jsx)(t.p,{children:"If you are using docker to install answer, the upgrade steps are as follows."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker pull apache/answer:latest\ndocker stop answer\ndocker rm answer\ndocker run -d -p 9080:80 -v answer-data:/data --name answer apache/answer:latest\n"})})]}),(0,n.jsxs)(o.Z,{value:"binary",label:"Binary",children:[(0,n.jsx)(t.p,{children:"If you are using a binary installation of answer, the upgrade steps are as follows."}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Download the ",(0,n.jsx)(t.a,{href:"https://github.com/apache/incubator-answer/releases",children:"latest binary version"})," for your system."]}),"\n",(0,n.jsx)(t.li,{children:"Stop old version"}),"\n",(0,n.jsxs)(t.li,{children:["Execute the upgrade command ",(0,n.jsx)(t.code,{children:"./answer upgrade -C ./answer-data/"})]}),"\n",(0,n.jsxs)(t.li,{children:["Run the latest version ",(0,n.jsx)(t.code,{children:"./answer run -C ./answer-data/"})]}),"\n"]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["When there are other unexpected cases such as upgrade exceptions, we provide a command to manually force the upgrade of Answer. ",(0,n.jsx)(t.code,{children:"answer upgrade -f v1.1.0"})," Executing this command will force upgrade from the specified version, even if your Answer is already up to date. If you encounter an upgrade exception, you can try to execute this command or pull the latest docker image again and execute this command inside the container."]})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},71401:(e,t,a)=>{a.d(t,{Z:()=>o});a(85170);var n=a(45924);const r={tabItem:"tabItem_s4ch"};var s=a(43010);function o(e){let{children:t,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,o),hidden:a,children:t})}},71981:(e,t,a)=>{a.d(t,{Z:()=>j});var n=a(85170),r=a(45924),s=a(5899),o=a(31148),l=a(26043),u=a(50160),i=a(68135),c=a(53067);function d(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=p(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[i,d]=f({queryString:a,groupId:r}),[m,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),b=(()=>{const e=i??m;return h({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{b&&u(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=a(91861);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=a(43010);function x(e){let{className:t,block:a,selectedValue:n,selectValue:o,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),r=l[a].value;r!==n&&(i(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function j(e){const t=(0,g.Z)();return(0,v.jsx)(y,{...e},String(t))}},90887:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>o});var n=a(85170);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);