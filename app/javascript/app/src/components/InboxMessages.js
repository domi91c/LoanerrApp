//Import Dependencies Here
import React, { Component } from 'react';

class InboxMessages extends Component {
  render() {
    return (
       <div>
            <h5>Loan details</h5>
            <hr style={{ marginBottom: 0 }} />
            <table className="table table-custom ch-msgs" id="my-team-table" cellSpacing="0">
                <tbody>
                    <tr>
                        <td>
                            <div className="user-photo-small chat-avatar chat-avatar-small">
                                <img src="assets/images/user-default.png" alt="user"/>
                            </div>
                            <span className="ch-date">Aug 25, 2017</span>
                            <span className="ch-name ch-name-small">Jef Jones</span>
                            <br/>
                            <span className="ch-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="user-photo-small chat-avatar chat-avatar-small">
                                <img src="assets/images/user-default.png" alt="user"/>
                            </div>
                            <span className="ch-date">Aug 25, 2017</span>
                            <span className="ch-name ch-name-small">Jef Jones</span>
                            <br/>
                            <span className="ch-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="user-photo-small chat-avatar chat-avatar-small">
                                <img src="assets/images/user-default.png" alt="user"/>
                            </div>
                            <span className="ch-date">Aug 25, 2017</span>
                            <span className="ch-name ch-name-small">Jef Jones</span>
                            <br/>
                            <span className="ch-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>

                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="row">
                <div className="col-md-12">
                    <div className="user-photo-small chat-avatar chat-avatar-small my-avatar">
                        <img src="assets/images/user-default.png" alt="user"/>
                    </div>
                    <textarea className="ch-msg-box" /> 
                    <input type="button" className="btn btn-primary float-right" name="Send" defaultValue="Send"/>
                </div>
            </div>
            
       </div>
    );
  }
}

export default InboxMessages;
