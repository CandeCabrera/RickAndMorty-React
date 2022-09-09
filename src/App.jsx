import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css"
import axios from "axios";
import ResidentInfo from "./components/ResidentInfo";
import LiveSearch from "./components/LiveSearch";

function App() {
  const [location, setLocation] = useState({});
  const [locationId, setLocationId] = useState("");
  const [locationName, setLocationName] = useState("");
  const [locationSearch, setLocationSearch] = useState([]);

  useEffect(() => {
   const id = locationName ? locationId : (Math.floor(Math.random() * 126) + 1)
    axios
     .get(`https://rickandmortyapi.com/api/location/${id}`)
     .then((res) => setLocation(res.data));
  }, [locationId]);

  const searchLocationName = (name)=>{
    setLocationName(name)
    console.log(name, locationName);
    if(name.length > 0){
      axios
        .get(`https://rickandmortyapi.com/api/location/?name=${name}`)
        .then((res) => setLocationSearch(res.data.results))
        .finally(()=>{
          if(locationSearch.length > 7){
            const actualLocation = locationSearch.slice(0, 6)
            setLocationSearch(actualLocation)
            console.log(`https://rickandmortyapi.com/api/location/?name=${name}`);
          }
        })
    }
    
  };
  
  return (
    <div className="App">
      <input
        placeholder="Search your location"
        type="text"
        value={locationName}
        onChange={(e) => searchLocationName(e.target.value)}
      />
      {/* <button onClick={searchLocationName}>Search</button> */}

      <ul>
        {locationSearch.map((place)=>(
          <LiveSearch
          key={place.id}
          id={place.id}
          name={place.name}
          setLocationId={setLocationId}/>
        ))}
      </ul>

      <div className="location-info">
        <h1>{location.name}</h1>
        <p>
          <b>Type: </b>
          {location.type}
        </p>
        <p>
          <b>Dimension: </b>
          {location.dimension}
        </p>
        <p>
          <b>Population: </b>
          {location.residents?.length}
        </p>
      </div>
     
      <div className="container">
        {location.residents?.map((resident) => (
          <ResidentInfo url={resident} key={resident} />
        ))}
      </div>

      
    </div>
  );
}

export default App;