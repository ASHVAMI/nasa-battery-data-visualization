import { RawBatteryData, BatteryData } from '../types/battery';

export const transformBatteryData = (rawData: RawBatteryData): BatteryData | null => {
  try {
    const cycle = parseInt(rawData.cycle, 10);
    const Re = parseFloat(rawData.Re);
    const Rct = parseFloat(rawData.Rct);
    const temperature = parseFloat(rawData.temperature);
    const timestamp = new Date(rawData.timestamp);

    // Validate all required fields
    if (
      !Number.isFinite(cycle) || 
      !Number.isFinite(Re) || 
      !Number.isFinite(Rct) || 
      !Number.isFinite(temperature) || 
      isNaN(timestamp.getTime())
    ) {
      console.warn('Invalid data row:', rawData);
      return null;
    }

    return {
      cycle,
      Re,
      Rct,
      temperature,
      timestamp
    };
  } catch (error) {
    console.warn('Error transforming data row:', rawData, error);
    return null;
  }
};

export const filterValidData = (data: (BatteryData | null)[]): BatteryData[] => {
  return data.filter((item): item is BatteryData => 
    item !== null &&
    Number.isFinite(item.cycle) && 
    Number.isFinite(item.Re) && 
    Number.isFinite(item.Rct) && 
    Number.isFinite(item.temperature) &&
    !isNaN(item.timestamp.getTime())
  );
};