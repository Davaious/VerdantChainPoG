// backend/routes/validatorRoutes.js
const express = require('express');
const {
  getValidators,
  calculateGreenScore,
} = require('../controllers/validatorController'); // Importar los controladores necesarios

const router = express.Router();

// Ruta para obtener la lista de validadores
router.get('/validators', getValidators);

// Ruta para calcular el Green Score
router.post('/green-score', calculateGreenScore);

module.exports = router;
