import React from 'react';
import './style.scss';
import roverImg from '../../assets/blogCard/rover.jpeg';
import user1 from '../../assets/blogCard/user-1.jpg';


const BlogCard = () =>{
    
    return(
        <div className="blogCard-container">
           <div className="card">
                <div className="card-header">
                    <img src={roverImg} alt="rover"></img>
                </div>
                <div className="card-body"> 
                    <span className="tag tag-teal">Technology</span>
                    <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                    <p>An exploration into the truck's polarising design.</p>
                    <div className="user">
                        <img src={user1} alt='user 1'></img>
                        <div className="user-info">
                            <h5>Carrie Brewer</h5>
                            <small>5min ago</small>
                        </div>
                    </div>
                </div>
           </div>
           <div className="card">
                <div className="card-header">
                    <img src={roverImg} alt="rover"></img>
                </div>
                <div className="card-body"> 
                    <span className="tag tag-purple">Popular</span>
                    <h4>How to Keep Going When You Don't Know What's Next</h4>
                    <p>The future can be scary, but there are ways to deal with that fear.</p>
                    <div className="user">
                        <img src={user1} alt='user 1'></img>
                        <div className="user-info">
                            <h5>Jerome Walton</h5>
                            <small>Yesterday</small>
                        </div>
                    </div>
                </div>
           </div>
           <div className="card">
                <div className="card-header">
                    <img src={roverImg} alt="rover"></img>
                </div>
                <div className="card-body"> 
                    <span className="tag tag-pink">Design</span>
                    <h4>10 Rules of Dashboard Design</h4>
                    <p>Dashboard Design Guidelines</p>
                    <div className="user">
                        <img src={user1} alt='user 1'></img>
                        <div className="user-info">
                            <h5>Lewis Daniels</h5>
                            <small>3 Dec 2019</small>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default BlogCard;