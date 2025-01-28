import React from "react";
import p1 from "../assets/ShoppingCart/p1.svg";
import p2 from "../assets/ShoppingCart/p2.svg";
import p3 from "../assets/ShoppingCart/p3.svg";
import { Link } from "react-router-dom";
const ShoppingCart = () => {
  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: "Apple iPhone 14 Pro Max 128Gb Deep Purple",
      image: p1,
      price: 1399,
      quantity: 1,
      code: "#25139526913984",
    },
    {
      id: 2,
      name: "AirPods Max Silver",
      image: p2,
      price: 549,
      quantity: 1,
      code: "#53459358345",
    },
    {
      id: 3,
      name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
      image: p3 ,
      price: 399,
      quantity: 1,
      code: "#63632324",
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const estimatedTax = 50;
  const shippingHandling = 29;
  const total = subtotal + estimatedTax + shippingHandling;

  return (
    <div className="max-w-5xl py-24 mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-28">
      {/* Shopping Cart */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center border-b py-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg" />
            <div className="ml-4 flex-1">
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-500 text-sm">{item.code}</p>
            </div>
            <div className="flex items-center">
              <button className="px-2">-</button>
              <span className="px-4 border text-center">{item.quantity}</span>
              <button className="px-2">+</button>
            </div>
            <p className="ml-4 font-semibold">${item.price}</p>
            <button className="ml-4 text-gray-500">✖</button>
          </div>
        ))}
      </div>
      
      {/* Order Summary */}
      <div className="p-6 border rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <input type="text" placeholder="Discount code / Promo code" className="w-full p-2 border rounded mb-2" />
        <input type="text" placeholder="Your bonus card number" className="w-full p-2 border rounded mb-2" />
        <button className="w-full p-2 bg-gray-200 rounded mb-4">Apply</button>
        <div className="border-t pt-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Subtotal</span> <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Estimated Tax</span> <span>${estimatedTax}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Estimated Shipping & Handling</span> <span>${shippingHandling}</span>
          </div>
          <div className="flex justify-between text-xl font-bold mt-4">
            <span>Total</span> <span>${total}</span>
          </div>
        </div>
        <Link to="/ShoppingCartStep1">
        <button className="w-full bg-black text-white p-3 rounded-lg mt-4">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;