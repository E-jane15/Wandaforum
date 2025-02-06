import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeSection from '../../Components/CommunityComponents/Welcome';
import CommunityFeed from '../../Components/CommunityComponents/CommunityFeed';

export default function CommunityPage() {
  const [selectedDomains, setSelectedDomains] = useState(null);
  const navigate = useNavigate();

  const handleGetStarted = (domains) => {
    setSelectedDomains(domains);
    navigate('/community/feed', { state: { domains } });
  };

  return (
    <div className="min-h-screen bg-[#281b32]">
      {!selectedDomains ? (
        <WelcomeSection onGetStarted={handleGetStarted} />
      ) : (
        <CommunityFeed domains={selectedDomains} />
      )}
    </div>
  );
}