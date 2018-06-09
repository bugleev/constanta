import React from "react";
import EmployeeList from "../components/EmployeeList";
import EditMenu from "../components/EditMenu";
import Button from "../components/Button";
import generateEmployees from "../helpers/generateEmployees";

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
        <div>
          <Button
            type="list-button"
            text={this.state.showMenu ? "Close Menu" : "Open Menu"}
            action={this.handleOpenMenu}
          />
          <EmployeeList data={this.state.currentList} />
        </div>
        <EditMenu
          data={this.state.currentList}
          show={this.state.showMenu}
          onChange={this.handleListChange}
          scrollable={this.state.currentList.length > 5 ? true : false}
        />
      </div>
    );
  }
}

export default App;
