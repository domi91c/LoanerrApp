//Import Dependencies Here
import React, { Component } from 'react';

class FormSignUp extends Component {
  render() {
    return (
        <form  className="new_user" id="new_user" noValidate="novalidate" action="/users" acceptCharset="UTF-8" method="post">
            <input name="utf8" type="hidden" value="✓" />
            <input type="hidden" name="authenticity_token" value="Z8TgOOZhBcUfpPV9psIwENeRAxzOab9J6D8EYDVAGXqRyQ0ydc5gq514a3ZWY9CMySzCfETGTRpOvNsszzKyTA==" />
            <div className="form-group">
                <input placeholder="First Name" className="form-control" id="signup_first_name" type="text" name="user[first_name]" />
            </div>
            <div className="form-group">
                <input placeholder="Last Name" className="form-control" id="signup_last_name" type="text" name="user[last_name]" />
            </div>
            <div className="form-group">
                <input placeholder="Email" className="form-control" id="signup_email" type="email" value="" name="user[email]" />
            </div>
            <div className="form-group">
                <label htmlFor="user_role">Account Type</label>
                <select className="form-control" name="user[role]" id="user_role" >
                    <option value="broker">Broker</option>
                    <option value="realtor">Realtor</option>
                    <option value="solicitor">Solicitor</option>
                </select>
            </div>
            <div className="form-group">
                <input placeholder="Password" className="form-control" id="signup_password" type="password" name="user[password]" />
            </div>
            <div className="form-group">
                <input placeholder="Confirm password" className="form-control" id="signup_password_confirmation" type="password" name="user[password_confirmation]" />
            </div>
            <hr/>
            <input type="submit" name="commit" value="Sign Up" className="btn btn-primary float-right" data-disable-with="Sign Up"/>
            </form>
    );
  }
}

export default FormSignUp;
