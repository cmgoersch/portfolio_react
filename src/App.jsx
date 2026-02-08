import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Work from './pages/Work/Work';
import Curriculum from './pages/Curriculum/Curriculum';
import Contact from './pages/Contact/Contact';
import Adventure from './pages/Adventure/Adventure';
import Impressum from './pages/Impressum/Impressum';
import Datenschutz from './pages/Datenschutz/Datenschutz';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;