import React from "react";

const ServiceCard = ({ title, body }) => {
  return (
    <div className="shadow-xl rounded-xl border border-gray-300 p-10">
      <p className=" text-primary font-bold text-md">{title}</p>
      <p> {body}</p>
    </div>
  );
};

export default ServiceCard;
