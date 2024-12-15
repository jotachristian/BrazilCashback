import React from 'react';
import Footer from '../../components/Footer';

const QuemSomos = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-[#009000] text-white py-6">
        <div className="container mx-auto text-center mt-20">
          <h1 className="text-4xl font-bold">Quem Somos</h1>
          <p className="text-lg mt-2 text-gray-200">Conheça nossa missão, visão e valores</p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4 md:px-8">
        <section className="mb-12 p-10">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Sobre a Madecode Brazil</h2>
          <p className="text-gray-700 text-lg mt-4 text-justify leading-relaxed">
            A Made Code Brazil é uma empresa de tecnologia especializada em desenvolvimento de soluções inovadoras
            para negócios. Com foco em transformação digital, criamos experiências únicas através de softwares
            personalizados e sistemas que otimizam processos e ampliam resultados. Nosso objetivo é simplificar
            a tecnologia para empoderar empresas e facilitar a vida das pessoas.
          </p>
        </section>

        <section className="mb-12 p-10">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Sobre o Brazil Cashback</h2>
          <p className="text-gray-700 text-lg mt-4 text-justify leading-relaxed">
            O Brazil Cashback nasceu para revolucionar a forma como empresas e consumidores interagem. Oferecemos
            uma plataforma prática e eficiente para gerenciar programas de cashback, promovendo economia para os
            clientes e fidelidade para os negócios. Nossa missão é criar um ecossistema sustentável, onde todos
            ganham.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Nossa Missão</h3>
            <p className="text-gray-700 text-lg mt-2 leading-relaxed">
              Capacitar empresas e consumidores com soluções tecnológicas inovadoras que gerem valor,
              conectando oportunidades e criando experiências memoráveis.
            </p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/500x300"
              alt="Tecnologia e Inovação"
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="order-last md:order-first">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Trabalho em equipe"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Nossos Valores</h3>
            <ul className="list-disc pl-5 text-gray-700 mt-2">
              <li>Inovação como força motriz</li>
              <li>Transparência em todas as ações</li>
              <li>Empoderamento de clientes e parceiros</li>
              <li>Compromisso com resultados sustentáveis</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QuemSomos;
