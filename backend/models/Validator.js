// backend/models/Validator.js
const db = require('../config/db');

const Validator = {
  getAll: async () => {
    const query = 'SELECT * FROM validators';
    const result = await db.query(query);
    return result.rows;
  },
};

module.exports = Validator;
