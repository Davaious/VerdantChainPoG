// services/greenScoreService.js
const calculateGreenScore = (energySource, efficiency) => {
  const sources = {
    solar: 1.5,
    wind: 1.2,
    hydro: 1.3,
    fossil: 0.5,
  };

  const sourceMultiplier = sources[energySource] || 0;
  const score = sourceMultiplier * efficiency;

  return score > 10 ? 10 : score; // Normalización del puntaje
};

module.exports = { calculateGreenScore };
