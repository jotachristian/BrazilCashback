// src/pages/para_empresas.jsx
import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import NavbarAmarela from '../components/empresas/Navbar_amarela';
import Gestao2 from '../assets/icon-gestao-y.gif';
import Cadastre from '../assets/Etapas_empresa/cadastre.svg';
import Configure from '../assets/Etapas_empresa/configure.svg';
import Fidelize from '../assets/Etapas_empresa/fidelize.svg';
import CashbackChart from '../components/CashbackChart';
import Carousel from '../components/SponsorCarousel';
import Footer from '../components/empresas/Footer_amarelo';



function para_empresas() {
  const [showBackButton, setShowBackButton] = useState(false);
  const couponsRef = useRef(null);
  const [isAnnual, setIsAnnual] = useState(false);
  const prices = {
    lite: isAnnual ? 'R$1.260,00' : 'R$116,90',
    standard: isAnnual ? 'R$1.918,90' : 'R$161,90',
    plus: isAnnual ? 'R$2.698,80' : 'R$224,90',
  };

  const scrollLeft = () => {
    if (couponsRef.current) {
      couponsRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
      setShowBackButton(couponsRef.current.scrollLeft > 0);
    }
  };

  const scrollRight = () => {
    if (couponsRef.current) {
      couponsRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
      setShowBackButton(true);
    }
  };

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: false,
    });

    sr.reveal('.reveal', { origin: 'bottom' });
    sr.reveal('.reveal-left', { origin: 'left' });
    sr.reveal('.reveal-right', { origin: 'right' });
  }, []);

  return (
    <>
      {/* Hero Section - Principal */}
      <NavbarAmarela />
      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-2 reveal md:bg-gradient-teste2 mt-10 md:mt-0">
        <div className="md:w-1/2 w-full text-center md:text-left justify-center p-6 mx-auto md:mx-32 reveal-left mt-20">

          <h1 className="text-3xl  font-semibold text-center md:text-left p-2">
            Transforme clientes em fãs: Fidelize e aumente suas vendas com o Brazil Cashback.
          </h1>
          <p className="text-lg leading-relaxed text-justify tracking-tight md:text-left p-2">
            Ofereça cashback aos seus clientes e veja suas vendas crescerem, em uma solução simples, eficiente e personalizada para o seu negócio.
          </p>

          <div className="flex gap-3 mt-2 p-2">
            <a href="/testeagora">
              <button className="text-black md:text-base bg-[#ffcc00] rounded-lg py-2 px-4 hover:bg-yellow-500 hover:text-black hover:border-2 hover:border-black ">Cadastre sua empresa</button>
            </a>
            <a href="/contato">
              <button className="border-2 border-[#ffcc00] text-[#ffcc00] rounded-lg bg-transparent hover:border-black hover:border-2 py-2 px-2">Agendar demonstração</button>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center md:mt-0 mx-15 reveal-right">
          <img src={Gestao2} alt="Boneco-mexendo-em-arquivos" className="max-w-96 h-auto mt-10" />
        </div>
      </div>


      {/* Seção de benefícios */}
      <div className="reveal mt-14 mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10 p-2 reveal">
          <div className="flex flex-col items-center reveal-left">
            <img src={Cadastre} alt="Moeda que indica um cadastro" className="mb-2 h-20" />
            <h4 className="font-bold">Cadastre-se</h4>
            <p>Crie sua conta em menos de 5 minutos.</p>
          </div>
          <div className="flex flex-col items-center reveal">
            <img src={Configure} alt="Moeda que representa uma configuração de cashback" className="mb-2 h-20" />
            <h4 className="font-bold">Configure o Cashback</h4>
            <p className='text-center'>Escolha a porcentagem e comece a recompensar seus clientes.</p>
          </div>
          <div className="flex flex-col items-center reveal">
            <img src={Fidelize} alt="Moeda representando clientes fidelizados" className="mb-2 h-20" />
            <h4 className="font-bold mb-2">Fidelize Clientes</h4>
            <p className='text-center'>Veja seus clientes voltando<br />
             para gastar mais.</p>
          </div>
        </div>
      </div>

      {/* Sessão dos Valores da empresa */}
      <h1 className='text-3xl text-center mb-8'>Benefícios para empresas</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-16 m-0 md:m-12 w-full items-center justify-center">

        {/* Primeira Grid de Benefícios */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>

          {/* Primeira Caixa */}
          <div className="flex flex-col items-center text-center bg-gray-100 dark:bg-gray-900 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Fidelização de Clientes</h2>
            <p>Clientes que voltam mais vezes gastam até 50% a mais.</p>
          </div>

          {/* Segunda Caixa */}
          <div className="dark:bg-gray-900 flex flex-col items-center text-center bg-gray-100 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Aumento do Ticket Médio</h2>
            <p>Incentive compras maiores com cashback progressivo.</p>
          </div>

          {/* Terceira Caixa */}
          <div className="flex flex-col items-center text-center bg-yellow-400 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Relatórios Personalizados</h2>
            <p>Entenda seus clientes com relatórios detalhados.</p>
          </div>

          {/* Quarta Caixa */}
          <div className="dark:bg-gray-900 flex flex-col items-center text-center bg-gray-100 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Configuração Fácil</h2>
            <p>Pronto para uso em poucos minutos.</p>
          </div>

        </div>

        {/* Imagem (Ocupa toda a largura na linha inferior em telas pequenas) */}
        <div className="rounded-lg shadow-md h-[300px] md:h-[440px] flex items-center justify-center w-full p-4">
          <CashbackChart />

        </div>
        <p className='text-gray-400'>**Nossos parceiros aumentaram suas vendas em 30% em apenas 2 meses usando o Brazil Cashback</p>
      </section>

      {/* Sessão de Planos */}
      <section className="flex flex-col items-center justify-center min-h-screen p-10 mt-32">
        <div className="w-full max-w-7xl">
          <h2 className="text-3xl text-center mb-8">Planos e Preços</h2>

          {/* Alternância Mensal/Anual */}
          <div className="flex justify-center items-center mb-8">
            <span
              className={`mr-4 font-semibold ${!isAnnual ? 'text-black dark:text-white' : 'text-gray-500'
                }`}
            >
              Mensal
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={() => setIsAnnual(!isAnnual)} // Alterna estado
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-yellow-400"></div>
              <div className="absolute w-4 h-4 bg-white rounded-full transition-transform transform peer-checked:translate-x-5"></div>
            </label>
            <span
              className={`ml-4 font-semibold ${isAnnual ? 'text-black dark:text-white' : 'text-gray-500'
                }`}
            >
              Anual
            </span>
          </div>
          {/* Cards de Preços */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Plano Lite */}
            <div className="bg-white dark:bg-black border rounded-lg shadow-md p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-4">Lite</h3>
              <p className="text-gray-600 mb-4">Para pequenos negócios</p>
              <p className="text-4xl font-bold mb-6">
                {prices.lite}
                <span className="text-xl font-normal text-gray-600">
                  {isAnnual ? '/ano' : '/mês'}
                </span>
              </p>
              <ul class="mb-6 flex-grow">
                <li class="flex items-center mb-2">
                  <svg class="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  2.000 clientes
                </li>
                <li class="flex items-center mb-2">
                  <svg class="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Cashback fixo configurável.
                </li>
                <li class="flex items-center mb-2">
                  <svg class="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Relatórios básicos.
                </li>
                <li class="flex items-center mb-2">
                  <svg class="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Suporte via e-mail.
                </li>
              </ul>
              <a href="/cadastro_empresa">
              <button className="bg-[#ffcc00] rounded-md py-2 px-4 hover:bg-yellow-500 transition duration-300">
                Começar agora
              </button>
              </a>
            </div>

            {/* Plano Padrão */}
            <div className="bg-white dark:bg-black border rounded-lg shadow-md p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-4">Padrão</h3>
              <p className="text-gray-600 mb-4">Para empresas em ascensão</p>
              <p className="text-4xl font-bold mb-6">
                {prices.standard}
                <span className="text-xl font-normal text-gray-600">
                  {isAnnual ? '/ano' : '/mês'}
                </span>
              </p>
              <ul class="mb-6 flex-grow">
                <li class="flex items-center mb-2">
                  <svg class="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  +10.000 usuários
                </li>
                <li class="flex items-center mb-2">
                  <svg class="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Tudo do Lite
                </li>
                <li class="flex items-center mb-2">
                  <svg class="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  suporte dedicado
                </li>
                <li class="flex items-center mb-2">
                  <svg class="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  campanhas promocionais
                </li>
              </ul>
              <a href="/cadastro_empresa">
              <button className="bg-[#ffcc00] rounded-md py-2 px-4 hover:bg-yellow-500 transition duration-300">
                Começar agora
              </button>
              </a>
            </div>

            {/* Plano BCB Plus */}
            <div className="bg-white dark:bg-black rounded-lg shadow-md p-6 flex flex-col flex-1 border-2 border-[#ffcc00]">
              <h3 className="text-xl font-semibold mb-4">BCB Plus</h3>
              <p className="text-gray-600 mb-4">Para grandes empresas</p>
              <p className="text-4xl font-bold mb-6">
                {prices.plus}
                <span className="text-xl font-normal text-gray-600">
                  {isAnnual ? '/ano' : '/mês'}
                </span>
              </p>
              <ul class="mb-6 flex-grow">
                <li class="flex items-center mb-2">
                  <svg class="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  +60.000 clientes
                </li><li class="flex items-center mb-2">
                  <svg class="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Tudo do Básico e Padrão
                </li>
                <li class="flex items-center mb-2">
                  <svg class="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  + relatórios detalhados
                </li>
                <li class="flex items-center mb-2">
                  <svg class="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  integração avançada
                </li>
                <li class="flex items-center mb-2">
                  <svg class="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Recursos Avançados e Suporte 24h
                </li>
              </ul>
              <a href="/cadastro_empresa">
              <button className="bg-[#ffcc00] rounded-md py-2 px-4 hover:bg-yellow-500 transition duration-300">
                Começar agora
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center justify-center bg-transparent py-16">
          <h2 className="text-3xl mb-8">Depoimentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl px-4">
            {/* Depoimento 1 */}
            <div className="bg-white dark:bg-black shadow-lg rounded-lg p-6 border-2 border-[#ffcc00] border-dashed relative min-h-[250px] flex flex-col justify-between">
              <div className="absolute top-4 -left-4 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[20px] border-r-gray-400"></div>
              <p className="text-gray-600 dark:text-white mb-4">
                "Conheci o Brazil Cashback buscando na internet uma maneira de atrair mais leads para o meu modelo de negócios. Fiquei muito contente em encontrar um sistema que automatize e reduza meu trabalho."
              </p>
              <div className="flex items-center mt-4">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Eduardo"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Christian</h4>
                  <p className="text-sm text-gray-500">Equipe Madecode Brazil</p>
                </div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-white dark:bg-black shadow-lg rounded-lg p-6 border-2 border-[#ffcc00] border-dashed relative min-h-[250px] flex flex-col justify-between">
              <div className="absolute top-4 -left-4 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[20px] border-r-gray-400"></div>
              <p className="text-gray-600 dark:text-white mb-4">
                "Nossa parceria começou em 2018 quando tivemos a ideia de bonificar nossos clientes e precisavamos de uma solução simples que atendesse as necessidades individuais de cada negócio. Em minha opinião Brazil Cashback é um sucesso!"
              </p>
              <div className="flex items-center mt-4">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Elson Mota"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Marcelo</h4>
                  <p className="text-sm text-gray-500">Ótica Popular</p>
                </div>
              </div>
            </div>

            {/* Depoimento 3 */}
            <div className=" dark:bg-black bg-white shadow-lg rounded-lg p-6 border-2 border-[#ffcc00] border-dashed relative min-h-[250px] flex flex-col justify-between">
              <div className="absolute top-4 -left-4 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[20px] border-r-gray-400"></div>
              <p className="text-gray-600 dark:text-white mb-4">
                "Em 2024 nós começamos a usar a plataforma do Brazil Cashback e desde então estamos aumentando nossos cadastros, vendas e cuidando da satisfação dos nossos clientes."
              </p>
              <div className="flex items-center mt-4">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Willians"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Jorge</h4>
                  <p className="text-sm text-gray-500">QR Cook</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Seção de Parceiros */}
      <Carousel />
      <Footer />

    </>
  );
}

export default para_empresas;
