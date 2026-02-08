import { create } from "zustand";
import {
  LibraryItem,
  BiteItem,
  FilterOptions,
  ModalState,
  PaginationState,
} from "@/types";

interface LibraryStore {
  libraryItems: LibraryItem[];
  featuredItems: LibraryItem[];
  trendingItems: LibraryItem[];
  bites: BiteItem[];
  filters: FilterOptions;
  setFilters: (filters: Partial<FilterOptions>) => void;
  resetFilters: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  recentSearches: string[];
  addRecentSearch: (search: string) => void;
  clearRecentSearches: () => void;
  modal: ModalState;
  openModal: (type: ModalState["type"], data?: any) => void;
  closeModal: () => void;
  pagination: PaginationState;
  setPagination: (pagination: Partial<PaginationState>) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  setLibraryItems: (items: LibraryItem[]) => void;
  setBites: (bites: BiteItem[]) => void;
  addLibraryItem: (item: LibraryItem) => void;
  updateLibraryItem: (id: string, updates: Partial<LibraryItem>) => void;
  deleteLibraryItem: (id: string) => void;
}

const defaultFilters: FilterOptions = {
  categories: [],
  tags: [],
  searchQuery: "",
  sortBy: "recent",
};

const defaultPagination: PaginationState = {
  currentPage: 1,
  itemsPerPage: 12,
  totalItems: 0,
  totalPages: 0,
};

export const useLibraryStore = create<LibraryStore>((set, get) => ({
  libraryItems: [],
  featuredItems: [],
  trendingItems: [],
  bites: [],
  filters: defaultFilters,
  searchQuery: "",
  recentSearches: [],
  modal: { isOpen: false, type: null },
  pagination: defaultPagination,
  selectedCategory: null,

  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),

  resetFilters: () =>
    set({
      filters: defaultFilters,
      searchQuery: "",
      selectedCategory: null,
    }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  addRecentSearch: (search) =>
    set((state) => {
      if (!search.trim() || state.recentSearches.includes(search)) {
        return state;
      }
      const newSearches = [search, ...state.recentSearches].slice(0, 10);
      return { recentSearches: newSearches };
    }),

  clearRecentSearches: () => set({ recentSearches: [] }),

  openModal: (type, data) => set({ modal: { isOpen: true, type, data } }),

  closeModal: () =>
    set({ modal: { isOpen: false, type: null, data: undefined } }),

  setPagination: (newPagination) =>
    set((state) => ({
      pagination: { ...state.pagination, ...newPagination },
    })),

  setSelectedCategory: (category) => set({ selectedCategory: category }),

  setLibraryItems: (items) => {
    const featured = items.filter((item) => item.isFeatured);
    const trending = items.filter((item) => item.isTrending);
    set({
      libraryItems: items,
      featuredItems: featured,
      trendingItems: trending,
      pagination: {
        ...get().pagination,
        totalItems: items.length,
        totalPages: Math.ceil(items.length / get().pagination.itemsPerPage),
      },
    });
  },

  setBites: (bites) => set({ bites }),

  addLibraryItem: (item) =>
    set((state) => ({
      libraryItems: [...state.libraryItems, item],
    })),

  updateLibraryItem: (id, updates) =>
    set((state) => ({
      libraryItems: state.libraryItems.map((item) =>
        item.id === id ? { ...item, ...updates } : item,
      ),
    })),

  deleteLibraryItem: (id) =>
    set((state) => ({
      libraryItems: state.libraryItems.filter((item) => item.id !== id),
    })),
}));
