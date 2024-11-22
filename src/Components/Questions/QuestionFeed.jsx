
import { ArrowUpIcon, ArrowDownIcon, MessageSquareIcon, MoreVerticalIcon } from 'lucide-react'
const QuestionFeed = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Questions Count and Filters */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-xl">22,375 Questions</h2>
        <div className="flex gap-2">
          <div className="flex bg-[#2d2b3b] rounded-md overflow-hidden">
            <button className="px-4 py-2 text-white bg-purple-600 hover:bg-purple-700">Newest</button>
            <button className="px-4 py-2 text-gray-300 hover:bg-[#363347]">Unanswered</button>
            <button className="px-4 py-2 text-gray-300 hover:bg-[#363347]">Most Upvoted</button>
          </div>
          <button className="px-4 py-2 text-gray-300 bg-[#2d2b3b] rounded-md hover:bg-[#363347]">
            Filter
          </button>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {/* Question */}
        <div className="bg-[#1f1d2b] rounded-lg p-4">
          <div className="flex gap-3">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="User avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-medium">Kehbuma Lima</span>
                <span className="text-gray-400 text-sm">@kehbumalima1</span>
                <span className="text-gray-400 text-sm">• 1 month ago</span>
              </div>
              <p className="text-white mb-4">
                What are some interview questions that are usually asked in DevOps interviews
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <button className="p-1 hover:bg-[#2d2b3b] rounded">
                    <ArrowUpIcon className="w-5 h-5 text-gray-400" />
                  </button>
                  <span className="text-gray-400">5 upvotes</span>
                  <button className="p-1 hover:bg-[#2d2b3b] rounded">
                    <ArrowDownIcon className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
                <button className="flex items-center gap-1 text-gray-400 hover:bg-[#2d2b3b] p-1 rounded">
                  <MessageSquareIcon className="w-5 h-5" />
                  <span>Reply</span>
                </button>
                <button className="ml-auto p-1 hover:bg-[#2d2b3b] rounded">
                  <MoreVerticalIcon className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Replies */}
          <div className="ml-12 mt-4 space-y-4">
            <div className="border-l-2 border-[#2d2b3b] pl-4">
              <div className="flex gap-3">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="User avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-medium">Kehbuma Lima</span>
                    <span className="text-gray-400 text-sm">@kehbumalima1</span>
                    <span className="text-gray-400 text-sm">• 1 month ago</span>
                  </div>
                  <div className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded inline-block mb-2">
                    @kehbumalima1
                  </div>
                  <p className="text-white mb-4">Who is a DevOps Engineer</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <button className="p-1 hover:bg-[#2d2b3b] rounded">
                        <ArrowUpIcon className="w-5 h-5 text-gray-400" />
                      </button>
                      <span className="text-gray-400">1 upvote</span>
                      <button className="p-1 hover:bg-[#2d2b3b] rounded">
                        <ArrowDownIcon className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                    <button className="flex items-center gap-1 text-gray-400 hover:bg-[#2d2b3b] p-1 rounded">
                      <MessageSquareIcon className="w-5 h-5" />
                      <span>Reply</span>
                    </button>
                    <button className="ml-auto p-1 hover:bg-[#2d2b3b] rounded">
                      <MoreVerticalIcon className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button className="text-purple-400 hover:text-purple-300 text-sm ml-16">
              View more Replies
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionFeed

