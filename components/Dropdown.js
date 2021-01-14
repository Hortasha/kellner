import styled from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const DropdownStyled = styled.div`
    display: flex;
    flex-flow: column;
    border: 1px solid black;

    & h1 {
        margin: 0;
    }
    & .title {
        background-color: lightblue;
        padding: 20px 10px;
        cursor: pointer;
        user-select: none;
    }

    & .content {
        background-color: lightgray;
        padding: 20px 10px;
        display: none;
    }

    & .show {
        display: block;
        flex-grow: 1;
        height: inherit;
    }

`;

const Dropdown = (props) => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <DropdownStyled>
            <div className="title" onClick={handleClick}>
                <h3><FontAwesomeIcon icon={show ? faAngleDown : faAngleRight} /> {props.title}</h3>
            </div>
            <div className={show ? 'show content' : 'content'}>
                {props.children}
            </div>
        </DropdownStyled>
    )
};

export default Dropdown;