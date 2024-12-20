// backend/controllers/validatorController.js
const Validator = require('../models/Validator');
const GreenScoreService = require('../services/greenScoreService');

const getValidators = async (req, res) => {
  try {
    const validators = await Validator.getAll();
    res.json(validators);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching validators' });
  }
};

const calculateGreenScore = async (req, res) => {
  const { energySource, efficiency } = req.body;
  try {
    const score = GreenScoreService.calculateGreenScore(energySource, efficiency);
    res.json({ greenScore: score });
  } catch (error) {
    res.status(500).json({ error: 'Error calculating Green Score' });
  }
};

module.exports = { getValidators, calculateGreenScore };