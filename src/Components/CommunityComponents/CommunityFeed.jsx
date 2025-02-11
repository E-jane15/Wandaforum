import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Image, 
  Send, 
  User, 
  MessageCircle 
} from 'lucide-react';

const CommunityFeed = ({ domains }) => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    content: '',
    image: null
  });
  const [selectedUser, setSelectedUser] = useState(null);

  // Simulate initial posts (replace with actual backend data)
  useEffect(() => {
    const initialPosts = [
      {
        id: 1,
        user: { 
          id: 'user1', 
          name: 'Alex Johnson', 
          avatar: '/path/to/avatar1.jpg' 
        },
        content: 'Excited about the new DevOps trends!',
        image: null,
        domain: 'DevOps',
        timestamp: new Date(),
        replies: []
      }
    ];
    setPosts(initialPosts);
  }, [domains]);

  const handlePostCreation = () => {
    if (!newPost.content.trim() && !newPost.image) return;

    const post = {
      id: Date.now(),
      user: {
        id: 'currentUser', // Replace with actual user authentication
        name: 'Current User',
        avatar: '/path/to/current-user-avatar.jpg'
      },
      content: newPost.content,
      image: newPost.image,
      domain: domains[0].name, // Use first selected domain
      timestamp: new Date(),
      replies: []
    };

    setPosts([post, ...posts]);
    setNewPost({ content: '', image: null });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPost(prev => ({
          ...prev,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUserProfile = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* User Profile Modal (if selected) */}
      {selectedUser && (
        <UserProfileModal 
          user={selectedUser} 
          onClose={() => setSelectedUser(null)} 
        />
      )}

      {/* Post Creation Section */}
      <div className="bg-purple3 rounded-xl p-6 mb-8 shadow-lg">
        <div className="flex items-start space-x-4">
          <textarea 
            placeholder="What's on your mind?"
            className="w-full bg-purple/10 rounded-lg p-3 text-white"
            value={newPost.content}
            onChange={(e) => setNewPost(prev => ({
              ...prev, 
              content: e.target.value
            }))}
          />
          <div className="flex flex-col space-y-2">
            <label className="cursor-pointer">
              <input 
                type="file" 
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              <Image className="text-purple hover:text-purple/70" />
            </label>
            <button 
              onClick={handlePostCreation}
              className="bg-gradient-to-r from-purple to-orange text-white p-2 rounded-full"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
        {newPost.image && (
          <div className="mt-4 relative">
            <img 
              src={newPost.image} 
              alt="Preview" 
              className="max-h-48 rounded-lg"
            />
            <button 
              onClick={() => setNewPost(prev => ({ ...prev, image: null }))}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <div 
            key={post.id} 
            className="bg-purple3 rounded-xl p-6 hover:shadow-xl transition-shadow"
          >
            {/* Post Header */}
            <div className="flex items-center mb-4">
              <img 
                src={post.user.avatar} 
                alt={post.user.name}
                className="w-10 h-10 rounded-full mr-3"
                onClick={() => handleUserProfile(post.user)}
              />
              <div>
                <h3 
                  className="font-bold text-white cursor-pointer"
                  onClick={() => handleUserProfile(post.user)}
                >
                  {post.user.name}
                </h3>
                <p className="text-xs text-gray-400">{post.domain}</p>
              </div>
            </div>

            {/* Post Content */}
            <p className="text-white/80 mb-4">{post.content}</p>
            
            {post.image && (
              <img 
                src={post.image} 
                alt="Post content" 
                className="w-full rounded-lg mb-4"
              />
            )}

            {/* Post Actions */}
            <div className="flex justify-between items-center">
              <button className="flex items-center text-white/70 hover:text-white">
                <MessageCircle className="mr-2" size={18} />
                {post.replies.length} Replies
              </button>
              <span className="text-xs text-gray-500">
                {post.timestamp.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Placeholder for User Profile Modal
const UserProfileModal = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-purple3 rounded-xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">User Profile</h2>
          <button 
            onClick={onClose}
            className="text-white/70 hover:text-white"
          >
            ✕
          </button>
        </div>
        <div className="text-center">
          <img 
            src={user.avatar} 
            alt={user.name}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-bold text-white">{user.name}</h3>
          {/* Add more profile details */}
        </div>
      </div>
    </div>
  );
};

export default CommunityFeed;