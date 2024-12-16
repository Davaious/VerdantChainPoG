/* eslint-env node */
import express from 'express'; // Cambié import a require
const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to VerdantChain!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
