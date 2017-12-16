//Import Dependencies Here
import React, { Component } from 'react';

//Import Statics
import Navbar  from '../statics/Navbar';
import ClientSidebar from '../statics/ClientSidebar';
import Modals  from '../statics/Modals';
import PageTitle  from '../statics/PageTitle';

//Import Components
import FormMyApplication  from '../components/FormMyApplication';

class MyApplicationPage extends Component {
  render() {
    return (
      <div className="MyApplicationPage">
        <div id="wrapper">
            <Navbar />
            <div className="container-fluid l-d-wrap">
                <ClientSidebar />
                <main className="content pt-4">
                    <div className="container">
                        <PageTitle />
                        <div className="content-wrap-inner pt-5">
                            < FormMyApplication />
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

export default MyApplicationPage;
