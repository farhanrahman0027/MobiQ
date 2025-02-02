import React from 'react'

const DiscountProduct = ({discountproduct}) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-2 flex flex-col items-center bg-[#F6F6F6]">
      <img src={discountproduct.image} alt={discountproduct.name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-sm font-semibold text-gray-800 mt-4 px-2 h-12">{discountproduct.name}</h2>
      <p className="text-black text-xl font-medium mt-2">${discountproduct.price}</p>
      <button className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-green-500 w-1/2">
        Buy Now
      </button>
    </div>
  )
}

export default DiscountProduct
