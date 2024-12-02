import React, { useState } from "react";
import Dashboard from "./dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faBars,
  faBell,
  faListCheck,
  faChevronDown,
  faRightFromBracket,
  faPlus,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import IconeCoins from "../../assets/Icones_main_empresa/coins.svg";
import IconeHelp from "../../assets/Icones_main_empresa/help.svg";

const IndexEmpresa = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [cashbackModalOpen, setCashbackModalOpen] = useState(false);
  const [nfType, setNfType] = useState("semNF"); // Estado para rastrear a seleção

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

  const openNotifications = () => setNotificationsOpen(true);
  const closeNotifications = () => setNotificationsOpen(false);

  const openCashbackModal = () => setCashbackModalOpen(true);
  const closeCashbackModal = () => setCashbackModalOpen(false);

  const selectSemNF = () => setNfType("semNF");
  const selectComNF = () => setNfType("comNF");

  return (
    <div className="flex min-h-screen" onCopy={(e) => e.preventDefault()}>
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
            <h1 className="ml-4 text-lg font-semibold text-black select-none">
              Brazil Cashback
            </h1>
          </div>

          {/* Opções à direita */}
          <div className="flex items-center space-x-4 sm:space-x-6 select-none">
            <button
              className="hidden sm:block bg-[#ffcc00] text-white px-4 py-2 rounded-md hover:bg-yellow-500"
              onClick={openCashbackModal} // Chama o modal de "Gerar Cashback"
            >
              <h1 className="text-base flex items-center">
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                <span className="hidden sm:inline">Emitir cashback</span>
              </h1>
            </button>

            <p className="hidden sm:block text-gray-800 font-semibold select-none">
              Saldo: R$ 121,75
            </p>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon
                icon={faBell}
                className="text-gray-600 text-lg cursor-pointer"
                onClick={openNotifications}
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
        className={`fixed top-0 left-0 w-full h-full shadow-md z-40 transform select-none ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 bg-white dark:bg-[#242424] md:w-64`}
      >
        <div className="flex flex-col items-center justify-start p-4 text-2xl font-semibold">
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
                    <p className="font-semibold">Fidelidade</p>
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
        <div className="pt-10 flex justify-between items-center mb-4 select-none">
          <h1 className="text-2xl font-semibold">CRM - Dashboard</h1>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 justify-center select-none">
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
            {
              title: "Clientes que resgataram",
              number: "37",
              color: "bg-yellow-300",
            },
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Card de Performance */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              <p>Retorno sobre Investimento (ROI)</p>
            </h2>
            <div className="flex justify-between items-center w-full px-8">
              {/* Investimento */}
              <div className="text-center">
                <p className="text-sm text-gray-500">Investimento</p>
                <p className="text-xl font-semibold text-[#ffcc00]">
                  R$ 1.306,25
                </p>
              </div>
              {/* Linha Divisória */}
              <div className="h-12 w-px bg-gray-300"></div>
              {/* Faturamento */}
              <div className="text-center">
                <p className="text-sm text-gray-500">Faturamento</p>
                <p className="text-xl font-semibold text-[#ffcc00]">
                  R$ 26.125,00
                </p>
              </div>
            </div>
            {/* ROI */}
            <div className="mt-6 text-center">
              <p className="text-4xl font-bold text-[#ffcc00]">20.00 X</p>
              <p className="text-sm text-gray-500">sobre o valor investido</p>
            </div>
          </div>

          {/* Card de Clientes */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4"><p className="text-center">Visão Geral - Clientes</p></h2>
            <div className="flex items-center space-x-2 mb-4">
              {/* Barra de Progresso */}
              <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full bg-[#ffcc00]"
                  style={{ width: "41%" }}
                ></div>
                <div
                  className="h-full bg-yellow-400"
                  style={{ width: "9%" }}
                ></div>
                <div
                  className="h-full bg-green-500"
                  style={{ width: "0%" }}
                ></div>
                <div
                  className="h-full bg-orange-400"
                  style={{ width: "9%" }}
                ></div>
                <div
                  className="h-full bg-red-500"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
            {/* Informações dos Clientes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Iniciados */}
              <div className="text-center">
                <p className="text-sm text-[#ffcc00] font-bold">Novos</p>
                <p className="text-lg font-semibold text-[#ffcc00]">18</p>
                <p className="text-xs text-gray-500">(41%)</p>
              </div>
              {/* Fãs */}
              <div className="text-center">
                <p className="text-sm text-[#ffcc00] font-bold">Fãs</p>
                <p className="text-lg font-semibold text-[#ffcc00]">0</p>
                <p className="text-xs text-gray-500">(0%)</p>
              </div>
              {/* Recorrentes */}
              <div className="text-center">
                <p className="text-sm text-green-500 font-bold">Recorrentes</p>
                <p className="text-lg font-semibold text-green-600">0</p>
                <p className="text-xs text-gray-500">(0%)</p>
              </div>
              {/* Em risco */}
              <div className="text-center">
                <p className="text-sm text-orange-500 font-bold">Em risco</p>
                <p className="text-lg font-semibold text-orange-600">4</p>
                <p className="text-xs text-gray-500">(9%)</p>
              </div>
              {/* Inativos */}
              <div className="text-center">
                <p className="text-sm text-red-500 font-bold">Inativos</p>
                <p className="text-lg font-semibold text-red-600">10</p>
                <p className="text-xs text-gray-500">(50%)</p>
              </div>
            </div>
          </div>
        </div>
      <Dashboard />
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

      {/* Modal de Notificações */}
      {notificationsOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-end pt-16 pr-20 bg-opacity-50"
          onClick={closeNotifications}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-4 w-72"
            onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro do modal
          >
            <div className="flex flex-col items-end">
              <button
                className="mt-4 bg-transparent px-2 py-2 rounded-md hover:text-red-600 ml-2"
                onClick={closeNotifications}
              >
                <FontAwesomeIcon icon={faX} size="lg" />
              </button>
            </div>
            <h2 className="text-xl font-bold mb-4 text-center">Notificações</h2>
            <ul className="space-y-2">
              <li className="text-gray-700 font-semibold">
                📌 Promoção de Natal ativa!
              </li>
              <li className="text-gray-700 font-semibold">
                📌 Novo cliente cadastrado.
              </li>
              <li className="text-gray-700 font-semibold">
                📌 Seu saldo foi atualizado.
              </li>
            </ul>
          </div>
        </div>
      )}
      {cashbackModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeCashbackModal} // Fecha ao clicar fora do modal
        >
          <div
            className="bg-white rounded-lg shadow-lg w-[500px]"
            onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro do modal
          >
            {/* Cabeçalho */}
            <div className="border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-center">
                Emitir cashback do Cliente
              </h2>
              <button
                className="text-gray-500 bg-transparent hover:text-red-500"
                onClick={closeCashbackModal}
              >
                <FontAwesomeIcon icon={faX} size="lg" />
              </button>
            </div>

            {/* Botões de seleção */}
            <div className="flex space-x-4 px-6 py-4">
              <button
                className={`w-1/2 py-2 border rounded-md ${
                  nfType === "semNF"
                    ? "bg-[#ffcc00] text-gray-800"
                    : "hover:bg-gray-100 text-gray-600 bg-gray-300"
                }`}
                onClick={selectSemNF}
              >
                Sem NF
              </button>
              <button
                className={`w-1/2 py-2 border rounded-md ${
                  nfType === "comNF"
                    ? "bg-[#ffcc00]"
                    : "hover:bg-gray-100 text-gray-600 bg-gray-300"
                }`}
                onClick={selectComNF}
              >
                Com NF
              </button>
            </div>

            {/* Campos do formulário */}
            <div className="px-6 py-4 space-y-4">
              {nfType === "semNF" && (
                <>
                  <div>
                    <label className="text-sm text-gray-600">CPF</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                      placeholder="Preencha o CPF"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">
                      Nome do usuário
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                      placeholder="Preencha o Nome do usuário"
                    />
                  </div>
                </>
              )}
              {nfType === "comNF" && (
                <>
                  <div>
                    <label className="text-sm text-gray-600">CPF</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                      placeholder="Preencha o CPF"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">
                      Nome do usuário
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                      placeholder="Preencha o Nome do usuário"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">
                      Chave da Nota Fiscal
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                      placeholder="Preencha a Chave da Nota Fiscal"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Botões de ação */}
            <div className="flex justify-end border-t px-6 py-4">
              <button
                className="px-4 py-2 mr-2 border rounded-md text-gray-600 bg-transparent hover:bg-gray-100"
                onClick={closeCashbackModal}
              >
                Cancelar
              </button>
              <button className="px-4 py-2 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed">
                Gerar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndexEmpresa;
