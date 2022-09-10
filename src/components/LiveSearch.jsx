import React from 'react';

const LiveSearch = ({id, name, setLocationId}) => {
    return (
     
        <li className='liveSearchList' onClick={()=>{
            setLocationId(id)
        }}>{name}</li>
        
    );
};

export default LiveSearch;