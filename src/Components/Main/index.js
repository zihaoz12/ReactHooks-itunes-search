import React from 'react';
import Albums from '../Albums/index'

const Main = ({albums}) => {
    const listsOfAlbums = albums.map(album=>(
        <Albums key = {albums.collectionId} album={album}/>
    ))
    return(
        <div className="albums-body">
            {listsOfAlbums}
        </div>
    )
}

export default Main;