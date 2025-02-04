'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function AddInterviewPage() {
  const [questions, setQuestions] = useState([{ type: '', question: '', answer: '' }])

  const handleAddQuestion = () => {
    setQuestions([...questions, { type: '', question: '', answer: '' }])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted')
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">Tell us about your interview</h1>
      <p className="text-gray-600 mb-8">
        Help the Exponent community by telling us about your recent interview experience! Interview questions that are
        detailed and clearly written will be added to the question database.{' '}
        <a href="#" className="text-purple-600 hover:text-purple-700">
          Review Community Guidelines
        </a>
        .
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-1">
            Company <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium mb-1">
            Role <span className="text-red-500">*</span>
          </label>
          <select
            id="role"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
          >
            <option value="">Select</option>
            <option value="product-manager">Product Manager</option>
            <option value="software-engineer">Software Engineer</option>
            <option value="data-scientist">Data Scientist</option>
            <option value="engineering-manager">Engineering Manager</option>
          </select>
        </div>

        <div>
          <label htmlFor="stage" className="block text-sm font-medium mb-1">
            Stage <span className="text-red-500">*</span>
          </label>
          <select
            id="stage"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
          >
            <option value="">Select</option>
            <option value="phone-screen">Phone Screen</option>
            <option value="technical">Technical Interview</option>
            <option value="onsite">Onsite</option>
            <option value="final">Final Round</option>
          </select>
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium mb-1">
            How many years of relevant experience do you have? <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="experience"
            required
            min="0"
            max="50"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="pass" className="block text-sm font-medium mb-1">
            Did you pass this interview round? <span className="text-red-500">*</span>
          </label>
          <select
            id="pass"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="waiting">Waiting to hear back</option>
          </select>
        </div>

        <div>
          <label htmlFor="additional" className="block text-sm font-medium mb-1">
            Anything else you'd like to share about the interview?
          </label>
          <textarea
            id="additional"
            rows={4}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-4">
          {questions.map((_, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-4">
              <div>
                <label htmlFor={`questionType${index}`} className="block text-sm font-medium mb-1">
                  Question type
                </label>
                <select
                  id={`questionType${index}`}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="">Select</option>
                  <option value="behavioral">Behavioral</option>
                  <option value="technical">Technical</option>
                  <option value="system-design">System Design</option>
                  <option value="product-design">Product Design</option>
                </select>
              </div>

              <div>
                <label htmlFor={`question${index}`} className="block text-sm font-medium mb-1">
                  Interview question <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id={`question${index}`}
                  placeholder="What were you asked in your interview?"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor={`answer${index}`} className="block text-sm font-medium mb-1">
                  Answer
                </label>
                <textarea
                  id={`answer${index}`}
                  rows={4}
                  placeholder="How did you respond? The more detailed, the better."
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleAddQuestion}
          className="text-purple-600 hover:text-purple-700 font-medium"
        >
          + Add another question
        </button>

        <div className="flex items-center gap-2 my-4">
          <input type="checkbox" id="contact" className="rounded text-purple-600 focus:ring-purple-500" />
          <label htmlFor="contact" className="text-sm text-gray-600">
            (Optional) I'm interested in getting contacted by the Exponent team to share more about my interview experience.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

