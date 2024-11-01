// import React, { useRef } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

// // Register the necessary components with Chart.js
// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// const LineChart: React.FC = () => {
//   const chartRef = useRef(null); // Create a reference for the chart

//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // x-axis labels
//     datasets: [
//       {
//         label: 'Sales Data',
//         data: [65, 59, 80, 81, 56, 55, 40], // y-axis values
//         fill: true, // Fill the area under the line
//         backgroundColor: 'rgba(75, 192, 192, 0.5)', // Placeholder background color
//         borderColor: 'rgba(75, 192, 192, 1)', // Line color
//         borderWidth: 2,
//         pointRadius: 5, // Size of the points
//         pointHoverRadius: 7, // Size of points on hover
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false, // Hide x-axis grid lines
//         },
//       },
//       y: {
//         grid: {
//           color: 'rgba(0, 0, 0, 0.1)', // Color for y-axis grid lines
//         },
//       },
//     },
//   };

//   const handleChartReady = (chart) => {
//     // Access the canvas context when the chart is ready
//     const ctx = chart.ctx; // Get the canvas context
//     const gradient = ctx.createLinearGradient(0, 0, 0, chart.height); // Create a vertical gradient
//     gradient.addColorStop(0, 'rgba(75, 192, 192, 1)'); // Color at the top (line color)
//     gradient.addColorStop(1, 'rgba(75, 192, 192, 0)'); // Color at the bottom (transparent)

//     // Set the gradient as the background color for the dataset
//     data.datasets[0].backgroundColor = gradient;
    
//     // Re-render the chart to apply the new background color
//     chart.update();
//   };

//   return (
//     <div style={{ position: 'relative', height: '400px', width: '100%' }}>
//       <Line
//         ref={chartRef}
//         data={data}
//         options={options}
//         onReady={handleChartReady} // Use the onReady callback to apply the gradient
//       />
//     </div>
//   );
// };

// export default LineChart;

import React from 'react';

const LineChart: React.FC = () => {
  return (
    <div>
      
    </div>
  );
};

export default LineChart;