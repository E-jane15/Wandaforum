"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuestionForm({ onSubmit }) {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit && question.trim()) {
      onSubmit({
        content: question.trim(),
        author: "Anonymous", // Replace with dynamic author if needed
        username: "@anonymous", // Replace with dynamic username if needed
        timestamp: new Date().toISOString(),
        upvotes: 0,
        comments: [],
      });
      setQuestion('');
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group relative px-6 py-3 rounded-lg bg-transparent border-2 border-purple hover:border-purple-500 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-purple-500/25"
      >
        <span className="relative z-10 flex items-center gap-2">
          <svg 
            className="w-5 h-5 transform group-hover:rotate-180 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Ask Question
        </span>
        <div className="absolute inset-0 bg-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-[#1a1625] rounded-xl w-full max-w-2xl shadow-2xl border border-purple/20"
            >
              <div className="p-6 border-b border-purple/20">
                <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Ask a Question
                </h2>
                <p className="text-gray-400 mt-2">
                  Share your question with the community. Be specific and provide context.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6">
                <div className="relative mb-6">
                  <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Type your question here..."
                    className="w-full h-40 p-4 rounded-lg bg-[#2d2b3b] text-white placeholder-gray-400 border border-purple/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none resize-none transition-all duration-300"
                  />
                  <div className="absolute bottom-3 right-3 text-sm text-gray-400">
                    {question.length} / 1000
                  </div>
                </div>
                
                <div className="flex justify-end items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-5 py-2.5 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors duration-300 focus:ring-2 focus:ring-gray-500/20 focus:outline-none"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!question.trim()}
                    className="px-5 py-2.5 rounded-lg bg-purple hover:bg-purple-600 text-white transition-colors duration-300 focus:ring-2 focus:ring-purple-500/20 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-medium"
                  >
                    <span>Post Question</span>
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



