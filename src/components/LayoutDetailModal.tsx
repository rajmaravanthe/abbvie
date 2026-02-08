import React from "react";
import Modal from "./Modal";
import { LayoutAsset } from "@/lib/layoutData";
import ModalHeader from "./modal/ModalHeader";
import ModalField from "./modal/ModalField";
import ModalBadgeList from "./modal/ModalBadgeList";
import ModalInfoBox from "./modal/ModalInfoBox";
import { LayoutIcon } from "./icons/ChartIcon";

interface LayoutDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  layout: LayoutAsset | null;
}

const LayoutDetailModal: React.FC<LayoutDetailModalProps> = ({
  isOpen,
  onClose,
  layout,
}) => {
  if (!layout) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='lg'>
      <div className='space-y-6'>
        <ModalHeader
          icon={<LayoutIcon className='w-6 h-6 text-gray-400' />}
          title={layout.name}
          subtitle={layout.description}
        />

        <ModalField label='Amount of pages'>
          <p className='text-sm text-gray-900'>
            {layout.amountOfPages}{" "}
            {layout.amountOfPages === 1 ? "Page" : "Pages"}
          </p>
        </ModalField>

        <ModalField label="KPI's being used">
          <ModalBadgeList items={layout.kpisUsingChart} variant='dark' />
        </ModalField>

        <ModalField label='Preview layout'>
          <ModalInfoBox>
            <div className='p-4 text-center'>
              <svg
                className='w-12 h-12 text-gray-400 mx-auto mb-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
              <p className='text-xs text-gray-500'>Preview not available</p>
            </div>
          </ModalInfoBox>
        </ModalField>
      </div>
    </Modal>
  );
};

export default LayoutDetailModal;
