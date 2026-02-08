import React, { useState, useMemo } from "react";
import StorybookCard from "./StorybookCard";
import StorybookDetailModal from "./StorybookDetailModal";
import SectionHeader from "./SectionHeader";
import CardGrid from "./CardGrid";
import { mockStorybooks, StorybookAsset } from "@/lib/storybookData";
import { useLibraryStore } from "@/store";

const StorybooksTab: React.FC = () => {
  const [selectedStorybook, setSelectedStorybook] =
    useState<StorybookAsset | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { searchQuery } = useLibraryStore();

  const filteredStorybooks = useMemo(() => {
    if (!searchQuery.trim()) return mockStorybooks;

    const query = searchQuery.toLowerCase();
    return mockStorybooks.filter(
      (storybook) =>
        storybook.name.toLowerCase().includes(query) ||
        storybook.description.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  const handleCardClick = (storybook: StorybookAsset) => {
    setSelectedStorybook(storybook);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStorybook(null);
  };

  return (
    <div className='py-6'>
      <SectionHeader
        title='Storybook Assets'
        subtitle='PowerPoint presentations with chart transitions'
      />

      <CardGrid
        items={filteredStorybooks}
        initialDisplayCount={6}
        viewMoreIncrement={6}
        renderCard={(storybook) => (
          <StorybookCard
            key={storybook.id}
            name={storybook.name}
            description={storybook.description}
            onClick={() => handleCardClick(storybook)}
          />
        )}
      />

      <StorybookDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        storybook={selectedStorybook}
      />
    </div>
  );
};

export default StorybooksTab;
