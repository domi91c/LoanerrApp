//Import Dependencies Here
import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-sm-12 col-xl-7">
                <div className="user-photo-small">
                    <img src="assets/images/user-default.png" alt="user-default" />
                </div>
                <div className="user-header">
                    <h5>Oda Hegmann</h5>
                    <span><strong>Milestone:</strong> Get Approved - 5</span>
                </div>
            </div>
            <div className="col-sm-12 col-xl-5">
                <div className="control">
                    <a className="btn btn-gray" data-remote="true" rel="nofollow" data-method="post" href="/conversations?member_id=16&amp;milestone_id=1"><i className="fa fa-commenting"></i> Chat</a>
                    <a className="btn btn-gray" href=""><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
                    <a className="btn btn-gray" data-toggle="modal"  href="#confirm_mod"><i className="fa fa-archive" aria-hidden="true"></i> Archive</a>
                </div>
            </div>
        </div>
    );
  }
}

export default UserInfo;
