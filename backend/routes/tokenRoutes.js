// backend/routes/tokenRoutes.js
const express = require('express');
const { getTokenInfo } = require('../controllers/tokenController'); // Importar el controlador necesario

const router = express.Router();

// Ruta para obtener información de un token específico usando su assetId
router.get('/token/:assetId', getTokenInfo);

module.exports = router;
