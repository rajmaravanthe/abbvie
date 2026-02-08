import React, { useState, useMemo } from "react";
import LayoutCard from "./LayoutCard";
import LayoutDetailModal from "./LayoutDetailModal";
import SectionHeader from "./SectionHeader";
import CardGrid from "./CardGrid";
import { mockLayouts, LayoutAsset } from "@/lib/layoutData";
import { useLibraryStore } from "@/store";

const LayoutsTab: React.FC = () => {
  const [selectedLayout, setSelectedLayout] = useState<LayoutAsset | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { searchQuery } = useLibraryStore();

  const filteredLayouts = useMemo(() => {
    if (!searchQuery.trim()) return mockLayouts;

    const query = searchQuery.toLowerCase();
    return mockLayouts.filter(
      (layout) =>
        layout.name.toLowerCase().includes(query) ||
        layout.description.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  const handleCardClick = (layout: LayoutAsset) => {
    setSelectedLayout(layout);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedLayout(null);
  };

  return (
    <div className='py-6'>
      <SectionHeader
        title='Layout Assets'
        subtitle='Dashboard layouts with visuals and KPIs'
      />

      <CardGrid
        items={filteredLayouts}
        initialDisplayCount={6}
        viewMoreIncrement={6}
        renderCard={(layout) => (
          <LayoutCard
            key={layout.id}
            name={layout.name}
            description={layout.description}
            onClick={() => handleCardClick(layout)}
          />
        )}
      />

      <LayoutDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        layout={selectedLayout}
      />
    </div>
  );
};

export default LayoutsTab;
