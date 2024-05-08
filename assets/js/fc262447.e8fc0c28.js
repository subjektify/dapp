"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7323],{5800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=n(4848),r=n(8453);const s={sidebar_position:3},o="Getting Started",a={id:"learn/start/index",title:"Getting Started",description:"Welcome to your first steps in building decentralized applications (dApps) with Subjektify in the Web3 ecosystem. This guide is designed to help you set up your development environment, familiarize you with Subjektify's tools, and walk you through the creation of your first dApp.",source:"@site/docs/learn/start/index.md",sourceDirName:"learn/start",slug:"/learn/start/",permalink:"/docs/learn/start/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"learnSidebar",previous:{title:"Learn Subjektify",permalink:"/docs/learn/"},next:{title:"Subjektify",permalink:"/docs/learn/subjektify/"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Installing Subjektify CLI",id:"step-1-installing-subjektify-cli",level:2},{value:"Step 2: Create Your First dApp",id:"step-2-create-your-first-dapp",level:2},{value:"Step 3: Explore the Project Structure",id:"step-3-explore-the-project-structure",level:2},{value:"Step 4: Compile and Deploy Your Smart Contract",id:"step-4-compile-and-deploy-your-smart-contract",level:2},{value:"Step 5: Interacting with Your dApp",id:"step-5-interacting-with-your-dapp",level:2},{value:"Step 6: Next Steps",id:"step-6-next-steps",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(t.p,{children:"Welcome to your first steps in building decentralized applications (dApps) with Subjektify in the Web3 ecosystem. This guide is designed to help you set up your development environment, familiarize you with Subjektify's tools, and walk you through the creation of your first dApp."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"Before you begin, ensure you have the following prerequisites installed on your computer:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Node.js"}),": ",(0,i.jsx)(t.a,{href:"https://nodejs.org/en/",children:"Download and install Node.js"}),", which includes npm (node package manager)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Git"}),": ",(0,i.jsx)(t.a,{href:"https://git-scm.com/downloads",children:"Install Git"})," for version control."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Text Editor"}),": Although any text editor will work, we recommend ",(0,i.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})," for its robust support for JavaScript and Solidity."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"step-1-installing-subjektify-cli",children:"Step 1: Installing Subjektify CLI"}),"\n",(0,i.jsx)(t.p,{children:"Subjektify CLI is a powerful command-line tool that simplifies the process of initializing, developing, and managing your dApp projects."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm install -g subjektify\n"})}),"\n",(0,i.jsx)(t.p,{children:"This command installs the Subjektify CLI globally on your system, allowing you to access it from anywhere in your command line or terminal."}),"\n",(0,i.jsx)(t.h2,{id:"step-2-create-your-first-dapp",children:"Step 2: Create Your First dApp"}),"\n",(0,i.jsx)(t.p,{children:"Once Subjektify CLI is installed, you can create a new project by running:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"subjektify init my-first-dapp\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This command sets up a new dApp project named ",(0,i.jsx)(t.code,{children:"my-first-dapp"})," in a directory with the same name. The setup includes all necessary configurations and a sample smart contract to get you started."]}),"\n",(0,i.jsx)(t.h2,{id:"step-3-explore-the-project-structure",children:"Step 3: Explore the Project Structure"}),"\n",(0,i.jsx)(t.p,{children:"Navigate into your project directory to see the structure that Subjektify CLI has generated."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"cd my-first-dapp\n"})}),"\n",(0,i.jsx)(t.p,{children:"You'll find several files and directories:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"contracts/"}),": Contains your smart contracts written in Solidity."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"subjects/"}),": Contains your subjects written in Subjekt."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"test/"}),": Test scripts for your smart contracts and subjects."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"subjektify.json"}),": Configuration file for Subjektify projects."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"step-4-compile-and-deploy-your-smart-contract",children:"Step 4: Compile and Deploy Your Smart Contract"}),"\n",(0,i.jsx)(t.p,{children:"To compile your smart contracts, run:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"subjektify compile\n"})}),"\n",(0,i.jsx)(t.p,{children:"After compiling, deploy your contracts to a local blockchain for testing:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"subjektify deploy\n"})}),"\n",(0,i.jsx)(t.h2,{id:"step-5-interacting-with-your-dapp",children:"Step 5: Interacting with Your dApp"}),"\n",(0,i.jsx)(t.p,{children:"With your contracts deployed, you can interact with them through the Subjektify CLI or by integrating with a frontend interface. Testing the functionality of your smart contracts is crucial before moving to production."}),"\n",(0,i.jsx)(t.h2,{id:"step-6-next-steps",children:"Step 6: Next Steps"}),"\n",(0,i.jsx)(t.p,{children:"Now that you have a basic dApp running, consider the following to expand your project:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Learn More About Smart Contract Development"}),": Dive deeper into Solidity and smart contract design patterns."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Connect a Frontend"}),": Use frameworks like React or Vue.js to create a user interface for your dApp."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Explore Advanced Features"}),": Look into more sophisticated features of Subjektify, such as plugins for additional functionalities."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);