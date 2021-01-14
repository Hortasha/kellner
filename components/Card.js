import styled from 'styled-components';

const CardStyled = styled.div`
    background-color: lightblue;
    border-radius: 20px;
    padding: 10px;

    & a {
        color: black;

        &:hover {
            color: -webkit-link;
        }
    }

    & .center {
        display: block;
        text-align: center;
        width: 100%;
    }
`;

const Card = (props) => (
    <CardStyled>{props.children}</CardStyled>
);

export default Card;