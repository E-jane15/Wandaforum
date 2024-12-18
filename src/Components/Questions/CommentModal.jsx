import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CommentModal({ isOpen, onClose, onSubmit }) {
  const [comment, setComment] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const wordLimit = 200;

  // Track word count with more precise counting
  const wordCount = comment.trim().split(/\s+/).filter(Boolean).length;

  useEffect(() => {
    setIsMounted(isOpen);
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim() || wordCount > wordLimit) return;

    onSubmit({
      id: Date.now().toString(),
      content: comment.trim(),
      author: 'Current User', // In a real app, get from auth
      timestamp: new Date().toISOString(),
    });

    setComment('');
    onClose();
  };

  // Modal backdrop and container variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      y: 50,
      transition: { duration: 0.2 }
    }
  };

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
          className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4 overflow-y-auto"
        >
          <motion.div 
            variants={modalVariants}
            className="bg-gradient-to-br from-[#1a1a2e] to-[#2a2a3f] rounded-xl w-full max-w-lg shadow-2xl"
          >
            <div className="p-6">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl text-white font-semibold mb-4 text-purple-300"
              >
                Add a Comment
              </motion.h2>
              
              <form onSubmit={handleSubmit}>
                <motion.textarea
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className={`w-full h-32 p-3 rounded-lg bg-[#2d2d3f] text-white border transition-all duration-300 
                    ${wordCount > wordLimit 
                      ? 'border-red-500 focus:border-red-600' 
                      : 'border-purple-500 focus:border-purple-600'
                    } 
                    focus:outline-none focus:ring-2 
                    ${wordCount > wordLimit ? 'focus:ring-red-300' : 'focus:ring-purple-300'}`}
                  placeholder="What are your thoughts?"
                />
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-between items-center mt-2 text-sm"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      wordCount > wordLimit ? 'text-red-500' : 'text-gray-400'
                    }`}
                  >
                    {wordCount}/{wordLimit} words
                  </span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-end gap-3 mt-4"
                >
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </motion.button>
                  
                  <motion.button
                    type="submit"
                    disabled={!comment.trim() || wordCount > wordLimit}
                    whileHover={{ scale: comment.trim() && wordCount <= wordLimit ? 1.05 : 1 }}
                    whileTap={{ scale: comment.trim() && wordCount <= wordLimit ? 0.95 : 1 }}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      comment.trim() && wordCount <= wordLimit
                        ? 'bg-purple text-white hover:bg-purple-700 shadow-md'
                        : 'bg-purple-700 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Post Comment
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}







