import React from "react";

import ServiceCard from "../ServiceCard/ServiceCard";

const data = [
  {
    title: "Error Free Charge Entry",
    body: "To guarantee seamless claim submissions on the first attempt, we offer meticulous and error-free charge entry services. Your patients' demographic and charge information is collected by our team, and our skilled billers input charges daily to facilitate prompt claim processing.",
  },

  {
    title: "Real Time Insurance Verification",
    body: "Ensuring a streamlined process and minimizing accounts receivable days, we meticulously confirm the insurance eligibility of each patient. This proactive approach helps prevent denials and facilitates a smoother billing process for you.",
  },

  {
    title: "Claim Submission & Scrubbing",
    body: " With our proficient billing experts and rigorous scrubbing process, we ensure the submission of clean claims. In the rare instance of rejections, our team promptly corrects the issues and resubmits the claims on the same day, maintaining a swift and efficient billing workflow",
  },
  {
    title: "Error Free Charge Entry",
    body: "To guarantee seamless claim submissions on the first attempt, we offer meticulous and error-free charge entry services. Your patients' demographic and charge information is collected by our team, and our skilled billers input charges daily to facilitate prompt claim processing.",
  },

  {
    title: "Real Time Insurance Verification",
    body: "Ensuring a streamlined process and minimizing accounts receivable days, we meticulously confirm the insurance eligibility of each patient. This proactive approach helps prevent denials and facilitates a smoother billing process for you.",
  },

  {
    title: "Claim Submission & Scrubbing",
    body: " With our proficient billing experts and rigorous scrubbing process, we ensure the submission of clean claims. In the rare instance of rejections, our team promptly corrects the issues and resubmits the claims on the same day, maintaining a swift and efficient billing workflow",
  },
];

const Services = () => {
  return (
    <>
      <div className="mt-10 ">
        <p className="text-xl font-bold text-center text-gray-800">Services</p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mx-1 md:mx-32 mt-10">
          {data.map((item, key) => (
            <>
              <ServiceCard title={item.title} body={item.body} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
