import React from 'react'

import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Description, ImgWrap, Img, TechList, Contact, ContactLink, Arrow } from './AboutElements'
import ExternalLink from '../../assets/whiteArrow.png'

import profileImg from '../../assets/profile_duotone.jpg'

function About() {
    return (
        <div>
            <AboutContainer id='about'>
                <AboutWrapper>
                    <AboutRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Hi! My name is</TopLine>
                                <Heading>Verónica Alcalá Vera</Heading>
                                <Description>I am a goal-oriented full-stack junior web developer from Venezuela currently based in Madrid.
                                <br/>
                                I enjoy building things and bringing ideas to life in the browser.
                                <br/>
                                <br/>
                                Here are a few technologies I've been working with recently:
                                <TechList>
                                    <li>JavaScript</li>
                                    <li>React.js</li>
                                    <li>Redux</li>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>MongoDB</li>
                                    <li>CSS</li>
                                    <li>HTML</li>
                                </TechList>
                                </Description>
                                <Contact>Contact</Contact>
                                <Description>
                                veronica.alcala@gmail.com
                                <br/>
                                <ContactLink href='https://github.com/valcalav'>GitHub <Arrow src={ExternalLink} /></ContactLink> | <ContactLink href='https://www.linkedin.com/in/veronicaalcalav/'>LinkedIn <Arrow src={ExternalLink} /></ContactLink>
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
