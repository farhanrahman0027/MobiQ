import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const ShoppingCartStep1 = () => {
    const [selectedAddress, setSelectedAddress] = useState(null);
  return (
    <div className="max-w-5xl mx-auto p-6 py-24">
      <h1 className="text-2xl font-bold mb-4">Step 1: Address</h1>
      <div className="border rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Select Address</h2>
        <div
          className={`border p-4 rounded mb-2 cursor-pointer ${
            selectedAddress === "address1" ? "border-black" : ""
          }`}
          onClick={() => setSelectedAddress("address1")}
        >
          <input
            type="radio"
            id="address1"
            name="address"
            className="mr-2"
            checked={selectedAddress === "address1"}
            onChange={() => setSelectedAddress("address1")}
          />
          <label htmlFor="address1" className="font-medium">
            2118 Thornridge
          </label>
          <p className="text-gray-500 text-sm">
            2118 Thornridge Cir, Syracuse, Connecticut 35624
          </p>
          <p className="text-gray-500 text-sm">(200) 555-0104</p>
        </div>
        <div
          className={`border p-4 rounded mb-4 cursor-pointer ${
            selectedAddress === "address2" ? "border-black" : ""
          }`}
          onClick={() => setSelectedAddress("address2")}
        >
          <input
            type="radio"
            id="address2"
            name="address"
            className="mr-2"
            checked={selectedAddress === "address2"}
            onChange={() => setSelectedAddress("address2")}
          />
          <label htmlFor="address2" className="font-medium">
            HeadOffice
          </label>
          <p className="text-gray-500 text-sm">
            2715 Ash Dr. San Jose, South Dakota 82475
          </p>
          <p className="text-gray-500 text-sm">(704) 555-0127</p>
        </div>
        <button className="border p-2 w-full rounded bg-gray-200">
          Add New Address
        </button>
        <div className="flex justify-between mt-4">
          <Link to="/ShoppingCart">
            {" "}
            <button className="p-2 border rounded">Back</button>
          </Link>

          <Link to="/ShoppingCartStep2">
            <button className="p-2 bg-black text-white rounded">Next</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartStep1;
