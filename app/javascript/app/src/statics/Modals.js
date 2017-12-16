//Import Dependencies Here
import React, { Component } from 'react';

class Modals extends Component {
  render() {
    return (
      <div className="Modals">
      
        <div className="modal modal-custom-mob in" data-easein="bounceUpIn" id="mob_sidebar" tabIndex="-1" role="dialog">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <div className="modal-dialog">
                <div className="modal-content">
                    <h2>Menu</h2>
                    <a className="btn btn-white" href="Home.html">Active Clients</a>
                    <a className="btn btn-white" href="">Archived Clients</a>
                    <a className="btn btn-white" href="">Updates</a>
                </div>
            </div>
        </div>

        <div className="modal modal-custom-mob in" data-easein="bounceUpIn" id="mob_sidebar_client" tabIndex="-1" role="dialog">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <div className="modal-dialog">
                <div className="modal-content">
                    <h2>Menu</h2>
                    <a className="btn btn-white" href="MyApplication.html">My Applications</a>
                    <a className="btn btn-white" href="">Loans</a>
                    <a className="btn btn-white" href="MyTeam.html">My Team</a>
                </div>
            </div>
        </div>

        <div className="modal modal-custom-mob in" data-easein="bounceUpIn" id="mob_nav" tabIndex="-1" role="dialog">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <div className="modal-dialog">
                <div className="modal-content">
                    <h2>Hello, Madisyn</h2>
                    <div className="avatar-container">
                        <div className="user-photo">
                        </div>
                    </div>
                    <a className="btn btn-white" href="Account.html">Account</a>
                    <a className="btn btn-white" href="Inbox.html">Inbox</a>
                    <a className="btn btn-white" href="Login.html">Log Out</a>
                </div>
            </div>
        </div>

        <div className="modal modal-custom-mob" data-easein="bounceUpIn" id="forgot-password" tabIndex="-1" role="dialog">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <div className="modal-dialog">
                <div className="modal-content">
                    <h2>Forgot your password?</h2>
                    <div className="forgot-password-form" style={{display: 'block'}}>
                        <div className="authform">
                            <form className="forgot-form" id="new_user" action="/users/password" acceptCharset="UTF-8" method="post">
                                <p>We'll send password reset instructions.</p>
                                <div className="form-group">
                                    <input id="forgot-email-field" className="form-control" placeholder="Email" type="email" value="" name="user[email]" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" id="back-btn" className="btn btn-gray" data-dismiss="modal">Cancel</button>
                        <input type="submit" name="commit" value="Submit" className="btn btn-primary float-right" data-disable-with="Submit"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal modal-custom-mob in" data-easein="bounceUpIn" id="add_client_mod" tabIndex="-1" role="dialog">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="fa fa-times" aria-hidden="true"></i>
            </button>
                <div className="modal-dialog">
                      <div className="modal-content">
                          <h2>Add new Client</h2>
                          <div className="forgot-password-form"  style={{display: 'block'}}>
                        <div className="authform">
                            <form className="forgot-form" id="new_user" action="/users/password" acceptCharset="UTF-8" method="post">
                                <p>Use the form below to invite a new client</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">First Name</label>
                                            <input className="form-control" type="text" name="f_name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Last Name</label>
                                            <input className="form-control" type="text" name="l_name"  />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="control-label">Email</label>
                                            <input className="form-control" placeholder="Email" type="email" value="" name="user[email]" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" id="back-btn" className="btn btn-red" data-dismiss="modal">Cancel</button>
                        <input type="submit" name="commit" value="Send Invite" className="btn btn-primary" />
                    </div>
                </div>
            </div>
        </div>

        <div className="modal modal-custom-mob in" data-easein="bounceUpIn" id="contact_realtor_mod" tabIndex="-1" role="dialog">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <div className="modal-dialog">
                <div className="modal-content">
                    <h4 className="modal-title">ABINGWORTH MANAGEMENT LIMITED</h4>
                    <p>Send a document reminder to the realtor.</p>
                    <form action="" acceptCharset="UTF-8" data-remote="true" method="post">
                        <div className="row">
                            <div className="form-group col-md-12">
                                <label className="control-label" htmlFor="template">Select Loan Flow</label>
                                <select className="form form-group form-control" name="template">
                                    <option value="broker">Template</option>
                                </select>
                            </div>
                        </div>
                        <span>Name</span>
                        <hr />
                        <div className="row">
                            <div className="col-md-12">
                                <input type="checkbox" name="identification_form"  />
                                <label className="control-label">Identification Form</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <input type="checkbox" name="mort_protection" />
                                <label className="control-label">Mortgage Protection Plan Waiver</label>
                            </div>
                        </div>
                        <br />
                        <br/>
                        <div className="modal-footer">
                            <div className="form-actions">
                                <input type="reset" name="commit" defaultValue="Cancel" className="btn btn-red" data-dismiss="modal" data-disable-with="Cancel" /> 
                                <input type="submit" name="commit" defaultValue="Send Reminder" className="btn btn-primary" data-disable-with="Send Reminder" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="modal  modal-custom-mob in" id="js-milestone-modal">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <div className="modal-dialog">
                <div className="modal-content">
                    <form action="/milestones/2" acceptCharset="UTF-8" data-remote="true" method="post">
                        <h4 className="modal-title">Some Milestone Name</h4>
                        <p>Uncheck milestone or update it's name</p>
                            <label htmlFor="milestone_title">Title</label>
                            <input className="form-control" type="text" defaultValue="Some Milestone Name" />
                        <div className="modal-footer">
                            <button type="button" className="btn btn-gray" data-dismiss="modal">Close</button>
                            <input type="submit" name="checkoff_milestone" defaultValue="Uncheck Milestone" className="btn btn-primary" data-disable-with="Uncheck Milestone" />
                            <input type="submit" name="commit" defaultValue="Update Milestone" className="btn btn-primary" data-disable-with="Update Milestone" />
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="modal modal-custom-mob in" id="add_doc" tabIndex="-1" role="dialog">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <div className="modal-dialog">
                <div className="modal-content">
                    <h4 className="modal-title">Add new document</h4>
                    <p>Add new document to the client's <strong>(Owned documents)</strong> List</p>
                    <form className="new_document" id="new_document" encType="multipart/form-data" action="/mortgages/1/documents" acceptCharset="UTF-8" data-remote="true" method="post">
                        <div className="row">
                            <div className="form-group col-md-12">
                                <label className="control-label" htmlFor="template">Select Category</label>
                                <select className="form form-group form-control" name="template">
                                    <option value="broker">One-off Documents</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="document_title">Document Title</label>
                                    <input className="form-control" type="text" name="document[title]" id="document_title" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="document_description">Description</label>
                                    <textarea className="form-control" name="document[description]" id="document_description"></textarea>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-12">
                                <input className="form-control file-input" type="file" name="document[attachment]" id="document_attachment" />
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="modal-footer">
                            <div className="form-actions">
                                <input type="reset" name="commit" value="Cancel" className="btn btn-red" data-dismiss="modal" data-disable-with="Cancel" />
                                <input type="submit" name="commit" value="Create" className="btn btn-primary" data-disable-with="Create" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="modal modal-custom-mob in" id="mod_doc" tabIndex="-1" role="dialog">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <h5 className="modal-title">Mortgage Application</h5>
                    <p>October 22nd, 2017</p>
                    <form className="new_document" id="new_document" encType="multipart/form-data" action="/mortgages/1/documents" acceptCharset="UTF-8" data-remote="true" method="post">
                        <div className="row">
                            <div className="form-group col-md-12">
                                <label className="control-label" htmlFor="template">Select Category</label>
                                <select className="form form-group form-control" name="template">
                                    <option value="broker">One-off Documents</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="document_title">Document Title</label>
                                    <input className="form-control" type="text" name="document[title]" id="document_title" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="document_description">Description</label>
                                    <textarea className="form-control" name="document[description]" id="document_description"></textarea>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-12">
                                <input className="form-control file-input" type="file" name="document[attachment]" id="document_attachment" />
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="modal-footer">
                            <div className="form-actions">
                                <input type="reset" name="commit" value="Delete" className="btn btn-red" data-dismiss="modal" data-toggle="modal" href="#confirm_mod" />
                                <input type="reset" name="commit" value="Cancel" className="btn btn-gray" data-dismiss="modal" data-disable-with="Cancel" />
                                <input type="submit" name="commit" value="Save Changes" className="btn btn-primary" data-disable-with="Create" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="modal modal-custom-mob in" data-easein="bounceUpIn" id="confirm_mod" tabIndex="-1" role="dialog">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <i className="fa fa-times" aria-hidden="true"></i>
          </button>
              <div className="modal-dialog">
                  <div className="modal-content">
                      <h4>Please confirm an action</h4>
                      <p>Description</p>
                      <div className="modal-footer">
                          <div className="form-actions">
                              <input type="reset" name="commit" value="Cancel" className="btn btn-red" data-dismiss="modal" data-disable-with="Cancel" />
                              <input type="submit" name="commit" value="Proceed" className="btn btn-primary" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="modal modal-custom-mob show" id="confirm_password_modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                  <button type="button" className="close hidden-sm-down" data-dismiss="modal" aria-label="Close">
                      <i className="fa fa-times" aria-hidden="true"></i>
                  </button>
                  <div className="modal-dialog" role="document">
                      <div className="modal-content">
                          <h4>Account modification</h4>
                          <p>Please, enter your password again</p>
                    <div className="form-group">
                        <input className="form-control" type="password" name="user[confirm_password]" />
                        <span className="fa fa-eye show_pass" title="Show Password"></span>
                    </div>
                    <input value="realtor" type="hidden" name="user[role]" id="user_role" />
                    <div className="modal-footer">
                        <input type="reset" name="commit" value="Cancel" className="btn btn-red" data-dismiss="modal" data-disable-with="Cancel" />
                        <input type="submit" name="commit" value="Proceed" className="btn btn-primary" />
                    </div>
                </div>
            </div>
        </div>

        <div className="modal modal-custom-mob show" id="add_realtor_modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
            <button type="button" className="close hidden-sm-down" data-dismiss="modal" aria-label="Close">
                <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <h4 className="modal-title" id="myModalLabel">Invite Realtor/Solicitor</h4>
                    <div className="form-group">
                        <label htmlFor="user_email">Realtor/Solicitor Email</label>
                        <input className="form-control" placeholder="" type="text" value="" name="user[email]" id="user_email" />
                    </div>
                    <input value="realtor" type="hidden" name="user[role]" id="user_role" />
                    <div className="modal-footer">
                        <input type="reset" name="commit" value="Cancel" className="btn btn-red" data-dismiss="modal" data-disable-with="Cancel" />
                        <input type="submit" name="commit" value="Send Invite" className="btn btn-primary" data-disable-with="Send Invite" />
                    </div>
                </div>
            </div>
        </div>

        <div className="modal modal-custom-mob show" id="cancel_account_modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
            <button type="button" className="close hidden-sm-down" data-dismiss="modal" aria-label="Close">
                <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <h4>Unhappy?</h4>
                    <p>Help us understand your issue call the number bellow (000) 000-0000</p>
                    <div className="form-group">
                        <label htmlFor="user_email">Please, explain the reason you are leaving</label>
                        <textarea className="form-control" name="cancelAccount[description]" id="document_description"></textarea>
                    </div>
                    <input value="realtor" type="hidden" name="user[role]" id="user_role" />
                    <div className="modal-footer">
                        <input type="reset" name="commit" value="Cancel" className="btn btn-gray" data-dismiss="modal" data-disable-with="Cancel" />
                        <input type="submit" name="commit" value="Cancel my account" className="btn btn-red" data-disable-with="Send Invite" />
                    </div>
                </div>
            </div>
        </div>






      
      </div>
    );
  }
}

export default Modals;
