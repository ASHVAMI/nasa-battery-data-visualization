import { BatteryData, ChartData } from '../types/battery';

export const createChartData = (
  data: BatteryData[],
  yField: keyof Pick<BatteryData, 'Re' | 'Rct'>,
  name: string
): ChartData => {
  return {
    x: data.map(d => d.cycle),
    y: data.map(d => d[yField]),
    name,
    type: 'scatter',
    mode: 'lines+markers'
  };
};