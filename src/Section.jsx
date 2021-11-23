import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100vh;
    min-height: 600px;
    background: ${props => `url(./images/${props.image})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
const HeaderContainer = styled.div`
    text-align: center;
`
const Title = styled.div`
    font-weight: bold;
    font-size: 30px;
`
const Subtitle = styled.div`
    font-weight: 300;
    margin-top: 10px;
`
const ButtonContainer = styled.div`
    display: flex;

    @media (max-width: 650px) {
        flex-direction: column;
    }
`
const DarkButton = styled.button`
    margin-right: 10px;
    background-color: rgba(0, 0, 0, .6);
    color: white;
    border: none;
    border-radius: 40px;
    padding: 15px 80px;
    cursor: pointer;

    @media (max-width: 650px) {
        margin-bottom: 10px;
        margin-right: 0px;
    }
`
const LightButton = styled.button`
    background-color: rgba(255, 255, 255, .6);
    border: none;
    border-radius: 40px;
    padding: 15px 80px;
    cursor: pointer;
`

const ShopNowButton = styled.button`
    background-color: rgba(0, 0, 0, .9);
    color: white;
    border: none;
    border-radius: 40px;
    padding: 15px 80px;
    cursor: pointer;
    margin-top: 20px;
`
const Section = ({title, image}) => {
    console.log(title)
    return (
        // pass the sections background image as styled-components prop. Then use that for background-image url
        <Container image={image}>
            <Fade>
                <HeaderContainer>
                    <Title>{title}</Title>
                    <Subtitle>Order Online for <span style={{textDecoration:"underline", color: "black", cursor: "pointer"}}>Touchless Delivery</span></Subtitle>
                </HeaderContainer>
            </Fade>

            <Fade>
                <ButtonContainer>
                   { title === "Accessories" && <ShopNowButton>SHOP NOW</ShopNowButton> }
                   { title !== "Accessories" && <DarkButton>CUSTOM ORDER</DarkButton> }
                   { title !== "Accessories" && <LightButton>EXISTING INVENTORY</LightButton>}
                </ButtonContainer>
            </Fade>
        </Container>
            
    )
}
export default Section;
