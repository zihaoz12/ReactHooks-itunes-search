import React from 'react';
import './albums.scss';
import Album from './album';
import '../BlogCard/style.scss';

const Albums = (props)=>{
    return(
        <div style={{paddingTop:"150px"}} className="blogCard-container">
            {
                props.albums.length > 0 ? (props.albums.map( (item,index) => (
                    <Album key={index} album={item}/>
                ))) : ( <div> Loading Albums....</div> )
            }
           
        </div>
    )
}



export default Albums