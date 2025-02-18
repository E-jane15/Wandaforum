import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bookmark, 
  Edit, 
  Users, 
  Settings, 
  Star, 
  HelpCircle,
  ChevronLeft,
  ChevronRight 
} from 'lucide-react';

const Sidebar = ({ onCollapsedChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Check for mobile screen size and update state
  useEffect(() => {
    const checkScreenSize = () => {
      const isMobileScreen = window.innerWidth < 768;
      setIsMobile(isMobileScreen);
      setIsCollapsed(isMobileScreen);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Notify parent component when collapsed state changes
  useEffect(() => {
    onCollapsedChange?.(isCollapsed);
  }, [isCollapsed, onCollapsedChange]);

  const handleNavigation = (path) => {
    navigate(path);
    // Don't modify collapse state on navigation
  };

  const handleToggle = () => {
    if (!isMobile) {
      setIsCollapsed(!isCollapsed);
    }
  };

  const sidebarItems = [
    { icon: Bookmark, label: 'Saved Questions', path: '/saved' },
    { icon: Edit, label: 'Asked Questions', path: '/asked-questions' },
    { icon: Users, label: 'Community', path: '/community' },
    { icon: Star, label: 'Trending', path: '/trending' },
    { icon: HelpCircle, label: 'Help Center', path: '/help-center' },
    { icon: Settings, label: 'Settings', path: '/settings' }
  ];

  return (
    <aside className={`
      ${isCollapsed ? 'w-20' : 'w-60'}
      transition-all duration-300 
      h-[calc(100vh-15rem)] 
      rounded-2xl 
      fixed 
      left-4 
      top-40 
      overflow-hidden 
      shadow-2xl 
      backdrop-blur-sm 
      bg-gradient-to-br 
      from-purple-600/90 
      via-purple-500/80 
      to-orange-400/70
      md:block
    `}>
      <div className="p-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-orange-300/10 backdrop-blur-sm"></div>
        
        <div className="relative flex items-center justify-between mb-8">
          {!isCollapsed && (
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent">
              Question Hub
            </h2>
          )}
          {!isMobile && (
            <button 
              onClick={handleToggle}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white"
            >
              {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
          )}
        </div>

        <nav className="relative">
          <ul className="space-y-3">
            {sidebarItems.map((item) => (
              <li key={item.label}>
                <button 
                  onClick={() => handleNavigation(item.path)}
                  className="flex items-center space-x-3 w-full rounded-lg p-2 text-gray-200 hover:text-white hover:bg-white/5 transition-colors duration-200"
                  title={isCollapsed ? item.label : ''}
                >
                  <item.icon className="w-6 h-6" />
                  {!isCollapsed && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar