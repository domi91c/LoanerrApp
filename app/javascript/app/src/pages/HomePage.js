//Import Dependencies Here
import React, { Component } from 'react';

//Import Statics
import Navbar  from '../statics/Navbar';
import Sidebar from '../statics/Sidebar';
import Modals  from '../statics/Modals';
import PageTitle  from '../statics/PageTitle';

//Import Components
import TableActiveUsers  from '../components/TableActiveUsers';
import UserInfo  from '../components/UserInfo';
import UserMortgageInfo  from '../components/UserMortgageInfo';
import UserDocuments  from '../components/UserDocuments';


class HomePage extends Component {

  render() {
    return (
      <div className="HomePage">
        <div id="wrapper">
          <Navbar />
          <div className="container-fluid l-d-wrap">
            <Sidebar />
            <main className="content pt-4">
              <div className="container">
                <PageTitle />
                <div className="row">
                  <div className="l-frame">
                   <TableActiveUsers />
                  </div>
                  <div className="r-frame">
                      <div className="r_ctrl"></div>
                      <UserInfo />
                      <UserMortgageInfo />        
                      <UserDocuments />
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

export default HomePage;
