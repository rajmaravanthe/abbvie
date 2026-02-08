// Library Item Types
export interface LibraryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl?: string;
  author?: string;
  date?: string;
  readTime?: string;
  isFeatured?: boolean;
  isTrending?: boolean;
  views?: number;
  likes?: number;
}

// Bites Item Types
export interface BiteItem {
  id: string;
  title: string;
  description: string;
  category: string;
  duration?: string;
  imageUrl?: string;
  author?: string;
  date?: string;
}

// Filter Types
export interface FilterOptions {
  categories: string[];
  tags: string[];
  searchQuery: string;
  sortBy: 'recent' | 'popular' | 'trending';
}

// Modal Types
export interface ModalState {
  isOpen: boolean;
  type: 'business-questions' | 'kpi-model' | 'data-model' | null;
  data?: any;
}

// Navigation Types
export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
}

// Stats Types
export interface LibraryStats {
  totalItems: number;
  featuredItems: number;
  trendingItems: number;
  totalBites: number;
}

// User Types (if needed for future)
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

// Pagination Types
export interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

