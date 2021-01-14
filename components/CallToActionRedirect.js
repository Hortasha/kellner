import styled from 'styled-components';
import Link from 'next/link';

const CallToActionRedirectStyle = styled.div`
    & a {
        color: black;
        text-decoration: none;
        background-color: lightblue;
        padding: 10px 20px;
        border-radius: 50px;
        white-space: nowrap;

        &:hover {
            background-color: #9DB8D6;
        }
    }
`;

const CallToActionRedirect = (props) => (
    
    <CallToActionRedirectStyle><Link href={props.href}>{props.children}</Link></CallToActionRedirectStyle>
);

export default CallToActionRedirect;