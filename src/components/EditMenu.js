import React, { Component } from "react";
import Button from "./Button";

export default class EditMenu extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };
  moveItem = (e, id) => {
    const employees = [...this.props.data];
    for (let el of employees) {
      if (el.id === id) {
        el.status = !el.status ? "removed" : null;
      }
    }
    this.props.onChange(employees);
  };
  handleTextChange = (e, id, fieldName) => {
    const employees = [...this.props.data];
    for (let el of employees) {
      if (el.id === id) {
        fieldName ? (el.name = e.target.value) : (el.position = e.target.value);
      }
    }
    this.props.onChange(employees);
  };
  addItem = () => {
    const employees = [...this.props.data];
    employees.push({ name: "", position: "", id: employees.length + 2 });
    this.props.onChange(employees);
  };
  render() {
    const className = this.props.show ? "open" : "";
    return (
      <div className={`menu-wrapper ${className}`}>
        <Button type="menu-button" text="Add item" add={this.addItem} />
        {this.props.data.map((el, i) => (
          <form action="get" onSubmit={this.handleSubmit}>
            <label htmlFor="textarea">
              Employee #
              <span>{el.id}</span>
            </label>
            <input
              type="text"
              value={el.name}
              onChange={e => this.handleTextChange(e, el.id, "name")}
            />
            <textarea
              name="employee-info"
              id=""
              cols="30"
              rows="5"
              onChange={e => this.handleTextChange(e, el.id)}
              value={el.position}
            />
            <Button
              type="menu-button"
              text={!el.status ? "remove" : "restore"}
              move={e => this.moveItem(e, el.id)}
            />
          </form>
        ))}
      </div>
    );
  }
}
