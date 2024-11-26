import React from "react";
import LogoBrazilCashback from "../../assets/BC-verde.png";
import banner1 from "../../assets/black_friday_banner.svg";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar principal */}
      <div className="bg-white shadow-md px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/">
          <img
            src={LogoBrazilCashback}
            alt="Logo Brazil Cashback"
            className="h-20 p-2"
          />
          </a>
          {/* Barra de navegação */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-800 hover:text-black">
              Explorar
            </a>
            <a href="#" className="text-gray-800 hover:text-black">
              Indique 3 e ganhe R$ 1000
            </a>
            {/* Barra de busca */}
            <div className="flex items-center gap-2 bg-gray-100 px-10 py-2 rounded-md">
              <i className="fas fa-search text-gray-500"></i>
              <input
                type="text"
                placeholder="O que você procura?"
                className="bg-transparent outline-none text-sm"
              />
            </div>
            <a href="#" className="text-gray-800 hover:text-black">
              BCB Pro
            </a>
            <a href="#" className="text-gray-800 hover:text-black">
              Saldo: R$04,27
            </a>
            
            <div>
              <p>Olá Marcelo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Carrossel principal */}
      <div className="mt-4 p-16">
        <div className="relative w-full h-[350px] bg-gray-200 rounded-lg overflow-hidden shadow-md">
          <img
            src={banner1}
            alt="Banner principal"
            className="w-full h-96"
          />
          <div className="absolute bottom-4 right-4 bg-white rounded-lg px-4 py-2 shadow-lg">
            <h2 className="text-lg font-semibold">
              2% de cashback na Masi Lentes!
            </h2>
            <button className="mt-2 bg-[#008000] text-white px-4 py-1 rounded-md hover:bg-gray-800">
              Eu quero
            </button>
          </div>
        </div>
      </div>

      {/* Categorias */}
      <section className="mt-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Categorias</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "Celulares e Smartphones",
            "Loja de Departamentos",
            "Viagem e Turismo",
            "Esporte",
            "Eletrônicos e Tecnologia",
            "Moda e Acessórios",
            "Eletrodomésticos",
            "Saúde",
            "Livros",
            "Móveis, Casa e Decoração",
            "Informática",
            "Assinaturas e Serviços",
            "Cursos",
            "Automotivo",
            "Bebês e Crianças",
            "Beleza e Saúde",
            "Pet Shop",
            "Alimentos e Bebidas",
            "Apostas",
            "Seguros e Finanças",
            "Indique e Ganhe",
            "Todos os Cupons",
            "Todas as Lojas",
          ].map((category, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-gray-700 hover:text-black"
            >
              <span className="w-5 h-5 bg-gray-300 rounded-full"></span>
              <span>{category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Top Cupons e Ofertas da Semana */}
      <section className="mt-8 px-4">
        <h2 className="text-2xl font-bold mb-6">Top cupons e ofertas da semana</h2>
        <div className="flex overflow-x-scroll gap-4 pb-4 scrollbar-hidden">
          {[
            { loja: "Amazon BR", desconto: "10% de volta" },
            { loja: "Mercado Livre", desconto: "15% de volta" },
            { loja: "iFood", desconto: "25% de volta" },
            { loja: "Carrefour", desconto: "5% de volta" },
            { loja: "Magazine Luiza", desconto: "8% de volta" },
            { loja: "Zé Delivery", desconto: "10% de volta" },
          ].map((cupom, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white rounded-lg shadow-md p-4 flex-shrink-0"
            >
              <div className="h-20 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                <span className="text-gray-500">{cupom.loja}</span>
              </div>
              <h3 className="text-sm font-semibold">{cupom.loja}</h3>
              <p className="text-sm text-gray-500">Cupom com até {cupom.desconto}</p>
              <p className="text-sm text-green-500 font-bold mt-2">
                Até {cupom.desconto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Novas Lojas Parceiras */}
      <section className="mt-8 px-4">
        <h2 className="text-2xl font-bold mb-6">Novas lojas parceiras</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { nome: "Madecode Brazil", cashback: "3% de volta" },
            { nome: "Outlet Passagens", cashback: "2% de volta" },
            { nome: "Clube Giro", cashback: "1,5% de volta" },
            { nome: "Dr. JONES", cashback: "3% de volta" },
            { nome: "Cogna Educação", cashback: "R$25 de volta" },
          ].map((loja, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-md p-4"
            >
              <div className="h-12 w-12 bg-gray-200 rounded-full mb-2 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Logo</span>
              </div>
              <p className="text-sm font-semibold text-gray-700">{loja.nome}</p>
              <p className="text-sm text-green-500">{loja.cashback}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer className="mt-12 bg-[#008000] text-white py-4 text-center">
        <p className="text-white">© 2024 Méliuz - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
