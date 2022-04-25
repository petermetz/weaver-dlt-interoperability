"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[4330],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return r?a.createElement(b,o(o({ref:t},d),{},{components:r})):a.createElement(b,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2383:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"guide",title:"Using Weaver"},s=void 0,p={unversionedId:"external/getting-started/guide",id:"external/getting-started/guide",isDocsHomePage:!1,title:"Using Weaver",description:"\x3c!--",source:"@site/docs/external/getting-started/guide.md",sourceDirName:"external/getting-started",slug:"/external/getting-started/guide",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/guide",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/getting-started/guide.md",tags:[],version:"current",frontMatter:{id:"guide",title:"Using Weaver"},sidebar:"Documentation",previous:{title:"Weaver Framework",permalink:"/weaver-dlt-interoperability/docs/external/introduction"},next:{title:"Component Overview",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/overview"}},d=[],c={toc:d};function u(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The easiest way to understand how Weaver works is to run it at a small scale:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First, ",(0,i.kt)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/overview"},"launch a set of basic test networks")," built on Fabric and Corda. These networks offer the most basic capabilities of their DLT platforms and run toy applications (contracts and Layer-2) that can easily be tracked and debugged. You can launch these networks in one of several different ways: building Weaver components and dependencies locally or importing pre-built ones from Github packages, running core components in the host or in Docker containers. The choice depends on whether you just want to get these networks up and running or if you wish to customize the setup by modifying source code and configurations."),(0,i.kt)("li",{parentName:"ul"},"Once the test networks are launched, you can test two distinct kinds of interoperation modes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/interop/data-sharing"},"Data sharing"),": Fabric-Fabric and Fabric-Corda supported"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange"},"Asset exchange"),": Fabric-Fabric supported"))),(0,i.kt)("li",{parentName:"ul"},'(To bring down the test networks, go back to the "Setup" pages and follow instructions in the respective "Teardown" sections.)'),(0,i.kt)("li",{parentName:"ul"},'After you run these tests and get a flavor of how the system and protocols work, you will be ready to move on to "real" networks, enhancing them with interoperation capabilities by incorporating Weaver into them. Check out the guidelines and templates for ',(0,i.kt)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/enabling-weaver-network/fabric"},"Fabric"),", ",(0,i.kt)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/enabling-weaver-network/corda"},"Corda"),", and ",(0,i.kt)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/enabling-weaver-network/besu"},"Besu")," networks.")),(0,i.kt)("p",null,"If you wish to go further and understand Weaver specifics, dig into the code, or contribute to the open-source project, check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability"},"project repository"),". For specific information about individual Weaver components, see:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/core/relay/README.md"},"Relay")," module"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/core/drivers/fabric-driver/readme.md"},"Fabric")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/core/drivers/corda-driver/README.md"},"Corda")," drivers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/core/network/fabric-interop-cc/README.md"},"Fabric Interoperation Chaincode")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/core/network/corda-interop-app/README.md"},"Interoperation CorDapp")),(0,i.kt)("li",{parentName:"ul"},"Common ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/main/common/protos"},"protobufs"),": compiled in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/common/protos-js/README.md"},"JavaScript"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/common/protos-go/README.md"},"Golang"),", and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/common/protos-java-kt/README.md"},"Java")),(0,i.kt)("li",{parentName:"ul"},"Fabric Interoperation SDKs in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/sdks/fabric/interoperation-node-sdk/README.md"},"Node.js")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/sdks/fabric/go-sdk/readme.md"},"Golang")),(0,i.kt)("li",{parentName:"ul"},"Sample ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/main/samples/fabric"},"Fabric")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/main/samples/corda"},"Corda")," applications for experimentation and testing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/tests/network-setups/fabric/dev/README.md"},"Fabric"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/tests/network-setups/corda/README.md"},"Corda"),", and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/tests/network-setups/besu/README.md"},"Besu")," test network setups")),(0,i.kt)("p",null,"The Weaver ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/rfcs/README.md"},"RFCs")," contain detailed specifications of the models, data structures, protocols, and message formats."))}u.isMDXComponent=!0}}]);