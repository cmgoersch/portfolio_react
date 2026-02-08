import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>&copy; 2025 Calle</p>
      <p>
        <Link to="/impressum">Impressum</Link> |
        <Link to="/datenschutz">Datenschutz</Link>
      </p>
    </footer>
  );
};

export default Footer;
