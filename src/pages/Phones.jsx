import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import product1 from "../assets/products/product1.svg";
import product2 from "../assets/products/product2.svg";
import product3 from "../assets/products/product3.svg";
import product4 from "../assets/products/product4.svg";
import product5 from "../assets/products/product5.svg";
import product6 from "../assets/products/product6.svg";
import product7 from "../assets/products/product7.svg";
import product8 from "../assets/products/product8.svg";

const Phones = () => {
  const phones = [
    {
      id: 1,
      image: product1,
      name: "Apple iPhone 14 Pro Max 128GB Deep Purple ",
      price: "499",
    },
    {
      id: 2,
      image: product2,
      name: "Blackmagic Pocket Cinema Camera 6k",
      price: "599",
    },
    {
      id: 3,
      image: product3,
      name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium ",
      price: "699",
    },
    {
      id: 4,
      image: product4,
      name: "AirPods Max Silver Starlight Aluminium",
      price: "799",
    },
    {
      id: 5,
      image: product5,
      name: "Samsung Galaxy Watch6 Classic 47mm Black",
      price: "899",
    },
    {
      id: 6,
      image: product6,
      name: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
      price: "999",
    },
    { id: 7, image: product7, name: "Galaxy Buds FE Graphite", price: "1099" },
    {
      id: 8,
      image: product8,
      name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
      price: "1199",
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Product Grid */}
      <Link to="/ProductDetails">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 w-full">
        {phones.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div></Link>
    </div>
  );
};

export default Phones;
