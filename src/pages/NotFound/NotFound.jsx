import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './NotFound.css';

const NotFound = () => {
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
            <Link to="/" className="notfound-button primary">Back to the bubbles</Link>
            <Link to="/portfolio" className="notfound-button">View portfolio</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
