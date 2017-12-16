//Import Dependencies Here
import React, { Component } from 'react';

//Import Statics
import Navbar  from '../statics/Navbar';
import Sidebar from '../statics/Sidebar';
import Modals  from '../statics/Modals';
import PageTitle  from '../statics/PageTitle';

//Import Components
import FormEditUser  from '../components/FormEditUser';


class AccountPage extends Component {

  render() {
    return (
      <div className="AccountPage">
        <div id="wrapper">
          <Navbar />
          <div className="container-fluid l-d-wrap">
            <Sidebar />
            <main className="content pt-4">
              <div className="container">
                <PageTitle />
                <div className="content-wrap-inner pt-5">
                  <FormEditUser />
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

export default AccountPage;