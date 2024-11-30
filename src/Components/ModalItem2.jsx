import React from "react";

const ModalItem2 = ({ icon, heading, text, onClick }) => {
  return (
    <div
      className="flex items-center gap-5 mx-12 py-4 px-2 my-6 rounded border border-solid border-purple hover:mb-5 hover:cursor-pointer  hover:bg-purple hover:text-white transition active:border-2 active:border-[#9d00ff] "
      onClick={() => {
        onClick(heading);
      }}
    >
      <div className="">{icon}</div>
      <div>
        <p className="font-semibold ">{heading}</p>
        <p className="font-light text-sm">{text}</p>
      </div>
    </div>
  );
};

export default ModalItem2;
