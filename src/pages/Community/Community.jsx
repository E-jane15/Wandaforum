// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import WelcomeSection from '../../Components/CommunityComponents/Welcome';
// import CommunityFeed from '../../Components/CommunityComponents/CommunityFeed';

// export default function CommunityPage() {
//   const [selectedDomains, setSelectedDomains] = useState(null);
//   const navigate = useNavigate();

//   const handleGetStarted = (domains) => {
//     setSelectedDomains(domains);
//     navigate('/community/feed', { state: { domains } });
//   };

//   return (
//     <div className="min-h-screen bg-[#281b32]">
//       {!selectedDomains ? (
//         <WelcomeSection onGetStarted={handleGetStarted} />
//       ) : (
//         <CommunityFeed domains={selectedDomains} />
//       )}
//     </div>
//   );
// }



// import CommunityPage from "../../Components/CommunityComponents/CommunityPage"
// import WelcomeSection from "../../Components/CommunityComponents/Welcome"

// export default function Community() {
//   return <WelcomeSection/>
// }

"use client";

import { useState, useEffect } from "react";
import WelcomeSection from "../../Components/CommunityComponents/Welcome";
import CommunityPage from "../../Components/CommunityComponents/CommunityPage";

export default function Community() {
  const [selectedDomains, setSelectedDomains] = useState([]);

  // Load domains from localStorage on component mount
  useEffect(() => {
    const storedDomains = localStorage.getItem("selectedDomains");
    if (storedDomains) {
      setSelectedDomains(JSON.parse(storedDomains));
    }
  }, []);

  // Handler for when domains are selected
  const handleDomainsSelected = (domains) => {
    setSelectedDomains(domains);
    localStorage.setItem("selectedDomains", JSON.stringify(domains));
  };

  // Handler for logging out or clearing domains
  const handleClearDomains = () => {
    setSelectedDomains([]);
    localStorage.removeItem("selectedDomains");
  };

  return selectedDomains.length > 0 ? (
    <CommunityPage 
      selectedDomains={selectedDomains} 
      onLogout={handleClearDomains}  // Pass this to your CommunityPage if you want a logout option
    />
  ) : (
    <WelcomeSection onGetStarted={handleDomainsSelected} />
  );
}