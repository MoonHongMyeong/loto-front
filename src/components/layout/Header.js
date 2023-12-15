import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../contexts/UserContext";
import LoginModal from "../modal/LoginModal";

const Header = () => {

    const loginUser = useContext(UserContext);

    return (
        <>
            <Container>
                
            </Container>
            { loginUser.user.nickname === "" && window.location.pathname !== "/signUp" && <LoginModal/>}
        </>
    )
}

const Container = styled.header`
    width: 100%;
    height: 100px;
    background-color : #F9F7F3;
`;

export default Header;