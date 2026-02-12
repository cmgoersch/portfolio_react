import { useLocation, Link } from 'react-router-dom';
import { useConsent } from '../../context/ConsentContext';
import './CookieBanner.css';

const CookieBanner = () => {
  const { pathname } = useLocation();
  const { bannerOpen, accept, decline } = useConsent();

  // Kein Banner auf der Landingpage
  if (pathname === '/') return null;
  if (!bannerOpen) return null;

  return (
    <div className="cookie-banner-backdrop">
      <div className="cookie-banner">
        <button
          type="button"
          className="cookie-banner-close"
          aria-label="Close privacy banner"
          onClick={decline}
        >
          ×
        </button>
        <h2>No worries – your data stays yours.</h2>
        <p>
          This site uses external content (for example embedded project websites).
          You decide whether these external services may be loaded.
        </p>
        <div className="cookie-banner-actions">
          <button className="cookie-btn accept" onClick={accept}>
            Accept external content
          </button>
          <button className="cookie-btn decline" onClick={decline}>
            Decline
          </button>
        </div>
        <div className="cookie-banner-footer-link">
          <Link to="/datenschutz">Privacy policy</Link>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
