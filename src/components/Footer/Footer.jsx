import { Link } from 'react-router-dom';
import { useConsent } from '../../context/ConsentContext';
import { useTheme } from '../../context/ThemeContext.jsx';
import './Footer.css';

const Footer = () => {
  const { openBanner } = useConsent();
  const { theme, setTheme } = useTheme();

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
      <div className="theme-switcher" aria-label="Color theme selector">
        <button
          type="button"
          className={`theme-dot theme-dot--default ${theme === 'default' ? 'active' : ''}`}
          onClick={() => setTheme('default')}
          aria-label="Default theme"
        />
        <button
          type="button"
          className={`theme-dot theme-dot--purple ${theme === 'purple' ? 'active' : ''}`}
          onClick={() => setTheme('purple')}
          aria-label="Purple theme"
        />
        <button
          type="button"
          className={`theme-dot theme-dot--ocean ${theme === 'ocean' ? 'active' : ''}`}
          onClick={() => setTheme('ocean')}
          aria-label="Ocean theme"
        />
        <button
          type="button"
          className={`theme-dot theme-dot--sunset ${theme === 'sunset' ? 'active' : ''}`}
          onClick={() => setTheme('sunset')}
          aria-label="Sunset theme"
        />
      </div>
    </footer>
  );
};

export default Footer;
