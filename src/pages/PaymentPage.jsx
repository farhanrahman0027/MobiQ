import React, { useState } from "react";
import { Link } from "react-router-dom";
import p1 from "../assets/ShoppingCart/p1.svg";
import p2 from "../assets/ShoppingCart/p2.svg";
import p3 from "../assets/ShoppingCart/p3.svg";
import creditcard from "../assets/payment/creditcard.svg";
const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  return (
    <div className="flex justify-center items-center min-h-screen  p-8 py-24">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl flex gap-24 ">
        {/* Left Side: Order Summary */}
        <div className="w-1/2 pr-6">
          <h2 className="text-lg font-semibold mb-4">Summary</h2>

          <div className="space-y-3">
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
              <img src={p1} alt="iPhone" className="w-10 h-10" />
              <span>Apple iPhone 14 Pro Max 128Gb</span>
              <span className="font-bold">$1399</span>
            </div>

            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
              <img src={p2} alt="AirPods" className="w-10 h-10" />
              <span>AirPods Max Silver</span>
              <span className="font-bold">$549</span>
            </div>

            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
              <img src={p3} alt="Watch" className="w-10 h-10" />
              <span>Apple Watch Series 9 GPS 41mm</span>
              <span className="font-bold">$399</span>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <p className="font-semibold">Address</p>
            <p>1131 Dusty Townline, Jacksonville, TX 40322</p>
          </div>

          <div className="mt-2 text-sm text-gray-600">
            <p className="font-semibold">Shipment method</p>
            <p>Free</p>
          </div>

          <div className="mt-4">
            <p className="flex justify-between text-sm">
              <span>Subtotal</span> <span className="font-bold">$2347</span>
            </p>
            <p className="flex justify-between text-sm">
              <span>Estimated Tax</span> <span className="font-bold">$50</span>
            </p>
            <p className="flex justify-between text-sm">
              <span>Estimated Shipping & Handling</span> <span className="font-bold">$29</span>
            </p>
            <p className="flex justify-between text-lg font-bold mt-2">
              <span>Total</span> <span>$2426</span>
            </p>
          </div>
        </div>

        {/* Right Side: Payment Section */}
        <div className="w-1/2 ">
          <h2 className="text-lg font-semibold mb-4">Payment</h2>

          {/* Payment Method Selection */}
          <div className="flex space-x-4 border-b pb-2">
            {["Credit Card", "PayPal", "PayPal Credit"].map((method) => (
              <button
                key={method}
                className={`pb-2 text-sm font-semibold ${
                  paymentMethod === method ? "border-b-2 border-black" : "text-gray-500"
                }`}
                onClick={() => setPaymentMethod(method)}
              >
                {method}
              </button>
            ))}
          </div>

          {/* Credit Card Form */}
          {paymentMethod === "Credit Card" && (
            <div className="mt-4">
              {/* Credit Card Mock */}
              <div className=" p-4 rounded-lg mb-4 w-2/3">
               <img src={creditcard} alt="" />
              </div>

              <input
                type="text"
                placeholder="Cardholder Name"
                className="w-full border p-2 rounded mb-2"
              />
              <input
                type="text"
                placeholder="Card Number"
                className="w-full border p-2 rounded mb-2"
              />

              <div className="flex space-x-2">
                <input type="text" placeholder="Exp. Date" className="border p-2 rounded w-1/2" />
                <input type="text" placeholder="CVV" className="border p-2 rounded w-1/2" />
              </div>
            </div>
          )}

          {/* Checkbox */}
          <div className="flex items-center mt-3">
            <input type="checkbox" id="billing" className="mr-2" />
            <label htmlFor="billing" className="text-sm">Same as billing address</label>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <Link to ="/ShoppingCartStep2"><button className="bg-gray-200 px-6 py-2 rounded">Back</button></Link>
            <button className="bg-black text-white px-6 py-2 rounded">Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
