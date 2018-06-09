import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.text !== nextProps.text) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    const className =
      this.props.type === "list-button"
        ? "button-wrapper__list"
        : "button-wrapper__menu";
    return (
      <div className={className}>
        <button className="list-button" onClick={this.props.action}>
          {this.props.text}
        </button>
      </div>
    );
  }
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func
};
export default Button;
