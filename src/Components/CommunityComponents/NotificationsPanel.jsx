"use client"

import { useState } from "react"
import { Heart, MessageCircle, UserPlus, Star, X } from "lucide-react"

export function NotificationsPanel({ isOpen, onClose }) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "like",
      user: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: "liked your post",
      target: "Understanding React Hooks",
      timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
      read: false,
    },
    {
      id: 2,
      type: "comment",
      user: {
        name: "Jane Smith",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: "commented on your post",
      target: "Getting Started with Next.js",
      timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
      read: false,
    },
    {
      id: 3,
      type: "follow",
      user: {
        name: "Mike Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: "started following you",
      timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
      read: true,
    },
  ])

  const getNotificationIcon = (type) => {
    switch (type) {
      case "like":
        return <Heart className="w-4 h-4 text-red-500" />
      case "comment":
        return <MessageCircle className="w-4 h-4 text-blue-500" />
      case "follow":
        return <UserPlus className="w-4 h-4 text-green-500" />
      default:
        return <Star className="w-4 h-4 text-yellow-500" />
    }
  }

  const markAsRead = (id) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now - date

    if (diff < 1000 * 60) {
      return "Just now"
    } else if (diff < 1000 * 60 * 60) {
      const minutes = Math.floor(diff / (1000 * 60))
      return `${minutes}m ago`
    } else if (diff < 1000 * 60 * 60 * 24) {
      const hours = Math.floor(diff / (1000 * 60 * 60))
      return `${hours}h ago`
    } else {
      return date.toLocaleDateString()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end">
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-purple3 w-full max-w-sm h-screen shadow-xl animate-in slide-in-from-right">
        <div className="p-4 border-b border-purple/20 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Notifications</h2>
          <button onClick={onClose} className="text-purple/70 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-64px)]">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-purple/70">No notifications yet</div>
          ) : (
            <div className="divide-y divide-purple/10">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 hover:bg-purple/5 transition-colors ${notification.read ? "opacity-70" : ""}`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={notification.user.avatar || "/placeholder.svg"}
                      alt={notification.user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white">{notification.user.name}</span>
                        {getNotificationIcon(notification.type)}
                      </div>
                      <p className="text-sm text-purple/70 mt-1">
                        {notification.content}
                        {notification.target && <span className="text-purple"> {notification.target}</span>}
                      </p>
                      <span className="text-xs text-purple/50 mt-1 block">
                        {formatTimestamp(notification.timestamp)}
                      </span>
                    </div>
                    {!notification.read && <div className="w-2 h-2 rounded-full bg-purple mt-2" />}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

