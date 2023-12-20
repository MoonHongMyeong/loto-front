import React, { useEffect, useState } from 'react';
import CharacterItem from './CharacterItem';
import styled from 'styled-components';
import { ShortButton } from '../button/Buttons';
import { SERVER } from '../../assets/server';
import axios from 'axios';

const CharacterList = ({characters}) => {
    const [characterList, setCharacterList] = useState([]);

    const registerCharaters = (e) => {
        console.log(characterList)
        axios.post(SERVER.REGISTER_CHARACTER_REQUEST, characterList)
            .then(res => {
                console.log(res)
            })
            .catch(e => console.log(e));
    }

    const addCharacter = (character) => {
        setCharacterList(characterList.concat(character));
    }

    const subCharacter = (character) => {
        setCharacterList(characterList
            .filter((inCharacter) => inCharacter.characterName !== character.characterName)
            );
    }

    return (
        <>
        {   
            Array.from(characters).map((character,index) => {                
                return (
                    <CharacterItem key={index} 
                                   character={character}
                                   addCharacter={addCharacter}
                                   subCharacter={subCharacter}
                    />
                )
            })
                
        }
            <RegisterContainer>
                <ShortButton className='registerBtn' onClick={registerCharaters}>등록</ShortButton>
            </RegisterContainer>
        </>
    )

}

const RegisterContainer = styled.div`
    width: 80%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: end;
    align-items: center;
`;


export default CharacterList;