import React from 'react'

import { HeroContainer, HeroBackground, HeroContent, OutlinedTitle, Subtitle } from './HeroElements'

function Hero() {
    return (
        <HeroContainer>

            {/* <HeroBackground>

            </HeroBackground> */}
            <HeroContent>
                <OutlinedTitle>Hi, I'm Verónica</OutlinedTitle>
                <Subtitle>Full Stack Developer</Subtitle>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default Hero
