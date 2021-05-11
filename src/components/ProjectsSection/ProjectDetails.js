import React from 'react'

import { EachProjectContainer,TextContainer, ImgContainer, ProjectTitle, TechUsed, Description, ProjectLink, ImgDuotone, Arrow } from './ProjectsElements'
import WhiteArrow from '../../assets/whiteArrow.png'

function ProjectDetails({title, technologies, description, imageDuotone, github, show, open}) {

    const openProject = () => {
        
        open()
    }

    return (
        <EachProjectContainer showProject={show}>
            <TextContainer >
                <ProjectTitle onClick={() => openProject()}>{title}</ProjectTitle>
                {
                    show && <div>
                    <TechUsed>{technologies}</TechUsed>
                    <Description>{description}</Description>
                    <ProjectLink href={github} target="_blank">Go to project <Arrow src={WhiteArrow} alt='external link' /></ProjectLink>
                    </div>
                }
            </TextContainer>

            <ImgContainer>
                {
                    show && <ImgDuotone src={imageDuotone} />
                }
            </ImgContainer>
        </EachProjectContainer>
    )
}

export default ProjectDetails
