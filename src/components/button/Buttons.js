import styled from "styled-components";

export const LongButton = styled.button`
    width: 15rem;
    height: 3rem;
    background-color: ${props => props.backgroundcolor === undefined ? "#3F3F3F" : props.backgroundcolor};
    color: ${props => props.color === undefined ? "#F9F7F6" : props.color};
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
    width: 15rem;
    height: 3rem;
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