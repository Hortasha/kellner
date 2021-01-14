import styled from 'styled-components';

const CardContainerStyled = styled.div`
    display: grid;
    grid-row-gap: 15px;
    grid-template-columns: 320px 320px 320px;
    margin-top: 50px;
    justify-content: space-evenly;

    @media (max-width: 1024px) {
        grid-template-columns: 320px 320px;
    }

    @media (max-width: 800px) {
        grid-template-columns: 320px;
    }
`;

const CardContainer = (props) => (
    <CardContainerStyled>{props.children}</CardContainerStyled>
);

export default CardContainer;