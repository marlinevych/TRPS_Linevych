// Фільтрація оголошень за категорією речі
// Issue #1: Реалізувати фільтрацію оголошень за категорією речі

export type ListingCategory =
  | 'documents'
  | 'electronics'
  | 'clothing'
  | 'keys'
  | 'other';

export interface Listing {
  id: string;
  title: string;
  category: ListingCategory;
  createdAt: Date;
}

export function filterByCategory(
  listings: Listing[],
  category?: ListingCategory,
): Listing[] {
  if (!category) {
    return listings;
  }
  return listings.filter((listing) => listing.category === category);
}
