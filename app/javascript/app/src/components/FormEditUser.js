//Import Dependencies Here
import React, { Component } from 'react';

class FormEditUser extends Component {
  render() {
    return (
       <div>
            <div className="authform">
                <form className="edit_user" id="edit_user" action="/users" acceptCharset="UTF-8" method="post">
                    <h5>Modify Name</h5>
                    <hr/>
                    <div className="form-group">
                        <label htmlFor="user_first_name">First name</label>
                        <input autoFocus="autofocus" className="form-control" type="text" defaultValue="Madisyn" name="user[first_name]" id="user_first_name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_last_name">Last name</label>
                        <input autoFocus="autofocus" className="form-control" type="text" defaultValue="Collins" name="user[last_name]" id="user_last_name"/>
                    </div>
                    <br/>
                    <h5>Modify Email</h5>
                    <hr/>
                    <div className="form-group">
                        <label htmlFor="user_email">Email</label>
                        <input className="form-control" type="email" defaultValue="broker1@mail.com" name="user[email]" id="user_email"/>
                    </div>
                    <br/>
                    <h5>Modify Password</h5>
                    <hr/>
                    <fieldset>
                        <p>Leave these fields blank if you don't want to change your password.</p>
                        <div className="form-group">
                            <label htmlFor="user_password">New Password</label>
                            <input autoComplete="off" className="form-control" type="password" name="user[password]" id="user_password"/>
                            <span className="fa fa-eye show_pass" title="Show Password"></span>
                        </div>
                        <div className="form-group" style={{ display: 'none' }}>
                            <label htmlFor="user_password_confirmation">Password confirmation</label>
                            <input className="form-control" type="password" name="user[password_confirmation]" id="user_password_confirmation"/>
                            
                        </div>
                    </fieldset>
                    <fieldset>
                        <p>You must enter your current password to make changes.</p>
                        <div className="form-group">
                            <label htmlFor="user_current_password">Current password</label>
                            <input className="form-control" type="password" name="user[current_password]" id="user_current_password"/>
                            <span className="fa fa-eye show_pass" title="Show Password"></span>
                        </div>
                    </fieldset>
                    <br/>
                    <input type="button" name="commit" defaultValue="Save Changes" className="btn btn-primary float-right" data-toggle="modal" href="#confirm_password_modal"/>
                </form>
            </div>
            <br/>
            <div className="authform mb-5">
                <h3>Cancel Account</h3>
                <p><a data-toggle="modal" href="#cancel_account_modal">Unhappy?</a> We'll be sad to see you go.</p>
            </div>
       </div>
    );
  }
}

export default FormEditUser;
