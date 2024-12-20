// backend/routes/tokenRoutes.js
const express = require('express');
const { getTokenInfo } = require('../controllers/tokenController');

const router = express.Router();

router.get('/token/:assetId', getTokenInfo);

module.exports = router;