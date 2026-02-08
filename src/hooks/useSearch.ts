import { useMemo } from "react";

interface SearchableItem {
  [key: string]: any;
}

export function useSearch<T extends SearchableItem>(
  items: T[],
  searchQuery: string,
  searchFields: (keyof T)[]
): T[] {
  return useMemo(() => {
    if (!searchQuery.trim()) return items;

    const query = searchQuery.toLowerCase();
    return items.filter((item) =>
      searchFields.some((field) => {
        const value = item[field];
        return value && String(value).toLowerCase().includes(query);
      })
    );
  }, [items, searchQuery, searchFields]);
}

