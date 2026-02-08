import React from "react";
import Modal from "./Modal";
import { KPIAsset } from "@/lib/kpiData";
import ModalHeader from "./modal/ModalHeader";
import ModalField from "./modal/ModalField";
import ModalBadgeList from "./modal/ModalBadgeList";
import { ChartIcon } from "./icons/ChartIcon";

interface KPIDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  kpi: KPIAsset | null;
}

const KPIDetailModal: React.FC<KPIDetailModalProps> = ({
  isOpen,
  onClose,
  kpi,
}) => {
  if (!kpi) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='lg'>
      <div className='space-y-6'>
        <ModalHeader
          icon={<ChartIcon className='w-6 h-6 text-gray-400' />}
          title={kpi.name}
          subtitle={kpi.description}
        />

        <ModalField label='Business Questions'>
          <ModalBadgeList items={kpi.businessQuestions} variant='light' />
        </ModalField>

        <ModalField label='Metric IDs'>
          <p className='text-sm text-gray-900'>{kpi.metricsDe}</p>
        </ModalField>

        <ModalField label='Description'>
          <p className='text-sm text-gray-900'>{kpi.description}</p>
        </ModalField>

        <ModalField label='Calculation'>
          <p className='text-sm text-gray-900'>{kpi.calculation}</p>
        </ModalField>

        <ModalField label='Visuals Available'>
          <ModalBadgeList items={kpi.visualsAvailable} variant='dark' />
        </ModalField>

        <ModalField label='Affiliate Applicability'>
          <ModalBadgeList items={kpi.affiliateApplicability} variant='light' />
        </ModalField>
      </div>
    </Modal>
  );
};

export default KPIDetailModal;
