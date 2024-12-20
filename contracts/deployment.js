// contracts/deployment.js
const algosdk = require('algosdk');

// Configuración de la red
const algodToken = "your-algod-token";
const algodServer = "https://testnet-algorand.api.purestake.io/ps2";
const algodPort = "";

// Configuración del ASA
const params = {
  total: 100000000, // Suministro total
  decimals: 2, // Decimales
  defaultFrozen: false,
  unitName: "VRT",
  assetName: "VerdanToken",
};

const deployToken = async () => {
  const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

  const account = algosdk.mnemonicToSecretKey("your-25-word-mnemonic");

  const suggestedParams = await algodClient.getTransactionParams().do();
  const txn = algosdk.makeAssetCreateTxnWithSuggestedParams(
    account.addr,
    undefined,
    params.total,
    params.decimals,
    params.defaultFrozen,
    params.unitName,
    params.assetName,
    undefined,
    undefined,
    undefined,
    undefined,
    suggestedParams
  );

  const signedTxn = txn.signTxn(account.sk);
  const response = await algodClient.sendRawTransaction(signedTxn).do();
  console.log("Asset created. Transaction ID:", response.txId);
};

deployToken();
