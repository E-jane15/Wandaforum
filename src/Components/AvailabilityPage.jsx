import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import AvailabilityCard from '../Components/AvailabilityCard';
import { CgChevronLeft } from 'react-icons/cg';
import axios from 'axios';

const AvailabilityPage = () => {
  const { user } = useContext(UserContext); // Get user from context
  const [availabilities, setAvailabilities] = useState([]);

  // Fetch availabilities from the backend
  const fetchAvailabilities = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/availabilities/${user.id}`);
      setAvailabilities([response.data]); // Wrap in array if it's a single record
    } catch (error) {
      console.error("Error fetching availability:", error);
    }
  };

  useEffect(() => {
    fetchAvailabilities();
  }, [user.id]); // Fetch availability when the user changes

  return (
    <div className="px-20 py-7 text-white">
      <button className="flex items-center justify-center gap-1 bg-purple px-2 mb-6 py-1 rounded-md">
        <CgChevronLeft />
        <span>Back</span>
      </button>

      <div className="grid grid-cols-3 gap-5">
        {availabilities.length > 0 ? (
          availabilities.map((availability) => (
            <AvailabilityCard
              key={availability.userId}
              userName={availability.userName}
              profile={availability.profile}
              bio={availability.bio}
              status={availability.status}
              startTime={availability.startTime}
              endTime={availability.endTime}
              rolePreference={availability.rolePreference}
              focusArea={availability.focusArea}
            />
          ))
        ) : (
          <p>No availability set yet.</p>
        )}
      </div>
    </div>
  );
};

export default AvailabilityPage;