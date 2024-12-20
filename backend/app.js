// backend/app.js
const express = require('express');
const dotenv = require('dotenv');
const validatorRoutes = require('./routes/validatorRoutes');
const tokenRoutes = require('./routes/tokenRoutes');
const tealCompiler = require('./utils/tealCompiler');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api', validatorRoutes);
app.use('/api', tokenRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});