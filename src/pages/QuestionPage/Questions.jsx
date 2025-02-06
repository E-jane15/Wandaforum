import React from 'react'
import Sidebar from '../../Components/Quest/Sidebar'
import { useLocation } from 'react-router-dom';

const Questions = () => {
    const location = useLocation()
  return (
    <div>
      <Sidebar/>
      <Routes location={location}>
            <Route path="messaging" element={<MessagingPage />} />
            <Route path="community" element={<Community />} />
    </div>
  )
}

export default Questions
