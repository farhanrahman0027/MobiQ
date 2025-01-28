import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import phone1 from "../assets/phones/phone1.svg";
import phone2 from "../assets/phones/phone2.svg";
import phone3 from "../assets/phones/phone3.svg";
import phone4 from "../assets/phones/phone4.svg";
import phone5 from "../assets/phones/phone5.svg";
import phone6 from "../assets/phones/phone6.svg";
import phone7 from "../assets/phones/phone7.svg";
import phone8 from "../assets/phones/phone8.svg";
import phone9 from "../assets/phones/phone9.svg";

const Phones = () => {
  const phones = [
    {
      id: 1,
      image: phone1,
      name: "Apple iPhone 14 Pro Max 128GB Deep Purple ",
      price: "499",
    },
    {
      id: 2,
      image: phone2,
      name: "Blackmagic Pocket Cinema Camera 6k",
      price: "599",
    },
    {
      id: 3,
      image: phone3,
      name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium ",
      price: "699",
    },
    {
      id: 4,
      image: phone4,
      name: "AirPods Max Silver Starlight Aluminium",
      price: "799",
    },
    {
      id: 5,
      image: phone5,
      name: "Samsung Galaxy Watch6 Classic 47mm Black",
      price: "899",
    },
    {
      id: 6,
      image: phone6,
      name: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
      price: "999",
    },
    { id: 7, image: phone7, name: "Galaxy Buds FE Graphite", price: "1099" },
    {
      id: 8,
      image: phone8,
      name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
      price: "1199",
    },

    {
      id: 9,
      image: phone9,
      name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
      price: "1199",
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar/>
      

      {/* Product Grid */}
      <Link to="/ProductDetails">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full">
        {phones.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div></Link>
    </div>
  );
};

export default Phones;
