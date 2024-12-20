// backend/models/GreenScore.js
const db = require('../config/db');

const GreenScore = {
  saveScore: async (userId, score) => {
    const query = 'INSERT INTO green_scores (user_id, score) VALUES ($1, $2)';
    await db.query(query, [userId, score]);
  },
};

module.exports = GreenScore;