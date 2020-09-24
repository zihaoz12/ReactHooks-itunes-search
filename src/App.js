import React,{useState, useEffect} from 'react';

import './App.scss';
import Header from './Header/index.js';
import Albums from './Components/Albums/index';
import axios from 'axios';
import Routes from './Components/Routes/index';

const App=()=> {
  const [albums,setAlbums] = useState([]);
  const [posts, setPosts] = useState([]);
  

  const getPosts = async()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then(res =>{
      return res.json();
    }).then( res => {
      console.log('res:',res)
      setPosts(res);
    })
  }
  useEffect(() => {
    getPosts();

  }, [])

  

  
  const handleSubmit = async(searchTerm) =>{
    if(!searchTerm){
        alert('Please Enter Something')
    }else{
        const res = await axios.get(`https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=album&attribute=artistTerm&limit=50`)                 
        console.log("res:",res.data.results);

        setAlbums(res.data.results);
        console.log("albums:", albums);    
    }     
  }

  
  

  return (
    <div className="App">
      <Header onSubmit={handleSubmit}/>  
      <Routes/>   
      <Albums albums={albums}/>

      
    </div>
  );
}

export default App;
