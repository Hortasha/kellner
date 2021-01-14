import styled from 'styled-components';

const SectionSeperatorStyled = styled.div`
    display: grid;
    grid-row-gap: 50px;
    grid-template-columns: auto;
    margin-top: 50px;
`;

const SectionSeperator = (props) => (
    <SectionSeperatorStyled>{props.children}</SectionSeperatorStyled>
);

export default SectionSeperator;