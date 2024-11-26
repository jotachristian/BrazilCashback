// src/pages/como-funciona.jsx
import React, { useState } from "react";

const ComoFunciona = () => {
  // Dados para a seção de etapas
  const steps = [
    {
      image: "path/to/image1.jpg",
      title: "Cadastre-se no sistema",
      description:
        "Faça seu cadastro para começar a acumular cashback em suas compras e aproveitar ofertas exclusivas.",
    },
    {
      image: "path/to/image2.jpg",
      title: "Acumule pontos a cada compra",
      description:
        "Ao realizar compras com nossos parceiros, você acumula pontos automaticamente na sua conta.",
    },
    {
      image: "path/to/image3.jpg",
      title: "Receba seu saldo de cashback",
      description:
        "Acompanhe o saldo de cashback disponível e faça o resgate para sua conta bancária quando desejar.",
    },
  ];

  // Dados para a seção de perguntas frequentes
  const faqs = [
    {
      question: "Como faço para me cadastrar no sistema de cashback?",
      answer:
        "Basta clicar no botão de cadastro e preencher os dados solicitados para começar a acumular cashback.",
    },
    {
      question: "Como posso resgatar meu saldo?",
      answer:
        "Você pode solicitar o resgate diretamente na sua conta, acessando a seção 'Saldo' e selecionando 'Resgatar'.",
    },
    {
      question: "Preciso pagar alguma taxa para usar o cashback?",
      answer:
        "Não, o uso do sistema de cashback é totalmente gratuito. Basta se cadastrar e começar a acumular.",
    },
  ];

  // Função para controlar a abertura das perguntas frequentes
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 mt-52">Como Funciona o Brazil Cashback</h1>

      {/* Seção explicativa com imagens */}
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center mb-8 md:mb-12 mt-28">
          <img src={step.image} alt={step.title} className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-6 rounded-lg" />
          <div className="text-center md:text-left md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 mt-10">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}

      {/* Seção de dúvidas frequentes */}
      <div className="mt-12 md:mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center  mb-6">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className=" border-green-200 py-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="bg-transparent flex justify-between w-full text-left font-semibold focus:outline-none"
              >
                {faq.question}
                <span>{openFAQ === index ? "-" : "+"}</span>
              </button>
              {openFAQ === index && <p className=" mt-2 text-gray-400">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default ComoFunciona;
