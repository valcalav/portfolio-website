import React from 'react'

import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Description, ImgWrap, Img, Contact, ContactLink } from './AboutElements'

import profileImg from '../../assets/profile_duotone.jpg'

function About() {
    return (
        <div>
            <AboutContainer>
                <AboutWrapper>
                    <AboutRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>About me</TopLine>
                                <Heading>Verónica Alcalá Vera</Heading>
                                <Description>I am a goal-oriented full-stack junior web developer who builds stuff for fun.
                                <br/>
                                Born and raised in Caracas (Venezuela) and currently based in Madrid (Spain).
                                </Description>
                                <Contact>Contact</Contact>
                                <Description>
                                veronica.alcala@gmail.com
                                <br/>
                                <ContactLink href='https://github.com/valcalav'>GitHub</ContactLink> | <ContactLink href='https://www.linkedin.com/in/veronicaalcalav/'>LinkedIn</ContactLink>
                                </Description>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={profileImg} />
                            </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>

            </AboutContainer>
        </div>
    )
}

export default About
