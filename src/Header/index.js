import React, {useState} from 'react';
import {Link } from 'react-router-dom';
import './header.scss';

const Header = ({onSubmit})=>{
    const [searchTerm, setSearchTerm] = useState('');
    const searchTermChange = (e)=>{
        setSearchTerm(e.target.value)
    }

    const searchToggle =(searchTerm)=>{
        onSubmit(searchTerm)
    }

    const onKeyPress = e =>{
        if( e.key === 'Enter'){
            e.preventDefault();
            onSubmit(searchTerm)
        }
    }
    
    return(
        <div className="header-container">
            <div className="header">
                <input className="searchBar" type="text" placeholder="Search..." value={searchTerm} 
                onChange={searchTermChange}
                onKeyPress={onKeyPress}
                ></input>
                    <button className="search__button" onClick={searchToggle}>
                        <svg className="search__icon" version='1.1' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
                            <path d='M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z'></path>
                        </svg>
                    </button>
            </div>
            <div className="subHeader">
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/memorygame">Memory Game</Link>
                </div>
                <div>
                    <Link to='/blogcard'>Blog Card</Link>
                </div>
                <div>
                    <Link to='/login'>Login Form</Link>
                </div>
                <div>
                    <Link to="/adsmanager">Admin Area</Link>
                </div>
                <div>
                    <Link to="/routertest">Router</Link>
                </div>
               
            </div>
        </div>
    )
}


export default Header;