// frontend/src/services/api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const fetchValidators = async () => {
  const response = await axios.get(`${API_URL}/validators`);
  return response.data;
};

export const calculateGreenScore = async (data) => {
  const response = await axios.post(`${API_URL}/green-score`, data);
  return response.data;
};

export const fetchTokenInfo = async (assetId) => {
  const response = await axios.get(`${API_URL}/token/${assetId}`);
  return response.data;
};
