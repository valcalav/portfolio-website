import styled from 'styled-components'

export const ContactContainer = styled.div`
    background: #192735;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
`

export const ContactWrapper = styled.div`
    max-width: 1250px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContactTitle = styled.h1`
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    text-transform: uppercase;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const ContactText = styled.p`
    color: white;
    font-weight: 400;
    letter-spacing: .8px;
    font-size: 16px;
    margin-bottom: 20px;
    max-width: 550px;
    text-align: center;
`

export const Email = styled.p`
    color: white;
    font-weight: 600;
    letter-spacing: .8px;
    font-size: 16px;
    margin: 10px 0;
`

export const ContactLink = styled.a`
    text-decoration: none;
    color: white;
    font-weight: 600;
    letter-spacing: .8px;
    font-size: 16px;
    margin: 10px 0;
`

export const Icon = styled.img`
    width: 17px;
    margin-left: 6px;
`

