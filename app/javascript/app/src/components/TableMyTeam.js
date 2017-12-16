//Import Dependencies Here
import React, { Component } from 'react';

class TableMyTeam extends Component {
  render() {
    return (
       <div>
            <button name="button" type="button" data-toggle="modal" data-target="#add_realtor_modal" className="btn btn-primary" id="addRealtor">
                <span>+ Add Realtor</span>
            </button>
            <button name="button" type="button" data-toggle="modal" data-target="#add_realtor_modal" className="btn btn-primary fl-right" id="addSolicitor">
                <span>+ Add Solicitor</span>
            </button>
            <table className="table table-custom" id="my-team-table" cellSpacing="0" width="100%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr data-href="/portal/teams/6/show_user">
                        <td>Spencer Beer</td>
                        <td>solicitor</td>
                        <td><span className="badge badge-secondary">Pending</span></td>
                    </tr>
                    <tr data-href="/portal/teams/11/show_user">
                        <td>Samara Conroy</td>
                        <td>realtor</td>
                        <td><span className="badge badge-secondary">Pending</span></td>
                    </tr>
                    <tr data-href="/portal/teams/1/show_user">
                        <td>Xzavier Mann</td>
                        <td>broker</td>
                        <td><span className="badge badge-secondary">Pending</span></td>
                    </tr>
                </tbody>
            </table>
       </div>
    );
  }
}

export default TableMyTeam;
