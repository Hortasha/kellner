import styled from 'styled-components';
import Link from 'next/link';


const ClickImg = styled.div`
    background-color: blue;
    width: 50px;
    height: 50px;
    margin: 5px;
    display: inline-block;
`

const FooterStyled = styled.footer`
    & div {
        display: inline-block;
        margin: 8px;
    }
    & a {
        display: inline-block;
        margin: 5px;
    }
`;

const Footer = () => (
    <FooterStyled>
        <ClickImg />
        <ClickImg />
        <ClickImg />
        <div>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
        </div>
    </FooterStyled>
);

export default Footer;