import React from 'react';
import { BsClock } from 'react-icons/bs';

const platformLogos = {
  Zoom: 'https://cdn-icons-png.flaticon.com/512/2111/2111435.png',
  GoogleMeet: 'https://cdn-icons-png.flaticon.com/512/3001/3001764.png',
};

const AvailabilityCard = ({ profile, userName, bio, rolePreference, startTime, endTime, status, focusArea }) => {
  return (
    <div className="bg-[#2D1B42] px-8 py-8 rounded-lg shadow-xl text-white max-w-sm border border-[#4A3B58]">
      <div className="flex items-center gap-4 mb-5">
        <img src={profile} alt={userName} className="w-20 h-20 rounded-full border-2 border-gray-300 " />
        <div>
          <h3 className="text-lg font-semibold text-gray-200">{userName}</h3>
          <p className="text-sm text-gray-400">{bio}</p>
          <p className="bg-green-700 w-24 text-center py-1 mt-4 rounded-full text-xs font-semibold text-gray-300">{status}</p>
        </div>
      </div>

      <div className="mb-5 mt-4">
        <div className="flex flex-wrap gap-2 text-xs">
          <p className="bg-[#3B2A50] px-4 py-2 rounded-full text-gray-300">{focusArea}</p>
          <p className="bg-[#3B2A50] px-4 py-2 rounded-full text-gray-300">{rolePreference}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 text-sm text-[#F4A261] mb-5 mt-3">
        <BsClock className="text-[#F4A261]" />
        <p>{startTime} - {endTime}</p>
      </div>

      <button className="flex items-center justify-center gap-2 bg-purple text-white py-2 rounded-lg w-full text-sm font-semibold hover:bg-[#C65D44] transition-all">
        <img src={platformLogos.GoogleMeet} className="w-5 h-5" alt="Google Meet" />
        <span>Start Session</span>
      </button>
    </div>
  );
};

export default AvailabilityCard;
