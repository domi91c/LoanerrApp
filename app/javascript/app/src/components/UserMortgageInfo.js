//Import Dependencies Here
import React, { Component } from 'react';

class UserMortgageInfo extends Component {
  render() {
    return (
        <div className="contact-info">
            <div className="form-group">
                <label className="control-label" htmlFor="form_loans">Select Loan Flow</label>
                <select className="form form-group form-control" name="form_loans">
                    <option value="broker">Mortgae Loan - $400.000</option>
                </select>
            </div>
            <br/>
            <br/>
            <h5>Realtor</h5>
            <span>Contact the realtor for this loan flow</span>
            <br/>
            <a className="btn btn-primary" data-toggle="modal" href="#contact_realtor_mod">Contact Realtor</a>
            <br/>
            <br/>
            <br/>
            <h5>Milestones</h5>
            <span>Click to check a milestone as completed</span>
            <div className="js-milestones">
                <div className="milestones-user">
                    <table>
                        <tbody>
                            <tr>
                                <td className="">
                                    <span className="point-milestone" data-toggle="modal" data-target="#js-milestone-modal"><i className="fa fa-search"></i></span>
                                </td>
                                <td className="completed">
                                    <span className="point-milestone" data-toggle="modal" data-target="#js-milestone-modal"><i className="fa fa-id-card"></i></span>
                                </td>
                                <td className="completed">
                                    <span className="point-milestone" data-toggle="modal" data-target="#js-milestone-modal"><i className="fa fa-thumbs-up"></i></span>
                                </td>
                                <td className="">
                                    <span className="point-milestone" data-toggle="modal" data-target="#js-milestone-modal"><i className="fa fa-check-circle"></i></span>
                                </td>
                                <td className="">
                                    <span className="point-milestone" data-toggle="modal" data-target="#js-milestone-modal"><i className="fa fa-smile-o"></i></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    );
  }
}

export default UserMortgageInfo;
