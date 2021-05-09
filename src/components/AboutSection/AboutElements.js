import styled from 'styled-components'

export const AboutContainer = styled.div`
    background: #192735;
    color: white;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax()(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col2 col1'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #df91ad;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    text-transform: uppercase;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Description = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 12px;
    line-height: 24px;
    color: white;
`

export const Contact = styled.p`
    font-size: 11px;
    letter-spacing: 1.4px;
    font-weight: 600;
    text-transform: uppercase;
    color: #a8a8a8;
    margin-bottom: 15px;
`

export const ContactLink = styled.a`
    text-decoration: none;
    color: white;
    font-weight: 600;
    letter-spacing: .4px;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0
`
