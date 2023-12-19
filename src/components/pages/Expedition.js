import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "../layout/Header";
import Section from "../layout/Section";
import Footer from "../layout/Footer";
import styled from "styled-components";
import { ExpeditionInput } from "../input/Inputs";
import { ShortButton } from "../button/Buttons";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import CharacterList from "../list/CharacterList"

const Expedition = () => {  
    const userInfo = useContext(UserContext);
    const [characterName, setCharacterName] = useState('');
    const [characters, setCharacters] = useState([]);
    const containerRef = useRef();
    const characterListRef = useRef();

    const resizeCharacterList = () => {
        if(characterListRef.current.children.length !== 0){
            containerRef.current.style.height = '100%'
        }
    }

    useEffect(() => {
        resizeCharacterList();   
    }, [characters]);

    const clickSearchBtn = (e) => {
        axios.get( 'https://developer-lostark.game.onstove.com/characters/'+characterName+'/siblings', {
            headers: {
                accept: 'application/json',
                authorization: 'bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwODQ0NjAifQ.NUkGbsZAA34d8GHRgRwoiUU0s3vUvCVwBym1vnQ0Js6TJ_exKFzm7psKiBSLx-0lapaQXVD5hRMn4BW1gq5pemtbddKU6KLlqioxFDsgVt5Wd91e7YZM2e5-tTDzGk_yymaKRhjn0GWT2SiNnxG8hLu8MMdFT8UUv2byUb8Fxe5kTmprL_u5z8ROKn96xrGZgZS7hRjNW8QKhZm-Rx4a9EtZlaTfPDvtSCdvERps_Xk6DaOghId3A9KWdG79dwKrOXHtCYjGMZyaWuqtiHz0lfw51iolwk8VaY4jqpqRXEPUrcOf7X6o5w0XmrdKKD1AyW1f3C5F-eueed3c1zOxig'
            }
        })
            .then(res => {
                res.data.map(character => {
                    return character.ItemMaxLevel = parseFloat(character.ItemMaxLevel.replace(',',''));
                })
                res.data.sort((a,b) => {
                    return b.ItemMaxLevel - a.ItemMaxLevel;
                })
                setCharacters(Array.from(res.data));
            })
            .catch(e => console.log(e))
    }

    const handleInput = (e) => {
        setCharacterName(e.target.value);
    }

    return (
        <>
            <Header/>
            <Section>
                <Container ref={containerRef}>
                    <InputContainer>
                        <ExpeditionInput className="searchInput" onChange={handleInput}/>
                        <ShortButton className="searchBtn" onClick={clickSearchBtn}>
                            검색
                        </ShortButton>
                    </InputContainer>
                    <CharacterListContainer ref={characterListRef}>
                        {
                            characters.length !== 0 && <CharacterList characters= {characters}/>
                        }
                    </CharacterListContainer>
                </Container>
            </Section>
            <Footer/>
        </>
    )
}

const Container = styled.div`
    width: 60rem;
    height: ${props => props.height === undefined ? 'calc(100vh - 10rem)' : '100%'};
    background-color: #e1e1e1;
    display: flex;
    flex-direction: column;
`;

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
`;

const CharacterListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export default Expedition;