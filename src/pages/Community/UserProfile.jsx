"use client"

import { useState } from "react"
import { useParams } from "react-router-dom"
import { Users, MapPin, LinkIcon, Calendar, ArrowLeft } from "lucide-react"
import { PostCard } from "../../Components/CommunityComponents/PostCard"

const UserProfile = () => {
  const { userId } = useParams()
  const [activeTab, setActiveTab] = useState("posts")

  // This would normally come from your API/database
  const mockUser = {
    id: userId,
    name: "Sarah Anderson",
    username: "@sarahanderson",
    avatar: "../../assets/Profile.png",
    coverImage: "../../assets/Profile.png",
    bio: "Full-stack developer | Open source contributor | Coffee enthusiast ☕️ | Building amazing things with code 💻",
    location: "San Francisco, CA",
    website: "sarah-anderson.dev",
    joinedDate: "January 2022",
    followers: 1234,
    following: 567,
    posts: [
      {
        id: 1,
        content: "Just launched my new project! Check it out 🚀",
        timestamp: new Date(),
        likes: 45,
        comments: 12,
        shares: 5,
        author: {
          name: "Sarah Anderson",
          avatar: "../../assets/Profile.png",
          domain: "Technology",
        },
      },
      // Add more posts as needed
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple3 to-dark">
      {/* Back Button */}
      {/* <button
        onClick={() => window.history.back()}
        className="fixed top-4 left-4 p-2 bg-purple3/50 backdrop-blur-sm rounded-full text-white hover:bg-purple/20 transition-colors"
      >
        <ArrowLeft className="w-6 h-6" />
      </button> */}

      {/* Cover Image */}
      <div className="h-48 bg-purple3/30 backdrop-blur-lg border-b border-purple/20">
        <img
          src={mockUser.coverImage || "/placeholder.svg"}
          alt="Cover"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Profile Header */}
      <div className="container mx-auto px-4">
        <div className="relative -mt-20 mb-4">
          <img
            src={mockUser.avatar || "/placeholder.svg"}
            alt={mockUser.name}
            className="w-32 h-32 rounded-full border-4 border-purple3 bg-purple3"
          />
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">{mockUser.name}</h1>
          <p className="text-gray-400">{mockUser.username}</p>
        </div>

        {/* Bio */}
        <p className="text-white/90 mb-4">{mockUser.bio}</p>

        {/* User Info */}
        <div className="flex flex-wrap gap-4 text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{mockUser.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <LinkIcon className="w-4 h-4" />
            <a href={`https://${mockUser.website}`} className="text-purple hover:underline">
              {mockUser.website}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Joined {mockUser.joinedDate}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-6 mb-6">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-purple" />
            <div>
              <span className="font-bold text-white">{mockUser.followers}</span>
              <span className="text-gray-400 ml-1">Followers</span>
            </div>
          </div>
          <div>
            <span className="font-bold text-white">{mockUser.following}</span>
            <span className="text-gray-400 ml-1">Following</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-purple/20 mb-6">
          <div className="flex gap-4">
            {["posts", "replies", "media", "likes"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "text-purple border-b-2 border-purple"
                    : "text-gray-400 hover:text-purple hover:border-b-2 hover:border-purple/50"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-6 mb-8">
          {mockUser.posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserProfile

