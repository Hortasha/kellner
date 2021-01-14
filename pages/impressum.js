import Layout from '../components/Layout';
import Dropdown from '../components/Dropdown';

const Impressum = () =>(
  <Layout>
    <h1>Impressum</h1>
    <h2>Platzhalter Titel</h2>
    <Dropdown title="Angaben gemäß § 5 Telemediengesetz (TMG)">
    <p>
      Gemeinschaftspraxis<br />
      Dr. med. Ralf Kellner<br />
      Dr. med. Burkhard Alkemper<br />
      Dr. med. Birgit Adam, MBA<br />
      Fachärzte für Innere Medizin, Hämatologie/Onkologie
    </p>
    <p>
      Propst-Sievert-Weg 9<br />
      46325 Borken
    </p>
    </Dropdown>
    <Dropdown title="Kontakt">
      <p>
        Telefon: 02861-902890<br />
        Telefax: 02861-974490<br />
        E-Mail: <a href = "mailto: anmeldung@onkologie-borken.de">anmeldung@onkologie-borken.de</a>
      </p>
    </Dropdown>
    <Dropdown title="Rechtliche Angaben">
      <b>Vertretungsberechtigt</b>
      <p>Dr. med. Ralf Kellner, Dr. med. Burkhard Alkemper u. Dr. med. Birgit Adam, MBA (<a href = "mailto: anmeldung@onkologie-borken.de">anmeldung@onkologie-borken.de</a>)</p>
      <b>Inhaltlich Verantwortliche gemäß TMG</b>
      <p>Dr. med. Ralf Kellner, Dr. med. Burkhard Alkemper, Dr. med. Birgit Adam, MBA (<a href = "mailto: anmeldung@onkologie-borken.de">anmeldung@onkologie-borken.de</a>)</p>
      <b>Technisch Verantwortliche</b>
      <p>Andrea Kellner (<a href = "mailto: webmaster@onkologie-borken.de">webmaster@onkologie-borken.de</a>)</p>
    </Dropdown>
    <Dropdown title="Gesetzliche Berufsbezeichnungen">
      <p>
        Dr. med. Ralf Kellner: Facharzt für Innere Medizin, Hämatologie und Internistische Onkologie<br />
        Dr. med. Burkhard Alkemper: Facharzt für Innere Medizin, Hämatologie und Internistische Onkologie<br />
        Dr. med. Birgit Adam, MBA: Fachärztin für Hämatologie/Onkologie, Zusatzbezeichnung Palliativmedizin
      </p>
      <p>Die gesetzlichen Berufsbezeichnungen wurden in der Bundesrepublik Deutschland verliehen.</p>
    </Dropdown>
    <Dropdown title="Zuständige Kammer">
      <p>
        Ärztekammer Westfalen-Lippe<br/>
        Körperschaft des öffentlichen Rechts<br/>
        Gartenstraße 210-214<br/>
        48147 Münster
      </p>
      <a href="https://www.aekwl.de/fileadmin/rechtsabteilung/doc/Berufsordnung.pdf">Berufsordnung der Ärztekammer Westfalen-Lippe</a>
    </Dropdown>
    <Dropdown title="Zuständige Aufsichtsbehörde">
      <p>
        Kassenärztliche Vereinigung Westfalen-Lippe<br />
        Körperschaft des öffentlichen Rechts<br />
        Robert-Schimrigk-Str. 4-6<br />
        44141 Dortmund
      </p>
      <p>Wir unterliegen der Berufsordnung der Ärztekammer Westfalen-Lippe</p>
      <a href="https://www.kvwl.de/">Kassenärztliche Vereinigung Westfalen-Lippe</a>
    </Dropdown>
    <Dropdown title="Heilberufsgesetz NRW">
      <a href="https://www.aekno.de/aerzte/gesetze-verordnungen/heilberufsgesetz-nrw">https://www.aekno.de/aerzte/gesetze-verordnungen/heilberufsgesetz-nrw</a>
    </Dropdown>

    <h2>Haftungsausschluss (Disclaimer)</h2>
    <Dropdown title="Haftung für Inhalte">
      <p>
        Als Dienstanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Dienstanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. 
      </p>  
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>
    </Dropdown>
    <Dropdown title="Haftung für Links">
      <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>  
      <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
    </Dropdown>
    <Dropdown title="Urheberrecht">
      <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>  
      <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
    </Dropdown>
  </Layout>
);

export default Impressum;