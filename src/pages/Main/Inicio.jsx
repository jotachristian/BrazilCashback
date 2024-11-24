import React, { useState } from "react";

const Inicio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-64 bg-white dark:bg-gray-800 shadow-md h-screen fixed md:static transition-transform duration-300`}
      >
        <div className="p-4 text-lg font-semibold border-b border-gray-200 dark:border-gray-700">
          Dashboard React
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <div className="w-6 h-6 mr-3 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">🏠</div>
              Painel
            </li>
            <li className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <div className="w-6 h-6 mr-3 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">👤</div>
              Perfil
            </li>
            <li className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <div className="w-6 h-6 mr-3 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">📊</div>
              Tabelas
            </li>
            <li className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <div className="w-6 h-6 mr-3 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">🔔</div>
              Notificações
            </li>
          </ul>
          <div className="mt-6">
            <h4 className="text-gray-500 dark:text-gray-400 text-sm uppercase mb-2">Páginas de Autenticação</h4>
            <ul className="space-y-2">
              <li className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <div className="w-6 h-6 mr-3 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">🔑</div>
                Entrar
              </li>
              <li className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <div className="w-6 h-6 mr-3 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">📝</div>
                Registrar-se
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Dashboard */}
      <div className="flex-1 p-6 md:ml-64">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          {/* Menu sanduíche para dispositivos móveis */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <h1 className="text-2xl font-semibold">Painel / Início</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Pesquisar"
              className="border rounded-md px-3 py-2 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            />
            <button className="text-sm text-gray-700 dark:text-gray-200">Entrar</button>
          </div>
        </header>

        {/* Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { title: "Receita do Dia", value: "R$53 mil", change: "+55% desde a última semana", icon: "💵" },
            { title: "Usuários de Hoje", value: "2.300", change: "+3% desde o mês passado", icon: "👥" },
            { title: "Novos Clientes", value: "3.462", change: "-2% desde ontem", icon: "➕" },
            { title: "Vendas", value: "R$103.430", change: "+5% desde ontem", icon: "📈" },
          ].map((metric, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{metric.title}</p>
                <h2 className="text-xl font-bold">{metric.value}</h2>
                <p className={`text-sm ${metric.change.startsWith("-") ? "text-red-500" : "text-green-500"}`}>{metric.change}</p>
              </div>
              <div className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full">{metric.icon}</div>
            </div>
          ))}
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Visitas ao Site", subtitle: "Desempenho da Última Campanha" },
            { title: "Vendas Diárias", subtitle: "Aumento de 15% nas vendas de hoje" },
            { title: "Tarefas Concluídas", subtitle: "Desempenho da Última Campanha" },
          ].map((graph, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <h3 className="text-sm font-semibold mb-2">{graph.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{graph.subtitle}</p>
              <div className="mt-4 h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
