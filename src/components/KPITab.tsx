import React, { useState, useMemo } from "react";
import KPICard from "./KPICard";
import KPIDetailModal from "./KPIDetailModal";
import SectionHeader from "./SectionHeader";
import CardGrid from "./CardGrid";
import { mockKPIs, KPIAsset } from "@/lib/kpiData";
import { useLibraryStore } from "@/store";

const KPITab: React.FC = () => {
  const [selectedKPI, setSelectedKPI] = useState<KPIAsset | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { searchQuery } = useLibraryStore();

  const filteredKPIs = useMemo(() => {
    if (!searchQuery.trim()) return mockKPIs;

    const query = searchQuery.toLowerCase();
    return mockKPIs.filter(
      (kpi) =>
        kpi.name.toLowerCase().includes(query) ||
        kpi.description.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  const handleCardClick = (kpi: KPIAsset) => {
    setSelectedKPI(kpi);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedKPI(null);
  };

  return (
    <div className='py-6'>
      <SectionHeader
        title='KPI Assets'
        subtitle='All KPIs for your area with available charting options'
      />

      <CardGrid
        items={filteredKPIs}
        initialDisplayCount={6}
        viewMoreIncrement={6}
        renderCard={(kpi) => (
          <KPICard
            key={kpi.id}
            name={kpi.name}
            description={kpi.description}
            onClick={() => handleCardClick(kpi)}
          />
        )}
      />

      <KPIDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        kpi={selectedKPI}
      />
    </div>
  );
};

export default KPITab;
