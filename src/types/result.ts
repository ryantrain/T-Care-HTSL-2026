import type { ServiceMatch } from './service';
import type { Location, Route } from './location';
import type { CategoryId } from './category';

export interface InfoResult {
  type: 'info';
  match: ServiceMatch;
  answer: string;
  relatedLinks?: { label: string; url: string }[];
}

export interface LocationResult {
  type: 'location';
  match: ServiceMatch;
  location: Location;
  route: Route;
}

export type QueryResult = InfoResult | LocationResult;

export interface QueryState {
  categoryId: CategoryId | null;
  rawQuery: string;
  result: QueryResult | null;
  status: 'idle' | 'loading' | 'success' | 'error';
  errorMessage: string | null;
}
