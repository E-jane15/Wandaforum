import { useState, useRef, useEffect } from 'react';

export default function DropdownMenu({ onSave, onReport }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-400 hover:text-white focus:outline-none"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#2d2d3f] rounded-md shadow-lg z-10">
          <div className="py-1">
            <button
              onClick={() => {
                onSave();
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-purple-600"
            >
              Save question
            </button>
            <button
              onClick={() => {
                onReport();
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-purple-600"
            >
              Report question
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

