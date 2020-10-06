import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import BlogCard from '../BlogCard/index';
import Login, {fakeAuth} from '../Login/index';
import AdsManager from '../AdsManager/index';
import MemoryGame from '../MemoryGame/index';
import RouterTest from '../RouterTest/index';
import Products from '../RouterTest/products';
import ToDoList from '../ToDoList/index';

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log('rest,',rest)
    return (
      <Route
        {...rest}
        render={props =>
          fakeAuth.isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state:{from: props.location} }}
            />
          )
        }
      />
    );
  };

const Routes =()=>{
    return(
        <Switch>   
            <Route path="/memorygame">
                <MemoryGame/>
            </Route>
            <Route path="/blogcard">
                <BlogCard/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <PrivateRoute path="/adsmanager" component={AdsManager}/>
                
            <Route path="/routertest" component={RouterTest}/>
            <Route path="/products" component={Products}/>
            <Route path="/todolist" component={ToDoList}/>
        </Switch>
    )
}

export default Routes;