//Import Dependencies Here
import React, { Component } from 'react';

class FormMyApplication extends Component {
  render() {
    return (
        <form className="edit_form_mortgage_application" id="edit_form_mortgage_application_1" noValidate="novalidate" action="" acceptCharset="UTF-8" method="post">
            <h2>Personal Info</h2>
            <div className="table-wrap">
                <div className="row">
                </div>
                <div className="row">
                    <div className="col-xl-3">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_salutation">Salutation</label>
                            <select className="form form-group form-control" name="form_mortgage_application[salutation]" id="form_mortgage_application_salutation">
                                <option value="Mr.">Mr.</option>
                                <option value="Ms.">Ms.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Dr.">Dr.</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" validate="{:presence=>true}" htmlFor="form_mortgage_application_first_name">First Name</label>
                            <input className="form-control" type="text" name="form_mortgage_application[first_name]" id="form_mortgage_application_first_name"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_last_name">Last Name</label>
                            <input className="form-control" type="text" name="form_mortgage_application[last_name]" id="form_mortgage_application_last_name"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" validate="true" htmlFor="form_mortgage_application_birthday">Date of Birth</label>
                            <input className="form-control" type="text" name="form_mortgage_application[birthday]" id="form_mortgage_application_birthday"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_marital_status">Marital Status</label>
                            <input className="form-control" type="text" name="form_mortgage_application[marital_status]" id="form_mortgage_application_marital_status"/>
                        </div>
                    </div>
                </div>
                <h2>Contact Info</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_phone_cell">Cell Phone</label>
                            <input className="form-control" type="text" name="form_mortgage_application[phone_cell]" id="form_mortgage_application_phone_cell"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_phone_home">Home Phone</label>
                            <input className="form-control" type="text" name="form_mortgage_application[phone_home]" id="form_mortgage_application_phone_home"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_email">Email</label>
                            <input className="form-control" type="text" name="form_mortgage_application[email]" id="form_mortgage_application_email"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_confirm_email">Confirm Email</label>
                            <input className="form-control" type="text" name="form_mortgage_application[confirm_email]" id="form_mortgage_application_confirm_email"/>
                        </div>
                    </div>
                </div>
                <h2>Address Information</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_current_address">Current Address</label>
                            <input className="form-control" type="text" name="form_mortgage_application[current_address]" id="form_mortgage_application_current_address"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_current_unit_apt">Unit/Apt</label>
                            <input className="form-control" type="text" name="form_mortgage_application[current_unit_apt]" id="form_mortgage_application_current_unit_apt"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_current_city">City</label>
                            <input className="form-control" type="text" name="form_mortgage_application[current_city]" id="form_mortgage_application_current_city"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_current_province">Province</label>
                            <input className="form-control" type="text" name="form_mortgage_application[current_province]" id="form_mortgage_application_current_province"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_time_residence">Time at Residence</label>
                            <input className="form-control" type="text" name="form_mortgage_application[time_residence]" id="form_mortgage_application_time_residence"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_prev_address">Previous Address</label>
                            <input className="form-control" type="text" name="form_mortgage_application[prev_address]" id="form_mortgage_application_prev_address"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_prev_unit_apt">Unit/Apt</label>
                            <input className="form-control" type="text" name="form_mortgage_application[prev_unit_apt]" id="form_mortgage_application_prev_unit_apt"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_prev_city">City</label>
                            <input className="form-control" type="text" name="form_mortgage_application[prev_city]" id="form_mortgage_application_prev_city"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_prev_province">Province</label>
                            <input className="form-control" type="text" name="form_mortgage_application[prev_province]" id="form_mortgage_application_prev_province"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_address_status">Status</label>
                            <input className="form-control" type="text" name="form_mortgage_application[address_status]" id="form_mortgage_application_address_status"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_rent">Rent</label>
                            <input className="form-control" type="text" name="form_mortgage_application[rent]" id="form_mortgage_application_rent"/>
                        </div>
                    </div>
                </div>
                <h2>Employment</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_employer_name">Employer Name</label>
                            <input className="form-control" type="text" name="form_mortgage_application[employer_name]" id="form_mortgage_application_employer_name"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_employment_status">Employment Status</label>
                            <input className="form-control" type="text" name="form_mortgage_application[employment_status]" id="form_mortgage_application_employment_status"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_employer_city">City</label>
                            <input className="form-control" type="text" name="form_mortgage_application[employer_city]" id="form_mortgage_application_employer_city"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_phone_work">Work Phone</label>
                            <input className="form-control" type="text" name="form_mortgage_application[phone_work]" id="form_mortgage_application_phone_work"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_job_title">Job Title</label>
                            <input className="form-control" type="text" name="form_mortgage_application[job_title]" id="form_mortgage_application_job_title"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_annual_income">Annual Income</label>
                            <input className="form-control" type="text" name="form_mortgage_application[annual_income]" id="form_mortgage_application_annual_income"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_income_type">Income Type</label>
                            <input className="form-control" type="text" name="form_mortgage_application[income_type]" id="form_mortgage_application_income_type"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_time_job">Time at Job</label>
                            <input className="form-control" type="text" name="form_mortgage_application[time_job]" id="form_mortgage_application_time_job"/>
                        </div>
                    </div>
                </div>
                <h2>Assets</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_savings">Savings</label>
                            <input className="form-control" type="text" name="form_mortgage_application[savings]" id="form_mortgage_application_savings"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_tfsa">TFSA</label>
                            <input className="form-control" type="text" name="form_mortgage_application[tfsa]" id="form_mortgage_application_tfsa"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_rrsp">RRSP</label>
                            <input className="form-control" type="text" name="form_mortgage_application[rrsp]" id="form_mortgage_application_rrsp"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_fund_type">Stocks/Bonds/Mutual Funds</label>
                            <input className="form-control" type="text" name="form_mortgage_application[fund_type]" id="form_mortgage_application_fund_type"/>
                        </div>
                    </div>
                </div>
                <h2>Subject Property</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_subject_occupancy">Occupancy</label>
                            <input className="form-control" type="text" name="form_mortgage_application[subject_occupancy]" id="form_mortgage_application_subject_occupancy"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_subject_address">Address</label>
                            <input className="form-control" type="text" name="form_mortgage_application[subject_address]" id="form_mortgage_application_subject_address"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_subject_unit_apt">Unit/Apt</label>
                            <input className="form-control" type="text" name="form_mortgage_application[subject_unit_apt]" id="form_mortgage_application_subject_unit_apt"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_subject_city">City</label>
                            <input className="form-control" type="text" name="form_mortgage_application[subject_city]" id="form_mortgage_application_subject_city"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_subject_province">Province</label>
                            <input className="form-control" type="text" name="form_mortgage_application[subject_province]" id="form_mortgage_application_subject_province"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_subject_postalcode">Postal Code</label>
                            <input className="form-control" type="text" name="form_mortgage_application[subject_postalcode]" id="form_mortgage_application_subject_postalcode"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_subject_mls">MLS</label>
                            <input className="form-control" type="text" name="form_mortgage_application[subject_mls]" id="form_mortgage_application_subject_mls"/>
                        </div>
                    </div>
                </div>
                <h2>Size</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_living_space">Living Space</label>
                            <input className="form-control" type="text" name="form_mortgage_application[living_space]" id="form_mortgage_application_living_space"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_lot_size">Lot Size (sq ft)</label>
                            <input className="form-control" type="text" name="form_mortgage_application[lot_size]" id="form_mortgage_application_lot_size"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_garage_size">Garage Size</label>
                            <input className="form-control" type="text" name="form_mortgage_application[garage_size]" id="form_mortgage_application_garage_size"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_units">Units</label>
                            <input className="form-control" type="text" name="form_mortgage_application[units]" id="form_mortgage_application_units"/>
                        </div>
                    </div>
                </div>
                <h2>Expenses</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_annual_property_taxes">Annual Property Taxes</label>
                            <input className="form-control" type="text" name="form_mortgage_application[annual_property_taxes]" id="form_mortgage_application_annual_property_taxes"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_condo_maintenance_fees">Condo/Maintenance Fees (monthly)</label>
                            <input className="form-control" type="text" name="form_mortgage_application[condo_maintenance_fees]" id="form_mortgage_application_condo_maintenance_fees"/>
                        </div>
                    </div>
                </div>
                <h2>Loan Info</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_purchase_price">Purchase Price</label>
                            <input className="form-control" type="text" name="form_mortgage_application[purchase_price]" id="form_mortgage_application_purchase_price"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_downpayment_price">Down Payment</label>
                            <input className="form-control" type="text" name="form_mortgage_application[downpayment_price]" id="form_mortgage_application_downpayment_price"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_closing_date">Closing Date</label>
                            <input className="form-control" type="text" name="form_mortgage_application[closing_date]" id="form_mortgage_application_closing_date"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_mortgage_term">Mortgage Term</label>
                            <input className="form-control" type="text" name="form_mortgage_application[mortgage_term]" id="form_mortgage_application_mortgage_term"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_amortization">Amortization</label>
                            <input className="form-control" type="text" name="form_mortgage_application[amortization]" id="form_mortgage_application_amortization"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_loan_type">Loan Type</label>
                            <input className="form-control" type="text" name="form_mortgage_application[loan_type]" id="form_mortgage_application_loan_type"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="form_mortgage_application_loan_amount">Loan Amount</label>
                            <input className="form-control" type="text" name="form_mortgage_application[loan_amount]" id="form_mortgage_application_loan_amount"/>
                        </div>
                    </div>
                </div>
                <div className="actions mb-5">
                    <input type="submit" name="commit" value="Submit Application" className="btn btn-primary float-right" data-disable-with="Submit Application"/>
                </div>
            </div>
        </form>
    );
  }
}

export default FormMyApplication;
