"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[2101],{78924:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],s={description:"Official IOTA Client Library Java API examples.",image:"/img/logo/iota_mark_light.png",keywords:["api","Java","examples","type","node","client"]},l="Examples",d={unversionedId:"libraries/java/examples",id:"libraries/java/examples",title:"Examples",description:"Official IOTA Client Library Java API examples.",source:"@site/external/iota.rs/documentation/docs/libraries/java/examples.md",sourceDirName:"libraries/java",slug:"/libraries/java/examples",permalink:"/iota.rs/libraries/java/examples",editUrl:"https://github.com/iotaledger/iota.rs/edit/mainnet/external/iota.rs/documentation/docs/libraries/java/examples.md",tags:[],version:"current",frontMatter:{description:"Official IOTA Client Library Java API examples.",image:"/img/logo/iota_mark_light.png",keywords:["api","Java","examples","type","node","client"]},sidebar:"docs",previous:{title:"Getting Started with Java",permalink:"/iota.rs/libraries/java/getting_started"},next:{title:"API Reference - IOTA Client Library - Java binding",permalink:"/iota.rs/libraries/java/api_reference"}},c=[],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"examples"},"Examples"),(0,i.kt)("p",null,"It's possible to send transactions with iota.rs, but we strongly recommend to use official ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library together with ",(0,i.kt)("inlineCode",{parentName:"p"},"stronghold.rs")," enclave for value-based transfers. This combination incorporates the best security practices while dealing with seeds, related addresses and ",(0,i.kt)("inlineCode",{parentName:"p"},"UTXO"),". See more information on ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/welcome"},"wallet docs"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/iotaledger/iota.rs\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd iota.rs/bindings/java\n")),(0,i.kt)("p",null,"Examples are all collected in a sample project. By default it runs a node info example, but there are many more."),(0,i.kt)("p",null,"Run the example like:"),(0,i.kt)("p",null,"Gradle: ",(0,i.kt)("inlineCode",{parentName:"p"},"./gradlew examples:basic-app:test --info")),(0,i.kt)("p",null,"Maven: ",(0,i.kt)("inlineCode",{parentName:"p"},"cd examples/basic-app && mvn test")),(0,i.kt)("p",null,"For the rest of the examples in this document we will be using the ",(0,i.kt)("inlineCode",{parentName:"p"},"node()")," method below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'private static Client node() {\n    String nodeUrl = "https://chrysalis-nodes.iota.cafe:443";\n    Client iota = Client.Builder()\n        // Insert your node URL here\n        .withNode(nodeUrl) \n        // Or instead here but with authentication\n        .withNodeAuth("https://somechrysalisiotanode.com", "jwt_or_null", "name_or_null", "password_or_null")\n        // Choose pow mode\n        .withLocalPow(true)\n        // You can also set a time-out in seconds for the API calls\n        .withRequestTimeout(5)\n        //Then create the Client instance\n        .finish();\n    return iota;\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The most basic example is creating a client, and then requesting the information about the node. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Client iota = node();\n\nSystem.out.println("Node healthy: " + iota.getHealth());\n\n// Get information about our node\nNodeInfoWrapper info = iota.getInfo();\n// This returns the URL from the node the info as gotten from (in case of a quorum or multipe nodes)\nSystem.out.println("Node url: " + info.url());\n// And the actual information\nSystem.out.println("Node Info: " + info.nodeInfo());\n')),(0,i.kt)("p",null,"Example output of the code would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Node healthy: true\nNode url: https://chrysalis-nodes.iota.cafe\nNode Info: name=HORNET, version=1.0.1, is_healthy=true, network_id=chrysalis-mainnet, bech32_hrp=iota, min_pow_score=4000\n            , messages_per_second=19.9, referenced_messages_per_second=20.2, referenced_rate=101.5075376884422\n            , latest_milestone_timestamp=1627055424, latest_milestone_index=739379, confirmed_milestone_index=739379\n            , pruning_index=678884, features=(["PoW"])\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Generate a seed and use that to get addresses.\nYou can of course use any other method to generate a seed, but SecretKey is used in iota client."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Secret keys have more use than just beeing a seed, but you can call toString to get the hex representation\nSecretKey secret_key = SecretKey.generate();\n\nClient iota = node();\nString[] addresses = new GetAddressesBuilder(secret_key.toString()).withClient(iota).withRange(0, 10).finish();\nSystem.out.println(Arrays.toString(addresses));\n")),(0,i.kt)("p",null,"In this example we send a very simple, empty, message and get the metadata of that one.\nThen we send a message by index, and search for that index on the node again to find messageIds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Client iota = node();\n// Make and send an empty message\nMessage messageToSend = iota.message().finish();\n\n// getMessage.metadata() returns message metadata from the MessageId we supplied\nMessageMetadata metadata = iota.getMessage().metadata(messageToSend.id());\nSystem.out.println("Message metadata: " + metadata);\n\n// Now we send a message by index "Hello". The message itself will contain "Tangle" as data here, but this could be anything.\nMessage message = iota.message().withIndexString("Hello").withDataString("Tangle").finish();\nSystem.out.println("Message sent https://explorer.iota.org/mainnet/message/" + message.id());\n\n// Lets find all messages with the "Hello" index.\n// This will include the message we just send\nMessageId[] fetched_message_ids = iota.getMessage().indexString("Hello");\n\n// With these ids, we could look up the content on a per-id bases\nSystem.out.println("Messages with Hello index: " + Arrays.toString(fetched_message_ids));\n')),(0,i.kt)("p",null,"Example output of the code would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Message metadata: message_id=adb62e03b420aa323b40a5fc341c9c51cf2dd2031d52618cfa389ecb404bb3ab, parent_message_ids=(["105e11f8d23eeaee9797e1fa4a78ffe887e1f8f1ee4df741decf3f15ef1695f3", "ddc2a9a986682bc2cc735979c6e0fdf2952513ecd84c02242fbb084d1492c819", "f1370ee1207a6e3b2ed1d3cbe7f68757f076c42df87165672d3598737736855b", "fb633fe598d58d3287a9fcdeea1134fec83858ed28c549f2725898e0030d9ae5"]), is_solid=true, referenced_by_milestone_index=None, milestone_index=None, ledger_inclusion_state=None, conflict_reason=None, should_promote=Some(false), should_reattach=Some(false)\n\nMessage sent https://explorer.iota.org/mainnet/message/32e75774837b2f26f8fee1f2a1f22076fd80b555a6e2515f4f48e8259234e81d\n\nMessages with Hello index: [32e75774837b2f26f8fee1f2a1f22076fd80b555a6e2515f4f48e8259234e81d, 65a68b9ae0e138b13db11a5bad642ecf2cb5cc0f5d31b6396f68e0cfa5ef2d33]\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"You can find more advanced examples in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/dev/bindings/java/examples/basic-app"},"examples")," folder."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);