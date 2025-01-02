// backend/controllers/validatorController.js
import Validator from '../models/Validator.js';
import GreenScore from '../models/GreenScore.js';

const getValidators = async (req, res) => {
  try {
    const validators = await Validator.findAll();
    res.status(200).json(validators);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener validadores' });
  }
};

export default { getValidators };

// Posible integración con Polkadot
// Se puede integrar Polkadot usando la biblioteca @polkadot/api para conectarse a un nodo y
// gestionar interoperabilidad. Ejemplo inicial:
import { ApiPromise, WsProvider } from '@polkadot/api';

const connectPolkadot = async () => {
  const wsProvider = new WsProvider('wss://rpc.polkadot.io');
  const api = await ApiPromise.create({ provider: wsProvider });

  console.log('Conectado a Polkadot:', api.genesisHash.toHex());

  return api;
};

export { connectPolkadot };
