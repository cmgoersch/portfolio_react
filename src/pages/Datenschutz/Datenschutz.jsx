import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Datenschutz.css';

const Datenschutz = () => {
  return (
    <div className="datenschutz-page">
      <Navbar />
      
      <main className="content">
        <section className="section">
          <h1>Datenschutzerklärung</h1>

          <p>
            Der Schutz deiner Daten ist mir wichtig. Nachfolgend findest du Informationen 
            darüber, welche Daten beim Besuch dieser Website erhoben und wie sie verwendet werden.
          </p>

          <h2>1. Verantwortlich</h2>
          <p>
            Carl-Martin Görsch<br />
            E-Mail: <a href="mailto:hey@cmgoersch.com">hey@cmgoersch.com</a>
          </p>

          <h2>2. Zugriffsdaten</h2>
          <p>
            Beim Besuch dieser Website werden automatisch Daten (z. B. IP-Adresse, Browsertyp, 
            Datum und Uhrzeit) vom Webserver gespeichert. Diese Daten dienen ausschließlich der 
            technischen Überwachung und Verbesserung der Website. Eine Zuordnung zu bestimmten 
            Personen erfolgt nicht.
          </p>

          <h2>3. Kontaktaufnahme</h2>
          <p>
            Wenn du mich über das Kontaktformular kontaktierst, werden deine Angaben (Name, 
            E-Mail-Adresse, Nachricht) gespeichert, um deine Anfrage zu beantworten. Diese Daten 
            gebe ich nicht weiter.
          </p>

          <h2>4. Einbindung externer Inhalte</h2>
          <p>
            Diese Website verwendet eingebettete Inhalte (z. B. GitHub-Links, iframe-Vorschauen). 
            Dabei können externe Dienste Cookies setzen oder Daten (z. B. IP-Adresse) erfassen.
          </p>

          <h2>5. Rechte</h2>
          <p>
            Du hast das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung deiner 
            gespeicherten Daten. Schreib mir dazu einfach eine E-Mail an{' '}
            <a href="mailto:hey@cmgoersch.com">hey@cmgoersch.com</a>.
          </p>

          <h2>6. Hosting</h2>
          <p>
            Die Website wird von Madways UG gehostet.{' '}
            <a href="https://www.madways.de/" target="_blank" rel="noopener noreferrer">
              madways.de
            </a>.
          </p>

          <h2>7. Änderungen</h2>
          <p>
            Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen. 
            Bitte schaue regelmäßig vorbei, um auf dem aktuellen Stand zu bleiben.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;
