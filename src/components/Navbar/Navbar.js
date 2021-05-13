import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavMenu, NavItem, NavLinks, MobileIcon } from './NavbarElements'

function Navbar() {
    return (
        <Nav>
            <NavbarContainer>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About me</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='projects'>My projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact'>Contact</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
