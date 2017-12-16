//Import Dependencies Here
import React, { Component } from 'react';

class FormLogin extends Component {
  render() {
    return (
        <form className="login-form bs-reset" id="new_user" action="#" method="post">
        
        <div className="row mb-4">
          <div className="col-md-6">
              <label htmlFor="user_email">Email</label>
              <input placeholder="" className="form-control login-email-field" id="signin_email" type="email" value="" name="user[email]" />
          </div>
          <div className="col-md-6">
              <label htmlFor="user_password">Password</label>
              <input placeholder="" className="form-control login-password-field " id="signin_password" type="password" name="user[password]" />
          </div>
        </div>
        
        <div className="row">
          <div className="col-sm-4">
              <label className="rememberme mt-checkbox mt-checkbox-outline">
                  <input type="checkbox" name="remember" value="1"/> Remember me
                  <span></span>
              </label>
          </div>
          <div className="col-sm-8 text-right">
            <div className="forgot-password">
                <a href="/" id="forgot-password-button" className="forgot-password-button">Forgot Password?</a>
            </div>
            <input type="submit" name="commit" value="Sign In" className="btn btn-info" data-disable-with="Sign In" />
          </div>
          <br/>
          <div className="forgot-password">
              <a href="/">New to Loanerr? Click here to sign up.</a>
          </div>
        </div>
      </form>
    );
  }
}

export default FormLogin;
