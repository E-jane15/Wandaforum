import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const domains = [
  { id: 1, name: 'Web Development', icon: '💻', description: 'Frontend, Backend, and Full Stack Development' },
  { id: 2, name: 'Data Science', icon: '📊', description: 'Machine Learning, Data Analytics, and Statistics' },
  { id: 3, name: 'Mobile Development', icon: '📱', description: 'iOS, Android, and Cross-platform Development' },
  { id: 4, name: 'DevOps', icon: '⚡', description: 'CI/CD, Cloud Infrastructure, and Automation' },
  { id: 5, name: 'Cybersecurity', icon: '🔒', description: 'Network Security, Ethical Hacking, and Security Tools' }
];

export default function PostsPage() {
  const location = useLocation();
  const [selectedDomains, setSelectedDomains] = useState([]);

  useEffect(() => {
    if (location.state && location.state.selectedDomains) {
      setSelectedDomains(location.state.selectedDomains);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#281b32] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Community Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedDomains.map((domainId) => (
          <div key={domainId} className="bg-purple-900/20 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">{domains.find((d) => d.id === domainId).name}</h2>
            <p>Posts related to {domains.find((d) => d.id === domainId).description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}