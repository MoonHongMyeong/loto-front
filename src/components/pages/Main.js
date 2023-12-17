import React from "react";
import styled from "styled-components";
import Header from "../layout/Header";
import Section from "../layout/Section";
import Footer from "../layout/Footer";

const Main = () => {
    
    return (
        <>
            <Header/>
            <Section>
                <Container>

                </Container>
            </Section>
            <Footer/>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 10rem);
`;

export default Main;