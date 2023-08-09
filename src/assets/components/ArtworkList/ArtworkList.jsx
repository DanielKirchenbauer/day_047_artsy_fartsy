import React, { useEffect, useState } from 'react'
import ArtworkItem from '../ArtworkItem/ArtworkItem'


const ArtworkList = (props) => {




  return (
    <div>
        <h1>Artwork List</h1>
        <ul>
            {props.artwork.map((artwork) => (
                <ArtworkItem 
                key={artwork.artist_id}
                id={artwork.artist_id}
                imageId={artwork.image_id}
                title={artwork.artist_title}
                artist={artwork.artist_display}
                />
            ))}
        </ul>
    </div>
  )
}

export default ArtworkList
