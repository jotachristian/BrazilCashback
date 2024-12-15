import React from 'react';
import Footer from '../../components/Footer';

const Parceiros = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-[#009000] text-white py-6">
        <div className="container mx-auto text-center mt-20">
          <h1 className="text-4xl font-bold">Lojas Parceiras</h1>
          <p className="text-lg mt-2 text-gray-200">Descubra como o Brazil Cashback beneficia nossos parceiros</p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4 md:px-8">
        <section className="mb-12 p-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Benefícios para Parceiros</h2>
          <p className="text-gray-700 text-lg mt-4 text-justify leading-relaxed p-6">
            Ao se tornar um parceiro do Brazil Cashback, sua loja se conecta a uma rede de consumidores engajados e
            prontos para economizar enquanto compram. Oferecemos suporte total para integrar nossa plataforma ao
            seu negócio, gerando mais fidelização, visibilidade e crescimento.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center mb-12 p-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Por que se tornar um parceiro?</h3>
            <ul className="list-disc pl-5 text-gray-700 mt-2">
              <li>Aumente suas vendas com clientes motivados a comprar</li>
              <li>Fidelize clientes através de recompensas atrativas</li>
              <li>Receba relatórios detalhados sobre o desempenho de suas campanhas</li>
              <li>Tenha suporte técnico e estratégico dedicado</li>
            </ul>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/500x300"
              alt="Parceiros do Brazil Cashback"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        <section className="bg-gray-200 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 text-center">Histórias de Sucesso</h3>
          <p className="text-gray-700 text-lg mt-4 text-center leading-relaxed">
            Conheça algumas das histórias de sucesso dos nossos parceiros que transformaram seus negócios com o Brazil Cashback.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-gray-800">Loja A</h4>
              <p className="text-gray-700 mt-2">
                "Desde que começamos a usar o Brazil Cashback, vimos um aumento significativo no fluxo de clientes
                e na fidelização. Foi um divisor de águas para nosso negócio."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-gray-800">Loja B</h4>
              <p className="text-gray-700 mt-2">
                "A parceria com o Brazil Cashback nos trouxe visibilidade e nos ajudou a atingir novos clientes
                de forma eficaz. Recomendo para qualquer negócio."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-gray-800">Loja C</h4>
              <p className="text-gray-700 mt-2">
                "O suporte e as ferramentas oferecidas pela plataforma são incríveis. Estamos mais organizados e
                nossos clientes adoram o cashback."
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-800">Junte-se a Nós!</h3>
          <p className="text-gray-700 text-lg mt-2">
            Não perca a oportunidade de fazer parte do Brazil Cashback. Vamos transformar o seu negócio juntos.
          </p>
          <button className="mt-4 px-6 py-3 bg-[#008000] text-white rounded-lg font-bold shadow-md hover:bg-green-700">
            Seja um Parceiro
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Parceiros;
