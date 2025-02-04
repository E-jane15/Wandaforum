import React from 'react';
import { Plus } from 'lucide-react';

const AddInterviewButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="flex items-center justify-center 
        bg-purple text-white px-4 py-2 rounded-md hover:bg-gradient-to-r from-purple to-orange transition-colors duration-500"
    >
      <Plus className="mr-2" size={20} />
      Add Interview
    </button>
  );
};

export default AddInterviewButton;