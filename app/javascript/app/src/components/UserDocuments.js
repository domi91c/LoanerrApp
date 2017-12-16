//Import Dependencies Here
import React, { Component } from 'react';

class UserDocuments extends Component {
  render() {
    return (
        <div className="contact-info">
            <h5>Documents</h5>
            <span>Add documents to client's loan flow</span>
            <br/>
            <a className="btn btn-primary" data-toggle="modal" href="#add_doc"><i className="fa fa-plus"></i> Add New</a>
            <br/>
            <br/>
            <br/>
            <div className="form-group">
                <label className="control-label" htmlFor="form_loans">Filter Documents:</label>
                <select className="form form-group form-control" name="form_loans">
                    <option value="broker">Owned Documents (3)</option>
                </select>
            </div>
            <br/>
            <div className="js-documents">
                <div className="doc-blk owed">
                    <h5>Mortgage Application</h5>
                    <span>October 22nd, 2017</span>
                    <hr/>
                    <div className="doc-info" data-toggle="modal" data-target="#mod_doc">
                        Some document name.pdf
                        <span className="badge badge-secondary float-right">owed</span>
                    </div>
                </div>
                <div className="doc-blk accepted">
                    <h5>Mortgage Application</h5>
                    <span>October 22nd, 2017</span>
                    <hr/>
                    <div className="doc-info" data-toggle="modal" data-target="#mod_doc">
                        Some document name.pdf
                        <span className="badge badge-secondary float-right">owed</span>
                    </div>
                </div>
                <div className="doc-blk pending">
                    <h5>Mortgage Application</h5>
                    <span>October 22nd, 2017</span>
                    <hr/>
                    <div className="doc-info" data-toggle="modal" data-target="#mod_doc">
                        Some document name.pdf
                        <span className="badge badge-secondary float-right">owed</span>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default UserDocuments;
