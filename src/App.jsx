import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { ConsentProvider } from './context/ConsentContext';
import CookieBanner from './components/CookieBanner/CookieBanner';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import CV from './pages/CV/CV';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import Impressum from './pages/Impressum/Impressum';
import Datenschutz from './pages/Datenschutz/Datenschutz';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ConsentProvider>
        <div className="app">
          <CookieBanner />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ConsentProvider>
    </Router>
  );
}

export default App;