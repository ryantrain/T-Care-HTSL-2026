import type { QueryResult } from '../../types';
import { InfoCard } from './InfoCard';
import { LocationCard } from './LocationCard';
import { RouteCard } from './RouteCard';

interface ResultRouterProps {
  result: QueryResult;
  onReset: () => void;
}

export function ResultRouter({ result, onReset }: ResultRouterProps) {
  return (
    <div>
      <div className="result-header">
        <h2>Here's what we found</h2>
        <button className="btn-reset" onClick={onReset}>← Ask another question</button>
      </div>

      {result.type === 'info' && <InfoCard result={result} />}

      {result.type === 'location' && (
        <>
          <LocationCard result={result} />
          <RouteCard route={result.route} />
        </>
      )}
    </div>
  );
}
