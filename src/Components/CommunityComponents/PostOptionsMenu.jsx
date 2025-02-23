"use client"

import { useNavigate } from "react-router-dom"
import { useRef, useEffect } from "react"

export function PostOptionsMenu({ isOpen, onClose, onReport, authorId }) {
  const navigate = useNavigate()
  const menuRef = useRef()

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  const handleViewBio = () => {
    navigate(`/user/${authorId}`)
    onClose()
  }

  const handleReport = () => {
    onReport()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      ref={menuRef}
      className="absolute right-0 mt-2 w-48 rounded-xl bg-purple3/90 backdrop-blur-md border border-purple/20 shadow-lg z-50 py-1"
    >
      <button
        onClick={handleViewBio}
        className="w-full text-left px-4 py-2 text-white hover:bg-purple/10 transition-colors"
      >
        View User Bio
      </button>
      <button
        onClick={handleReport}
        className="w-full text-left px-4 py-2 text-white hover:bg-purple/10 transition-colors text-red-400 hover:text-red-300"
      >
        Report Post
      </button>
    </div>
  )
}

