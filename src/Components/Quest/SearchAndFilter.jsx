import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';

const FILTER_OPTIONS = [
  { label: 'Most Liked', value: 'likes' },
  { label: 'Latest', value: 'latest' },
  { label: 'Most Answered', value: 'answers' }
];

const TAG_OPTIONS = [
  'Web Development', 'DevOps', 'Backend', 
  'Frontend', 'Cloud', 'Databases'
];

const SearchAndFilter = ({ onSearch, onFilter, className }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('latest');
  const [selectedTags, setSelectedTags] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    console.log("Searching for:", term); // Debugging
    onSearch(term);
  };

  const handleTagToggle = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const applyFilters = () => {
    console.log("Applying filters:", { sortBy: selectedFilter, tags: selectedTags }); // Debugging
    onFilter({
      sortBy: selectedFilter,
      tags: selectedTags
    });
    setIsFilterOpen(false);
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearch(''); // Reset search
  };

  return (
    <div className={`mb-6 max-w-3xl mx-auto ${className}`}>
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <input 
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search questions..."
            className="w-full px-4 py-2 pl-10 pr-10 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:border-purple focus:ring-1 focus:ring-purple"
          />
          <Search 
            size={18} 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" 
          />
          {searchTerm && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <button 
          type="button"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`p-2 rounded-lg border transition-colors ${
            isFilterOpen 
              ? 'bg-purple-600 border-purple-500 text-white' 
              : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:text-gray-200'
          }`}
        >
          <Filter size={20} />
        </button>
      </div>

      {isFilterOpen && (
        <div className="mt-4 p-4 bg-gray-900/95 border border-gray-800 rounded-lg shadow-xl backdrop-blur-sm">
          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-gray-200">Sort By</h4>
            <div className="flex flex-wrap gap-2">
              {FILTER_OPTIONS.map(option => (
                <button
                  key={option.value}
                  onClick={() => setSelectedFilter(option.value)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedFilter === option.value 
                      ? 'bg-purple-600 text-white border border-purple-500' 
                      : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-600'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-gray-200">Filter by Tags</h4>
            <div className="flex flex-wrap gap-2">
              {TAG_OPTIONS.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-purple-600 text-white border border-purple-500'
                      : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-600'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-2">
            <button
              onClick={() => {
                setSelectedFilter('latest');
                setSelectedTags([]);
                onFilter({ sortBy: 'latest', tags: [] }); // Reset filters
              }}
              className="bg-gray-700 border border-gray-600 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
            <button
              onClick={applyFilters}
              className="bg-purple-600 border border-gray-400 hover:bg-purple hover:border-purple2 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;