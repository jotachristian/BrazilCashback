import React from 'react';
import { ArrowUpRight, Wallet, Award, Gift } from 'lucide-react';

const CashbackExplanationPage = () => {
  return (
    <div className="min-h-screen p-6 mt-24">
      <div className="w-full mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#008000] text-white p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Como Funciona Nosso Cashback</h1>
          <p className="text-xl text-blue-100">Ganhe de volta enquanto você compra!</p>
        </div>

        {/* Cashback Steps */}
        <div className="grid md:grid-cols-3 gap-6 p-8">
          {/* Step 1 */}
          <div className="bg-green-50 p-6 rounded-xl text-center transform transition hover:scale-105">
            <Wallet className="mx-auto text-green-600 mb-4" size={64} />
            <h2 className="text-2xl font-semibold mb-3">Compre Normalmente</h2>
            <p className="text-gray-600">Faça suas compras como sempre fez. Não há mudanças no processo de compra.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-green-50 p-6 rounded-xl text-center transform transition hover:scale-105">
            <Award className="mx-auto text-blue-600 mb-4" size={64} />
            <h2 className="text-2xl font-semibold mb-3">Acumule Cashback</h2>
            <p className="text-gray-600">Ganhe uma porcentagem automática de volta em cada compra realizada.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-green-50 p-6 rounded-xl text-center transform transition hover:scale-105">
            <Gift className="mx-auto text-purple-600 mb-4" size={64} />
            <h2 className="text-2xl font-semibold mb-3">Resgate Seus Créditos</h2>
            <p className="text-gray-600">Utilize seus créditos de cashback em futuras compras ou saque.</p>
          </div>
        </div>

        {/* Cashback Details */}
        <div className="bg-green-100 p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Percentages */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-800">Nossos Percentuais</h3>
              <ul className="space-y-3">
                <li className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                  <span className="font-medium">Compras em Supermercados</span>
                  <span className="text-green-600 font-bold">3.5%</span>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                  <span className="font-medium">Restaurantes</span>
                  <span className="text-green-600 font-bold">2.5%</span>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                  <span className="font-medium">Combustível</span>
                  <span className="text-green-600 font-bold">1.5%</span>
                </li>
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-800">Benefícios Exclusivos</h3>
              <div className="bg-white p-6 rounded-xl space-y-4">
                <div className="flex items-center">
                  <ArrowUpRight className="text-green-600 mr-3" size={24} />
                  <span>Sem taxa de manutenção</span>
                </div>
                <div className="flex items-center">
                  <ArrowUpRight className="text-green-600 mr-3" size={24} />
                  <span>Cashback sem limite de valor</span>
                </div>
                <div className="flex items-center">
                  <ArrowUpRight className="text-green-600 mr-3" size={24} />
                  <span>Créditos válidos por 12 meses</span>
                </div>
                <div className="flex items-center">
                  <ArrowUpRight className="text-green-600 mr-3" size={24} />
                  <span>Resgate simples e rápido</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-green-500 text-white">
          <h2 className="text-3xl font-bold mb-4">Comece a Ganhar Agora!</h2>
          <p className="text-xl mb-6 text-gray-100">Não perca a oportunidade de recuperar dinheiro em suas compras.</p>
          <a href="/cadastro">
          <button className="bg-white text-green-700 px-8 py-3 rounded-full text-lg font-bold hover:bg-blue-100 transition">
            Cadastre-se Grátis
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CashbackExplanationPage;