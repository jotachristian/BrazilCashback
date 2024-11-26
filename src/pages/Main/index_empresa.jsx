import React from "react";

const index_empresa = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 shadow-md hidden md:block">
        <div className="p-4 text-2xl font-semibold border-b">Brazil Cashback</div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li className=" hover:bg-gray-100 p-2 rounded-md">Programa de Fidelidade</li>
            <li className=" hover:bg-gray-100 p-2 rounded-md">Cashback</li>
            <li className=" hover:bg-gray-100 p-2 rounded-md">WhatsApp</li>
            <li className=" hover:bg-gray-100 p-2 rounded-md">Indicação de Amigos</li>
            <li className=" hover:bg-gray-100 p-2 rounded-md">Pesquisa de Satisfação</li>
            <li className=" hover:bg-gray-100 p-2 rounded-md">Vale Pontos</li>
            <li className=" hover:bg-gray-100 p-2 rounded-md">Sorteios</li>
            <li className=" hover:bg-gray-100 p-2 rounded-md">Voucher</li>
            <li className=" hover:bg-gray-100 p-2 rounded-md">Ação Social</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Header */}
        <header className="flex justify-between items-center">
          <h1 className="p-6 text-4xl font-semibold">Overview</h1>  
        </header>

        <div className="pr-0 p-4 flex justify-end space-x-2">
            <button className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Mês Passado</button>
            <button className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Hoje</button>
            <button className="px-3 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Personalizado</button>
          </div>
        {/* Top Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { title: "Cadastrar", icon: "➕", color: "bg-blue-500" },
            { title: "Membros", icon: "👥", color: "bg-green-500" },
            { title: "Pontuar", icon: "🐷", color: "bg-yellow-500" },
            { title: "Premiar", icon: "🏆", color: "bg-purple-500" },
          ].map((card, index) => (
            <div key={index} className={`p-2 rounded-lg shadow-lg ${card.color} text-white`}>
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold">{card.title}</div>
                <div className="text-2xl">{card.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-sm font-semibold mb-2">Vendas</h3>
            <ul className="text-gray-600">
              <li>91 Novas</li>
              <li>37 Premiadas</li>
              <li>20 Próximas a Bonificar</li>
            </ul>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-sm font-semibold mb-2">Clientes</h3>
            <ul className="text-gray-600">
              <li>44 Cadastrados</li>
              <li>44 Ativos</li>
              <li>0 Congelados</li>
            </ul>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-sm font-semibold mb-2">Comportamento</h3>
            <ul className="text-gray-600">
              <li>Ticket Médio: R$132,03</li>
              <li>Recorrência: 10 dias</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index_empresa;
