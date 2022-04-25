"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[7195],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7644:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"end-to-end-security",title:"End-to-End Security"},l=void 0,c={unversionedId:"external/security-model/end-to-end-security",id:"external/security-model/end-to-end-security",isDocsHomePage:!1,title:"End-to-End Security",description:"\x3c!--",source:"@site/docs/external/security-model/end-to-end-security.md",sourceDirName:"external/security-model",slug:"/external/security-model/end-to-end-security",permalink:"/weaver-dlt-interoperability/docs/external/security-model/end-to-end-security",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/security-model/end-to-end-security.md",tags:[],version:"current",frontMatter:{id:"end-to-end-security",title:"End-to-End Security"},sidebar:"Documentation",previous:{title:"Proofs and Verification",permalink:"/weaver-dlt-interoperability/docs/external/security-model/proofs-and-verification"},next:{title:"Deployment Patterns",permalink:"/weaver-dlt-interoperability/docs/external/deployment-considerations/deployment-patterns"}},p=[{value:"Relay Security Model",id:"relay-security-model",children:[],level:2},{value:"A Relayer of Cryptographic Proofs",id:"a-relayer-of-cryptographic-proofs",children:[],level:2},{value:"Deployment Configurations and Security Implications",id:"deployment-configurations-and-security-implications",children:[{value:"1. Confidential Message Exchange Between Groups of Parties",id:"1-confidential-message-exchange-between-groups-of-parties",children:[],level:3},{value:"2. Private Message Exchange Between Networks",id:"2-private-message-exchange-between-networks",children:[],level:3},{value:"3. Public Message Exchange Between Networks",id:"3-public-message-exchange-between-networks",children:[],level:3}],level:2},{value:"Nonces and Replay Attacks",id:"nonces-and-replay-attacks",children:[],level:2}],u={toc:p};function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"relay-security-model"},"Relay Security Model"),(0,i.kt)("h2",{id:"a-relayer-of-cryptographic-proofs"},"A Relayer of Cryptographic Proofs"),(0,i.kt)("p",null,"The primary function of the relay is to orchestrate the flow of cyrptographic messages between networks enabling a variety of interoperability modes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Transfer of data between networks"),(0,i.kt)("li",{parentName:"ul"},"Transfer of assets between networks"),(0,i.kt)("li",{parentName:"ul"},"Exchange of value between networks")),(0,i.kt)("p",null,"These cryptographic messages represent valid state in a distributed ledger and are generated using a range of cryptographic approaches, such as attestation by a set of authoritative nodes, a non-interactive proof of PoW, or a zero-knowledge proof (proof of computational integrity). The mechanisms for deriving such proofs rely on the model of trust provided by the underlying network of nodes. The relay thus plays no direct role in the generation of proofs, removing the need for remote agents (decentralized networks, applications or users) to trust the relay for proof veracity."),(0,i.kt)("p",null,"The relay's message exchange protocol is in a state of development with a view towards supporting multiple interoperability modes. The current implementation however is limited to the transfer of data between networks. Future versions will enable asset and value transfers protocols."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," The security models examined below is limited to the transfer of data where remote queries are initiated by applications."),(0,i.kt)("h2",{id:"deployment-configurations-and-security-implications"},"Deployment Configurations and Security Implications"),(0,i.kt)("p",null,"The relay acts as a gateway between networks for enabling cross-chain communication and supports flexible deployment configurations. "),(0,i.kt)("p",null,"The configuration in any deployment must statisfy the goals of the parties involved in the message exchange. These goals inform the security policy and the adversarial assumptions. The mechanisms for threat mitigation is based on these assumptions. "),(0,i.kt)("p",null,"The configurations described below assume that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A small fraction of the parties (e.g. f < n - m, where 'm' is the minimum threshold required for agreement) in a group or network might be byzantine. "),(0,i.kt)("li",{parentName:"ul"},"The threat imposed by a byzantine party with priviledges to construct a valid proof is no worse if the party is also in control of a relay."),(0,i.kt)("li",{parentName:"ul"},"A valid proof is one that satisfies a consumer's proof critieria (policy).")),(0,i.kt)("h3",{id:"1-confidential-message-exchange-between-groups-of-parties"},"1. Confidential Message Exchange Between Groups of Parties"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Confidential Message Exchange",src:a(9096).Z,title:"Confidential Message Exchange"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goals")," "),(0,i.kt)("p",null,"A group of parties sharing confidential data agree to share a view of their data to remote group. The system configuration will provide the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Preserve confidentiality of messages exchanged between the groups involved."),(0,i.kt)("li",{parentName:"ul"},"Preserve integrity of messages exchanged across the groups."),(0,i.kt)("li",{parentName:"ul"},"The system must be available for servicing requests.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Threat Assumptions")),(0,i.kt)("p",null,"An adversary in this configuration might seek to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Gain access to the confidential data."),(0,i.kt)("li",{parentName:"ul"},"Tamper with the integrity of the messages exchanged."),(0,i.kt)("li",{parentName:"ul"},"Censor messages."),(0,i.kt)("li",{parentName:"ul"},"Deny service.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Mechanisms for Threat Mitigation")),(0,i.kt)("p",null,"A suitable deployment configuration that addresses these threat assumptions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Relays will only be deployed and operated by organizations with access to the confidential data and privileges to construct valid proofs."),(0,i.kt)("li",{parentName:"ul"},"A secure channel (mutual TLS) between the relays prevents external adversaries from evesdropping on the communication."),(0,i.kt)("li",{parentName:"ul"},"The inclusion of a nonce in the proof enables replays of past messages to be detected."),(0,i.kt)("li",{parentName:"ul"},"The deployment of multiple relays ensures availability and resistance to censorship.")),(0,i.kt)("p",null,"In the following configuration, a group in one network maintains confidential data and have similar goals as above. The data in the providing network is private but visible to all organizations. The relay in the providing network can be operated by any organization with access to the data (the implications of this are examined next)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Confidential Message Exchange",src:a(5939).Z,title:"Confidential Message Exchange"})),(0,i.kt)("h3",{id:"2-private-message-exchange-between-networks"},"2. Private Message Exchange Between Networks"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goals")),(0,i.kt)("p",null,"In the following configuration, the data is private to both networks but not confidential to any subset of the members. The system configuration must provide the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Preserve confidentiality of messages exchanged between the networks."),(0,i.kt)("li",{parentName:"ul"},"Preserve integrity of messages exchanged across the networks."),(0,i.kt)("li",{parentName:"ul"},"The system must be available for servicing requests.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Threat Assumptions")),(0,i.kt)("p",null,"An adversary in this configuration might seek to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Gain access to the private data."),(0,i.kt)("li",{parentName:"ul"},"Tamper with the integrity of the messages exchanged."),(0,i.kt)("li",{parentName:"ul"},"Censor messages."),(0,i.kt)("li",{parentName:"ul"},"Deny service.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Mechanisms for Threat Mitigation")),(0,i.kt)("p",null,"A suitable deployment configuration that addresses the threat assumptions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Relays will be deployed and operated by organizations that are members of the network with access to the shared private data and privileges to construct valid proofs."),(0,i.kt)("li",{parentName:"ul"},"A secure channel (mutual TLS) between the relays prevents external adversaries from evesdropping on the communication."),(0,i.kt)("li",{parentName:"ul"},"The inclusion of a nonce in the proof enables replays of past messages to be detected."),(0,i.kt)("li",{parentName:"ul"},"The deployment of multiple relays ensures availability and resistance to censorship.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Private Message Exchange",src:a(845).Z,title:"Private Message Exchange"})),(0,i.kt)("h3",{id:"3-public-message-exchange-between-networks"},"3. Public Message Exchange Between Networks"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goals")),(0,i.kt)("p",null,"A private network consumes data from a public permissionless network. The system configuration must provide the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Preserve confidentiality of messages exchanged between the networks."),(0,i.kt)("li",{parentName:"ul"},"Preserve integrity of messages exchanged across the networks."),(0,i.kt)("li",{parentName:"ul"},"The system must be available for servicing requests.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Threat Assumptions")),(0,i.kt)("p",null,"An adversary in this configuration might seek to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Monitor data accessed by the private network."),(0,i.kt)("li",{parentName:"ul"},"Tamper with the integrity of the messages exchanged."),(0,i.kt)("li",{parentName:"ul"},"Censor messages."),(0,i.kt)("li",{parentName:"ul"},"Deny service.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Mechanisms for Threat Mitigation")),(0,i.kt)("p",null,"A suitable deployment configuration that addresses the threat assumptions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nodes (clients) of the public ledger will be deployed and operated by multiple organizations in the private network (a sufficient distribution to accomodate 'f' faulty nodes)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Nodes modified to sign responses with a valid identity certificate (e.g. Hyperledger Besu as Ethereum mainnet client)."))),(0,i.kt)("li",{parentName:"ul"},"Relays to private and public nodes will be deployed and operated by organizations within the network."),(0,i.kt)("li",{parentName:"ul"},"The inclusion of a nonce in the proof enables replays of past messages to be detected."),(0,i.kt)("li",{parentName:"ul"},"The deployment of multiple relays ensures availability and resistance to censorship.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Private Public Data Exchange",src:a(5717).Z,title:"Private-Public Message Exchange"})),(0,i.kt)("p",null,"The following alternate configuration allows for a public node to be operated by a single organization. The oracle provides trusted meta-data to ensure proofs can be validated correctly (E.g. current validator set used for signing blocks in PoS/BFT sysmtems and block height to verify currency of state. A formal study on mechanisms for proof construction and their short-commings has been deferred)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Private Public Data Exchange",src:a(9125).Z,title:"Private-Public Message Exchange"})),(0,i.kt)("p",null,"In the following configuration an external notary acts as an authoritative source for public ledger data. A secure channel (mutual TLS) between the relays prevents external adversaries from evesdropping on the communication."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Private Public Data Exchange",src:a(5265).Z,title:"Private-Public Message Exchange"})),(0,i.kt)("h2",{id:"nonces-and-replay-attacks"},"Nonces and Replay Attacks"))}d.isMDXComponent=!0},9096:function(e,t,a){t.Z=a.p+"assets/images/confidential-message-exchange-464a9dd7ced8b637e79114f0a5a5ea7f.png"},5939:function(e,t,a){t.Z=a.p+"assets/images/confidential-message-exchange2-66fcb64e5ccf9f3c67f8515bbaf949eb.png"},845:function(e,t,a){t.Z=a.p+"assets/images/private-message-exchange-e152ae2c623b0b2e22a10aa8c1ab4303.png"},5717:function(e,t,a){t.Z=a.p+"assets/images/private-public-message-exchange-154e73e46c6a606c4d8fe0ed016f5672.png"},9125:function(e,t,a){t.Z=a.p+"assets/images/private-public-message-exchange2-c7dcb3f4a8faaaecec32928569aa29dc.png"},5265:function(e,t,a){t.Z=a.p+"assets/images/private-public-message-exchange3-07fb1f5baf8ad3c32448493bdecd23a7.png"}}]);