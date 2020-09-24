import React from 'react';
import '../BlogCard/style.scss';

const Album =(props)=>{
  
    return(
        <div className="card">
                <div className="card-header">
                    <img src={props.album.artworkUrl100} alt="rover"></img>
                </div>
                <div className="card-body"> 
                    <span className="tag tag-teal">{props.album.primaryGenreName}</span>
                    <h4>{props.album.collectionName}</h4>
                    <p>An exploration into the truck's polarising design.</p>
                    <div className="user">
                        <img src={props.album.artworkUrl60} alt='user 1'></img>
                        <div className="user-info">
                            <h5>{props.album.artistName}</h5>
                            <small>{props.album.releaseDate}</small>
                        </div>
                    </div>
                </div>
           </div>
    )
}

export default Album;