import React from 'react';
import './style.scss';

const AdsManager =({match})=>{
    return(
        <div className="AdsManager-section-container">
            <div className="AdsManager-container">
            <div className="user">
                <i className="fas fa-user"></i>
                UI Design
            </div>

            <div className="search-area">
                <div className="search">
                    <form>
                        <input type="text" placeholder="Search ads" name="search" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
                <div className="filter">
                    <button type="submit">Filter</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Clicks</th>
                        <th>Priority</th>
                        <th>Impressions</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="priority-200">
                        <td>Shure SE110 in-ear headphones</td>
                        <td>875</td>
                        <td><i className="fas fa-circle"></i>200</td>
                        <td>190</td>
                        <td>
                            <button className="delete"><i className="fas fa-trash"></i></button>
                        </td>
                    </tr>
                    <tr className="priority-600">
                        <td>Our favourite IPhone solution</td>
                        <td>620</td>
                        <td><i className="fas fa-circle"></i>600</td>
                        <td>478</td>
                        <td>
                            <button className="delete"><i className="fas fa-trash"></i></button>
                        </td>
                    </tr>
                    <tr className="priority-300">
                        <td>Audio jack for connecting to your own headphones</td>
                        <td>500</td>
                        <td><i className="fas fa-circle"></i>300</td>
                        <td>322</td>
                        <td>
                            <button className="delete"><i className="fas fa-trash"></i></button>
                        </td>
                    </tr>
                    <tr className="priority-200">
                        <td>Memory-foam tips</td>
                        <td>430</td>
                        <td><i className="fas fa-circle"></i>200</td>
                        <td>197</td>
                        <td>
                            <button className="delete"><i className="fas fa-trash"></i></button>
                        </td>
                    </tr>
                    <tr className="priority-300">
                        <td>Cables over the tops</td>
                        <td>170</td>
                        <td><i className="fas fa-circle"></i>300</td>
                        <td>289</td>
                        <td>
                            <button className="delete"><i className="fas fa-trash"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <button type="submit" className="add-btn">
                <i className="fas fa-plus"></i>
            </button>
        </div>
        </div>
    )
}

export default AdsManager;