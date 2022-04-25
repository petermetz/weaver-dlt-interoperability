"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[676],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return g}});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var p=r.createContext({}),c=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},l=function(n){var e=c(n.components);return r.createElement(p.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,p=n.parentName,l=o(n,["components","mdxType","originalType","parentName"]),u=c(t),g=i,S=u["".concat(p,".").concat(g)]||u[g]||d[g]||a;return t?r.createElement(S,s(s({ref:e},l),{},{components:t})):r.createElement(S,s({ref:e},l))}));function g(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,s=new Array(a);s[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=n,o.mdxType="string"==typeof n?n:i,s[1]=o;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1518:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),s=["components"],o={},p=void 0,c={unversionedId:"internal/development/cordapp-interop/cordapp-interop-api-assets",id:"internal/development/cordapp-interop/cordapp-interop-api-assets",isDocsHomePage:!1,title:"cordapp-interop-api-assets",description:"\x3c!--",source:"@site/docs/internal/development/cordapp-interop/cordapp-interop-api-assets.md",sourceDirName:"internal/development/cordapp-interop",slug:"/internal/development/cordapp-interop/cordapp-interop-api-assets",permalink:"/weaver-dlt-interoperability/docs/internal/development/cordapp-interop/cordapp-interop-api-assets",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/internal/development/cordapp-interop/cordapp-interop-api-assets.md",tags:[],version:"current",frontMatter:{}},l=[],d={toc:l};function u(n){var e=n.components,t=(0,i.Z)(n,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"id: cordapp-interop-api-assets\ntitle: API Assets"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"class AccessControlIssueRequestState(\n        linearId: UniqueIdentifier = UniqueIdentifier(),\n        externalNetworkId: String,\n        externalNetworkCertificates: List<String>,\n        requestApprovals: List<DigitalSignature.WithKey>,\n        stateLinearId: UniqueIdentifier,\n        participants: List<Party>\n) : LinearState\n\nclass FormattedResponse(\n        organizationName: String,\n        decryptedPayload: String,\n        certString: String,\n        signatureBytes: ByteArray,\n        message: ByteArray,\n        publicKey: PublicKey\n)\n\nclass RelayRequestObject(\n        operationType: String,\n        policy: String,\n        function: String,\n        arguments: List<String>,\n        clientOrganizationId: String,\n        clientCertificate: String,\n        clientSignature: String\n)\n\nclass RelayResponseObject(\n        requestId: String,\n        status: String,\n        response: List<NodeResponse>?\n)\n\nclass NodeResponse(\n        proposal: String,\n        proposalResponse: String\n)\n\nclass RelayRequestId(\n        requestId: String\n)\n\nclass ExternalStateRequest(\n        url: String,\n        path: String,\n        externalNetworkId: String,\n        requestId: String,\n        function: String,\n        participants: List<String>,\n        mock: String?\n)\n\nclass ForeignNetworkMapInformationIntermediateResponse(\n        CarrierMSP:  FNNode,\n        SellerMSP: FNNode\n)\n\nclass FNNode(\n        admins: List<String>,\n        crypto_config: CryptoConfig,\n        fabric_node_ous: String?,\n        intermediate_certs: List<String>,\n        name: String,\n        organizational_unit_identifiers: List<String>,\n        revocation_list: List<String>,\n        root_certs: List<String>,\n        signing_identity: String?,\n        tls_intermediate_certs: List<String>,\n        tls_root_certs: List<String>\n)\n\nclass CryptoConfig(\n        identity_identifier_hash_function: String,\n        signature_hash_family: String\n)\n\nclass TxIdResponseObject(\n        queryResponse: List<List<StateQueryResponse>?>\n)\n\nclass LinearIdResponseObject(\n        queryResponse: List<StateQueryResponse>\n)\n\nclass QueryResponse(\n        state: String,\n        linearId: String\n)\n\nclass ParsedQueryObject(\n        linearId: UniqueIdentifier,\n        txId: String?\n)\n\nclass ExternalNetworkRequest(\n        externalNetworkId: String,\n        organizationName: String,\n        requesterCertificate: String,\n        requesterSignature: String,\n        stateLinearId: String\n)\n\nclass NetworkMapObject(\n        networkId: String,\n        nodes: List<Node>\n)\n\nclass Node(\n        name: String,\n        address: String,\n        hierarchicalCerts: List<ByteArray>,\n        hierarchicalCANames: List<String>\n)\n\nclass ExternalNetworkRequestWithTxId(\n        externalNetworkId: String,\n        organizationName: String,\n        requesterCertificate: String,\n        requesterSignature: String,\n        txId: String\n)\n\nclass FNIMStateRequest(\n        networkId: String,\n        topology: List<FNNode>,\n        participants: List<String>\n)\n\nclass FNIMStateResponse(\n        linearId: UniqueIdentifier,\n        networkId: String,\n        topology: List<FNNode>,\n        participants: List<String>\n)\n\nclass AccessControlIssueRequestStateRequest(\n        externalNetworkId: String,\n        externalNetworkCertificates: List<String>,\n        stateLinearId: String,\n        participants: List<String>\n)\n\nclass AccessControlIssueRequestStateResponse(\n        linearId: UniqueIdentifier,\n        externalNetworkId: String,\n        externalNetworkCertificates: List<String>,\n        requestApprovals: List<String>,\n        stateLinearId: String,\n        participants: List<String>\n)\n\nclass AccessControlStateResponse(\n        linearId: UniqueIdentifier,\n        externalNetworkId: String,\n        externalNetworkCertificates: List<String>,\n        stateLinearId: String,\n        participants: List<String>\n)\n")))}u.isMDXComponent=!0}}]);