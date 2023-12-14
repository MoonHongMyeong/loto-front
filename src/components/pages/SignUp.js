import React, { useContext, useState } from "react";
import styled from "styled-components";
import Header from "../layout/Header";
import Section from "../layout/Section";
import Footer from "../layout/Footer";
import { UserInput } from "../input/Inputs";
import { UserContext } from "../../contexts/UserContext";
import { LongButton } from "../button/Buttons";

const SignUp = () => {

    const userInfo = useContext(UserContext);
    const [signUpInfo, setSignUpInfo] = useState({
        email : "",
        apiToken : ""
    });

    const handleInput = (e) => {
        setSignUpInfo({
            ...signUpInfo,
            [e.target.name]: e.target.value
        });
    }

    const clickBtn = (e) => {
        console.log(signUpInfo);
        console.log(userInfo?.user);
    }

    return (
        <>
            <Header/>
            <Section>
                <SignUpContainer>
                    <UserInput name={"email"} 
                               placeholder="E-mail"
                               onChange={handleInput}/>
                    <UserInput name={"apiToken"} 
                               placeholder="Api Token"
                               onChange={handleInput}/>
                    <LongButton className="signUpBtn"
                                onClick={clickBtn}>Sign Up</LongButton>
                </SignUpContainer>
            </Section>
            <Footer/>
        </>
    )
}

const SignUpContainer = styled.div`
    width: 50%;
    height: calc(100vh - 160px);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default SignUp;