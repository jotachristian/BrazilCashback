import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';

//Navbar da Empresa
import EntrarEmpresa from './pages/empresas/Entrar_empresa.jsx';
import Footer from './components/Footer';

import ParaEmpresas from './pages/para_empresas';
import AgendarDemonstracao from './pages/empresas/agendar_demonstracao.jsx'
import Cadastro from './pages/cadastro';
import CadastroEmpresa from './pages/empresas/cadastro_empresa.jsx';
import Entrar from './pages/Entrar'; // Página de login

import Inicio from './pages/Main/Inicio.jsx';
import InicioEmpresa from './pages/Main/index_empresa.jsx'

import Home from './pages/Home';
import TesteAgora from './pages/saiba_mais.jsx';
import Dashboard from './pages/Main/dashboard.jsx';

// Footer Pages
import QuemSomos from './pages/Footer/quem_somos';
import PoliticaDePrivacidade from './pages/Footer/politica_de_privacidade';
import TermosdeServico from './pages/Footer/termos_de_servico';
import ComoFunciona from './pages/Footer/como_funciona';
import LojasParceiras from './pages/Footer/lojas_parceiras';
import IndiqueEGanhe from './pages/Footer/indique_e_ganhe.jsx';
import FaleConosco from './pages/Footer/fale_conosco.jsx';
import ComoUsarCupom from './pages/Footer/como_usar_cupom';
import MelhoresCupons from './pages/Footer/melhores_cupons.jsx';

function App() {
  const location = useLocation(); // Obtem a rota atual

  // Lista de rotas onde a Navbar deve ser ocultada
  const hideNavbarRoutes = ['/inicio', '/para_empresas','/agendar_demonstracao', '/entrar', '/cadastro', '/entrar_empresa', '/index_empresa', '/cadastro_empresa']; // Adicione mais rotas conforme necessário

  return (
    <>
      {/* Exibe a Navbar apenas se a rota atual não estiver na lista */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/para_empresas" element={<ParaEmpresas />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/agendar_demonstracao" element={<AgendarDemonstracao />} />
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/saiba_mais" element={<TesteAgora />} />
        <Route path="/inicio" element={<Inicio />} />
        
        {/* Navbar Empresa */}

        <Route path="/entrar_empresa" element={<EntrarEmpresa />} />
        <Route path="/index_empresa" element={<InicioEmpresa />} />
        <Route path="/cadastro_empresa" element={<CadastroEmpresa />} />
        <Route path="/dashboard" element={<Dashboard />} />


        {/* Footer */}
        <Route path="/footer" element={<Footer />} />
        <Route path="quem_somos" element={<QuemSomos />} />
        <Route path="/termos_de_servico" element={<TermosdeServico />} />
        <Route path="/politica_de_privacidade" element={<PoliticaDePrivacidade />} />
        <Route path="como_funciona" element={<ComoFunciona />} />
        <Route path="lojas_parceiras" element={<LojasParceiras />} />
        <Route path="indique_e_ganhe" element={<IndiqueEGanhe />} />
        <Route path="/fale_conosco" element={<FaleConosco />} />
        <Route path="/como_usar_cupom" element={<ComoUsarCupom />} />
        <Route path="/melhores_cupons" element={<MelhoresCupons />} />
      </Routes>
    </>
  );
}

export default App;
