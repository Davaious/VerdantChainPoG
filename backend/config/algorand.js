// backend/config/algorand.js
import algosdk from 'algosdk';

const algodToken = process.env.ALGOD_TOKEN;
const algodServer = process.env.ALGOD_SERVER;
const algodPort = process.env.ALGOD_PORT;

const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

export default algodClient;