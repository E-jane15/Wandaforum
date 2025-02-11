"use client"

import { useState, useRef } from "react"
import { X, Image, Smile, Send } from "lucide-react"

export function CreatePostModal({ isOpen, onClose, onSubmit }) {
  const [content, setContent] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const fileInputRef = useRef(null)

  const handleImageSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!content.trim()) return

    onSubmit({
      content,
      image: previewUrl,
      timestamp: new Date().toISOString(),
    })

    setContent("")
    setSelectedImage(null)
    setPreviewUrl(null)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-purple3 rounded-2xl w-full max-w-lg p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">Create Post</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?..."
            className="w-full h-32 bg-purple/10 border placeholder-white/50 border-purple/20 rounded-xl p-4 text-white placeholder-purple/50 focus:outline-none focus:border-purple/50 resize-none"
          />

          {previewUrl && (
            <div className="relative">
              <img src={previewUrl || "/placeholder.svg"} alt="Preview" className="w-full rounded-xl" />
              <button
                type="button"
                onClick={() => {
                  setSelectedImage(null)
                  setPreviewUrl(null)
                }}
                className="absolute top-2 right-2 bg-black/60 rounded-full p-1 hover:bg-black/80 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="p-2 hover:bg-purple/10 rounded-full transition-colors text-gray-300 hover:text-orange"
              >
                <Image className="w-5 h-5" />
               
              </button>
              
            </div>

            <button
              type="submit"
              disabled={!content.trim()}
              className="bg-gradient-to-r from-purple to-orange text-white px-6 py-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Post
            </button>
          </div>

          <input type="file" ref={fileInputRef} onChange={handleImageSelect} accept="image/*" className="hidden" />
        </form>
      </div>
    </div>
  )
}

