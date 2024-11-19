// Entrar.jsx
import React from 'react';
import logoBrazilCashback from '../assets/BC-Verde.png';
import Financeiro from '/public/Finance.svg';

function Login() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Logo visível em todas as telas */}
      <div className="flex items-center justify-between w-full mt-6 lg:fixed lg:top-0 lg:left-2 lg:w-1/2 lg:mt-12">
      <div className="absolute top-0 left-0 w-full p-4 flex justify-center lg:justify-start">
                <a href="/">
                    <img src={logoBrazilCashback} alt="Logo Brazil Cashback" className="h-16" />
                </a>
            </div>
      </div>

      {/* Espaço para compensar o header fixo em telas grandes */}
      <div className="pt-16 lg:hidden"></div>

      {/* Lado esquerdo com a imagem de ilustração (somente em telas grandes) */}
      <div className="hidden lg:flex lg:flex-col lg:w-1/2 items-center justify-center p-14">
        <div className="w-3/4 h-96 flex items-center justify-center">
          <p>
            <img src={Financeiro} alt="Moça economizando com moedas" className='h-80'/>
          </p>
        </div>
      </div>

      {/* Lado direito com o formulário */}
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-4 lg:p-6">
        {/* Formulário de login com fundo transparente */}
        <div className="rounded-3xl shadow-lg w-full max-w-md p-6">
          <form className="space-y-4 lg:space-y-6">
            <div>
              <h1 className='text-center m-10 pb-2'>Entrar</h1>
              <label htmlFor="email" className="block text-sm font-medium">Email ou CPF</label>
              <input
                type="email"
                id="email"
                className="bg-transparent mt-1 block w-full px-3 py-2 border border-[#008000] rounded-md shadow-sm focus:border-[#008492] sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">Senha</label>
              <input
                type="password"
                id="password"
                // #f8c40f
                className="bg-transparent mt-1 block w-full px-3 py-2 border border-[#008000] rounded-md shadow-sm focus:ring-[#008492] focus:border-[#008492] sm:text-sm"
                required
              />
            </div>

            {/* Opções extras */}
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-2 lg:space-y-0">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="h-4 w-4 text-[#008492] border-gray-300 rounded focus:bg-[#008000]" />
                <span className="ml-2 text-[#008000]">Permanecer conectado</span>
              </label>
              <a href="/esqueci-senha" className="text-sm text-[#008000]">Esqueci a senha</a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#008000] text-white rounded-lg py-2 px-4 mt-4 hover:bg-[#0c500c] focus:outline-none focus:ring-2 focus:ring-[#008492] focus:ring-opacity-50"
            >
              Entrar
            </button>

            <div className="text-center mt-4">
              <a href="/cadastro" className="text-sm text-[#c1ff72]">Não tem uma conta? Cadastre-se</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
