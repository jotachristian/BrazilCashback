import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faBars,
  faBell,
  faListCheck,
  faChevronDown,
  faRightFromBracket,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import IconeCoins from "../../assets/Icones_main_empresa/coins.svg";
import IconeHelp from "../../assets/Icones_main_empresa/help.svg";

const IndexEmpresa = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuGestaoOpen, setSubmenuGestaoOpen] = useState(false);
  const [submenuFinanceiroOpen, setSubmenuFinanceiroOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);
  const toggleSubmenuGestao = () => setSubmenuGestaoOpen(!submenuGestaoOpen);
  const toggleSubmenuFinanceiro = () =>
    setSubmenuFinanceiroOpen(!submenuFinanceiroOpen);

  const openModal = () => setModalOpen(!modalOpen);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex min-h-screen">
      {/* Menu Sanduíche */}
      <div className="fixed top-0 left-0 w-full shadow-md z-50 bg-white dark:bg-[#242424]">
        <div className="flex justify-between items-center px-4 py-2">
          {/* Logo e Nome */}
          <div className="flex items-center">
            <button
              className="flex flex-col space-y-1 focus:outline-none bg-transparent"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} size="lg" className="mr-2" />
            </button>
            <h1 className="ml-4 text-lg font-semibold text-black">
              Brazil Cashback
            </h1>
          </div>

          {/* Opções à direita */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button className="hidden sm:block bg-[#ffcc00] text-white px-4 py-2 rounded-md hover:bg-yellow-500">
              <h1 className="text-base">
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                Gerar cashback
              </h1>
            </button>
            <p className="hidden sm:block text-gray-800 font-semibold">
              Saldo: R$ 121,75
            </p>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon
                icon={faBell}
                className="text-gray-600 text-lg cursor-pointer"
              />
              <button
                className="bg-[#ffcc00] text-white w-8 h-8 flex items-center justify-center rounded-full"
                onClick={openModal}
              >
                S
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-full h-full shadow-md z-40 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 bg-white dark:bg-[#242424] md:w-64`}
      >
        <div className="flex flex-col items-center justify-start p-4 text-2xl font-semibold border-b">
          Brazil Cashback
        </div>
        <nav
          className="p-4 overflow-y-auto max-h-screen"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#ccc transparent" }}
        >
          <ul className="space-y-2">
            {/* Programa de Fidelidade com Submenu */}
            <li>
              <div
                className="flex justify-between items-center hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                onClick={toggleSubmenu}
              >
                <h1 className="text-base text-[#ffcc00] font-semibold">
                  <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                  Dashboard
                </h1>
                <span
                  className={`transform ${submenuOpen ? "rotate-180" : ""}`}
                >
                  <FontAwesomeIcon icon={faChevronDown} />
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

            {/* Gestão com Submenu */}
            <li>
              <div
                className="flex justify-between items-center hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                onClick={toggleSubmenuGestao}
              >
                <h1 className="text-base font-semibold">
                  <FontAwesomeIcon icon={faListCheck} className="mr-2" />
                  Gestão
                </h1>
                <span
                  className={`transform ${
                    submenuGestaoOpen ? "rotate-180" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faChevronDown} />
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
                <h1 className="text-base font-semibold flex items-center">
                  <img
                    src={IconeCoins}
                    alt=""
                    className="h-[16px] w-[16px] mr-2"
                  />
                  Financeiro
                </h1>
                <span
                  className={`transform ${
                    submenuFinanceiroOpen ? "rotate-180" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faChevronDown} />
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
              <h1 className="text-base font-semibold flex items-center">
                <img src={IconeHelp} alt="" className="h-[16px] mr-2" />
                Ajuda
              </h1>
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
        <div className="pt-10 flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">CRM - Dashboard</h1>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 justify-center">
          {[
            { title: "Vendas", number: "18", color: "bg-yellow-300" },
            {
              title: "Novos Clientes",
              number: "10",
              color: "bg-yellow-300",
            },
            {
              title: "Ticket Médio",
              number: "R$ 1451,39",
              color: "bg-yellow-300",
            },
            { title: "Clientes que resgataram", number: "37", color: "bg-yellow-300" },
          ].map((card, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${card.color} flex flex-col items-center justify-center`}
            >
              <div className="text-4xl font-bold text-gray-800 mb-2">
                {card.number}
              </div>
              <div className="text-sm font-semibold text-gray-700 text-center">
                {card.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end items-start pt-16 pr-6 bg-opacity-50"
          onClick={closeModal} // Fechar o modal ao clicar na área de fundo
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-80"
            onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro do modal
          >
            <h2 className="text-xl font-bold mb-4">Silvia de Souza Oliveira</h2>
            <ul className="mb-4">
              <li>
                <p className="font-semibold text-base">Estabelecimento:</p>
                <p className="text-sm">Ótica Popular</p>
              </li>
            </ul>
            <button
              className="bg-transparent px-0 py-2 rounded-md"
              onClick={closeModal}
            >
              <p className="text-base font-semibold flex items-center hover:text-red-500">
                <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />
                Sair
              </p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndexEmpresa;
