import React from 'react'
import { FooterContainer, FooterText } from './FooterElements'

function Footer() {
    return (
        <FooterContainer>
            <FooterText>
                © {new Date().getFullYear()} - All Rights Reserved - Verónica Alcalá Vera
            </FooterText>
        </FooterContainer>
    )
}

export default Footer
