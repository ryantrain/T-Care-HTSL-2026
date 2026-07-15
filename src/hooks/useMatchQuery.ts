import { useState } from 'react';
import type { QueryResult } from '../types';
import { matchQuery } from '../services/matcher';
import { resolve } from '../services/resolver';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function useMatchQuery() {
  const [status, setStatus] = useState<Status>('idle');
  const [result, setResult] = useState<QueryResult | null>(null);

  async function submit(query: string) {
    if (!query.trim()) return;
    setStatus('loading');
    setResult(null);

    // Artificial delay so the loading state is visible during demo
    await new Promise(r => setTimeout(r, 800));

    try {
      const match = matchQuery(query);
      const resolved = resolve(match);
      setResult(resolved);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  function reset() {
    setStatus('idle');
    setResult(null);
  }

  return { status, result, submit, reset };
}
