import React, { useState } from "react";
import Modal from "./Modal";
import { LibraryItem } from "@/types";
import ModalHeader from "./modal/ModalHeader";
import ModalField from "./modal/ModalField";
import ModalBadgeList from "./modal/ModalBadgeList";
import ModalInfoBox from "./modal/ModalInfoBox";
import {
  DocumentIcon,
  HeartIcon,
  CopyIcon,
  ChartIcon,
} from "./icons/ChartIcon";

interface AssetDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  asset: LibraryItem | null;
}

const AssetDetailModal: React.FC<AssetDetailModalProps> = ({
  isOpen,
  onClose,
  asset,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  if (!asset) return null;

  const handleCopyLink = () => {
    const link = `${window.location.origin}/asset/${asset.id}`;
    navigator.clipboard.writeText(link);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='lg'>
      <div className='space-y-6'>
        <ModalHeader
          icon={<DocumentIcon className='w-6 h-6 text-gray-400' />}
          title={asset.title}
          subtitle={asset.category}
        />

        <ModalField label='Description'>
          <p className='text-sm text-gray-900'>{asset.description}</p>
        </ModalField>

        <ModalField label='Favourite'>
          <button
            onClick={toggleFavorite}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              isFavorite
                ? "bg-red-50 text-red-600 border border-red-200"
                : "bg-gray-50 text-gray-600 border border-gray-200"
            }`}
          >
            <HeartIcon filled={isFavorite} className='w-5 h-5' />
            <span className='text-sm font-medium'>
              {isFavorite ? "Remove from Favourites" : "Add to Favourites"}
            </span>
          </button>
        </ModalField>

        <ModalField label='Copy link'>
          <button
            onClick={handleCopyLink}
            className='flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors'
          >
            <CopyIcon className='w-5 h-5' />
            <span className='text-sm font-medium'>
              {copySuccess ? "Link Copied!" : "Copy Link to Asset"}
            </span>
          </button>
        </ModalField>

        <ModalField label='Applicable favourite KPI'>
          <ModalBadgeList items={asset.tags} variant='dark' />
        </ModalField>

        <ModalField label='Asset info context'>
          <ModalInfoBox>
            <p className='text-sm text-gray-900'>
              <span className='font-medium'>{asset.author}</span>
              <span className='text-gray-400 mx-2'>•</span>
              <span>{asset.date}</span>
              <span className='text-gray-400 mx-2'>•</span>
              <span>{asset.views?.toLocaleString() || 0} views</span>
              <span className='text-gray-400 mx-2'>•</span>
              <span>{asset.likes || 0} likes</span>
            </p>
          </ModalInfoBox>
        </ModalField>

        <ModalField label='Interact with chart'>
          <ModalInfoBox>
            <div className='p-4 text-center'>
              <ChartIcon className='w-12 h-12 text-gray-400 mx-auto mb-2' />
              <p className='text-xs text-gray-500'>Interactive chart preview</p>
            </div>
          </ModalInfoBox>
        </ModalField>
      </div>
    </Modal>
  );
};

export default AssetDetailModal;
