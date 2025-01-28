import React from "react";
import { Link } from "react-router-dom";
import iphoneimage from "../assets/HeroSection/iphoneimage.svg";
import p1 from "../assets/HeroSection/p1.svg";
import p2 from "../assets/HeroSection/p2.svg";
import p3 from "../assets/HeroSection/p3.svg";
import p4 from "../assets/HeroSection/p4.svg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CiMobile4 } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { PiHeadphones } from "react-icons/pi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { VscGame } from "react-icons/vsc";
import ProductCard from "../components/ProductCard";
import product1 from "../assets/products/product1.svg";
import product2 from "../assets/products/product2.svg";
import product3 from "../assets/products/product3.svg";
import product4 from "../assets/products/product4.svg";
import product5 from "../assets/products/product5.svg";
import product6 from "../assets/products/product6.svg";
import product7 from "../assets/products/product7.svg";
import product8 from "../assets/products/product8.svg";
import banner1 from "../assets/Banners/banner1.svg";
import banner2 from "../assets/Banners/banner2.svg";
import banner3 from "../assets/Banners/banner3.svg";
import banner4 from "../assets/Banners/banner4.svg";
import discountproduct1 from "../assets/products/discountproduct1.svg";
import discountproduct2 from "../assets/products/discountproduct2.svg";
import discountproduct3 from "../assets/products/discountproduct3.svg";
import discountproduct4 from "../assets/products/discountproduct4.svg";
import DiscountProduct from "../components/DiscountProduct";

const Home = () => {
  const products = [
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

  const discount = [
    {
      id: 1,
      image: discountproduct1,
      name: "Apple iPhone 14 Pro Max 128GB Deep Purple ",
      price: "499",
    },
    {
      id: 2,
      image: discountproduct2,
      name: "Blackmagic Pocket Cinema Camera 6k",
      price: "599",
    },
    {
      id: 3,
      image: discountproduct3,
      name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium ",
      price: "699",
    },
    {
      id: 4,
      image: discountproduct4,
      name: "AirPods Max Silver Starlight Aluminium",
      price: "799",
    },
  ];

  return (
    <div>
      {/* Hero Section 1 */}
      <div className="bg-[#211C24] flex flex-col sm:flex-row gap-6 sm:gap-24 px-6 sm:px-20 py-12 ">
        <div className="text-center sm:text-left flex flex-col gap-4 w-full sm:w-[90vh]">
          <p className="text-[#909090]">Pro.Beyond.</p>
          <h1 className="text-3xl sm:text-5xl text-white">IPhone 14 Pro</h1>
          <p className="text-[#909090] text-sm sm:text-base">
            Created to change everything for the better. For everyone
          </p>
          <button className="text-white px-6 py-2 border-2 rounded-sm w-1/2 sm:w-1/3 mt-4">
            Shop Now
          </button>
        </div>
        <div className="mt-4 sm:mt-0 flex justify-center sm:justify-start">
          <img
            src={iphoneimage}
            alt="iPhone Image"
            className="w-full sm:w-auto"
          />
        </div>
      </div>

      {/* Hero Section 2 */}
      <div className="flex flex-col sm:flex-row items-center    ">
        <div className="w-full sm:w-3/4">
          <div className="flex">
            <img src={p1} alt="Product Image" className="w-full h-[50vh]" />
            <div className="flex flex-col pt-20 gap-4">
              <h1 className="text-2xl sm:text-4xl font-semibold text-center sm:text-left">
                Playstation 5
              </h1>
              <p className="text-[#909090] text-sm sm:text-base text-center sm:text-left ">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>
          <div className="flex  ">
            <div className="flex gap-4">
              <img src={p2} alt="Product Image" className="w-1/3 h-[50vh]" />
              <div className="flex flex-col pt-20 gap-4">
                <h1 className="text-xl font-semibold text-center sm:text-left">
                  Apple AirPods Max
                </h1>
                <p className="text-[#909090] text-sm sm:text-base text-center sm:text-left ">
                  Computational audio. Listen, it's powerful
                </p>
              </div>
              <div className="flex bg-[#353535] gap-4">
                <img src={p3} alt="Product Image" className="w-1/3 h-[50vh]" />
                <div className="flex flex-col pt-20 gap-4">
                  <h2 className=" text-xl font-semibold text-center sm:text-left text-white">
                    Apple Vision Pro
                  </h2>
                  <p className="text-[#909090] text-sm sm:text-base text-center sm:text-left ">
                  An immersive way to experience entertainment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#EDEDED] flex  items-center gap-4  sm:gap-8  sm:py-20 sm:w-2/3">
          <div className="flex flex-col items-center  ml-8 gap-4 sm:gap-8 sm:py-18 sm:w-2/3">
            <h1 className="text-2xl sm:text-4xl font-semibold text-center sm:text-left">
              Macbook Air
            </h1>
            <p className="text-[#909090] text-sm sm:text-base text-center sm:text-left">
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button className="px-4 py-2 border-2 w-1/2 sm:w-1/3 border-black rounded-md text-center">
              Shop Now
            </button>
          </div>
          <div>
            <img
              src={p4}
              alt="MacBook Image"
              className=" mt-6 sm:block hidden"
            />
          </div>
        </div>
      </div>

      {/* Browse By Category */}
      <div className="px-6 sm:px-32 py-12 sm:py-20">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl sm:text-3xl w-full">
            Browse By Category
          </h1>
          <div className="flex gap-4">
            <a href="" className="text-xl sm:text-2xl">
              <IoIosArrowBack />
            </a>
            <a href="" className="text-xl sm:text-2xl">
              <IoIosArrowForward />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
          <Link
            to="/Phones"
            className="flex flex-col gap-2 bg-[#EDEDED] items-center py-4 rounded-md"
          >
            <CiMobile4 className="text-4xl" />
            <p>Phones</p>
          </Link>
          <Link
            to="/SmartWatches"
            className="flex flex-col gap-2 bg-[#EDEDED] items-center py-4 rounded-md"
          >
            <BsSmartwatch className="text-4xl" />
            <p>Smart Watches</p>
          </Link>
          <Link
            to="/Cameras"
            className="flex flex-col gap-2 bg-[#EDEDED] items-center py-4 rounded-md"
          >
            <IoCameraOutline className="text-4xl" />
            <p>Cameras</p>
          </Link>
          <Link
            to="/HeadPhones"
            className="flex flex-col gap-2 bg-[#EDEDED] items-center py-4 rounded-md"
          >
            <PiHeadphones className="text-4xl" />
            <p>Headphones</p>
          </Link>
          <Link
            to="/Computers"
            className="flex flex-col gap-2 bg-[#EDEDED] items-center py-4 rounded-md"
          >
            <HiMiniComputerDesktop className="text-4xl" />
            <p>Computers</p>
          </Link>
          <Link
            to="/Gaming"
            className="flex flex-col gap-2 bg-[#EDEDED] items-center py-4 rounded-md"
          >
            <VscGame className="text-4xl" />
            <p>Gaming</p>
          </Link>
        </div>
      </div>

      {/* Products */}
      <div className="px-6 sm:px-28 py-12">
        <div className="flex gap-6">
          <a href="">New Arrivals</a>
          <a href="">BestSeller</a>
          <a href="">Featured Products</a>
        </div>
        <Link to="/ProductDetails">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Link>
      </div>

      {/* Banners */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-16 gap-6 px-6 sm:px-8 lg:px-16">
        {/* Banner 1 */}
        <div className="flex flex-col gap-4 px-4 sm:px-8">
          <img
            src={banner1}
            alt="Banner 1"
            className="h-[50%] w-full object-cover"
          />
          <h1 className="text-xl sm:text-2xl">Popular Products</h1>
          <p className="text-xs sm:text-sm text-[#909090]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking, and ease of use.
          </p>
          <button className="px-4 py-2 border-2 w-1/2 sm:w-2/3 rounded-md border-black font-semibold">
            Shop Now
          </button>
        </div>

        {/* Banner 2 */}
        <div className="flex flex-col gap-4 px-4 sm:px-8 bg-[#F9F9F9]">
          <img
            src={banner2}
            alt="Banner 2"
            className="h-[50%] w-full object-cover"
          />
          <h1 className="text-xl sm:text-2xl">Ipad Pro</h1>
          <p className="text-xs sm:text-sm text-[#909090]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking, and ease of use.
          </p>
          <button className="px-4 py-2 border-2 w-1/2 sm:w-2/3 rounded-md border-black font-semibold">
            Shop Now
          </button>
        </div>

        {/* Banner 3 */}
        <div className="flex flex-col gap-4 px-4 sm:px-8 bg-[#EAEAEA]">
          <img
            src={banner3}
            alt="Banner 3"
            className="h-[50%] w-full object-cover"
          />
          <h1 className="text-xl sm:text-2xl">Samsung Galaxy</h1>
          <p className="text-xs sm:text-sm text-[#909090]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking, and ease of use.
          </p>
          <button className="px-4 py-2 border-2 w-1/2 sm:w-2/3 rounded-md border-black font-semibold">
            Shop Now
          </button>
        </div>

        {/* Banner 4 */}
        <div className="flex flex-col gap-4 px-4 sm:px-8 bg-[#2C2C2C]">
          <img
            src={banner4}
            alt="Banner 4"
            className="h-[50%] w-full object-cover"
          />
          <h1 className="text-xl sm:text-2xl text-white">Macbook Pro</h1>
          <p className="text-xs sm:text-sm text-[#909090]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking, and ease of use.
          </p>
          <button className="px-4 py-2 border-2 w-1/2 sm:w-2/3 rounded-md border-white font-semibold text-white">
            Shop Now
          </button>
        </div>
      </div>

      {/* Discounts Section */}
      <div className="mt-20 px-6 sm:px-16">
        <div className="px-8 py-4 font-semibold text-xl">
          <h1>Discounts up to -50%</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {discount.map((discountproduct) => (
            <DiscountProduct
              key={discountproduct.id}
              discountproduct={discountproduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
