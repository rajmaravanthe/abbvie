import React, { ReactNode } from "react";

interface ModalInfoBoxProps {
  children: ReactNode;
}

const ModalInfoBox: React.FC<ModalInfoBoxProps> = ({ children }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      {children}
    </div>
  );
};

export default ModalInfoBox;

