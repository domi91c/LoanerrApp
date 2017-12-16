//Import Dependencies Here
import React, { Component } from 'react';

//Import Statics
import Modals  from '../statics/Modals';

//Import Components
import FormSignUp  from '../components/FormSignUp';

class RegisterPage extends Component {
  render() {
    return (
      <div className="RegisterPage">
            <div className="user-login-5">
            <div className="row bs-reset  l-d-wrap">
                <div className="col-lg-6 login-container bs-reset" style={{ backgroundColor: 'white' }}>
                    <img className="login-logo login-6" height="60px" src="assets/images/loanerr.png" alt="Loanerr" />
                    <div className="login-content">
                        <h1 className="display-5">Sign Up</h1>
                        <FormSignUp/>
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
                            </ul>s
                            </div>
                            <div className="col-xs-7 bs-reset">
                                <div className="login-copyright text-right">
                                    <p>Copyright Â© Loanerr 2017</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 bs-reset d-none d-lg-block">
                    <div className="login-bg"></div>
                </div>
            </div>
        </div>
        < Modals />
      </div>
    );
  }
}

export default RegisterPage;
