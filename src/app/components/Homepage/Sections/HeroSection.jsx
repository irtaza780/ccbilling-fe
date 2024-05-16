import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/homepage-banner.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50 p-20 "></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-20">
        <div>
          <hr className="" />
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mt-10">
            Medical Billing
          </h1>
          <hr className="mt-10" />
        </div>
        <div className="mx-[30%] mt-10 text-center text-white font-medium">
          <p>
            Physicians looking to optimize their revenue and reduce
            administrative costs can benefit significantly from outsourcing
            their billing and collections. Our medical billing services provide
            comprehensive revenue cycle management (RCM), designed to enhance
            efficiency and profitability. By choosing to outsource, physicians
            can streamline operations, eliminate unnecessary expenses, and focus
            more on patient care, ultimately maximizing their financial
            outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
