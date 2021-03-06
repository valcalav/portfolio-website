import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #192735;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 800px;
    position: relative;
    z-index: 1;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1300px;
    position: absolute;
    padding: 0px 75px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1126px) {
        padding: 0px 45px;
    }

    @media screen and (max-width: 480px) {
        padding: 0px 35px;
    }
`

export const OutlinedTitle = styled.h1`
    color: #fff;
    font-size: 190px;
    font-weight: 800;
    margin: 13% 0 0 0;
    text-transform: uppercase;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1.5px;

    @media screen and (max-width: 1226px) {
        font-size: 170px;
    }

    @media screen and (max-width: 1080px) {
        font-size: 140px;
    }

    @media screen and (max-width: 910px) {
        font-size: 120px;
    }

    @media screen and (max-width: 550px) {
        font-size: 75px;
        margin: 0;
    }

    @media screen and (max-width: 480px) {
        font-size: 50px;
        margin: 0;
    }
`

export const Subtitle = styled.h2`
    color: #fff;
    font-size: 50px;
    font-weight: 700;
    max-width: 900px;
    text-transform: uppercase;
    /* -webkit-text-fill-color: transparent; */
    /* -webkit-text-stroke-width: 1px; */

    @media screen and (max-width: 1226px) {
        font-size: 47px;
    }

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 550px) {
        font-size: 30px;
        margin: 0;
    }

    @media screen and (max-width: 480px) {
        font-size: 22px;
        -webkit-text-fill-color: initial;
        font-weight: 600;
    }
`