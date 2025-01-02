//backend/app.js
import express from 'express';
import dotenv from 'dotenv';
import validatorRoutes from './routes/validatorRoutes';
import tokenRoutes from './routes/tokenRoutes';
// Si necesitas usar tealCompiler, descomenta la línea siguiente y asegúrate de que exista el archivo utils/tealCompiler.js
// import tealCompiler from './utils/tealCompiler';

dotenv.config(); // Cargar las variables de entorno desde .env

const app = express();

// Middleware para manejar JSON
app.use(express.json());

// Rutas principales
app.use('/api/validator', validatorRoutes);
app.use('/api/token', tokenRoutes);

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
