import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useTheme } from '../../context/ThemeContext';
import './NotFound.css';

const NotFound = () => {
  const { theme } = useTheme();

  const backLabel =
    theme === 'ocean'
      ? 'Back to the ice cubes'
      : theme === 'sunset'
        ? 'Back to the smiles'
        : theme === 'purple'
          ? 'Back to the balloons'
          : 'Back to the bubbles';
  return (
    <div className="notfound-page">
      <Navbar />
      <main>
        <section className="notfound-content">
          <h1>404</h1>
          <h2>Oops, this page drifted into space.</h2>
          <p>
            The page you're looking for doesn't exist (anymore).
            Use the navigation above or one of the buttons below to
            get back to the portfolio.
          </p>
          <div className="notfound-actions">
            <Link to="/" className="notfound-button primary">{backLabel}</Link>
            <Link to="/portfolio" className="notfound-button">View portfolio</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
