// src/App.jsx
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logoBrazilCashback from './assets/BC-verde.png';
import Sobre from './pages/como-funciona';
import Cadastro from './pages/cadastro';
import ParaEmpresas from './pages/para_empresas';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Entrar from './pages/Entrar';
import Privacidade from './pages/Privacidade';
import Termos from './pages/termos_de_servico';
import Footer from './components/Footer';
import TesteAgora from './pages/TesteAgora';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const updateTheme = () => {
      document.body.classList.toggle('dark-mode', window.matchMedia('(prefers-color-scheme: dark)').matches);
    };
    updateTheme();

    // Atualiza o tema ao mudar as preferências do sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateTheme);
    };
  }, []);

  // Bloqueio do scroll ao abrir o menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const showNavbar = location.pathname !== '/entrar' && location.pathname !== '/cadastro';
  const isEmpresaPage = location.pathname === '/para_empresas';

  return (
    <>
      {showNavbar && (
        <nav
          className={`${isEmpresaPage ? 'bg-transparent' : 'bg-transparent'} py-2 absolute top-0 left-0 w-full z-50 transition-colors duration-300 mt-2`}
        >
          <div className="flex justify-between items-center px-10 md:px-8">
            {/* Ícone do menu móvel à esquerda */}
            <div className="md:hidden flex justify-end">
              <div
                className={`space-y-1 cursor-pointer z-50 ${menuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
              >
                {/* Linha superior do menu */}
                <div
                  className={`block h-1 w-7 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''} bg-gray-800 dark:bg-white bg-opacity-75`}
                ></div>
                {/* Linha do meio do menu */}
                <div
                  className={`block h-1 w-7 transition-opacity ${menuOpen ? 'opacity-0' : ''} bg-gray-800 dark:bg-white bg-opacity-75`}
                ></div>
                {/* Linha inferior do menu */}
                <div
                  className={`block h-1 w-7 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''} bg-gray-800 dark:bg-white bg-opacity-75`}
                ></div>
              </div>
            </div>

            {/* Logo centralizada em móvel e à esquerda no desktop */}
            <div className="flex-grow flex justify-center md:justify-start">
              <a href={isEmpresaPage ? "/para_empresas" : "/"} className="flex">
                <img
                  src={isEmpresaPage ? logoBrazilCashback : logoBrazilCashback}
                  alt="Brazil Cashback"
                  className="h-16 w-15 mt-2 pr-4 md:pr-0 ml-0 md:ml-32"
                />
              </a>
            </div>

            {/* Menu desktop */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="/"
                className={`${isEmpresaPage ? 'hover:text-[#ffcc00]' : 'hover:text-[#008000]'} text-base px-3 pb-2 ${location.pathname === '/' ? 'border-b-2 dark:border-white border-black' : 'underline-animation'}`}
              >
                Para você
              </a>
              <a
                href="/para_empresas"
                className={`${isEmpresaPage ? 'hover:text-[#ffcc00]' : 'hover:text-[#008000]'} text-base px-3 pb-2 ${location.pathname === '/para_empresas' ? 'border-b-2 dark:border-white border-black' : 'underline-animation'}`}
              >
                Para sua Empresa
              </a>
              <a
                href="/cadastro"
                className={`underline-animation ${isEmpresaPage ? 'hover:text-[#ffcc00]' : 'hover:text-[#008000]'} text-base px-3 pb-2`}
              >
                Cadastrar-se
              </a>
              <a
                href="/entrar"
                className={`${isEmpresaPage ? 'bg-transparent hover:bg-[#008000] hover:text-white' : 'bg-transparent hover:bg-green-700 hover:text-black dark:hover:text-white'} text-base rounded-md px-4 py-1 mb-3 transition duration-300 border-2 border-black dark:border-white`}
              >
                Entrar
              </a>
            </div>

            {/* Menu móvel */}
            {menuOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-800 flex z-50">
                <div className="w-3/4 h-full flex flex-col pt-5 pl-4">
                  <div className="flex items-center mb-4 mt-4">
                    <button onClick={toggleMenu} className="text-lg text-[#008000] hover:text-[#006400] mb-2 p-2 border-2 border-[#008000] bg-transparent">
                      Voltar
                    </button>
                  </div>
                  <a href="/" className="text-[#008000] dark:text-gray-200 text-lg py-4 w-full" onClick={toggleMenu}>
                    Para você
                  </a>
                  <a href="/para_empresas" className="text-[#008000] dark:text-gray-200 text-lg py-4 w-full" onClick={toggleMenu}>
                    Para sua Empresa
                  </a>
                  <a href="/cadastro" className="text-[#008000] dark:text-gray-200 text-lg py-4 w-full" onClick={toggleMenu}>
                    Cadastre-se
                  </a>
                  <a href="/entrar" className="text-[#008000] dark:text-gray-200 text-lg my-4 w-full" onClick={toggleMenu}>
                    Entrar
                  </a>
                </div>
                <div className="w-1/4 h-full bg-transparent/70" onClick={toggleMenu}></div>
              </div>
            )}
          </div>
        </nav>
      )}

      {/* Rotas do Aplicativo */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/para_empresas" element={<ParaEmpresas />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/testeagora" element={<TesteAgora />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
