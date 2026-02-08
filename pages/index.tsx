import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useLibraryStore } from "@/store";
import { mockLibraryItems, mockBites } from "@/lib/mockData";
import SearchBar from "@/components/SearchBar";
import Tabs from "@/components/Tabs";

const FeaturedTab = dynamic(() => import("@/components/FeaturedTab"), {
  loading: () => (
    <div className='py-6 text-center text-gray-500'>Loading...</div>
  ),
});

const KPITab = dynamic(() => import("@/components/KPITab"), {
  loading: () => (
    <div className='py-6 text-center text-gray-500'>Loading...</div>
  ),
});

const LayoutsTab = dynamic(() => import("@/components/LayoutsTab"), {
  loading: () => (
    <div className='py-6 text-center text-gray-500'>Loading...</div>
  ),
});

const StorybooksTab = dynamic(() => import("@/components/StorybooksTab"), {
  loading: () => (
    <div className='py-6 text-center text-gray-500'>Loading...</div>
  ),
});

export default function Home() {
  const { setLibraryItems, setBites } = useLibraryStore();
  const [activeTab, setActiveTab] = useState("featured");

  useEffect(() => {
    setLibraryItems(mockLibraryItems);
    setBites(mockBites);
  }, [setLibraryItems, setBites]);

  const tabs = [
    { id: "featured", label: "Featured" },
    { id: "kpi", label: "KPI" },
    { id: "layouts", label: "Layouts" },
    { id: "storybooks", label: "Storybooks" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "featured":
        return <FeaturedTab />;
      case "kpi":
        return <KPITab />;
      case "layouts":
        return <LayoutsTab />;
      case "storybooks":
        return <StorybooksTab />;
      default:
        return <FeaturedTab />;
    }
  };

  return (
    <>
      <Head>
        <title>AbbVie Library Dashboard</title>
        <meta
          name='description'
          content='Comprehensive library of clinical research and pharmaceutical resources'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='min-h-screen bg-gray-50'>
        {/* Header */}
        <header className='bg-gray-50 sticky top-0 z-10'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <div className='flex items-center justify-between mb-8'>
              <div>
                <h1 className='text-3xl font-bold text-gray-900'>Library</h1>
                <p className='text-sm text-gray-500 mt-1'>
                  Browse for assets needed to report and present analysis
                </p>
              </div>
              <button className='px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center gap-2'>
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
                Request
              </button>
            </div>

            {/* Search Bar */}
            <div className='mb-6'>
              <SearchBar placeholder='Type to search' />
            </div>

            {/* Tabs */}
            <div>
              <Tabs
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6'>
          {renderTabContent()}
        </main>

        {/* Footer */}
        <footer className='bg-white border-t border-gray-200 mt-12'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <p className='text-center text-sm text-gray-500'>
              © 2024 AbbVie Library Dashboard. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
