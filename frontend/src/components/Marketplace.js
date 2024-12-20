// frontend/src/components/Marketplace.js
import React from 'react';

const Marketplace = () => {
  const products = [
    { id: 1, name: 'Solar Panel NFT', price: '50 VRT', image: '/solar-panel.png' },
    { id: 2, name: 'Wind Turbine NFT', price: '75 VRT', image: '/wind-turbine.png' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <img src={product.image} alt={product.name} className="w-full rounded-lg mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-lg text-gray-400">{product.price}</p>
            <button className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
