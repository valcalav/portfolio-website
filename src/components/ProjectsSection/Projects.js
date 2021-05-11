import React, { useState } from 'react'

import ProjectDetails from './ProjectDetails'
import { ProjectContainer, ProjectsWrapper } from './ProjectsElements'
import BookTogetherDuotone from '../../assets/bookTogether_duotone.png'
import BoloWizardDuotone from '../../assets/boloWizard_duotone.png'
import MyVeggieWeekDuotone from '../../assets/myVeggieWeek_duotone.png'
import SlingshotOrDieDuotone from '../../assets/SoD_duotone.png'
import BookTogetherColor from '../../assets/bookTogether_color.png'
import MyVeggieWeekColor from '../../assets/myVeggieWeek_color.png'
import BoloWizardColor from '../../assets/boloWizard_color.png'
import SlingshotOrDieColor from '../../assets/SoD_color.png'

function Projects() {

    const [showBookTogether, setShowBookTogether] = useState(false)
    const [showMyVeggieWeek, setShowMyVeggieWeek] = useState(false)
    const [showBoloWizard, setShowBoloWizard] = useState(false)
    const [showSlingshotOrDie, setShowSlingshotOrDie] = useState(false)

    const openBookTogether = () => {
        setShowBookTogether(!showBookTogether)
        setShowMyVeggieWeek(false)
        setShowBoloWizard(false)
        setShowSlingshotOrDie(false)
    }

    const openMyVeggieWeek = () => {
        setShowBookTogether(false)
        setShowMyVeggieWeek(!showMyVeggieWeek)
        setShowBoloWizard(false)
        setShowSlingshotOrDie(false)
    }

    const openBoloWizard = () => {
        setShowBookTogether(false)
        setShowMyVeggieWeek(false)
        setShowBoloWizard(!showBoloWizard)
        setShowSlingshotOrDie(false)
    }

    const openSlingshotOrDie = () => {
        setShowBookTogether(false)
        setShowMyVeggieWeek(false)
        setShowBoloWizard(false)
        setShowSlingshotOrDie(!showSlingshotOrDie)
    }

    return (
        <ProjectContainer>
            <ProjectsWrapper>

                <ProjectDetails title='Book Together' technologies='React.js | Node.js | Express.js | MongoDB | ReactBootstrap | CSS' description='Search public Book Clubs to join, meet new people and read together. The app uses the Google Book API and New York Times Book API to show the bestsellers of the week.' imageDuotone={BookTogetherDuotone} imageColor={BookTogetherColor} github='https://github.com/valcalav/BookTogether' show={showBookTogether} open={openBookTogether}/>

                <ProjectDetails title='My Veggie Week' technologies='React.js | Redux.js | React-redux | React Bootstrap | CSS' description='Search the vegetarian recipes database, set up your weekly meal plan and download the pdf.' imageDuotone={MyVeggieWeekDuotone} imageColor={MyVeggieWeekColor} github='https://github.com/valcalav/MyVeggieWeek_react-redux-app' show={showMyVeggieWeek} open={openMyVeggieWeek} />

                <ProjectDetails title='Bolo Wizard' technologies='Node.js | Express.js | MongoDB | HBS | CSS' description='Find music events close to you, either posted by local artists registered to the platform or imported through the Ticketmaster API. Another added functionality is being able to hear the artist or bands music through the Spotify API to get to know them before deciding to attend the event.' imageDuotone={BoloWizardDuotone} imageColor={BoloWizardColor} github='https://github.com/valcalav/bolo-wizard' show={showBoloWizard} open={ openBoloWizard} />

                <ProjectDetails title='Slingshot or Die' technologies='Canvas | JavaScript | CSS' description='Game. Use your mouse to control the slingshot, kill dragons and save innocents.' imageDuotone={SlingshotOrDieDuotone} imageColor={SlingshotOrDieColor} github='https://github.com/valcalav/Game_Slingshot-Or-Die' show={showSlingshotOrDie} open={openSlingshotOrDie} />

            </ProjectsWrapper>
        </ProjectContainer>
    )
}

export default Projects
