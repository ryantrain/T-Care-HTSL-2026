export interface Location {
  id: string;
  officeName: string;
  building: string;
  address: string;
  roomNumber: string;
  floor: number;
  hours: { weekday: string; weekend: string | null };
  phone?: string;
  email?: string;
  walkInAvailable: boolean;
  bookingUrl?: string;
}

export interface RouteStep {
  stepNumber: number;
  instruction: string;
  landmark?: string;
  isShortcut?: boolean;
}

export interface Route {
  id: string;
  fromLabel: string;
  toLocationId: string;
  totalMinutes: number;
  shortcutAvailable: boolean;
  steps: RouteStep[];
}
