//Import Dependencies Here
import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-toggleable-md navbar-inverse ">
            <a className="navbar-toggler float-left" data-toggle="modal" href="#mob_sidebar"><i className="fa fa-bars"></i></a>
            <a className="navbar-brand" href="/xxx"><img width="80px" src="assets/images/loanerr.png" alt="Loanerr"/></a>
            <a className="navbar-toggler float-right" data-toggle="modal" href="#mob_nav"><i className="fa fa-ellipsis-v"></i></a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ">
                    
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active-user"><span>Hello, Madisyn</span></li>
                    <li className="nav-item">
                        <a className="nav-link" href="/inbox">Inbox<span className="msg_count">99</span></a>
                    </li>
                    <li className="nav-item account-controll">
                        <a className="nav-link" href="/account">Account</a>
                        <a className="nav-link" rel="nofollow" data-method="delete" href="/login">Log Out</a>
                    </li>
                </ul>
            </div>
        </nav> 
    );
  }
}

export default Navbar;