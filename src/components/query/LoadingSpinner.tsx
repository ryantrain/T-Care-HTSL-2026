export function LoadingSpinner() {
  return (
    <div className="loading" role="status" aria-live="polite">
      <div className="dots" aria-hidden="true">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
      <span>Finding the right support for you...</span>
    </div>
  );
}
