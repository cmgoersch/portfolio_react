import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Curriculum.css';

const professionalExperience = [
  {
    date: "11.2019 – 01.2024",
    title: "Madways UG",
    role: "Graphic Designer",
    description: "Created Corporate Identity, Corporate Design, and websites for clients ranging from small businesses to large companies. Worked in a small team to realize a wide variety of requests, from print projects to large-scale web campaigns. Initially part-time, from 2019 onward full-time."
  },
  {
    date: "05.2014 – 11.2019",
    title: "ARLT Computer GmbH",
    role: "Graphic Designer",
    description: "Responsible for the complete design of all print and web advertising materials for 18 branches, the online shop, and trade fair appearances. Regularly produced a 16–24 page product newspaper, designed trade fair stands and branch layouts, and managed campaigns with manufacturers such as Intel, AMD, ASUS, and NVIDIA. Concluded with a complete redesign of the online shop to a modern, responsive design and supervised its implementation."
  },
  {
    date: "01.2014 – Present",
    title: "Madways UG",
    role: "Co-Founder & Graphic Designer",
    description: "Co-founded Madways UG with two partners in 2014. Implemented numerous client projects and took on additional responsibilities such as business planning, accounting, client acquisition, and coordination with freelancers."
  },
  {
    date: "01.2013 – 08.2013",
    title: "Avance Marketing Stuttgart",
    role: "Graphic Design Internship (Direct & Viral Marketing)",
    description: "Gained comprehensive insight into agency life, large client projects, and professional workflows. Assisted in graphic design, direct marketing, and viral marketing campaigns."
  }
];

const education = [
  {
    date: "09.2024 – 11.2025",
    title: "Full-Stack Web Development",
    institution: "DCI Digital Career Institute",
    description: "Comprehensive training in web development: HTML, CSS/SCSS, Bootstrap, JavaScript (Node.js, OOP, functional concepts), React, TypeScript, Next.js, REST APIs with Express, MongoDB, Git/GitHub, Linux, plus extensive hands-on project experience."
  },
  {
    date: "04.2024 – 08.2024",
    title: "Web Development",
    institution: "BBQ Baumann Bildung & Qualifizierung",
    description: "Fundamentals of Python and databases (SQL/NoSQL)."
  },
  {
    date: "03.2023 – 06.2023",
    title: "Web Development Bootcamp",
    institution: "Neue Fische Hamburg",
    description: "Intensive training in modern web development focusing on HTML, CSS, JavaScript, React, Next.js, Node.js, REST APIs, databases (SQL/NoSQL), Git, Linux and UX/UI."
  },
  {
    date: "08.2009 – 07.2012",
    title: "Graphic Design Diploma",
    institution: "Akademie für Kommunikation Pforzheim",
    description: "Three-year program with specializations in graphic design, typography, photo design, freehand drawing, lettering, advertising theory and media technology."
  },
  {
    date: "1996 – 2009",
    title: "Secondary Education",
    institution: "Waldorf School Vaihingen an der Enz",
    description: null
  }
];

const skills = {
  webDevelopment: {
    title: "Web Development",
    tags: ["Next.js", "React", "TypeScript", "JavaScript", "CSS", "Tailwind CSS", "Responsive Design", "API Integration", "MongoDB", "Express.js", "Node.js", "GitHub", "Git Workflow", "CI/CD (Vercel, GitHub)", "WordPress"],
    description: "I have built a broad foundation and deepened my expertise through intensive training. In recent projects I worked extensively with React, TypeScript and modern full-stack technologies — both frontend and backend. I also gained first insights into Python and Django."
  },
  design: {
    title: "Design & Creative Tools",
    tags: ["Photoshop", "Illustrator", "InDesign", "Lightroom", "Figma", "Excalidraw", "UI/UX Design", "Web Design", "Prototyping / Wireframing", "Branding / Corporate Design", "Graphic Design", "Typography", "Visual Storytelling", "Infographics", "Photography"],
    description: "I bring many years of experience in design and know the Adobe Creative Suite inside out, integrating current trends and a clear design language into my work."
  },
  softSkills: {
    title: "Soft Skills",
    tags: ["Teamwork", "Communication", "Self-Reliance", "Willingness to Learn"]
  },
  tools: {
    title: "Ticketing & Collaboration Tools",
    tags: ["Miro", "Jira / Trello", "Slack", "Microsoft Teams", "Rocket.Chat", "Nextcloud"]
  },
  license: {
    title: "Driver's License",
    tags: ["Class B"]
  },
  interests: {
    title: "Interests",
    tags: ["Cultural Work", "(Digital) Politics", "Passionate Musician (Guitar & Bass)"]
  }
};

const Curriculum = () => {
  return (
    <div className="curriculum-page">
      <Navbar />
      
      <main>
        <section className="content">
          {/* Profile */}
          <div className="section">
            <h2>Profile</h2>
            <p>
              I have been working passionately as a web designer for many years and have specifically expanded my skills in the area of web development. In my work, I combine creativity with technical solutions that are both functional and visually appealing. Teamwork is particularly important to me, as trust and exchange lead to the best results. In addition to my professional activities, I am involved in cultural work and maintain a strong network that provides me with inspiration and new ideas. I enjoy driving projects forward responsibly and with enthusiasm.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="section">
            <h2>Professional Experience</h2>
            <ul className="timeline-list">
              {professionalExperience.map((exp, index) => (
                <li key={index}>
                  <div className="entry">
                    <span className="date">{exp.date}</span>
                    <span className="details"><strong>{exp.title}</strong> – {exp.role}</span>
                    <p>{exp.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="section">
            <h2>Education</h2>
            <ul className="timeline-list">
              {education.map((edu, index) => (
                <li key={index}>
                  <div className="entry">
                    <span className="date">{edu.date}</span>
                    <span className="details"><strong>{edu.title}</strong> – {edu.institution}</span>
                    {edu.description && <p>{edu.description}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="section">
            <h2>Skills</h2>

            {Object.entries(skills).map(([key, skill]) => (
              <div key={key}>
                <h3>{skill.title}</h3>
                <div className="skill-tags">
                  {skill.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                {skill.description && <p>{skill.description}</p>}
              </div>
            ))}
          </div>

          <div className="skill-button-wrapper">
            <Link to="/adventure" className="skill-mix-button">Skill-Mix</Link>
            <Link to="/work" className="skill-mix-button">My Work</Link>
            <Link to="/contact" className="skill-mix-button">Contact Me</Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Curriculum;
