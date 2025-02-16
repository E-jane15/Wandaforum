import React from "react";
import { useSelector } from "react-redux";

const ModalItem = ({ icon, text, onClick }) => {

  const selectedItem = useSelector((state)=>state.selections)

  return (
    <div
      className={`flex ${selectedItem.interviewType ===text? "bg-purple":"bg-transparent"} items-center gap-8 mx-12 py-3 px-2 my-6 rounded border border-solid border-purple hover:mb-5 hover:cursor-pointer  hover:bg-purple hover:text-white transition active:border-2 active:border-[#9d00ff]`}
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
