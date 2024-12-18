import React, { useState, useEffect } from 'react';
import {
  Users,
  MessageCircle,
  Star,
  Layers,
  Search,
  Filter,
  Plus,
  X
} from 'lucide-react';
import Navbar from '../Navbar/Navbar';

const initialPosts = [
  {
    id: 1,
    title: 'Best Practices for React State Management in 2024',
    author: 'Alex Johnson',
    authorAvatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=alex',
    tags: ['react', 'state-management', 'best-practices'],
    votes: 42,
    answers: 7,
    views: 1205,
    timestamp: '2 hours ago',
    content: 'Exploring the latest techniques for efficient state management in React applications, covering context API, Redux, and modern hooks-based approaches.',
    status: 'answered'
  },
  {
    id: 2,
    title: 'Optimizing Machine Learning Workflows with Python',
    author: 'Sara Martinez',
    authorAvatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=sara',
    tags: ['python', 'machine-learning', 'optimization'],
    votes: 35,
    answers: 4,
    views: 890,
    timestamp: '5 hours ago',
    content: 'A deep dive into streamlining machine learning pipelines, discussing data preprocessing, model selection, and performance optimization techniques.',
    status: 'answered'
  },
  {
    id: 3,
    title: 'Blockchain Authentication Strategies',
    author: 'Mike Chen',
    authorAvatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=mike',
    tags: ['blockchain', 'security', 'authentication'],
    votes: 28,
    answers: 3,
    views: 674,
    timestamp: '1 day ago',
    content: 'Examining cutting-edge authentication methods in blockchain technology, exploring decentralized identity and secure access protocols.',
    status: 'unanswered'
  }
];

export default function CommunityPage({  userDomains = [], 
    onReturnToDomains  }) {
  const [posts, setPosts] = useState(initialPosts);
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);
  const [selectedFilter, setSelectedFilter] = useState('recent');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    tags: []
  });

  useEffect(() => {
    let result = [...posts];

    if (searchTerm) {
      result = result.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedTags.length > 0) {
      result = result.filter(post => 
        selectedTags.every(tag => post.tags.includes(tag))
      );
    }

    switch (selectedFilter) {
      case 'top':
        result.sort((a, b) => b.votes - a.votes);
        break;
      case 'recent':
        result.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        break;
      case 'unanswered':
        result = result.filter(post => post.status === 'unanswered');
        break;
      default:
        break;
    }

    setFilteredPosts(result);
  }, [searchTerm, selectedFilter, selectedTags, posts]);

  const allTags = [...new Set(posts.flatMap(post => post.tags))];

  const handleCreatePost = () => {
    if (!newPost.title || !newPost.content) {
      alert('Please fill in all required fields');
      return;
    }

    const postToAdd = {
      id: posts.length + 1,
      ...newPost,
      author: 'Current User',
      authorAvatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=user',
      votes: 0,
      answers: 0,
      views: 0,
      timestamp: 'Just now',
      status: 'unanswered'
    };

    setPosts([postToAdd, ...posts]);
    setIsCreatePostModalOpen(false);
    setNewPost({ title: '', content: '', tags: [] });
  };

  const toggleTagFilter = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filters = [
    { key: 'recent', label: 'Recent', icon: MessageCircle },
    { key: 'top', label: 'Top', icon: Star },
    { key: 'unanswered', label: 'Unanswered', icon: Layers }
  ];

  const CreatePostModal = () => (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={() => setIsCreatePostModalOpen(false)}
    >
      <div 
        className="bg-dark-light rounded-xl p-6 w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Create New Discussion</h2>
          <button 
            onClick={() => setIsCreatePostModalOpen(false)}
            className="text-gray-400 hover:text-white transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          <input 
            type="text"
            placeholder="Discussion Title"
            value={newPost.title}
            onChange={(e) => setNewPost(prev => ({...prev, title: e.target.value}))}
            className="w-full bg-dark p-3 rounded-xl text-white"
          />
          <textarea 
            placeholder="Describe your discussion in detail..."
            value={newPost.content}
            onChange={(e) => setNewPost(prev => ({...prev, content: e.target.value}))}
            rows={5}
            className="w-full bg-dark p-3 rounded-xl text-white"
          />
          <div>
            <label className="block mb-2 text-sm">Add Tags</label>
            <div className="flex flex-wrap gap-2">
              {['react', 'python', 'javascript', 'machine-learning', 'blockchain', 'security']
                .map(tag => (
                  <button
                    key={tag}
                    onClick={() => {
                      setNewPost(prev => ({
                        ...prev, 
                        tags: prev.tags.includes(tag) 
                          ? prev.tags.filter(t => t !== tag)
                          : [...prev.tags, tag]
                      }))
                    }}
                    className={`px-3 py-1 rounded-full text-xs transition ${
                      newPost.tags.includes(tag)
                        ? 'bg-purple text-white'
                        : 'bg-purple/20 text-purple hover:bg-purple/30'
                    }`}
                  >
                    {tag}
                  </button>
                ))
              }
            </div>
          </div>
          <button 
            onClick={handleCreatePost}
            className="w-full bg-gradient-to-r from-purple to-orange text-white py-3 rounded-xl hover:opacity-90 transition"
          >
            Create Discussion
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-dark min-h-screen text-white">
      {isCreatePostModalOpen && <CreatePostModal />}
      <Navbar additionalAction={
          <button 
            onClick={onReturnToDomains}
            className="bg-purple/20 text-purple hover:bg-purple/30 
              font-bold py-2 px-4 rounded-xl flex items-center transition"
          >
            Change Domains
          </button>
        } />
      <div className="container mx-auto px-4 py-8 grid grid-cols-4 gap-6">
        <div className="col-span-1 bg-dark-light p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Users className="mr-3" /> Your Communities
          </h2>
          <div className="space-y-3">
            {userDomains.map((domain, index) => (
              <div 
                key={index} 
                className="bg-purple/10 p-3 rounded-lg hover:bg-purple/20 transition flex items-center cursor-pointer"
              >
                <span className="mr-3 text-purple">•</span>
                {domain}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Filter by Tags</h3>
            <div className="space-y-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTagFilter(tag)}
                  className={`w-full text-left p-2 rounded-lg transition ${
                    selectedTags.includes(tag) 
                      ? 'bg-purple text-white' 
                      : 'bg-purple/10 text-purple hover:bg-purple/20'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-3 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Community Discussions</h1>
            <button 
              onClick={() => setIsCreatePostModalOpen(true)}
              className="bg-gradient-to-r from-purple to-orange text-white 
                font-bold py-2 px-4 rounded-xl flex items-center hover:opacity-90 transition"
            >
              <Plus className="mr-2" /> Create Post
            </button>
          </div>

          <div className="flex space-x-4 mb-6">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition 
                  ${selectedFilter === filter.key 
                    ? 'bg-purple text-white' 
                    : 'bg-dark-light hover:bg-purple/10'
                  }`}
              >
                <filter.icon className="w-5 h-5" />
                <span>{filter.label}</span>
              </button>
            ))}
          </div>

          <div className="flex space-x-4 mb-6">
            <div className="flex-grow relative">
              <input 
                type="text" 
                placeholder="Search discussions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-dark-light p-3 rounded-xl pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button className="bg-dark-light p-3 rounded-xl">
              <Filter />
            </button>
          </div>

          {selectedTags.length > 0 && (
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-sm text-gray-400">Filtering by:</span>
              {selectedTags.map(tag => (
                <span 
                  key={tag} 
                  className="bg-purple/20 text-purple px-2 py-1 rounded-md text-xs flex items-center"
                >
                  {tag}
                  <button 
                    onClick={() => toggleTagFilter(tag)} 
                    className="ml-2 text-purple hover:text-white"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}

          <div className="space-y-4">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="bg-dark-light p-6 rounded-xl hover:bg-purple/10 transition grid grid-cols-12 gap-4"
                >
                  <div className="col-span-1 flex items-center justify-center">
                    <img 
                      src={post.authorAvatar} 
                      alt={post.author} 
                      className="w-12 h-12 rounded-full border-2 border-purple"
                    />
                  </div>
                  
                  <div className="col-span-1 flex flex-col items-center justify-center text-center">
                    <div className="text-2xl font-bold text-purple">{post.votes}</div>
                    <div className="text-sm text-gray-400">votes</div>
                  </div>
                  <div className="col-span-6">
                    <h3 className="text-xl font-semibold mb-2 hover:text-purple transition cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-2 line-clamp-2">{post.content}</p>
                    <div className="flex space-x-2 mb-2">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="bg-purple/20 text-purple px-2 py-1 rounded-md text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-400">
                      Asked by {post.author} {post.timestamp}
                    </div>
                  </div>
                  <div className="col-span-4 flex flex-col items-end justify-center">
                    <div className="flex space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" /> {post.answers} answers
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1" /> {post.views} views
                      </div>
                    </div>
                    {post.status === 'unanswered' && (
                      <div className="mt-2 text-orange text-xs">Needs Attention</div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-400">
                No discussions found matching your search.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}