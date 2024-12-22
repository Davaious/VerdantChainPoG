// backend/controllers/tokenController.js
const algodClient = require('../config/algorand');

const getTokenInfo = async (req, res) => {
  try {
    const assetId = req.params.assetId;
    const assetInfo = await algodClient.getAssetByID(assetId).do();
    res.json(assetInfo);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching token info' });
  }
};

module.exports = { getTokenInfo };
