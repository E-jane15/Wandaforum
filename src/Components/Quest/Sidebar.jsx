import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bookmark, 
  Edit, 
  Users, 
  Settings, 
  Star, 
  HelpCircle 
} from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    console.log("Navigating to:", path); // Debugging
    navigate(path);
  };


  const sidebarItems = [
    { 
      icon: Bookmark, 
      label: 'Saved Questions', 
      path: '/saved'
    },
    { 
      icon: Edit, 
      label: 'Asked Questions', 
      path: '/asked-questions'
    },
    { 
      icon: Users, 
      label: 'Community', 
      path: '/community'
    },
    { 
      icon: Star, 
      label: 'Trending', 
      path: '/trending'
    },
    { 
      icon: HelpCircle, 
      label: 'Help Center', 
      path: '/help-center'
    },
    { 
      icon: Settings, 
      label: 'Settings', 
      path: '/settings'
    }
  ];

  return (
    <aside className="w-60 h-[calc(100vh-15rem)] rounded-2xl fixed left-4 top-40 overflow-hidden shadow-2xl backdrop-blur-sm bg-gradient-to-br from-purple-600/90 via-purple-500/80 to-orange-400/70">
      <div className="p-6 relative">
        {/* Decorative background blur */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-orange-300/10 backdrop-blur-sm"></div>
        
        {/* Title */}
        <h2 className="relative text-2xl font-bold bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent hover:border-purple  mb-8 text-center">
          Question Hub
        </h2>

        {/* Navigation */}
        <nav className="relative">
          <ul className="space-y-3">
            {sidebarItems.map((item) => (
              <li key={item.label}>
                <button 
                  onClick={() => handleNavigation(item.path)}
                  className="flex items-center space-x-3 w-full rounded-lg p-2 text-gray-200 hover:text-white hover:bg-white/5 transition-colors duration-200"
                >
                  <item.icon className="w-6 h-6" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};


export default Sidebar;