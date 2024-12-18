import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '../../Components/Questions/Sidebar';
import Community from './Community';
import MessagingPage from './MessagingPage';
import Navbar from '../../Components/Navbar/Navbar';
import SavedQuestions from './SavedQuestions';

function QuestionPage() {
  const location = useLocation();

  return (
    <>
    <Navbar/>
    <div className="flex">
       
      <Sidebar/>
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ type: "tween", duration: 0.3 }}
          className="flex-1 ml-64 bg-[#13131f] min-h-screen"
        >
          <Routes location={location}>
            <Route path="messaging" element={<MessagingPage />} />
            <Route path="community" element={<Community />} />
            <Route path='savedQuestions' element={<SavedQuestions/>}/>
            <Route path="/" element={<Community />} />
            <Route path="*" element={
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center h-screen text-white text-2xl"
              >
                404 - Page Not Found
              </motion.div>
            } />
          </Routes>
        </motion.main>
      </AnimatePresence>
    </div>
    </>
  );
}

export default QuestionPage;