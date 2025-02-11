"use client"

import { useState, useEffect } from "react"
import { Users, MapPin, Calendar, LinkIcon } from "lucide-react"

export function UserHoverCard({ user, children }) {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  let timeout

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: rect.left,
      y: rect.bottom + window.scrollY,
    })

    timeout = setTimeout(() => {
      setIsVisible(true)
    }, 500) // Show after 500ms hover
  }

  const handleMouseLeave = () => {
    clearTimeout(timeout)
    setIsVisible(false)
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeout)
    }
  }, [timeout]) // Added timeout to dependencies

  return (
    <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}

      {isVisible && (
        <div
          className="absolute z-50 w-80 bg-purple3/95 backdrop-blur-lg rounded-xl shadow-xl border border-purple/20 p-4"
          style={{
            left: position.x,
            top: position.y + 10,
          }}
        >
          <div className="flex items-start gap-4">
            <img
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
              className="w-16 h-16 rounded-full border-2 border-purple/30"
            />
            <div className="flex-1">
              <h3 className="font-bold text-white text-lg">{user.name}</h3>
              <p className="text-purple/70 text-sm">{user.bio || "No bio yet"}</p>
            </div>
          </div>

          <div className="mt-4 grid gap-2">
            <div className="flex items-center gap-2 text-sm text-purple/70">
              <Users className="w-4 h-4" />
              <span>{user.followers || 0} followers</span>
              <span className="mx-1">·</span>
              <span>{user.following || 0} following</span>
            </div>

            {user.location && (
              <div className="flex items-center gap-2 text-sm text-purple/70">
                <MapPin className="w-4 h-4" />
                <span>{user.location}</span>
              </div>
            )}

            <div className="flex items-center gap-2 text-sm text-purple/70">
              <Calendar className="w-4 h-4" />
              <span>Joined {new Date(user.joinedAt || Date.now()).toLocaleDateString()}</span>
            </div>

            {user.website && (
              <div className="flex items-center gap-2 text-sm">
                <LinkIcon className="w-4 h-4 text-purple/70" />
                <a
                  href={user.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  {user.website.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
            <div className="bg-purple/10 rounded-lg p-2">
              <div className="font-bold text-white">{user.posts || 0}</div>
              <div className="text-purple/70">Posts</div>
            </div>
            <div className="bg-purple/10 rounded-lg p-2">
              <div className="font-bold text-white">{user.totalLikes || 0}</div>
              <div className="text-purple/70">Likes</div>
            </div>
            <div className="bg-purple/10 rounded-lg p-2">
              <div className="font-bold text-white">{user.domains?.length || 0}</div>
              <div className="text-purple/70">Domains</div>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button className="flex-1 bg-gradient-to-r from-purple to-orange text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Follow
            </button>
            <button className="flex-1 border border-purple/20 text-white py-2 rounded-lg text-sm font-medium hover:bg-purple/10 transition-colors">
              Message
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

