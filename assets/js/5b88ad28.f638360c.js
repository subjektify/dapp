"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1747],{8582:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=t(4848),r=t(8453),s=t(1470),o=t(9365);const a={sidebar_position:3},l="Configuration",c={id:"learn/start/configuration",title:"Configuration",description:"After successfully installing Subjektify, configuring it to meet the specific needs of your decentralized application (dApp) is the next critical step. This guide will walk you through the basic configuration options available in Subjektify and how to customize them for your project.",source:"@site/docs/learn/start/configuration.md",sourceDirName:"learn/start",slug:"/learn/start/configuration",permalink:"/docs/learn/start/configuration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"learnSidebar",previous:{title:"Installation",permalink:"/docs/learn/start/installation"},next:{title:"Playground",permalink:"/docs/learn/start/playground"}},u={},d=[{value:"Getting Started with <code>subjektify.config.(js|ts)</code>",id:"getting-started-with-subjektifyconfigjsts",level:2},{value:"Basic Configuration",id:"basic-configuration",level:3},{value:"1. Define Your Namespace to something unique that describes your project.",id:"1-define-your-namespace-to-something-unique-that-describes-your-project",level:4},{value:"2. Set the Version following Semantic Versioning.",id:"2-set-the-version-following-semantic-versioning",level:4},{value:"3. Specify the License using an SPDX license identifier.",id:"3-specify-the-license-using-an-spdx-license-identifier",level:4},{value:"Advanced Configuration",id:"advanced-configuration",level:3},{value:"4. Configure Optional Fields",id:"4-configure-optional-fields",level:4},{value:"Author Information",id:"author-information",level:5},{value:"Blueprint Setting",id:"blueprint-setting",level:5},{value:"5. Include Specific Files",id:"5-include-specific-files",level:4},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"After successfully installing Subjektify, configuring it to meet the specific needs of your decentralized application (dApp) is the next critical step. This guide will walk you through the basic configuration options available in Subjektify and how to customize them for your project."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Check the ",(0,i.jsxs)(n.a,{href:"/docs/reference/subjektify/config",children:[(0,i.jsx)(n.code,{children:"subjektify.config.js"})," API reference"]})," for a complete list of options"]})}),"\n",(0,i.jsxs)(n.h2,{id:"getting-started-with-subjektifyconfigjsts",children:["Getting Started with ",(0,i.jsx)(n.code,{children:"subjektify.config.(js|ts)"})]}),"\n",(0,i.jsxs)(n.p,{children:["When you initialize a new project with Subjektify, a ",(0,i.jsx)(n.code,{children:"subjektify.config.js"})," (or ",(0,i.jsx)(n.code,{children:"subjektify.config.ts"})," for TypeScript) file is automatically created in your project's root directory. This file is the heart of your project's configuration, controlling how your application behaves and interacts with various components and the blockchain network."]}),"\n",(0,i.jsx)(n.h3,{id:"basic-configuration",children:"Basic Configuration"}),"\n",(0,i.jsx)(n.p,{children:"First, let\u2019s set up the basic configuration which involves defining the project\u2019s namespace, version, and the license."}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(o.A,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'module.exports = {\n    namespace: "my-dapp",\n    version: "1.0.0",\n    license: "MIT",\n    // Additional configurations...\n}\n'})})}),(0,i.jsx)(o.A,{value:"ts",label:"Typescript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'export default const config = {\n    namespace: "my-dapp",\n    version: "1.0.0",\n    license: "MIT",\n    // Additional configurations...\n}\n'})})})]}),"\n",(0,i.jsx)(n.h4,{id:"1-define-your-namespace-to-something-unique-that-describes-your-project",children:"1. Define Your Namespace to something unique that describes your project."}),"\n",(0,i.jsxs)(n.h4,{id:"2-set-the-version-following-semantic-versioning",children:["2. Set the Version following ",(0,i.jsx)(n.a,{href:"https://semver.org/",children:"Semantic Versioning"}),"."]}),"\n",(0,i.jsxs)(n.h4,{id:"3-specify-the-license-using-an-spdx-license-identifier",children:["3. Specify the License using an ",(0,i.jsx)(n.a,{href:"https://spdx.org/licenses/",children:"SPDX license identifier"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"advanced-configuration",children:"Advanced Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Now, let\u2019s dive into more complex settings that can help tailor your project."}),"\n",(0,i.jsx)(n.h4,{id:"4-configure-optional-fields",children:"4. Configure Optional Fields"}),"\n",(0,i.jsx)(n.p,{children:"These fields include settings for authorship, whether the project is a blueprint, and other key configurations that enhance project functionality."}),"\n",(0,i.jsx)(n.h5,{id:"author-information",children:"Author Information"}),"\n",(0,i.jsx)(n.p,{children:"If you want to provide authorship information:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Add"})," the ",(0,i.jsx)(n.code,{children:"author"})," key."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Include"})," your name or alias."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"author": "John Doe"\n'})}),"\n",(0,i.jsx)(n.h5,{id:"blueprint-setting",children:"Blueprint Setting"}),"\n",(0,i.jsx)(n.p,{children:"To use your project as a template for others:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Include"})," the ",(0,i.jsx)(n.code,{children:"blueprint"})," key."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Set"})," the value to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"blueprint": true\n'})}),"\n",(0,i.jsx)(n.h4,{id:"5-include-specific-files",children:"5. Include Specific Files"}),"\n",(0,i.jsx)(n.p,{children:"You might want to specify which files should be explicitly recognized by the project:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Add"})," the ",(0,i.jsx)(n.code,{children:"files"})," key."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"List"})," the paths to the files."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"files": ["contracts/MyContract.sol", "doc/MyDocument.md"]\n'})}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(n.p,{children:"You've just configured your Subjektify project! This setup forms the foundation of how your application will behave. As you grow more comfortable with Subjektify, you can explore additional configuration options in the API reference linked above. Happy building!"})]})}function f(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var i=t(4164);const r={tabItem:"tabItem_Ymn6"};var s=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(6540),r=t(4164),s=t(3104),o=t(6347),a=t(205),l=t(7485),c=t(1682),u=t(9466);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[c,d]=p({queryString:t,groupId:r}),[g,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),m=(()=>{const e=c??g;return f({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{m&&l(m)}),[m]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),j(e)}),[d,j,s]),tabValues:s}}var j=t(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function x(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=a[t].value;r!==i&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,b.jsx)(x,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function w(e){const n=(0,j.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);