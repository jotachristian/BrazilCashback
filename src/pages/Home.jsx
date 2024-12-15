// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import ScrollReveal from "scrollreveal";
import Carousel from "../components/SponsorCarousel";
import Gestao from "../assets/icon-gestao.gif";
import Madecode from "../assets/madecode.png";
import Facilidade from "../assets/Beneficios_clientes/facilidade.svg";
import Descontos from "../assets/Beneficios_clientes/descontos.svg";
import dinheiroDeVolta from "../assets/Beneficios_clientes/dinheiro_de_volta.svg";
import Indique from "../assets/Beneficios_clientes/Indique.svg";
import cashbackSimples from "../assets/sacola.svg";
import recebaCashback from "../assets/receberCash.svg";
import useSeuCashback from "../assets/wallet.svg";

function Home() {
  function copiarCupom(texto) {
    navigator.clipboard
      .writeText(texto)
      .then(() => {
        // Adicionar a classe 'copied' ao botão
        const botaoCupom = document.querySelector(
          `button[data-cupom="${texto}"]`
        );
        botaoCupom.classList.add("copied");

        // Remover a classe após 2 segundos
        setTimeout(() => {
          botaoCupom.classList.remove("copied");
        }, 2000);
      })
      .catch((err) => {
        console.error("Falha ao copiar o cupom:", err);
      });
  }
  const [showBackButton, setShowBackButton] = useState(false);
  const couponsRef = useRef(null);

  const scrollLeft = () => {
    if (couponsRef.current) {
      couponsRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
      setShowBackButton(couponsRef.current.scrollLeft > 0);
    }
  };

  const scrollRight = () => {
    if (couponsRef.current) {
      couponsRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
      setShowBackButton(true);
    }
  };

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1000,
      delay: 200,
      reset: false,
    });

    sr.reveal(".reveal", { origin: "bottom" });
    sr.reveal(".reveal-left", { origin: "left" });
    sr.reveal(".reveal-right", { origin: "right" });
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-4 reveal lg:bg-gradient-teste">
        <div className="md:w-1/2 w-full text-center md:text-left justify-center p-6 mx-auto md:mx-32 reveal-left">
          <h1 className="text-3xl font-semibold mb-6 mt-32 md:mt-20">
            Economize com <br /> dinheiro de volta <br /> em suas compras
          </h1>
          <p className="text-lg md:text-base leading-relaxed text-justify p-2 md:p-0 md:text-left mb-6">
            Descubra uma maneira simples e segura de economizar: receba cashback
            em suas lojas favoritas, acumule pontos exclusivos e aproveite
            cupons de desconto incríveis. Tudo isso ao alcance de um clique!
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="/saiba_mais">
              <button className="border-2 border-[#008000] bg-[#008000] text-white py-2 px-4 rounded-lg">
                Saiba mais
              </button>
            </a>
            <a href="/cadastro">
              <button className="border-2 border-[#008000] text-[#008000] py-2 px-4 rounded-lg bg-transparent">
                Crie sua conta
              </button>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center md:mt-0 mx-15">
          <img
            src={Gestao}
            alt="Boneco-mexendo-em-arquivos"
            className="max-w-96 h-auto mt-10"
          />
        </div>
      </div>

      {/* Sessão com o Vídeo sobre o Brazil Cashback */}
      <section className="py-12 p:2 md:p-20 mt-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Coluna do Vídeo */}
          <div className="w-full md:w-1/2 lg:w-5/12">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/uFIBpQWJ7To?si=e5rPVXtLpwv1xvyX"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>

          {/* Coluna de Texto */}
          <div className="w-full md:w-1/2 lg:w-7/12 p-2 md:p-10">
            <h2 className="text-3xl mb-8 text-center md:text-left font-semibold">
              Entenda como o Cashback funciona
            </h2>
            <p className="text-base leading-relaxed text-left">
              Imagine ganhar dinheiro de volta toda vez que faz uma compra. Com
              o Brazil Cashback, você transforma suas compras do dia a dia em
              oportunidades de economizar e receber recompensas incríveis. É
              simples: quanto mais você usa, mais você recebe. Confira no vídeo
              como aproveitar ao máximo essa vantagem!
            </p>
          </div>
        </div>
      </section>

      {/* Seção de benefícios */}
      <div className="reveal mt-20 text-center">
        <h2 className="text-3xl text-center mb-8 font-semibold">
          Melhores benefícios para Clientes BCB{" "}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 p-8 md:p-20 reveal">
          <div className="flex flex-col items-center reveal-left">
            <img
              src={Facilidade}
              alt="Exame escaneado no Tablet"
              className="mb-2 h-20"
            />
            <h4 className="font-bold mb-2 text-center">Fácil de usar</h4>
            <p>
              Cadastre-se, escolha sua loja favorita e receba cashback com
              poucos cliques. Sem mistério, só economia!
            </p>
          </div>
          <div className="text-center flex flex-col items-center reveal">
            <img
              src={Descontos}
              alt="Enfileiramento de itens"
              className="mb-2 h-20"
            />
            <h4 className="font-bold mb-2">Descontos Exclusivos</h4>
            <p>
              Aproveite ofertas em marcas populares, de moda a eletrônicos, e
              economize mais com cashback especial!
            </p>
          </div>
          <div className="flex flex-col items-center reveal">
            <img src={dinheiroDeVolta} alt="Relógio" className="mb-2 h-20" />
            <h4 className="font-bold mb-2">
              Dinheiro de Volta Rápido e Seguro
            </h4>
            <p>
              Acumule cashback e retire seus ganhos de forma fácil e segura.
            </p>
          </div>
          <div className="flex flex-col items-center reveal-right">
            <img src={Indique} alt="Agenda" className="mb-2 h-20" />
            <h4 className="font-bold mb-2">
              Ganhe Indicações e Potencialize o Cashback
            </h4>
            <p>
              Convide amigos e receba bônus em suas economias! Quanto mais
              amigos, maior seu saldo.
            </p>
          </div>
        </div>
      </div>

      {/* Sessão de Cupons */}
      <section className="bg-[#4caf50] py-10 mt-20">
        <h2 className="text-3xl text-center text-white font-semibold">
          Melhores cupons para você economizar
        </h2>
        <div className="relative">
          {showBackButton && (
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#008000] text-white p-3 m-2 rounded-full shadow-md hover:bg-[#33a133] text-2xl"
              onClick={scrollLeft}
            >
              &#8249;
            </button>
          )}

          <div
            id="cupons-container"
            ref={couponsRef}
            className="flex overflow-x-none space-x-6 p-6"
          >
            {[
              {
                logo: "Logo",
                empresa: "Madecode Brazil",
                desconto: "MADE10%OFF",
                descricao: "Primeira Compra usando o Brazil Cashback",
              },
              {
                logo: "Logo",
                empresa: "Qr Cook",
                desconto: "QR15%OFF",
                descricao: "Aproveite o desconto em produtos selecionados",
              },
              {
                logo: "Logo",
                empresa: "Empresa 3",
                desconto: "EMPRESA20%OFF",
                descricao: "Desconto exclusivo em compras acima de R$100",
              },
              {
                logo: "Logo",
                empresa: "Empresa 4",
                desconto: "EMPRESA25%OFF",
                descricao: "Desconto especial para novas compras",
              },
              {
                logo: "Logo",
                empresa: "Empresa 5",
                desconto: "EMPRESA30%OFF",
                descricao: "Desconto em categorias selecionadas",
              },
              {
                logo: "Logo",
                empresa: "Empresa 6",
                desconto: "EMPRESA5%OFF",
                descricao: "Desconto em compras acima de R$50",
              },
              {
                logo: "Logo",
                empresa: "Empresa 7",
                desconto: "EMPRESA50%OFF",
                descricao: "Desconto para compras de fim de ano",
              },
              {
                logo: "Logo",
                empresa: "Empresa 8",
                desconto: "15% OFF",
                descricao: "Desconto especial para clientes fidelidade",
              },
            ].map((cupom, index) => (
              <div
                key={index}
                className="flex flex-col items-start bg-white border-2 border-gray-400 rounded-lg p-6 shadow-md min-w-[250px]"
              >
                <img
                  src={Madecode}
                  alt={`${cupom.empresa} Logo`}
                  className="h-16 mb-4"
                />
                <h3 className="text-sm font-semibold">{cupom.empresa}</h3>
                <h4 className="text-xl font-bold text-[#008000] my-2">
                  {cupom.desconto}
                </h4>
                <p className="text-gray-700 text-sm">{cupom.descricao}</p>
                <button
                  className="mt-4 bg-transparent text-[#008000] border-[#008000] py-2 px-4 rounded-md pegar-cupom"
                  data-cupom={cupom.desconto}
                  onClick={() => copiarCupom(cupom.desconto)}
                >
                  Pegar Cupom
                </button>
              </div>
            ))}
          </div>

          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#008000] text-white p-3 m-2 rounded-full shadow-md hover:bg-[#33a133] text-2xl"
            onClick={scrollRight}
          >
            &#8250;
          </button>
        </div>
      </section>

      {/* Seção de depoimentos */}
      <h2 className="text-3xl text-center my-16 mt-20 font-semibold ">
        Quem usa o Brazil Cashback?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-20">
        {[
          {
            name: "Juliana de Oliveira",
            review:
              "Não consigo mais comprar nada sem dar uma espiadinha antes no Brazil Cashback! Foi amor a primeira cash.",
          },
          {
            name: "Bruno Santos",
            review:
              "O Cashback é fundamental para eu fechar uma compra e com a grana do cashback dá para pagar aquele boleto.",
          },
          {
            name: "Carla Lima",
            review:
              "Cara eu AMO fazer compras online e usar o Cashback, é tão legal depois você olhar o app e do nada ter uns dinheirinhos na carteira e você ainda tem cupons de desconto.",
          },
          {
            name: "Diego Costa",
            review:
              "Amo poder comprar usando os descontos e benefícios que o Cashback me proporciona. Um dia estava sem dinheiro, acessei e tinha um dinheirinho para ser resgatado.",
          },
        ].map((user, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-6 border rounded-lg border-dashed shadow-md "
          >
            {/* Círculo de imagem vazio */}
            <div className="w-12 h-12 rounded-full border border-[#008000] mb-4 flex-shrink-0"></div>

            {/* Texto do depoimento */}
            <p className="italic text-lg mb-4">{`"${user.review}"`}</p>

            {/* Nome do usuário */}
            <p className="text-[#008000] font-bold">— {user.name}</p>
          </div>
        ))}
      </div>

      {/* Seção explicativa de como funciona */}
      <h2 className="text-3xl text-center mt-20 reveal p-4 md:p-20 font-semibold">
        Comece a receber de maneira simples
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 p-8 md:p-14 reveal">
        {[
          {
            title: "Compre",
            description:
              "Escolha suas lojas e marcas favoritas e finalize sua compra.",
            image: cashbackSimples,
          },
          {
            title: "Receba Cashback",
            description:
              "Parte do valor gasto retorna para você, e você pode escolher como usar",
            image: recebaCashback,
          },
          {
            title: "Use seu Cashback",
            description:
              "Retire seu cashback na sua conta bancária ou use seu saldo como desconto na próxima compra",
            image: useSeuCashback,
          },
        ].map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-start border-3 border-[#008000] rounded-xl p-6 reveal"
          >
            <img src={step.image} alt={step.title} className="mb-10" />
            <h2 className="mb-6 font-bold text-xl">{step.title}</h2>
            <p className="text-base">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Seção de Parceiros */}
      <Carousel />

      <Footer />
    </>
  );
}

export default Home;
