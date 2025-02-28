import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetailPage from './pages/ProductDetailPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;