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
    max-width: 1250px;
    padding: 0px 75px;
    display: flex;
    flex-direction: column;
`

export const EachProjectContainer = styled.div`
    display: flex;
    margin: 5px 0;
    height: ${props => props.showProject ? '300px' : '100px' };
    transition: 1s;
`

export const TextContainer = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between
`

export const ImgContainer = styled.div`
    position: absolute;
    z-index: 0;
    left: 45%;
    margin-bottom: 40px;
`

export const ProjectTitleFilled = styled.h1`
    
    color: #fff;
    font-size: 108px;
    font-weight: 800;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const ProjectTitleOutlined = styled.h1`
    color: #fff;
    font-size: 108px;
    font-weight: 800;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: .8px;
    cursor: pointer;
    &:hover {
        font-size: ${props => props.showProject ? 'null' : '106px' };
        transition: .3s;
    }

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
    font-size: 15px;
    letter-spacing: 1.4px;
    max-width: 900px;
    text-transform: uppercase;
`

export const Description = styled.p`
    max-width: 730px;
    margin-bottom: 15px;
    padding-left: 7px;
    font-size: 15px;
    line-height: 24px;
    color: white;
`

export const ProjectLink = styled.a`
    text-decoration: none;
    color: white;
    font-weight: 600;
    letter-spacing: .6px;
    font-size: 15px;
    padding-left: 7px;
`

export const ImgDuotone = styled.img`
    max-width: 500px;
    position: absolute;
    &:hover {
        opacity: 0.3;
    }
`

export const ImgColor = styled.img`
    max-width: 500px;
    position: absolute;
`

export const Arrow = styled.img`
    max-width: 17px;
`