import { Link } from 'react-router-dom';
import { useConsent } from '../../context/ConsentContext';
import './Footer.css';

const Footer = () => {
  const { openBanner } = useConsent();

  return (
    <footer className="site-footer">
      <p>&copy; 2025 Calle</p>
      <p>
        <Link to="/impressum">Impressum</Link> |
        <Link to="/datenschutz">Datenschutz</Link> |
        <button type="button" className="privacy-settings-button" onClick={openBanner}>
          Privacy settings
        </button>
      </p>
    </footer>
  );
};

export default Footer;
