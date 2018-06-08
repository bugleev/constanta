import React, { Component } from "react";
import PropTypes from "prop-types";

export default class EmployeeList extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <ul className="employee-ul">
          {this.props.data.map(el => (
            <li className="employee-li">
              <span className="employee-name">{el.name}</span>
              <div className="employee-info">
                <span>{el.position}</span>
                <span>{el.experience}</span>
              </div>
            </li>
          ))}
        </ul>
        {this.props.children}
      </div>
    );
  }
}
