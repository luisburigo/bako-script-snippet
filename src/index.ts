import {Wallet} from "fuels";
import {BakoProvider, Vault} from "bakosafe";
import {BakoScript} from "./types";

const PROVIDER_URL = 'https://testnet.fuel.network/v1/graphql';
const PRIVATE_KEY = '<private-key>';

const main = async () => {
    const wallet = Wallet.fromPrivateKey(PRIVATE_KEY);

    // Create a challenge to authenticate in BakoProvider
    const challenge = await BakoProvider.setup({
        address: wallet.address.toB256(),
        provider: PROVIDER_URL,
    });
    const token = await wallet.signMessage(challenge);
    const provider = await BakoProvider.authenticate(PROVIDER_URL, {
        token,
        challenge,
        address: wallet.address.toB256(),
    });

    // Instance the vault by address
    const vault = await Vault.fromAddress('<vault-address>', provider);

    // Create a script instance and get the transaction request
    const script = new BakoScript(vault);
    const request = await script.functions.main().getTransactionRequest();

    // Send the transaction to Vault
    const {hashTxId} = await vault.BakoTransfer(request, {
        name: 'Transaction Name', // Optional
    });
    console.log('Transaction ID:', hashTxId);
};

main();