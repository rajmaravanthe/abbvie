import React from 'react';
import FeaturedSection from './FeaturedSection';
import TrendingSection from './TrendingSection';

const FeaturedTab: React.FC = () => {
  return (
    <div className='py-6'>
      <FeaturedSection />
      <TrendingSection />
    </div>
  );
};

export default FeaturedTab;

