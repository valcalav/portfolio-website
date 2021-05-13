import React from 'react'

import { ContactContainer, ContactWrapper, ContactTitle, ContactText, Email, ContactLink, Icon } from './ContactElements'
import Arrow from '../../assets/whiteArrow.png'

function Contact() {
    return (
        <ContactContainer>
            <ContactWrapper>
                <ContactTitle>Get in touch</ContactTitle>
                <ContactText>If you wanna get in touch, talk to me about a job position, project collaboration or just say hello:</ContactText>
                <Email><Icon />veronica.alcala@gmail.com</Email>
                <ContactLink>LinkedIn<Icon src={Arrow} /></ContactLink>
                <ContactLink>GitHub<Icon src={Arrow} /></ContactLink>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact
