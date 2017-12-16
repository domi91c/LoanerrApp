//Import Dependencies Here
import React, { Component } from 'react';

//Import Statics
import Navbar  from '../statics/Navbar';
import ClientSidebar from '../statics/ClientSidebar';
import Modals  from '../statics/Modals';
import PageTitle  from '../statics/PageTitle';

//Import Components
import TableMyTeam  from '../components/TableMyTeam';
import UserInfo  from '../components/UserInfo';
import UserContactInfo  from '../components/UserContactInfo';


class MyTeamPage extends Component {
  render() {
    return (
      <div className="MyTeamPage">
        <div id="wrapper">
            <Navbar />
            <div className="container-fluid l-d-wrap">
                <ClientSidebar />
                <main className="content pt-4">
                    <div className="container">
                        <PageTitle />
                        <div className="row">
                            <div className="l-frame">
                                <TableMyTeam />s
                            </div>
                            <div className="r-frame">
                                <div className="r_ctrl"></div>
                                <UserInfo />
                                <UserContactInfo />
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

export default MyTeamPage;
