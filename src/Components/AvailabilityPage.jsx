// src/pages/AvailabilityPage.jsx
import React, { useEffect, useState } from 'react';
import AvailabilityCard from '../Components/AvailabilityCard'
import number1 from '../assets/number_one.svg'
import pic from '../assets/pic.jpg'
import { CgChevronLeft } from 'react-icons/cg';

const AvailabilityPage = () => {
  const [availabilities, setAvailabilities] = useState([]);
  const availabilityCards =[
    {
      id:1,
      userName:'Ebai Jane',
      profile: pic,
      bio: 'Full Stack Developer',
      role: 'Interviewee',
      startTime: '09:00',
      endTime: '17:00',
      status: 'Available',
      focusArea: 'Amazon Web Services'
    },
    {
      id:2,
      userName:'Ebai Jane',
      profile: pic,
      bio: 'Full Stack Developer',
      role: 'Interviewee',
      startTime: '09:00',
      endTime: '17:00',
      status: 'Available',
      focusArea: 'Amazon Web Services'
    },
    {
      id:3,
      userName:'Ebai Jane',
      profile: pic,
      bio: 'Full Stack Developer',
      role: 'Interviewee',
      startTime: '09:00',
      endTime: '17:00',
      status: 'Available',
      focusArea: 'Amazon Web Services'
    },
    {
      id:4,
      userName:'Ebai Jane',
      profile: pic,
      bio: 'Full Stack Developer',
      role: 'Interviewee',
      startTime: '09:00',
      endTime: '17:00',
      status: 'Available',
      focusArea: 'Amazon Web Services'
    },
    {
      id:5,
      userName:'Ebai Jane',
      profile: pic,
      bio: 'Full Stack Developer',
      role: 'Interviewee',
      startTime: '09:00',
      endTime: '17:00',
      status: 'Available',
      focusArea: 'Amazon Web Services'
    },
  ];

  {/*useEffect(() => {
    const fetchAvailabilities = async () => {
      try {
        const response = await axios.get('http://localhost:3000/availability');
        setAvailabilities(response.data);
      } catch (error) {
        console.error('Error fetching availabilities:', error);
      }
    };
    fetchAvailabilities();
  }, []);*/}

  return (
    <div className=" px-20 py-7 text-white">

      <button className='flex items-center justify-center gap-1 bg-purple px-2 mb-6 py-1 rounded-md'>
        <CgChevronLeft/>
        <span>Back</span>
      </button>
      <div className="grid grid-cols-3 gap-5">
        {availabilityCards.map((availability) => (
          <AvailabilityCard 
          key={availability.id} 
          userName={availability.userName}
          profile={availability.profile}
          bio={availability.bio}
          status={availability.status}
          startTime={availability.startTime}
          endTime={availability.endTime}
          rolePreference={availability.role}
          focusArea={availability.focusArea}
          />
        ))}
      </div>
    </div>
  );
};

export default AvailabilityPage;