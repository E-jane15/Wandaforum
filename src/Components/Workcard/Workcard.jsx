import React from "react";

const Workcard = ({ number, heading, paragraph }) => {
  return (
    <div className="my-9">
       <img src={number} alt="" className="w-8 h-8 mx-auto " /> 
      <p className="font-semibold text-xl text-center my-5">{heading}</p>
      <p className="font-light text-lg">{paragraph}</p>
    </div>
  );
};

export default Workcard;
