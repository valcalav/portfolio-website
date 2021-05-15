import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

import { Nav, NavLogo, NavbarContainer, NavMenu, NavItem, NavLinks, ResumeWrapper, ResumeBtn, MobileIcon,  } from './NavbarElements'

import PDF from '../../assets/FullStack_WebDev_VeronicaAlcalaVera.pdf'


function Navbar() {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>verónica</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' >About me</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='projects' smooth={true} duration={500} spy={true}  >My projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact' smooth={true} duration={500} spy={true}  >Contact</NavLinks>
                    </NavItem>
                    <ResumeWrapper>
                        <ResumeBtn href={PDF} target='_blank'>Resume</ResumeBtn>
                    </ResumeWrapper>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
