import type { LocationResult } from '../../types';

interface LocationCardProps {
  result: LocationResult;
}

export function LocationCard({ result }: LocationCardProps) {
  const { location, match } = result;
  const today = new Date().getDay(); // 0 = Sun, 6 = Sat
  const isWeekend = today === 0 || today === 6;
  const todayHours = isWeekend ? location.hours.weekend : location.hours.weekday;

  return (
    <div className="location-card">
      <div className="location-card-tag">📍 Visit in Person</div>
      <div className="location-card-name">{location.officeName}</div>
      <div className="location-card-building">{match.service.name}</div>

      <div className="location-details">
        <div className="location-detail">
          <span className="detail-label">Building</span>
          <span className="detail-value">{location.building}</span>
        </div>
        <div className="location-detail">
          <span className="detail-label">Room</span>
          <span className="detail-value">{location.roomNumber}</span>
        </div>
        <div className="location-detail">
          <span className="detail-label">Today's Hours</span>
          <span className="detail-value">
            {todayHours ?? <span style={{ color: '#e53935' }}>Closed today</span>}
          </span>
        </div>
        <div className="location-detail">
          <span className="detail-label">Walk-in</span>
          <span className="detail-value">
            {location.walkInAvailable
              ? <span className="walk-in-badge">✓ Available</span>
              : 'Appointment only'}
          </span>
        </div>
        {location.phone && (
          <div className="location-detail">
            <span className="detail-label">Phone</span>
            <span className="detail-value">
              <a href={`tel:${location.phone}`}>{location.phone}</a>
            </span>
          </div>
        )}
        {location.email && (
          <div className="location-detail">
            <span className="detail-label">Email</span>
            <span className="detail-value">
              <a href={`mailto:${location.email}`}>{location.email}</a>
            </span>
          </div>
        )}
      </div>

      {location.bookingUrl && (
        <div className="location-booking">
          <a
            href={location.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="info-link-btn"
          >
            Book an Appointment ↗
          </a>
        </div>
      )}
    </div>
  );
}
