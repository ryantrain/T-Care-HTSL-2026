import type { InfoResult } from '../../types';

// Minimal markdown renderer for the patterns used in our data:
// **bold**, [text](url), numbered lists, line breaks
function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    )
    .replace(/\n/g, '<br />');
}

interface InfoCardProps {
  result: InfoResult;
}

export function InfoCard({ result }: InfoCardProps) {
  const { service } = result.match;

  return (
    <div className="info-card">
      <div className="info-card-tag">✓ Instant Answer</div>
      <div className="info-card-name">{service.name}</div>
      <div
        className="info-card-answer"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(result.answer) }}
      />
      {result.relatedLinks && result.relatedLinks.length > 0 && (
        <div className="info-links">
          {result.relatedLinks.map(link => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="info-link-btn"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
