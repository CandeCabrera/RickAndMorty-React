import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const ResidentInfo = ({url}) => {

    const [characters, setCharacters] = useState({});

    useEffect(()=>{
        axios.get(url)
        .then(res => setCharacters(res.data))
    }, []);

    return (
        
            <div className="characters" key={characters.id}>
                <div className='character-container'>
                    <h1>{characters.name}</h1>
                    <img src={characters.image} alt="" />
                    <div className="character-info">
                        <p><b>Status: </b>{characters.status}</p>
                        <p><b>Origin: </b>{characters.origin?.name}</p>
                        <p><b>Species: </b>{characters.species}</p>
                        <p><b>Episodes: </b>{characters.episode?.length}</p>
                        
                    </div>
                </div>
                
            </div>
        
        
    );
};

export default ResidentInfo;