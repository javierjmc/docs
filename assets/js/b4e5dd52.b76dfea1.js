"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5442],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4342:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:4},l="Entry points",c={unversionedId:"smart-contracts/entry-points",id:"smart-contracts/entry-points",title:"Entry points",description:"Entry points, or handlers are where messages or queries are handled by the contract.",source:"@site/docs/04-smart-contracts/04-entry-points.md",sourceDirName:"04-smart-contracts",slug:"/smart-contracts/entry-points",permalink:"/docs/1.0/smart-contracts/entry-points",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/04-smart-contracts/04-entry-points.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Complex State and Maps",permalink:"/docs/1.0/smart-contracts/state/complex-state"},next:{title:"Query",permalink:"/docs/1.0/smart-contracts/query"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"entry-points"},"Entry points"),(0,i.kt)("p",null,"Entry points, or ",(0,i.kt)("em",{parentName:"p"},"handlers")," are where messages or queries are handled by the contract."),(0,i.kt)("p",null,"All three of the functions we will be talking about are explicitly flagged as entry points, and excluded from being\nbundled in the library:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg_attr(not(feature = "library"), entry_point)]\npub fn instantiate(\n  deps: DepsMut,\n  _env: Env,\n  _info: MessageInfo,\n  msg: InstantiateMsg,\n) -> Result<Response, StdError> {\n  // ...etc\n}\n')),(0,i.kt)("p",null,"These handlers are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Instantiate messages, as defined by the ",(0,i.kt)("inlineCode",{parentName:"li"},"InstantiateMsg")," struct, are handled by ",(0,i.kt)("inlineCode",{parentName:"li"},"instantiate"),"."),(0,i.kt)("li",{parentName:"ol"},"Messages, as defined by the ",(0,i.kt)("inlineCode",{parentName:"li"},"ExecuteMsg")," enum, are handled by the ",(0,i.kt)("inlineCode",{parentName:"li"},"execute")," function, using a\npattern-matching ",(0,i.kt)("inlineCode",{parentName:"li"},"match")," statement."),(0,i.kt)("li",{parentName:"ol"},"Queries, as defined by the ",(0,i.kt)("inlineCode",{parentName:"li"},"QueryMsg")," enum, are handled by the ",(0,i.kt)("inlineCode",{parentName:"li"},"query")," function, using a pattern-match.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"execute")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," must exhaustively match every variant in the enums they handle, while ",(0,i.kt)("inlineCode",{parentName:"p"},"instantiate")," only has to\ndeal with the struct it is passed."),(0,i.kt)("p",null,"Typically, ",(0,i.kt)("inlineCode",{parentName:"p"},"instantiate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," have the type ",(0,i.kt)("inlineCode",{parentName:"p"},"Result<Response, ContractError>"),", while ",(0,i.kt)("inlineCode",{parentName:"p"},"query"),"\nhas ",(0,i.kt)("inlineCode",{parentName:"p"},"StdResult<Binary>")," due to the underlying Cosmos SDK ",(0,i.kt)("inlineCode",{parentName:"p"},"Querier"),"."))}d.isMDXComponent=!0}}]);