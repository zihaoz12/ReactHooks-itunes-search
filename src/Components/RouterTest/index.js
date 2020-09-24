import React from 'react';
import {Link, Route} from 'react-router-dom';
import './style.scss';

const RouterTest =({match})=>{
    return(
        <div className="routerTest-container">
           <div className="routerTest-navbar">
              <nav>
                <ul>
                    <li>
                        <Link to={`${match.url}/shoes`}>Shoes</Link>
                    </li>
                     <li>
                        <Link to={`${match.url}/boots`}>Boots</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/footwear`}>Footwear</Link>
                    </li>
                    <li>
                        <Link to={`/products`}>Product</Link>
                    </li>
                </ul>
                </nav> 
           </div>

            
                <Route path={`${match.path}/:name`}
                        render={({match})=>(
                            <div>
                                <h3>{match.params.name}</h3>
                            </div>
                        )}
                />
            
                
           
           
        </div>
    )
}

export default RouterTest;