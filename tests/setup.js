/* global process, beforeAll, afterAll, global */
import { MongoClient } from 'mongodb';

let client;

beforeAll(async () => {
  const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017';
  client = new MongoClient(mongoUrl);
  try {
    await client.connect();
    global.db = client.db('verdantchainpog_test');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
});

afterAll(async () => {
  if (client) {
    await client.close();
  }
});
