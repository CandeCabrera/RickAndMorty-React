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
                    
                    <img src={characters.image} alt="" />
                    
                    <div className="character-info">
                        <h2>{characters.name}</h2>
                        <div className="characterGrid">
                        <p className='characterInfo'><b>STATUS <br /><br /><br /> </b>{characters.status}</p>
                        <p className='characterInfo'><b>ORIGIN <br /><br /><br /> </b>{characters.origin?.name}</p>
                        <p className='characterInfo'><b>SPECIES <br /><br /><br /> </b>{characters.species}</p>
                        <p className='characterInfo'><b>EPISODES <br /><br /><br /> </b>{characters.episode?.length}</p>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        
        
    );
};

export default ResidentInfo;