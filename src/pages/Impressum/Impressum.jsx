import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Impressum.css';

const Impressum = () => {
  return (
    <div className="impressum-page">
      <Navbar />
      
      <main className="content">
        <section className="section">
          <h1>Impressum</h1>

          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Carl-Martin Görsch<br />
            Web Developer & Grafik-Designer<br />
            Marktstraße 148<br />
            20357 Hamburg<br />
            Deutschland
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49 175 20 47 880<br />
            E-Mail: <a href="mailto:hey@cmgoersch.com">hey@cmgoersch.com</a>
          </p>

          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Carl-Martin Görsch<br />
            Marktstraße 148<br />
            20357 Hamburg
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf
            diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
            10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder
            nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
            hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
            nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
            diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
            einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
            entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend
            entfernen.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
            ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch
            keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets
            der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
            jeweiligen Autors bzw. Erstellers.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
            werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
            Dritter als solche gekennzeichnet. Solltest du trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden
            Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige
            Inhalte umgehend entfernen.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;
