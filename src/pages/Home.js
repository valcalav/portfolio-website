import React from 'react'

import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/HeroSection/Hero'
import About from '../components/AboutSection/About'
import Projects from '../components/ProjectsSection/Projects'
import Footer from '../components/Footer/Footer'

function Home() {
    return (
        <>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Footer />
        </>
    )
}

export default Home
