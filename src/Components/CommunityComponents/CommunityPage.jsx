"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Search, Plus } from "lucide-react"
import { PostCard } from "./PostCard"
import { CreatePostModal } from "./CreatePostModal"
import Navbar from "../Navbar/Navbar"

const CommunityPage = ({ selectedDomains, onLogout }) => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false)

  const [activeTab, setActiveTab] = useState("all")
  const [sortBy, setSortBy] = useState("recent")
  
  const observerTarget = useRef(null)
  const searchTimeout = useRef(null)

  const generatePost = useCallback(
    (index) => ({
      id: index,
      author: {
        name: `User ${index}`,
        avatar: "/placeholder.svg?height=40&width=40",
        domain: selectedDomains[index % selectedDomains.length]?.name || "General",
      },
      content: `This is a sample post about ${selectedDomains[index % selectedDomains.length]?.name || "technology"}...`,
      timestamp: new Date(Date.now() - index * 3600000).toISOString(),
      likes: Math.floor(Math.random() * 100),
      comments: Math.floor(Math.random() * 20),
      shares: Math.floor(Math.random() * 10),
      image: index % 3 === 0 ? `/placeholder.svg?height=400&width=600` : undefined,
    }),
    [selectedDomains],
  )


  useEffect(() => {
    const storedDomains = localStorage.getItem("selectedDomains")
    if (!storedDomains) {
      // Redirect to welcome page if no domains are selected
      window.location.href = "/welcome"
    }
    setPosts(Array.from({ length: 10 }, (_, i) => generatePost(i)))
  }, [generatePost])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMorePosts()
        }
      },
      { threshold: 1.0 },
    )

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => observer.disconnect()
  }, [loading])

  const loadMorePosts = () => {
    setLoading(true)
    setTimeout(() => {
      const newPosts = Array.from({ length: 5 }, (_, i) => generatePost(posts.length + i))
      setPosts((prev) => [...prev, ...newPosts])
      setLoading(false)
    }, 1000)
  }

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      searchQuery.toLowerCase() === "" ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesDomain = filter === "all" || post.author.domain === filter

    return matchesSearch && matchesDomain
  })

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case "trending":
        return b.likes + b.comments * 2 - (a.likes + a.comments * 2)
      case "popular":
        return b.likes - a.likes
      default:
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    }
  })

  const handleSearch = (value) => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current)
    }
    searchTimeout.current = setTimeout(() => {
      setSearchQuery(value)
    }, 300)
  }

  const handleCreatePost = (newPost) => {
    const post = {
      id: Date.now(),
      author: {
        name: "Current User",
        avatar: "/placeholder.svg?height=40&width=40",
        domain: selectedDomains[0]?.name || "General",
      },
      ...newPost,
      likes: 0,
      comments: 0,
      shares: 0,
      commentsList: [],
    }

    setPosts((prev) => [post, ...prev])
  }

  const FloatingActionButton = () => (
    <button
      onClick={() => setIsCreatePostModalOpen(true)}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-purple to-orange text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
    >
      <Plus className="w-6 h-6" />
    </button>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple3 to-dark">
      <div className="bg-purple3/50 backdrop-blur-lg sticky top-0 z-10 border-b border-purple/20">
        <div className="container mx-auto px-4 py-4">
        <h1 className="text-lg md:text-4xl bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent font-semibold mb-6 leading-tight">
          WandaForum Community
        </h1>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full bg-purple/10 border border-gray-400 rounded-xl pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple/50"
              onChange={(e) => handleSearch(e.target.value)}
            />
      </div>


            <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-purple/10 border border-purple/20 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-purple/50 min-w-[150px]"
              >
                <option value="all">All Domains</option>
                {selectedDomains.map((domain) => (
                  <option key={domain.name} value={domain.name}>
                    {domain.name}
                  </option>
                ))}
              </select>

              {/* <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-purple/10 border border-purple/20 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-purple/50 min-w-[150px]"
              >
                <option value="recent">Most Recent</option>
                <option value="trending">Trending</option>
                <option value="popular">Most Popular</option>
              </select> */}
            </div>
          </div>

          <div className="flex gap-4 mt-4 overflow-x-auto">
            {["all", "following", "trending", "latest"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeTab === tab ? "bg-purple text-white" : "text-gray-300 hover:text-purple hover:bg-purple/10"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          {sortedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <div ref={observerTarget} className="flex justify-center py-8">
          {loading && <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple"></div>}
        </div>
      </div>
      <FloatingActionButton />
      <CreatePostModal
        isOpen={isCreatePostModalOpen}
        onClose={() => setIsCreatePostModalOpen(false)}
        onSubmit={handleCreatePost}
      />
    </div>
  )
}

export default CommunityPage