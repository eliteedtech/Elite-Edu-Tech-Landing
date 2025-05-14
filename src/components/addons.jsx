

import React from "react";

const Addons = ({ items }) => {
  return (
    <div className="mt-12 bg-white rounded-xl shadow-md p-6 mx-6   ">
      <p className="text-xl font-bold text-indigo-900 mb-4">Add-ons and Extras</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((addon, index) => (
          <div key={index} className="rounded-lg border border-gray-200 p-4">
            <h3 className="text-blue-800 font-semibold mb-1">{addon.title}</h3>
            <p className="text-sm text-gray-700">{addon.description}</p>
            {addon.price && <p className="text-red-700 font-medium mt-2">{addon.price}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addons;
