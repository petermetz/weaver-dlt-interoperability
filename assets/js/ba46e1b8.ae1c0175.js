"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[8214],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3527:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={id:"introduction",title:"Weaver Framework"},o=void 0,s={unversionedId:"external/introduction",id:"external/introduction",isDocsHomePage:!1,title:"Weaver Framework",description:"\x3c!--",source:"@site/docs/external/introduction.md",sourceDirName:"external",slug:"/external/introduction",permalink:"/weaver-dlt-interoperability/docs/external/introduction",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"Weaver Framework"},sidebar:"Documentation",next:{title:"Using Weaver",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/guide"}},l=[],c={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Weaver is a framework that enables scalable interconnectivity between disparate distributed ledgers in a manner that preserves core tenets of decentralisation and security.\nThe framework, consisting of a family of protocols, is designed and built with the following key guiding principles, which are further discussed in ",(0,a.kt)("a",{parentName:"p",href:"/weaver-dlt-interoperability/docs/external/design-principles"},"Design Principles"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Inclusiveness"),": Avoid approaches that are specific to a particular DLT implementation and design."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Independence"),": Interoperable networks retain sovereignty on their own processes and access control rules."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Minimum Trust"),": Reduce trust to only what is essentials (i.e. identity providers in the network)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Privacy by Design"),": Interaction between parties across networks should be kept private and confidential and revealed only to the interested parties."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"No Intermediaries"),": No third-party intermediary should be relied upon for the purpose of cross-network data verification or settlement."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Minimal Shared Infrastructure"),": Rely on external infrastucture only for discovery, identification, and tracking/auditing, and not for cross-network transactions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Leverage Consensus"),": Use the respective ledgers' native distributed consensus mechanisms as the trust basis for cross-network transactions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Non-Intrusion"),": Require no changes to the DLT platforms and consensus mechanisms on which the networks are built, nor any dilution of the networks' security models."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Transparency"),": Facilitate tracking and auditing of cross-network transactions.")),(0,a.kt)("p",null,"The protocol is designed around the following key elements:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"State Proofs"),": these allow a network to independently verify that any state it consumes from another network is valid according to the rules and policies of that network, or adheres to validity policies it imposes on state from that network."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Asset Locks and Claims"),": these allow a network to freeze an asset for a given time period on behalf of a user or allow a user to claim a frozen asset from its previous owner, either within a network or from a different network."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Relays"),": these are decentralised peer-to-peer services that enable communication of messages between networks.")),(0,a.kt)("p",null,"Weaver has a specification outlined through a set of ",(0,a.kt)("a",{parentName:"p",href:"/weaver-dlt-interoperability/docs/external/specifications"},"RFCs")," and a reference implementation of that specification, which is discussed in this documentation."))}p.isMDXComponent=!0}}]);