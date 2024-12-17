import React from 'react';
import { Battery } from 'lucide-react';
import { useBatteryData } from './hooks/useBatteryData';
import Header from './components/Header';
import ChartContainer from './components/ChartContainer';
import ErrorDisplay from './components/ErrorDisplay';
import { createChartData } from './utils/chartHelpers';

function App() {
  const { data, loading, error } = useBatteryData();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin mr-2">
          <Battery size={24} />
        </div>
        <p>Loading battery data...</p>
      </div>
    );
  }

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  const reData = createChartData(data, 'Re', 'Electrolyte Resistance (Re)');
  const rctData = createChartData(data, 'Rct', 'Charge Transfer Resistance (Rct)');

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <Header />
          
          <p className="text-gray-600 mb-8">
            Visualization of battery impedance parameters over charge/discharge cycles.
            The data shows how the electrolyte resistance (Re) and charge transfer
            resistance (Rct) change as the battery ages.
          </p>

          <ChartContainer reData={reData} rctData={rctData} />
        </div>
      </div>
    </div>
  );
}

export default App;