import { CategoryScale, Chart as ChartJS, ChartOptions, Legend, LineElement, LinearScale, PointElement, Tooltip } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, ChartDataLabels);

const LineChart: React.FC = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['FY2021', 'FY2022', 'FY2023'],
    datasets: [
      {
        label: 'Steady Gross Margin Growth',
        data: [2.8, 6.4, 10.8],
        fill: true,
        backgroundColor: '#FFF', 
        borderColor: '#12E39C', 
        borderWidth: 4,
        pointRadius: 5, 
        pointHoverRadius: 7,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        onClick: () => {},
        labels: {
          boxWidth: 0,
          font: {
            size: 18,
            weight: 'bold',
          },
        },
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        display: true,
        color: '#000',
        font: {
          size: 16,
        },
        align: 'top',
        formatter: (value: number) => `${value.toFixed(1)}%`, // Adding % symbol
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div className='relative w-full h-full flex justify-center items-center'>
      <Line
        style={{ minHeight: 180 }}
        ref={chartRef}
        data={data}
        options={options}
      />
    </div>
  );
};

export default LineChart;
