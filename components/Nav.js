import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Navigation = styled.nav`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    width: 100%;
    z-index: 10;

    & a, div {
        padding: 20px;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: red;
        }
    }

    & .selected {
        color: red;
    }

    & div {
        display: none;
    }
    
    @media (max-width: 1024px) {
        grid-template-columns: auto;
        position: absolute;
        background-color: white;
        text-align: center;
        
        & a {
            display: none;
        }

        & div {
            display: inherit;
        }

        & .show {
            display: inherit;
        }

        & .hide {
            display: none;
        }
    }
`;

const AlignMenu = styled.div`
    @media (max-width: 1024px) {
        height: 57px;
        border-bottom: 1px solid black;
    }


`

let menuInfo = [
    {
        url: "/",
        name: "Willkommen"
    },
    {
        url: "/team",
        name: "Unser Team"
    },
    {
        url: "/patienteninformation",
        name: "Patienteninformation"
    },
    {
        url: "/stellenangebote",
        name: "Stellenangebote"
    },
    {
        url: "/anfahrt",
        name: "Anfahrt"
    },
    {
        url: "/links",
        name: "Links"
    }
]


const Nav = () => {
    const [trigger, setTrigger] = useState(false);
    const router = useRouter();
    let currentItem = menuInfo.find(menuItem => menuItem.url == router.pathname);
    let currentPage = currentItem ? currentItem.name : ""
    let menu = [];
    for(let i = 0; i < menuInfo.length; i++){
        let classes = "";
        if(router.pathname == menuInfo[i].url) {
            classes += "selected"
        }
        if(trigger && router.pathname != menuInfo[i].url) {
            classes += " show"
        }

        menu.push(<Link href={menuInfo[i].url} key={"nav" + i}><a className={classes}>{menuInfo[i].name}</a></Link>)
    }

    const handleClick = () => {
        setTrigger(!trigger);
    }

    return (
        <React.Fragment>
            <Navigation>
                <div className={(currentPage == "" ? "": "selected ") + (currentPage == "" && trigger ? "hide": "")} onClick={handleClick}>{currentPage == "" ? "Willkommen" : currentPage}</div>
                {menu}
            </Navigation>
            <AlignMenu />
        </React.Fragment>
    )   
}

export default Nav;