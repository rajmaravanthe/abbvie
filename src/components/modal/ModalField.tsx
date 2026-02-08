import React, { ReactNode } from "react";

interface ModalFieldProps {
  label: string;
  children: ReactNode;
}

const ModalField: React.FC<ModalFieldProps> = ({ label, children }) => {
  return (
    <div>
      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 block">
        {label}
      </label>
      {children}
    </div>
  );
};

export default ModalField;

