"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8158],{6190:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(4848),r=t(8453);const s={sidebar_position:1},o="The Subjekt Model",a={id:"reference/subjekt/model",title:"The Subjekt Model",description:"The Subjekt model describes the Subjekt semantic model and the files used to create it. Subjekt models are used to describe contracts, subjects and data structures.This model can be represented in various forms, including as a semantic model, through the Interface Definition Language (IDL), and as an Abstract Syntax Tree (AST) in JSON format.",source:"@site/docs/reference/subjekt/model.md",sourceDirName:"reference/subjekt",slug:"/reference/subjekt/model",permalink:"/docs/reference/subjekt/model",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"referenceSidebar",previous:{title:"Subjekt Specification",permalink:"/docs/reference/subjekt/"},next:{title:"Types",permalink:"/docs/reference/subjekt/types/"}},c={},d=[{value:"Subjekt Overview",id:"subjekt-overview",level:2}];function u(e){const n={h1:"h1",h2:"h2",mermaid:"mermaid",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"the-subjekt-model",children:"The Subjekt Model"}),"\n",(0,i.jsx)(n.p,{children:"The Subjekt model describes the Subjekt semantic model and the files used to create it. Subjekt models are used to describe contracts, subjects and data structures.This model can be represented in various forms, including as a semantic model, through the Interface Definition Language (IDL), and as an Abstract Syntax Tree (AST) in JSON format."}),"\n",(0,i.jsx)(n.h2,{id:"subjekt-overview",children:"Subjekt Overview"}),"\n",(0,i.jsx)(n.mermaid,{value:'erDiagram\n    SUBJECT {\n        string id "Unique identifier"\n        string version "Version number"\n    }\n    STATE {\n        string id "Unique identifier"\n    }\n    BEHAVIOR {\n        string id "Unique identifier"\n    }\n    INPUT {\n        string id "Unique identifier"\n        string type "Data type"\n    }\n    OUTPUT {\n        string id "Unique identifier"\n        string type "Data type"\n    }\n    TRIGGER {\n        string id "Unique identifier"\n        string condition "Trigger condition"\n    }\n    SUBSCRIPTION {\n        string id "Unique identifier"\n        string source "Source subject or state"\n    }\n    SUBJECT ||--o{ STATE : "contains"\n    SUBJECT ||--o{ BEHAVIOR : "contains"\n    SUBJECT ||--o{ TRIGGER : "contains"\n    SUBJECT ||--o{ SUBSCRIPTION : "contains"\n    BEHAVIOR ||--o{ INPUT : "accepts"\n    BEHAVIOR ||--o{ OUTPUT : "produces"\n    BEHAVIOR ||--o{ TRIGGER : "activated-by"\n    STATE ||--o{ SUBSCRIPTION : "notifies"\n    INPUT ||--|{ OUTPUT : "transforms-to"'})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);