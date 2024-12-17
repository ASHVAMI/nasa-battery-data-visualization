import React from 'react';
import Plot from 'react-plotly.js';
import { ChartData } from '../types/battery';
import { CHART_CONFIG } from '../config/constants';

interface BatteryChartProps {
  data: ChartData[];
  title: string;
  yAxisTitle: string;
}

const BatteryChart: React.FC<BatteryChartProps> = ({ data, title, yAxisTitle }) => {
  return (
    <Plot
      data={data}
      layout={{
        title: {
          text: title,
          font: { size: 24 }
        },
        xaxis: {
          title: 'Cycle Number',
          titlefont: { size: 14 }
        },
        yaxis: {
          title: yAxisTitle,
          titlefont: { size: 14 }
        },
        showlegend: true,
        legend: {
          x: 1,
          y: 1
        },
        width: CHART_CONFIG.width,
        height: CHART_CONFIG.height,
        margin: CHART_CONFIG.margin
      }}
      config={{ responsive: true }}
    />
  );
};

export default BatteryChart;