import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import QuemSomos from './pages/QuemSomos/QuemSomos'
import Servicos from './pages/Servicos/Servicos'
import Contato from './pages/Contato/Contato'
import './App.css'

/**
 * App principal com roteamento e layout (Header + conteúdo + Footer)
 */
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="appMain">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
