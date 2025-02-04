# Monetizado Proxy (ProxyJS)

Monetizado Proxy is the platform that allows you to implement [Monetizado](https://github.com/Monetizado/Contracts) just adding 2 lines in your content, to monetize it.

**This is the first version**

## How to use

1. [Create the protected content using the smart contract](https://github.com/Monetizado/Contracts) or in the [Manager](https://monetizado.github.io/manager/)
2. Add a link tag in the head of the HTML code of your page, with the attribute "rel" with the value "monetized" and in href it follows the following structure:

**<link rel="monetizado" href="network://creator_address/sequence_id" />**

- network: It is the network where the content has been protected.
- creator_address: It is the address (0x..) of the content creator. It can be your address if you are the creator.
- sequence_id: It is the Id that the contract was terminated when you specified the new protected content (starts from 0 onwards, it is numeric).

For example:
```
<link rel="monetizado" href="opbnb:testnet://0xda3ec0b8bddd2e8bdedede3333fbaf938fcc18c5/0" />
```

The previous example means that the content is protected (by Id 0), by the creator (0xda3ec0b8bddd2e8bdedede3333fbaf938fcc18c5 for example), and that combination is the payment must be made to unlock it.

3. On the same page you want to monetize, import Proxy.JS.
```
<script src="./proxy.js"></script>
```

4. Users will be redirected to a page where they need to pay for accessing your content.
5. If they pay, automatically they will be redirected again to your page and see all the content.

## Available Networks 
For the Monetizado link tag, you have the following list of networks for the Proxy:

### Testnets

- **aia:testnet**
- **arbitrum:sepolia**
- **aurora:testnet**
- **base:testnet**
- **berachain:testnet**
- **bittorrent:testnet**
- **bnb:testnet**
- **botanix:testnet**
- **camp:testnetv1**
- **celo:testnet**
- **chiliz:testnet**
- **core:testnet**
- **creator:testnet**
- **duckchain:testnet**
- **educhain:testnet**
- **etherlink:testnet**
- **filecoin:testnet**
- **fuse:testnet**
- **kaia:testnet**
- **kii:testnet**
- **linea:testnet**
- **lisk:testnet**
- **mantle:testnet**
- **meter:testnet**
- **mode:testnet**
- **moonbeam:testnet**
- **morph:testnet**
- **neox:testnet**
- **pwrbtc:testnet**
- **rootstock:testnet**
- **shibarium:testnet**
- **shido:testnet**
- **taiko:testnet**
- **theta:testnet**
- **weavevm:testnet**

### Mainnets

- **bittorrent:testnet**

If you need the Smart Contracts Ids for those networks, you can get them [here](https://github.com/Monetizado/Contracts/blob/main/README.md#contract-ids).
