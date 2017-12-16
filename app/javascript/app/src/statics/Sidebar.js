//Import Dependencies Here
import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar nopadding" style={{ minHeight: 897 }}>
            <div className="user-photo">
                <img src="assets/images/user-default.png" alt="user-default"/>
            </div>
            <ul className="nav flex-column">
                <li className="nav-item selected">
                    <a className="nav-link" href="/home">Active Clients</a>
                </li>
                <li className="nav-item  coming-soon">
                    <a className="nav-link" href="/xxx">Archived Clients</a>
                </li>
                <li className="nav-item coming-soon">
                    <a className="nav-link" href="/xxx">Updates</a>
                </li>
            </ul>
        </div>
    );
  }
}

export default Sidebar;