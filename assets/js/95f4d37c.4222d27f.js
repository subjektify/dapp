"use strict";(self.webpackChunkdapp=self.webpackChunkdapp||[]).push([[814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||o;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},r="Develop with Subjektify",l={unversionedId:"develop/index",id:"develop/index",title:"Develop with Subjektify",description:"Welcome to the comprehensive development guide for Subjektify, your go-to toolkit for building decentralized applications (dApps) with a focus on efficiency, flexibility, and robustness. This guide is intended to serve as your foundational resource for understanding and leveraging the extensive features and capabilities that Subjektify offers. Whether you're a seasoned blockchain developer or new to the dApp landscape, this guide will equip you with the knowledge and tools you need to build scalable and secure decentralized applications.",source:"@site/docs/develop/index.md",sourceDirName:"develop",slug:"/develop/",permalink:"/docs/develop/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",next:{title:"Get Started",permalink:"/docs/develop/start/"}},s={},d=[{value:"Subjektify: The Build System and Toolkit",id:"subjektify-the-build-system-and-toolkit",level:2},{value:"Why Subjektify?",id:"why-subjektify",level:3},{value:"Example: Quick Setup",id:"example-quick-setup",level:3},{value:"Understanding <code>subjektify.json</code>",id:"understanding-subjektifyjson",level:3},{value:"Subjekt: The Interface Definition Language",id:"subjekt-the-interface-definition-language",level:2},{value:"The Importance of Interface Definition",id:"the-importance-of-interface-definition",level:3},{value:"Example: Defining a Simple Subject",id:"example-defining-a-simple-subject",level:3}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"develop-with-subjektify"},"Develop with Subjektify"),(0,a.kt)("p",null,"Welcome to the comprehensive development guide for Subjektify, your go-to toolkit for building decentralized applications (dApps) with a focus on efficiency, flexibility, and robustness. This guide is intended to serve as your foundational resource for understanding and leveraging the extensive features and capabilities that Subjektify offers. Whether you're a seasoned blockchain developer or new to the dApp landscape, this guide will equip you with the knowledge and tools you need to build scalable and secure decentralized applications."),(0,a.kt)("h2",{id:"subjektify-the-build-system-and-toolkit"},"Subjektify: The Build System and Toolkit"),(0,a.kt)("p",null,"Subjektify is a meticulously crafted toolkit designed to remove the complexities and bottlenecks commonly encountered in dApp development. It provides you with a unified suite of tools and utilities that not only streamline your development workflow but also enable you to focus on what matters most: innovation and user experience."),(0,a.kt)("h3",{id:"why-subjektify"},"Why Subjektify?"),(0,a.kt)("p",null,"The landscape of dApp development is fraught with challenges, from managing smart contracts to ensuring a secure and user-friendly interface. Subjektify addresses these challenges head-on, offering a seamless development experience that lets you concentrate on building feature-rich, high-performance dApps."),(0,a.kt)("h3",{id:"example-quick-setup"},"Example: Quick Setup"),(0,a.kt)("p",null,"Starting a new dApp project is incredibly simple with Subjektify. With just a single command, you can scaffold a new project, complete with all the configurations and boilerplate code you'll need:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx subjektify create my.dapp\n")),(0,a.kt)("p",null,"This command initializes a new dApp project in a directory named ",(0,a.kt)("inlineCode",{parentName:"p"},"my.dapp"),", pre-configured and ready for development."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Subjektify also allows you to leverage existing ",(0,a.kt)("a",{parentName:"p",href:"https://blueprints.subjektify.dev"},"Blueprints")," to jumpstart your project. For example, to create a new dApp with a React frontend and Truffle for smart contract management, you can use:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx subjektify create my.dapp -b subjektify/react.truffle\n"))),(0,a.kt)("h3",{id:"understanding-subjektifyjson"},"Understanding ",(0,a.kt)("inlineCode",{parentName:"h3"},"subjektify.json")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"subjektify.json")," file serves as the configuration hub for your dApp project. It contains various settings and parameters that dictate how Subjektify should handle different aspects of your project, from compilation and deployment to testing and interaction. This file is automatically generated when you create a new project and can be customized to suit the specific needs of your dApp."),(0,a.kt)("h2",{id:"subjekt-the-interface-definition-language"},"Subjekt: The Interface Definition Language"),(0,a.kt)("p",null,"While Subjektify acts as your all-in-one toolkit for building, deploying, and managing dApps, ",(0,a.kt)("a",{parentName:"p",href:"/docs/subjekt"},"Subjekt")," is the specialized interface definition language that complements it. Subjekt allows you to define the data structures, states, and behaviors that form the backbone of your dApp's logic in a language-agnostic manner."),(0,a.kt)("h3",{id:"the-importance-of-interface-definition"},"The Importance of Interface Definition"),(0,a.kt)("p",null,"In a decentralized application, clear and unambiguous interfaces are crucial for secure and effective communication between different components, be it smart contracts, frontend interfaces, or off-chain services. Subjekt provides a standardized way to define these interfaces, ensuring that all components of your dApp can interact seamlessly."),(0,a.kt)("h3",{id:"example-defining-a-simple-subject"},"Example: Defining a Simple Subject"),(0,a.kt)("p",null,"Here's how you can define a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"subject")," interface using Subjekt:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-subjekt"},'subject Tree {\n    version: "1.0.0"\n    states: [Dimensions]\n    behaviors: [CutTree]\n}\n\nstate Dimensions {\n    length: string\n    radius: double\n}\n\nbehavior CutTree\n')),(0,a.kt)("p",null,"In this example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Tree")," subject is defined with a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dimensions")," state that includes properties like ",(0,a.kt)("inlineCode",{parentName:"p"},"length")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"radius"),", and a ",(0,a.kt)("inlineCode",{parentName:"p"},"CutTree")," behavior that could encapsulate the logic for cutting down the tree."),(0,a.kt)("p",null,"By clearly separating the roles of interface definition (via Subjekt) and build and deployment processes (via Subjektify), we offer a modular, scalable, and efficient approach to dApp development. This separation ensures that you have the flexibility to define complex data structures, behaviors, and interactions in Subjekt, while Subjektify takes care of the heavy lifting involved in building, deploying, and managing your dApp."))}c.isMDXComponent=!0}}]);