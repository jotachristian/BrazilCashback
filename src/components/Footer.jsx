import React from 'react';
import logoBrazilCashbackW from '../assets/bc-logo-white.png';
import AppStore from '../assets/app-store-app.png';
import GooglePlay from '../assets/google-play-store-app.png';
import FacebookLogo from '../assets/Facebook_Logo_Secondary.png';
import WhatsappLogo from '../assets/Digital_Glyph_White.png';
import InstagramLogo from '../assets/Instagram_Glyph_White.png';
import YoutubeLogo from '../assets/youtube-app-white-icon.png';


function Footer(){
    return(
        <>
        {/* Footer */}
      <footer className="bg-[#008000] py-10 text-white">
        <div className="container mx-auto px-4">
          {/* Parte superior do footer com colunas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm md:text-base pb-8 border-b border-gray-400">
            {/* Coluna 1 - Sobre nós */}
            <div>
              <h3 className="font-bold mb-4">Sobre nós</h3>
              <ul>
                <li><a href="/quem-somos" className="text-[#ffcc00]">Quem Somos</a></li>
                <li><a href="/termos" className="text-[#ffcc00]">Termos de Serviço</a></li>
                <li><a href="/termos" className="text-[#ffcc00]">Política de Privacidade</a></li>
              </ul>
            </div>

            {/* Coluna 2 - Para você */}
            <div>
              <h3 className="font-bold mb-4">Para você</h3>
              <ul>
                <li><a href="/como-funciona" className="text-[#ffcc00] hover:">Como funciona</a></li>
                <li><a href="/extensao" className="text-[#ffcc00]">Extensão de Browser</a></li>
                <li><a href="/lojas" className="text-[#ffcc00]">Lojas online</a></li>
                <li><a href="/cartao" className="text-[#ffcc00] ">Cartão de Crédito</a></li>
                <li><a href="/indique" className="text-[#ffcc00]">Indique e Ganhe</a></li>
                <li><a href="/ajuda" className="text-[#ffcc00]">Ajuda</a></li>
              </ul>
            </div>

            {/* Coluna 3 - Mais Cupons */}
            <div>
              <h3 className="font-bold mb-4">Mais Cupons</h3>
              <ul>
                <li><a href="/cupons-desconto" className="text-[#ffcc00]">Como Usar Cupom de Desconto?</a></li>
                <li><a href="/black-friday" className="text-[#ffcc00]">Black Friday 2024</a></li>
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
              <img src={logoBrazilCashbackW} alt="Brazil Cashback" className='h-16' />
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
                <img src={InstagramLogo} alt=""className='h-10'/>
              </a>

              <a href="https://www.youtube.com/results?search_query=Brazil+Cashback" target="_blank" rel="noopener noreferrer" className="text-white">
                <img src={YoutubeLogo} alt="" className='h-10'/>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
        </>
    )
}

export default Footer;