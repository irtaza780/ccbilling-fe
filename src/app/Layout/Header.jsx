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
            <a href="tel:+1 609 369 9071">
              {" "}
              <p className="font-semibold">+1 609 369 9071</p>
            </a>
          </div>

          <div className="flex flex-col ml-0 md:ml-8 mt-4 md:mt-0">
            <p className="text-gray-500 mb-2 md:mb-0">Email us at</p>
            <a href="mailto:info@crystalclearbilling.com">
              {" "}
              <p className="font-semibold">info@crystalclearbilling.com</p>
            </a>
          </div>

          <div className="flex flex-col ml-0 md:ml-8 mt-4 md:mt-0">
            <p className="text-gray-500 mb-2 md:mb-0">Find us at</p>
            <a href="https://maps.app.goo.gl/VmpLQ84eNetT4JDx5" target="_blank">
              {" "}
              <p className="font-semibold">
                5652 Liberty Manor Circle Woodbridge, VA 22193
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
