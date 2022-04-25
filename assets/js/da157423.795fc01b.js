"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[3395],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=p(a),m=n,u=k["".concat(s,".").concat(m)]||k[m]||d[m]||l;return a?r.createElement(u,i(i({ref:t},c),{},{components:a})):r.createElement(u,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1253:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],o={id:"data-sharing",title:"Data Sharing",pagination_prev:"external/getting-started/interop/overview",pagination_next:"external/getting-started/enabling-weaver-network/overview"},s=void 0,p={unversionedId:"external/getting-started/interop/data-sharing",id:"external/getting-started/interop/data-sharing",isDocsHomePage:!1,title:"Data Sharing",description:"\x3c!--",source:"@site/docs/external/getting-started/interop/data-sharing.md",sourceDirName:"external/getting-started/interop",slug:"/external/getting-started/interop/data-sharing",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/interop/data-sharing",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/getting-started/interop/data-sharing.md",tags:[],version:"current",frontMatter:{id:"data-sharing",title:"Data Sharing",pagination_prev:"external/getting-started/interop/overview",pagination_next:"external/getting-started/enabling-weaver-network/overview"},sidebar:"Documentation",previous:{title:"Testing Interoperation Modes",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/interop/overview"},next:{title:"Enabling Weaver in Existing DLT Applications",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/enabling-weaver-network/overview"}},c=[{value:"Corda to Corda",id:"corda-to-corda",children:[],level:2},{value:"Corda to Fabric",id:"corda-to-fabric",children:[],level:2},{value:"Fabric to Corda",id:"fabric-to-corda",children:[],level:2},{value:"Fabric to Fabric",id:"fabric-to-fabric",children:[],level:2}],d={toc:c};function k(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This document lists sample ways in which you can exercise the data-sharing interoperation protocol on the test network ",(0,l.kt)("a",{parentName:"p",href:"../test-network/overview"},"launched earlier"),"."),(0,l.kt)("p",null,"Once the networks, relays, and drivers have been launched, and the ledgers bootstrapped, you can trigger four different interoperation flows corresponding to distinct data-sharing combinations as follows:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Corda to Corda"),": Either Corda network requests state and proof from another Corda network"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Corda to Fabric"),": The Corda network requests state and proof from either Fabric network"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Fabric to Corda"),": Either Fabric network requests state and proof from the Corda network"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Fabric to Fabric"),": One Fabric network requests state and proof from another Fabric network")),(0,l.kt)("p",null,"We assume that one of the following chaincodes have been deployed in either Fabric network you are testing with:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"simplestate")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"simplestatewithacl"))),(0,l.kt)("h2",{id:"corda-to-corda"},"Corda to Corda"),(0,l.kt)("p",null,"To test the scenario where ",(0,l.kt)("inlineCode",{parentName:"p"},"Corda_Network")," requests the value of the state (key) ",(0,l.kt)("inlineCode",{parentName:"p"},"H")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"Corda_Network2"),", do the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"(",(0,l.kt)("em",{parentName:"li"},"Make sure the following are running"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Corda_Network"),", relay, and driver; ",(0,l.kt)("inlineCode",{parentName:"li"},"Corda_Network2"),", relay, and driver)"),(0,l.kt)("li",{parentName:"ul"},"Navigate to the ",(0,l.kt)("inlineCode",{parentName:"li"},"samples/corda/corda-simple-application")," folder."),(0,l.kt)("li",{parentName:"ul"},"Run the following:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in the host machine:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Without TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NETWORK_NAME=Corda_Network CORDA_PORT=10006 ./clients/build/install/clients/bin/clients request-state localhost:9081 localhost:9082/Corda_Network2/localhost:30006#com.cordaSimpleApplication.flow.GetStateByKey:H\n"))),(0,l.kt)("li",{parentName:"ul"},"With TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"RELAY_TLS=true RELAY_TLSCA_CERT_PATHS=../../../core/relay/credentials/fabric_ca_cert.pem NETWORK_NAME=Corda_Network CORDA_PORT=10006 ./clients/build/install/clients/bin/clients request-state localhost:9081 localhost:9082/Corda_Network2/localhost:30006#com.cordaSimpleApplication.flow.GetStateByKey:H\n"))))),(0,l.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in Docker containers:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Without TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NETWORK_NAME=Corda_Network CORDA_PORT=10006 ./clients/build/install/clients/bin/clients request-state localhost:9081 relay-corda2:9082/Corda_Network2/corda_network2_partya_1:10003#com.cordaSimpleApplication.flow.GetStateByKey:H\n"))),(0,l.kt)("li",{parentName:"ul"},"With TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"RELAY_TLS=true RELAY_TLSCA_CERT_PATHS=../../../core/relay/credentials/docker/ca-cert.pem NETWORK_NAME=Corda_Network CORDA_PORT=10006 ./clients/build/install/clients/bin/clients request-state localhost:9081 relay-corda2:9082/Corda_Network2/corda_network2_partya_1:10003#com.cordaSimpleApplication.flow.GetStateByKey:H\n"))))))),(0,l.kt)("li",{parentName:"ul"},"Query the value of the requested state using key ",(0,l.kt)("inlineCode",{parentName:"li"},"H")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"Corda_Network")," by running the following command:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NETWORK_NAME=Corda_Network CORDA_PORT=10006 ./clients/build/install/clients/bin/clients get-state H\n")))),(0,l.kt)("p",null,"To test the scenario where ",(0,l.kt)("inlineCode",{parentName:"p"},"Corda_Network2")," requests the value of the state (key) ",(0,l.kt)("inlineCode",{parentName:"p"},"C")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"Corda_Network"),", do the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"(",(0,l.kt)("em",{parentName:"li"},"Make sure the following are running"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Corda_Network"),", relay, and driver; ",(0,l.kt)("inlineCode",{parentName:"li"},"Corda_Network2"),", relay, and driver)"),(0,l.kt)("li",{parentName:"ul"},"Navigate to the ",(0,l.kt)("inlineCode",{parentName:"li"},"samples/corda/corda-simple-application")," folder."),(0,l.kt)("li",{parentName:"ul"},"Run the following:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in the host machine:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Without TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NETWORK_NAME=Corda_Network2 CORDA_PORT=30006 ./clients/build/install/clients/bin/clients request-state localhost:9082 localhost:9081/Corda_Network/localhost:10006#com.cordaSimpleApplication.flow.GetStateByKey:C\n"))),(0,l.kt)("li",{parentName:"ul"},"With TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"RELAY_TLS=true RELAY_TLSCA_CERT_PATHS=../../../core/relay/credentials/fabric_ca_cert.pem NETWORK_NAME=Corda_Network2 CORDA_PORT=30006 ./clients/build/install/clients/bin/clients request-state localhost:9082 localhost:9081/Corda_Network/localhost:10006#com.cordaSimpleApplication.flow.GetStateByKey:C\n"))))),(0,l.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in Docker containers:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Without TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NETWORK_NAME=Corda_Network2 CORDA_PORT=30006 ./clients/build/install/clients/bin/clients request-state localhost:9082 relay-corda:9081/Corda_Network/corda_partya_1:10003#com.cordaSimpleApplication.flow.GetStateByKey:C\n"))),(0,l.kt)("li",{parentName:"ul"},"With TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"RELAY_TLS=true RELAY_TLSCA_CERT_PATHS=../../../core/relay/credentials/docker/ca-cert.pem NETWORK_NAME=Corda_Network2 CORDA_PORT=30006 ./clients/build/install/clients/bin/clients request-state localhost:9082 relay-corda:9081/Corda_Network/corda_partya_1:10003#com.cordaSimpleApplication.flow.GetStateByKey:C\n"))))))),(0,l.kt)("li",{parentName:"ul"},"Query the value of the requested state, using the key ",(0,l.kt)("inlineCode",{parentName:"li"},"C")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"Corda_Network")," by running the following command:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NETWORK_NAME=Corda_Network2 CORDA_PORT=30006 ./clients/build/install/clients/bin/clients get-state C\n")))),(0,l.kt)("h2",{id:"corda-to-fabric"},"Corda to Fabric"),(0,l.kt)("p",null,"To test the scenario where ",(0,l.kt)("inlineCode",{parentName:"p"},"Corda_Network")," requests the value of the state (key) ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"network1"),", do the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"(",(0,l.kt)("em",{parentName:"li"},"Make sure the following are running"),": Corda network, relay, and driver; Fabric ",(0,l.kt)("inlineCode",{parentName:"li"},"network1"),", relay, and driver)"),(0,l.kt)("li",{parentName:"ul"},"Navigate to the ",(0,l.kt)("inlineCode",{parentName:"li"},"samples/corda/corda-simple-application")," folder."),(0,l.kt)("li",{parentName:"ul"},"Run the following:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in the host machine:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Without TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NETWORK_NAME=Corda_Network CORDA_PORT=10006 ./clients/build/install/clients/bin/clients request-state localhost:9081 localhost:9080/network1/mychannel:simplestate:Read:a\n"))),(0,l.kt)("li",{parentName:"ul"},"With TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"RELAY_TLS=true RELAY_TLSCA_CERT_PATHS=../../../core/relay/credentials/fabric_ca_cert.pem NETWORK_NAME=Corda_Network CORDA_PORT=10006 ./clients/build/install/clients/bin/clients request-state localhost:9081 localhost:9080/network1/mychannel:simplestate:Read:a\n"))))),(0,l.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in Docker containers:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Without TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NETWORK_NAME=Corda_Network CORDA_PORT=10006 ./clients/build/install/clients/bin/clients request-state localhost:9081 relay-network1:9080/network1/mychannel:simplestate:Read:a\n"))),(0,l.kt)("li",{parentName:"ul"},"With TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"RELAY_TLS=true RELAY_TLSCA_CERT_PATHS=../../../core/relay/credentials/docker/ca-cert.pem NETWORK_NAME=Corda_Network CORDA_PORT=10006 ./clients/build/install/clients/bin/clients request-state localhost:9081 relay-network1:9080/network1/mychannel:simplestate:Read:a\n"))))))),(0,l.kt)("li",{parentName:"ul"},"Query the value of the requested state (key) ",(0,l.kt)("inlineCode",{parentName:"li"},"a")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"Corda_Network")," using the following:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NETWORK_NAME=Corda_Network CORDA_PORT=10006 ./clients/build/install/clients/bin/clients get-state a\n")))),(0,l.kt)("p",null,"To test the scenario where ",(0,l.kt)("inlineCode",{parentName:"p"},"Corda_Network")," requests the value of the state (key) ",(0,l.kt)("inlineCode",{parentName:"p"},"Arcturus")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"network2"),", do the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"(",(0,l.kt)("em",{parentName:"li"},"Make sure the following are running"),": Corda network, relay, and driver; Fabric ",(0,l.kt)("inlineCode",{parentName:"li"},"network2"),", relay, and driver)"),(0,l.kt)("li",{parentName:"ul"},"Navigate to the ",(0,l.kt)("inlineCode",{parentName:"li"},"samples/corda/corda-simple-application")," folder."),(0,l.kt)("li",{parentName:"ul"},"Run the following:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in the host machine:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Without TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NETWORK_NAME=Corda_Network CORDA_PORT=10006 ./clients/build/install/clients/bin/clients request-state localhost:9081 localhost:9083/network2/mychannel:simplestate:Read:Arcturus\n"))),(0,l.kt)("li",{parentName:"ul"},"With TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"RELAY_TLS=true RELAY_TLSCA_CERT_PATHS=../../../core/relay/credentials/fabric_ca_cert.pem NETWORK_NAME=Corda_Network CORDA_PORT=10006 ./clients/build/install/clients/bin/clients request-state localhost:9081 localhost:9083/network2/mychannel:simplestate:Read:Arcturus\n"))))),(0,l.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in Docker containers:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Without TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NETWORK_NAME=Corda_Network CORDA_PORT=10006 ./clients/build/install/clients/bin/clients request-state localhost:9081 relay-network2:9083/network2/mychannel:simplestate:Read:Arcturus\n"))),(0,l.kt)("li",{parentName:"ul"},"With TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"RELAY_TLS=true RELAY_TLSCA_CERT_PATHS=../../../core/relay/credentials/docker/ca-cert.pem NETWORK_NAME=Corda_Network CORDA_PORT=10006 ./clients/build/install/clients/bin/clients request-state localhost:9081 relay-network2:9083/network2/mychannel:simplestate:Read:Arcturus\n"))))))),(0,l.kt)("li",{parentName:"ul"},"Query the value of the requested state (key) ",(0,l.kt)("inlineCode",{parentName:"li"},"Arcturus")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"Corda_Network")," using the following:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NETWORK_NAME=Corda_Network CORDA_PORT=10006 ./clients/build/install/clients/bin/clients get-state Arcturus\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," You can test the above data transfer scenario with ",(0,l.kt)("inlineCode",{parentName:"p"},"Corda_Network2")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"Corda_Network")," by changing the following in the ",(0,l.kt)("inlineCode",{parentName:"p"},"request-state")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"get-state")," command:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Network name environment variable:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NETWORK_NAME=Corda_Network")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"NETWORK_NAME=Corda_Network2")))),(0,l.kt)("li",{parentName:"ul"},"Corda node's RPC endpoint port environment variable:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CORDA_PORT=10006")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"CORDA_PORT=30006")))),(0,l.kt)("li",{parentName:"ul"},"Local relay address:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"localhost:9081")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"localhost:9082")," (host deployment of relays and drivers)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"relay-corda2:9081")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"relay-corda2:9082")," (Docker container deployment of relays and drivers)")))),(0,l.kt)("h2",{id:"fabric-to-corda"},"Fabric to Corda"),(0,l.kt)("p",null,"To test the scenario where ",(0,l.kt)("inlineCode",{parentName:"p"},"network1")," requests the value of the state (key) ",(0,l.kt)("inlineCode",{parentName:"p"},"H")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"Corda_Network"),", do the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"(",(0,l.kt)("em",{parentName:"li"},"Make sure the following are running"),": Corda network, relay, and driver; Fabric ",(0,l.kt)("inlineCode",{parentName:"li"},"network1"),", relay, and driver)"),(0,l.kt)("li",{parentName:"ul"},"Navigate to the ",(0,l.kt)("inlineCode",{parentName:"li"},"samples/fabric/fabric-cli")," (for the Node.js version) or the ",(0,l.kt)("inlineCode",{parentName:"li"},"samples/fabric/go-cli")," (for the Golang version) folder."),(0,l.kt)("li",{parentName:"ul"},"(Make sure you have configured ",(0,l.kt)("inlineCode",{parentName:"li"},"fabric-cli")," as per earlier instructions)"),(0,l.kt)("li",{parentName:"ul"},"Edit ",(0,l.kt)("inlineCode",{parentName:"li"},"chaincode.json"),": in the ",(0,l.kt)("inlineCode",{parentName:"li"},"simplestate:Create:args")," attribute, replace the argument ",(0,l.kt)("inlineCode",{parentName:"li"},'"a"')," with ",(0,l.kt)("inlineCode",{parentName:"li"},'"H"')," (this specifies the key to which the data from the remote view is to be written into); i.e.,:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"args": ["a", ""]\n')),"with",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"args": ["H", ""]\n'))),(0,l.kt)("li",{parentName:"ul"},"Run the following:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in the host machine:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Without TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli interop --local-network=network1 --sign=true --requesting-org=Org1MSP localhost:9081/Corda_Network/localhost:10006#com.cordaSimpleApplication.flow.GetStateByKey:H --debug=true\n"))),(0,l.kt)("li",{parentName:"ul"},"With TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli interop --local-network=network1 --sign=true --requesting-org=Org1MSP --relay-tls=true --relay-tls-ca-files=../../../core/relay/credentials/fabric_ca_cert.pem localhost:9081/Corda_Network/localhost:10006#com.cordaSimpleApplication.flow.GetStateByKey:H --debug=true\n"))))),(0,l.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in Docker containers:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Without TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli interop --local-network=network1 --sign=true --requesting-org=Org1MSP relay-corda:9081/Corda_Network/corda_partya_1:10003#com.cordaSimpleApplication.flow.GetStateByKey:H --debug=true\n"))),(0,l.kt)("li",{parentName:"ul"},"With TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli interop --local-network=network1 --sign=true --requesting-org=Org1MSP --relay-tls=true --relay-tls-ca-files=../../../core/relay/credentials/docker/ca-cert.pem relay-corda:9081/Corda_Network/corda_partya_1:10003#com.cordaSimpleApplication.flow.GetStateByKey:H --debug=true\n"))))))),(0,l.kt)("li",{parentName:"ul"},"Query the value of the requested state (key) ",(0,l.kt)("inlineCode",{parentName:"li"},"H")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"network1")," using the following:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli chaincode query mychannel simplestate read '[\"H\"]' --local-network=network1\n")))),(0,l.kt)("p",null,"To test the scenario where ",(0,l.kt)("inlineCode",{parentName:"p"},"network2")," requests the value of the state (key) ",(0,l.kt)("inlineCode",{parentName:"p"},"H")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"Corda_Network"),", do the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"(",(0,l.kt)("em",{parentName:"li"},"Make sure the following are running"),": Corda network, relay, and driver; Fabric ",(0,l.kt)("inlineCode",{parentName:"li"},"network2"),", relay, and driver)"),(0,l.kt)("li",{parentName:"ul"},"Navigate to the ",(0,l.kt)("inlineCode",{parentName:"li"},"samples/fabric/fabric-cli")," (for the Node.js version) or the ",(0,l.kt)("inlineCode",{parentName:"li"},"samples/fabric/go-cli")," (for the Golang version) folder."),(0,l.kt)("li",{parentName:"ul"},"(Make sure you have configured ",(0,l.kt)("inlineCode",{parentName:"li"},"fabric-cli")," as per earlier instructions)"),(0,l.kt)("li",{parentName:"ul"},"Edit ",(0,l.kt)("inlineCode",{parentName:"li"},"chaincode.json"),": in the ",(0,l.kt)("inlineCode",{parentName:"li"},"simplestate:Create:args")," attribute, replace the argument ",(0,l.kt)("inlineCode",{parentName:"li"},'"a"')," with ",(0,l.kt)("inlineCode",{parentName:"li"},'"H"')," (this specifies the key to which the data from the remote view is to be written into); i.e.,:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"args": ["a", ""]\n')),"with",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"args": ["H", ""]\n'))),(0,l.kt)("li",{parentName:"ul"},"Run the following:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in the host machine:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Without TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli interop --local-network=network2 --sign=true --requesting-org=Org1MSP localhost:9081/Corda_Network/localhost:10006#com.cordaSimpleApplication.flow.GetStateByKey:H --debug=true\n"))),(0,l.kt)("li",{parentName:"ul"},"With TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli interop --local-network=network2 --sign=true --requesting-org=Org1MSP --relay-tls=true --relay-tls-ca-files=../../../core/relay/credentials/fabric_ca_cert.pem localhost:9081/Corda_Network/localhost:10006#com.cordaSimpleApplication.flow.GetStateByKey:H --debug=true\n"))))),(0,l.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in Docker containers:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Without TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli interop --local-network=network2 --sign=true --requesting-org=Org1MSP relay-corda:9081/Corda_Network/corda_partya_1:10003#com.cordaSimpleApplication.flow.GetStateByKey:H --debug=true\n"))),(0,l.kt)("li",{parentName:"ul"},"With TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli interop --local-network=network2 --sign=true --requesting-org=Org1MSP --relay-tls=true --relay-tls-ca-files=../../../core/relay/credentials/docker/ca-cert.pem relay-corda:9081/Corda_Network/corda_partya_1:10003#com.cordaSimpleApplication.flow.GetStateByKey:H --debug=true\n"))))))),(0,l.kt)("li",{parentName:"ul"},"Query the value of the requested state (key) ",(0,l.kt)("inlineCode",{parentName:"li"},"H")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"network2")," using the following:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli chaincode query mychannel simplestate read '[\"H\"]' --local-network=network2\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," You can test the above data transfer scenario with ",(0,l.kt)("inlineCode",{parentName:"p"},"Corda_Network2")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"Corda_Network")," by changing the following in the view address (last parameter in the ",(0,l.kt)("inlineCode",{parentName:"p"},"interop")," command):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Local relay address (prefix):",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"localhost:9081")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"localhost:9082")," (host deployment of relays and drivers)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"relay-corda2:9081")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"relay-corda2:9082")," (Docker container deployment of relays and drivers)"))),(0,l.kt)("li",{parentName:"ul"},"Network name:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Corda_Network")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"Corda_Network2")))),(0,l.kt)("li",{parentName:"ul"},"Corda node's RPC endpoint:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"localhost:10006")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"localhost:30006")," (host deployment of relays and drivers)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"corda_partya_1:10003")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"corda_network2_partya_1:10003")," (Docker container deployment of relays and drivers)")))),(0,l.kt)("h2",{id:"fabric-to-fabric"},"Fabric to Fabric"),(0,l.kt)("p",null,"To test the scenario where ",(0,l.kt)("inlineCode",{parentName:"p"},"network1")," requests the value of the state (key) ",(0,l.kt)("inlineCode",{parentName:"p"},"Arcturus")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"network2"),", do the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"(",(0,l.kt)("em",{parentName:"li"},"Make sure the following are running"),": Fabric ",(0,l.kt)("inlineCode",{parentName:"li"},"network1"),", relay, and driver; Fabric ",(0,l.kt)("inlineCode",{parentName:"li"},"network2"),", relay, and driver)"),(0,l.kt)("li",{parentName:"ul"},"Navigate to the ",(0,l.kt)("inlineCode",{parentName:"li"},"samples/fabric/fabric-cli")," (for the Node.js version) or the ",(0,l.kt)("inlineCode",{parentName:"li"},"samples/fabric/go-cli")," (for the Golang version) folder."),(0,l.kt)("li",{parentName:"ul"},"(Make sure you have configured ",(0,l.kt)("inlineCode",{parentName:"li"},"fabric-cli")," as per earlier instructions)"),(0,l.kt)("li",{parentName:"ul"},"Edit ",(0,l.kt)("inlineCode",{parentName:"li"},"chaincode.json"),": in the ",(0,l.kt)("inlineCode",{parentName:"li"},"simplestate:Create:args")," attribute, replace the argument ",(0,l.kt)("inlineCode",{parentName:"li"},'"a"')," with ",(0,l.kt)("inlineCode",{parentName:"li"},'"Arcturus"')," (this specifies the key to which the data from the remote view is to be written into); i.e.,:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"args": ["a", ""]\n')),"with",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"args": ["Arcturus", ""]\n'))),(0,l.kt)("li",{parentName:"ul"},"Run the following:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in the host machine:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Without TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli interop --local-network=network1 --requesting-org=Org1MSP localhost:9083/network2/mychannel:simplestate:Read:Arcturus\n"))),(0,l.kt)("li",{parentName:"ul"},"With TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli interop --local-network=network1 --requesting-org=Org1MSP --relay-tls=true --relay-tls-ca-files=../../../core/relay/credentials/fabric_ca_cert.pem localhost:9083/network2/mychannel:simplestate:Read:Arcturus\n"))))),(0,l.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in Docker containers:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Without TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli interop --local-network=network1 --requesting-org=Org1MSP relay-network2:9083/network2/mychannel:simplestate:Read:Arcturus\n"))),(0,l.kt)("li",{parentName:"ul"},"With TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli interop --local-network=network1 --requesting-org=Org1MSP --relay-tls=true --relay-tls-ca-files=../../../core/relay/credentials/docker/ca-cert.pem relay-network2:9083/network2/mychannel:simplestate:Read:Arcturus\n"))))))),(0,l.kt)("li",{parentName:"ul"},"Query the value of the requested state (key) ",(0,l.kt)("inlineCode",{parentName:"li"},"Arcturus")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"network1")," using the following:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli chaincode query mychannel simplestate read '[\"Arcturus\"]' --local-network=network1\n")))),(0,l.kt)("p",null,"To test the scenario where ",(0,l.kt)("inlineCode",{parentName:"p"},"network2")," requests the value of the state (key) ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"network1"),", do the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"(",(0,l.kt)("em",{parentName:"li"},"Make sure the following are running"),": Fabric ",(0,l.kt)("inlineCode",{parentName:"li"},"network1"),", relay, and driver; Fabric ",(0,l.kt)("inlineCode",{parentName:"li"},"network2"),", relay, and driver)"),(0,l.kt)("li",{parentName:"ul"},"Navigate to the ",(0,l.kt)("inlineCode",{parentName:"li"},"samples/fabric/fabric-cli")," (for the Node.js version) or the ",(0,l.kt)("inlineCode",{parentName:"li"},"samples/fabric/go-cli")," (for the Golang version) folder."),(0,l.kt)("li",{parentName:"ul"},"(Make sure you have configured ",(0,l.kt)("inlineCode",{parentName:"li"},"fabric-cli")," as per earlier instructions)"),(0,l.kt)("li",{parentName:"ul"},"(There is no need to edit ",(0,l.kt)("inlineCode",{parentName:"li"},"chaincode.json")," to change the key as the default argument ",(0,l.kt)("inlineCode",{parentName:"li"},'"a"')," is what we intend to use in this data sharing use scenario.)"),(0,l.kt)("li",{parentName:"ul"},"Run the following:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in the host machine:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Without TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli interop --local-network=network2 --requesting-org=Org1MSP localhost:9080/network1/mychannel:simplestate:Read:a\n"))),(0,l.kt)("li",{parentName:"ul"},"With TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli interop --local-network=network2 --requesting-org=Org1MSP --relay-tls=true --relay-tls-ca-files=../../../core/relay/credentials/fabric_ca_cert.pem localhost:9080/network1/mychannel:simplestate:Read:a\n"))))),(0,l.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in Docker containers:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Without TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli interop --local-network=network2 --requesting-org=Org1MSP relay-network1:9080/network1/mychannel:simplestate:Read:a\n"))),(0,l.kt)("li",{parentName:"ul"},"With TLS:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli interop --local-network=network2 --requesting-org=Org1MSP --relay-tls=true --relay-tls-ca-files=../../../core/relay/credentials/docker/ca-cert.pem relay-network1:9080/network1/mychannel:simplestate:Read:a:173\n"))))))),(0,l.kt)("li",{parentName:"ul"},"Query the value of the requested state (key) ",(0,l.kt)("inlineCode",{parentName:"li"},"a")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"network2")," using the following:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli chaincode query mychannel simplestate read '[\"a\"]' --local-network=network2\n")))))}k.isMDXComponent=!0}}]);