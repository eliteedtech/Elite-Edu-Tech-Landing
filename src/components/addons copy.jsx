

import React from "react";

const Addons = ({ items }) => {
  return (
    <div className=" bg-white dark:bg-gray-950 rounded-xl shadow-md dark:shadow-[0_4px_10px_rgba(59,130,246,0.5)] dark:border dark:border-[#00356B] p-2 mt-2    ">
      <p className="text-xl font-bold text-[#00356B] dark:text-[#A51C30] p-1">Add-ons and Extras</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {items.map((addon, index) => (
          <div key={index} className="rounded-lg border border-[#00356B] dark:border dark:border-[#00356B] p-2">
            <h3 className="text-[#00356B] dark:text-[#A51C30] font-semibold mb-0.5">{addon.title}</h3>
            <p className="text-medium text-gray-700 dark:text-gray-400">{addon.description}</p>
            {addon.price && <p className="text-[#A51C30] dark:text-[#00356B] font-medium ">{addon.price}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addons;
