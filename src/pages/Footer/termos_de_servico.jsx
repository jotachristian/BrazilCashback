// Termos.jsx
import React from 'react';
import Footer from '../../components/Footer';

function termos_de_servico() {
  return (
    <>
      <section className="py-12 px-6 lg:px-32 mt-28">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semiboldmb-8 text-center mt-24 mb-12">Termos de Serviço</h2>

          <div className="space-y-6">
            <p>
              Estes Termos de Serviço regulam o uso do nosso sistema de gerenciamento de exames médicos. Ao acessar e utilizar o sistema, você concorda em cumprir os termos aqui estabelecidos.
            </p>

            <h3 className="text-xl font-bold">Aceitação dos Termos</h3>
            <p>
              Ao acessar e utilizar o sistema, você declara que leu, entendeu e concorda em cumprir estes Termos de Serviço e todas as políticas adicionais aplicáveis.
            </p>

            <h3 className="text-xl font-bold">Uso do Sistema</h3>
            <p>
              Você concorda em usar o sistema apenas para fins legais e de acordo com as leis aplicáveis. É proibido usar o sistema para qualquer atividade que possa danificar ou prejudicar o sistema ou outros usuários.
            </p>

            <h3 className="text-xl font-bold">Privacidade</h3>
            <p>
              A proteção de sua privacidade é fundamental para nós. Ao usar nosso sistema, você concorda com nossa Política de Privacidade, que descreve como coletamos, usamos e protegemos suas informações pessoais.
            </p>

            <h3 className="text-xl font-bold">Propriedade Intelectual</h3>
            <p>
              Todo o conteúdo e funcionalidades do sistema, incluindo texto, gráficos, logotipos, ícones e software, são de nossa propriedade ou licenciados para nós e estão protegidos por direitos autorais e outras leis de propriedade intelectual.
            </p>

            <h3 className="text-xl font-bold">Modificações nos Termos</h3>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento. Quaisquer alterações serão publicadas nesta página e, ao continuar a usar o sistema, você concorda com os novos termos.
            </p>

            <h3 className="text-xl font-bold">Limitação de Responsabilidade</h3>
            <p>
              Não somos responsáveis por danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou incapacidade de uso do sistema, mesmo que tenhamos sido avisados da possibilidade de tais danos.
            </p>

            <h3 className="text-xl font-bold">Legislação Aplicável</h3>
            <p>
              Estes Termos de Serviço são regidos pelas leis do Brasil. Qualquer disputa relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais competentes.
            </p>

            <h3 className="text-xl font-bold">Contato</h3>
            <p>
              Se você tiver alguma dúvida sobre estes Termos de Serviço, entre em contato conosco através do e-mail: <a href="mailto:resutex-medicina@gmail.com" className="text-blue-600">brazilcashback@gmail.com</a>
            </p>

            <p className="mt-6 text-center text-gray-400">
              Última atualização: 26/10/2024
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default termos_de_servico;
