import React from "react";
import Card from "./Card";
import IconContainer from "./IconContainer";
import { ClockIcon } from "./icons/ChartIcon";

interface HorizontalCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  title,
  description,
  onClick,
}) => {
  return (
    <Card hover onClick={onClick} className='flex flex-row overflow-hidden'>
      <IconContainer>
        <ClockIcon className='w-14 h-14 text-gray-400' />
      </IconContainer>

      <div className='flex-1 p-4 flex flex-col'>
        <h3 className='text-base font-semibold text-gray-900 mb-1 line-clamp-1'>
          {title}
        </h3>
        <p className='text-sm text-gray-600 line-clamp-2 mb-2 flex-1'>
          {description}
        </p>
        <div className='flex justify-end'>
          <span className='text-xs text-gray-500'>Jan 15, 2026</span>
        </div>
      </div>
    </Card>
  );
};

export default HorizontalCard;
