import React from "react";
import PropTypes from "prop-types";

function EmployeeList(props) {
  return (
    <ul className="employee-ul">
      {props.data.map(
        (el, i) =>
          el.status !== "removed" ? (
            <li className="employee-li" key={i}>
              <span className="employee-name" data-testid="list-text">
                {el.name}
              </span>
              <div className="employee-info">
                <span>{el.position}</span>
              </div>
            </li>
          ) : null
      )}
    </ul>
  );
}
EmployeeList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default EmployeeList;
