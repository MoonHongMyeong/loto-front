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
        if(characterListRef.current.offsetHeight > containerRef.current.offsetHeight){
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
                authorization: 'bearer ' + userInfo.user.apiToken
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
    border-radius: 1rem;
    margin-bottom: 1rem;
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