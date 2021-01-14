import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';
import styled from 'styled-components';

const Main = styled.main`
    width: 1000px;
    margin: 0 auto;

    @media (max-width: 1024px) {
        width: 90%;
    }
`;

const Layout = (props) => (
    <div>
        <Head>
            <title>Onkologie Kreis Borken und Umgebung</title>
        </Head>
        <Nav/>
        <Main className="container">
            {props.children}
        </Main>
        <Footer />
    </div>
);

export default Layout;