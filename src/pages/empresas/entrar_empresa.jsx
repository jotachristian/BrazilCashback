import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoBrazilCashback from "../../assets/BC-verde.png";
import Economia from "../../assets/Economy2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function EntrarEmpresa() {
  const navigate = useNavigate();

  function copiarCupom(texto) {
    navigator.clipboard
      .writeText(texto)
      .then(() => {
        // Exibir uma animação ou mensagem de sucesso aqui
        console.log("Cupom copiado com sucesso!");
      })
      .catch((err) => {
        console.error("Falha ao copiar o cupom:", err);
      });
  }

  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  // Estado para gerenciar erros de validação
  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState("");

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
    if (!formData.email) newErrors.email = "O E-mail é obrigatório";
    if (!formData.senha) newErrors.senha = "A Senha é obrigatória";

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

    try {
      const response = await fetch(
        "http://localhost/Brazil_Cashback/view/backend/api/entrar_empresa.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setBackendError(data.message || "Erro ao realizar o login.");
        return;
      }

      console.log("Resposta do backend:", data);
      alert("Login realizado com sucesso!");
      navigate("/index_empresa"); // Redireciona para a página principal ou dashboard
    } catch (error) {
      console.error("Erro:", error);
      setBackendError(
        "Erro ao conectar ao servidor. Tente novamente mais tarde."
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      {/* Botão de Fechar (X) */}
      <button
        onClick={() => navigate("/")} // Redireciona para a página raiz
        className="absolute top-4 right-4 lg:top-6 lg:right-6 text-gray-600 hover:text-gray-800 text-2xl font-bold focus:outline-none w-20 h-20 flex items-center justify-center rounded-full bg-transparent transition"
      >
        <FontAwesomeIcon icon={faX} />
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
          <h1 className="text-4xl p-6 text-center hover:bg-yellow-500">Entrar</h1>

          {backendError && (
            <p className="text-red-500 text-sm mb-4">{backendError}</p>
          )}

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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

            <button
              type="submit"
              className="w-full bg-[#ffcc00] text-white p-2 rounded-lg hover:bg-green-600"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EntrarEmpresa;
