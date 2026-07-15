export type CategoryId = 'mental-health' | 'accessibility';

export interface Category {
  id: CategoryId;
  label: string;
  description: string;
  icon: string; // emoji for MVP
}
