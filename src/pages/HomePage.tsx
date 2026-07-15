import { useMatchQuery } from '../hooks/useMatchQuery';
import { QueryInput } from '../components/query/QueryInput';
import { LoadingSpinner } from '../components/query/LoadingSpinner';
import { ResultRouter } from '../components/result/ResultRouter';

export function HomePage() {
  const { status, result, submit, reset } = useMatchQuery();

  return (
    <main className="page">
      <div className="hero">
        <h1 className="hero-title">What accessibility support do you need?</h1>
        <p className="hero-subtitle">
          Describe your situation and we'll find the right resource or direct you to the right office.
        </p>
      </div>

      {(status === 'idle' || status === 'loading') && (
        <QueryInput onSubmit={submit} disabled={status === 'loading'} />
      )}

      {status === 'loading' && <LoadingSpinner />}

      {status === 'success' && result && (
        <ResultRouter result={result} onReset={reset} />
      )}

      {status === 'error' && (
        <div className="no-match-card">
          <div className="no-match-icon">⚠️</div>
          <div className="no-match-title">Something went wrong</div>
          <div className="no-match-text">
            Please try again.{' '}
            <button className="btn-reset" onClick={reset}>Start over</button>
          </div>
        </div>
      )}
    </main>
  );
}
