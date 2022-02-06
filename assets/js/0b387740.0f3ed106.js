"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8467],{9676:function(t){t.exports=JSON.parse('{"pluginId":"docs","version":"current","label":"1.0","banner":null,"badge":true,"className":"docs-version-current","isLast":true,"docsSidebars":{"docsSidebar":[{"type":"link","label":"Introduction","href":"/docs/1.0/","docId":"intro"},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Your First Contract","href":"/docs/1.0/getting-started/intro","docId":"getting-started/intro"},{"type":"link","label":"Installation","href":"/docs/1.0/getting-started/installation","docId":"getting-started/installation"},{"type":"link","label":"Setting Up Environment","href":"/docs/1.0/getting-started/setting-env","docId":"getting-started/setting-env"},{"type":"link","label":"Downloading and Compiling Contract","href":"/docs/1.0/getting-started/compile-contract","docId":"getting-started/compile-contract"},{"type":"link","label":"Uploading and Interacting","href":"/docs/1.0/getting-started/interact-with-contract","docId":"getting-started/interact-with-contract"},{"type":"link","label":"Next Steps","href":"/docs/1.0/getting-started/next-steps","docId":"getting-started/next-steps"}]},{"type":"category","label":"Architecture","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"What are Multi-Chain Contracts?","href":"/docs/1.0/architecture/multichain","docId":"architecture/multichain"},{"type":"link","label":"Actor Model","href":"/docs/1.0/architecture/actor","docId":"architecture/actor"},{"type":"link","label":"Names and Addresses","href":"/docs/1.0/architecture/addresses","docId":"architecture/addresses"},{"type":"link","label":"Querying","href":"/docs/1.0/architecture/query","docId":"architecture/query"},{"type":"link","label":"Serialization","href":"/docs/1.0/architecture/serialization","docId":"architecture/serialization"},{"type":"link","label":"Contract Composition","href":"/docs/1.0/architecture/composition","docId":"architecture/composition"},{"type":"link","label":"Comparison with Solidity Contracts","href":"/docs/1.0/architecture/smart-contracts","docId":"architecture/smart-contracts"}]},{"type":"category","label":"Smart Contracts","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Contract Semantics","href":"/docs/1.0/smart-contracts/contract-semantics","docId":"smart-contracts/contract-semantics"},{"type":"link","label":"Messages","href":"/docs/1.0/smart-contracts/message","docId":"smart-contracts/message"},{"type":"link","label":"Result and Option","href":"/docs/1.0/smart-contracts/result-option","docId":"smart-contracts/result-option"},{"type":"category","label":"State","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Simple State","href":"/docs/1.0/smart-contracts/state/simple-state","docId":"smart-contracts/state/simple-state"},{"type":"link","label":"Complex State and Maps","href":"/docs/1.0/smart-contracts/state/complex-state","docId":"smart-contracts/state/complex-state"}]},{"type":"link","label":"Entry points","href":"/docs/1.0/smart-contracts/entry-points","docId":"smart-contracts/entry-points"},{"type":"link","label":"Query","href":"/docs/1.0/smart-contracts/query","docId":"smart-contracts/query"},{"type":"link","label":"Events","href":"/docs/1.0/smart-contracts/events","docId":"smart-contracts/events"},{"type":"link","label":"Math","href":"/docs/1.0/smart-contracts/math","docId":"smart-contracts/math"},{"type":"link","label":"Compilation","href":"/docs/1.0/smart-contracts/compilation","docId":"smart-contracts/compilation"},{"type":"link","label":"Deployment","href":"/docs/1.0/smart-contracts/deployment","docId":"smart-contracts/deployment"},{"type":"category","label":"Frontend App","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/docs/1.0/smart-contracts/frontend_app/introduction","docId":"smart-contracts/frontend_app/introduction"},{"type":"link","label":"Cosmic dApp logic","href":"/docs/1.0/smart-contracts/frontend_app/cosmicdapp-logic","docId":"smart-contracts/frontend_app/cosmicdapp-logic"},{"type":"link","label":"Cosmic dApp design","href":"/docs/1.0/smart-contracts/frontend_app/cosmicdapp-design","docId":"smart-contracts/frontend_app/cosmicdapp-design"},{"type":"link","label":"Bootstrap dApp","href":"/docs/1.0/smart-contracts/frontend_app/bootstrap-dapp","docId":"smart-contracts/frontend_app/bootstrap-dapp"},{"type":"link","label":"Develop dApp","href":"/docs/1.0/smart-contracts/frontend_app/dapp-development","docId":"smart-contracts/frontend_app/dapp-development"}]},{"type":"link","label":"Verifying Smart Contracts","href":"/docs/1.0/smart-contracts/verify","docId":"smart-contracts/verify"},{"type":"link","label":"Migration","href":"/docs/1.0/smart-contracts/migration","docId":"smart-contracts/migration"},{"type":"link","label":"Code Pinning","href":"/docs/1.0/smart-contracts/code-pinning","docId":"smart-contracts/code-pinning"}]},{"type":"link","label":"Integration","href":"/docs/1.0/integration","docId":"integration"}]},"docs":{"architecture/actor":{"id":"architecture/actor","title":"Actor Model","description":"The actor model is a design pattern, used to build reliable, distributed","sidebar":"docsSidebar"},"architecture/addresses":{"id":"architecture/addresses","title":"Names and Addresses","description":"Almost all blockchains use addresses to identify external actors via a hash of a public key, and many newer ones","sidebar":"docsSidebar"},"architecture/composition":{"id":"architecture/composition","title":"Contract Composition","description":"Given the Actor model of dispatching messages, and synchronous queries implemented in CosmWasm","sidebar":"docsSidebar"},"architecture/multichain":{"id":"architecture/multichain","title":"What are Multi-Chain Contracts?","description":"CosmWasm is designed and built from the ground-up to be a multi-chain solution for smart contracts. As it comes from the","sidebar":"docsSidebar"},"architecture/query":{"id":"architecture/query","title":"Querying","description":"There are many cases where you want to view the state of a contract. Both as an external client (using the cli), but","sidebar":"docsSidebar"},"architecture/serialization":{"id":"architecture/serialization","title":"Serialization","description":"One of the driving forces in developing CosmWasm, besides security by design, was to include a very nice Developer UX.","sidebar":"docsSidebar"},"architecture/smart-contracts":{"id":"architecture/smart-contracts","title":"Comparison with Solidity Contracts","description":"First of all, the deploy-execute process consists of 3 steps rather than 2. While Ethereum was built around the concept","sidebar":"docsSidebar"},"getting-started/compile-contract":{"id":"getting-started/compile-contract","title":"Downloading and Compiling Contract","description":"In this section, we will download a sample contract, and compile to it to a wasm binary executable.","sidebar":"docsSidebar"},"getting-started/installation":{"id":"getting-started/installation","title":"Installation","description":"In this section, we will set up your machine for developing, deploying and, hopefully, enjoying smart contracts on","sidebar":"docsSidebar"},"getting-started/interact-with-contract":{"id":"getting-started/interact-with-contract","title":"Uploading and Interacting","description":"We have the binary ready. Now it is time to see some wasm action. You can use Go CLI or","sidebar":"docsSidebar"},"getting-started/intro":{"id":"getting-started/intro","title":"Your First Contract","description":"Buckle up, we will now get first-hand experience with CosmWasm, by:","sidebar":"docsSidebar"},"getting-started/next-steps":{"id":"getting-started/next-steps","title":"Next Steps","description":"This is a very simple example for the name service contract we developed, but it should show you what is possible, limited","sidebar":"docsSidebar"},"getting-started/setting-env":{"id":"getting-started/setting-env","title":"Setting Up Environment","description":"You need an environment to run contracts. You can either run your node locally or connect to an existing network. For","sidebar":"docsSidebar"},"integration":{"id":"integration","title":"Integration","description":"If you want to use Wasm in your own app, here is how you can get this working","sidebar":"docsSidebar"},"intro":{"id":"intro","title":"Introduction","description":"CosmWasm is a new smart contracting platform built for the Cosmos ecosystem. If you haven\'t yet heard","sidebar":"docsSidebar"},"smart-contracts/code-pinning":{"id":"smart-contracts/code-pinning","title":"Code Pinning","description":"Code Pinning mechanism allows codes to be pinned to the memory.","sidebar":"docsSidebar"},"smart-contracts/compilation":{"id":"smart-contracts/compilation","title":"Compilation","description":"Before your contract can be used, it has to be compiled, and then stored on chain.","sidebar":"docsSidebar"},"smart-contracts/contract-semantics":{"id":"smart-contracts/contract-semantics","title":"Contract Semantics","description":"This document aims to clarify the semantics of how a CosmWasm contract interacts","sidebar":"docsSidebar"},"smart-contracts/deployment":{"id":"smart-contracts/deployment","title":"Deployment","description":"When compiling is complete (it may take a while) cd into the artifacts directory. ls should show you binaries for","sidebar":"docsSidebar"},"smart-contracts/entry-points":{"id":"smart-contracts/entry-points","title":"Entry points","description":"Entry points, or handlers are where messages or queries are handled by the contract.","sidebar":"docsSidebar"},"smart-contracts/events":{"id":"smart-contracts/events","title":"Events","description":"Most entry point functions return a type of Result.","sidebar":"docsSidebar"},"smart-contracts/frontend_app/bootstrap-dapp":{"id":"smart-contracts/frontend_app/bootstrap-dapp","title":"Bootstrap dApp","description":"There are two approaches to bootstrap a new dApp: as a Lerna package in the monorepo or as a","sidebar":"docsSidebar"},"smart-contracts/frontend_app/cosmicdapp-design":{"id":"smart-contracts/frontend_app/cosmicdapp-design","title":"Cosmic dApp design","description":"The CosmWasm/dApps [Design] package provides two","sidebar":"docsSidebar"},"smart-contracts/frontend_app/cosmicdapp-logic":{"id":"smart-contracts/frontend_app/cosmicdapp-logic","title":"Cosmic dApp logic","description":"The CosmWasm/dApps [Logic] package provides three","sidebar":"docsSidebar"},"smart-contracts/frontend_app/dapp-development":{"id":"smart-contracts/frontend_app/dapp-development","title":"Develop dApp","description":"To showcase the previously explained utilities, we\'ll create the balance checker dApp from the template.","sidebar":"docsSidebar"},"smart-contracts/frontend_app/introduction":{"id":"smart-contracts/frontend_app/introduction","title":"Introduction","description":"In this tutorial you will learn how to build a CosmJS based dApp. The example dApp","sidebar":"docsSidebar"},"smart-contracts/math":{"id":"smart-contracts/math","title":"Math","description":"The math functions used by cosmwasm are based upon standard rust, but helper functions are provided for u128, u64 and","sidebar":"docsSidebar"},"smart-contracts/message":{"id":"smart-contracts/message","title":"Messages","description":"Messages are how you interact with a CosmWasm smart contract. If you look inside most contracts, there will be a","sidebar":"docsSidebar"},"smart-contracts/migration":{"id":"smart-contracts/migration","title":"Migration","description":"Migration is the process through which a given smart contracts code can be swapped out or \'upgraded\'.","sidebar":"docsSidebar"},"smart-contracts/query":{"id":"smart-contracts/query","title":"Query","description":"Querying is the other half of the coin to messages. You can think of queries as a database read, or a way of querying","sidebar":"docsSidebar"},"smart-contracts/result-option":{"id":"smart-contracts/result-option","title":"Result and Option","description":"In Rust, using Result and Option types is very common. If you\'ve used fp-ts in Typescript, functional features in","sidebar":"docsSidebar"},"smart-contracts/state/complex-state":{"id":"smart-contracts/state/complex-state","title":"Complex State and Maps","description":"Of course, for most non-trivial examples, additional data will need to be stored. You can serialise larger JSON data","sidebar":"docsSidebar"},"smart-contracts/state/simple-state":{"id":"smart-contracts/state/simple-state","title":"Simple State","description":"State is where the smart contract works with saving and retrieving data. You can think of it much like a database","sidebar":"docsSidebar"},"smart-contracts/verify":{"id":"smart-contracts/verify","title":"Verifying Smart Contracts","description":"Smart Contract verification is an important process to ensure you are running the correct contract.","sidebar":"docsSidebar"}}}')}}]);