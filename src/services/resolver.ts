import type { ServiceMatch, QueryResult } from '../types';
import { locations } from '../data/locations';
import { routes } from '../data/routes';

export function resolve(match: ServiceMatch): QueryResult {
  const { service } = match;

  if (service.responseType === 'info') {
    return {
      type: 'info',
      match,
      answer: service.infoAnswer ?? 'No information available.',
      relatedLinks: service.relatedLinks,
    };
  }

  // responseType === 'location'
  const location = locations.find(l => l.id === service.locationId);
  const route = routes.find(r => r.toLocationId === service.locationId);

  if (!location || !route) {
    // Degrade gracefully to info if location/route data is missing
    return {
      type: 'info',
      match,
      answer: `Please visit **${service.name}** for assistance. Contact Accessibility Services at 416-978-8060.`,
    };
  }

  return {
    type: 'location',
    match,
    location,
    route,
  };
}
