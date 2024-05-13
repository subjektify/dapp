"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2778],{442:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=t(4848),r=t(8453),s=t(1470),i=t(9365);const o={sidebar_position:6},l="Subjekt Grammar",c={id:"reference/subjekt/grammar",title:"Subjekt Grammar",description:"Subjekt models are defined using either the Subjekt interface definition language (IDL) or the JSON abstract syntax tree (AST). This document defines the syntax and ABNF grammar for defining models using the Subjekt IDL.",source:"@site/docs/reference/subjekt/grammar.md",sourceDirName:"reference/subjekt",slug:"/reference/subjekt/grammar",permalink:"/docs/reference/subjekt/grammar",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"referenceSidebar",previous:{title:"Subject Traits",permalink:"/docs/reference/subjekt/traits/subject"},next:{title:"JSON AST",permalink:"/docs/reference/subjekt/ast"}},d={},u=[{value:"IDL Overview",id:"idl-overview",level:2},{value:"Language Components",id:"language-components",level:2},{value:"Comments",id:"comments",level:3},{value:"Metadata Block",id:"metadata-block",level:3},{value:"Shape Block",id:"shape-block",level:3},{value:"Lexical Notes",id:"lexical-notes",level:2},{value:"Subjects IDL ABNF",id:"subjects-idl-abnf",level:2},{value:"Whitepace",id:"whitepace",level:3},{value:"Comments",id:"comments-1",level:4},{value:"MetadataBlock",id:"metadatablock",level:3},{value:"ShapeBlock",id:"shapeblock",level:3},{value:"Shape ID",id:"shape-id",level:4},{value:"Node Values",id:"node-values",level:4},{value:"Traits",id:"traits",level:4}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"subjekt-grammar",children:"Subjekt Grammar"}),"\n",(0,a.jsxs)(n.p,{children:["Subjekt models are defined using either the Subjekt interface definition language (IDL) or the JSON abstract syntax tree (AST). This document defines the syntax and ",(0,a.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc5234.html",children:(0,a.jsx)(n.strong,{children:"ABNF grammar"})})," for defining models using the Subjekt IDL."]}),"\n",(0,a.jsx)(n.h2,{id:"idl-overview",children:"IDL Overview"}),"\n",(0,a.jsx)(n.p,{children:"The Subjekt IDL is made up of 3, ordered blocks, each of which is optional:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Metadata Block"}),": applies metadata to the entire model."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Use Block"}),": The use section of the IDL is used to import shapes into the current namespace so that they can be referred to using a relative shape ID."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Shape Block"}),": where shapes and traits are defined. The ",(0,a.jsx)(n.code,{children:"use"})," keyword can be defined before shapes or traits to refer to shapes in other namespaces using a shorter name."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The following example defines a basic model file:"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"subjekt",label:"Subjekt",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-subjekt",children:'// (1) Metadata block\nmetadata foo = "bar"\n\n// (2) Use block\n\nuse some.other.namespace#OtherString\n\n// (3) Shape block\n\nstructure MyStructure {\n    @required\n    referencedString: OtherString\n}\n'})})}),(0,a.jsx)(i.A,{value:"json",label:"JSON",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "metadata": {\n        "foo": "bar"\n    },\n    "shapes": {\n        "grams.example#MyStructure": {\n            "type": "structure",\n            "members": {\n                "foo": {\n                    "target": "some.other.namespace#MyString",\n                    "traits": {\n                        "subjects.core#required": {}\n                    }\n                }\n            }\n        }\n    }\n}\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"language-components",children:"Language Components"}),"\n",(0,a.jsx)(n.h3,{id:"comments",children:"Comments"}),"\n",(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.a,{href:"#comments-1",children:"comment"})," can appear at any place between tokens where whitespace ",(0,a.jsx)(n.a,{href:"#whitepace",children:"WS"})," can appear. Comments in Subjects are defined using two forward slashes followed by any character. A newline terminates a comment."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-subjekt",children:"// This is a comment\nstring MyString // This is also a comment\n\n/// This is documentation about a trait shape.\n///   More docs here.\n@trait\nstructure myTrait {}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"metadata-block",children:"Metadata Block"}),"\n",(0,a.jsxs)(n.p,{children:["The metadata block is utilized to apply untyped metadata across the entire Subject model. In a ",(0,a.jsx)(n.code,{children:"MetadataStatement"}),", a metadata key is defined, followed by ",(0,a.jsx)(n.code,{children:"="}),", and then the node value assigned to that key."]}),"\n",(0,a.jsx)(n.p,{children:"Here's an example of defining metadata in a Subject model:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-subjekt",children:'metadata greeting = "hello"\nmetadata "stringList" = ["a", "b", "c"]\n'})}),"\n",(0,a.jsx)(n.p,{children:"Metadata isn't confined within a namespace. Unquoted object property values are considered syntactic shape IDs and are inherently associated with the core Subjects namespace."}),"\n",(0,a.jsx)(n.p,{children:"For instance, in the Subjects IDL model:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-subjekt",children:"metadata exampleSyntacticShapeId = required\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"exampleSyntacticShapeId"})," resolves to the core Subjekt namespace, akin to ",(0,a.jsx)(n.code,{children:"subjekt.core#required"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"shape-block",children:"Shape Block"}),"\n",(0,a.jsx)(n.h2,{id:"lexical-notes",children:"Lexical Notes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Subjekt models MUST be encoded using UTF-8 and SHOULD use Unix style line endings ",(0,a.jsx)(n.code,{children:"\\n"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"The Subjekt ABNF is whitespace sensitive."}),"\n",(0,a.jsx)(n.li,{children:"Except for within strings, commas and semicolons in the Subjekt IDL are considered whitespaces. Commas can be used anywhere where they make the model easier to read (for example, in complex traits defined on a single line). While semicolons are usually added by developers at the end of each statement"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"subjects-idl-abnf",children:"Subjects IDL ABNF"}),"\n",(0,a.jsxs)(n.p,{children:["The Subjects IDL is defined by the following ABNF which uses case-sensitive string support defined in ",(0,a.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7405.html",children:"RFC 7405"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-abnf",children:"IDL = \n    [ WS ] MetadataBlock ShapeBlock\n"})}),"\n",(0,a.jsx)(n.h3,{id:"whitepace",children:"Whitepace"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-abnf",children:'WS =\n    1*(SP / NL / Comment / Comma) ; whitespace\n\nComma =\n    "," ; the comma character\n\nSP =\n    1*(%x20 / %x09) ; one or more spaces or tabs\n\nNL =\n    %x0A / %x0D.0A ; Newline: \\n and \\r\\n\n\nNotNL =\n    %x09 / %x20-10FFFF ; Any character except newline\n\nBR =\n    [SP] 1*(Comment / NL) [WS]; line break followed by whitespace\n'})}),"\n",(0,a.jsx)(n.h4,{id:"comments-1",children:"Comments"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-abnf",children:'Comment =\n    DocumentationComment / LineComment\n\nDocumentationComment =\n    "///" *NotNL NL\n\nLineComment =\n    "//" [(%x09 / %x20-2E / %x30-10FFF) *NotNL] NL ; First character after "//" can\'t be "/"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"metadatablock",children:"MetadataBlock"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-abnf",children:'MetadataBlock =\n    *(MetadataStatement)\n\nMetadataStatement =\n    %s"metadata" SP NodeObjectKey [SP] "=" [SP] NodeValue BR\n'})}),"\n",(0,a.jsx)(n.h3,{id:"shapeblock",children:"ShapeBlock"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-abnf",children:'ShapeBlock =\n    [NamespaceStatement UseSection [ShapeStatements]]\n\nNamespaceStatement =\n    %s"namespace" SP Namespace BR\n\nUseSection =\n    *(UseStatement)\n\nUseStatement =\n    %s"use" SP AbsoluteRootShapeId BR\n\nShapeStatements =\n    ShapeOrApplyStatement *(BR ShapeOrApplyStatement)\n\nShapeOrApplyStatement =\n    ShapeStatement / ApplyStatement\n\nShapeStatement =\n    TraitStatements Shape\n\nShape =\n    SimpleShape\n  / EnumShape\n  / AggregateShape\n  / EntityShape\n  / OperationShape\n\nSimpleShape =\n    SimpleTypeName SP Identifier [Mixins]\n\nSimpleTypeName =\n    %s"blob" / %s"boolean" / %s"document" / %s"string"\n  / %s"byte" / %s"short" / %s"integer" / %s"long"\n  / %s"float" / %s"double" / %s"bigInteger"\n  / %s"bigDecimal" / %s"timestamp"\n\nMixins =\n    [SP] %s"with" [WS] "[" [WS] 1*(ShapeId [WS]) "]"\n\nEnumShape =\n    EnumTypeName SP Identifier [Mixins] [WS] EnumShapeMembers\n\nEnumTypeName =\n    %s"enum" / %s"intEnum"\n\nEnumShapeMembers =\n    "{" [WS] 1*(EnumShapeMember [WS]) "}"\n\nEnumShapeMember =\n    TraitStatements Identifier [ValueAssignment]\n\nValueAssignment =\n    [SP] "=" [SP] NodeValue [SP] [Comma] BR\n\nAggregateShape =\n    AggregateTypeName SP Identifier [ForResource] [Mixins]\n     [WS] ShapeMembers\n\nAggregateTypeName =\n    %s"list" / %s"map" / %s"union" / %s"structure"\n\nForResource =\n    SP %s"for" SP ShapeId\n\nShapeMembers =\n    "{" [WS] *(ShapeMember [WS]) "}"\n\nShapeMember =\n    TraitStatements (ExplicitShapeMember / ElidedShapeMember)\n     [ValueAssignment]\n\nExplicitShapeMember =\n    Identifier [SP] ":" [SP] ShapeId\n\nElidedShapeMember =\n    "$" Identifier\n\nEntityShape =\n    EntityTypeName SP Identifier [Mixins] [WS] NodeObject\n\nEntityTypeName =\n    %s"service" / %s"resource"\n\nOperationShape =\n    %s"operation" SP Identifier [Mixins] [WS] OperationBody\n\nOperationBody =\n    "{" [WS] *(OperationProperty [WS]) "}"\n\nOperationProperty =\n    OperationInput / OperationOutput / OperationErrors\n\nOperationInput =\n    %s"input" [WS] (InlineAggregateShape / (":" [WS] ShapeId))\n\nOperationOutput =\n    %s"output" [WS] (InlineAggregateShape / (":" [WS] ShapeId))\n\nOperationErrors =\n    %s"errors" [WS] ":" [WS] "[" [WS] *(ShapeId [WS]) "]"\n\nInlineAggregateShape =\n    ":=" [WS] TraitStatements [ForResource] [Mixins]\n     [WS] ShapeMembers\n'})}),"\n",(0,a.jsx)(n.h4,{id:"shape-id",children:"Shape ID"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-abnf",children:'ShapeId =\n    RootShapeId [ShapeIdMember]\n\nRootShapeId =\n    AbsoluteRootShapeId / Identifier\n\nAbsoluteRootShapeId =\n    Namespace "#" Identifier\n\nNamespace =\n    Identifier *("." Identifier)\n\nIdentifier =\n    IdentifierStart *IdentifierChars\n\nIdentifierStart =\n    (1*"_" (ALPHA / DIGIT)) / ALPHA\n\nIdentifierChars =\n    ALPHA / DIGIT / "_"\n\nShapeIdMember =\n    "$" Identifier\n'})}),"\n",(0,a.jsx)(n.h4,{id:"node-values",children:"Node Values"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-abnf",children:'NodeValue =\n    NodeArray\n  / NodeObject\n  / Number\n  / NodeKeyword\n  / NodeStringValue\n\nNodeArray =\n    "[" [WS] *(NodeValue [WS]) "]"\n\nNodeObject =\n    "{" [WS] [NodeObjectKvp *(WS NodeObjectKvp)] [WS] "}"\n\nNodeObjectKvp =\n    NodeObjectKey [WS] ":" [WS] NodeValue\n\nNodeObjectKey =\n    QuotedText / Identifier\n\nNumber =\n    [Minus] Int [Frac] [Exp]\n\nDecimalPoint =\n    %x2E ; .\n\nDigitOneToNine =\n    %x31-39 ; 1-9\n\nE =\n    %x65 / %x45 ; e E\n\nExp =\n    E [Minus / Plus] 1*DIGIT\n\nFrac =\n    DecimalPoint 1*DIGIT\n\nInt =\n    Zero / (DigitOneToNine *DIGIT)\n\nMinus =\n    %x2D ; -\n\nPlus =\n    %x2B ; +\n\nZero =\n    %x30 ; 0\n\nNodeKeyword =\n    %s"true" / %s"false" / %s"null"\n\nNodeStringValue =\n    ShapeId / TextBlock / QuotedText\n\nQuotedText =\n    DQUOTE *QuotedChar DQUOTE\n\nQuotedChar =\n    %x09        ; tab\n  / %x20-21     ; space - "!"\n  / %x23-5B     ; "#" - "["\n  / %x5D-10FFFF ; "]"+\n  / EscapedChar\n  / NL\n\nEscapedChar =\n    Escape (Escape / DQUOTE / %s"b" / %s"f"\n             / %s"n" / %s"r" / %s"t" / "/"\n             / UnicodeEscape)\n\nUnicodeEscape =\n    %s"u" Hex Hex Hex Hex\n\nHex =\n    DIGIT / %x41-46 / %x61-66\n\nEscape =\n    %x5C ; backslash\n\nTextBlock =\n    ThreeDquotes [SP] NL *TextBlockContent ThreeDquotes\n\nTextBlockContent =\n    QuotedChar / (1*2DQUOTE 1*QuotedChar)\n\nThreeDquotes =\n    DQUOTE DQUOTE DQUOTE\n'})}),"\n",(0,a.jsx)(n.h4,{id:"traits",children:"Traits"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-abnf",children:'TraitStatements =\n    *(Trait [WS])\n\nTrait =\n    "@" ShapeId [TraitBody]\n\nTraitBody =\n    "(" [WS] [TraitStructure / TraitNode] ")"\n\nTraitStructure =\n    1*(NodeObjectKvp [WS])\n\nTraitNode =\n    NodeValue [WS]\n\nApplyStatement =\n    ApplyStatementSingular / ApplyStatementBlock\n\nApplyStatementSingular =\n    %s"apply" SP ShapeId WS Trait\n\nApplyStatementBlock =\n    %s"apply" SP ShapeId WS "{" [WS] TraitStatements "}"\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var a=t(4164);const r={tabItem:"tabItem_Ymn6"};var s=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>I});var a=t(6540),r=t(4164),s=t(3104),i=t(6347),o=t(205),l=t(7485),c=t(1682),d=t(9466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function S(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:r}),[S,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),f=(()=>{const e=c??S;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function g(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(c(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=S(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function I(e){const n=(0,b.A)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(6540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);