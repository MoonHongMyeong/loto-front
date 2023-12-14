import React, { useContext } from "react";
import styled from "styled-components";
import Header from "../layout/Header";
import Section from "../layout/Section";
import Footer from "../layout/Footer";
import { UserContext } from "../../contexts/UserContext";
import LoginModal from "../modal/LoginModal";

const Main = () => {
    const userInfo = useContext(UserContext);
    
    return (
        <>
            <Header/>
            <Section>
                <Container>

                </Container>
            </Section>
            <Footer/>
            {userInfo.user.nickname === "" && <LoginModal/>}
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 160px);
`;

export default Main;