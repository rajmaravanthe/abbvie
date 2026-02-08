import React, { useMemo, useState } from "react";
import { useLibraryStore } from "@/store";
import HorizontalCard from "./HorizontalCard";
import SectionHeader from "./SectionHeader";
import CardGrid from "./CardGrid";
import AssetDetailModal from "./AssetDetailModal";
import { LibraryItem } from "@/types";

const TrendingSection: React.FC = () => {
  const { trendingItems, searchQuery } = useLibraryStore();
  const [selectedAsset, setSelectedAsset] = useState<LibraryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return trendingItems;

    const query = searchQuery.toLowerCase();
    return trendingItems.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query),
    );
  }, [trendingItems, searchQuery]);

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
      <SectionHeader title='Trending' subtitle='Most popular by community' />

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

export default TrendingSection;
