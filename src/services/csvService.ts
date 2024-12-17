import Papa from 'papaparse';
import { RawBatteryData, BatteryData } from '../types/battery';
import { transformBatteryData, filterValidData } from '../utils/dataTransformers';

export class CSVParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CSVParseError';
  }
}

export const parseCSVData = (csvText: string): Promise<BatteryData[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: 'greedy',
      transformHeader: (header) => header.trim(),
      transform: (value) => value.trim(),
      complete: (results) => {
        try {
          if (results.errors.length > 0) {
            console.warn('CSV parsing warnings:', results.errors);
          }

          const rawData = results.data as RawBatteryData[];
          if (!rawData.length) {
            throw new CSVParseError('No data found in CSV');
          }
          
          const transformedData = rawData
            .map(transformBatteryData)
            .filter(data => data !== null)
            .sort((a, b) => a.cycle - b.cycle);
          
          const validData = filterValidData(transformedData);
          
          if (!validData.length) {
            throw new CSVParseError('No valid data after processing');
          }
          
          resolve(validData);
        } catch (error) {
          reject(error instanceof Error ? error : new Error('Unknown error'));
        }
      },
      error: (error) => {
        reject(new CSVParseError(`CSV parsing error: ${error.message}`));
      }
    });
  });
};