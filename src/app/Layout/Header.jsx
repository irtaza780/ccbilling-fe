import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center p-20 h-32 shadow-xl">
        <p className="text-lg text-primary font-semibold">
          Crystal Clear Billing
        </p>

        {/* <Link href="#">About</Link> */}
        <div className="flex flex-col">
          <p className="text-gray-500 text-base">Call us now</p>
          <p className="text-base font-semibold">+1 234 3456</p>
        </div>

        <div className="flex flex-col ">
          <p className="text-gray-500 text-base">Email us at</p>
          <p className="text-base font-semibold">
            support@crystalclearbilling.com
          </p>
        </div>

        <div className="flex flex-col ">
          <p className="text-gray-500 text-base">Find us at</p>
          <p className="text-base font-semibold">
            5652 Liberty Manor Circle Woodbridge, VA 22193
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
