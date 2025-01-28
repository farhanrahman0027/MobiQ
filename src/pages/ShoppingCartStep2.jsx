import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const ShoppingCartStep2 = () => {

    const [selectedShipping, setSelectedShipping] = useState(null);
  return (
    <div className="max-w-5xl mx-auto p-6 py-24">
      <h1 className="text-2xl font-bold mb-4">Step 2: Shipping</h1>
      <div className="border rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Shipment Method</h2>
        <div
          className={`border p-4 rounded mb-2 cursor-pointer ${selectedShipping === "free" ? "border-black" : ""}`}
          onClick={() => setSelectedShipping("free")}
        >
          <input
            type="radio"
            id="free"
            name="shipping"
            className="mr-2 cursor-pointer"
            checked={selectedShipping === "free"}
            onChange={() => setSelectedShipping("free")}
          />
          <label htmlFor="free" className="font-medium">Free - Regular shipment</label>
          <span className="text-gray-500 text-sm ml-2">17 Oct, 2023</span>
        </div>
        <div
          className={`border p-4 rounded mb-2 cursor-pointer ${selectedShipping === "fast" ? "border-black" : ""}`}
          onClick={() => setSelectedShipping("fast")}
        >
          <input
            type="radio"
            id="fast"
            name="shipping"
            className="mr-2 cursor-pointer"
            checked={selectedShipping === "fast"}
            onChange={() => setSelectedShipping("fast")}
          />
          <label htmlFor="fast" className="font-medium">$8.50 - Get your delivery as soon as possible</label>
          <span className="text-gray-500 text-sm ml-2">1 Oct, 2023</span>
        </div>
        <div
          className={`border p-4 rounded mb-4 cursor-pointer ${selectedShipping === "schedule" ? "border-black" : ""}`}
          onClick={() => setSelectedShipping("schedule")}
        >
          <input
            type="radio"
            id="schedule"
            name="shipping"
            className="mr-2 cursor-pointer"
            checked={selectedShipping === "schedule"}
            onChange={() => setSelectedShipping("schedule")}
          />
          <label htmlFor="schedule" className="font-medium">Schedule - Pick a date when you want to get your delivery</label>
          <input type="date" className="ml-2 border rounded p-1 cursor-pointer" />
        </div>
        <div className="flex justify-between mt-4">
          <Link to="/ShoppingCartStep1">
            {" "}
            <button className="p-2 border rounded">Back</button>
          </Link>
          <Link to="/PaymentPage">
            <button className="p-2 bg-black text-white rounded">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartStep2;
