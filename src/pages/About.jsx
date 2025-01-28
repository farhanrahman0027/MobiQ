import React from "react";
import phones from "../assets/About/phone.svg";
import computers from "../assets/About/computer.svg";
import earbuds from "../assets/About/earbuds.svg";
import watches from "../assets/About/watch.svg";

const About = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
        
        {/* Introduction */}
        <p className="text-gray-600 text-lg text-center mb-6">
          Welcome to <span className="font-semibold">MobiQ</span>, your one-stop destination for the latest 
          <span className="text-blue-600"> smartphones, smartwatches, high-performance computers, and premium earbuds.</span> 
          We are dedicated to providing top-quality products with unbeatable prices and customer service.
        </p>

        {/* Product Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
          {[
            { name: "Phones", image: phones },
            { name: "Watches", image: watches },
            { name: "Computers", image: computers },
            { name: "Earbuds", image: earbuds},
          ].map((item, index) => (
            <div key={index} className=" p-4 bg-gray-200 rounded-lg items-center fle flex-col ">
              <img src={item.image} className="h-40 w-full" />
              <p className="font-semibold mt-12 text-xl">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Our Mission */}
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          Our goal is to bring cutting-edge technology to our customers with a seamless shopping experience.
          Whether you're looking for the latest flagship smartphone or high-performance accessories, 
          we ensure a hassle-free purchase and after-sales support.
        </p>

        {/* Why Choose Us */}
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            { title: "Premium Quality", description: "We offer only genuine and high-quality products from trusted brands." },
            { title: "Best Prices", description: "Competitive pricing with regular discounts and special offers." },
            { title: "Fast & Secure Shipping", description: "Guaranteed fast shipping with secure packaging." },
            { title: "24/7 Customer Support", description: "Our team is available 24/7 to assist with your queries." },
          ].map((feature, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Customer Testimonials */}
        <h2 className="text-2xl font-semibold mb-4">What Our Customers Say</h2>
        <div className="space-y-4 mb-10">
          {[
            { name: "John Doe", review: "Amazing service! My new phone arrived in perfect condition and super fast." },
            { name: "Sarah Lee", review: "Great deals on smartwatches. The product quality is top-notch!" },
            { name: "Mike Johnson", review: "I love the selection of computers and earbuds. Customer support was very helpful." },
          ].map((testimonial, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-800">"{testimonial.review}"</p>
              <p className="text-gray-600 font-semibold text-right">- {testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-gray-600 mb-4">
          Have questions? We're here to help. Contact us anytime!
        </p>
        <div className="flex items-center space-x-4">
          <p className="bg-gray-200 p-3 rounded-lg">📧 support@MobiQ.com</p>
          <p className="bg-gray-200 p-3 rounded-lg">📞 +1 (800) 123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default About;
