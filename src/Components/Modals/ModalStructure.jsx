import React from 'react';
import { FiX } from 'react-icons/fi';

const ModalStructure = ({ title, items, onClose, onNext, onBack, renderItem , image, nextButtonText = "Next", showBackButton =true,showNextButton=true, timemodal=false, showCloseIcon = true, }) => {
 

    return(
  <div className="fixed w-screen h-screen backdrop-blur-md !py-10 top-0 left-0 z-50 text-white flex justify-center items-center">
    <div className="bg-purple3 w-2/5 relative">
    {showCloseIcon && (
      <FiX className="size-7 absolute right-4 top-3 cursor-pointer" onClick={onClose} />
    ) }
      
      <div>{image}</div>
      <p className="font-medium text-xl text-center pt-10 pb-4">{title}</p>
      {timemodal ? (
        <div className="max-h-[70vh] py-0 overflow-y-scroll scrollbar-thin scrollbar-thumb-purple scrollbar-track-purple3 mb-10 px-6">
        {items.map((item, index) => renderItem(item, index))}
      </div>
      ) : (
        <div className="max-h-[70vh] py-0 overflow-y-scroll scrollbar-thin scrollbar-thumb-purple scrollbar-track-purple3 mb-10">
        {items.map((item, index) => renderItem(item, index))}
      </div>
      )}
      

      <div className="flex items-center justify-between m-auto mx-12 mb-4">
        {onBack && showBackButton && (
          <button
            className="flex items-center gap-1 border border-solid border-purple py-2 px-8 rounded mt-2 mb-4"
            onClick={onBack}
          >
            Back
          </button>
        )}
        {onNext && showNextButton && (
          <button
            className="flex items-center gap-1 border bg-purple border-none text-center py-2 px-8 rounded ml-auto"
            onClick={onNext}
          >
            {nextButtonText}
          </button>
        )}
      </div>
    </div>
  </div>
);
}

export default ModalStructure;
