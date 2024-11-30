import React from "react";

const ModalItem = ({ icon, text, onClick }) => {
  return (
    <div
      className="flex items-center gap-8 mx-12 py-3 px-2 my-6 rounded border border-solid border-purple hover:mb-5 hover:cursor-pointer  hover:bg-purple hover:text-white transition active:border-2 active:border-[#9d00ff]"
      onClick={() => {
        onClick(text);
      }}
    >
      <img src={icon} alt="" className=" w-16 h-7" />
      <p>{text}</p>
    </div>
  );
};

export default ModalItem;
