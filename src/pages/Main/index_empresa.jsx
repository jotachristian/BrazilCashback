import React, { useState } from "react";

const IndexEmpresa = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuGestaoOpen, setSubmenuGestaoOpen] = useState(false);
  const [submenuFinanceiroOpen, setSubmenuFinanceiroOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const toggleSubmenuGestao = () => {
    setSubmenuGestaoOpen(!submenuGestaoOpen);
  };

  const toggleSubmenuFinanceiro = () => {
    setSubmenuFinanceiroOpen(!submenuFinanceiroOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Menu Sanduíche */}
      <div className="fixed top-0 left-0 w-full shadow-md z-50 bg-white">
        <div className="flex justify-between items-center px-4 py-2">
          <button
            className="flex flex-col space-y-1 focus:outline-none bg-transparent"
            onClick={toggleMenu}
          >
            <span className="block w-6 h-1 bg-gray-800"></span>
            <span className="block w-6 h-1 bg-gray-800"></span>
            <span className="block w-6 h-1 bg-gray-800"></span>
          </button>
          <h1 className="flex flex-col itens-start text-lg font-semibold">
            Brazil Cashback
          </h1>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 h-full shadow-md z-40 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 bg-white`}
      >
        <div className="p-4 text-2xl font-semibold border-b">
          Brazil Cashback
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {/* Programa de Fidelidade com Submenu */}
            <li>
              <div
                className="flex justify-between items-center hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                onClick={toggleSubmenu}
              >
                <h1 className="text-base text-[#008000] font-semibold">
                  Dashboard
                </h1>
                <span className={`transform ${submenuOpen ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </div>
              {submenuOpen && (
                <ul className="pl-6 space-y-2">
                  <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    <p className="font-semibold">Recorrência</p>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    <p className="font-semibold">Perfil do Cliente</p>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    <p className="font-semibold">Hábitos de Consumo</p>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    <p className="font-semibold">Campanhas</p>
                  </li>
                </ul>
              )}
            </li>

            {/* Cashback com Submenu */}
            <li>
              <div
                className="flex justify-between items-center hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                onClick={toggleSubmenuGestao}
              >
                <h1 className="text-base font-semibold">
                  Gestão
                </h1>
                <span
                  className={`transform ${
                    submenuGestaoOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>
              {submenuGestaoOpen && (
                <ul className="pl-6 space-y-2">
                  <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    <p className="font-semibold">Cashback</p>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    <p className="font-semibold">Cockpit</p>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    <p className="font-semibold">Cupons</p>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    <p className="font-semibold">Funcionários</p>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    <p className="font-semibold">Usuários</p>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    <p className="font-semibold">Pagamentos</p>
                  </li>
                </ul>
              )}
            </li>

            {/* Financeiro com Submenu */}
            <li>
              <div
                className="flex justify-between items-center hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                onClick={toggleSubmenuFinanceiro}
              >
                <h1 className="text-base font-semibold">
                  Finaceiro
                </h1>
                <span
                  className={`transform ${
                    submenuFinanceiroOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>
              {submenuFinanceiroOpen && (
                <ul className="pl-6 space-y-2">
                  <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    <p className="font-semibold">Mensalidades</p>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    <p className="font-semibold">Conta Bancária</p>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    <p className="font-semibold">Carga Cashback</p>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                    <p className="font-semibold">Transações</p>
                  </li>
                </ul>
              )}
            </li>

            <li className="hover:bg-gray-100 p-2 rounded-md">
              <p className="font-semibold text-black">Ajuda</p></li>
            <li className="hover:bg-gray-100 p-2 rounded-md">
              Indicação de Amigos
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div
        className={`flex-1 p-4 pt-16 ${
          menuOpen ? "ml-64" : "ml-0"
        } transition-all duration-300`}
      >
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-semibold">CRM - Dashboard</h1>
        </header>

        {/* Top Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { title: "Cadastrar", icon: "➕", color: "bg-blue-500" },
            { title: "13 Vendas", icon: "👥", color: "bg-green-500" },
            { title: "Pontuar", icon: "🐷", color: "bg-yellow-500" },
            { title: "Premiar", icon: "🏆", color: "bg-purple-500" },
          ].map((card, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-lg ${card.color} text-white`}
            >
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold">{card.title}</div>
                <div className="text-2xl">{card.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Vendas</h3>
            <ul className="text-gray-600">
              <li>91 Novas</li>
              <li>37 Premiadas</li>
              <li>20 Próximas a Bonificar</li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Clientes</h3>
            <ul className="text-gray-600">
              <li>44 Cadastrados</li>
              <li>44 Ativos</li>
              <li>0 Congelados</li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Comportamento</h3>
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

export default IndexEmpresa;
