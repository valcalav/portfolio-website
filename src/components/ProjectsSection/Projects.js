import React from 'react'

import ProjectDetails from './ProjectDetails'
import { ProjectContainer, ProjectsWrapper } from './ProjectsElements'
import MyVeggieWeek1 from '../../assets/mvw_duotone.jpg'

function Projects() {

    return (
        <ProjectContainer>
            <ProjectsWrapper>

                <ProjectDetails title='Book Together' technologies='React.js | Node.js | Express.js | MongoDB | ReactBootstrap | CSS' description='Search public Book Clubs to join, meet new people and read together. The app uses the Google Book API and New York Times Book API to show the bestsellers of the week.' imageDuotone={MyVeggieWeek1}/>

                <ProjectDetails title='My Veggie Week' technologies='React.js | Redux.js | React-redux | React Bootstrap | CSS' description='Search the vegetarian recipes database, set up your weekly meal plan and download the pdf.' />

                <ProjectDetails title='Bolo Wizard' technologies='Node.js | Express.js | MongoDB | HBS | CSS' description='Find music events close to you, either posted by local artists registered to the platform or imported through the Ticketmaster API. Another added functionality is being able to hear the artist or bands music through the Spotify API to get to know them before deciding to attend the event (useful for little-known local artists events).' />

                <ProjectDetails title='Slingshot or Die' technologies='Canvas | JavaScript | CSS' description='Game. Use your mouse to control the slingshot, kill dragons and save innocents.' />

            </ProjectsWrapper>        
        </ProjectContainer>
    )
}

export default Projects
