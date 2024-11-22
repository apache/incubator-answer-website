"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[7872],{77007:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=t(43010),s=t(90887);const r={slug:"/security"},c="Security",o={id:"security",title:"Security",description:"The Apache Software Foundation takes a rigorous stance on eliminating security issues in its software projects. If you find a security bug, with that in mind, please do not file public issues. You can follow the instructions in the security policy to report it privately. We will fix it as soon as possible.",source:"@site/community/security.md",sourceDirName:".",slug:"/security",permalink:"/community/security",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-answer-website/edit/main/community/security.md",tags:[],version:"current",lastUpdatedBy:"LinkinStars",lastUpdatedAt:1732270436,formattedLastUpdatedAt:"Nov 22, 2024",frontMatter:{slug:"/security"},sidebar:"community",previous:{title:"Team",permalink:"/community/team"},next:{title:"Contributing",permalink:"/community/contributing"}},a={},l=[{value:"v1.3.5",id:"v135",level:2},{value:"CVE-2024-41888",id:"cve-2024-41888",level:3},{value:"CVE-2024-41890",id:"cve-2024-41890",level:3},{value:"v1.2.5",id:"v125",level:2},{value:"CVE-2024-29217",id:"cve-2024-29217",level:3},{value:"v1.2.1",id:"v121",level:2},{value:"CVE-2024-22393",id:"cve-2024-22393",level:3},{value:"CVE-2024-26578",id:"cve-2024-26578",level:3},{value:"CVE-2024-23349",id:"cve-2024-23349",level:3},{value:"v1.2.0",id:"v120",level:2},{value:"CVE-2023-49619",id:"cve-2023-49619",level:3}];function d(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"security",children:"Security"}),"\n",(0,n.jsxs)(i.p,{children:["The Apache Software Foundation takes a rigorous stance on eliminating security issues in its software projects. If you find a security bug, with that in mind, please do not file public issues. You can follow the instructions in the ",(0,n.jsx)(i.a,{href:"https://github.com/apache/incubator-answer/security/policy",children:"security policy"})," to report it privately. We will fix it as soon as possible."]}),"\n",(0,n.jsx)(i.h1,{id:"security-fixes",children:"Security fixes"}),"\n",(0,n.jsx)(i.h2,{id:"v135",children:"v1.3.5"}),"\n",(0,n.jsx)(i.h3,{id:"cve-2024-41888",children:"CVE-2024-41888"}),"\n",(0,n.jsx)(i.p,{children:"The password reset link remains valid within its expiration period even after it has been used. This could potentially lead to the link being misused or hijacked."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://www.cve.org/CVERecord?id=CVE-2024-41888",children:"https://www.cve.org/CVERecord?id=CVE-2024-41888"})}),"\n",(0,n.jsx)(i.h3,{id:"cve-2024-41890",children:"CVE-2024-41890"}),"\n",(0,n.jsx)(i.p,{children:"User sends multiple password reset emails, each containing a valid link. Within the link's validity period, this could potentially lead to the link being misused or hijacked."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://www.cve.org/CVERecord?id=CVE-2024-41890",children:"https://www.cve.org/CVERecord?id=CVE-2024-41890"})}),"\n",(0,n.jsx)(i.h2,{id:"v125",children:"v1.2.5"}),"\n",(0,n.jsx)(i.h3,{id:"cve-2024-29217",children:"CVE-2024-29217"}),"\n",(0,n.jsx)(i.p,{children:"XSS attack when user changes personal website. A logged-in user, when modifying their personal website, can input malicious code in the website to create such an attack."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://www.cve.org/CVERecord?id=CVE-2024-29217",children:"https://www.cve.org/CVERecord?id=CVE-2024-29217"})}),"\n",(0,n.jsx)(i.h2,{id:"v121",children:"v1.2.1"}),"\n",(0,n.jsx)(i.h3,{id:"cve-2024-22393",children:"CVE-2024-22393"}),"\n",(0,n.jsx)(i.p,{children:"Pixel Flood Attack by uploading large pixel files will cause server out of memory. A logged-in user can cause such an attack by uploading an image when posting content."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://www.cve.org/CVERecord?id=CVE-2024-22393",children:"https://www.cve.org/CVERecord?id=CVE-2024-22393"})}),"\n",(0,n.jsx)(i.h3,{id:"cve-2024-26578",children:"CVE-2024-26578"}),"\n",(0,n.jsx)(i.p,{children:"Repeated submission during registration resulted in the registration of the same user. When users register, if they rapidly submit multiple registrations using scripts, it can result in the creation of multiple user accounts simultaneously with the same name."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://www.cve.org/CVERecord?id=CVE-2024-26578",children:"https://www.cve.org/CVERecord?id=CVE-2024-26578"})}),"\n",(0,n.jsx)(i.h3,{id:"cve-2024-23349",children:"CVE-2024-23349"}),"\n",(0,n.jsx)(i.p,{children:"XSS attack when user enters summary. A logged-in user, when modifying their own submitted question, can input malicious code in the summary to create such an attack."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://www.cve.org/CVERecord?id=CVE-2024-23349",children:"https://www.cve.org/CVERecord?id=CVE-2024-23349"})}),"\n",(0,n.jsx)(i.h2,{id:"v120",children:"v1.2.0"}),"\n",(0,n.jsx)(i.h3,{id:"cve-2023-49619",children:"CVE-2023-49619"}),"\n",(0,n.jsx)(i.p,{children:"Under normal circumstances, a user can only bookmark a question once, and will only increase the number of questions bookmarked once. However, repeat submissions through the script can increase the number of collection of the question many times."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://www.cve.org/CVERecord?id=CVE-2023-49619",children:"https://www.cve.org/CVERecord?id=CVE-2023-49619"})})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},90887:(e,i,t)=>{t.d(i,{Z:()=>o,a:()=>c});var n=t(85170);const s={},r=n.createContext(s);function c(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);