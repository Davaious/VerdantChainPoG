// frontend/src/pages/Tokens.js
import React, { useState } from 'react';
import { fetchTokenInfo } from '../services/api';

const Tokens = () => {
  const [assetId, setAssetId] = useState('');
  const [tokenInfo, setTokenInfo] = useState(null);

  const handleFetch = async () => {
    const data = await fetchTokenInfo(assetId);
    setTokenInfo(data);
  };

  return (
    <div className="p-8 text-white bg-gradient-to-r from-blue-900 to-blue-700">
      <h1 className="text-3xl font-bold mb-4">VerdanToken Information</h1>
      <input
        type="text"
        placeholder="Enter Asset ID"
        value={assetId}
        onChange={(e) => setAssetId(e.target.value)}
        className="p-2 rounded-lg text-black"
      />
      <button
        onClick={handleFetch}
        className="ml-4 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg"
      >
        Fetch Info
      </button>
      {tokenInfo && (
        <div className="mt-4">
          <p>
            <strong>Name:</strong> {tokenInfo.params.name}
          </p>
          <p>
            <strong>Total Supply:</strong> {tokenInfo.params.total}
          </p>
        </div>
      )}
    </div>
  );
};

export default Tokens;
