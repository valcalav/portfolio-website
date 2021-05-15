import styled from 'styled-components'

export const ContactContainer = styled.div`
    background: #192735;
    color: white;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 855px;

    @media screen and (max-width: 480px) {
        height: 520px;
    }
`

export const ContactWrapper = styled.div`
    max-width: 1250px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 150px;
    margin-right: 6%;
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

export const ContactText = styled.p`
    color: white;
    font-weight: 400;
    letter-spacing: .8px;
    font-size: 14px;
    margin-bottom: 20px;
    max-width: 550px;
    text-align: right;

    @media screen and (max-width: 480px) {
        width: 270px;
    }
`

export const Email = styled.p`
    color: white;
    font-weight: 600;
    letter-spacing: .8px;
    font-size: 40px;
    line-height: 1.1;
    margin-bottom: 8px;

    @media screen and (max-width: 550px) {
        font-size: 34px;  
    }

    @media screen and (max-width: 510px) {
        font-size: 32px;
    }

    @media screen and (max-width: 480px) {
        font-size: 21px;
    }
`

export const ContactLink = styled.a`
    text-decoration: none;
    color: white;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    margin-bottom: 8px;
    letter-spacing: .8px;

    @media screen and (max-width: 550px) {
        font-size: 34px;  
    }

    @media screen and (max-width: 510px) {
        font-size: 32px;
    }

    @media screen and (max-width: 480px) {
        font-size: 21px;
    }
`

export const Icon = styled.img`
    width: 32px;
    margin-left: 6px;

    @media screen and (max-width: 480px) {
        width: 20px;
    }
`

