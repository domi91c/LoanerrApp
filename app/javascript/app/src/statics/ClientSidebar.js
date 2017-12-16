//Import Dependencies Here
import React, { Component } from 'react';

class ClientSidebar extends Component {
  render() {
    return (
        <div className="sidebar nopadding" style={{ minHeight: 897 }}>
            <div className="user-photo">
                <img src="assets/images/user-default.png" alt="user-default"/>
            </div>
            <ul className="nav flex-column ">
                <li className="nav-item selected">
                    <a className="nav-link" href="/myapplication">My Application</a>
                </li>
                <li className="nav-item selected">
                    <a className="nav-link" href="">Loans</a>
                </li>
                <li className="nav-item  coming-soon">
                    <a className="nav-link" href="">Rewards</a>
                </li>
                <li className="nav-item  coming-soon">
                    <a className="nav-link" href="">Promotions</a>
                </li>
                <li className="nav-item  coming-soon">
                    <a className="nav-link" href="">Financial News</a>
                </li>
                <li className="nav-item selected ">
                    <a className="nav-link" href="/myteam">My Team</a>
                </li>
            </ul>
    
        </div>
    );
  }
}

export default ClientSidebar;