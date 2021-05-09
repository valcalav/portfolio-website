import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #192735;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 30px; */
    height: 800px;
    position: relative;
    z-index: 1;
`

export const HeroBackground = styled.div`
    z-index: 2;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 0px 24px;
    display: flex;
    flex-direction: column;
`

export const OutlinedTitle = styled.h1`
    color: #fff;
    font-size: 150px;
    font-weight: 800;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: .8px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.h2`
    margin-top: 24px;
    color: #fff;
    font-size: 50px;
    /* text-align: center; */
    max-width: 660px;
    text-transform: uppercase;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: .8px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }

`