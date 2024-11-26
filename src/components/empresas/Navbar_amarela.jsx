import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logoBrazilCashback from '../../assets/BC-verde.png';

const NavbarAmarela = () => {
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

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateTheme);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const showNavbar = location.pathname !== '/entrar' && location.pathname !== '/cadastro';
  const isEmpresaPage = location.pathname === '/para_empresas';

  if (!showNavbar) return null;

  return (
    <nav
      className={`${isEmpresaPage ? 'bg-transparent' : 'bg-transparent'} py-2 absolute top-0 left-0 w-full z-50 transition-colors duration-300 mt-2`}
    >
      <div className="flex justify-between items-center px-10 md:px-8">
        {/* Menu sanduíche para dispositivos móveis */}
        <div className="md:hidden flex justify-end">
          <div
            className={`space-y-1 cursor-pointer z-50 ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <div
              className={`block h-1 w-7 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''} bg-gray-800 dark:bg-white bg-opacity-75`}
            ></div>
            <div
              className={`block h-1 w-7 transition-opacity ${menuOpen ? 'opacity-0' : ''} bg-gray-800 dark:bg-white bg-opacity-75`}
            ></div>
            <div
              className={`block h-1 w-7 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''} bg-gray-800 dark:bg-white bg-opacity-75`}
            ></div>
          </div>
        </div>

        {/* Logo */}
        <div className="flex-grow flex justify-center md:justify-start">
          <a href={isEmpresaPage ? "/para_empresas" : "/"} className="flex">
            <img
              src={logoBrazilCashback}
              alt="Brazil Cashback"
              className="h-16 w-15 mt-2 pr-4 md:pr-0 ml-0 md:ml-32"
            />
          </a>
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/" className="underline-animation text-base px-3 pb-2">Para você</a>
          <a href="/para_empresas" className="underline-animation text-base px-3 pb-2">Para sua Empresa</a>
          <a href="/cadastro_empresa" className="underline-animation text-base px-3 pb-2">Cadastrar-se</a>
          <a href="/entrar_empresa" className="text-base rounded-md px-4 py-1 transition duration-300">Entrar</a>
        </div>

        {/* Menu móvel */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-800 flex z-50">
            <div className="w-3/4 h-full flex flex-col pt-5 pl-4">
              <button onClick={toggleMenu} className="bg-transparent text-left text-lg text-gray-400 mb-2 p-2">Voltar</button>
              <a href="/" className="text-[#ffcc00] text-lg py-4 w-full" onClick={toggleMenu}>Para você</a>
              <a href="/para_empresas" className="text-[#ffcc00] text-lg py-4 w-full" onClick={toggleMenu}>Para sua Empresa</a>
              <a href="/cadastro_empresa" className="text-[#ffcc00] text-lg py-4 w-full" onClick={toggleMenu}>Cadastre-se</a>
              <a href="/entrar_empresas" className="text-[#ffcc00] text-lg my-4 w-full" onClick={toggleMenu}>Entrar</a>
            </div>
            <div className="w-1/4 h-full bg-transparent/70" onClick={toggleMenu}></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarAmarela;
