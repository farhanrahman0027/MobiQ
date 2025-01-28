import React from "react";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="relative border border-gray-300 rounded-lg shadow-md p-2 flex flex-col items-center bg-[#F6F6F6]">
      {/* Heart Icon */}
      <div className="absolute top-3 right-3 cursor-pointer text-2xl text-gray-500 hover:text-red-500 z-10">
        <FaRegHeart />
      </div>

      <div className="flex flex-col items-center mt-8">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 rounded-md"
        />

        {/* Product Details */}
        <h2 className="text-sm font-semibold text-gray-800 mt-4 px-2 h-12">
          {product.name}
        </h2>
        <p className="text-black text-xl font-medium mt-2">${product.price}</p>

        {/* Buy Now Button */}
        <button className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-green-500 w-1/2">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
