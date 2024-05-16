import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="mt-10">
        <p className="text-xl font-bold text-center text-gray-800">About us</p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-20 mx-1 md:mx-32 mt-10">
          <img src="/about-us.jpg" alt="" />
          <p> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
            tellus nec magna volutpat, vel ultricies dolor eleifend. Ut
            scelerisque euismod ligula, sit amet eleifend lacus facilisis eu.
            Nunc ultricies lacus quis magna lobortis, vel feugiat tortor
            pellentesque. Sed vel justo ultrices, lobortis mi nec, suscipit
            elit. Cras luctus turpis id purus tincidunt, nec ultrices justo
            posuere. Integer ac metus nec orci fermentum fermentum id eget
            sapien. Curabitur vitae feugiat urna. Duis gravida mi id lectus
            consectetur, sed lobortis dolor rhoncus. Sed consequat a ex nec
            fermentum. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. Donec interdum enim sed dui
            venenatis dictum.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
