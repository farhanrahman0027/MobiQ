import React, { useState } from "react";

const Sidebar = () => {
  const [isBrandMenuOpen, setIsBrandMenuOpen] = useState(true);
  const [isBatteryMenuOpen, setIsBatteryMenuOpen] = useState(true);

  const toggleBrandMenu = () => {
    setIsBrandMenuOpen((prev) => !prev);
  };

  const toggleBatteryMenu = () => {
    setIsBatteryMenuOpen((prev) => !prev);
  };

  return (
    <div className="p-4 border-r w-1/3 sm:w-1/4">
      {/* Brand Section */}
      <div className="mb-6">
        <h3
          className="font-semibold mb-4 cursor-pointer flex justify-between items-center"
          onClick={toggleBrandMenu}
        >
          Brand
          <span className="ml-auto">{isBrandMenuOpen ? "▼" : "▶"}</span>
        </h3>
        {isBrandMenuOpen && (
          <div className="flex flex-col gap-2">
            <label>
              <input type="checkbox" /> Apple
            </label>
            <label>
              <input type="checkbox" /> Samsung
            </label>
            <label>
              <input type="checkbox" /> Xiaomi
            </label>
          </div>
        )}
      </div>

      {/* Battery Capacity Section */}
      <div className="mb-6">
        <h3
          className="font-semibold mb-4 cursor-pointer flex justify-between items-center"
          onClick={toggleBatteryMenu}
        >
          Battery Capacity
          <span className="ml-auto">{isBatteryMenuOpen ? "▼" : "▶"}</span>
        </h3>
        {isBatteryMenuOpen && (
          <div className="flex flex-col gap-2">
            <label>
              <input type="checkbox" /> 3000mAh
            </label>
            <label>
              <input type="checkbox" /> 4000mAh
            </label>
            <label>
              <input type="checkbox" /> 5000mAh
            </label>
          </div>
        )}
      </div>

      {/* Add more filter sections as needed */}
    </div>
  );
};

export default Sidebar;
