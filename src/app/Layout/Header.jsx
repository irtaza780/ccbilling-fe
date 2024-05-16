import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="px-4 py-2 md:px-20 md:py-10 shadow-xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-lg text-primary font-semibold mb-2 md:mb-0">
            Crystal Clear Billing
          </p>

          <div className="flex flex-col text-sm md:text-base">
            <p className="text-gray-500 mb-2 md:mb-0">Call us now</p>
            <p className="font-semibold">+1 234 3456</p>
          </div>

          <div className="flex flex-col ml-0 md:ml-8 mt-4 md:mt-0">
            <p className="text-gray-500 mb-2 md:mb-0">Email us at</p>
            <p className="font-semibold">support@crystalclearbilling.com</p>
          </div>

          <div className="flex flex-col ml-0 md:ml-8 mt-4 md:mt-0">
            <p className="text-gray-500 mb-2 md:mb-0">Find us at</p>
            <p className="font-semibold">
              5652 Liberty Manor Circle Woodbridge, VA 22193
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
