import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { initialPosts } from '../../data/posts';
import QuestionModal from '../../Components/Questions/QuestionModal';
import CommentModal from '../../Components/Questions/CommentModal';
import QuestionDetail from '../../Components/Questions/QuestionDetail';
import { formatDistanceToNow } from 'date-fns';
import SearchBar from '../../Components/Questions/SearchBar';


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
          <h1 className="text-3xl font-bold text-white">Community Questions</h1>
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







// import { useState } from 'react';
// import { initialPosts } from '../../data/posts';
// import QuestionModal from '../../Components/Questions/QuestionModal';
// import CommentModal from '../../Components/Questions/CommentModal';
// import QuestionDetail from '../../Components/Questions/QuestionDetail';
// import { formatDistanceToNow } from 'date-fns';
// import SearchBar from '../../Components/Questions/SearchBar';
// export default function CommunityPage() {


// const [posts, setPosts] = useState(initialPosts);
//   const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
//   const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [filter, setFilter] = useState('newest');
//   const [searchQuery, setSearchQuery] = useState('');


//   const handleAddQuestion = (newQuestion) => {
//     setPosts([
//       {
//         ...newQuestion,
//         id: Date.now().toString(),
//       },
//       ...posts,
//     ]);
//   };

//   const handleAddComment = (newComment) => {
//     setPosts(posts.map(post => {
//       if (post.id === selectedPost.id) {
//         return {
//           ...post,
//           comments: [...post.comments, newComment],
//         };
//       }
//       return post;
//     }));
//     setSelectedPost(null);
//   };

//   const handleUpvote = (postId) => {
//     setPosts(posts.map(post => {
//       if (post.id === postId) {
//         return { ...post, upvotes: post.upvotes + 1 };
//       }
//       return post;
//     }));
//   };

//   const filteredPosts = [...posts]
//   .filter(post => 
//     searchQuery
//       ? post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         post.author.toLowerCase().includes(searchQuery.toLowerCase())
//       : true
//   )
//   .sort((a, b) => {
//     switch (filter) {
//       case 'newest':
//         return new Date(b.timestamp) - new Date(a.timestamp);
//       case 'most-upvoted':
//         return b.upvotes - a.upvotes;
//       default:
//         return 0;
//     }
//   });


//   return (
//     <div className="min-h-screen bg-[#13131f] text-white p-4">

//       <div className="max-w-4xl mx-auto">
//       <div className="flex justify-between items-center mb-8">
//          <h1 className="text-3xl font-bold text-white">All Questions</h1>
//          <SearchBar onSearch={setSearchQuery} />
//            <QuestionForm onSubmit={handleAddQuestion}/>
//         </div>
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-2xl font-bold">{posts.length} Questions</h1>
//           <div className="flex gap-3">
//             <select
//               value={filter}
//               onChange={(e) => setFilter(e.target.value)}
//               className="bg-[#2d2d3f] px-3 py-2 rounded-lg"
//             >
//               <option value="newest" className='rounded-lg'>Newest</option>
//               <option value="most-upvoted">Most Upvoted</option>
//             </select>
            
//           </div>
//           <button
//                className="px-4 py-2 bg-purple border-2 border-purple bg-transparent rounded-lg hover:bg-purple-700"
//             >
//               Filter
//             </button>
//         </div>

//         {selectedPost ? (
//           <>
//             <button
//               onClick={() => setSelectedPost(null)}
//               className="mb-4 text-white px-2 py-2 rounded-lg  bg-purple hover:text-purple-300"
//             >
//               ← Back 
//             </button>
//             <QuestionDetail
//               post={selectedPost}
//               onComment={() => setIsCommentModalOpen(true)}
//             />
//           </>
//         ) : (
//           <div className="space-y-4">
//             {filteredPosts.map((post) => (
//               <div
//                 key={post.id}
//                 className="bg-[#1a1a2e] p-4 rounded-lg cursor-pointer hover:bg-[#2d2d3f]"
//                 onClick={() => setSelectedPost(post)}
//               >
//                 <div className="flex items-start gap-4">
//                   <img
//                     src={`https://api.dicebear.com/7.x/initials/svg?seed=${post.author}`}
//                     alt={post.author}
//                     className="w-10 h-10 rounded-full"
//                   />
//                   <div className="flex-1">
//                     <div className="flex items-center gap-2">
//                       <span className="font-semibold">{post.author}</span>
//                       <span className="text-gray-400 text-sm">{post.username}</span>
//                       <span className="text-gray-400 text-sm">
//                         {formatDistanceToNow(new Date(post.timestamp))} ago
//                       </span>
//                     </div>
//                     <p className="mt-2">{post.content}</p>
//                     <div className="flex items-center gap-4 mt-4">
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           handleUpvote(post.id);
//                         }}
//                         className="flex items-center gap-1 text-gray-400 hover:text-purple-400"
//                       >
//                         <svg
//                           className="w-5 h-5"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 15l7-7 7 7"
//                           />
//                         </svg>
//                         {post.upvotes}
//                       </button>
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setSelectedPost(post);
//                           setIsCommentModalOpen(true);
//                         }}
//                         className="flex items-center gap-1 text-gray-400 hover:text-purple-400"
//                       >
//                         <svg
//                           className="w-5 h-5"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                           />
//                         </svg>
//                         {post.comments.length}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         <QuestionModal
//           isOpen={isQuestionModalOpen}
//           onClose={() => setIsQuestionModalOpen(false)}
//           onSubmit={handleAddQuestion}
//         />
        
//         <CommentModal
//           isOpen={isCommentModalOpen}
//           onClose={() => setIsCommentModalOpen(false)}
//           onSubmit={handleAddComment}
//         />
//       </div>
//     </div>
//   );
// }














// "use client"

// import * as React from "react"
// import { MoreVertical, MessageSquare, ChevronUp, ChevronDown, Search, X } from 'lucide-react'

// const posts = [
//   {
//     id: "1",
//     author: {
//       name: "Kehbuma Lima",
//       username: "kehbumalima1",
//       avatar: "https://i.pravatar.cc/150?u=kehbuma",
//     },
//     content: "What are some interview questions that are usually asked in DevOps interviews",
//     timestamp: "1 month ago",
//     upvotes: 5,
//     tags: ["DevOps", "Interview"],
//     replies: []
//   },
//   {
//     id: "2",
//     author: {
//       name: "Tech Enthusiast",
//       username: "techenthusiast",
//       avatar: "https://i.pravatar.cc/150?u=tech",
//     },
//     content: "Who is a DevOps Engineer and what are their primary responsibilities?",
//     timestamp: "3 weeks ago",
//     upvotes: 12,
//     isReply: true,
//     replyTo: "1",
//     tags: ["Career", "DevOps"],
//   }
// ]

// export default function CommunityPage() {
//   const [filter, setFilter] = React.useState("newest")
//   const [searchQuery, setSearchQuery] = React.useState("")
//   const [activeTags, setActiveTags] = React.useState([])
//   const [replyStates, setReplyStates] = React.useState({})
//   const [newReplies, setNewReplies] = React.useState({})
//   const [postList, setPostList] = React.useState(posts)
//   const [votedPosts, setVotedPosts] = React.useState({})

//   // Combine all unique tags from posts
//   const allTags = Array.from(new Set(postList.flatMap(post => post.tags || [])))

//   // Filter posts based on search, filter, and tags
//   const filteredPosts = postList.filter(post => {
//     const matchesSearch = post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                           post.author.name.toLowerCase().includes(searchQuery.toLowerCase())
    
//     const matchesTags = activeTags.length === 0 || 
//                         activeTags.some(tag => post.tags?.includes(tag))
    
//     return matchesSearch && matchesTags
//   }).sort((a, b) => {
//     switch(filter) {
//       case "newest":
//         return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
//       case "upvoted":
//         return b.upvotes - a.upvotes
//       default:
//         return 0
//     }
//   })

//   // Toggle reply input for a specific post
//   const toggleReply = (postId) => {
//     setReplyStates(prev => ({
//       ...prev,
//       [postId]: !prev[postId]
//     }))
//   }

//   // Handle voting
//   const handleVote = (postId, voteType) => {
//     setPostList(prevPosts => {
//       return prevPosts.map(post => {
//         if (post.id === postId) {
//           const currentVote = votedPosts[postId]
//           let updatedUpvotes = post.upvotes

//           if (currentVote === voteType) {
//             // Removing the vote
//             updatedUpvotes += (voteType === 'up' ? -1 : 1)
//             setVotedPosts(prev => ({ ...prev, [postId]: null }))
//           } else {
//             // Adding or changing vote
//             if (currentVote === null) {
//               updatedUpvotes += (voteType === 'up' ? 1 : -1)
//             } else {
//               updatedUpvotes += (voteType === 'up' ? 2 : -2)
//             }
//             setVotedPosts(prev => ({ ...prev, [postId]: voteType }))
//           }

//           return { ...post, upvotes: updatedUpvotes }
//         }
//         return post
//       })
//     })
//   }

//   // Handle reply submission
//   const submitReply = (postId) => {
//     const replyContent = newReplies[postId]
//     if (replyContent && replyContent.trim()) {
//       const newReply = {
//         id: `reply-${Date.now()}`,
//         author: {
//           name: "Current User",
//           username: "currentuser",
//           avatar: "https://i.pravatar.cc/150?u=current",
//         },
//         content: replyContent,
//         timestamp: "Just now",
//         upvotes: 0,
//         isReply: true,
//         replyTo: postId
//       }

//       // Add the new reply to the posts array
//       setPostList(prev => [...prev, newReply])

//       // Clear reply input and close reply box
//       setNewReplies(prev => ({...prev, [postId]: ""}))
//       setReplyStates(prev => ({...prev, [postId]: false}))
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 to-purple-700 p-4 md:p-8 text-gray-100">
//       <div className="mx-auto max-w-6xl">
//         {/* Header with Search and Filters */}
//         <div className="mb-8 space-y-4">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <h1 className="text-3xl font-bold text-white">Community Q&A</h1>
//             <div className="flex items-center w-full md:w-auto space-x-2">
//               {/* Search Input */}
//               <div className="relative flex-grow">
//                 <input 
//                   type="text" 
//                   placeholder="Search questions..." 
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-10 pr-8 py-2 border border-purple-600 rounded-lg bg-purple-800 text-white placeholder-purple-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
//                 />
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" size={20} />
//                 {searchQuery && (
//                   <button 
//                     onClick={() => setSearchQuery("")}
//                     className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-400 hover:text-white"
//                   >
//                     <X size={20} />
//                   </button>
//                 )}
//               </div>

//               {/* Sort Dropdown */}
//               <select 
//                 value={filter} 
//                 onChange={(e) => setFilter(e.target.value)}
//                 className="px-3 py-2 border border-purple-600 rounded-lg bg-purple-800 text-white focus:ring-2 focus:ring-pink-500"
//               >
//                 <option value="newest">Newest</option>
//                 <option value="upvoted">Most Upvoted</option>
//               </select>
//             </div>
//           </div>

//           {/* Tag Filters */}
//           <div className="flex flex-wrap gap-2">
//             {allTags.map(tag => (
//               <button
//                 key={tag}
//                 onClick={() => 
//                   setActiveTags(prev => 
//                     prev.includes(tag) 
//                     ? prev.filter(t => t !== tag) 
//                     : [...prev, tag]
//                   )
//                 }
//                 className={`px-3 py-1 rounded-full text-sm transition ${
//                   activeTags.includes(tag) 
//                   ? 'bg-pink-500 text-white' 
//                   : 'bg-purple-700 text-purple-200 hover:bg-purple-600'
//                 }`}
//               >
//                 {tag}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Posts Section */}
//         <div className="space-y-4">
//           {filteredPosts.length === 0 ? (
//             <div className="text-center py-8 bg-purple-800 rounded-lg shadow">
//               <p className="text-purple-300">No posts match your search or filter criteria.</p>
//             </div>
//           ) : (
//             filteredPosts.map((post) => (
//               <div 
//                 key={post.id} 
//                 className={`
//                   bg-purple-800 rounded-lg shadow-md hover:shadow-lg transition 
//                   ${post.isReply ? 'ml-0 md:ml-12 border-l-4 border-pink-500' : ''}
//                 `}
//               >
//                 <div className="p-6">
//                   {/* Post Header */}
//                   <div className="flex items-center mb-4">
//                     <img 
//                       src={post.author.avatar} 
//                       alt={post.author.name} 
//                       className="w-12 h-12 rounded-full mr-4 object-cover"
//                     />
//                     <div className="flex-grow">
//                       <div className="flex items-center gap-2">
//                         <span className="font-semibold text-white">{post.author.name}</span>
//                         <span className="text-purple-300 text-sm">@{post.author.username}</span>
//                         <span className="text-purple-400 text-sm">• {post.timestamp}</span>
//                       </div>
//                       {post.isReply && (
//                         <span className="text-sm text-purple-300">
//                           Replying to @{postList.find((p) => p.id === post.replyTo)?.author.username}
//                         </span>
//                       )}
//                     </div>
//                     {/* More Options Dropdown */}
//                     <div className="relative">
//                       <button 
//                         className="p-2 rounded-full hover:bg-purple-700"
//                         aria-label="More options"
//                       >
//                         <MoreVertical className="text-purple-300" size={20} />
//                       </button>
//                     </div>
//                   </div>

//                   {/* Post Content */}
//                   <p className="text-white mb-4">{post.content}</p>

//                   {/* Tags */}
//                   {post.tags && (
//                     <div className="flex gap-2 mb-4">
//                       {post.tags.map(tag => (
//                         <span 
//                           key={tag} 
//                           className="px-2 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   )}

//                   {/* Post Actions */}
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-4">
//                       {/* Voting Buttons */}
//                       <div className="flex items-center space-x-2">
//                         <button 
//                           onClick={() => handleVote(post.id, 'up')}
//                           className={`p-2 rounded-full hover:bg-purple-700 ${
//                             votedPosts[post.id] === 'up' ? 'text-pink-500' : 'text-purple-300'
//                           }`}
//                           aria-label="Upvote"
//                         >
//                           <ChevronUp size={20} />
//                         </button>
//                         <span className="text-white font-medium">{post.upvotes}</span>
//                         <button 
//                           onClick={() => handleVote(post.id, 'down')}
//                           className={`p-2 rounded-full hover:bg-purple-700 ${
//                             votedPosts[post.id] === 'down' ? 'text-pink-500' : 'text-purple-300'
//                           }`}
//                           aria-label="Downvote"
//                         >
//                           <ChevronDown size={20} />
//                         </button>
//                       </div>

//                       {/* Reply Button */}
//                       <button 
//                         onClick={() => toggleReply(post.id)}
//                         className="flex items-center space-x-2 text-purple-300 hover:text-pink-500"
//                       >
//                         <MessageSquare size={18} />
//                         <span>Reply</span>
//                       </button>
//                     </div>
//                   </div>

//                   {/* Reply Input */}
//                   {replyStates[post.id] && (
//                     <div className="mt-4 space-y-2">
//                       <textarea 
//                         placeholder="Write your reply..."
//                         value={newReplies[post.id] || ""}
//                         onChange={(e) => setNewReplies(prev => ({
//                           ...prev, 
//                           [post.id]: e.target.value
//                         }))}
//                         className="w-full p-2 rounded-lg bg-purple-700 text-white placeholder-purple-300 border border-purple-600 focus:ring-2 focus:ring-pink-500"
//                         rows={3}
//                       />
//                       <div className="flex justify-end space-x-2">
//                         <button 
//                           onClick={() => toggleReply(post.id)}
//                           className="px-4 py-2 bg-purple-700 text-purple-300 rounded-lg hover:bg-purple-600"
//                         >
//                           Cancel
//                         </button>
//                         <button 
//                           onClick={() => submitReply(post.id)}
//                           className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
//                           disabled={!newReplies[post.id]?.trim()}
//                         >
//                           Submit Reply
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Pagination or Load More */}
//         <div className="mt-8 text-center">
//           <button className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
//             Load More Questions
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }







// // Community.jsx
// "use client";

// import React from "react";
// import Navbar from "../../Components/Navbar/Navbar";
// // import QuestionFeed from '../../Components/Questions/QuestionFeed';
// import QuestionForm from "../../Components/Questions/QuestionForm";
import Community from './Community';
import QuestionForm from '../../Components/Questions/QuestionForm';
import Navbar from '../../Components/Navbar/Navbar';
import DropdownMenu from '../../Components/Questions/DropdownMenu';

// const Community = () => {
//   return (
//     <div className="min-h-screen bg-[#13111C]">
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold text-white">All Questions</h1>
//           <QuestionForm />
//         </div>
//         {/* Add your questions list content here */}
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-white text-xl">22,375 Questions</h2>
//           <div className="flex gap-8">
//             <div className="flex bg-[#2d2b3b] rounded-md overflow-hidden">
//               <button className="px-4 py-4 text-white bg-purple-600 hover:bg-[#363347]">
//                 Newest
//               </button>
//               <button className="px-4 py-4 text-gray-300 hover:bg-[#363347]">
//                 Unanswered
//               </button>
//               <button className="px-4 py-4 text-gray-300 hover:bg-[#363347]">
//                 Most Upvoted
//               </button>
//             </div>
//           </div>
//           <button className="px-4 py-2 text-gray-300 bg-[#2d2b3b] rounded-md hover:bg-[#363347]">
//             Filter
//           </button>
//         </div>
//         <div className="flex items-center gap-2 mb-1">
//           <span className="text-white font-medium">Kehbuma Lima</span>
//           <span className="text-gray-400 text-sm">@kehbumalima1</span>
//           <span className="text-gray-400 text-sm">• 1 month ago</span>
//         </div>
//         <p className="text-white mb-4">
//           What are some interview questions that are usually asked in DevOps
//           interviews
//         </p>
//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-1">
//             <button className="p-1 hover:bg-[#2d2b3b] rounded">
//               {/* <ArrowUpIcon className="w-5 h-5 text-gray-400" /> */}{" "}
//               <div>R</div>
//             </button>
//             <span className="text-gray-400">5 upvotes</span>
//             <button className="p-1 hover:bg-[#2d2b3b] rounded">
//               {/* <ArrowDownIcon className="w-5 h-5 text-gray-400" /> */}{" "}
//               <div>Y</div>
//             </button>
//           </div>
//           <button className="flex items-center gap-1 text-gray-400 hover:bg-[#2d2b3b] p-1 rounded">
//             {/* <MessageSquareIcon className="w-5 h-5" /> */}{" "}
//             <div className="text-bold">S</div>
//             <span>Reply</span>
//           </button>
//           <button className="ml-auto p-1 hover:bg-[#2d2b3b] rounded">
//             {/* <MoreVerticalIcon className="w-5 h-5 text-gray-400" /> */}{" "}
//             <div>Z</div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Community;
