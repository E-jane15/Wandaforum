import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Quest/Sidebar'

const TrendingQuestionsPage = () => {
  return (
    <div className="min-h-screen bg-[#281b32]">
      <Navbar />
      <div className="flex">
        <Sidebar/>
        <main className="flex-1 ml-72 mr-8 py-8">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-4xl bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent font-bold mb-2">
              Trending Questions 
            </h1>
            <div className="mt-6">
              <p className="text-gray-400">Manage your preferences and account settings here.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default TrendingQuestionsPage
