import type { Service, ServiceMatch } from '../types';
import { accessibilityServices } from '../data/accessibilityServices';

const FALLBACK_ID = 'fallback-accessibility';
const SCORE_THRESHOLD = 0.1;

// Normalize: lowercase, strip punctuation, split into words
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

// Build unigrams and bigrams from a token list
function ngrams(tokens: string[]): string[] {
  const unigrams = tokens;
  const bigrams = tokens.slice(0, -1).map((t, i) => `${t} ${tokens[i + 1]}`);
  return [...unigrams, ...bigrams];
}

function scoreService(queryNgrams: string[], service: Service): { score: number; matched: string[] } {
  if (service.keywords.length === 0) return { score: 0, matched: [] };

  const matched: string[] = [];
  let score = 0;

  for (const keyword of service.keywords) {
    if (queryNgrams.includes(keyword)) {
      matched.push(keyword);
      // Bigrams (two words) count double
      score += keyword.includes(' ') ? 2 : 1;
    }
  }

  // Normalize by keyword count so short keyword lists don't dominate
  const normalized = score / service.keywords.length;
  return { score: normalized, matched };
}

export function matchQuery(rawQuery: string): ServiceMatch {
  const tokens = tokenize(rawQuery);
  const queryNgrams = ngrams(tokens);

  const services = accessibilityServices.filter(s => s.id !== FALLBACK_ID);
  const fallback = accessibilityServices.find(s => s.id === FALLBACK_ID)!;

  let bestScore = 0;
  let bestService: Service = fallback;
  let bestMatched: string[] = [];

  for (const service of services) {
    const { score, matched } = scoreService(queryNgrams, service);
    if (score > bestScore) {
      bestScore = score;
      bestService = service;
      bestMatched = matched;
    }
  }

  if (bestScore < SCORE_THRESHOLD) {
    return { service: fallback, confidence: 0, matchedKeywords: [] };
  }

  return {
    service: bestService,
    confidence: Math.min(bestScore, 1),
    matchedKeywords: bestMatched,
  };
}
