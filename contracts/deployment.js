// contracts/deployment.js
import {
  Algodv2,
  mnemonicToSecretKey,
  makeAssetCreateTxnWithSuggestedParams,
} from 'algosdk';

// Configuración de la red
const algodToken = 'your-algod-token';
const algodServer = 'https://testnet-algorand.api.purestake.io/ps2';
const algodPort = '';

// Configuración del ASA
const params = {
  total: 100000000, // Suministro total
  decimals: 2, // Decimales
  defaultFrozen: false,
  unitName: 'VRT',
  assetName: 'VerdanToken',
};

const deployToken = async () => {
  const algodClient = new Algodv2(algodToken, algodServer, algodPort);

  const account = mnemonicToSecretKey('your-25-word-mnemonic');

  const suggestedParams = await algodClient.getTransactionParams().do();
  const txn = makeAssetCreateTxnWithSuggestedParams(
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
  console.log('Asset created. Transaction ID:', response.txId);
};

deployToken();
