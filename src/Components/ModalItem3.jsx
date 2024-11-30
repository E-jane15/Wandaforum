import React from "react";

const ModalItem3 = ({ heading, text, onClick }) => {
  return (
    <div
      className="mx-12 py-2 px-2 my-6 rounded  border border-solid border-purple hover:mb-5 hover:cursor-pointer  hover:bg-purple hover:text-white transition active:border-2 active:border-[#9d00ff]"
      onClick={() => {
        onClick(heading);
      }}
    >
      <p className="font-semibold ">{heading}</p>
      <p className="font-light text-sm ">{text}</p>
    </div>
  );
};

export default ModalItem3;
