import Layout from '../components/Layout';
import Card from '../components/Card'
import CardContainer from '../components/CardContainer'
import CallToActionRedirect from '../components/CallToActionRedirect'
import Link from 'next/link';
import Header from '../components/Header';

const Index = () =>(
  <Layout>
    <Header />
    <p>
      Wir sind eine innovative und hochmoderne Praxis, die 2002 gegründet wurde und seither kontinuierlich ausgebaut wird. Unsere Praxis zeichnet sich durch einen hohen Teamgeist aus, der für den Umgang mit unseren Patienten mit Blut- und Tumorerkrankungen sehr bedeutsam ist. 
      <br />
      <br />
      Nach der Erweiterung unserer Praxisräume und der Weiterentwicklung unseres diagnostischen Spektrums suchen wir eine empathische und zuverlässige Fachkraft, der Teamgeist und Zusammenhalt wichtig ist.
    </p>
    <br />
    <CallToActionRedirect href="/stellenangebote">Hier geht's zu unseren Stellenangeboten</CallToActionRedirect>
    <CardContainer>
      <Card>
        <h1>Sprechzeiten</h1>
        <p>
          Montag bis Freitag<br />
          8:00 - 11:30<br />
          Montag, Dienstag, Donnerstag<br />
          14:00 - 16:30<br />
          …und nach Vereinbarung
        </p>
      </Card>
      <Card>
        <h1>Kontakt</h1>
        <p>
          Propst-Sievert-Weg 9<br />
          46325 Borken<br /><br />
          Telefon: 02861-902890<br />
          Telefax: 02861-974490<br /><br />
          E-Mail:<br />
          <a href = "mailto: anmeldung@onkologie-borken.de">anmeldung@onkologie-borken.de</a><br />
          <a href = "mailto: r.kellner@onkologie-borken.de">r.kellner@onkologie-borken.de</a><br />
          <a href = "mailto: b.alkemper@onkologie-borken.de">b.alkemper@onkologie-borken.de</a><br />
          <a href = "mailto: b.adam@onkologie-borken.de">b.adam@onkologie-borken.de</a>
        </p>
      </Card>
      <Card>
        <h1>Wir suchen eine(n)</h1>
          <ul>
            <li>Medizinische(n) Fachangestellte(n) (w/m/d)</li>
            <li>Gesundheits- u. Krankenpfleger(in) (w/m/d)</li>
            <li>Medizinisch Technische(n) Assistenten(in) (w/m/d)</li>
            <li>Dokumentationsassistenten(in) (w/m/d) für klinische Studien und das Krebsregister</li>
            <li>Zwei Auszubildende zur/zum Medizinischen Fachangestellten (w/m/d)</li>
          </ul>
        <Link href="/stellenangebote">
          <a className="center">Zu den Stellenangeboten</a>
        </Link>
      </Card>
    </CardContainer>
  </Layout>
);

export default Index;