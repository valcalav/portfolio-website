import styled from 'styled-components'
import { Link } from 'react-scroll'


export const Nav = styled.div`
    background: #000;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    right: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 100px;
    z-index: 1;
    width: 100%;
    padding: 30px 50px;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
        padding: 7px 5px;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    /* margin-right: -22px; */

    @media screen and (max-width:768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 100px;
`

export const NavLinks = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #df91ad;
    }
`



