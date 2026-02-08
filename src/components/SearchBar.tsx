import React, { useState, useEffect, useRef } from "react";
import { useLibraryStore } from "@/store";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search library...",
  className = "",
}) => {
  const {
    searchQuery,
    setSearchQuery,
    recentSearches,
    addRecentSearch,
    clearRecentSearches,
  } = useLibraryStore();
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(localQuery);
      if (localQuery.trim()) {
        addRecentSearch(localQuery.trim());
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [localQuery, setSearchQuery, addRecentSearch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClearSearch = () => {
    setLocalQuery("");
    setSearchQuery("");
  };

  const handleRecentSearchClick = (search: string) => {
    setLocalQuery(search);
    setSearchQuery(search);
    setShowDropdown(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
        <svg
          className='h-5 w-5 text-gray-400'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </div>
      <input
        type='text'
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        onFocus={() => setShowDropdown(true)}
        className='block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent sm:text-sm'
        placeholder={placeholder}
      />
      {localQuery && (
        <button
          onClick={handleClearSearch}
          className='absolute inset-y-0 right-0 pr-3 flex items-center'
        >
          <svg
            className='h-5 w-5 text-gray-400 hover:text-gray-600'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      )}

      {showDropdown && (recentSearches.length > 0 || !localQuery) && (
        <div className='absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 py-2'>
          {recentSearches.length > 0 && (
            <>
              <div className='flex items-center justify-between px-4 py-2'>
                <span className='text-xs font-semibold text-gray-500 uppercase tracking-wide'>
                  Recent Searches
                </span>
                <button
                  onClick={() => {
                    clearRecentSearches();
                    setShowDropdown(false);
                  }}
                  className='text-xs text-gray-500 hover:text-gray-700'
                >
                  Clear
                </button>
              </div>
              {recentSearches.slice(0, 5).map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleRecentSearchClick(search)}
                  className='w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2'
                >
                  <svg
                    className='h-4 w-4 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  {search}
                </button>
              ))}
            </>
          )}

          {!localQuery && (
            <>
              <div className='border-t border-gray-200 mt-2 pt-2'>
                <div className='px-4 py-2'>
                  <span className='text-xs font-semibold text-gray-500 uppercase tracking-wide'>
                    Explore Assets
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
