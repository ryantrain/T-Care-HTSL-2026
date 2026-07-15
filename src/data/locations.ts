import type { Location } from '../types';

export const locations: Location[] = [
  {
    id: 'accessibility-services',
    officeName: 'Accessibility Services',
    building: '455 Spadina Ave',
    address: '455 Spadina Ave, Toronto, ON M5S 2G8',
    roomNumber: 'Suite 400',
    floor: 4,
    hours: { weekday: '9:00am – 5:00pm', weekend: null },
    phone: '416-978-8060',
    email: 'accessibility.services@utoronto.ca',
    walkInAvailable: true,
    bookingUrl: 'https://www.studentlife.utoronto.ca/as/appointments',
  },
  {
    id: 'robarts-library',
    officeName: 'Robarts Library — Adaptive Technology Resource Centre',
    building: 'Robarts Library',
    address: '130 St. George St, Toronto, ON M5S 1A5',
    roomNumber: 'Room 2098 (2nd Floor)',
    floor: 2,
    hours: { weekday: '8:30am – 11:00pm', weekend: '10:00am – 10:00pm' },
    phone: '416-978-4357',
    walkInAvailable: true,
  },
];
