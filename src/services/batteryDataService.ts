import { DATA_SOURCES } from '../config/constants';
import { BatteryData } from '../types/battery';
import { fetchWithRetry } from './fetchService';
import { parseCSVData } from './csvService';

export const fetchBatteryData = async (): Promise<BatteryData[]> => {
  const urls = [DATA_SOURCES.PRIMARY, DATA_SOURCES.FALLBACK];
  let lastError: Error | null = null;

  // Try remote data sources first
  for (const url of urls) {
    try {
      const response = await fetchWithRetry(url);
      const csvText = await response.text();
      return await parseCSVData(csvText);
    } catch (error) {
      console.warn(`Failed to fetch from ${url}:`, error);
      lastError = error instanceof Error ? error : new Error('Unknown error');
      continue;
    }
  }

  // Fall back to demo data if all remote sources fail
  try {
    return await parseCSVData(DATA_SOURCES.DEMO);
  } catch (error) {
    console.error('Failed to parse demo data:', error);
    throw new Error(`Failed to load battery data: ${lastError?.message}`);
  }
};