import React, { useState } from 'react'

import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Hero from '../components/HeroSection/Hero'
import About from '../components/AboutSection/About'
import Projects from '../components/ProjectsSection/Projects'
import Footer from '../components/Footer/Footer'
import Contact from '../components/ContactSection/Contact'

function Home() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
        </>
    )
}

export default Home
