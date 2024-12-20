// README.md
# VerdantChainPoG

## Descripción
VerdantChainPoG es un proyecto que implementa el algoritmo de consenso Proof of Green (PoG), incentivando el uso de energía verde y la reducción de huella de carbono a través de blockchain.

## Características
- **Token Nativo:** VerdanToken (basado en Algorand ASA).
- **Algoritmo Green Score:** Selección de validadores según criterios ecológicos.
- **Marketplace:** Intercambio de bienes y certificados de huella de carbono.

## Estructura del Proyecto
```
project/
├── backend/
│   ├── app.js
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── UserDashboard.js
│   │   │   ├── AdminDashboard.js
│   ├── package.json
└── docker-compose.yml
```

## Instalación
### Backend
1. Instala dependencias:
   ```bash
   cd backend
   npm install
   ```
2. Configura variables en `.env`:
   ```
   DB_USER=youruser
   DB_PASSWORD=yourpassword
   ALGOD_TOKEN=youralgodtoken
   ALGOD_SERVER=https://testnet-algorand.api.purestake.io/ps2
   ALGOD_PORT=443
   ```
3. Inicia el servidor:
   ```bash
   npm start
   ```

### Frontend
1. Instala dependencias:
   ```bash
   cd frontend
   npm install
   ```
2. Inicia el servidor:
   ```bash
   npm start
   ```

## Uso
- Accede a `http://localhost:3000` para ver la interfaz de usuario.
- Utiliza `http://localhost:5000/api` para interactuar con las APIs del backend.

## Docker
1. Construye y ejecuta los servicios:
   ```bash
   docker-compose up --build
   ```

## Contribuciones
Se aceptan contribuciones para mejorar el algoritmo y la implementación del proyecto. Por favor, abre un issue o envía un pull request.
