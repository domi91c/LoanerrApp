//Import Dependencies Here
import React, { Component } from 'react';

class TableActiveUsers extends Component {
  render() {
    return (
       <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#add_client_mod">
                <span>+ Add New Client</span></button>
            <hr/>
            <table className="table table-custom" id="my-team-table" cellSpacing="0" width="100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Client</th>
                        <th>Milestone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr data-href="/mortgages/1/show_client" className="selected">
                        <td>
                            999
                        </td>
                        <td className="show_status status16">
                            Oda Hegmann
                        </td>
                        <td>
                            Get Approved - 5
                        </td>
                    </tr>
                    <tr data-href="/mortgages/1/show_client"> 
                        <td>
                            999
                        </td>
                        <td className="show_status status16">
                            Oda Hegmann
                        </td>
                        <td>
                            Get Approved - 5
                        </td>
                    </tr>
                </tbody>
            </table>
       </div>
    );
  }
}

export default TableActiveUsers;
