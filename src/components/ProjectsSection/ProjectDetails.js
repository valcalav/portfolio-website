import React, { useState } from 'react'

import { ProjectTitle, TechUsed, Description, ImgDuotone } from './ProjectsElements'

function ProjectDetails({title, technologies, description, imageDuotone}) {

    const [showProject, setShowProject] = useState(false)
    //CAMBIAR ESTO EN LUGAR DE ON CLICK, ON HOVER. AL HACER CLICK, IR A GITHUB

    return (
        <div>
            <ProjectTitle onClick={() => setShowProject(!showProject)}>{title}</ProjectTitle>
            {
                showProject && <>
                <TechUsed>{technologies}</TechUsed>
                <Description>{description}</Description>
                <ImgDuotone src={imageDuotone} />
                </>
            }
        </div>
    )
}

export default ProjectDetails
