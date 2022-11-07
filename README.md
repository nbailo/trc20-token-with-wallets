# TRC20 Token with Wallets

## Description

This repository contains tooling for deploying TRC20 token contract to the Tron network, including testnets. Also, it has MultisigWallet and ProxyWallet contracts.

Multisig Wallet could be used for its intended purpose.

Proxy Wallet allows to test corner cases like complex internal transactions for blockchain scanner. Be aware that this contract doesn't have any guard modifiers for ownable access, so it's only suitable for testnet. Do not forget to deposit the required tokens before


## Deploy
Create a `.env` file containing something like

    export PRIVATE_KEY_NILE=4E7FECCB71207B867C495B51A9758B104B1D4422088A87F4978BE64636656243

Then, run the migration with:

    source .env && tronbox migrate --network nile