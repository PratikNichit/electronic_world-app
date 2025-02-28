import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;