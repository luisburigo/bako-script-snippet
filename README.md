# Bako script snippet

This repository explains how to execute Sway Script through the Bako Safe SDK.

## Quick start
1. Clone the repo
2. Run `pnpm install`
3. Open the file `src/index.ts` and change:
````ts
const PROVIDER_URL = 'https://testnet.fuel.network/v1/graphql';
const PRIVATE_KEY = '<private-key>'; // Private key of the vault member

// ...
const vault = await Vault.fromAddress(
    '<vault-address>', // Address of the vault
    provider
);
````
4. Run `pnpm start` to run the script