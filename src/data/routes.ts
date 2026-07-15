import type { Route } from '../types';

// All routes start from Sidney Smith Hall (Main Entrance), 100 St. George St

export const routes: Route[] = [
  {
    id: 'route-to-accessibility-services',
    fromLabel: 'Sidney Smith Hall (Main Entrance)',
    toLocationId: 'accessibility-services',
    totalMinutes: 12,
    shortcutAvailable: true,
    steps: [
      {
        stepNumber: 1,
        instruction: 'Exit Sidney Smith Hall through the main doors onto St. George St.',
        landmark: 'Sidney Smith Hall main entrance',
      },
      {
        stepNumber: 2,
        instruction: 'Turn left (south) and walk along St. George St for about 2 minutes.',
        landmark: 'Sid Smith steps on your right',
      },
      {
        stepNumber: 3,
        instruction: 'Turn right onto Willcocks St heading west.',
        landmark: 'Intersection of St. George and Willcocks',
      },
      {
        stepNumber: 4,
        instruction: 'Walk along Willcocks St for about 5 minutes until you reach Spadina Ave.',
        landmark: 'Cross the Spadina Ave intersection',
      },
      {
        stepNumber: 5,
        instruction: 'Turn left (south) on Spadina Ave. Walk one block.',
        isShortcut: false,
      },
      {
        stepNumber: 6,
        instruction: 'Enter 455 Spadina Ave and take the elevator or stairs to Suite 400 (4th floor).',
        landmark: '455 Spadina Ave — Accessibility Services is Suite 400',
      },
    ],
  },
  {
    id: 'route-to-robarts-library',
    fromLabel: 'Sidney Smith Hall (Main Entrance)',
    toLocationId: 'robarts-library',
    totalMinutes: 4,
    shortcutAvailable: false,
    steps: [
      {
        stepNumber: 1,
        instruction: 'Exit Sidney Smith Hall through the main doors onto St. George St.',
        landmark: 'Sidney Smith Hall main entrance',
      },
      {
        stepNumber: 2,
        instruction: 'Turn right (north) and walk along St. George St for about 2 minutes.',
        landmark: 'Robarts Library tower will be visible on your left',
      },
      {
        stepNumber: 3,
        instruction: 'Enter Robarts Library through the main entrance on St. George St.',
        landmark: 'Robarts Library main entrance',
      },
      {
        stepNumber: 4,
        instruction: 'Take the elevator or escalator to the 2nd floor.',
      },
      {
        stepNumber: 5,
        instruction: 'Follow signs to Room 2098 — the Adaptive Technology Resource Centre.',
        landmark: 'Room 2098, 2nd floor',
      },
    ],
  },
];
