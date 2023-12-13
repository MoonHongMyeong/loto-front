import React from "react";
import styled from "styled-components";
import { DiscordLoginButton, LoginButton } from "../button/Buttons";
import { ReactComponent as DiscordIcon } from "../../assets/DiscordIcon.svg";
import { LoginInput } from "../input/Inputs"

const LoginModal = () => {
    return (
        <Container>
            <ModalContainer>
                <LoginInput name={"email"} placeholder="E-mail"/>
                <LoginInput name={"apiToken"} placeholder="Api Token"/>
                <LoginButton color="#F9F7F6">Login</LoginButton>
                <DiscordLoginButton color={"#F9F7F6"}> 
                    <DiscordIcon width={"1.5em"} height={"1.5em"} fill={"#F9F7F6"}/>
                    &nbsp;Continue with Discord
                </DiscordLoginButton>
            </ModalContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color : rgba(0,0,0,0.3);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
`;

const ModalContainer = styled.div`
    width: 30vw;
    height: 40vh;
    background-color: #E1E1E1;
    border-radius: 1.5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default LoginModal;