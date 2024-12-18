export default function SearchBar({ onSearch }) {
    return (
      <div className="relative mb-6 mt-6">
        <input
          type="text"
          placeholder="Search questions..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-4 py-3 pl-10 bg-[#2d2d3f] rounded-lg text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-purple"
        />
        <svg
          className="absolute left-3 top-3 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    );
  }
  
  