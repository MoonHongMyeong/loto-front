import React from 'react';
import styled from 'styled-components';
import { Checkbox } from '../input/Inputs';

const CharacterItem = ({character}) => {
    return (
        <Container>
            <CharacterNameContainer>{character.CharacterName}</CharacterNameContainer>
            <CharacterItemLevelContainer>{character.ItemMaxLevel}</CharacterItemLevelContainer>
            <CharacterClassNameContainer>{character.CharacterClassName}</CharacterClassNameContainer>
            <CharacterLevelContainer>{character.CharacterLevel}</CharacterLevelContainer>
            <CharacterServerNameContainer>{character.ServerName}</CharacterServerNameContainer>
            <Checkbox type='checkbox' name={character.CharacterName}/>
        </Container>
    )
}

const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;
const CharacterNameContainer = styled.div`
    width: 14rem;
`;

const CharacterItemLevelContainer = styled.div`
    width: 5rem;
`;

const CharacterClassNameContainer = styled.div`
    width: 8rem;
`;

const CharacterLevelContainer = styled.div`
    width: 3rem;
`;

const CharacterServerNameContainer = styled.div`
    width: 5rem;
`;

export default CharacterItem;