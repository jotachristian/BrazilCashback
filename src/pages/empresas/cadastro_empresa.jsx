import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import logoBrazilCashback from "../../assets/BC-verde.png";
import Economia from "../../assets/Economy.svg";

function CadastroEmpresa() {
  const navigate = useNavigate();

  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    razao_social: "",
    cnpj: "",
    email: "",
    senha: "",
    confirmar_senha: "",
    telefone: "",
    categoria_empresa: "",
  });

  // Estado para gerenciar erros de validação
  const [errors, setErrors] = useState({});

  // Função para atualizar o estado do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Função de validação básica
  const validateForm = () => {
    const newErrors = {};

    // Validações básicas
    if (!formData.razao_social)
      newErrors.razao_social = "A Razão Social é obrigatória";
    if (!formData.cnpj) newErrors.cnpj = "O CNPJ é obrigatório";
    if (!formData.email) newErrors.email = "O E-mail é obrigatório";
    if (!formData.senha) newErrors.senha = "A Senha é obrigatória";

    // Validação de confirmação de senha
    if (formData.senha !== formData.confirmar_senha) {
      newErrors.confirmar_senha = "As senhas não coincidem";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Função de submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const submitData = { ...formData };
    delete submitData.confirmar_senha;

    console.log("Dados enviados:", submitData);

    try {
      const response = await fetch(
        "http://localhost/Brazil_Cashback/view/backend/api/cadastro_empresa.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitData),
        }
      );

      const data = await response.json();
      console.log("Resposta do backend:", data);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      {/* Botão de Fechar (X) */}
      <button
        onClick={() => navigate("/")} // Redireciona para a página raiz
        className="absolute top-4 right-4 lg:top-14 lg:right-14 text-gray-600 hover:text-gray-800 text-3xl font-bold focus:outline-none flex items-center justify-center rounded-full bg-transparent transition"
      >
        <FontAwesomeIcon icon={faX}/>
      </button>

      {/* Logo no topo */}
      <div className="absolute top-14 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:top-10 lg:left-10 flex justify-center w-full lg:w-auto z-10">
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
        <img
          src={Economia}
          alt="Porquinho Financeiro"
          className="w-full max-w-xs lg:max-w-none mt-4 pl-0 md:pl-8"
        />
      </div>

      {/* Coluna Direita (Formulário) */}
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-4 lg:p-10">
        <div className="w-full max-w-md p-6">
          <h1 className="text-4xl p-6 text-center">Crie a sua conta</h1>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <input
              type="text"
              name="razao_social"
              value={formData.razao_social}
              onChange={handleChange}
              placeholder="Razão Social"
              className={`w-full p-2 border rounded-lg mb-2 ${
                errors.razao_social ? "border-red-500" : ""
              }`}
            />
            {errors.razao_social && (
              <p className="text-red-500 text-sm">{errors.razao_social}</p>
            )}

            <input
              type="text"
              name="cnpj"
              value={formData.cnpj}
              onChange={handleChange}
              placeholder="CNPJ"
              className={`w-full p-2 border rounded-lg mb-2 ${
                errors.cnpj ? "border-red-500" : ""
              }`}
            />
            {errors.cnpj && (
              <p className="text-red-500 text-sm">{errors.cnpj}</p>
            )}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              className={`w-full p-2 border rounded-lg mb-2 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              placeholder="Senha"
              className={`w-full p-2 border rounded-lg mb-2 ${
                errors.senha ? "border-red-500" : ""
              }`}
            />
            {errors.senha && (
              <p className="text-red-500 text-sm">{errors.senha}</p>
            )}

            <input
              type="password"
              name="confirmar_senha"
              value={formData.confirmar_senha}
              onChange={handleChange}
              placeholder="Confirmar Senha"
              className={`w-full p-2 border rounded-lg mb-2 ${
                errors.confirmar_senha ? "border-red-500" : ""
              }`}
            />
            {errors.confirmar_senha && (
              <p className="text-red-500 text-sm">{errors.confirmar_senha}</p>
            )}

            <input
              type="text"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="Telefone"
              className={`w-full p-2 border rounded-lg mb-2 ${
                errors.telefone ? "border-red-500" : ""
              }`}
            />
            {errors.telefone && (
              <p className="text-red-500 text-sm">{errors.telefone}</p>
            )}

            <input
              type="text"
              name="categoria_empresa"
              value={formData.categoria_empresa}
              onChange={handleChange}
              placeholder="Categoria da Empresa"
              className={`w-full p-2 border rounded-lg mb-2 ${
                errors.categoria_empresa ? "border-red-500" : ""
              }`}
            />
            {errors.categoria_empresa && (
              <p className="text-red-500 text-sm">{errors.categoria_empresa}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#ffcc00] text-white p-2 rounded-lg hover:bg-green-600"
            >
              Cadastrar Empresa
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CadastroEmpresa;
