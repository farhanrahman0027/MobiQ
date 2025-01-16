import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black mt-12 px-6 sm:px-12 lg:px-28 py-16 sm:py-24 lg:py-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-20">
        {/* MobiQ Section */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <h1 className="text-white font-bold text-lg sm:text-xl lg:text-2xl">MobiQ</h1>
          <p className="text-[#CFCFCF] text-sm sm:text-base">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>

        {/* Services Section */}
        <div className="flex flex-col gap-4 sm:gap-6 ml-0 sm:ml-10 lg:ml-28">
          <p className="text-white font-bold text-lg sm:text-xl lg:text-2xl">Services</p>
          <ul className="flex flex-col gap-2 sm:gap-3 text-[#CFCFCF] text-sm sm:text-base">
            <a href="">Bonus program</a>
            <a href="">Gift cards</a>
            <a href="">Credit and payment</a>
            <a href="">Service contracts</a>
            <a href="">Non-cash account</a>
            <a href="">Payment</a>
          </ul>
        </div>

        {/* Assistance Section */}
        <div className="flex flex-col gap-4 sm:gap-6 ml-0 sm:ml-10 lg:ml-28">
          <p className="text-white font-bold text-lg sm:text-xl lg:text-2xl">Assistance to the buyer</p>
          <ul className="flex flex-col gap-2 sm:gap-3 text-[#CFCFCF] text-sm sm:text-base">
            <a href="">Find an order</a>
            <a href="">Terms of delivery</a>
            <a href="">Exchange and return of goods</a>
            <a href="">Guarantee</a>
            <a href="">Frequently asked questions</a>
            <a href="">Terms of use of the site</a>
          </ul>
        </div>
      </div>

      {/* Social Icons Section */}
      <div className="flex gap-4 sm:gap-6 lg:gap-8 text-white mt-8 sm:mt-12">
        <a href="" className="text-xl sm:text-2xl"><FaTwitter /></a>
        <a href="" className="text-xl sm:text-2xl"><FaFacebookF /></a>
        <a href="" className="text-xl sm:text-2xl"><FaTiktok /></a>
        <a href="" className="text-xl sm:text-2xl"><AiFillInstagram /></a>
      </div>
    </div>
  );
};

export default Footer;
