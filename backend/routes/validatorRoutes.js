// backend/routes/validatorRoutes.js
const express = require('express');
const {
  getValidators,
  calculateGreenScore,
} = require('../controllers/validatorController');

const router = express.Router();

router.get('/validators', getValidators);
router.post('/green-score', calculateGreenScore);

module.exports = router;
