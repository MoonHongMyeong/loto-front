import React from 'react';
import CharacterItem from './CharacterItem';
import styled from 'styled-components';
import { ShortButton } from '../button/Buttons';

const CharacterList = ({characters}) => {
    return (
        <>
        {   
            Array.from(characters).map((character,index) => {                
                return (
                    <CharacterItem key={index} character={character}/>
                )
            })
                
        }
            <RegisterContainer>
                <ShortButton>등록</ShortButton>
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