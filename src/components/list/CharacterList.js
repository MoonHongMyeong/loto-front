import React, { useEffect } from 'react';
import CharacterItem from './CharacterItem';

const CharacterList = ({characters}) => {
    return (
        <>
        {   
            Array.from(characters).map((character,index) => {                
                return (
                    <>
                        <CharacterItem key={character.CharacterName} character={character}/>
                    </>
                )
            })
        }
        </>
    )

}

export default CharacterList;