import React from "react";
import EmployeeList from "../components/EmployeeList";
import ListButton from "../components/ListButton";
import ListEdit from "../components/ListEdit";
import generateEmployees from "../helpers/generateEmployees";
import "../App.css";

class App extends React.Component {
  state = {
    employees: []
  };
  componentDidMount() {
    this.setState({ employees: generateEmployees(6) });
  }
  render() {
    console.log(this.state.employees);
    return (
      <React.Fragment>
        <EmployeeList data={this.state.employees}>
          <ListButton />
        </EmployeeList>
        <ListEdit />
      </React.Fragment>
    );
  }
}

export default App;
