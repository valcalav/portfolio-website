import React from 'react'

import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/HeroSection/Hero'
import About from '../components/AboutSection/About'
import Projects from '../components/ProjectsSection/Projects'

function Home() {
    return (
        <>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        </>
    )
}

export default Home
