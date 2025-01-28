import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
  };

  return (
    <div className="px-6 py-12">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <p className="mt-4 text-lg text-gray-700">
        If you have any questions, feel free to reach out to us. We're happy to assist you!
      </p>
      <form onSubmit={handleSubmit} className="mt-6 max-w-lg">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 mb-4 border rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 mb-4 border rounded"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-3 mb-4 border rounded"
        />
        <button type="submit" className="bg-black text-white px-6 py-3 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
