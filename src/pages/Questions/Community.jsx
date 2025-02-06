import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { initialPosts } from '../../data/posts';
import QuestionModal from '../../Components/Questions/QuestionModal';
import CommentModal from '../../Components/Questions/CommentModal';
import QuestionDetail from '../../Components/Questions/QuestionDetail';
import { formatDistanceToNow } from 'date-fns';
import SearchBar from '../../Components/Questions/SearchBar';

import QuestionForm from '../../Components/Questions/QuestionForm';

import DropdownMenu from '../../Components/Questions/DropdownMenu';


export default function CommunityPage({onSaveQuestion, onReportQuestion}) {
  const [posts, setPosts] = useState(initialPosts);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [filter, setFilter] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingPost, setEditingPost] = useState(null);
  const [editingComment, setEditingComment] = useState(null);


  const handleAddQuestion = useCallback((newQuestion) => {
    setPosts([
      {
        ...newQuestion,
        id: Date.now().toString(),
      },
      ...posts,
    ]);
  }, [posts]);

  const handleAddComment = useCallback((newComment) => {
    setPosts(posts.map(post => {
      if (post.id === selectedPost.id) {
        return {
          ...post,
          comments: [...post.comments, newComment],
        };
      }
      return post;
    }));
    setSelectedPost(null);
  }, [posts, selectedPost]);

  const handleUpvote = useCallback((postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, upvotes: post.upvotes + 1 };
      }
      return post;
    }));
  }, [posts]);

  const filteredPosts = [...posts]
    .filter(post => 
      searchQuery
        ? post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.author.toLowerCase().includes(searchQuery.toLowerCase())
        : true
    )
    .sort((a, b) => {
      switch (filter) {
        case 'newest':
          return new Date(b.timestamp) - new Date(a.timestamp);
        case 'most-upvoted':
          return b.upvotes - a.upvotes;
        default:
          return 0;
      }
    });

    const handleLikeComment = (postId, commentId) => {
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: post.comments.map(comment => {
              if (comment.id === commentId) {
                return { ...comment, likes: (comment.likes || 0) + 1 };
              }
              return comment;
            }),
          };
        }
        return post;
      }));
    };

    const handleEditPost = (postId, newContent) => {
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return { ...post, content: newContent };
        }
        return post;
      }));
      setEditingPost(null);
    };
    const handleDeletePost = (postId) => {
      setPosts(posts.filter(post => post.id !== postId));
    };

    const handleEditComment = (postId, commentId, newContent) => {
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: post.comments.map(comment => {
              if (comment.id === commentId) {
                return { ...comment, content: newContent };
              }
              return comment;
            }),
          };
        }
        return post;
      }));
      setEditingComment(null);
    };

    const handleDeleteComment = (postId, commentId) => {
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: post.comments.filter(comment => comment.id !== commentId),
          };
        }
        return post;
      }));
    };

    const handleSaveQuestion = (postId) => {
      const postToSave = posts.find(post => post.id === postId);
      if (postToSave) {
        const savedQuestions = JSON.parse(localStorage.getItem('savedQuestions') || '[]');
        if (!savedQuestions.some(q => q.id === postId)) {
          savedQuestions.push(postToSave);
          localStorage.setItem('savedQuestions', JSON.stringify(savedQuestions));
          alert('Question saved successfully!');
        } else {
          alert('This question is already saved.');
        }
      }
    };


  const handleReportQuestion = (postId) => {
    // In a real application, this would send a report to the server
    alert(`Question ${postId} has been reported. Our team will review it shortly.`);
  };

  return (
    <>
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#281b32] text-white p-4"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0"
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent">Community Questions</h1>
          <div className="flex items-center space-x-4">
            <SearchBar onSearch={setSearchQuery} />
            <QuestionForm onSubmit={handleAddQuestion} />
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsQuestionModalOpen(true)}
              className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Ask Question
            </motion.button> */}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between mb-6 space-y-4 md:space-y-0"
        >
          <h2 className="text-2xl font-bold">{posts.length} Questions</h2>
          <div className="flex items-center space-x-4">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-[#2d2d3f] px-3 py-2 rounded-lg"
            >
              <option value="newest">Newest</option>
              <option value="most-upvoted">Most Upvoted</option>
            </select>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedPost ? (
            <motion.div
              key="question-detail"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPost(null)}
                className="mb-4 text-white px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                ← Back to Questions
              </motion.button>
              {/* <QuestionDetail
                post={selectedPost}
                onComment={() => setIsCommentModalOpen(true)}
              /> */}
              <QuestionDetail
                post={selectedPost}
                onComment={() => setIsCommentModalOpen(true)}
                onLikeComment={handleLikeComment}
                onEditPost={handleEditPost}
                onDeletePost={handleDeletePost}
                onEditComment={handleEditComment}
                onDeleteComment={handleDeleteComment}
                onSaveQuestion={handleSaveQuestion}
                onReportQuestion={handleReportQuestion}
                editingPost={editingPost}
                setEditingPost={setEditingPost}
                editingComment={editingComment}
                setEditingComment={setEditingComment}
              />
            </motion.div>
          ) : (
            <motion.div
              key="post-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              className="space-y-4"
            >
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#1a1a2e] p-4 rounded-lg cursor-pointer hover:shadow-lg transition-all"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="flex items-start gap-4">
                    <motion.img
                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${post.author}`}
                      alt={post.author}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-12 h-12 rounded-full ring-2 ring-purple-500"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-purple-300">
                          {post.author}
                        </span>
                        <span className="text-gray-400 text-sm">
                          @{post.username}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {formatDistanceToNow(new Date(post.timestamp))} ago
                        </span>
                      </div>
                      <p className="text-gray-200">{post.content}</p>
                      <div className="flex items-center gap-4 mt-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleUpvote(post.id);
                          }}
                          className="flex items-center gap-1 text-gray-400 hover:text-purple-400"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                          {post.upvotes}
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPost(post);
                            setIsCommentModalOpen(true);
                          }}
                          className="flex items-center gap-1 text-gray-400 hover:text-purple-400"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                          {post.comments.length}
                        </motion.button>
                        <div className="ml-auto">
                          <DropdownMenu
                            onSave={() => onSaveQuestion(post.id)}
                            onReport={() => onReportQuestion(post.id)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <QuestionModal
          isOpen={isQuestionModalOpen}
          onClose={() => setIsQuestionModalOpen(false)}
          onSubmit={handleAddQuestion}
        />

        <CommentModal
          isOpen={isCommentModalOpen}
          onClose={() => setIsCommentModalOpen(false)}
          onSubmit={handleAddComment}
        />
      </div>
    </motion.div>
    </>
  );
}
























// <div className='flex justify-center items-center'>
//   <div className="grid grid-cols-3 gap-20 px-32">
//     {priceCards.map((price_cards, index) => (
//       <PricingCard
//         key={index}
//         title={price_cards.title}
//         heading={price_cards.heading}
//         billing={price_cards.billing}
//         amount={price_cards.amount}
//         time={price_cards.time}
//         benefit1={price_cards.benefit1}
//         benefit2={price_cards.benefit2}
//       />
//     ))}
//   </div>
// </div>
