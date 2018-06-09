import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

class EditMenu extends React.PureComponent {
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
    employees.push({ name: "", position: "", id: employees.length + 1 });
    this.props.onChange(employees);
  };
  composeClassnames = () => {
    let classname = "";
    classname += this.props.show ? " open" : "";
    classname += this.props.scrollable ? " scroll" : "";
    return classname;
  };
  render() {
    return (
      <div className={`menu-wrapper${this.composeClassnames()}`}>
        <Button type="menu-button" text="Add item" action={this.addItem} />
        {this.props.data.map(el => (
          <form action="get" onSubmit={this.handleSubmit} key={el.id}>
            <label htmlFor="textarea">
              Employee #
              <span>{el.id}</span>
            </label>
            <input
              type="text"
              value={el.name}
              onChange={e => this.handleTextChange(e, el.id, "name")}
              data-testid="menu-input"
            />
            <textarea
              name="employee-info"
              cols="30"
              rows="5"
              onChange={e => this.handleTextChange(e, el.id)}
              value={el.position}
            />
            <Button
              type="menu-button"
              text={!el.status ? "remove" : "restore"}
              action={e => this.moveItem(e, el.id)}
            />
          </form>
        ))}
      </div>
    );
  }
}
EditMenu.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  show: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  scrollable: PropTypes.bool.isRequired
};

export default EditMenu;
