import Layout from '../components/Layout';
import Dropdown from '../components/Dropdown';
import SectionSeperator from '../components/SectionSeperator';
import Image from 'next/image';

const Stellenangebote = () =>(
  <Layout>
    <SectionSeperator>
      <Image src="/praxisladies.jpg"  width="739px" height="169px" />
      <h4>Wir sind eine innovative und hochmoderne Praxis, die seit 2002 jedes Jahr ein bis zwei Ausbildungsplätze anbietet. Unsere Praxis zeichnet sich durch einen hohen Teamgeist aus, der für den Umgang mit unseren Patienten mit Blut- und Tumorerkrankungen sehr bedeutsam ist.</h4>
      <Dropdown title="Jobangebote">
        <ul>
          <li><b>Medizinische(n) Fachangestellte(n) (w/m/d)</b></li>
          <li><b>Gesundheits- u. Krankenpfleger(in) (w/m/d)</b></li>
          <li><b>Medizinisch Technische(n) Assistenten(in) (w/m/d)</b> in Teilzeit</li>
          <li><b>Dokumentationsassistenten(in) (w/m/d)</b> für klinische Studien und das Krebsregister</li>
        </ul>
      </Dropdown>
      <Dropdown title="Ausbildungsstellen">
        <ul>
          <li><b>Auszubildende zur/zum Medizinischen Fachangestellten (w/m/d)</b></li>
        </ul>
      </Dropdown>
    </SectionSeperator>
  </Layout>
);

export default Stellenangebote;