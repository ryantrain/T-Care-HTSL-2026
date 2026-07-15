import type { CategoryId } from './category';

export type ResponseType = 'info' | 'location';

export interface Service {
  id: string;
  categoryId: CategoryId;
  name: string;
  responseType: ResponseType;
  keywords: string[];
  infoAnswer?: string;
  relatedLinks?: { label: string; url: string }[];
  locationId?: string;
  bookingUrl?: string;
}

export interface ServiceMatch {
  service: Service;
  confidence: number;
  matchedKeywords: string[];
}
