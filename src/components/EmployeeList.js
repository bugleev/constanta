import React, { Component } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

export default class EmployeeList extends Component {
  render() {
    return (
      <div>
        <ul className="employee-ul">
          <Button
            type="list-button"
            text={this.props.visibleMenu ? "Close Menu" : "Open Menu"}
            open={this.props.openButton}
          />
          {this.props.data.map(
            el =>
              el.status !== "removed" ? (
                <li className="employee-li">
                  <span className="employee-name">{el.name}</span>
                  <div className="employee-info">
                    <span>{el.position}</span>
                  </div>
                </li>
              ) : null
          )}
        </ul>
        {this.props.children}
      </div>
    );
  }
}
