import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState('/postforum/community');
  const location = useLocation();

  const handleLinkClick = (to) => {
    setActiveLink(to);
  };

  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
      className="w-60 bg-gradient-to-br from-purple-600/90 via-purple-500/80 to-orange-400/70 h-[calc(100vh-20rem)] rounded-2xl fixed left-4 top-40 overflow-hidden shadow-2xl backdrop-blur-sm"
    >
      <div className="p-6 relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-orange-300/10 backdrop-blur-sm"></div>
        
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative text-2xl font-bold bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent mb-8 text-center"
        >
          Question SideBar
        </motion.h1>
        <nav className="relative">
          <ul className="space-y-3">
            {[
              { 
                to: "/questionpage/community", 
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                ),
                label: "Discussion"
              },
              { 
                to: "/questionpage/messaging", 
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                ),
                label: "Messaging"
              },
              { 
                to: "/questionpage/savedQuestions", 
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                ),
                label: "Saved Questions"
              },
            ].map((item, index) => (
              <motion.li
                key={item.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link
                  to={item.to}
                  className={`flex items-center space-x-3 rounded-lg p-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${
                    activeLink === item.to
                      ? 'bg-white/10 text-white shadow-lg backdrop-blur-sm'
                      : 'text-gray-200 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => handleLinkClick(item.to)}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.aside>
  );
}