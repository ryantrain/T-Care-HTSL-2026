import { useState } from 'react';

const SAMPLE_QUERIES = [
  'I need extra time on my exams',
  'How do I register with Accessibility Services?',
  'I need a note-taker for my classes',
  'Where can I find accessible computers?',
  'How do I get my letter of accommodation?',
];

const MAX_CHARS = 200;

interface QueryInputProps {
  onSubmit: (query: string) => void;
  disabled?: boolean;
}

export function QueryInput({ onSubmit, disabled }: QueryInputProps) {
  const [value, setValue] = useState('');

  function handleSubmit() {
    if (value.trim()) onSubmit(value.trim());
  }

  function handleChip(query: string) {
    setValue(query);
    onSubmit(query);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <div className="query-card">
      <div className="query-label">Describe your issue</div>
      <textarea
        className="query-textarea"
        placeholder="e.g. I need extra time on my exams, I want to register for accommodations..."
        value={value}
        onChange={e => setValue(e.target.value.slice(0, MAX_CHARS))}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-label="Describe your accessibility issue"
        rows={3}
      />
      <div className="query-footer">
        <span className="query-char-count">{value.length} / {MAX_CHARS}</span>
        <button
          className="btn-primary"
          onClick={handleSubmit}
          disabled={disabled || !value.trim()}
        >
          Find Support →
        </button>
      </div>

      <div style={{ marginTop: 18 }}>
        <div className="chips-label">Try asking:</div>
        <div className="chips">
          {SAMPLE_QUERIES.map(q => (
            <button
              key={q}
              className="chip"
              onClick={() => handleChip(q)}
              disabled={disabled}
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
