import styled from 'styled-components';
import Image from 'next/image';

const HeaderStyled = styled.div`

    @media (max-width: 1024px) {
        width: 90vw;
    }
`;

const Header = () => (
    <HeaderStyled>
        <Image src="/header.png" width="1436px" height="271px" />
    </HeaderStyled>
);

export default Header;