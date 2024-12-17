import React from 'react';
import { ChartData } from '../types/battery';
import BatteryChart from './BatteryChart';

interface ChartContainerProps {
  reData: ChartData;
  rctData: ChartData;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ reData, rctData }) => {
  return (
    <div className="space-y-8">
      <div className="bg-gray-50 p-4 rounded-lg">
        <BatteryChart
          data={[reData]}
          title="Electrolyte Resistance vs Cycle Number"
          yAxisTitle="Resistance (Ohms)"
        />
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <BatteryChart
          data={[rctData]}
          title="Charge Transfer Resistance vs Cycle Number"
          yAxisTitle="Resistance (Ohms)"
        />
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <BatteryChart
          data={[reData, rctData]}
          title="Combined Resistance Parameters vs Cycle Number"
          yAxisTitle="Resistance (Ohms)"
        />
      </div>
    </div>
  );
};

export default ChartContainer;