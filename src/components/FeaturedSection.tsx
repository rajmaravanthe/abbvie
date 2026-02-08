import React, { useMemo, useState } from "react";
import { useLibraryStore } from "@/store";
import HorizontalCard from "./HorizontalCard";
import SectionHeader from "./SectionHeader";
import CardGrid from "./CardGrid";
import AssetDetailModal from "./AssetDetailModal";
import { LibraryItem } from "@/types";

const FeaturedSection: React.FC = () => {
  const { featuredItems, searchQuery } = useLibraryStore();
  const [selectedAsset, setSelectedAsset] = useState<LibraryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return featuredItems;

    const query = searchQuery.toLowerCase();
    return featuredItems.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query),
    );
  }, [featuredItems, searchQuery]);

  const handleCardClick = (item: LibraryItem) => {
    setSelectedAsset(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAsset(null);
  };

  if (filteredItems.length === 0) {
    return null;
  }

  return (
    <section className='mb-8'>
      <SectionHeader
        title='Featured'
        subtitle='Curated top picks from this week'
      />

      <CardGrid
        items={filteredItems}
        initialDisplayCount={6}
        viewMoreIncrement={6}
        renderCard={(item) => (
          <HorizontalCard
            key={item.id}
            title={item.title}
            description={item.description}
            onClick={() => handleCardClick(item)}
          />
        )}
      />

      <AssetDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        asset={selectedAsset}
      />
    </section>
  );
};

export default FeaturedSection;
