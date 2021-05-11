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

    @media screen and (max-width: 400px) {
        padding: 0px 35px;
    }
`

export const EachProjectContainer = styled.div`
    display: flex;
    margin: 5px 0;
    height: ${props => props.showProject ? '300px' : '100px' };
    transition: 1s;

    @media screen and (max-width: 768px) {
        display: block;
        height: ${props => props.showProject ? '500px' : '60px' };
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ImgContainer = styled.div`
    position: absolute;
    z-index: 0;
    left: 45%;
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
        position: initial;
    }
`

export const ProjectTitleFilled = styled.h1`
    display: ${props => props.showProject ? 'null' : 'none' };
    color: #fff;
    font-size: 108px;
    font-weight: 800;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    cursor: pointer;
    position: absolute;
    z-index: 0;

    @media screen and (max-width: 1366px) {
        font-size: 100px;
    }

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 30px;
        position: initial;
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
    position: absolute;
    z-index: 1;

    &:hover {
        font-size: ${props => props.showProject ? 'null' : '107px' };
        transition: .3s;
    }

    @media screen and (max-width: 1366px) {
        font-size: 100px;
        &:hover {
        font-size: ${props => props.showProject ? 'null' : '99px' };
        transition: .3s;
        }
    }

    @media screen and (max-width: 768px) {
        font-size: 40px;
        position: initial;
        &:hover {
        font-size: ${props => props.showProject ? 'null' : '39px' };
        transition: .3s;
        }
    }

    @media screen and (max-width: 480px) {
        display: ${props => props.showProject ? 'none' : 'initial' };
        margin-bottom: 20px;
        font-size: 30px;
        position: initial;
        &:hover {
        font-size: ${props => props.showProject ? 'null' : '31px' };
        transition: .3s;
        }
    }
`

export const TechUsed = styled.p`
    margin-bottom: 10px;
    margin-top: 0px;
    padding-left: 7px;
    color: #fff;
    font-size: 15px;
    letter-spacing: 1.4px;
    max-width: 600px;
    text-transform: uppercase;
`

export const Description = styled.p`
    max-width: 600px;
    margin-bottom: 15px;
    padding-left: 7px;
    font-size: 14px;
    line-height: 24px;
    color: white;

    @media screen and (max-width: 400px) {
        font-size: 13px;
    }
`

export const ProjectLink = styled.a`
    text-decoration: none;
    color: white;
    font-weight: 600;
    letter-spacing: .6px;
    font-size: 14px;
    padding-left: 7px;
`

export const ImgDuotone = styled.img`
    max-width: 500px;
    position: absolute;
    &:hover {
        opacity: 0.3;
    }

    @media screen and (max-width: 768px) {
        max-width: 400px;
    }

    @media screen and (max-width: 400px) {
        max-width: 280px;
    }
`

export const ImgColor = styled.img`
    max-width: 500px;
    position: absolute;

    @media screen and (max-width: 768px) {
        max-width: 400px;
    }

    @media screen and (max-width: 400px) {
        max-width: 280px;
    }
`

export const Arrow = styled.img`
    max-width: 17px;
`