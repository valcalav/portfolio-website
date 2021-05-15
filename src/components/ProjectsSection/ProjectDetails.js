import React from 'react'

import { EachProjectContainer,TextContainer, ImgContainer, ProjectTitleFilled, ProjectTitleOutlined, TechUsed, Description, ProjectLink, ImgDuotone, ImgColor, Arrow } from './ProjectsElements'
import WhiteArrow from '../../assets/whiteArrow.png'

function ProjectDetails({title, technologies, description, imageDuotone, imageColor, github, show, open}) {

    const openProject = () => {
        
        open()
    }

    return (
        <EachProjectContainer showProject={show}>
            <TextContainer >
            <div >
                <ProjectTitleFilled showProject={show}>{title}</ProjectTitleFilled> 
                <ProjectTitleOutlined showProject={show} onClick={() => openProject()}>{title}</ProjectTitleOutlined>
            </div>
                {
                    show && <div>
                    <TechUsed>{technologies}</TechUsed>
                    <Description>{description}</Description>
                    <ProjectLink href={github} target="_blank">Github <Arrow src={WhiteArrow} alt='external link' /></ProjectLink>
                    </div>
                }
            </TextContainer>

            <ImgContainer>
                {
                    show && <a  href={github} target="_blank" rel='noreferrer'>
                    <ImgColor src={imageColor} />
                    <ImgDuotone src={imageDuotone} />
                    </a>
                }
            </ImgContainer>
        </EachProjectContainer>
    )
}

export default ProjectDetails
