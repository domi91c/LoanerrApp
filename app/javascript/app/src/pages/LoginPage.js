//Import Dependencies Here
import React, { Component } from 'react';

//Import Statics
import Modals  from '../statics/Modals';

//Import Components
import FormLogin  from '../components/FormLogin';

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        <div className="user-login-5">
          <div className="row bs-reset">
            <div className="col-lg-6 login-container bs-reset"  style={{ backgroundColor: 'white' }}>
              <img className="login-logo login-6" height="60px" src="assets/images/loanerr.png" alt="Loanerr" />
              <div className="login-content">
                <h1 className="display-2">Broker Login</h1>
                <p>To demo the app, sign in with emails like 'broker9@mail.com', or 'client22@mail.com'. There are 20 broker accounts and 30 client accounts. The password for all users is 'password'.</p>
                <p>To sign in as a client, you must be at the <a href="/portal">portal url</a>.</p>
                <FormLogin />
              </div>
              <div className="login-footer">
                <div className="row bs-reset">
                    <div className="col-xs-5 bs-reset">
                        <ul className="login-social">
                            <li>
                                <a href="/">
                                  <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                  <i className="fa fa-twitter-square" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                  <i className="fa fa-dribbble" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xs-7 bs-reset">
                        <div className="login-copyright text-right">
                            <p>Copyright © Loanerr 2017</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 bs-reset">
              <div className="login-bg" style={{ position: 'relative', zIndex: 0 }}></div>
            </div>
          </div>
        </div>
        < Modals />
      </div>
    );
  }
}

export default LoginPage;
