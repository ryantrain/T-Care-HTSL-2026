import type { Route } from '../../types';

interface RouteCardProps {
  route: Route;
}

export function RouteCard({ route }: RouteCardProps) {
  return (
    <div className="route-card">
      <div className="route-card-header">
        <span className="route-card-title">Walking Directions</span>
        <span className="route-time-badge">~{route.totalMinutes} min walk</span>
      </div>

      <div className="route-from">
        <span>📌</span>
        Starting from: <strong>{route.fromLabel}</strong>
      </div>

      <div className="route-steps">
        {route.steps.map((step, i) => (
          <div
            key={step.stepNumber}
            className={`route-step${step.isShortcut ? ' shortcut' : ''}`}
          >
            {/* Vertical connector line (not on last step) */}
            {i < route.steps.length - 1 && <div className="step-line" />}

            <div className="step-num">{step.stepNumber}</div>
            <div className="step-body">
              <div className="step-instruction">
                {step.instruction}
                {step.isShortcut && <span className="shortcut-label">Shortcut</span>}
              </div>
              {step.landmark && (
                <div className="step-landmark">🏛 {step.landmark}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
