import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import p1 from "../assets/productdetails/phone1/p1.svg";
import p2 from "../assets/productdetails/phone1/p2.svg";
import p3 from "../assets/productdetails/phone1/p3.svg";
import p4 from "../assets/productdetails/phone1/p4.svg";
import p5 from "../assets/productdetails/phone1/p5.svg";

const ProductDetails = () => {
  return (
    <div className=" lg: py-10 bg-white px-20">
      {/* Breadcrumb Section */}
      <div className="text-gray-500 text-sm py-4">
        <nav>
          <ol className="flex items-center space-x-2">
            <li>
              <a href="/catalog" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <IoChevronForward />
            </li>
            <li>
              <a href="/catalog" className="hover:underline">
                Catalog
              </a>
            </li>
            <li>
              <IoChevronForward />
            </li>
            <li>
              <a href="/smartphones" className="hover:underline">
                Smartphones
              </a>
            </li>
            <li>
              <IoChevronForward />
            </li>
            <li className="text-gray-900 font-semibold">iPhone 14 Pro Max</li>
          </ol>
        </nav>
      </div>

      {/* Product Section */}
      <div className="flex flex-col lg:flex-row gap-16 py-24 px-16">
        {/* Left Section - Product Images */}
        <div className="flex  gap-4 w-full lg:w-1/3">
          <div className=" overflow-hidden">
            <img
              src={p1}
              alt="iPhone 14 Pro Max"
              className="w-full  cursor-pointer"
            />
          </div>
          {/* Thumbnail Images */}
          <div className="py-20">
            <div className="flex flex-col gap-4">
              <img
                src={p2}
                alt="Thumbnail"
                className="w-20 h-12 cursor-pointer  "
              />
              <img
                src={p3}
                alt="Thumbnail"
                className="w-20 h-12 cursor-pointer"
              />
              <img
                src={p4}
                alt="Thumbnail"
                className="w-20 h-12 cursor-pointer"
              />
              <img
                src={p5}
                alt="Thumbnail"
                className="w-20 h-12 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="flex-1">
          {/* Product Title and Price */}
          <h1 className="text-3xl font-semibold">Apple iPhone 14 Pro Max</h1>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-2xl font-bold text-black">$1399</span>
            <span className="text-gray-400 line-through">$1499</span>
          </div>

          {/* Color Options */}
          <div className="mt-6">
            <p className="text-gray-700 font-medium">Select color :</p>
            <div className="flex gap-4 mt-2">
              <span className="w-6 h-6 bg-black rounded-full border cursor-pointer"></span>
              <span className="w-6 h-6 bg-purple-500 rounded-full border cursor-pointer"></span>
              <span className="w-6 h-6 bg-red-500 rounded-full border cursor-pointer"></span>
              <span className="w-6 h-6 bg-yellow-500 rounded-full border cursor-pointer"></span>
              <span className="w-6 h-6 bg-gray-500 rounded-full border cursor-pointer"></span>
            </div>
          </div>

          {/* Storage Options */}
          <div className="mt-6">
            <p className="text-gray-700 font-medium">Select storage :</p>
            <div className="flex gap-4 mt-2">
              <button className="px-4 py-2 border rounded-md hover:bg-gray-200">
                128GB
              </button>
              <button className="px-4 py-2 border rounded-md bg-gray-200">
                256GB
              </button>
              <button className="px-4 py-2 border rounded-md hover:bg-gray-200">
                512GB
              </button>
              <button className="px-4 py-2 border rounded-md hover:bg-gray-200">
                1TB
              </button>
            </div>
          </div>

          {/* Specifications */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="border p-4 rounded-md text-center">
              <p className="text-gray-600">Screen size</p>
              <p className="font-medium">6.7"</p>
            </div>
            <div className="border p-4 rounded-md text-center">
              <p className="text-gray-600">CPU</p>
              <p className="font-medium">Apple A16 Bionic</p>
            </div>
            <div className="border p-4 rounded-md text-center">
              <p className="text-gray-600">Main camera</p>
              <p className="font-medium">48+12+12 MP</p>
            </div>
            <div className="border p-4 rounded-md text-center">
              <p className="text-gray-600">Battery capacity</p>
              <p className="font-medium">4323 mAh</p>
            </div>
          </div>

          {/* Add to Wishlist and Cart Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="flex-1 py-3 border rounded-md hover:bg-gray-200">
              Add to Wishlist
            </button>
            <button className="flex-1 py-3 bg-black text-white rounded-md">
              Add to Cart
            </button>
          </div>

          {/* Delivery Details */}
          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            <div>
              <FaCheckCircle className="text-green-500 text-lg mx-auto" />
              <p className="text-sm mt-2">
                Free Delivery <br /> 1-2 day
              </p>
            </div>
            <div>
              <FaCheckCircle className="text-green-500 text-lg mx-auto" />
              <p className="text-sm mt-2">
                In Stock <br /> Today
              </p>
            </div>
            <div>
              <FaCheckCircle className="text-green-500 text-lg mx-auto" />
              <p className="text-sm mt-2">
                Guaranteed <br /> 1 year
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="bg-gray-100 py-12">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Details</h2>
          <p className="text-gray-600">
            Just as a book is judged by its cover, the first thing you notice
            when you pick up a modern smartphone is the display. Nothing
            surprising, because advanced technologies allow you to practically
            level the display frames and cutouts for the front camera and
            speaker, leaving no room for bold design solutions. And how good
            that in such realities Apple everything is fine with displays.
          </p>

          {/* Specification Tables */}
          <div className="mt-8">
            {/* Screen Section */}
            <h3 className="text-lg font-semibold mb-4">Screen</h3>
            <table className="w-full border border-gray-200 text-sm mb-6">
              <tbody>
                <tr className="border-t">
                  <td className="py-3 px-4 text-gray-600">Screen diagonal</td>
                  <td className="py-3 px-4 text-black">6.7"</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 text-gray-600">Screen resolution</td>
                  <td className="py-3 px-4 text-black">2796×1290</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 text-gray-600">
                    Screen refresh rate
                  </td>
                  <td className="py-3 px-4 text-black">120 Hz</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 text-gray-600">Pixel density</td>
                  <td className="py-3 px-4 text-black">460 ppi</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 text-gray-600">Screen type</td>
                  <td className="py-3 px-4 text-black">OLED</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 text-gray-600">Additionally</td>
                  <td className="py-3 px-4 text-black">
                    Dynamic Island, Always-On Display, HDR Display, True Tone,
                    Wide color (P3)
                  </td>
                </tr>
              </tbody>
            </table>

            {/* CPU Section */}
            <h3 className="text-lg font-semibold mb-4">CPU</h3>
            <table className="w-full border border-gray-200 text-sm">
              <tbody>
                <tr className="border-t">
                  <td className="py-3 px-4 text-gray-600">CPU</td>
                  <td className="py-3 px-4 text-black">A16 Bionic</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 text-gray-600">Number of cores</td>
                  <td className="py-3 px-4 text-black">6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* customer reviews */}
      <div className="py-20">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

          {/* Existing Reviews */}
          <div className="space-y-6">
            <div className="border-b pb-4">
              <div className="flex items-center space-x-2">
                {/* Stars */}
                <div className="flex text-yellow-500">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span className="text-gray-300">★</span>
                </div>
                <span className="text-gray-500 text-sm">4.0</span>
              </div>
              <p className="mt-2 text-gray-700">
                "Amazing display and smooth performance. Worth the price!"
              </p>
              <span className="block text-sm text-gray-400">- John Doe</span>
            </div>

            <div className="border-b pb-4">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-500">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span className="text-gray-300">★</span>
                  <span className="text-gray-300">★</span>
                </div>
                <span className="text-gray-500 text-sm">3.0</span>
              </div>
              <p className="mt-2 text-gray-700">
                "Good performance but the battery life could be better."
              </p>
              <span className="block text-sm text-gray-400">- Sarah Lee</span>
            </div>
          </div>

          {/* Add Review Form */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
            <form>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300 mb-4"
                placeholder="Enter your name"
              />

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Review
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300 mb-4"
                rows="4"
                placeholder="Write your review here"
              ></textarea>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300 mb-4">
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>

              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
