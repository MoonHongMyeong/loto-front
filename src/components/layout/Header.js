import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { UserContext } from "../../contexts/UserContext";
import LoginModal from "../modal/LoginModal";

const Header = () => {

    const loginUser = useContext(UserContext);

    useEffect(() => {
        if(loginUser.user.nickname === "" && sessionStorage.getItem('user')) {
            let sessionUser = JSON.parse(sessionStorage.getItem('user'));
            loginUser.setUser(sessionUser);
        }
    }, [loginUser]);

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
    height: 6.25rem;
    background-color : #F9F7F3;
`;

export default Header;