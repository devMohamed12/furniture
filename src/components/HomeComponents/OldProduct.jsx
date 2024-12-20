import React from 'react';

const OldProduct = ({ product }) => (
  <div className="bg-white p-5 text-center border border-gray-300">
    <img src={product.image} alt={product.title} className="w-full h-auto" />
    <button className="mt-3 bg-blue-500 text-white py-1 px-3 rounded">Add To Cart</button>
    <div className="mt-3">
      <div className="text-yellow-500">★★★★☆</div>
      <div className="font-bold">{product.title}</div>
      <div className="text-gray-700">${product.price.toFixed(2)}</div>
    </div>
  </div>
);

export default OldProduct; 