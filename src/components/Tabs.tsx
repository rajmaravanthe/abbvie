import React from "react";

export interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <nav className='flex bg-gray-100 p-2 rounded-lg' aria-label='Tabs'>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex-1 whitespace-nowrap rounded-lg font-medium text-sm
              transition-all duration-200
              ${
                isActive
                  ? "bg-white text-gray-900 shadow-sm py-3 px-8"
                  : "text-gray-600 hover:bg-gray-200 py-3 px-6"
              }
            `}
            aria-current={isActive ? "page" : undefined}
          >
            <div className='flex items-center justify-center gap-2'>
              {tab.icon}
              {tab.label}
            </div>
          </button>
        );
      })}
    </nav>
  );
};

export default Tabs;
