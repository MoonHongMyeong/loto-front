import React, { useContext, useState } from "react";
import styled from "styled-components";
import Header from "../layout/Header";
import Section from "../layout/Section";
import Footer from "../layout/Footer";
import { UserInput } from "../input/Inputs";
import { UserContext } from "../../contexts/UserContext";
import { LongButton } from "../button/Buttons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SERVER } from "../../assets/server";

const SignUp = () => {

    const userInfo = useContext(UserContext);
    const [signUpInfo, setSignUpInfo] = useState({
        email : "",
        apiToken : "",
        nickname : ""
    });
    const navigate = useNavigate();

    const handleInput = (e) => {
        setSignUpInfo({
            ...signUpInfo,
            [e.target.name]: e.target.value
        });
    }

    const clickBtn = (e) => {
        axios.post(SERVER.SIGN_UP_REQUEST, signUpInfo)
        .then(res => {
            userInfo.setUser({
                nickname: res.data.nickname,
                email: res.data.email,
                apiToken: res.data.apiToken,
                discordId: res.data.discordId
            })
        })
        .catch(e => console.log(e));

        sessionStorage.setItem('user', userInfo.user);

        return navigate("/");
    }

    return (
        <>
            <Header/>
            <Section>
                <Container>
                    <SignUpContainer>
                        <UserInput name={"email"} 
                                placeholder="E-mail"
                                onChange={handleInput}/>
                        <UserInput name={"apiToken"} 
                                placeholder="Api Token"
                                onChange={handleInput}/>
                        <UserInput name={"nickname"}
                                placeholder="nickname"
                                onChange={handleInput}/>
                        <LongButton className="signUpBtn"
                                    onClick={clickBtn}>Sign Up</LongButton>
                    </SignUpContainer>      
                </Container>
            </Section>
            <Footer/>
        </>
    )
}

const Container = styled.div`
    width: 50%;
    height: calc(100vh - 10rem);
`;


const SignUpContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e1e1e1;
    border-radius: 1rem;
    padding-top: 2rem;
`;

export default SignUp;