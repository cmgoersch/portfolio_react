import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useConsent } from '../../context/ConsentContext';
import './Portfolio.css';

const projects = [
  {
    title: "HelloDev.social – Capstone Project at DCI",
    url: "https://hellodev.social/",
    description: `HelloDev.social is the capstone project of our one-year Web Development course at Digital Career Institute (DCI) (September 2024 – September 2025). It's a full-stack application — we designed and built both the front end and back end ourselves.

The project was developed by our team — Sarah, Ben, and Calle — and is hosted in our course organization Merge & Pray on GitHub. Primary development took place between 11 August and 21 September 2025, but we plan to continue iterating and improving.

HelloDev.social is a practice environment that demonstrates our ability to build a modern, scalable, and accessible social network for developers. Guests are welcome to explore the platform, but it is not intended for production use.`,
    techstack: [
      "React 18 + Vite (Frontend)",
      "Node.js & Express (Backend, REST API & JWT Auth)",
      "MongoDB with Mongoose",
      "Socket.io (Real-Time Chat)",
      "CSS Modules (Dark/Light Theme)",
      "Progressive Web App (PWA)",
      "OAuth (GitHub, Google)",
      "Syntax Highlighting for Code Snippets",
      "Responsive & Accessibility-Focused Design"
    ],
    github: "https://github.com/Merge-Pray/HelloDev"
  },
  {
    title: "Cadus.org – Multilingual NGO Website with WordPress",
    url: "https://www.cadus.org/",
    description: `I developed the official website for the humanitarian NGO CADUS using WordPress and the Avada theme. The goal was to create a user-friendly, accessible, and multilingual platform to present the organization's international crisis response work.

The site includes interactive maps, donation integration, a modular page builder, and multilingual support via WPML. I focused on performance, responsive design, and ease of use for internal content editors.`,
    techstack: [
      "WordPress (CMS)",
      "Avada Theme & Fusion Builder",
      "JavaScript",
      "WPML – Multilingual Plugin",
      "MapGeo (Interactive Mapping Plugin)",
      "Custom Post Types",
      "HTML",
      "CSS",
      "JavaScript",
      "SEO Optimization"
    ],
    github: null
  },
  {
    title: "Pollio – Digital Voting & Participation",
    url: "https://pollio.rocks/",
    description: `Pollio is a modern web platform designed to enable easy and secure online voting and participatory decision-making. It offers a clean user interface for creating, sharing, and participating in polls — ideal for communities, teams, or event organizers who value transparency and efficiency.`,
    techstack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "REST API"],
    github: "https://github.com/Merge-Pray/pollio"
  },
  {
    title: "Leafio – Share Plants",
    url: "https://leafio.vercel.app/",
    description: `Leafio is a web app created during the DCI Web Development course (April/May 2025). It connects plant lovers who want to give away, trade, or sell plants locally — promoting sustainability and mindful resource sharing.`,
    techstack: ["HTML", "CSS", "JavaScript", "React", "Vite", "API", "Firebase (Backend)"],
    github: "https://github.com/Merge-Pray/leafio"
  },
  {
    title: "Cosmic Cable Ltd.",
    url: "https://cosmic.cable.limited/",
    description: `Cosmic Cable operates a playful festival telephone network with iconic phone booths that has been providing surprising communication at the Fusion Festival and at.tension since 2016.
What began as a creative response to a poor mobile network is now an idiosyncratic network of old dial telephones, Wi-Fi links, Asterisk servers and interactive effects such as light, sound - and sometimes even flames.
This website gives a little insight into the project, the technology behind it and the atmosphere surrounding it.`,
    techstack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/cosmiccableltd/website"
  },
  {
    title: "Better-Friend-App",
    url: "https://capstone-project-seven-rho.vercel.app/",
    description: `Better Friend is a playful reminder app that helps you stay in touch with the people who matter most. Each time you open it, the app randomly suggests a contact who might be happy to hear from you — making sure no one gets forgotten in the hustle of daily life.

Ideal for nurturing close friendships and building lasting connections with just a small nudge.`,
    techstack: ["HTML", "CSS", "JavaScript", "Next.js", "Styled Components"],
    github: "https://github.com/cmgoersch/capstone-project"
  },
  {
    title: "Light Status via Web App",
    url: "https://leuchten.vercel.app/",
    description: `A small utility web app that checks whether the community-run bar "Leuchten" in hamburg is currently open or closed. The app sends a request to an ESP-based microcontroller installed at the location, which reports the bar's current status.

Since "Leuchten" is operated by volunteers and doesn't follow fixed opening hours, this tool provides an easy way for locals to see if the bar is open – right from their phone or computer.`,
    techstack: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/cmgoersch/leuchten-app"
  },
  {
    title: "ge.hackt.es – Minimal WordPress Site for a Young Hacker Collective",
    url: "https://ge.hackt.es/",
    description: `I created a simple and clean WordPress website for ge.hackt.es e.V., a newly founded hacker collective. The goal was to provide a basic digital presence with minimal content, strong visual identity, and clear structure – all designed for easy expansion as the group evolves.

The site uses AI-generated visuals and a lightweight WordPress setup to reflect the group's experimental and digital-first approach.`,
    techstack: [
      "WordPress (CMS)",
      "Custom Theme Styling",
      "Image Prompting (AI-generated visuals)",
      "Minimal SEO Setup",
      "Lightweight Hosting",
      "HTML",
      "CSS",
      "Responsive Layout"
    ],
    github: null
  },
  {
    title: "Dachgeschwister – Website for a Young Roofing Company",
    url: "https://dachgeschwister.de/",
    description: `I created a clean and responsive WordPress site for Dachgeschwister, a young roofing business with growing ambitions. The goal was to present their services clearly and professionally while allowing room for future expansion.`,
    techstack: ["WordPress (CMS)", "HTML & CSS", "Responsive Design", "SEO Basics"],
    github: null
  }
];

const Portfolio = () => {
  const { hasConsented, accept } = useConsent();

  // Ensure page always starts at top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const handleVisitPage = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="work-page">
      <Navbar />
      
      <main>
        <p className="introduction">
          This portfolio presents a small selection of projects I've built in recent times —  
          each one embedded here as an <strong>interactive iFrame</strong>.  
          You can explore them directly on this page or open them via the provided links for a full view.
        </p>

        <section className="vertical-container">
          {projects.map((project, index) => (
            <div className="content-item" key={index}>
              {hasConsented ? (
                <iframe 
                  src={project.url} 
                  title={project.title}
                  loading="lazy"
                  tabIndex="-1"
                ></iframe>
              ) : (
                <div className="iframe-consent-placeholder">
                  <p>
                    External project content is blocked to protect your privacy.
                    Click the button below to load all embedded websites.
                  </p>
                  <button onClick={accept}>
                    Allow external content
                  </button>
                </div>
              )}
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="techstack">
                  {project.techstack.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>

                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <img 
                      src="/assets/images/github.svg" 
                      alt={project.github} 
                      className="github-icon" 
                    />
                  </a>
                )}

                <div className="project-links">
                  <button onClick={() => handleVisitPage(project.url)}>
                    Visit Website
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
