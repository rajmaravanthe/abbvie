import React, { ReactNode } from "react";

interface ModalHeaderProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 p-2">
        <div className="bg-white rounded-lg p-2 flex items-center justify-center w-full h-full">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </div>
    </div>
  );
};

export default ModalHeader;

