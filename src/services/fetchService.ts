import { FETCH_CONFIG } from '../config/constants';

export class FetchError extends Error {
  constructor(message: string, public statusCode?: number) {
    super(message);
    this.name = 'FetchError';
  }
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchWithRetry = async (url: string): Promise<Response> => {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= FETCH_CONFIG.RETRY_ATTEMPTS; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), FETCH_CONFIG.TIMEOUT);

      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        },
        cache: 'no-store'
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new FetchError(`HTTP error! status: ${response.status}`, response.status);
      }

      return response;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error('Unknown error');
      
      if (attempt < FETCH_CONFIG.RETRY_ATTEMPTS) {
        await delay(FETCH_CONFIG.RETRY_DELAY * attempt);
        continue;
      }
      break;
    }
  }

  throw lastError;
};