// tests/integration/setup.js
const { MongoClient } = require('mongodb');

let client;

beforeAll(async () => {
  client = new MongoClient(process.env.MONGO_URL);
  await client.connect();
  global.db = client.db('verdantchainpog_test');
});

afterAll(async () => {
  await client.close();
});
