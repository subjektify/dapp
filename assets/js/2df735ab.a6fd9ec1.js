"use strict";(self.webpackChunkdapp=self.webpackChunkdapp||[]).push([[1110],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(b,o(o({ref:t},p),{},{components:a})):n.createElement(b,o({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6503:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2},o="Quick Start",l={unversionedId:"subjekt/start",id:"subjekt/start",title:"Quick Start",description:"This document is a tutorial that introduces the Subjekt interface definition language (IDL). By reading this tutorial, you will learn:",source:"@site/docs/subjekt/start.md",sourceDirName:"subjekt",slug:"/subjekt/start",permalink:"/docs/subjekt/start",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"subjektSidebar",previous:{title:"Subjekt",permalink:"/docs/subjekt/"},next:{title:"Subjekt Specification",permalink:"/docs/subjekt/specification/"}},s={},u=[{value:"What is Subjekt?",id:"what-is-subjekt",level:2},{value:"Shapes and Traits",id:"shapes-and-traits",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"This document is a tutorial that introduces the Subjekt interface definition language (IDL). By reading this tutorial, you will learn:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How to create a Subjekt model"),(0,r.kt)("li",{parentName:"ul"},"How to define shapes, including Subjects, and contract shapes"),(0,r.kt)("li",{parentName:"ul"},"How to apply traits to shapes")),(0,r.kt)("h2",{id:"what-is-subjekt"},"What is Subjekt?"),(0,r.kt)("p",null,"Subjekt is an interface definition language allows developers to build decentralized applications. Subjekt models define a subject as a collection of state, behaviors, and shapes. A Subjekt model enables dApp developers to generate contracts and clients in various programming languages, API documentation, test automation, and blueprints for others to use."),(0,r.kt)("h2",{id:"shapes-and-traits"},"Shapes and Traits"),(0,r.kt)("p",null,"Subjekt models are composed of shapes and traits. Shapes serve as instances of types that define the structure and behavior of your subjects. Traits, on the other hand, are annotations that provide additional information or behavior to shapes, enhancing their utility for clients, subjects, or documentation."),(0,r.kt)("p",null,"Here's a table outlining the types of shapes supported in Subjekt:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Shape Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subject")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines a subject, which is a core unit of functionality in Subjekt.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"state")),(0,r.kt)("td",{parentName:"tr",align:null},"Describes the state of a subject, including its properties.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"behavior")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the behavior or methods that a subject can perform.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"version")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the version of a subject or state.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enum")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines an enumeration, a set of named values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"list")),(0,r.kt)("td",{parentName:"tr",align:null},"Describes a list of a specific type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map")),(0,r.kt)("td",{parentName:"tr",align:null},"Describes a map of key-value pairs, where both key and value are of specific types.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"union")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines a shape that can be one of several types.")))),(0,r.kt)("p",null,"Each shape can be further annotated with traits to provide additional metadata or behavior. Traits are a powerful feature in Subjekt that allow you to customize the behavior and characteristics of your shapes, making your Subjekt models more expressive and flexible."))}c.isMDXComponent=!0}}]);