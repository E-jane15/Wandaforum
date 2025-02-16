import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../Context/UserContext'; // import UserContext
import axios from 'axios'; // import axios for API requests

const AvailabilityForm = ({onClose}) => {
  const { user, addAvailability } = useContext(UserContext); // Access addAvailability from context
  const [formData, setFormData] = useState({
    focusArea: '',
    meetingPlatform: '',
    meetingLink: '',
    rolePreference: 'interviewer',
    startTime: '',
    endTime: '',
  });


  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fetch the availability data on component mount
  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/availabilities/${user.id}`);
        if (response.data) {
          setFormData({
            focusArea: response.data.focusArea || '',
            meetingPlatform: response.data.meetingPlatform || '',
            meetingLink: response.data.meetingLink || '',
            rolePreference: response.data.rolePreference || 'interviewer',
            startTime: response.data.startTime || '',
            endTime: response.data.endTime || '',
          });
        }
      } catch (error) {
        console.error('Error fetching availability:', error);
      }
    };

    fetchAvailability();
  }, [user.id]); // Dependency on user.id to refetch when the user changes

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const availability = { ...formData, userId: user.id };
    
    try {
      await axios.post('http://localhost:3000/availabilities/save', { userId: user.id, ...formData });
      addAvailability(availability);
     onClose();
    } catch (error) {
      
    }
    
    
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-opacity-50 z-50">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <p className="text-2xl font-bold mb-6 text-center">Availability Form</p>

          <div className="space-y-4">
            {/* Focus Area */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Focus Area</label>
              <input
                type="text"
                name="focusArea"
                value={formData.focusArea}
                onChange={handleChange}
                placeholder="Enter your desired focus area"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Meeting Platform */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Meeting Platform</label>
              <input
                type="text"
                name="meetingPlatform"
                value={formData.meetingPlatform}
                onChange={handleChange}
                placeholder="Enter your desired meeting platform"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Meeting Link */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Meeting Link</label>
              <input
                type="text"
                name="meetingLink"
                value={formData.meetingLink}
                onChange={handleChange}
                placeholder="Enter meeting link here"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Role Preference Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Role Preference</label>
              <select
                name="rolePreference"
                value={formData.rolePreference}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="interviewer">Interviewer</option>
                <option value="interviewee">Interviewee</option>
                <option value="both">Both</option>
              </select>
            </div>

            {/* Time Slot (Start & End Time) */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Time Slot</label>
              <div className="flex gap-4">
                {/* Start Time */}
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  className="mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {/* End Time */}
                <input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                  className="mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className=' flex items-center gap-5 px-6'>
            <button
              type="button"
              onClick={onClose}
              className="w-full bg-purple text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Close
            </button>
            <button
              type="submit"
              className="w-full bg-purple text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default AvailabilityForm;