import React, { useState, ReactNode } from "react";

interface CardGridProps {
  items: any[];
  renderCard: (item: any, index: number) => ReactNode;
  initialDisplayCount?: number;
  viewMoreIncrement?: number;
  className?: string;
}

const CardGrid: React.FC<CardGridProps> = ({
  items,
  renderCard,
  initialDisplayCount = 6,
  viewMoreIncrement = 6,
  className = "",
}) => {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  const handleViewMore = () => {
    setDisplayCount((prev) => prev + viewMoreIncrement);
  };

  const handleViewLess = () => {
    setDisplayCount(initialDisplayCount);
  };

  const visibleItems = items.slice(0, displayCount);
  const hasMore = displayCount < items.length;
  const canCollapse = displayCount > initialDisplayCount;

  return (
    <>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
      >
        {visibleItems.map((item, index) => renderCard(item, index))}
      </div>

      {(hasMore || canCollapse) && (
        <div className='mt-6 flex justify-center'>
          {hasMore && (
            <button
              onClick={handleViewMore}
              className='px-6 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center gap-2'
            >
              <span>View More</span>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
          )}
          {!hasMore && canCollapse && (
            <button
              onClick={handleViewLess}
              className='px-6 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center gap-2'
            >
              <span>View Less</span>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 15l7-7 7 7'
                />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default CardGrid;
