import styled from 'styled-components'
import { Link } from 'react-scroll'


export const Nav = styled.div`
    /* background: #192735; */
    height: 80px;
    margin-top: -80px;
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
    justify-content: space-between;
    height: 100px;
    z-index: 1;
    width: 100%;
    padding: 30px 50px;

    @media screen and (max-width:420px) {
        padding: 30px 38px; 
    }
`

export const NavLogo = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    margin-left: 24px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1.4px;
    font-weight: 900;
    height: 66px;

    @media screen and (max-width:420px) {
        margin-left: 0px;  
    }
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

    @media screen and (max-width:768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 100px;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 1.4px;
    font-weight: 600;
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

export const ResumeWrapper = styled.div`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-top: 26px;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #df91ad;
    }
`

export const ResumeBtn = styled.a`
    color: #df91ad;
    border: 1.9px solid #df91ad;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 40px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 1.4px;
    font-weight: 900;

    &.active {
        border-bottom: 3px solid #df91ad;
    }
`


