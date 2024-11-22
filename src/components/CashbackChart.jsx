// CashbackChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrando os componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CashbackChart = () => {
  // Dados fictícios de cashback
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Cashback convertido (R$)',
        data: [12000, 15000, 18000, 20000, 22000, 30000, 25000, 28000, 32000, 35000, 40000, 45000],
        backgroundColor: '#ffcc00', // Cor padrão do cashback
        borderColor: '#f0f0f0',     // Borda verde
        borderWidth: 2,
        borderRadius: 8,            // Bordas arredondadas
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `R$ ${value.toLocaleString()}`, // Formato da moeda
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <div className="h-[300px] w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default CashbackChart;
