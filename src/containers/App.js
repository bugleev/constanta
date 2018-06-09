import React from "react";
import EmployeeList from "../components/EmployeeList";
import EditMenu from "../components/EditMenu";
import Button from "../components/Button";
import employeeData from "../data";

class App extends React.Component {
  state = {
    employees: [],
    showMenu: false
  };
  componentDidMount() {
    this.setState({ employees: employeeData });
  }
  handleOpenMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };
  handleListChange = newList => {
    this.setState({ employees: newList });
  };
  render() {
    return (
      <div className="layout">
        <div>
          <Button
            type="list-button"
            text={this.state.showMenu ? "Close Menu" : "Open Menu"}
            action={this.handleOpenMenu}
          />
          <EmployeeList data={this.state.employees} />
        </div>
        <EditMenu
          data={this.state.employees}
          show={this.state.showMenu}
          onChange={this.handleListChange}
          scrollable={this.state.employees.length > 5 ? true : false}
        />
      </div>
    );
  }
}

export default App;
