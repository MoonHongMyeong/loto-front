import React,{ useContext, useState } from "react";
import styled from "styled-components";
import { DiscordLoginButton, LongButton } from "../button/Buttons";
import { ReactComponent as DiscordIcon } from "../../assets/DiscordIcon.svg";
import { UserInput } from "../input/Inputs"
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import { SERVER } from "../../assets/server";

const LoginModal = () => {
    const userInfo = useContext(UserContext);
    const [loginInfo, setLoginInfo] = useState({
        email : "",
        apiToken : ""
    });

    const handleInput = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        });
    }

    const clickLoginBtn = (e) => {
        axios.post(SERVER.LOGIN_REQUEST, loginInfo)
            .then(res => {
                userInfo.setUser(res.data);
                sessionStorage.setItem('user', JSON.stringify(res.data));
            })
            .catch(e => console.log(e));
    }

    return (
        <Container>
            <ModalContainer>
                <UserInput name={"email"} 
                            placeholder="E-mail" 
                            onChange={handleInput}/>
                <UserInput name={"apiToken"} 
                            placeholder="Api Token" 
                            onChange={handleInput}/>
                <LongButton className="loginBtn" onClick={clickLoginBtn}>Login</LongButton>
                <DiscordLoginButton color={"#F9F7F6"}> 
                    <DiscordIcon width={"1.5em"} 
                                 height={"1.5em"} 
                                 fill={"#F9F7F6"}/>
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
    width: 20rem;
    height: 25rem;
    background-color: #E1E1E1;
    border-radius: 1.5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default LoginModal;