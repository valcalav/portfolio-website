import styled from 'styled-components'

export const ProjectContainer = styled.div`
    background: #192735;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 800px;
    position: relative;
`

export const ProjectsWrapper = styled.div`
    max-width: 1200px;
    padding: 0px 75px;
    display: flex;
    flex-direction: column;
`

export const ProjectTitle = styled.h1`
    color: #fff;
    font-size: 100px;
    font-weight: 800;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: .8px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const TechUsed = styled.p`
    margin-bottom: 10px;
    margin-top: 0px;
    padding-left: 7px;
    color: #fff;
    font-size: 12px;
    letter-spacing: 1.4px;
    max-width: 900px;
    text-transform: uppercase;
`

export const Description = styled.p`
    max-width: 730px;
    margin-bottom: 15px;
    padding-left: 7px;
    font-size: 12px;
    line-height: 24px;
    color: white;
`

export const ImgDuotone = styled.img`
    max-width: 450px;
    padding-left: 7px;
    margin-bottom: 20px;
`