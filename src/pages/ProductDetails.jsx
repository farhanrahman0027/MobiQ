import React from "react";

const ProductDetails = () => {
  return (
    <div>

    {/* Breadcrumb Section */}
      <div className="text-gray-500 text-sm py-4">
        <nav>
          <ol className="flex items-center space-x-2">
            <li>
              <a href="/catalog" className="hover:underline">
                Catalog
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="/smartphones" className="hover:underline">
                Smartphones
              </a>
            </li>
            <li>/</li>
            <li>iPhone 14 Pro Max</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default ProductDetails;
