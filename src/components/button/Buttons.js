import styled from "styled-components";

export const LoginButton = styled.button`
    width: 20vw;
    height: 5vh;
    background-color: #3f3f3f;
    color: ${props => props.color};
    border-radius: 0.3vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
    margin-bottom: 1.5em;
    &:hover{
        cursor: pointer;
    }
`

export const DiscordLoginButton = styled.button`
    width: 20vw;
    height: 5vh;
    background-color: #5865F2;
    border-radius: 0.3vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
    margin: 0;
    color: ${props => props.color};
    &:hover{
        cursor: pointer;
    }
`;