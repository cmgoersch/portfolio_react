import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar />
      
      <main>
        {/* Einleitungstext */}
        <div className="contact-intro">
          <h2>Get in Touch</h2>
          <p>
            I'd be happy to hear from you!
            <br /><br />
            Whether you'd like to discuss a project, explore an idea, hire me for your team, or simply connect - 
            send me a message and I'll respond as soon as possible.
            <br /><br />
            Prefer email?<br />
            <a href="mailto:hey@cmgoersch.com"><strong>hey@cmgoersch.com</strong></a>
          </p>
          <p>Or one of these?</p>
          
          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://github.com/cmgoersch" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/github.svg" alt="GitHub" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/calle-goersch/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/linkedin.svg" alt="LinkedIn" className="social-icon" />
            </a>
          </div>
        </div>

        {/* Kontaktformular */}
        <section id="contact">
          <div className="contact-box">
            <form action="https://formspree.io/f/xgvywred" method="POST">
              <div>
                <label htmlFor="name">Your Name:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Enter your name" 
                  required 
                />
              </div>

              <div>
                <label htmlFor="email">Your Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="your.email@example.com" 
                  required 
                />
              </div>

              <div>
                <label htmlFor="contact-message">Message:</label>
                <textarea 
                  id="contact-message" 
                  name="message" 
                  rows="5" 
                  placeholder="Your message to me :)" 
                  required
                ></textarea>
              </div>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
