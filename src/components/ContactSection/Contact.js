import React from 'react'

import { ContactContainer, ContactWrapper, TopLine, ContactText, Email, ContactLink, Icon } from './ContactElements'
import Arrow from '../../assets/whiteArrow.png'

function Contact() {
    return (
        <>
        <ContactContainer id='contact'>
            <ContactWrapper>
            <TopLine>Get in touch</TopLine>
                <ContactText>If you want to get in touch, talk to me about a job position, project collaboration or just say hello:</ContactText>
                <Email>veronica.alcala@gmail.com</Email>
                <ContactLink href='https://www.linkedin.com/in/veronicaalcalav/' target="_blank">LinkedIn<Icon src={Arrow} /></ContactLink>
                <ContactLink href='https://github.com/valcalav' target="_blank">GitHub<Icon src={Arrow} /></ContactLink>
            </ContactWrapper>
        </ContactContainer>
        </>
    )
}

export default Contact
