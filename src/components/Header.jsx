import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Track menu state

  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle menu visibility

  return (
    <div className="px-6 sm:px-12 lg:px-20 py-6 flex flex-col lg:flex-row items-center justify-between gap-6">
      
      {/* Logo Section */}
      <div className="font-bold text-xl">
        <h1>MobiQ</h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 w-full sm:w-3/4 lg:w-1/4 px-4 bg-gray-100 rounded-md">
        <FiSearch className="text-lg" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent w-full py-2"
        />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <AiOutlineClose className="text-2xl" />
          ) : (
            <AiOutlineMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Navigation Links (Mobile Menu) */}
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } lg:flex flex-col lg:flex-row gap-4 lg:gap-6 list-none font-semibold text-center lg:text-left`}
      >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </div>

      {/* Icons Section (Adjusting for Mobile) */}
      <div className="flex space-x-4 lg:space-x-6">
        <FaHeart className="text-xl sm:text-2xl" />
        <FaShoppingCart className="text-xl sm:text-2xl" />
        <FaUser className="text-xl sm:text-2xl" />
      </div>
      
    </div>
  );
};

export default Header;
