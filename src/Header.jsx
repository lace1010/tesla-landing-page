import React, { useState } from 'react';
import styled from 'styled-components';
import TeslaLogo from './images/tesla-logo.svg';

// Header with 3 main parts. Middle disappears in smaller screens to be more responsive.
// Also includes a Hamburger menu that slides left from right side of screen.

const Container = styled.div`
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    font-weight: 600;
    font-size: 15px;
`

const Left = styled.div`
    flex: 1;
`
const Logo = styled.img`
    width: 100px;
`
const Middle = styled.div`
    flex: 1;
    display: flex;
    @media (max-width: 1150px) {
        display: none;
    }
`

const MiddleItem = styled.div`
    width: 98px;
    cursor: pointer;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 800px) {
        display: none;
    }
`
const RightItem = styled.div`
    padding: 10px;
    cursor: pointer;
`

const HamburgerIcon = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (max-width: 800px) {
        display: flex;
    }
`
const HamburgerContainer = styled.div`
    z-index: 3;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 100vh;
    min-height: 600px;
    background-color: white;
    transition: all .3s ease;
    transform: ${props => props.show ? "translateX(0)" : "translateX(100%)" };
`

const CloseIcon = styled.div`
    align-self: flex-end;
    margin: 30px;
    cursor: pointer;
`

const MenuList = styled.ul`
    list-style-type: none;
`
const ListItem = styled.li`
    margin-bottom: 20px;
    font-weight: 600;
    cursor: pointer;
`

// const BlurOverlay = styled.div`
//     display: ${props => props.display ? "block" : "none"};
//     background: rgba(0, 0, 0, .4);
//     position: fixed;
//     width: 100vw;
//     height: 100vh;
//     z-index: 2;
// `

const Header = () => {
    const [showHamburger, setShowHamburger] = useState(false);

    return (
        <>
        <Container>
            <Left>
                <Logo src={TeslaLogo} alt="tesla logo"/>
            </Left>

            <Middle>
                <MiddleItem>Model S</MiddleItem>
                <MiddleItem>Model 3</MiddleItem>
                <MiddleItem>Model X</MiddleItem>
                <MiddleItem>Model Y</MiddleItem>
                <MiddleItem>Solar Roof</MiddleItem>
                <MiddleItem>Solar Pannels</MiddleItem>
            </Middle>

            <Right>
                <RightItem>Shop</RightItem>
                <RightItem>Account</RightItem>
                <RightItem onClick={() => setShowHamburger(true)}>Menu</RightItem>
            </Right>

            <HamburgerIcon onClick={() => setShowHamburger(true)}>
                icon
            </HamburgerIcon>
        </Container>

        <HamburgerContainer show={showHamburger}>
            <CloseIcon onClick={() => setShowHamburger(false)}>X</CloseIcon>
            <MenuList>
                <ListItem>Existing Inventory</ListItem>
                <ListItem>Used Inventory</ListItem>
                <ListItem>Trade-in</ListItem>
                <ListItem>Test Drive</ListItem>
                <ListItem>Cybertruck</ListItem>
                <ListItem>Roadster</ListItem>
                <ListItem>Semi</ListItem>
                <ListItem>Charging</ListItem>
                <ListItem>Powerwall</ListItem>
                <ListItem>Commercial Energy</ListItem>
                <ListItem>Utilities</ListItem>
                <ListItem>Find Us</ListItem>
                <ListItem>Support</ListItem>
                <ListItem>Investor Relations</ListItem>
            </MenuList>
        </HamburgerContainer>

        {/* <BlurOverlay display={showHamburger}></BlurOverlay> */}
        </>
    )
}

export default Header;
