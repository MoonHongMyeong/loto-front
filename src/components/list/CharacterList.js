import React, { useEffect } from 'react';
import CharacterItem from './CharacterItem';

const CharacterList = ({...characters}) => {
    useEffect(() => {
        console.log(characters)
    }, [characters]);
    return (
        <>
        {
            Array.from(characters).map((character,idx) => {                
                return (
                    <CharacterItem key={idx} character={character}/>
                )
            })
        }
        </>
    )

}

export default CharacterList;