//Import Dependencies Here
import React, { Component } from 'react';

//Import Statics
import Navbar  from '../statics/Navbar';
import Sidebar from '../statics/Sidebar';
import Modals  from '../statics/Modals';
import PageTitle  from '../statics/PageTitle';

//Import Components
import TableUserInbox  from '../components/TableUserInbox';
import InboxMessages  from '../components/InboxMessages';


class InboxPage extends Component {

  render() {
    return (
      <div className="InboxPage">
        <div id="wrapper">
          <Navbar />
          <div className="container-fluid l-d-wrap">
            <Sidebar />
            <main className="content pt-4">
              <div className="container">
                <PageTitle />
                <div className="row">
                  <div className="l-frame">
                  <TableUserInbox />
                  </div>
                  <div className="r-frame">
                      <div className="r_ctrl"></div>
                      <InboxMessages />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <Modals />
      </div>
    );
  }
}

export default InboxPage;
