// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import Gestao2 from '../assets/icon-gestao-y.gif';
import Madecode from '../assets/madecode.png'
import Ganheclicando from '../assets/winClick.svg';
import Descontoloja from '../assets/discountLoja.svg';
import Cashbacksust from '../assets/cashback.svg';
import Convidaramigo from '../assets/inviteFriend.svg';
import logoBrazilCashbackW from '../assets/bc-logo-white.png';
import cashbackSimples from '../assets/sacola.svg';
import recebaCashback from '../assets/receberCash.svg';
import useSeuCashback from '../assets/wallet.svg';
import AppStore from '../assets/app-store-app.png';
import GooglePlay from '../assets/google-play-store-app.png';
import FacebookLogo from '../assets/Facebook_Logo_Secondary.png';
import WhatsappLogo from '../assets/Digital_Glyph_White.png';
import InstagramLogo from '../assets/Instagram_Glyph_White.png';
import YoutubeLogo from '../assets/youtube-app-white-icon.png';

function para_empresas() {
  const [showBackButton, setShowBackButton] = useState(false);
  const couponsRef = useRef(null);

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
      {/* Topo do Site - Principal */}
      {/* Topo do Site - Principal */}
      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-7 reveal md:bg-gradient-teste2">
        <div className="md:w-1/2 w-full text-center md:text-left justify-center p-6 mx-auto md:mx-32 reveal-left">
          <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left mb-6 mt-32 md:mt-20">
            Gerencie o Cashback para seus clientes
          </h1>
          <p className="text-base leading-relaxed">
            Comece a bonificar seus compradores com um percentual financeiro e consiga mais vendas no seus pequenos e grandes negócios
          </p>
          <div className="flex gap-3 mt-4">
            <a href="/testeagora">
              <button className="bg-[#ffcc00] text-white py-2 px-1 md:px-2 rounded-lg">CADASTRAR</button>
            </a>
            <a href="/contato">
              <button className="border-2 border-[#ffcc00] text-[#ffcc00] py-2 px-1 md:px-2 rounded-lg bg-transparent">NOSSOS PLANOS</button>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center md:mt-0 mx-15 reveal-right">
          <img src={Gestao2} alt="Boneco-mexendo-em-arquivos" className="max-w-96 h-auto mt-10" />
        </div>
      </div>


      {/* Sessão com o Vídeo sobre o Brazil Cashback */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Coluna do Vídeo */}
          <div className="w-full md:w-1/2 lg:w-5/12">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/ENxwrvMD5VI?si=sl626no-vFODhXAd"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>

          {/* Coluna de Texto */}
          <div className="w-full md:w-1/2 lg:w-7/12 p-12">
            <h2 className="text-4xl font-bold text-[#ffcc00] mb-6">Entenda como o Cashback funciona</h2>
            <p className="text-gray-800 text-base leading-relaxed">
              Imagine ganhar dinheiro de volta toda vez que faz uma compra. Com o Brazil Cashback, você transforma suas compras do dia a dia em oportunidades de economizar e receber recompensas incríveis. É simples: quanto mais você usa, mais você recebe. Confira no vídeo como aproveitar ao máximo essa vantagem!
            </p>
          </div>
        </div>
      </section>


      {/* Seção de benefícios */}
      <div className="reveal">
        <h2 className="text-2xl text-center p-28 font-bold text-[#ffcc00]">Porque um sistema de Cashback ajuda sua empresa?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 p-20 reveal">
          <div className="flex flex-col items-start reveal-left">
            <img src={Ganheclicando} alt="Exame escaneado no Tablet" className="mb-2 w-16" />
            <h4 className="font-bold mb-2 text-[#ffcc00]">Fácil de usar</h4>
            <p>Cadastre-se, escolha sua loja favorita e receba cashback com poucos cliques. Sem mistério, só economia!</p>
          </div>
          <div className="flex flex-col items-start reveal">
            <img src={Descontoloja} alt="Enfileiramento de itens" className="mb-2 w-16" />
            <h4 className="font-bold mb-2 text-[#ffcc00]">Descontos Exclusivos</h4>
            <p>Aproveite ofertas em marcas populares, de moda a eletrônicos, e economize mais com cashback especial!</p>
          </div>
          <div className="flex flex-col items-start reveal">
            <img src={Cashbacksust} alt="Relógio" className="mb-2 w-16" />
            <h4 className="font-bold mb-2 text-[#ffcc00]">Dinheiro de Volta Rápido e Seguro</h4>
            <p>Acumule cashback e retire seus ganhos de forma fácil e segura.</p>
          </div>
          <div className="flex flex-col items-start reveal-right">
            <img src={Convidaramigo} alt="Agenda" className="mb-2 w-16" />
            <h4 className="font-bold mb-2 text-[#ffcc00]">Ganhe Indicações e Potencialize o Cashback</h4>
            <p>Convide amigos e receba bônus em suas economias! Quanto mais amigos, maior seu saldo.</p>
          </div>
        </div>
      </div>

      {/* Sessão de Cupons */}
      <section className="bg-[#FFEB3B] py-10">
        <h2 className="text-2xl text-center font-bold text-black">Economize com Cupons</h2>
        <div className="relative">
          {showBackButton && (
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#008000] text-white p-3 rounded-full shadow-md hover:bg-[#33a133] text-2xl"
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
              { logo: "Logo", empresa: "Madecode Brazil", desconto: "10% OFF", descricao: "Primeira Compra usando o Brazil Cashback" },
              { logo: "Logo", empresa: "Qr Cook", desconto: "15% OFF", descricao: "Aproveite o desconto em produtos selecionados" },
              { logo: "Logo", empresa: "Empresa 3", desconto: "20% OFF", descricao: "Desconto exclusivo em compras acima de R$100" },
              { logo: "Logo", empresa: "Empresa 4", desconto: "25% OFF", descricao: "Desconto especial para novas compras" },
              { logo: "Logo", empresa: "Empresa 5", desconto: "30% OFF", descricao: "Desconto em categorias selecionadas" },
              { logo: "Logo", empresa: "Empresa 6", desconto: "5% OFF", descricao: "Desconto em compras acima de R$50" },
              { logo: "Logo", empresa: "Empresa 7", desconto: "50% OFF", descricao: "Desconto para compras de fim de ano" },
              { logo: "Logo", empresa: "Empresa 8", desconto: "15% OFF", descricao: "Desconto especial para clientes fidelidade" },
            ].map((cupom, index) => (
              <div
                key={index}
                className="flex flex-col items-start bg-white border-2 border-gray-400 rounded-lg p-6 shadow-md min-w-[250px]"
              >
                <img src={Madecode} alt={`${cupom.empresa} Logo`} className="h-16 mb-4" />
                <h3 className="text-sm font-semibold text-gray-800">{cupom.empresa}</h3>
                <h4 className="text-xl font-bold text-[#ffcc00] my-2">{cupom.desconto}</h4>
                <p className="text-gray-700 text-sm">{cupom.descricao}</p>
                <button className="mt-4 bg-transparent text-[#008000] border-[#008000] py-2 px-4 rounded-md">Pegar Cupom</button>
              </div>
            ))}
          </div>

          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#008000] text-white p-3 rounded-full shadow-md hover:bg-[#33a133] text-2xl"
            onClick={scrollRight}
          >
            &#8250;
          </button>
        </div>
      </section>

      {/* Seção de depoimentos */}
      <h2 className="text-2xl text-center my-16 mt-20 font-bold text-[#008000]">Quem usa o Brazil Cashback?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-20 sm:p-10">
        {[
          {
            name: "Ana Oliveira",
            review: "Não sei mais comprar sem dar uma espiadinha antes no site do Cashback! Foi amor no primeiro cashback."
          },
          {
            name: "Bruno Santos",
            review: "O Cashback é fundamental para eu fechar uma compra e com a grana do cashback dá para pagar aquele boleto."
          },
          {
            name: "Carla Lima",
            review: "Cara eu AMO fazer compras online e usar o Cashback, é tão legal depois você olhar o app e do nada ter uns dinheirinhos na carteira."
          },
          {
            name: "Diego Costa",
            review: "Amo poder comprar usando os descontos e benefícios que o Cashback me proporciona. Um dia estava sem dinheiro, acessei e tinha um dinheirinho para ser resgatado."
          },
        ].map((user, index) => (
          <div key={index} className="flex flex-col items-start p-6 border rounded-lg shadow-md">
            {/* Círculo de imagem vazio */}
            <div className="w-12 h-12 rounded-full border border-[#ffcc00] mb-4 flex-shrink-0"></div>

            {/* Texto do depoimento */}
            <p className="italic text-lg mb-4">{`"${user.review}"`}</p>

            {/* Nome do usuário */}
            <p className="text-[#ffcc00] font-bold">— {user.name}</p>
          </div>
        ))}
      </div>


      {/* Seção explicativa de como funciona */}
      <h2 className="text-2xl text-center mt-20 font-bold reveal text-[#008000] p-20">Ganhe cashback de maneira simples</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 p-20 reveal">
        {[
          { title: "Compre", description: "Escolha suas lojas e marcas favoritas e finalize sua compra.", image: cashbackSimples },
          { title: "Receba Cashback", description: "Parte do valor gasto retorna para você, e você pode escolher como usar", image: recebaCashback },
          { title: "Use seu Cashback", description: "Retire seu cashback na sua conta bancária ou use seu saldo como desconto na próxima compra", image: useSeuCashback },
        ].map((step, index) => (
          <div key={index} className="flex flex-col items-start border-4 border-[#ffcc00] rounded-xl p-10 reveal">
            <img src={step.image} alt={step.title} className="mb-10" />
            <h2 className="mb-6 font-bold text-xl">{step.title}</h2>
            <p className="text-lg">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Seção de Parceiros */}
      <section className="bg-white py-10 mt-10 mb-10">
        <h2 className="text-3xl text-center font-bold text-[#008000]">Nossos Parceiros</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
          <img src={Madecode} alt="Madecode" className="h-12" />
          <img src={Madecode} alt="QR Cook" className="h-12" />
          <img src={Madecode} alt="Parceiro 3" className="h-12" />
          {/* Adicione mais logos de parceiros, se necessário */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#ffcc00] py-10 text-white">
        <div className="container mx-auto px-4">
          {/* Parte superior do footer com colunas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm md:text-base pb-8 border-b border-white">
            {/* Coluna 1 - Sobre nós */}
            <div>
              <h3 className="font-bold mb-4">Sobre nós</h3>
              <ul>
                <li><a href="/quem-somos" className="text-[#008000]">Quem Somos</a></li>
                <li><a href="/blog" className="text-[#008000]">Blog</a></li>
                <li><a href="/investidores" className="text-[#008000]">Relações com Investidores</a></li>
                <li><a href="/termos" className="text-[#008000]">Termos de Uso e Privacidade</a></li>
              </ul>
            </div>

            {/* Coluna 2 - Para você */}
            <div>
              <h3 className="font-bold mb-4">Para você</h3>
              <ul>
                <li><a href="/como-funciona" className="text-[#008000] hover:">Como funciona</a></li>
                <li><a href="/extensao" className="text-[#008000]">Extensão de Browser</a></li>
                <li><a href="/lojas" className="text-[#008000]">Lojas online</a></li>
                <li><a href="/cartao" className="text-[#008000] ">Cartão de Crédito</a></li>
                <li><a href="/indique" className="text-[#008000]">Indique e Ganhe</a></li>
                <li><a href="/ajuda" className="text-[#008000]">Ajuda</a></li>
              </ul>
            </div>

            {/* Coluna 3 - Mais Cupons */}
            <div>
              <h3 className="font-bold mb-4">Mais Cupons</h3>
              <ul>
                <li><a href="/cupons-desconto" className="text-[#008000]">Como Usar Cupom de Desconto?</a></li>
                <li><a href="/black-friday" className="text-[#008000]">Black Friday 2024</a></li>
              </ul>
            </div>

            {/* Coluna 4 - Parcerias */}
            <div>
              <h3 className="font-bold mb-4">Parceria com Lojas</h3>
              <p className="text-sm text-gray-200 mb-4">Quer ajuda para fidelizar clientes com um programa de cashback? É para todos os modelos de negócio.</p>
              <button className="bg-transparent border-2 border-white text-white py-1 px-3 rounded hover:bg-[#ffcc00] hover:text-black">Saiba mais</button>
            </div>
          </div>

          {/* Parte inferior do footer com botões e redes sociais */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-8 space-y-4 md:space-y-0">
            <div className="flex flex-col items-center md:items-start">
              <img src={logoBrazilCashbackW} alt="Brazil Cashback" className='h-14' />
            </div>

            <div className="DownloadApp flex space-x-4">
              <a href="https://www.apple.com/br/search/Brazil-Cashback?src=globalnav" target='_blank'>
                <img src={AppStore} alt="App Store" className="h-12" />
              </a>
              <a href="https://play.google.com/store/search?q=Brazil%20Cashback&c=apps&hl=pt_BR" target='_Blank'>
                <img src={GooglePlay} alt="Google Play" className="h-12" />
              </a>
            </div>

            <div className="SocialMedia flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <img src={FacebookLogo} alt="Facebook Icon" className='h-10' />
              </a>

              <a href="https://api.whatsapp.com/send/?phone=%2B5586995016565&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-white">
                <img src={WhatsappLogo} alt="" className='h-10' /></a>

              <a href="https://www.instagram.com/madecodebrazil/" target="_blank" rel="noopener noreferrer" className="text-white">
                <img src={InstagramLogo} alt="" className='h-10' />
              </a>

              <a href="https://www.youtube.com/results?search_query=Brazil+Cashback" target="_blank" rel="noopener noreferrer" className="text-white">
                <img src={YoutubeLogo} alt="" className='h-10' />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default para_empresas;
