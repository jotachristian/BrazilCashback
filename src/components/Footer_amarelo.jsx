import React from 'react';
import logoBrazilCashbackW from '../assets/bc-logo-white.png';
import AppStore from '../assets/app-store-app.png';
import GooglePlay from '../assets/google-play-store-app.png';
import FacebookLogo from '../assets/Facebook_Logo_Secondary.png';
import WhatsappLogo from '../assets/Digital_Glyph_White.png';
import InstagramLogo from '../assets/Instagram_Glyph_White.png';
import YoutubeLogo from '../assets/youtube-app-white-icon.png';

function FooterAmarelo() {
  return (
    <footer className="bg-yellow-400 py-10 text-black">
      <div className="container mx-auto px-4">
        {/* Parte superior do footer com colunas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm md:text-base pb-8 border-b border-gray-300">
          {/* Coluna 1 - Sobre nós */}
          <div>
            <h3 className="font-bold mb-4">Sobre nós</h3>
            <ul>
              <li><a href="/quem_somos" className="hover:underline">Quem Somos</a></li>
              <li><a href="/termos_de_servico" className="hover:underline">Termos de Serviço</a></li>
              <li><a href="/politica_de_privacidade" className="hover:underline">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Coluna 2 - Para Empresas */}
          <div>
            <h3 className="font-bold mb-4">Para Empresas</h3>
            <ul>
              <li><a href="/para_empresas" className="hover:underline">Como funciona para empresas</a></li>
              <li><a href="/parcerias" className="hover:underline">Parcerias</a></li>
              <li><a href="/fale_conosco" className="hover:underline">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Coluna 3 - Recursos */}
          <div>
            <h3 className="font-bold mb-4">Recursos</h3>
            <ul>
              <li><a href="/lojas_parceiras" className="hover:underline">Lojas Parceiras</a></li>
              <li><a href="/indique_e_ganhe" className="hover:underline">Indique e Ganhe</a></li>
              <li><a href="/melhores_cupons" className="hover:underline">Melhores Cupons</a></li>
            </ul>
          </div>

          {/* Coluna 4 - Parcerias para Empresas */}
          <div>
            <h3 className="font-bold mb-4">Parcerias</h3>
            <p className="text-sm text-black mb-4">
              Quer fidelizar clientes com cashback? Conheça nossa solução para empresas.
            </p>
            <a href="/para_empresas">
              <button className="bg-transparent border-2 border-black text-black py-2 px-4 rounded hover:bg-black hover:text-white transition-all">
                Saiba mais
              </button>
            </a>
          </div>
        </div>

        {/* Parte inferior do footer com redes sociais e logotipos */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <img src={logoBrazilCashbackW} alt="Brazil Cashback" className="h-16" />
          </div>

          <div className="DownloadApp flex space-x-4">
            <a href="https://www.apple.com/br/search/Brazil-Cashback?src=globalnav" target="_blank" rel="noopener noreferrer">
              <img src={AppStore} alt="App Store" className="h-12" />
            </a>
            <a href="https://play.google.com/store/search?q=Brazil%20Cashback&c=apps&hl=pt_BR" target="_blank" rel="noopener noreferrer">
              <img src={GooglePlay} alt="Google Play" className="h-12" />
            </a>
          </div>

          <div className="SocialMedia flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black">
              <img src={FacebookLogo} alt="Facebook Icon" className="h-10" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B5586995016565&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-black">
              <img src={WhatsappLogo} alt="WhatsApp Icon" className="h-10" />
            </a>
            <a href="https://www.instagram.com/madecodebrazil/" target="_blank" rel="noopener noreferrer" className="text-black">
              <img src={InstagramLogo} alt="Instagram Icon" className="h-10" />
            </a>
            <a href="https://www.youtube.com/results?search_query=Brazil+Cashback" target="_blank" rel="noopener noreferrer" className="text-black">
              <img src={YoutubeLogo} alt="YouTube Icon" className="h-10" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterAmarelo;
