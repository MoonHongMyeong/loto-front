import React from "react";
import styled from "styled-components";

const Section = ({ children }) => {
    return (
        <Container>
            { children }
        </Container>
    )
}

const Container = styled.main`
    width : 100%;
    background-color : #F9F7F3;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Section;