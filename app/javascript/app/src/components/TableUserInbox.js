//Import Dependencies Here
import React, { Component } from 'react';

class TableUserInbox extends Component {
  render() {
    return (
        <table className="table table-custom" id="my-team-table" cellSpacing="0">
            <tbody>
                <tr className="selected">
                    <td>
                        <div className="user-photo-small chat-avatar">
                            <img src="assets/images/user-default.png" alt="user-default"/>
                        </div>
                        <span className="ch-date">Aug 25, 2017</span>
                        <span className="ch-name">Jef Jones</span>
                        <br/>
                        <span className="ch-subject">Loan details</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="user-photo-small chat-avatar">
                            <img src="assets/images/user-default.png" alt="user-default"/>
                        </div>
                        <span className="ch-date">Aug 25, 2017</span>
                        <span className="ch-name">Jef Jones</span>
                        <br/>
                        <span className="ch-subject">Loan details</span>
                    </td>
                </tr>
            </tbody>
        </table>
    );
  }
}

export default TableUserInbox;
