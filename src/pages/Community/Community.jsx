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

import { useState } from "react";
import WelcomeSection from "../../Components/CommunityComponents/Welcome"
import CommunityPage from "../../Components/CommunityComponents/CommunityPage";


export default function Community() {
  const [selectedDomains, setSelectedDomains] = useState([]);

  // If domains are selected, show the CommunityPage; otherwise, show the WelcomeSection
  return selectedDomains.length > 0 ? (
    <CommunityPage selectedDomains={selectedDomains} />
  ) : (
    <WelcomeSection onGetStarted={(domains) => setSelectedDomains(domains)} />
  );
}