import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Dados do gráfico de Ticket Médio
  const ticketMedioData = {
    labels: ["07/2024", "08/2024", "09/2024", "10/2024", "11/2024"],
    datasets: [
      {
        label: "Ticket Médio",
        data: [500, 1500, 1200, 1000, 1600],
        borderColor: "#ffcc00",
        backgroundColor: "rgba(255, 204, 0, 0.5)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Dados do gráfico de Histórico de Faturamento
  const faturamentoData = {
    labels: ["07/2024", "08/2024", "09/2024", "10/2024", "11/2024"],
    datasets: [
      {
        label: "Total Transacionado",
        data: [1000, 15000, 13000, 20000, 26000],
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Dados do gráfico de Vendas x Clientes
  const vendasClientesData = {
    labels: ["07/2024", "08/2024", "09/2024", "10/2024", "11/2024"],
    datasets: [
      {
        label: "Total de NF",
        data: [2, 8, 6, 14, 18],
        backgroundColor: "rgba(54, 162, 235, 0.8)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Usuários Únicos",
        data: [2, 8, 6, 14, 18],
        backgroundColor: "rgba(153, 102, 255, 0.8)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Dados do gráfico de Histórico de Pagamentos
  const pagamentosData = {
    labels: ["07/2024", "10/2024", "11/2024"],
    datasets: [
      {
        label: "Total Pagamento",
        data: [0, 150, 200],
        backgroundColor: "rgba(255, 159, 64, 0.8)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Dados do gráfico de Top 10 Produtos
  const [produtosData, setProdutosData] = useState({
    labels: ["Produto 1", "Produto 2", "Produto 3", "Produto 4", "Produto 5"],
    datasets: [
      {
        label: "Quantidade",
        data: [10, 8, 6, 4, 2],
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  // Alternar entre os filtros (Quantidade e Valor)
  const toggleFiltro = (filtro) => {
    if (filtro === "quantidade") {
      setProdutosData({
        labels: ["Produto 1", "Produto 2", "Produto 3", "Produto 4", "Produto 5"],
        datasets: [
          {
            label: "Quantidade",
            data: [10, 8, 6, 4, 2],
            backgroundColor: "rgba(75, 192, 192, 0.8)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      });
    } else {
      setProdutosData({
        labels: ["Produto 1", "Produto 2", "Produto 3", "Produto 4", "Produto 5"],
        datasets: [
          {
            label: "Valor",
            data: [1000, 800, 600, 400, 200],
            backgroundColor: "rgba(153, 102, 255, 0.8)",
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 1,
          },
        ],
      });
    }
  };

  // Configurações compartilhadas dos gráficos
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#333",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#666" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#666" },
        grid: { color: "#e0e0e0" },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      {/* Resumo de Cashback */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg text-center font-bold text-[#5a5a5a] mb-4">
          Resumo de Saldo
        </h2>
        <div className="relative w-full h-4 bg-red-200 rounded-full mb-6">
          <div
            className="absolute top-0 left-0 h-full bg-red-500 rounded-full"
            style={{ width: "25%" }}
          ></div>
        </div>
        <ul className="space-y-2 text-gray-600">
          <li className="flex justify-between">
            <span className="font-semibold">Data da última recarga</span>
            <span>27/11/2024</span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold">Valor da última carga</span>
            <span className="text-green-500 font-bold">R$ 500,00</span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold">Saldo atual</span>
            <span className="text-green-500 font-bold">R$ 121,75</span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold">Previsão para mais</span>
            <span>2 vendas</span>
          </li>
        </ul>
        <button className="mt-4 px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-green-600 w-full">
          Consultar
        </button>
      </div>

      {/* Ticket Médio */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-bold text-[#5a5a5a] mb-4 text-center">
          Ticket Médio
        </h2>
        <Line data={ticketMedioData} options={chartOptions} />
      </div>

      {/* Histórico de Faturamento */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-bold text-[#5a5a5a] mb-4 text-center">
          Histórico de Faturamento
        </h2>
        <Bar data={faturamentoData} options={chartOptions} />
      </div>

      {/* Vendas x Clientes */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-bold text-[#5a5a5a] mb-4 text-center">
          Vendas x Clientes
        </h2>
        <Bar data={vendasClientesData} options={chartOptions} />
      </div>

      {/* Histórico de Pagamentos */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">
          Histórico de Pagamentos
        </h2>
        <Bar data={pagamentosData} options={chartOptions} />
      </div>

      {/* Top 10 Produtos */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Top 10 Produtos</h2>
          <div className="space-x-2">
            <button
              className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 text-sm"
              onClick={() => toggleFiltro("quantidade")}
            >
              Quantidade
            </button>
            <button
              className="px-3 py-1 rounded-lg bg-purple-500 text-white hover:bg-purple-600 text-sm"
              onClick={() => toggleFiltro("valor")}
            >
              Valor
            </button>
          </div>
        </div>
        {produtosData.labels.length > 0 ? (
          <Bar data={produtosData} options={chartOptions} />
        ) : (
          <p className="text-center text-gray-500">Nenhum registro encontrado</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
