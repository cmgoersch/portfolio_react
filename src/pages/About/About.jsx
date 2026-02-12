import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './About.css';

const About = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const calculateAge = (birthDateStr) => {
      const today = new Date();
      const birthDate = new Date(birthDateStr);
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();

      const hasHadBirthdayThisYear =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

      if (!hasHadBirthdayThisYear) {
        calculatedAge--;
      }

      return calculatedAge;
    };

    setAge(calculateAge("1990-11-04"));
  }, []);

  return (
    <div className="about-page">
      <Navbar />
      
      <div className="profile-container">
        <header>
          <img src="/assets/images/calle.png" alt="Profile Picture" className="profile-pic" />
          <h1>Calle</h1>
          <p className="username">Web Developer & Graphic Designer</p>
          
          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://github.com/cmgoersch" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/github.svg" alt="GitHub" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/calle-goersch/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/linkedin.svg" alt="LinkedIn" className="social-icon" />
            </a>
          </div>
        </header>

        <main>
          <section className="about" id="about">
            <h2>Hi there 👋</h2>
            <h3>My name is Calle</h3>
            <p>
              I'm a web developer and graphic designer based in Hamburg, currently <span id="age">{age}</span> years old.
            </p>
            <p>
              After working as a graphic designer for more than 10 years – often closely collaborating with web developers – I finally decided to fulfill a long-standing dream and become a web developer myself. I'm learning something new every day, and I truly enjoy the process!
            </p>
            <p>
              My journey started with a three-month bootcamp at <strong>Neue Fische</strong> in Hamburg. Within a short time, I learned the fundamentals of <strong>HTML, CSS, JavaScript</strong>, and even got into <strong>React</strong> and <strong>Next.js</strong>. For the final project, I developed the <a href="https://capstone-project-seven-rho.vercel.app" target="_blank" rel="noopener noreferrer"><strong>better-friend-app</strong></a> – an app designed to help users engage with their friends in a playful and balanced way.
            </p>
            <p>
              Because I didn't feel fully prepared yet, I looked for a more extensive and long-term course – and joined the Web Development program in 2024.
            </p>
            <p>
              That's when I found <strong>DCI (Digital Career Institute)</strong>, and started their 14-month full-time Web Development course in <strong>September 2024</strong>. Here, I gained solid experience in both frontend and backend development. One of my favorite experiences was building <a href="https://leafio.vercel.app/" target="_blank" rel="noopener noreferrer"><strong>Leafio</strong></a> – a collaborative project I developed with two fellow students. It was also the first time I really got hands-on with backend technologies, which was super exciting.
            </p>
            <p>
              In <strong>September 2025</strong> I successfully graduated from DCI as a <strong>full-stack web developer</strong>.  
              For my capstone project, I created <a href="https://github.com/your-hellodev-link" target="_blank" rel="noopener noreferrer"><strong>HelloDev</strong></a> – "The network for nerds and hackers in software development," a social media platform for developers to connect, share resources, and collaborate on projects.
            </p>
            <p className="internship-paragraph">
              I am currently completing an internship as a front-end developer at{' '}
              <a
                href="https://exxeta.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>exxeta</strong>
              </a>{' '}
              and gaining experience in a customer project. More information can be found in my{' '}
              <Link to="/cv">
                <strong>CV</strong>
              </Link>
              .
            </p>
            <p>
              I'm really looking forward to gaining practical experience in a real-world team.
            </p>
            <p>
              If you're interested in my work, feel free to check out the <Link to="/portfolio"><strong>Portfolio</strong></Link> section.  
              And if you have a job or project in mind, take a look at my <Link to="/cv"><strong>CV</strong></Link> 😊
            </p>
            <p><strong>I'm ready :)</strong></p>
          </section>

          <div className="contact-button">
            <Link to="/portfolio" className="btn-contact">Portfolio</Link>
            <Link to="/cv" className="btn-contact">CV</Link>
            <Link to="/contact" className="btn-contact">Contact</Link>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default About;
