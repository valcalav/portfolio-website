import React from 'react'

import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/HeroSection/Hero'
import About from '../components/AboutSection/About'
import Projects from '../components/ProjectsSection/Projects'
import Footer from '../components/Footer/Footer'
import Contact from '../components/ContactSection/Contact'

function Home() {
    return (
        <>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
        </>
    )
}

export default Home
