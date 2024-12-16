import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Mail,
  Phone,
  User,
  Building2,
  MapPin,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const AgendarDemonstracao = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    date: "",
    time: "",
    employees: "",
  });

  const [selectedSlot, setSelectedSlot] = useState(null);

  const availableSlots = [
    { time: "09:00", available: true },
    { time: "10:30", available: true },
    { time: "14:00", available: true },
    { time: "15:30", available: true },
    { time: "16:45", available: false },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envio para backend PHP será adicionada posteriormente
    console.log("Dados do agendamento:", { ...formData, selectedSlot });
    alert("Agendamento solicitado! Entraremos em contato em breve.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="p-8 bg-[#ffcc00] text-black">
          <h1 className="text-3xl font-bold text-center mt-16">
            <a href="/para_empresas">
            <div className="flex items-center justify-start pl-10">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            </a>
            Agende uma Demonstração de Cashback
          </h1>
          <p className="text-center mt-4 text-black-50">
            Descubra como nossa plataforma pode otimizar a fidelização de
            clientes para sua empresa
          </p>
        </div>

        <div className="p-16 grid md:grid-cols-2 gap-8">
          {/* Lado Esquerdo - Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  Nome Completo
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-yellow-600"
                    placeholder="Seu nome"
                  />
                </div>
              </div>

              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  Empresa
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building2 className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-yellow-600"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  E-mail
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-yellow-600 focus:border-yellow-600"
                    placeholder="seuemail@empresa.com"
                  />
                </div>
              </div>

              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  Telefone
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-yellow-600 focus:border-yellow-600"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  Número de Funcionários
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <select
                    name="employees"
                    required
                    value={formData.employees}
                    onChange={handleInputChange}
                    className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-yellow-600 focus:border-yellow-600"
                  >
                    <option value="">Selecione</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201+">201+</option>
                  </select>
                </div>
              </div>

              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  Data da Demonstração
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-yellow-600 focus:border-yellow-600"
                  />
                </div>
              </div>
            </div>

            {/* Seleção de Horário */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Escolha um Horário
              </label>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {availableSlots.map((slot) => (
                  <button
                    key={slot.time}
                    type="button"
                    onClick={() => setSelectedSlot(slot.time)}
                    disabled={!slot.available}
                    className={`
                      flex items-center justify-center py-2 px-4 rounded-md 
                      transition duration-300 ease-in-out
                      ${
                        selectedSlot === slot.time
                          ? "bg-[#ffcc00] text-white"
                          : slot.available
                          ? "bg-gray-100 hover:bg-yellow-100 text-gray-900"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }
                    `}
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-5">
              <button
                type="submit"
                disabled={!selectedSlot}
                className={`
                  w-full py-3 px-6 border border-transparent rounded-md shadow-sm 
                  text-white font-medium transition duration-300
                  ${
                    selectedSlot
                      ? "bg-[#ffcc00] hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"
                      : "bg-gray-300 cursor-not-allowed"
                  }
                `}
              >
                Agendar Demonstração
              </button>
            </div>
          </form>

          {/* Lado Direito - Informações Adicionais */}
          <div className="bg-gray-50 p-6 rounded-lg space-y-6">
            <div className="flex items-start space-x-4">
              <Clock className="h-8 w-8 text-yellow-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Demonstração Personalizada
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Nossa demonstração é totalmente adaptada ao tamanho e
                  necessidades da sua empresa.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-8 w-8 text-yellow-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Reunião Online
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Realizamos a demonstração por videoconferência, com total
                  flexibilidade e comodidade.
                </p>
              </div>
            </div>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-sm text-yellow-800">
                Após o agendamento, nossa equipe entrará em contato para
                confirmar os detalhes e preparar uma demonstração personalizada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendarDemonstracao;
