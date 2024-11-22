// Entrar.jsx
import React from 'react';
import logoBrazilCashback from '../assets/BC-verde.png';
import Economia from '../assets/Economy.svg';

function Login() {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Logo no topo */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-10 lg:top-10 lg:flex lg:justify-start flex justify-center w-full lg:w-auto">
                <a href="/">
                    <img
                        src={logoBrazilCashback}
                        alt="Logo Brazil Cashback"
                        className="h-16"
                    />
                </a>
            </div>

            {/* Coluna Esquerda */}
            <div className="hidden lg:flex flex-col items-center lg:items-start w-full lg:w-1/2 p-10 pt-44 lg:pl-20 lg:p-44">
                {/* <h1 className="text-4xl md:text-4xl font-bold mb-2 text-center lg:text-left">
                    Seja um cliente BCB
                </h1>
                <p className="text-lg mb-6 text-center lg:text-left">
                    E transforme suas compras em economia
                </p> */}
                <img src={Economia} alt="Porquinho Financeiro" className="w-full max-w-xs lg:max-w-none mt-4 pl-0 md:pl-8" />
            </div>

            {/* Coluna Direita (Formulário) */}
            <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-4 lg:p-10">
                <div className="w-full max-w-md p-6">
                    <form className="space-y-4">
                        {/* Campo Nome Completo */}
                        <div>
                            <h1 className="text-[30px] md:text-[40px] text-center p-10 mt-12 md:mt-0">
                                Crie a sua conta BCB
                            </h1>
                            <label htmlFor="nome" className="text-[#008000] block text-sm font-medium">
                                Nome Completo
                            </label>
                            <input
                                type="text"
                                id="nome"
                                className="bg-transparent mt-1 block w-full px-3 py-2 border-2 border-[#008000] rounded-md shadow-sm sm:text-sm"
                                required
                            />
                        </div>

                        {/* Campos adicionais permanecem iguais */}
                        <div>
                            <label htmlFor="cpf" className="text-[#008000] block text-sm font-medium">
                                CPF *
                            </label>
                            <input
                                type="text"
                                id="cpf"
                                className="bg-transparent mt-1 block w-full px-3 py-2 border-2 border-[#008000] rounded-md shadow-sm focus:ring-[#008492] focus:border-[#008492] sm:text-sm"
                                required
                            />
                        </div>

                        {/* Campo Telefone */}
                        <div>
                            <label htmlFor="telefone" className="text-[#008000] block text-sm font-medium">
                                Telefone
                            </label>
                            <input
                                type="tel"
                                id="telefone"
                                className="bg-transparent mt-1 block w-full px-3 py-2 border-2 border-[#008000] rounded-md shadow-sm focus:ring-[#008492] focus:border-[#008492] sm:text-sm"
                                required
                            />
                        </div>

                        {/* Campo Email */}
                        <div>
                            <label htmlFor="email" className="text-[#008000] block text-sm font-medium">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-transparent mt-1 block w-full px-3 py-2 border-2 border-[#008000] rounded-md shadow-sm focus:ring-[#008492] focus:border-[#008492] sm:text-sm"
                                required
                            />
                        </div>

                        {/* Campo Senha */}
                        <div>
                            <label htmlFor="password" className="text-[#008000] block text-sm font-medium">
                                Senha *
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="bg-transparent mt-1 block w-full px-3 py-2 border-2 border-[#008000] rounded-md shadow-sm focus:ring-[#008492] focus:border-[#008492] sm:text-sm"
                                required
                            />
                        </div>

                        {/* Campo Confirmação de Senha */}
                        <div>
                            <label htmlFor="confirmPassword" className="text-[#008000] block text-sm font-medium">
                                Confirmação de Senha
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="bg-transparent mt-1 block w-full px-3 py-2 border-2 border-[#008000] rounded-md shadow-sm focus:ring-[#008492] focus:border-[#008492] sm:text-sm"
                                required
                            />
                        </div>

                        {/* Checkbox Termos e Condições */}
                        <div className="flex items-center">
                            <input type="checkbox" id="termos" className="h-4 w-4 border-2 border-[#008000] rounded" required />
                            <label htmlFor="termos" className="ml-2 text-sm">
                                Eu aceito os <a href="/termos" className="text-[#c1ff72] underline">termos e condições</a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#008000] text-white rounded-lg py-2 px-4 mt-4 hover:bg-[#0c500c] focus:outline-none"
                        >
                            Criar Conta
                        </button>

                        <div className="text-center mt-4">
                            <a href="/entrar" className="text-sm text-[#c1ff72]">Já possui uma conta? Faça Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
