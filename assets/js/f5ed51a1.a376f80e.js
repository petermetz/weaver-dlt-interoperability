"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[8492],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3005:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"levels-of-interoperability",title:"Levels of Interoperability"},s=void 0,c={unversionedId:"external/what-is-interoperability/levels-of-interoperability",id:"external/what-is-interoperability/levels-of-interoperability",isDocsHomePage:!1,title:"Levels of Interoperability",description:"\x3c!--",source:"@site/docs/external/what-is-interoperability/levels-of-interoperability.md",sourceDirName:"external/what-is-interoperability",slug:"/external/what-is-interoperability/levels-of-interoperability",permalink:"/weaver-dlt-interoperability/docs/external/what-is-interoperability/levels-of-interoperability",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/what-is-interoperability/levels-of-interoperability.md",tags:[],version:"current",frontMatter:{id:"levels-of-interoperability",title:"Levels of Interoperability"},sidebar:"Documentation",previous:{title:"Understanding Interoperability",permalink:"/weaver-dlt-interoperability/docs/external/what-is-interoperability/understanding-interoperability"},next:{title:"Integration Patterns",permalink:"/weaver-dlt-interoperability/docs/external/what-is-interoperability/integration-patterns"}},p=[],u={toc:p};function d(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Established models of information systems interoperability stratify interoperability concerns into multiple levels. This includes technical, syntactic, semantic and application levels as shown below. "),(0,a.kt)("p",null,"Above the protocol and application levels there are two additional levels that require careful attention when enabling interoperability. These cover governance and policy decisions when communicating state as well as the legal and regulatory implications of networks under different jurisdictions."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5896).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Technical"),": The technical level is a low-level concern that focuses on the underlying wire protocol used for communication. Examples of protocols at this level include gRPC, Apache Thrift, ASN.1 and CBOR. Protocols at this level are point-to-point and addresses additional concerns such as version negotiation and message delivery guarantees.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Syntactic"),": The syntactic level is concerned with the structure and format of the messages exchanged. This includes protocol elements such as keywords and types. Examples include protocols defined using Google's Protocol Buffers, JSON-RPC and ASN.1.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Semantic"),": The semantic level provides meaning to the messages exchanged. In the context of cross-chain communication, this includes messages that represent a data transfer or an asset exchange as well as other information such as validity proofs and actors involved.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Application"),": The application level addresses domain or use-case specific concerns. In this level, interoperability deals with industry standard data models (e.g. supply chain standards such as GS1) and business processes. This level is orthogonal to the technology concerns of interoperability.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Governance and Policies"),": The governing members of a ledger play a critical role in extending business processes to external systems. Interoperability necessitates that the governing bodies of the respective systems agree on the nature of their collaboration. The policies enforce these decisions and covers aspects such as access control and conditions for determining the validity of state proofs.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Legal and Regulation"),": Networks residing in different jurisdictions must be comply with existing laws and regulations when communicating state."))))}d.isMDXComponent=!0},5896:function(e,t,n){t.Z=n.p+"assets/images/levels-of-interoperability-9646e330e0bf206ef88eeefacc841185.jpg"}}]);