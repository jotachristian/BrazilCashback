import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import logoBrazilCashback from "../../assets/BC-verde.png";
import Economia from "../../assets/Economy2.svg";

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
    plano: "",
  });

  // Estado para gerenciar erros de validação
  const [errors, setErrors] = useState({});

  // Estado para controlar a etapa atual do registro
  const [step, setStep] = useState(1);

  // Estado para controlar a exibição da mensagem de sucesso
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevState) => ({ ...prevState, [name]: "" })); // Limpar erro ao digitar
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.razao_social) newErrors.razao_social = "A Razão Social é obrigatória";
    if (!formData.cnpj) newErrors.cnpj = "O CNPJ é obrigatório";
    if (!formData.email) newErrors.email = "O E-mail é obrigatório";
    if (!formData.senha) newErrors.senha = "A Senha é obrigatória";
    if (formData.senha !== formData.confirmar_senha)
      newErrors.confirmar_senha = "As senhas não coincidem";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const submitData = { ...formData };
    delete submitData.confirmar_senha;

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

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors({ global: "O Email ou CNPJ já existem. Verifique os dados e tente novamente." });
        }
      } else {
        setShowSuccess(true);
        setErrors({});
        setStep(3); // Avança para o passo 3
      }
    } catch (error) {
      console.error("Erro no cadastro:", error);
      setErrors({ global: "Erro ao conectar com o servidor. Tente novamente." });
    }
  };

  const nextStep = () => {
    if (step === 1 && !formData.plano) {
      setErrors({ plano: "Selecione um plano" });
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      <button onClick={() => navigate("/")} className="absolute top-4 right-4 text-gray-600 text-2xl bg-transparent p-14">
        <FontAwesomeIcon icon={faX} />
      </button>
      <div className="hidden md:flex w-1/2 justify-center items-center">
        <img src={Economia} alt="Economia" className="p-20" />
      </div>

      <div className="w-full lg:w-1/2 p-16">
        <div className="max-w-md mx-auto p-6">
          <h1 className="text-3xl mb-6 text-center">Crie a sua conta</h1>

          {step === 1 && (
            <div>
              <h2 className="text-2xl mb-4">Escolha o plano</h2>
              <label>
                <input
                  type="radio"
                  name="plano"
                  value="basic"
                  checked={formData.plano === "basic"}
                  onChange={handleChange}
                />
                Plano Lite
                <ul className="pt-4 pb-4">
                  <li>- Suporte personalizado</li>
                  <li>- Suporte personalizado</li>
                </ul>
              </label>
              <label>
                <input
                  type="radio"
                  name="plano"
                  value="padrao"
                  checked={formData.plano === "padrao"}
                  onChange={handleChange}
                />
                Plano Padrão
                <ul className="pt-4 pb-4">
                  <li>- Suporte personalizado</li>
                  <li>- Suporte personalizado</li>
                </ul>
              </label>

              <label>
                <input
                  type="radio"
                  name="plano"
                  value="premium"
                  checked={formData.plano === "premium"}
                  onChange={handleChange}
                />
                Plano BCB Plus
              </label>
              {errors.plano && <p className="text-red-500">{errors.plano}</p>}
              <div className="flex items-center justify-center">
              <button onClick={nextStep} className="bg-yellow-500 text-white p-2 mt-4 rounded">
                Avançar
              </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="razao_social"
                placeholder="Razão Social"
                value={formData.razao_social}
                onChange={handleChange}
                className={`w-full p-2 m-2 border-2 rounded-lg ${errors.razao_social ? "border-red-500" : ""}`}
              />
              {errors.razao_social && <p className="text-red-500">{errors.razao_social}</p>}

              <input
                type="text"
                name="cnpj"
                placeholder="CNPJ"
                value={formData.cnpj}
                onChange={handleChange}
                className={`w-full p-2 m-2 border-2 rounded-lg ${errors.cnpj ? "border-red-500" : ""}`}
              />
              {errors.cnpj && <p className="text-red-500">{errors.cnpj}</p>}

              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 m-2 border-2 rounded-lg ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}

              <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={formData.senha}
                onChange={handleChange}
                className={`w-full p-2 m-2 border-2 rounded-lg ${errors.senha ? "border-red-500" : ""}`}
              />
              {errors.senha && <p className="text-red-500">{errors.senha}</p>}

              <input
                type="password"
                name="confirmar_senha"
                placeholder="Confirmar Senha"
                value={formData.confirmar_senha}
                onChange={handleChange}
                className={`w-full p-2 m-2 border-2 rounded-lg ${errors.confirmar_senha ? "border-red-500" : ""}`}
              />
              {errors.confirmar_senha && <p className="text-red-500">{errors.confirmar_senha}</p>}

              <div className="flex items-center justify-center">
              <button type="submit" className="bg-yellow-500 text-white p-2 mt-4 rounded">
                Finalizar Cadastro
              </button>
              </div>
              {errors.global && <p className="text-red-500 text-center mt-4">{errors.global}</p>}
            </form>
          )}

          {step === 3 && showSuccess && (
            <p className="text-green-500 text-center">Cadastro realizado com sucesso!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CadastroEmpresa;
