// backend/controllers/tokenController.js
import algosdk from 'algosdk';
import algodClient from '../config/algorand.js';

const createToken = async (req, res) => {
  try {
    const { name, totalSupply, decimals } = req.body;

    const params = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetCreateTxnWithSuggestedParams(
      process.env.CREATOR_ADDRESS,
      undefined,
      totalSupply,
      decimals,
      false,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      name,
      undefined,
      undefined,
      params
    );

    const signedTxn = txn.signTxn(Buffer.from(process.env.CREATOR_PRIVATE_KEY, 'base64'));
    const sendTxn = await algodClient.sendRawTransaction(signedTxn).do();

    res.status(200).json({ txId: sendTxn.txId, message: 'Token creado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el token' });
  }
};

export default { createToken };