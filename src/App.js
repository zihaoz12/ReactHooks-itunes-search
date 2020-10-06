import React,{useState, useEffect,useRef} from 'react';

import './App.scss';
import Header from './Header/index.js';
import Albums from './Components/Albums/index';
import axios from 'axios';
import Routes from './Components/Routes/index';

const App=()=> {
  const [albums,setAlbums] = useState([]);
  const [posts, setPosts] = useState([]);
  
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(counter)
  console.log('counter',counter);
  console.log('Ref:',counterRef);
  counterRef.current = counter;

  const getPosts = async()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then(res =>{
      return res.json();
    }).then( res => {
      let resres = res.filter( item => item.id <= 25)
      console.log('res:',resres)
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

  
  const increment=()=>{
    setCounter(counter+1)
  }
  

  return (
    <div className="App">
      <Header onSubmit={handleSubmit}/>  
      <Routes/>   
      
      <Albums albums={albums}/>

      <button onClick={increment}>Click</button>
      <p>CounterRef:{counterRef.current}</p>
      
    </div>
  );
}

export default App;
