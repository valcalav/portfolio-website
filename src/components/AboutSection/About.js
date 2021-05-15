import React from 'react'

import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Description, ImgWrap, Img, TechList, Subtitle, ContactLink, Arrow } from './AboutElements'
import ExternalLink from '../../assets/whiteArrow.png'

import profileImg from '../../assets/profile_duotone.jpg'
import PDF from '../../assets/FullStack_WebDev_VeronicaAlcalaVera.pdf'

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
                                </Description>
                                <Subtitle>Programming Skills</Subtitle>
                                <Description>
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
                                <Subtitle>More about me...</Subtitle>
                                <Description>
                                <ContactLink href={PDF} target='_blank'>PDF Resume <Arrow src={ExternalLink} alt='external link icon' /></ContactLink> | <ContactLink href='https://github.com/valcalav' target="_blank">GitHub <Arrow src={ExternalLink} alt='external link icon' /></ContactLink> | <ContactLink href='https://www.linkedin.com/in/veronicaalcalav/' target="_blank">LinkedIn <Arrow src={ExternalLink} alt='external link icon' /></ContactLink>
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
