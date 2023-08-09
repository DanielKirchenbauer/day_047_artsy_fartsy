
import ReactDOM from 'react-dom/client'
import React, { useEffect, useState } from 'react'
import ArtworkList from '../../assets/components/ArtworkList/ArtworkList';

const Home = () => {
    const [artwork, setArtwork] =useState([]);

    useEffect(() => {
        fetch("https://api.artic.edu/api/v1/artworks")
        .then((response) => {
            if(!response.ok) {
                throw Error("Fetch went wrong")
            }
            return response.json()
        })

        .then((data) => setArtwork(data.data))
        .catch((error) => console.log(error.message));
        console.log(artwork);
    }, [])
    
  return (
    <div>
      <ArtworkList 
      artwork={artwork} />
    </div>
  )
}

export default Home;
