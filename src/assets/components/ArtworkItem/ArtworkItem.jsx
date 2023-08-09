import React from 'react'

function ArtworkItem(props) {
  return (
    <div>
        <li>
            <h1>
            {props.title}
            </h1>
            <img src={`https://www.artic.edu/iiif/2/${props.imageId}/full/843,/0/default.jpg`} alt="" />
            <div>{props.artist}</div>
        </li>
    </div>
  )
}

export default ArtworkItem;
