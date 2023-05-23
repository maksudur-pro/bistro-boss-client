import React from "react";

const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="md:w-3/12 my-8  mx-auto">
      <p className="text-center mb-2 text-[#D99904]  text-xl font-bold">
        ---{subheading}---
      </p>
      <h2 className="text-center uppercase text-2xl font-bold border-y-4 py-4">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
