import React from 'react';

interface IconContainerProps {
  children: React.ReactNode;
  className?: string;
}

const IconContainer: React.FC<IconContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-32 bg-gray-100 flex items-center justify-center flex-shrink-0 p-4 ${className}`}>
      <div className='bg-white rounded-lg p-4 flex items-center justify-center'>
        {children}
      </div>
    </div>
  );
};

export default IconContainer;

