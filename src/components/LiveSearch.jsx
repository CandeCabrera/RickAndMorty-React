import React from 'react';

const LiveSearch = ({id, name, setLocationId}) => {
    return (
     
        <li onClick={()=>{
            setLocationId(id)
        }}>{name}</li>
        
    );
};

export default LiveSearch;