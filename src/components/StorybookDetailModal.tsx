import React from "react";
import Modal from "./Modal";
import { StorybookAsset } from "@/lib/storybookData";
import ModalHeader from "./modal/ModalHeader";
import ModalField from "./modal/ModalField";
import ModalBadgeList from "./modal/ModalBadgeList";
import { StorybookIcon } from "./icons/ChartIcon";

interface StorybookDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  storybook: StorybookAsset | null;
}

const StorybookDetailModal: React.FC<StorybookDetailModalProps> = ({
  isOpen,
  onClose,
  storybook,
}) => {
  if (!storybook) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='lg'>
      <div className='space-y-6'>
        <ModalHeader
          icon={<StorybookIcon className='w-6 h-6 text-gray-400' />}
          title={storybook.name}
          subtitle={storybook.description}
        />

        <ModalField label='Coupled KPIs/filters'>
          <ModalBadgeList items={storybook.coupledTransitions} variant='dark' />
        </ModalField>

        <ModalField label='Applicable affiliates'>
          <ModalBadgeList
            items={storybook.applicableAffiliates}
            variant='light'
          />
        </ModalField>

        <div className='pt-4 border-t border-gray-200'>
          <button className='w-full px-4 py-2.5 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors text-sm font-medium'>
            Request Access
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default StorybookDetailModal;
