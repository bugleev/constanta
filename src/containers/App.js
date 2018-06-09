import React from "react";
import EmployeeList from "../components/EmployeeList";
import EditMenu from "../components/EditMenu";
import generateEmployees from "../helpers/generateEmployees";
import "../App.css";

class App extends React.Component {
  state = {
    employees: [],
    currentList: [],
    showMenu: false
  };
  componentDidMount() {
    const data = generateEmployees(3);
    this.setState({ employees: data, currentList: data });
  }
  handleOpenMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };
  handleListChange = newList => {
    this.setState({ currentList: newList });
  };
  render() {
    return (
      <div className="layout">
        <EmployeeList
          visibleMenu={this.state.showMenu}
          data={this.state.currentList}
          openButton={this.handleOpenMenu}
        />
        <EditMenu
          data={this.state.currentList}
          show={this.state.showMenu}
          onChange={this.handleListChange}
        />
      </div>
    );
  }
}

export default App;
