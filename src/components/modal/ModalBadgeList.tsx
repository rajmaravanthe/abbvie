import React from "react";

interface ModalBadgeListProps {
  items: string[];
  variant?: "dark" | "light";
}

const ModalBadgeList: React.FC<ModalBadgeListProps> = ({ 
  items, 
  variant = "dark" 
}) => {
  const badgeClass = variant === "dark"
    ? "bg-gray-900 text-white"
    : "bg-gray-100 text-gray-800";

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span
          key={index}
          className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm ${badgeClass}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default ModalBadgeList;

