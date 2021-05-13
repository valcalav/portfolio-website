import React from 'react'
import ParticlesBg from 'particles-bg'
import { HeroContainer, HeroContent, OutlinedTitle, Subtitle } from './HeroElements'

function Hero() {
    return (
        <HeroContainer>
            <HeroContent>
                <OutlinedTitle>Hi, I'm Verónica</OutlinedTitle>
                <Subtitle>Full Stack Web Developer</Subtitle>
            </HeroContent>
            <ParticlesBg type="cobweb" color='#df91ad' num={180} />
        </HeroContainer>
    )
}

export default Hero
