import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, ChartOptions } from 'chart.js';

// Register the necessary components with Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineChart: React.FC = () => {
  const chartRef = useRef<ChartJS | null>(null); // Create a reference for the chart

  const data = {
    labels: ['FY2021', 'FY2022', 'FY2023'], // x-axis labels
    datasets: [
      {
        label: 'Steady Gross Margin Growth',
        data: [2.8, 6.4, 10.8], // y-axis values
        fill: true, // Fill the area under the line
        backgroundColor: '#FFF', // Placeholder background color
        borderColor: '#12E39C', // Line color
        borderWidth: 2,
        pointRadius: 5, // Size of the points
        pointHoverRadius: 7, // Size of points on hover
      },
    ],
  };

  // Explicitly typing the options variable
  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const, // Ensure this is a valid string literal
      },
      tooltip: {
        enabled: true, // Enable tooltips to show data on hover
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Color for y-axis grid lines
        },
        ticks: {
          display: false, // Hide y-axis tick marks (1, 2, 3, etc.)
        },
      },
    },
  };

  const handleChartReady = (chart: ChartJS) => { // Explicitly typing chart
    // Access the canvas context when the chart is ready
    const ctx = chart.ctx; // Get the canvas context
    const gradient = ctx.createLinearGradient(0, 0, 0, chart.height); // Create a vertical gradient
    gradient.addColorStop(0, 'rgba(75, 192, 192, 1)'); // Color at the top (line color)
    gradient.addColorStop(1, 'rgba(75, 192, 192, 0)'); // Color at the bottom (transparent)

    // Set the gradient as the background color for the dataset
    data.datasets[0].backgroundColor = gradient;
    
    // Re-render the chart to apply the new background color
    chart.update();
  };

  return (
    <div className='relative w-full h-full flex justify-center items-center'>
      <Line
        style={{ minHeight: 180 }}
        ref={chartRef}
        data={data}
        options={options}
        onReady={handleChartReady}
      />
    </div>
  );
};

export default LineChart;
