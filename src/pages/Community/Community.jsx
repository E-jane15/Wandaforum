import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeSection from '../../Components/CommunityComponents/Welcome';

export default function CommunityPage() {

  return (
    <div className="min-h-screen bg-[#281b32]">
      <WelcomeSection />

    </div>
  )
}